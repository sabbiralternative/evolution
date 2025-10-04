import { useEffect, useState } from "react";
import { Status } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../redux/features/events/events";
import { setBalance } from "../../../redux/features/auth/authSlice";
import Stake from "../../../component/UI/Chip/Stake";
import { getBackPrice, isRunnerWinner } from "../../../utils/betSlip";
import StakeAnimation from "../../../component/UI/Chip/StakeAnimation";
import { cn } from "../../../utils/cn";
import images from "../../../assets/images";
import History from "./History";
import { playSuspendedSound } from "../../../utils/sound";
import { useSound } from "../../../context/ApiProvider";
import { useParams } from "react-router-dom";
import { handleStoreRecentPlay } from "../../../utils/handleStorateRecentPlay";

const BetSlip = ({
  double,
  data,
  status,
  setStakeState,
  stakeState,
  setTotalWinAmount,
  setShowWinLossResult,
  animation,
  setAnimation,
  initialState,
  height,
  width,
  transform,
}) => {
  const { eventId } = useParams();
  const { sound } = useSound();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const dispatch = useDispatch();
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);
  const { balance, username } = useSelector((state) => state.auth);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    if (status === Status.OPEN) {
      handleStoreRecentPlay(username, eventId, "football-dice");
      const isRepeatTheBet = Object.values(stakeState).find(
        (item) => item?.selection_id && item?.show === false
      );
      if (isRepeatTheBet) {
        setStakeState(initialState);
      }
      // new Audio("/bet.mp3").play();
      const { key, data, dataIndex, runnerIndex, type } = payload;
      setAnimation([key]);
      const formatData = {
        marketId: data?.[dataIndex]?.marketId,
        roundId: data?.[dataIndex]?.roundId,
        name: data?.[dataIndex]?.name,
        eventId: data?.[dataIndex]?.eventId,
        eventName: data?.[dataIndex]?.eventName,
        selection_id: data?.[dataIndex]?.runners?.[runnerIndex]?.id,
        runner_name: data?.[dataIndex]?.runners?.[runnerIndex]?.name,
        isback: type === "back" ? 0 : 1,
        event_id: data?.[dataIndex]?.eventId,
        event_type_id: data?.[dataIndex]?.event_type_id,
        price: data?.[dataIndex]?.runners?.[runnerIndex]?.[type]?.[0]?.price,
      };
      const timeout = setTimeout(() => {
        setAnimation([]);
        setStakeState((prev) => {
          const maxSerial = Math.max(
            0,
            ...Object.values(prev)
              .map((item) => item.serial)
              .filter((serial) => serial !== undefined)
          );

          return {
            ...prev,
            [key]: {
              roundId: formatData?.roundId,
              name: formatData?.name,
              eventId: formatData?.eventId,
              eventName: formatData?.eventName,
              show: true,
              animation: false,
              stake: prev[key].show
                ? prev[key].stake + prev[key].actionBy
                : prev[key].stake,
              marketId: formatData?.marketId,
              selection_id: formatData?.selection_id,
              price: formatData?.price,
              runner_name: formatData?.runner_name,
              isback: formatData?.isback,
              serial: prev[key]?.serial ? prev[key]?.serial : maxSerial + 1,
              actionBy: stake,
              undo: [...(prev[key]?.undo || []), stake],
            },
          };
        });
      }, 500);

      return () => clearTimeout(timeout);
    }
  };

  // Reset state when status is OPEN
  useEffect(() => {
    if (status === Status.OPEN) {
      setStakeState((prev) => {
        const updatedState = { ...prev };
        Object.keys(updatedState).forEach((key) => {
          if (updatedState[key].show) {
            updatedState[key] = {
              ...updatedState[key],
              show: false,
            };
          }
        });
        return updatedState;
      });
    }
    if (showSuspendedWarning) {
      setTimeout(() => {
        setShowSuspendedWarning(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, showSuspendedWarning]);

  useEffect(() => {
    setStakeState((prev) => {
      const updatedState = {};
      for (const key in prev) {
        updatedState[key] = {
          ...prev[key],
          stake: prev[key].show ? prev[key].stake : stake,
          actionBy: stake,
        };
      }
      return updatedState;
    });
  }, [stake]); // Runs when stake value changes

  useEffect(() => {
    const filterPlacedBet = Object.values(stakeState).filter((bet) => bet.show);
    let payload = filterPlacedBet.map((bet) => ({
      roundId: bet?.roundId,
      name: bet?.name,
      eventId: bet?.eventId,
      eventName: bet?.eventName,
      marketId: bet?.marketId,
      selection_id: bet?.selection_id,
      runner_name: bet?.runner_name,
      stake: bet?.stake,
      isback: bet?.isback,
      price: bet?.price,
    }));

    if (status === Status.SUSPENDED && payload?.length > 0) {
      const handleOrder = async () => {
        const res = await addOrder(payload).unwrap();

        payload = [];
        if (res?.success) {
          setShowWinLossResult(false);
          setTotalWinAmount(null);

          let totalBets = [];
          let totalAmountPlaced = 0;

          for (let bet of filterPlacedBet) {
            totalAmountPlaced = totalAmountPlaced + bet?.stake;
            totalBets.push({
              selection_id: bet.selection_id,
              price: bet?.price,
              eventId: bet?.eventId,
              marketId: bet?.marketId,
              name: bet?.name,
              stake: bet?.stake,
            });
          }

          localStorage.setItem("totalBetPlace", JSON.stringify(totalBets));

          dispatch(setBalance(balance - parseFloat(totalAmountPlaced)));
          // setToast(res?.Message);
        }
      };
      handleOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addOrder, status]);

  const handleShowSuspendedStatus = () => {
    if (status === Status.SUSPENDED) {
      if (sound) {
        playSuspendedSound();
      }
      setShowSuspendedWarning(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="layout--36a3c mobileI11Portrait--f6091 withChipStack--976d3"
      data-role="game-mobile-layout"
    >
      <div
        className="betSpotsWrapper--d94fd portrait--54cb7"
        style={{
          "-homehueshift": "0deg",
          "-homesaturationshift": 0,
          "-homebrightnessshift": 0,
          "-drawhueshift": "0deg",
          "-drawsaturationshift": 0,
          "-drawbrightnessshift": 0,
          "-awayhueshift": "0deg",
          "-awaysaturationshift": 0,
          "-awaybrightnessshift": 0,
          "-diceresultaspectratio": "27%",
        }}
      >
        <div
          className={`betSpotsBackground--c37bf  betSpotsBackground--53b7c mobileI11Portrait--fd431 ${
            status === Status.SUSPENDED ? "" : "hidden--145cf"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 402 260"
            className="svg--fd734"
          >
            <path
              fill="url(#25)"
              d="M402 260V16c0-8.837-7.163-16-16-16H16C7.163 0 0 7.163 0 16v244h402Z"
            />
            <defs>
              <linearGradient
                id={25}
                x1={0}
                x2={402}
                y1="81.5"
                y2="81.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ff0000" stopOpacity="0.2" />
                <stop offset={1} stopColor="#2b71fd" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          className={`diceResultsDesktopOrPortrait--5f385 diceResults--a3b29 ${
            status === Status.SUSPENDED ? "" : "hidden--145cf"
          }`}
          style={{ "-width": "417.0999999999999px", paddingBottom: "150px" }}
        >
          <div
            style={{ display: status === Status.SUSPENDED ? "block" : "none" }}
          >
            <div className="label--75902">
              <img
                className="labelWings--e0675"
                src="/src/assets/images/wings.23bd7456.svg"
                alt="labelWings"
              />
              <div className="labelBoxWrapper--40501">
                <img
                  className="labelBox--ee5d3"
                  src="/src/assets/images/box.96924984.svg"
                  alt="labelBox"
                />
                <img
                  className="labelAppearingBackground--15724"
                  src="/src/assets/images/appearingb.4aae6f5a.webp"
                  alt="appearingBackground"
                />
                <span className="labelHalf--37006 isPhone--23289">
                  1st HALF
                </span>
              </div>
            </div>
            <div
              className="diceResultsContent--3cb19"
              style={{ paddingBottom: "40px" }}
            >
              <div
                className="logo--cf68a home--275bb home--52835"
                style={{ "-animationduration": "3000ms" }}
              >
                <img
                  className="image--ea239"
                  src="/src/assets/images/home.d1cf9704.svg"
                  alt="Home"
                />
                <img
                  className="imageStars--a52bf"
                  src="/src/assets/images/homestars.e6d8acd4.svg"
                  alt="Home"
                />
                <img
                  className="star--4773d star--42b8e home--275bb delay--46062"
                  src="/src/assets/images/star.f288156a.svg"
                  alt="Star"
                />
                <div className="blink--4e80f home--275bb" />
              </div>
              <div className="score--cf0da">
                <div
                  className="score--c7b07 home--0ced2"
                  data-role="Home-side-dice-value"
                  data-value={0}
                  style={{
                    "-score": 0,
                    "-numbersscrollanimationduration": "1400ms",
                  }}
                >
                  <div className="scoreNumber--56c93">0</div>
                  <div className="scoreNumber--56c93">1</div>
                  <div className="scoreNumber--56c93">2</div>
                  <div className="scoreNumber--56c93">3</div>
                  <div className="scoreNumber--56c93">4</div>
                  <div className="scoreNumber--56c93">5</div>
                  <div className="scoreNumber--56c93">6</div>
                  <div className="scoreNumber--56c93">7</div>
                  <div className="scoreNumber--56c93">8</div>
                  <div className="scoreNumber--56c93">9</div>
                  <div className="scoreNumber--56c93">10</div>
                  <div className="scoreNumber--56c93">11</div>
                  <div className="scoreNumber--56c93">12</div>
                </div>
                <span className="scoreDash--f58b7" />
                <div
                  className="score--c7b07 away--6bf9d"
                  data-role="Away-side-dice-value"
                  data-value={0}
                  style={{
                    "-score": 0,
                    "-numbersscrollanimationduration": "1400ms",
                  }}
                >
                  <div className="scoreNumber--56c93">0</div>
                  <div className="scoreNumber--56c93">1</div>
                  <div className="scoreNumber--56c93">2</div>
                  <div className="scoreNumber--56c93">3</div>
                  <div className="scoreNumber--56c93">4</div>
                  <div className="scoreNumber--56c93">5</div>
                  <div className="scoreNumber--56c93">6</div>
                  <div className="scoreNumber--56c93">7</div>
                  <div className="scoreNumber--56c93">8</div>
                  <div className="scoreNumber--56c93">9</div>
                  <div className="scoreNumber--56c93">10</div>
                  <div className="scoreNumber--56c93">11</div>
                  <div className="scoreNumber--56c93">12</div>
                </div>
              </div>
              <div
                className="logo--cf68a away--c9f1c away--e1ae8"
                style={{ "-animationduration": "3000ms" }}
              >
                <img
                  className="image--ea239"
                  src="/src/assets/images/away.19be3c74.svg"
                  alt="Away"
                />
                <img
                  className="imageStars--a52bf"
                  src="/src/assets/images/awaystars.02f46232.svg"
                  alt="Away"
                />
                <img
                  className="star--4773d star--42b8e away--c9f1c delay--46062"
                  src="/src/assets/images/star.f288156a.svg"
                  alt="Star"
                />
                <div className="blink--4e80f away--c9f1c" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="betSpotsContainer--862c3"
          style={{ width: "417.1px", height: "156.672px" }}
        >
          <div
            data-role="topdice-betting-grid"
            className="betSpots--236fd betSpots--4ee72"
            style={{ transform: "scale3d(1.03756, 1.03756, 1.03756)" }}
          >
            <div
              className="betSpot--af45c home--d9555 isSafari--8226a"
              data-role="topdice-bet-spot-Home"
              style={{ width: "198px", height: "200px" }}
            >
              <div className="svgContainer--c2d3d genericBranding--108c5">
                <div className="dynamicHalf--43a9f" style={{ height: "111px" }}>
                  <svg
                    width={198}
                    height={200}
                    viewBox="0 0 198 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg--195b8"
                  >
                    <defs>
                      <linearGradient
                        id="svg-background-main-color-Home-26"
                        x1={0}
                        y1="109.11"
                        x2="162.2"
                        y2="110.75"
                        gradientUnits="userSpaceOnUse"
                        className="stopColorTransition--40a30"
                      >
                        <stop stopColor="#5C0E0E" />
                        <stop offset="0.4" stopColor="#B52929" />
                        <stop offset={1} stopColor="#5C0E0E" />
                      </linearGradient>
                      <radialGradient
                        id="svg-background-top-light-Home-26"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(137) rotate(-180) scale(137 56.94)"
                      >
                        <stop stopColor="#FF4E4E" />
                        <stop offset={1} stopColor="#D13434" stopOpacity={0} />
                      </radialGradient>
                      <linearGradient
                        id="svg-background-bottom-shadow-Home-26"
                        x1="95.95"
                        y1="198.38"
                        x2="93.31"
                        y2="236.77"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopOpacity={0} />
                        <stop offset={1} />
                      </linearGradient>
                      <linearGradient
                        id="svg-background-border-Home-26"
                        x1={121}
                        y1={0}
                        x2={121}
                        y2={240}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E45F5F" />
                        <stop offset="0.25" stopColor="#BA2D2D" />
                        <stop offset="0.77" stopColor="#BA2D2D" />
                        <stop offset={1} stopColor="#500D0D" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M131.5.5V159C131.5 196.21 160.742 226.59 197.5 228.413V239.498C139.466 239.246 59.5797 232.877 21.6751 229.554 9.6312 228.498.5 218.399.5 206.301V24.0014C.5 11.0226 11.0112.5016 23.9895.5014 48.9657.501 90.1499.5004 131.5.5Z"
                      fill="url(#svg-background-main-color-Home-26)"
                    />
                    <path
                      d="M131.5.5V159C131.5 196.21 160.742 226.59 197.5 228.413V239.498C139.466 239.246 59.5797 232.877 21.6751 229.554 9.6312 228.498.5 218.399.5 206.301V24.0014C.5 11.0226 11.0112.5016 23.9895.5014 48.9657.501 90.1499.5004 131.5.5Z"
                      fill="url(#svg-background-top-light-Home-26)"
                      fillOpacity={1}
                      className="fillOpacityTransition--260af"
                    />
                    <path
                      d="M131.5.5V159C131.5 196.21 160.742 226.59 197.5 228.413V239.498C139.466 239.246 59.5797 232.877 21.6751 229.554 9.6312 228.498.5 218.399.5 206.301V24.0014C.5 11.0226 11.0112.5016 23.9895.5014 48.9657.501 90.1499.5004 131.5.5Z"
                      fill="url(#svg-background-bottom-shadow-Home-26)"
                      fillOpacity="0.46"
                      className="fillOpacityTransition--260af"
                    />
                    <path
                      d="M131.5.5V159C131.5 196.21 160.742 226.59 197.5 228.413V239.498C139.466 239.246 59.5797 232.877 21.6751 229.554 9.6312 228.498.5 218.399.5 206.301V24.0014C.5 11.0226 11.0112.5016 23.9895.5014 48.9657.501 90.1499.5004 131.5.5Z"
                      stroke="url(#svg-background-border-Home-26)"
                    />
                  </svg>
                </div>
                <svg
                  width={198}
                  height={91}
                  viewBox="0 149 198 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg--195b8 withIndent--6a9bb"
                >
                  <defs>
                    <linearGradient
                      id="svg-background-main-color-Home-27"
                      x1={0}
                      y1="109.11"
                      x2="162.2"
                      y2="110.75"
                      gradientUnits="userSpaceOnUse"
                      className="stopColorTransition--40a30"
                    >
                      <stop stopColor="#5C0E0E" />
                      <stop offset="0.4" stopColor="#B52929" />
                      <stop offset={1} stopColor="#5C0E0E" />
                    </linearGradient>
                    <radialGradient
                      id="svg-background-top-light-Home-27"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(137) rotate(-180) scale(137 56.94)"
                    >
                      <stop stopColor="#FF4E4E" />
                      <stop offset={1} stopColor="#D13434" stopOpacity={0} />
                    </radialGradient>
                    <linearGradient
                      id="svg-background-bottom-shadow-Home-27"
                      x1="95.95"
                      y1="198.38"
                      x2="93.31"
                      y2="236.77"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopOpacity={0} />
                      <stop offset={1} />
                    </linearGradient>
                    <linearGradient
                      id="svg-background-border-Home-27"
                      x1={121}
                      y1={0}
                      x2={121}
                      y2={240}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E45F5F" />
                      <stop offset="0.25" stopColor="#BA2D2D" />
                      <stop offset="0.77" stopColor="#BA2D2D" />
                      <stop offset={1} stopColor="#500D0D" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M131.5.5V159C131.5 196.21 160.742 226.59 197.5 228.413V239.498C139.466 239.246 59.5797 232.877 21.6751 229.554 9.6312 228.498.5 218.399.5 206.301V24.0014C.5 11.0226 11.0112.5016 23.9895.5014 48.9657.501 90.1499.5004 131.5.5Z"
                    fill="url(#svg-background-main-color-Home-27)"
                  />
                  <path
                    d="M131.5.5V159C131.5 196.21 160.742 226.59 197.5 228.413V239.498C139.466 239.246 59.5797 232.877 21.6751 229.554 9.6312 228.498.5 218.399.5 206.301V24.0014C.5 11.0226 11.0112.5016 23.9895.5014 48.9657.501 90.1499.5004 131.5.5Z"
                    fill="url(#svg-background-top-light-Home-27)"
                    fillOpacity={1}
                    className="fillOpacityTransition--260af"
                  />
                  <path
                    d="M131.5.5V159C131.5 196.21 160.742 226.59 197.5 228.413V239.498C139.466 239.246 59.5797 232.877 21.6751 229.554 9.6312 228.498.5 218.399.5 206.301V24.0014C.5 11.0226 11.0112.5016 23.9895.5014 48.9657.501 90.1499.5004 131.5.5Z"
                    fill="url(#svg-background-bottom-shadow-Home-27)"
                    fillOpacity="0.46"
                    className="fillOpacityTransition--260af"
                  />
                  <path
                    d="M131.5.5V159C131.5 196.21 160.742 226.59 197.5 228.413V239.498C139.466 239.246 59.5797 232.877 21.6751 229.554 9.6312 228.498.5 218.399.5 206.301V24.0014C.5 11.0226 11.0112.5016 23.9895.5014 48.9657.501 90.1499.5004 131.5.5Z"
                    stroke="url(#svg-background-border-Home-27)"
                  />
                </svg>
              </div>
              <div
                className="content--b917f genericBranding--108c5 home--425c4 contentWrapper--ca194"
                style={{ height: "200px" }}
              >
                <div className="betStat--5160e">
                  <svg
                    className="svg--9cf90 svg--79fa0"
                    width={54}
                    height={54}
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <filter
                        id="svg-bet-stat-inner-shadow-Home-28"
                        x={0}
                        y={0}
                        width={54}
                        height={54}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4.69565" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2={-1}
                          k3={1}
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="innerShadow"
                        />
                      </filter>
                      <linearGradient
                        id="svg-bet-stat-filling-level-Home-28"
                        x1={27}
                        y1={54}
                        x2={27}
                        y2={29}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF5858" />
                        <stop offset={1} stopColor="#AB2121" />
                      </linearGradient>
                      <linearGradient
                        id="svg-bet-stat-border-Home-28"
                        x1="6.075"
                        y1="5.4"
                        x2="44.55"
                        y2="50.625"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#D35353" />
                        <stop offset="0.359375" stopColor="#C03535" />
                        <stop offset="0.807292" stopColor="#D74848" />
                      </linearGradient>
                    </defs>
                    <mask
                      id="svg-bet-stat-filling-mask-Home-28"
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={54}
                      height={54}
                      style={{ maskType: "alpha" }}
                    >
                      <circle cx={27} cy={27} r={27} fill="black" />
                    </mask>
                    <g mask="url(#svg-bet-stat-filling-mask-Home-28)">
                      <rect
                        x={0}
                        y="7.020000000000003"
                        width={54}
                        height="46.98"
                        fill="url(#svg-bet-stat-filling-level-Home-28)"
                        className="smooth--90e75"
                      />
                    </g>
                    <g filter="url(#svg-bet-stat-inner-shadow-Home-28)">
                      <circle
                        cx={27}
                        cy={27}
                        r={27}
                        fill="black"
                        fillOpacity="0.05"
                      />
                    </g>
                    <circle
                      cx={27}
                      cy={27}
                      r="26.5"
                      stroke="url(#svg-bet-stat-border-Home-28)"
                    />
                  </svg>
                  <div className="percent--7d4e8 percent--e530b">
                    87<span>%</span>
                  </div>
                </div>
                <div className="coefficient--33e5e">1:1</div>
                <div className="name--fcb73">HOME</div>
              </div>
              <div
                className="chipContainer--b983a home--8fc8f"
                data-role="winning-chip-is-false"
              />
            </div>
            <div
              className="betSpot--af45c draw--36308 isSafari--8226a"
              data-role="topdice-bet-spot-Draw"
              style={{ width: "128px", height: "183px" }}
            >
              <div className="svgContainer--c2d3d genericBranding--108c5">
                <div className="dynamicHalf--43a9f" style={{ height: "111px" }}>
                  <svg
                    width={128}
                    height={183}
                    viewBox="0 0 128 183"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg--195b8"
                  >
                    <defs>
                      <linearGradient
                        id="svg-background-main-color-Draw-29"
                        x1={0}
                        y1="78.34"
                        x2={128}
                        y2="77.55"
                        gradientUnits="userSpaceOnUse"
                        className="stopColorTransition--40a30"
                      >
                        <stop stopColor="#615236" />
                        <stop offset="0.5" stopColor="#897650" />
                        <stop offset={1} stopColor="#615236" />
                      </linearGradient>
                      <radialGradient
                        id="svg-background-top-light-Draw-29"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(64.37) rotate(90) scale(57 468.86)"
                      >
                        <stop stopColor="#F3E5C7" />
                        <stop offset={1} stopColor="#F3E5C7" stopOpacity={0} />
                      </radialGradient>
                      <linearGradient
                        id="svg-background-border-Draw-29"
                        x1={64}
                        y1={0}
                        x2={64}
                        y2={223}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#928262" />
                        <stop offset="0.1" stopColor="#CEBE9B" />
                        <stop offset="0.25" stopColor="#9E8C66" />
                        <stop offset="0.77" stopColor="#9E8C66" />
                        <stop offset={1} stopColor="#67583B" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M.5.5H127.5V159C127.5 194.07 99.0701 222.5 64 222.5 28.9299 222.5.5 194.07.5 159V.5Z"
                      fill="url(#svg-background-main-color-Draw-29)"
                    />
                    <path
                      d="M.5.5H127.5V159C127.5 194.07 99.0701 222.5 64 222.5 28.9299 222.5.5 194.07.5 159V.5Z"
                      fill="url(#svg-background-top-light-Draw-29)"
                      fillOpacity="0.25"
                      className="fillOpacityTransition--260af"
                    />
                    <path
                      d="M.5.5H127.5V159C127.5 194.07 99.0701 222.5 64 222.5 28.9299 222.5.5 194.07.5 159V.5Z"
                      stroke="url(#svg-background-border-Draw-29)"
                    />
                  </svg>
                </div>
                <svg
                  width={128}
                  height={74}
                  viewBox="0 149 128 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg--195b8 withIndent--6a9bb"
                >
                  <defs>
                    <linearGradient
                      id="svg-background-main-color-Draw-30"
                      x1={0}
                      y1="78.34"
                      x2={128}
                      y2="77.55"
                      gradientUnits="userSpaceOnUse"
                      className="stopColorTransition--40a30"
                    >
                      <stop stopColor="#615236" />
                      <stop offset="0.5" stopColor="#897650" />
                      <stop offset={1} stopColor="#615236" />
                    </linearGradient>
                    <radialGradient
                      id="svg-background-top-light-Draw-30"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(64.37) rotate(90) scale(57 468.86)"
                    >
                      <stop stopColor="#F3E5C7" />
                      <stop offset={1} stopColor="#F3E5C7" stopOpacity={0} />
                    </radialGradient>
                    <linearGradient
                      id="svg-background-border-Draw-30"
                      x1={64}
                      y1={0}
                      x2={64}
                      y2={223}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#928262" />
                      <stop offset="0.1" stopColor="#CEBE9B" />
                      <stop offset="0.25" stopColor="#9E8C66" />
                      <stop offset="0.77" stopColor="#9E8C66" />
                      <stop offset={1} stopColor="#67583B" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M.5.5H127.5V159C127.5 194.07 99.0701 222.5 64 222.5 28.9299 222.5.5 194.07.5 159V.5Z"
                    fill="url(#svg-background-main-color-Draw-30)"
                  />
                  <path
                    d="M.5.5H127.5V159C127.5 194.07 99.0701 222.5 64 222.5 28.9299 222.5.5 194.07.5 159V.5Z"
                    fill="url(#svg-background-top-light-Draw-30)"
                    fillOpacity="0.25"
                    className="fillOpacityTransition--260af"
                  />
                  <path
                    d="M.5.5H127.5V159C127.5 194.07 99.0701 222.5 64 222.5 28.9299 222.5.5 194.07.5 159V.5Z"
                    stroke="url(#svg-background-border-Draw-30)"
                  />
                </svg>
              </div>
              <div
                className="content--b917f genericBranding--108c5 draw--b5e48 contentWrapper--ca194"
                style={{ height: "183px" }}
              >
                <div className="betStat--5160e">
                  <svg
                    className="svg--9cf90 svg--79fa0"
                    width={54}
                    height={54}
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <filter
                        id="svg-bet-stat-inner-shadow-Draw-31"
                        x={0}
                        y={0}
                        width={54}
                        height={54}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4.69565" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2={-1}
                          k3={1}
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="innerShadow"
                        />
                      </filter>
                      <linearGradient
                        id="svg-bet-stat-filling-level-Draw-31"
                        x1={27}
                        y1={54}
                        x2={27}
                        y2={29}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E0CAA0" />
                        <stop offset={1} stopColor="#A78F60" />
                      </linearGradient>
                      <linearGradient
                        id="svg-bet-stat-border-Draw-31"
                        x1="6.075"
                        y1="5.4"
                        x2="44.55"
                        y2="50.625"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#D0BC96" />
                        <stop offset="0.359375" stopColor="#AC9872" />
                        <stop offset="0.807292" stopColor="#AC9872" />
                      </linearGradient>
                    </defs>
                    <mask
                      id="svg-bet-stat-filling-mask-Draw-31"
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={54}
                      height={54}
                      style={{ maskType: "alpha" }}
                    >
                      <circle cx={27} cy={27} r={27} fill="black" />
                    </mask>
                    <g mask="url(#svg-bet-stat-filling-mask-Draw-31)">
                      <rect
                        x={0}
                        y="53.46"
                        width={54}
                        height="0.54"
                        fill="url(#svg-bet-stat-filling-level-Draw-31)"
                        className="smooth--90e75"
                      />
                    </g>
                    <g filter="url(#svg-bet-stat-inner-shadow-Draw-31)">
                      <circle
                        cx={27}
                        cy={27}
                        r={27}
                        fill="black"
                        fillOpacity="0.05"
                      />
                    </g>
                    <circle
                      cx={27}
                      cy={27}
                      r="26.5"
                      stroke="url(#svg-bet-stat-border-Draw-31)"
                    />
                  </svg>
                  <div className="percent--7d4e8 percent--e530b">
                    1<span>%</span>
                  </div>
                </div>
                <div
                  data-role="payouts"
                  className="payouts--26297"
                  style={{ "-animationduration": "5027.76ms" }}
                >
                  <div className="payout--761fb">
                    <span>12</span>
                    <div className="dottedLine--245f6">
                      . . . . . . . . . . . . . . . .
                    </div>
                    <span>80x</span>
                  </div>
                  <div className="payout--761fb">
                    <span>2-11</span>
                    <div className="dottedLine--245f6">
                      . . . . . . . . . . . . . . . .
                    </div>
                    <span>8x</span>
                  </div>
                </div>
                <div className="name--fcb73">DRAW</div>
              </div>
              <div
                className="chipContainer--b983a draw--f63ba"
                data-role="winning-chip-is-false"
              />
            </div>
            <div
              className="betSpot--af45c away--00039 isSafari--8226a"
              data-role="topdice-bet-spot-Away"
              style={{ width: "198px", height: "200px" }}
            >
              <div className="svgContainer--c2d3d genericBranding--108c5">
                <div className="dynamicHalf--43a9f" style={{ height: "111px" }}>
                  <svg
                    width={198}
                    height={200}
                    viewBox="0 0 198 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg--195b8"
                  >
                    <defs>
                      <linearGradient
                        id="svg-background-main-color-Away-32"
                        x1="10.7"
                        y1="109.2"
                        x2={198}
                        y2="108.1"
                        gradientUnits="userSpaceOnUse"
                        className="stopColorTransition--40a30"
                      >
                        <stop stopColor="#0E375C" />
                        <stop offset="0.62" stopColor="#1F5DD6" />
                        <stop offset={1} stopColor="#0E375C" />
                      </linearGradient>
                      <radialGradient
                        id="svg-background-top-light-Away-32"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(60.92) scale(137 56.93)"
                      >
                        <stop stopColor="#558FFF" />
                        <stop offset={1} stopColor="#3F80FD" stopOpacity={0} />
                      </radialGradient>
                      <linearGradient
                        id="svg-background-bottom-shadow-Away-32"
                        x1="95.45"
                        y1="201.1"
                        x2="99.04"
                        y2={240}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopOpacity={0} />
                        <stop offset={1} />
                      </linearGradient>
                      <linearGradient
                        id="svg-background-border-Away-32"
                        x1={121}
                        y1={0}
                        x2={121}
                        y2={240}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3F80FF" />
                        <stop offset="0.25" stopColor="#2F7CD7" />
                        <stop offset="0.77" stopColor="#2F7CD7" />
                        <stop offset={1} stopColor="#0A2F63" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M66.5 158.999V.5C107.85.5004 149.034.501 174.011.5014 186.989.5016 197.5 11.0225 197.5 24.0013V206.301C197.5 218.399 188.369 228.498 176.325 229.554 138.42 232.877 58.534 239.246.5 239.498V228.413C37.2578 226.589 66.5 196.21 66.5 158.999Z"
                      fill="url(#svg-background-main-color-Away-32)"
                    />
                    <path
                      d="M66.5 158.999V.5C107.85.5004 149.034.501 174.011.5014 186.989.5016 197.5 11.0225 197.5 24.0013V206.301C197.5 218.399 188.369 228.498 176.325 229.554 138.42 232.877 58.534 239.246.5 239.498V228.413C37.2578 226.589 66.5 196.21 66.5 158.999Z"
                      fill="url(#svg-background-top-light-Away-32)"
                      fillOpacity={1}
                      className="fillOpacityTransition--260af"
                    />
                    <path
                      d="M66.5 158.999V.5C107.85.5004 149.034.501 174.011.5014 186.989.5016 197.5 11.0225 197.5 24.0013V206.301C197.5 218.399 188.369 228.498 176.325 229.554 138.42 232.877 58.534 239.246.5 239.498V228.413C37.2578 226.589 66.5 196.21 66.5 158.999Z"
                      fill="url(#svg-background-bottom-shadow-Away-32)"
                      fillOpacity="0.46"
                      className="fillOpacityTransition--260af"
                    />
                    <path
                      d="M66.5 158.999V.5C107.85.5004 149.034.501 174.011.5014 186.989.5016 197.5 11.0225 197.5 24.0013V206.301C197.5 218.399 188.369 228.498 176.325 229.554 138.42 232.877 58.534 239.246.5 239.498V228.413C37.2578 226.589 66.5 196.21 66.5 158.999Z"
                      stroke="url(#svg-background-border-Away-32)"
                    />
                  </svg>
                </div>
                <svg
                  width={198}
                  height={91}
                  viewBox="0 149 198 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg--195b8 withIndent--6a9bb"
                >
                  <defs>
                    <linearGradient
                      id="svg-background-main-color-Away-33"
                      x1="10.7"
                      y1="109.2"
                      x2={198}
                      y2="108.1"
                      gradientUnits="userSpaceOnUse"
                      className="stopColorTransition--40a30"
                    >
                      <stop stopColor="#0E375C" />
                      <stop offset="0.62" stopColor="#1F5DD6" />
                      <stop offset={1} stopColor="#0E375C" />
                    </linearGradient>
                    <radialGradient
                      id="svg-background-top-light-Away-33"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(60.92) scale(137 56.93)"
                    >
                      <stop stopColor="#558FFF" />
                      <stop offset={1} stopColor="#3F80FD" stopOpacity={0} />
                    </radialGradient>
                    <linearGradient
                      id="svg-background-bottom-shadow-Away-33"
                      x1="95.45"
                      y1="201.1"
                      x2="99.04"
                      y2={240}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopOpacity={0} />
                      <stop offset={1} />
                    </linearGradient>
                    <linearGradient
                      id="svg-background-border-Away-33"
                      x1={121}
                      y1={0}
                      x2={121}
                      y2={240}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3F80FF" />
                      <stop offset="0.25" stopColor="#2F7CD7" />
                      <stop offset="0.77" stopColor="#2F7CD7" />
                      <stop offset={1} stopColor="#0A2F63" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M66.5 158.999V.5C107.85.5004 149.034.501 174.011.5014 186.989.5016 197.5 11.0225 197.5 24.0013V206.301C197.5 218.399 188.369 228.498 176.325 229.554 138.42 232.877 58.534 239.246.5 239.498V228.413C37.2578 226.589 66.5 196.21 66.5 158.999Z"
                    fill="url(#svg-background-main-color-Away-33)"
                  />
                  <path
                    d="M66.5 158.999V.5C107.85.5004 149.034.501 174.011.5014 186.989.5016 197.5 11.0225 197.5 24.0013V206.301C197.5 218.399 188.369 228.498 176.325 229.554 138.42 232.877 58.534 239.246.5 239.498V228.413C37.2578 226.589 66.5 196.21 66.5 158.999Z"
                    fill="url(#svg-background-top-light-Away-33)"
                    fillOpacity={1}
                    className="fillOpacityTransition--260af"
                  />
                  <path
                    d="M66.5 158.999V.5C107.85.5004 149.034.501 174.011.5014 186.989.5016 197.5 11.0225 197.5 24.0013V206.301C197.5 218.399 188.369 228.498 176.325 229.554 138.42 232.877 58.534 239.246.5 239.498V228.413C37.2578 226.589 66.5 196.21 66.5 158.999Z"
                    fill="url(#svg-background-bottom-shadow-Away-33)"
                    fillOpacity="0.46"
                    className="fillOpacityTransition--260af"
                  />
                  <path
                    d="M66.5 158.999V.5C107.85.5004 149.034.501 174.011.5014 186.989.5016 197.5 11.0225 197.5 24.0013V206.301C197.5 218.399 188.369 228.498 176.325 229.554 138.42 232.877 58.534 239.246.5 239.498V228.413C37.2578 226.589 66.5 196.21 66.5 158.999Z"
                    stroke="url(#svg-background-border-Away-33)"
                  />
                </svg>
              </div>
              <div
                className="content--b917f genericBranding--108c5 away--66f22 contentWrapper--ca194"
                style={{ height: "200px" }}
              >
                <div className="betStat--5160e">
                  <svg
                    className="svg--9cf90 svg--79fa0"
                    width={54}
                    height={54}
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <filter
                        id="svg-bet-stat-inner-shadow-Away-34"
                        x={0}
                        y={0}
                        width={54}
                        height={54}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4.69565" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2={-1}
                          k3={1}
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="innerShadow"
                        />
                      </filter>
                      <linearGradient
                        id="svg-bet-stat-filling-level-Away-34"
                        x1={27}
                        y1={54}
                        x2={27}
                        y2={29}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2E8FFF" />
                        <stop offset={1} stopColor="#1065C6" />
                      </linearGradient>
                      <linearGradient
                        id="svg-bet-stat-border-Away-34"
                        x1="6.075"
                        y1="5.4"
                        x2="44.55"
                        y2="50.625"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4D8AFF" />
                        <stop offset="0.359375" stopColor="#2F6BD2" />
                        <stop offset="0.807292" stopColor="#2F6BD2" />
                      </linearGradient>
                    </defs>
                    <mask
                      id="svg-bet-stat-filling-mask-Away-34"
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={54}
                      height={54}
                      style={{ maskType: "alpha" }}
                    >
                      <circle cx={27} cy={27} r={27} fill="black" />
                    </mask>
                    <g mask="url(#svg-bet-stat-filling-mask-Away-34)">
                      <rect
                        x={0}
                        y="48.6"
                        width={54}
                        height="5.4"
                        fill="url(#svg-bet-stat-filling-level-Away-34)"
                        className="smooth--90e75"
                      />
                    </g>
                    <g filter="url(#svg-bet-stat-inner-shadow-Away-34)">
                      <circle
                        cx={27}
                        cy={27}
                        r={27}
                        fill="black"
                        fillOpacity="0.05"
                      />
                    </g>
                    <circle
                      cx={27}
                      cy={27}
                      r="26.5"
                      stroke="url(#svg-bet-stat-border-Away-34)"
                    />
                  </svg>
                  <div className="percent--7d4e8 percent--e530b">
                    10<span>%</span>
                  </div>
                </div>
                <div className="coefficient--33e5e">1:1</div>
                <div className="name--fcb73">AWAY</div>
              </div>
              <div
                className="chipContainer--b983a away--5a07b"
                data-role="winning-chip-is-false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
