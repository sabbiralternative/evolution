import { useEffect, useState } from "react";
import { Status } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../redux/features/events/events";
import { setBalance } from "../../../redux/features/auth/authSlice";
import Stake from "../../../component/UI/Chip/Stake";
import { getBackPrice, isRunnerWinner } from "../../../utils/betSlip";
import StakeAnimation from "../../../component/UI/Chip/StakeAnimation";
import { cn } from "../../../utils/cn";
import { playPlaceChip, playSuspendedSound } from "../../../utils/sound";
import { useSound } from "../../../context/ApiProvider";
import { useParams } from "react-router-dom";
import { handleStoreRecentPlay } from "../../../utils/handleStorateRecentPlay";
// import { RoadPrediction } from "./RoadPrediction";

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
      console.log(payload);
      handleStoreRecentPlay(username, eventId, "lucky7");

      if (sound) playPlaceChip();
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

  const indexCard = data?.[0]?.indexCard?.[0];
  const cardNumber = indexCard && parseFloat(indexCard.substring(1));

  return (
    <div
      onClick={handleShowSuspendedStatus}
      className={`bettingGrid--a60ca flex-col  `}
    >
      <div
        style={{
          width: width ? `${innerWidth - 10}px` : "auto",
          height: height ? "170px" : "200px",
        }}
        className={`${
          status === Status.SUSPENDED ? "pointer-events-none" : ""
        }`}
      >
        <div
          className="bettingGrid--0835e bettingTime--7f9cd isVertical--28984 onlyPairs--f14f6"
          data-role="betting-grid-container"
          style={{
            transform: transform ? `scale(${innerWidth / 375})` : "none",
            opacity: status === Status.SUSPENDED ? 0.7 : 1,
          }}
        >
          <div className="bubble--2b7a1" />
          <div className="mainContainer--2572f">
            <div
              onClick={() =>
                handleStakeChange({
                  key: "down",
                  data,
                  dataIndex: 0,
                  runnerIndex: 2,
                  type: "back",
                })
              }
              data-betspot-destination="Player"
              className="player--b46f0"
              data-role="bet-spot-Player"
            >
              <svg
                className={cn(
                  `svg--7e996 mainShape--f586c svgBetspot--43e31 `,
                  isRunnerWinner(data, 0, 2) && "animate--6c17d  win--e65a1",
                  stakeState.down.show && "hasBet--8e3d4"
                )}
                preserveAspectRatio="none"
                width={180}
                height={149}
                viewBox="0 0 180 149"
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="player0.5621318576918524_id_fill"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="gradientLight--ba468 blue--5d4e7"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="gradientDark--2ae9f blue--5d4e7"
                    />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="player0.5621318576918524_id_stroke"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="strokeLight--26bed blue--5d4e7"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="strokeDark--60bd1 blue--5d4e7"
                    />
                  </linearGradient>
                </defs>
                <g>
                  <path
                    d="M179.000,1.000 L179.000,12.116 C161.467,13.133 145.716,20.793 134.227,32.616 C122.563,44.620 115.292,60.915 115.009,78.914 L115.009,78.914 L115.000,80.000 L115.000,148.000 L3.198,148.000 C2.591,148.000 2.042,147.754 1.644,147.356 C1.246,146.958 1.000,146.409 1.000,145.802 L1.000,145.802 L1.000,3.198 C1.000,2.591 1.246,2.042 1.644,1.644 C2.042,1.246 2.591,1.000 3.198,1.000 L3.198,1.000 L179.000,1.000 Z"
                    fill="url(#player0.5621318576918524_id_fill)"
                    stroke="url(#player0.5621318576918524_id_stroke)"
                    strokeWidth={2}
                    fillRule="evenodd"
                    className="shape--84077"
                  />
                </g>
              </svg>

              <div className="score--393b3" data-role="score" />
              <div className="symbol--a11ac" style={{ top: "30px" }}>
                <div className="z-50 absolute top-[20px] right-5">
                  <div className="relative w-10 h-10">
                    <div
                      className={`${
                        animation.includes("down")
                          ? "absolute top-0 visible transition-all duration-500 "
                          : "absolute -top-16 invisible opacity-0"
                      }  z-50 w-full h-full`}
                    >
                      <Stake stake={double ? stakeState?.down?.stake : stake} />
                    </div>
                    {stakeState?.down?.show && (
                      <Stake stake={stakeState?.down?.stake} />
                    )}
                  </div>
                </div>
                {cardNumber < 7 && (
                  <img
                    src={`/cards/${indexCard}.png`}
                    alt=""
                    style={{
                      height: "60px",
                      width: "60px",
                      position: "absolute",
                      zIndex: 9999,
                    }}
                  />
                )}
              </div>
              <div className="cardsHand--538f4 enhanced--181e0 isPortrait--28ada">
                <div className="cards--d48f8 enhanced--181e0" />
              </div>
              <div className="title--967a1">
                <div
                  className="titleContainer--98fa0"
                  style={{ fontSize: "14px" }}
                >
                  7 Down
                </div>
              </div>
              {/* <div className="liveStatisticsContainer--fc00f">
                <div
                  className="liveStatistics--951fa LeftSpot--cfe31 isPortrait--b2a22"
                  data-role="betting-stats"
                  data-total-wager="92,439.39"
                  data-total-bettors={42}
                  data-currency-symbol="₹"
                  style={{ color: "rgb(0, 150, 255)" }}
                >
                  <div className="currency--abe5b">
                    <span className="symbol--08ff1">₹</span>
                    <span>92,439.39</span>
                  </div>
                  <div className="count--17131">
                    <span className="symbol--08ff1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 8 12"
                      >
                        <g fill="#0096FF" fillRule="evenodd">
                          <circle cx={4} cy={3} r={3} />
                          <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                        </g>
                      </svg>
                    </span>
                    <span>42</span>
                  </div>
                </div>
              </div> */}
              {/* <div className="bettingStatistics--1bd62">
                <svg
                  data-total-percent={20}
                  width={108}
                  height={108}
                  viewBox="0 0 108 108"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="background_Player0.9441224087490725_id_gradient"
                    >
                      <stop stopColor="#000" stopOpacity="0.7" offset="0%" />
                      <stop stopColor="#000" stopOpacity={0} offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx={54}
                    cy={54}
                    r={54}
                    fill="url(#background_Player0.9441224087490725_id_gradient)"
                  />
                  <circle
                    cx={54}
                    cy={54}
                    r={50}
                    strokeWidth={8}
                    fill="none"
                    stroke="#0096FF"
                    strokeOpacity="0.1"
                  />
                  <circle
                    cx={54}
                    cy={54}
                    r={50}
                    strokeWidth={8}
                    fill="none"
                    stroke="#0096FF"
                    strokeDashoffset="251.32741228718348"
                    strokeDasharray="314.1592653589793"
                    transform="rotate(-90 54 54)"
                    style={{
                      transition: "stroke-dashoffset 500ms",
                    }}
                  />
                </svg>
                <span
                  className="indicatorPercentage--ac6cf"
                  style={{ color: "rgb(0, 150, 255)" }}
                >
                  20%
                </span>
              </div> */}
              <div className="chipContainer--9cdca">
                <div className="isPortrait--96aa8 mediumChip--83319 chipSize--1811f">
                  <div
                    data-is-chip-visible="false"
                    className="hidden--f4c2b interactable--180c0 chip--618c4"
                  >
                    <div
                      className="chip--29b81 shadow--24a83 cover--6df8f"
                      data-role="chip"
                      data-value={0}
                    >
                      <svg
                        viewBox="0 0 78 78"
                        className="graphics--22cbe"
                        data-role="default-svg"
                        style={{
                          color: "rgb(146, 146, 146)",
                        }}
                      >
                        <g>
                          <circle
                            className="paint--13ff6"
                            cx="39.019"
                            cy="38.999"
                            r="38.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                          />
                          <circle
                            className="textBackground--84c26"
                            cx={39}
                            cy="38.997"
                            r="25.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                          />
                        </g>
                        <text
                          className="value--ebf30"
                          x="50%"
                          y="50%"
                          fontSize={30}
                          dy={10}
                          data-role="chip-value"
                        >
                          0
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() =>
                handleStakeChange({
                  key: "up",
                  data,
                  dataIndex: 0,
                  runnerIndex: 0,
                  type: "back",
                })
              }
              data-betspot-destination="Banker"
              className="banker--abb19"
              data-role="bet-spot-Banker"
            >
              <svg
                className={cn(
                  `svg--7e996 mainShape--f586c svgBetspot--43e31 isMirrored--d9896`,
                  isRunnerWinner(data, 0, 0) && "animate--6c17d  win--e65a1",
                  stakeState.up.show && "hasBet--8e3d4"
                )}
                preserveAspectRatio="none"
                width={180}
                height={149}
                viewBox="0 0 180 149"
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="banker0.9485415553895895_id_fill"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="gradientLight--ba468 red--7fb61"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="gradientDark--2ae9f red--7fb61"
                    />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="banker0.9485415553895895_id_stroke"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="strokeLight--26bed red--7fb61"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="strokeDark--60bd1 red--7fb61"
                    />
                  </linearGradient>
                </defs>
                <g>
                  <path
                    d="M179.000,1.000 L179.000,12.116 C161.467,13.133 145.716,20.793 134.227,32.616 C122.563,44.620 115.292,60.915 115.009,78.914 L115.009,78.914 L115.000,80.000 L115.000,148.000 L3.198,148.000 C2.591,148.000 2.042,147.754 1.644,147.356 C1.246,146.958 1.000,146.409 1.000,145.802 L1.000,145.802 L1.000,3.198 C1.000,2.591 1.246,2.042 1.644,1.644 C2.042,1.246 2.591,1.000 3.198,1.000 L3.198,1.000 L179.000,1.000 Z"
                    fill="url(#banker0.9485415553895895_id_fill)"
                    stroke="url(#banker0.9485415553895895_id_stroke)"
                    strokeWidth={2}
                    fillRule="evenodd"
                    className="shape--84077"
                  />
                </g>
              </svg>
              <div className="score--393b3" data-role="score" />

              <div
                className="symbol--a11ac"
                style={{ top: "30px", right: "2%" }}
              >
                <div className="z-50 absolute top-[20px]">
                  <div className="relative w-10 h-10">
                    <div
                      className={`${
                        animation.includes("up")
                          ? "absolute top-0 visible transition-all duration-500 "
                          : "absolute -top-16 invisible opacity-0"
                      }  z-50 w-full h-full`}
                    >
                      <Stake stake={double ? stakeState?.up?.stake : stake} />
                    </div>
                    {stakeState?.up?.show && (
                      <Stake stake={stakeState?.up?.stake} />
                    )}
                  </div>
                </div>
                {cardNumber > 7 && (
                  <img
                    style={{
                      height: "60px",
                      width: "60px",
                      position: "absolute",
                      right: "15px",
                      zIndex: 9999,
                    }}
                    src={`/cards/${indexCard}.png`}
                    alt=""
                  />
                )}
              </div>
              <div className="cardsHand--538f4 toRight--d458d enhanced--181e0 isPortrait--28ada">
                <div className="cards--d48f8 enhanced--181e0" />
              </div>
              <div className="title--967a1">
                <div
                  className="titleContainer--98fa0"
                  style={{ fontSize: "14px" }}
                >
                  7 Up
                </div>
              </div>
              {/* <div className="liveStatisticsContainer--fc00f">
                <div
                  className="liveStatistics--951fa RightSpot--29540 isPortrait--b2a22 medium--0dfff"
                  data-role="betting-stats"
                  data-total-wager="347,866.70"
                  data-total-bettors={139}
                  data-currency-symbol="₹"
                  style={{ color: "rgb(255, 0, 6)" }}
                >
                  <div className="currency--abe5b">
                    <span className="symbol--08ff1">₹</span>
                    <span>347,866.70</span>
                  </div>
                  <div className="count--17131">
                    <span className="symbol--08ff1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 8 12"
                      >
                        <g fill="#FF0006" fillRule="evenodd">
                          <circle cx={4} cy={3} r={3} />
                          <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                        </g>
                      </svg>
                    </span>
                    <span>139</span>
                  </div>
                </div>
              </div>
              <div className="bettingStatistics--1bd62">
                <svg
                  data-total-percent={76}
                  width={108}
                  height={108}
                  viewBox="0 0 108 108"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="background_Banker0.8946531488189704_id_gradient"
                    >
                      <stop stopColor="#000" stopOpacity="0.7" offset="0%" />
                      <stop stopColor="#000" stopOpacity={0} offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx={54}
                    cy={54}
                    r={54}
                    fill="url(#background_Banker0.8946531488189704_id_gradient)"
                  />
                  <circle
                    cx={54}
                    cy={54}
                    r={50}
                    strokeWidth={8}
                    fill="none"
                    stroke="#FF0006"
                    strokeOpacity="0.1"
                  />
                  <circle
                    cx={54}
                    cy={54}
                    r={50}
                    strokeWidth={8}
                    fill="none"
                    stroke="#FF0006"
                    strokeDashoffset="75.39822368615503"
                    strokeDasharray="314.1592653589793"
                    transform="rotate(-90 54 54)"
                    style={{
                      transition: "stroke-dashoffset 500ms",
                    }}
                  />
                </svg>
                <span
                  className="indicatorPercentage--ac6cf"
                  style={{ color: "rgb(255, 0, 6)" }}
                >
                  76%
                </span>
              </div>
              <div className="chipContainer--9cdca">
                <div className="isPortrait--96aa8 mediumChip--83319 chipSize--1811f">
                  <div
                    data-is-chip-visible="false"
                    className="hidden--f4c2b interactable--180c0 chip--618c4"
                  >
                    <div
                      className="chip--29b81 shadow--24a83 cover--6df8f"
                      data-role="chip"
                      data-value={0}
                    >
                      <svg
                        viewBox="0 0 78 78"
                        className="graphics--22cbe"
                        data-role="default-svg"
                        style={{
                          color: "rgb(146, 146, 146)",
                        }}
                      >
                        <g>
                          <circle
                            className="paint--13ff6"
                            cx="39.019"
                            cy="38.999"
                            r="38.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                          />
                          <circle
                            className="textBackground--84c26"
                            cx={39}
                            cy="38.997"
                            r="25.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                          />
                        </g>
                        <text
                          className="value--ebf30"
                          x="50%"
                          y="50%"
                          fontSize={30}
                          dy={10}
                          data-role="chip-value"
                        >
                          0
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div
              onClick={() =>
                handleStakeChange({
                  key: "seven",
                  data,
                  dataIndex: 0,
                  runnerIndex: 1,
                  type: "back",
                })
              }
              data-betspot-destination="Tie"
              className="tie--01ff7"
              data-role="bet-spot-Tie"
            >
              <svg
                preserveAspectRatio="none"
                className={cn(
                  `svg--7e996 tieShape--d6bfd svgBetspot--43e31 `,
                  isRunnerWinner(data, 0, 1) && "animate--6c17d  win--e65a1",
                  stakeState.seven.show && "hasBet--8e3d4"
                )}
                width={123}
                height={130}
                viewBox="0 0 123 130"
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="tie_fill0.10415904578682589_id"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="gradientLight--ba468 green--1e33e"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="gradientDark--2ae9f green--1e33e"
                    />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="tie_stroke0.10415904578682589_id"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="strokeLight--26bed green--1e33e"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="strokeDark--60bd1 green--1e33e"
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M61.500,1.000 C78.207,1.000 93.332,7.772 104.280,18.720 C115.228,29.668 122.000,44.793 122.000,61.500 L122.000,61.500 L122.000,129.000 L1.000,129.000 L1.000,61.500 C1.000,44.793 7.772,29.668 18.720,18.720 C29.668,7.772 44.793,1.000 61.500,1.000 Z"
                  fill="url(#tie_fill0.10415904578682589_id)"
                  stroke="url(#tie_stroke0.10415904578682589_id)"
                  strokeWidth={2}
                  fillRule="evenodd"
                  className="shape--84077"
                />
              </svg>

              <div
                className="title--967a1"
                data-role="payout"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="z-50 mb-3 absolute bottom-10">
                  <div className="relative w-10 h-10">
                    <div
                      className={`${
                        animation.includes("seven")
                          ? "absolute top-0 visible transition-all duration-500 "
                          : "absolute -top-16 invisible opacity-0"
                      }  z-50 w-full h-full`}
                    >
                      <Stake
                        stake={double ? stakeState?.seven?.stake : stake}
                      />
                    </div>
                    {stakeState?.seven?.show && (
                      <Stake stake={stakeState?.seven?.stake} />
                    )}
                  </div>
                </div>
                {cardNumber === 7 && (
                  <img
                    style={{
                      height: "60px",
                      width: "60px",
                      position: "absolute",
                      bottom: "40px",
                      zIndex: 9999,
                    }}
                    src={`/cards/${indexCard}.png`}
                    alt=""
                  />
                )}
                <div className="titleContainer--98fa0 single--27bc5">
                  <span className style={{ fontSize: "14px" }}>
                    7
                  </span>
                </div>
                <div className="payoutContainer--a32db"> </div>
              </div>
              {/* <div className="liveStatisticsContainer--fc00f">
                <div
                  className="liveStatistics--951fa Tie--9449f horizontal--dc92b isPortrait--b2a22"
                  data-role="betting-stats"
                  data-total-wager="18,188.65"
                  data-total-bettors={47}
                  data-currency-symbol="₹"
                  style={{ color: "rgb(0, 255, 0)" }}
                >
                  <div className="currency--abe5b">
                    <span className="symbol--08ff1">₹</span>
                    <span>18,188.65</span>
                  </div>
                  <div className="count--17131">
                    <span className="symbol--08ff1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 8 12"
                      >
                        <g fill="#00FF00" fillRule="evenodd">
                          <circle cx={4} cy={3} r={3} />
                          <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                        </g>
                      </svg>
                    </span>
                    <span>47</span>
                  </div>
                </div>
              </div>
              <div className="bettingStatistics--1bd62">
                <svg
                  data-total-percent={4}
                  width={108}
                  height={108}
                  viewBox="0 0 108 108"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="background_Tie0.37193448220955583_id_gradient"
                    >
                      <stop stopColor="#000" stopOpacity="0.7" offset="0%" />
                      <stop stopColor="#000" stopOpacity={0} offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx={54}
                    cy={54}
                    r={54}
                    fill="url(#background_Tie0.37193448220955583_id_gradient)"
                  />
                  <circle
                    cx={54}
                    cy={54}
                    r={50}
                    strokeWidth={8}
                    fill="none"
                    stroke="#00FF00"
                    strokeOpacity="0.1"
                  />
                  <circle
                    cx={54}
                    cy={54}
                    r={50}
                    strokeWidth={8}
                    fill="none"
                    stroke="#00FF00"
                    strokeDashoffset="301.59289474462014"
                    strokeDasharray="314.1592653589793"
                    transform="rotate(-90 54 54)"
                    style={{
                      transition: "stroke-dashoffset 500ms",
                    }}
                  />
                </svg>
                <span
                  className="indicatorPercentage--ac6cf"
                  style={{ color: "rgb(0, 255, 0)" }}
                >
                  4%
                </span>
              </div>
              <div className="chipContainer--9cdca">
                <div className="isPortrait--96aa8 mediumChip--83319 chipSize--1811f">
                  <div
                    data-is-chip-visible="false"
                    className="hidden--f4c2b interactable--180c0 chip--618c4"
                  >
                    <div
                      className="chip--29b81 shadow--24a83 cover--6df8f"
                      data-role="chip"
                      data-value={0}
                    >
                      <svg
                        viewBox="0 0 78 78"
                        className="graphics--22cbe"
                        data-role="default-svg"
                        style={{
                          color: "rgb(146, 146, 146)",
                        }}
                      >
                        <g>
                          <circle
                            className="paint--13ff6"
                            cx="39.019"
                            cy="38.999"
                            r="38.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                          />
                          <circle
                            className="textBackground--84c26"
                            cx={39}
                            cy="38.997"
                            r="25.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                          />
                        </g>
                        <text
                          className="value--ebf30"
                          x="50%"
                          y="50%"
                          fontSize={30}
                          dy={10}
                          data-role="chip-value"
                        >
                          0
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>  */}
            </div>
          </div>
          <div
            onClick={() =>
              handleStakeChange({
                key: "even",
                data,
                dataIndex: 1,
                runnerIndex: 0,
                type: "back",
              })
            }
            className="betspot--53c9f left--fcc6a"
            style={{ width: "89px" }}
          >
            <div
              data-betspot-destination="PlayerPair"
              className="item--8e08a vertical--98be1"
              data-role="bet-spot-PlayerPair"
            >
              <div className="absolute z-50">
                <StakeAnimation
                  animation={animation}
                  double={double}
                  runner="even"
                  stake={stake}
                  stakeState={stakeState}
                />
              </div>
              <svg
                className={cn(
                  `svg--7e996 svgBetspot--43e31 rectShape--a9f3a `,
                  isRunnerWinner(data, 1, 0) && "animate--6c17d  win--e65a1",
                  stakeState.even.show && "hasBet--8e3d4"
                )}
                preserveAspectRatio="none"
                width={122}
                height={38}
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="PlayerPair0.03899799357536238_id_rect_fill"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="gradientLight--ba468 blue--5d4e7"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="gradientDark--2ae9f blue--5d4e7"
                    />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="PlayerPair0.03899799357536238_id_rect_stroke"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="strokeLight--26bed blue--5d4e7"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="strokeDark--60bd1 blue--5d4e7"
                    />
                  </linearGradient>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  data-width={122}
                  data-height={38}
                  rx={4}
                  ry={4}
                  fill="url(#PlayerPair0.03899799357536238_id_rect_fill)"
                  stroke="url(#PlayerPair0.03899799357536238_id_rect_stroke)"
                  strokeWidth={4}
                  fillRule="evenodd"
                  className="shape--84077"
                />
              </svg>
              <div className="payoutContainer--a32db">
                <div>
                  <div
                    className="payout--c827b !text-white"
                    data-role="payout"
                    style={{ fontSize: "14px" }}
                  >
                    Even
                  </div>
                </div>
              </div>
              <div className="betspotTitle--d0907">
                <span className> x{getBackPrice(data, 1, 0)}</span>
              </div>
              <div className="chipContainer--9cdca">
                <div className="isPortrait--96aa8 mediumChip--83319 chipSize--1811f">
                  <div
                    data-is-chip-visible="false"
                    className="hidden--f4c2b interactable--180c0 chip--618c4"
                  >
                    <div
                      className="chip--29b81 shadow--24a83 cover--6df8f"
                      data-role="chip"
                      data-value={0}
                    >
                      <svg
                        viewBox="0 0 78 78"
                        className="graphics--22cbe"
                        data-role="default-svg"
                        style={{
                          color: "rgb(146, 146, 146)",
                        }}
                      >
                        <g>
                          <circle
                            className="paint--13ff6"
                            cx="39.019"
                            cy="38.999"
                            r="38.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                          />
                          <circle
                            className="textBackground--84c26"
                            cx={39}
                            cy="38.997"
                            r="25.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                          />
                        </g>
                        <text
                          className="value--ebf30"
                          x="50%"
                          y="50%"
                          fontSize={30}
                          dy={10}
                          data-role="chip-value"
                        >
                          0
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() =>
              handleStakeChange({
                key: "odd",
                data,
                dataIndex: 1,
                runnerIndex: 1,
                type: "back",
              })
            }
            className="betspot--53c9f right--d8912"
            style={{ left: "92.2px", width: "89px" }}
          >
            <div
              data-betspot-destination="BankerPair"
              className="item--8e08a vertical--98be1"
              data-role="bet-spot-BankerPair"
            >
              <div className="absolute z-50">
                <StakeAnimation
                  animation={animation}
                  double={double}
                  runner="odd"
                  stake={stake}
                  stakeState={stakeState}
                />
              </div>
              <svg
                className={cn(
                  `svg--7e996 svgBetspot--43e31 isMirrored--d9896 rectShape--a9f3a `,
                  isRunnerWinner(data, 1, 1) && "animate--6c17d  win--e65a1",
                  stakeState.odd.show && "hasBet--8e3d4"
                )}
                preserveAspectRatio="none"
                width={122}
                height={38}
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="BankerPair0.6604065570309232_id_rect_fill"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="gradientLight--ba468 red--7fb61"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="gradientDark--2ae9f red--7fb61"
                    />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="BankerPair0.6604065570309232_id_rect_stroke"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="strokeLight--26bed red--7fb61"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="strokeDark--60bd1 red--7fb61"
                    />
                  </linearGradient>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  data-width={122}
                  data-height={38}
                  rx={4}
                  ry={4}
                  fill="url(#BankerPair0.6604065570309232_id_rect_fill)"
                  stroke="url(#BankerPair0.6604065570309232_id_rect_stroke)"
                  strokeWidth={4}
                  fillRule="evenodd"
                  className="shape--84077"
                />
              </svg>
              <div className="payoutContainer--a32db">
                <div>
                  <div
                    className="payout--c827b !text-white"
                    data-role="payout"
                    style={{ fontSize: "14px" }}
                  >
                    ODD
                  </div>
                </div>
              </div>
              <div className="betspotTitle--d0907">
                <span className> x{getBackPrice(data, 1, 1)}</span>
              </div>
              <div className="chipContainer--9cdca">
                <div className="isPortrait--96aa8 mediumChip--83319 chipSize--1811f">
                  <div
                    data-is-chip-visible="false"
                    className="hidden--f4c2b interactable--180c0 chip--618c4"
                  >
                    <div
                      className="chip--29b81 shadow--24a83 cover--6df8f"
                      data-role="chip"
                      data-value={0}
                    >
                      <svg
                        viewBox="0 0 78 78"
                        className="graphics--22cbe"
                        data-role="default-svg"
                        style={{
                          color: "rgb(146, 146, 146)",
                        }}
                      >
                        <g>
                          <circle
                            className="paint--13ff6"
                            cx="39.019"
                            cy="38.999"
                            r="38.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                          />
                          <circle
                            className="textBackground--84c26"
                            cx={39}
                            cy="38.997"
                            r="25.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                          />
                        </g>
                        <text
                          className="value--ebf30"
                          x="50%"
                          y="50%"
                          fontSize={30}
                          dy={10}
                          data-role="chip-value"
                        >
                          0
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() =>
              handleStakeChange({
                key: "red",
                data,
                dataIndex: 2,
                runnerIndex: 0,
                type: "back",
              })
            }
            className="betspot--53c9f left--fcc6a"
            style={{ left: "183.8px", width: "89px" }}
          >
            <div
              data-betspot-destination="PlayerPair"
              className="item--8e08a vertical--98be1"
              data-role="bet-spot-PlayerPair"
            >
              <div className="absolute z-50">
                <StakeAnimation
                  animation={animation}
                  double={double}
                  runner="red"
                  stake={stake}
                  stakeState={stakeState}
                />
              </div>
              <svg
                className={cn(
                  `svg--7e996 svgBetspot--43e31 rectShape--a9f3a`,
                  isRunnerWinner(data, 2, 0) && "animate--6c17d  win--e65a1",
                  stakeState.red.show && "hasBet--8e3d4"
                )}
                preserveAspectRatio="none"
                width={122}
                height={38}
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="PlayerPair0.03899799357536238_id_rect_fill"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="gradientLight--ba468 blue--5d4e7"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="gradientDark--2ae9f blue--5d4e7"
                    />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="PlayerPair0.03899799357536238_id_rect_stroke"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="strokeLight--26bed blue--5d4e7"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="strokeDark--60bd1 blue--5d4e7"
                    />
                  </linearGradient>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  data-width={122}
                  data-height={38}
                  rx={4}
                  ry={4}
                  fill="url(#PlayerPair0.03899799357536238_id_rect_fill)"
                  stroke="url(#PlayerPair0.03899799357536238_id_rect_stroke)"
                  strokeWidth={4}
                  fillRule="evenodd"
                  className="shape--84077"
                />
              </svg>
              <div className="payoutContainer--a32db">
                <div>
                  <div
                    className="payout--c827b !text-white"
                    data-role="payout"
                    style={{ fontSize: "14px" }}
                  >
                    RED
                  </div>
                </div>
              </div>
              <div className="betspotTitle--d0907">
                <span className>x{getBackPrice(data, 2, 0)}</span>
              </div>
              <div className="chipContainer--9cdca">
                <div className="isPortrait--96aa8 mediumChip--83319 chipSize--1811f">
                  <div
                    data-is-chip-visible="false"
                    className="hidden--f4c2b interactable--180c0 chip--618c4"
                  >
                    <div
                      className="chip--29b81 shadow--24a83 cover--6df8f"
                      data-role="chip"
                      data-value={0}
                    >
                      <svg
                        viewBox="0 0 78 78"
                        className="graphics--22cbe"
                        data-role="default-svg"
                        style={{
                          color: "rgb(146, 146, 146)",
                        }}
                      >
                        <g>
                          <circle
                            className="paint--13ff6"
                            cx="39.019"
                            cy="38.999"
                            r="38.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                          />
                          <circle
                            className="textBackground--84c26"
                            cx={39}
                            cy="38.997"
                            r="25.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                          />
                        </g>
                        <text
                          className="value--ebf30"
                          x="50%"
                          y="50%"
                          fontSize={30}
                          dy={10}
                          data-role="chip-value"
                        >
                          0
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() =>
              handleStakeChange({
                key: "black",
                data,
                dataIndex: 2,
                runnerIndex: 1,
                type: "back",
              })
            }
            className="betspot--53c9f right--d8912"
            style={{ width: "89px", left: "276px" }}
          >
            <div
              data-betspot-destination="BankerPair"
              className="item--8e08a vertical--98be1"
              data-role="bet-spot-BankerPair"
            >
              <div className="absolute z-50">
                <StakeAnimation
                  animation={animation}
                  double={double}
                  runner="black"
                  stake={stake}
                  stakeState={stakeState}
                />
              </div>
              <svg
                className={cn(
                  `svg--7e996 svgBetspot--43e31 isMirrored--d9896 rectShape--a9f3a`,
                  isRunnerWinner(data, 2, 1) && "animate--6c17d  win--e65a1",
                  stakeState.black.show && "hasBet--8e3d4"
                )}
                preserveAspectRatio="none"
                width={122}
                height={38}
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="BankerPair0.6604065570309232_id_rect_fill"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="gradientLight--ba468 red--7fb61"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="gradientDark--2ae9f red--7fb61"
                    />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="BankerPair0.6604065570309232_id_rect_stroke"
                  >
                    <stop
                      stopOpacity="0.8"
                      className="strokeLight--26bed red--7fb61"
                    />
                    <stop
                      offset={1}
                      stopOpacity="0.8"
                      className="strokeDark--60bd1 red--7fb61"
                    />
                  </linearGradient>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  data-width={122}
                  data-height={38}
                  rx={4}
                  ry={4}
                  fill="url(#BankerPair0.6604065570309232_id_rect_fill)"
                  stroke="url(#BankerPair0.6604065570309232_id_rect_stroke)"
                  strokeWidth={4}
                  fillRule="evenodd"
                  className="shape--84077"
                />
              </svg>
              <div className="payoutContainer--a32db">
                <div>
                  <div
                    className="payout--c827b !text-white"
                    data-role="payout"
                    style={{ fontSize: "14px" }}
                  >
                    BLACK
                  </div>
                </div>
              </div>
              <div className="betspotTitle--d0907">
                <span className>x{getBackPrice(data, 2, 1)}</span>
              </div>
              <div className="chipContainer--9cdca">
                <div className="isPortrait--96aa8 mediumChip--83319 chipSize--1811f">
                  <div
                    data-is-chip-visible="false"
                    className="hidden--f4c2b interactable--180c0 chip--618c4"
                  >
                    <div
                      className="chip--29b81 shadow--24a83 cover--6df8f"
                      data-role="chip"
                      data-value={0}
                    >
                      <svg
                        viewBox="0 0 78 78"
                        className="graphics--22cbe"
                        data-role="default-svg"
                        style={{
                          color: "rgb(146, 146, 146)",
                        }}
                      >
                        <g>
                          <circle
                            className="paint--13ff6"
                            cx="39.019"
                            cy="38.999"
                            r="38.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                          />
                          <circle
                            className="textBackground--84c26"
                            cx={39}
                            cy="38.997"
                            r="25.5"
                          />
                          <path
                            className="body--369ee"
                            d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                          />
                        </g>
                        <text
                          className="value--ebf30"
                          x="50%"
                          y="50%"
                          fontSize={30}
                          dy={10}
                          data-role="chip-value"
                        >
                          0
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <RoadPrediction firstEvent={data?.[0]} /> */}
    </div>
  );
};

export default BetSlip;
