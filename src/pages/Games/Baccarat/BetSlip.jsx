import { useEffect, useState } from "react";
import { Status } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../redux/features/events/events";
import { setBalance } from "../../../redux/features/auth/authSlice";
import Stake from "../../../component/UI/Chip/Stake";
import { getBackPrice, isRunnerWinner } from "../../../utils/betSlip";
import StakeAnimation from "../../../component/UI/Chip/StakeAnimation";

const BetSlip = ({
  double,
  data,
  status,
  setToast,
  setStakeState,
  stakeState,
  setTotalWinAmount,
  setShowWinLossResult,
  animation,
  setAnimation,
  initialState,
}) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const dispatch = useDispatch();
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);
  const { balance } = useSelector((state) => state.auth);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    console.log(payload);
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
      marketId: data?.[dataIndex]?.id,
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
          setToast(res?.Message);
        }
      };
      handleOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addOrder, status]);

  const handleShowSuspendedStatus = () => {
    if (status === Status.SUSPENDED) {
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
      onClick={handleShowSuspendedStatus}
      className="bettingGridContainer--f9317"
      style={{ width: `${innerWidth - 10}px`, height: "227px" }}
    >
      <div
        className="scaleToFit--d2b31 bettingGrid--4ddd2"
        style={{ transform: `scale(${innerWidth / 375})` }}
      >
        <div
          className="grid--6cb5e vertical--cf832"
          style={{ "-gridTieSize": 104 }}
        >
          <div className="shadowOverlay--3de32" />
          <div className="mainSpots--b6d48">
            {/* Player */}
            <div
              onClick={() =>
                handleStakeChange({
                  key: "player",
                  data,
                  dataIndex: 0,
                  runnerIndex: 0,
                  type: "back",
                })
              }
              className="spot--5ad7f active--dc7b3"
              data-betspot-destination="Player"
            >
              <div
                className="overlay--f1320"
                style={{
                  clipPath: 'url("#gridShapePlayer")',
                  transform: "scaleX(-1)",
                }}
              />
              <div
                className="content--aed5a"
                style={{
                  right: "54px",
                  height: "calc(100% - 30px)",
                  width: "calc(100% - 54px)",
                }}
              >
                <div className="content--e4fdb player--2c620 lowerContent--4b76a">
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner="player"
                    stake={stake}
                    stakeState={stakeState}
                  />
                  <div className="stats--2d015 hidden--bd607">
                    <div
                      className="statistics--1f5f9 left--958da"
                      style={{ "-statisticsTextColor": "#0096FF" }}
                    >
                      <div className="indicator--350a8">
                        <svg
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <filter
                              id="filter0:r3:"
                              x={0}
                              y="-3.5"
                              width={40}
                              height={48}
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
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
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation={4} />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_0_4"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy={-4} />
                              <feGaussianBlur stdDeviation={2} />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.59 0 0 0 0 1 0 0 0 0.4 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="effect1_innerShadow_0_4"
                                result="effect2_innerShadow_0_4"
                              />
                            </filter>
                            <filter
                              id="filter1:r3:"
                              x="0.999878"
                              y="1.5"
                              width={38}
                              height={38}
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset />
                              <feGaussianBlur stdDeviation={1} />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_22_809"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_22_809"
                                result="shape"
                              />
                            </filter>
                          </defs>
                          <circle
                            opacity="0.4"
                            cx={20}
                            cy={20}
                            r={20}
                            fill="#0140B3"
                            filter="url(#filter0:r3:)"
                          />
                          <circle
                            cx={20}
                            cy={20}
                            r={17}
                            fill="#023FC9"
                            filter="url(#filter1:r3:)"
                          />
                          <circle
                            cx={20}
                            cy={20}
                            r="15.5"
                            stroke="#0096FF"
                            strokeWidth={3}
                            fill="none"
                            strokeDashoffset="22.39955562009522"
                            strokeDasharray="97.38937226128358"
                            transform="rotate(-90 20 20)"
                            style={{ transition: "stroke-dashoffset 500ms" }}
                          />
                          <circle cx={20} cy={20} r={14} fill="#01285F" />
                        </svg>
                        <div className="indicatorText--b4a61">
                          <span>77</span>
                          <span>%</span>
                        </div>
                      </div>
                      <div className="info--17ff8">
                        <div className="infoLine--9f728">
                          <div className="symbol--47afd">₹</div>
                          <div className="text--ad60c">410.44K+</div>
                        </div>
                        <div className="infoLine--9f728">
                          <div className="symbol--47afd">
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
                          </div>
                          <div className="text--ad60c">46</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cards--6466a">
                    <div className="cards--98d5a revert--ea4e9">
                      <div className="card--60d0a">
                        <svg
                          viewBox="0 0 180 250"
                          className="card--32433 red--db016"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <use
                              xlinkHref="#card-background"
                              fill="url(#card-bg-light-default)"
                            />
                            <use
                              xlinkHref="#card-border"
                              fill="url(#card-border-default)"
                            />
                          </g>
                          <g>
                            <use
                              xlinkHref="#rank-4"
                              height={95}
                              x="56.308"
                              y={20}
                            />
                            <use
                              xlinkHref="#suit-H"
                              height={108}
                              x={48}
                              y={132}
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="card--60d0a">
                        <svg
                          viewBox="0 0 180 250"
                          className="card--32433 black--f031a"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <use
                              xlinkHref="#card-background"
                              fill="url(#card-bg-light-default)"
                            />
                            <use
                              xlinkHref="#card-border"
                              fill="url(#card-border-default)"
                            />
                          </g>
                          <g>
                            <use
                              xlinkHref="#rank-6"
                              height={95}
                              x="57.413"
                              y={20}
                            />
                            <use
                              xlinkHref="#suit-S"
                              height={108}
                              x={48}
                              y={132}
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="card--60d0a">
                        <svg
                          viewBox="0 0 180 250"
                          className="card--32433 black--f031a"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <use
                              xlinkHref="#card-background"
                              fill="url(#card-bg-light-default)"
                            />
                            <use
                              xlinkHref="#card-border"
                              fill="url(#card-border-default)"
                            />
                          </g>
                          <g>
                            <use
                              xlinkHref="#rank-5"
                              height={95}
                              x="58.517"
                              y={20}
                            />
                            <use
                              xlinkHref="#suit-C"
                              height={108}
                              x={48}
                              y={132}
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="title--f554a">
                    <span className="name--52c87">PLAYER</span>
                  </div>
                  <div className="redEnvelopeChip--ad744">
                    <div className="isPortrait--96aa8 fullSize--f7f87 chipSize--1811f">
                      <div
                        data-is-chip-visible="false"
                        className="hidden--f4c2b chip--618c4"
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
                            style={{ color: "rgb(146, 146, 146)" }}
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
              <svg
                viewBox="-1 -1 183.484375 148.015625"
                width="183.484375"
                height="148.015625"
                className="svgBuilder--38c5c mirror--39d1d"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="fillGradient:r7:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(0, 60, 255)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(0, 33, 222)" }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="strokeGradient:r7:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(0, 123, 255)" }}
                    />
                  </linearGradient>
                </defs>
                <path
                  id="strokeGradient:r7:"
                  d="M 0,30 L 177.484375,30 C179.484375 30 181.484375 32 181.484375 34 L 181.484375,142.015625 C181.484375 144.015625 179.484375 146.015625 177.484375 146.015625 L 58,146.015625 C56 146.015625 54 144.015625 54 142.015625 L 54,96 C54 69 27 42 0 42 Z"
                  fill="url(#fillGradient:r7:)"
                  stroke="url(#strokeGradient:r7:)"
                  strokeWidth={2}
                  fillOpacity={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animate
                    attributeName="d"
                    dur="500ms"
                    fill="freeze"
                    values="M 0,0 L 177.484375,0 C179.484375 0 181.484375 2 181.484375 4 L 181.484375,142.015625 C181.484375 144.015625 179.484375 146.015625 177.484375 146.015625 L 58,146.015625 C56 146.015625 54 144.015625 54 142.015625 L 54,66 C54 39 27 12 0 12 Z;M 0,30 L 177.484375,30 C179.484375 30 181.484375 32 181.484375 34 L 181.484375,142.015625 C181.484375 144.015625 179.484375 146.015625 177.484375 146.015625 L 58,146.015625 C56 146.015625 54 144.015625 54 142.015625 L 54,96 C54 69 27 42 0 42 Z"
                  />
                </path>
                <clipPath id="gridShapePlayer">
                  <path
                    fill="none"
                    d="M 0,30 L 177.484375,30 C179.484375 30 181.484375 32 181.484375 34 L 181.484375,142.015625 C181.484375 144.015625 179.484375 146.015625 177.484375 146.015625 L 58,146.015625 C56 146.015625 54 144.015625 54 142.015625 L 54,96 C54 69 27 42 0 42 Z"
                  />
                </clipPath>
              </svg>
              <div
                className="background--55c8d"
                style={{
                  right: "54px",
                  height: "calc(100% - 30px)",
                  width: "calc(100% - 54px)",
                }}
              >
                <div className="pattern--0cbdc" style={{ "-opacity": "0.2" }} />
              </div>
            </div>
            {/* Banker */}
            <div
              onClick={() =>
                handleStakeChange({
                  key: "banker",
                  data,
                  dataIndex: 0,
                  runnerIndex: 1,
                  type: "back",
                })
              }
              className="spot--5ad7f"
              data-betspot-destination="Banker"
            >
              <div
                className="overlay--f1320"
                style={{
                  clipPath: 'url("#gridShapeBanker")',
                  transform: "scaleX(1)",
                }}
              />
              <div
                className="content--aed5a"
                style={{
                  left: "54px",
                  height: "calc(100% - 30px)",
                  width: "calc(100% - 54px)",
                }}
              >
                <div className="content--e4fdb banker--6b486 lowerContent--4b76a">
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner="banker"
                    stake={stake}
                    stakeState={stakeState}
                  />
                  <div className="stats--2d015 hidden--bd607">
                    <div
                      className="statistics--1f5f9 right--c09de"
                      style={{ "-statisticsTextColor": "#FF9792" }}
                    >
                      <div className="indicator--350a8">
                        <svg
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <filter
                              id="filter0:r4:"
                              x={0}
                              y="-3.5"
                              width={40}
                              height={48}
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
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
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation={4} />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect1_innerShadow_0_4"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy={-4} />
                              <feGaussianBlur stdDeviation={2} />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2={-1}
                                k3={1}
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.59 0 0 0 0 0.57 0 0 0 0.4 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="effect1_innerShadow_0_4"
                                result="effect2_innerShadow_0_4"
                              />
                            </filter>
                            <filter
                              id="filter1:r4:"
                              x="0.999878"
                              y="1.5"
                              width={38}
                              height={38}
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset />
                              <feGaussianBlur stdDeviation={1} />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_22_809"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_22_809"
                                result="shape"
                              />
                            </filter>
                          </defs>
                          <circle
                            opacity="0.4"
                            cx={20}
                            cy={20}
                            r={20}
                            fill="#DE0000"
                            filter="url(#filter0:r4:)"
                          />
                          <circle
                            cx={20}
                            cy={20}
                            r={17}
                            fill="#D00101"
                            filter="url(#filter1:r4:)"
                          />
                          <circle
                            cx={20}
                            cy={20}
                            r="15.5"
                            stroke="#FF9792"
                            strokeWidth={3}
                            fill="none"
                            strokeDashoffset="75.9637103638012"
                            strokeDasharray="97.38937226128358"
                            transform="rotate(-90 20 20)"
                            style={{ transition: "stroke-dashoffset 500ms" }}
                          />
                          <circle cx={20} cy={20} r={14} fill="#720000" />
                        </svg>
                        <div className="indicatorText--b4a61">
                          <span>22</span>
                          <span>%</span>
                        </div>
                      </div>
                      <div className="info--17ff8">
                        <div className="infoLine--9f728">
                          <div className="symbol--47afd">₹</div>
                          <div className="text--ad60c">115.14K+</div>
                        </div>
                        <div className="infoLine--9f728">
                          <div className="symbol--47afd">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 8 12"
                            >
                              <g fill="#FF9792" fillRule="evenodd">
                                <circle cx={4} cy={3} r={3} />
                                <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                              </g>
                            </svg>
                          </div>
                          <div className="text--ad60c">51</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cards--6466a">
                    <div className="cards--98d5a">
                      <div className="card--60d0a">
                        <svg
                          viewBox="0 0 180 250"
                          className="card--32433 red--db016"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <use
                              xlinkHref="#card-background"
                              fill="url(#card-bg-light-default)"
                            />
                            <use
                              xlinkHref="#card-border"
                              fill="url(#card-border-default)"
                            />
                          </g>
                          <g>
                            <use
                              xlinkHref="#rank-9"
                              height={95}
                              x="56.86"
                              y={20}
                            />
                            <use
                              xlinkHref="#suit-D"
                              height={108}
                              x={48}
                              y={132}
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="card--60d0a">
                        <svg
                          viewBox="0 0 180 250"
                          className="card--32433 black--f031a"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <use
                              xlinkHref="#card-background"
                              fill="url(#card-bg-light-default)"
                            />
                            <use
                              xlinkHref="#card-border"
                              fill="url(#card-border-default)"
                            />
                          </g>
                          <g>
                            <use
                              xlinkHref="#rank-3"
                              height={95}
                              x="56.86"
                              y={20}
                            />
                            <use
                              xlinkHref="#suit-C"
                              height={108}
                              x={48}
                              y={132}
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="card--60d0a">
                        <svg
                          viewBox="0 0 180 250"
                          className="card--32433 red--db016"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <use
                              xlinkHref="#card-background"
                              fill="url(#card-bg-light-default)"
                            />
                            <use
                              xlinkHref="#card-border"
                              fill="url(#card-border-default)"
                            />
                          </g>
                          <g>
                            <use
                              xlinkHref="#rank-10"
                              height={95}
                              x="37.529"
                              y={20}
                            />
                            <use
                              xlinkHref="#suit-H"
                              height={108}
                              x={48}
                              y={132}
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="title--f554a">
                    <span className="name--52c87">BANKER</span>
                  </div>
                  <div className="redEnvelopeChip--ad744">
                    <div className="isPortrait--96aa8 fullSize--f7f87 chipSize--1811f">
                      <div
                        data-is-chip-visible="false"
                        className="hidden--f4c2b chip--618c4"
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
                            style={{ color: "rgb(146, 146, 146)" }}
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
              <svg
                viewBox="-1 -1 183.484375 148.015625"
                width="183.484375"
                height="148.015625"
                className="svgBuilder--38c5c"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="fillGradient:r8:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" style={{ stopColor: "rgb(230, 0, 0)" }} />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(181, 0, 0)" }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="strokeGradient:r8:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" style={{ stopColor: "rgb(230, 0, 0)" }} />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(181, 0, 0)" }}
                    />
                  </linearGradient>
                </defs>
                <path
                  id="strokeGradient:r8:"
                  d="M 0,30 L 177.484375,30 C179.484375 30 181.484375 32 181.484375 34 L 181.484375,142.015625 C181.484375 144.015625 179.484375 146.015625 177.484375 146.015625 L 58,146.015625 C56 146.015625 54 144.015625 54 142.015625 L 54,96 C54 69 27 42 0 42 Z"
                  fill="url(#fillGradient:r8:)"
                  stroke="url(#strokeGradient:r8:)"
                  strokeWidth={2}
                  fillOpacity="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animate
                    attributeName="d"
                    dur="500ms"
                    fill="freeze"
                    values="M 0,0 L 177.484375,0 C179.484375 0 181.484375 2 181.484375 4 L 181.484375,142.015625 C181.484375 144.015625 179.484375 146.015625 177.484375 146.015625 L 58,146.015625 C56 146.015625 54 144.015625 54 142.015625 L 54,66 C54 39 27 12 0 12 Z;M 0,30 L 177.484375,30 C179.484375 30 181.484375 32 181.484375 34 L 181.484375,142.015625 C181.484375 144.015625 179.484375 146.015625 177.484375 146.015625 L 58,146.015625 C56 146.015625 54 144.015625 54 142.015625 L 54,96 C54 69 27 42 0 42 Z"
                  />
                </path>
                <clipPath id="gridShapeBanker">
                  <path
                    fill="none"
                    d="M 0,30 L 177.484375,30 C179.484375 30 181.484375 32 181.484375 34 L 181.484375,142.015625 C181.484375 144.015625 179.484375 146.015625 177.484375 146.015625 L 58,146.015625 C56 146.015625 54 144.015625 54 142.015625 L 54,96 C54 69 27 42 0 42 Z"
                  />
                </clipPath>
              </svg>
              <div
                className="background--55c8d"
                style={{
                  left: "54px",
                  height: "calc(100% - 30px)",
                  width: "calc(100% - 54px)",
                }}
              >
                <div className="pattern--0cbdc" style={{ "-opacity": "0.3" }} />
              </div>
            </div>
            {/* Tie */}
            <div
              onClick={() =>
                handleStakeChange({
                  key: "tie",
                  data,
                  dataIndex: 4,
                  runnerIndex: 2,
                  type: "back",
                })
              }
              className="middleMainSpots--dd008"
            >
              <div className="spot--5ad7f" data-betspot-destination="Tie">
                <div
                  className="overlay--f1320"
                  style={{
                    clipPath: 'url("#gridShapeTie")',
                    transform: "scaleX(1)",
                  }}
                />
                <div
                  className="content--aed5a"
                  style={{ height: "calc(100% - 30px)" }}
                >
                  <div className="content--e4fdb tie--f6ad7 lowerContent--4b76a">
                    <StakeAnimation
                      animation={animation}
                      double={double}
                      runner="tie"
                      stake={stake}
                      stakeState={stakeState}
                    />
                    <div className="stats--2d015 hidden--bd607">
                      <div
                        className="statistics--1f5f9 top--8b402"
                        style={{ "-statisticsTextColor": "#0DD80C" }}
                      >
                        <div className="indicator--350a8">
                          <svg
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <filter
                                id="filter0:r5:"
                                x={0}
                                y="-3.5"
                                width={40}
                                height={48}
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity={0}
                                  result="BackgroundImageFix"
                                />
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
                                <feOffset dy={4} />
                                <feGaussianBlur stdDeviation={4} />
                                <feComposite
                                  in2="hardAlpha"
                                  operator="arithmetic"
                                  k2={-1}
                                  k3={1}
                                />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="shape"
                                  result="effect1_innerShadow_0_4"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy={-4} />
                                <feGaussianBlur stdDeviation={2} />
                                <feComposite
                                  in2="hardAlpha"
                                  operator="arithmetic"
                                  k2={-1}
                                  k3={1}
                                />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.05 0 0 0 0 0.85 0 0 0 0 0.05 0 0 0 0.4 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="effect1_innerShadow_0_4"
                                  result="effect2_innerShadow_0_4"
                                />
                              </filter>
                              <filter
                                id="filter1:r5:"
                                x="0.999878"
                                y="1.5"
                                width={38}
                                height={38}
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity={0}
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation={1} />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_22_809"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_22_809"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                            <circle
                              opacity="0.4"
                              cx={20}
                              cy={20}
                              r={20}
                              fill="#048703"
                              filter="url(#filter0:r5:)"
                            />
                            <circle
                              cx={20}
                              cy={20}
                              r={17}
                              fill="#03DA034C"
                              filter="url(#filter1:r5:)"
                            />
                            <circle
                              cx={20}
                              cy={20}
                              r="15.5"
                              stroke="#0DD80C"
                              strokeWidth={3}
                              fill="none"
                              strokeDashoffset="96.41547853867074"
                              strokeDasharray="97.38937226128358"
                              transform="rotate(-90 20 20)"
                              style={{ transition: "stroke-dashoffset 500ms" }}
                            />
                            <circle cx={20} cy={20} r={14} fill="#054F05" />
                          </svg>
                          <div className="indicatorText--b4a61">
                            <span>1</span>
                            <span>%</span>
                          </div>
                        </div>
                        <div className="info--17ff8">
                          <div className="infoLine--9f728">
                            <div className="symbol--47afd">₹</div>
                            <div className="text--ad60c">8,424.48</div>
                          </div>
                          <div className="infoLine--9f728">
                            <div className="symbol--47afd">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 8 12"
                              >
                                <g fill="#0DD80C" fillRule="evenodd">
                                  <circle cx={4} cy={3} r={3} />
                                  <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                                </g>
                              </svg>
                            </div>
                            <div className="text--ad60c">11</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="title--f554a right--7f874">
                      <span className="name--52c87">TIE</span>
                      <div
                        className="tie--2fd1b payoutContainer--4fd39"
                        style={{
                          "-payoutColor": "#0DD80C",
                          "-payoutsCount": 1,
                        }}
                      >
                        <span className="payout--30a05">
                          {" "}
                          {getBackPrice(data, 0, 2)}
                        </span>
                      </div>
                    </div>
                    <div className="redEnvelopeChip--ad744">
                      <div className="isPortrait--96aa8 fullSize--f7f87 chipSize--1811f">
                        <div
                          data-is-chip-visible="false"
                          className="hidden--f4c2b chip--618c4"
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
                              style={{ color: "rgb(146, 146, 146)" }}
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
                <svg
                  viewBox="-1 -1 105.984375 131.5"
                  width="105.984375"
                  height="131.5"
                  className="svgBuilder--38c5c"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="fillGradient:r9:"
                      x1={0}
                      y1={0}
                      x2={0}
                      y2={100}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "rgb(3, 165, 1)" }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "rgb(0, 113, 0)" }}
                      />
                    </linearGradient>
                    <linearGradient
                      id="strokeGradient:r9:"
                      x1={0}
                      y1={0}
                      x2={0}
                      y2={100}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "rgb(3, 181, 1)" }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "rgb(0, 127, 0)" }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    id="strokeGradient:r9:"
                    d="M 51.9921875,129.5 L 4,129.5 C2 129.5 0 127.5 0 125.5 L 0,81.9921875 C0 54.95625 24.95625 30 51.9921875 30 C79.028125 30 103.984375 54.95625 103.984375 81.9921875 L 103.984375,125.5 C103.984375 127.5 101.984375 129.5 99.984375 129.5 Z"
                    fill="url(#fillGradient:r9:)"
                    stroke="url(#strokeGradient:r9:)"
                    strokeWidth={2}
                    fillOpacity="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <animate
                      attributeName="d"
                      dur="500ms"
                      fill="freeze"
                      values="M 51.9921875,129.5 L 4,129.5 C2 129.5 0 127.5 0 125.5 L 0,51.9921875 C0 24.95625 24.95625 0 51.9921875 0 C79.028125 0 103.984375 24.95625 103.984375 51.9921875 L 103.984375,125.5 C103.984375 127.5 101.984375 129.5 99.984375 129.5 Z;M 51.9921875,129.5 L 4,129.5 C2 129.5 0 127.5 0 125.5 L 0,81.9921875 C0 54.95625 24.95625 30 51.9921875 30 C79.028125 30 103.984375 54.95625 103.984375 81.9921875 L 103.984375,125.5 C103.984375 127.5 101.984375 129.5 99.984375 129.5 Z"
                    />
                  </path>
                  <clipPath id="gridShapeTie">
                    <path
                      fill="none"
                      d="M 51.9921875,129.5 L 4,129.5 C2 129.5 0 127.5 0 125.5 L 0,81.9921875 C0 54.95625 24.95625 30 51.9921875 30 C79.028125 30 103.984375 54.95625 103.984375 81.9921875 L 103.984375,125.5 C103.984375 127.5 101.984375 129.5 99.984375 129.5 Z"
                    />
                  </clipPath>
                </svg>
                <div
                  className="background--55c8d"
                  style={{ height: "calc(100% - 30px)" }}
                >
                  <div
                    className="pattern--0cbdc"
                    style={{ "-opacity": "0.13" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bottomSpots--c74ef">
            <div
              onClick={() =>
                handleStakeChange({
                  key: "playerPair",
                  data,
                  dataIndex: 1,
                  runnerIndex: 0,
                  type: "back",
                })
              }
              className="spot--5ad7f"
              data-betspot-destination="PlayerPair"
            >
              <div
                className="overlay--f1320"
                style={{
                  clipPath: 'url("#gridShapePlayerPair")',
                  transform: "scaleX(1)",
                }}
              />
              <div className="content--aed5a">
                <div
                  style={{
                    flexDirection: "row",
                    justifyContent: "start",
                    gap: "30px",
                  }}
                  className="content--e4fdb small--8943b"
                >
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner="playerPair"
                    stake={stake}
                    stakeState={stakeState}
                  />
                  <div className="title--f554a bottom--43fdd small--fea0e">
                    <span className="name--52c87"> P PAIRs</span>
                    <div
                      className="payoutContainer--4fd39"
                      style={{ "-payoutColor": "#0096FF", "-payoutsCount": 1 }}
                    >
                      <span className="payout--30a05">11:1</span>
                    </div>
                  </div>
                  <div className="redEnvelopeChip--ad744 centered--3d67b">
                    <div className="isPortrait--96aa8 fullSize--f7f87 chipSize--1811f">
                      <div
                        data-is-chip-visible="false"
                        className="hidden--f4c2b chip--618c4"
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
                            style={{ color: "rgb(146, 146, 146)" }}
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
              <svg
                viewBox="-1 -1 91.25 39.984375"
                width="91.25"
                height="39.984375"
                className="svgBuilder--38c5c"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="fillGradient:ra:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(0, 68, 221)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(0, 58, 136)" }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="strokeGradient:ra:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(0, 68, 221)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(0, 58, 136)" }}
                    />
                  </linearGradient>
                </defs>
                <path
                  id="strokeGradient:ra:"
                  d="M 0,18.9921875 L 0,4 C0 2 2 0 4 0 L 85.25,0 C87.25 0 89.25 2 89.25 4 L 89.25,33.984375 C89.25 35.984375 87.25 37.984375 85.25 37.984375 L 4,37.984375 C2 37.984375 0 35.984375 0 33.984375 Z"
                  fill="url(#fillGradient:ra:)"
                  stroke="url(#strokeGradient:ra:)"
                  strokeWidth={2}
                  fillOpacity="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <clipPath id="gridShapePlayerPair">
                  <path
                    fill="none"
                    d="M 0,18.9921875 L 0,4 C0 2 2 0 4 0 L 85.25,0 C87.25 0 89.25 2 89.25 4 L 89.25,33.984375 C89.25 35.984375 87.25 37.984375 85.25 37.984375 L 4,37.984375 C2 37.984375 0 35.984375 0 33.984375 Z"
                  />
                </clipPath>
              </svg>
              <div className="background--55c8d" />
            </div>
            {/* <div className="spot--5ad7f" data-betspot-destination="PlayerBonus">
              <div
                className="overlay--f1320"
                style={{
                  clipPath: 'url("#gridShapePlayerBonus")',
                  transform: "scaleX(1)",
                }}
              />
              <div className="content--aed5a">
                <div className="content--e4fdb small--8943b">
                  <div className="title--f554a bottom--43fdd small--fea0e">
                    <span className="name--52c87">P BONUS</span>
                    <div
                      className="payoutContainer--4fd39"
                      style={{ "-payoutColor": "#0096FF", "-payoutsCount": 1 }}
                    >
                      <span className="payout--30a05">1–30:1</span>
                    </div>
                  </div>
                  <div className="redEnvelopeChip--ad744 centered--3d67b">
                    <div className="isPortrait--96aa8 fullSize--f7f87 chipSize--1811f">
                      <div
                        data-is-chip-visible="false"
                        className="hidden--f4c2b chip--618c4"
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
                            style={{ color: "rgb(146, 146, 146)" }}
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
              <svg
                viewBox="-1 -1 91.25 39.984375"
                width="91.25"
                height="39.984375"
                className="svgBuilder--38c5c"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="fillGradient:rb:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(0, 68, 221)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(0, 58, 136)" }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="strokeGradient:rb:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(0, 68, 221)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(0, 58, 136)" }}
                    />
                  </linearGradient>
                </defs>
                <path
                  id="strokeGradient:rb:"
                  d="M 0,18.9921875 L 0,4 C0 2 2 0 4 0 L 85.25,0 C87.25 0 89.25 2 89.25 4 L 89.25,33.984375 C89.25 35.984375 87.25 37.984375 85.25 37.984375 L 4,37.984375 C2 37.984375 0 35.984375 0 33.984375 Z"
                  fill="url(#fillGradient:rb:)"
                  stroke="url(#strokeGradient:rb:)"
                  strokeWidth={2}
                  fillOpacity="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <clipPath id="gridShapePlayerBonus">
                  <path
                    fill="none"
                    d="M 0,18.9921875 L 0,4 C0 2 2 0 4 0 L 85.25,0 C87.25 0 89.25 2 89.25 4 L 89.25,33.984375 C89.25 35.984375 87.25 37.984375 85.25 37.984375 L 4,37.984375 C2 37.984375 0 35.984375 0 33.984375 Z"
                  />
                </clipPath>
              </svg>
              <div className="background--55c8d" />
            </div>
            <div className="spot--5ad7f" data-betspot-destination="BankerBonus">
              <div
                className="overlay--f1320"
                style={{
                  clipPath: 'url("#gridShapeBankerBonus")',
                  transform: "scaleX(1)",
                }}
              />
              <div className="content--aed5a">
                <div className="content--e4fdb small--8943b">
                  <div className="title--f554a bottom--43fdd small--fea0e">
                    <span className="name--52c87">B BONUS</span>
                    <div
                      className="payoutContainer--4fd39"
                      style={{ "-payoutColor": "#FF9792", "-payoutsCount": 1 }}
                    >
                      <span className="payout--30a05">1–30:1</span>
                    </div>
                  </div>
                  <div className="redEnvelopeChip--ad744 centered--3d67b">
                    <div className="isPortrait--96aa8 fullSize--f7f87 chipSize--1811f">
                      <div
                        data-is-chip-visible="false"
                        className="hidden--f4c2b chip--618c4"
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
                            style={{ color: "rgb(146, 146, 146)" }}
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
              <svg
                viewBox="-1 -1 91.25 39.984375"
                width="91.25"
                height="39.984375"
                className="svgBuilder--38c5c"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="fillGradient:rc:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" style={{ stopColor: "rgb(230, 0, 0)" }} />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(181, 0, 0)" }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="strokeGradient:rc:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" style={{ stopColor: "rgb(230, 0, 0)" }} />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(181, 0, 0)" }}
                    />
                  </linearGradient>
                </defs>
                <path
                  id="strokeGradient:rc:"
                  d="M 0,18.9921875 L 0,4 C0 2 2 0 4 0 L 85.25,0 C87.25 0 89.25 2 89.25 4 L 89.25,33.984375 C89.25 35.984375 87.25 37.984375 85.25 37.984375 L 4,37.984375 C2 37.984375 0 35.984375 0 33.984375 Z"
                  fill="url(#fillGradient:rc:)"
                  stroke="url(#strokeGradient:rc:)"
                  strokeWidth={2}
                  fillOpacity="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <clipPath id="gridShapeBankerBonus">
                  <path
                    fill="none"
                    d="M 0,18.9921875 L 0,4 C0 2 2 0 4 0 L 85.25,0 C87.25 0 89.25 2 89.25 4 L 89.25,33.984375 C89.25 35.984375 87.25 37.984375 85.25 37.984375 L 4,37.984375 C2 37.984375 0 35.984375 0 33.984375 Z"
                  />
                </clipPath>
              </svg>
              <div className="background--55c8d" />
            </div> */}
            <div
              onClick={() =>
                handleStakeChange({
                  key: "bankerPair",
                  data,
                  dataIndex: 2,
                  runnerIndex: 0,
                  type: "back",
                })
              }
              className="spot--5ad7f"
              data-betspot-destination="BankerPair"
            >
              <div
                className="overlay--f1320"
                style={{
                  clipPath: 'url("#gridShapeBankerPair")',
                  transform: "scaleX(1)",
                }}
              />
              <div className="content--aed5a">
                <div
                  className="content--e4fdb small--8943b"
                  style={{
                    flexDirection: "row",
                    justifyContent: "start",
                    gap: "30px",
                  }}
                >
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner="bankerPair"
                    stake={stake}
                    stakeState={stakeState}
                  />
                  <div className="title--f554a bottom--43fdd small--fea0e">
                    <span className="name--52c87">B PAIR</span>
                    <div
                      className="payoutContainer--4fd39"
                      style={{ "-payoutColor": "#FF9792", "-payoutsCount": 1 }}
                    >
                      <span className="payout--30a05">11:1</span>
                    </div>
                  </div>
                  <div className="redEnvelopeChip--ad744 centered--3d67b">
                    <div className="isPortrait--96aa8 fullSize--f7f87 chipSize--1811f">
                      <div
                        data-is-chip-visible="false"
                        className="hidden--f4c2b chip--618c4"
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
                            style={{ color: "rgb(146, 146, 146)" }}
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
              <svg
                viewBox="-1 -1 91.25 39.984375"
                width="91.25"
                height="39.984375"
                className="svgBuilder--38c5c"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="fillGradient:rd:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" style={{ stopColor: "rgb(230, 0, 0)" }} />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(181, 0, 0)" }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="strokeGradient:rd:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" style={{ stopColor: "rgb(230, 0, 0)" }} />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(181, 0, 0)" }}
                    />
                  </linearGradient>
                </defs>
                <path
                  id="strokeGradient:rd:"
                  d="M 0,18.9921875 L 0,4 C0 2 2 0 4 0 L 85.25,0 C87.25 0 89.25 2 89.25 4 L 89.25,33.984375 C89.25 35.984375 87.25 37.984375 85.25 37.984375 L 4,37.984375 C2 37.984375 0 35.984375 0 33.984375 Z"
                  fill="url(#fillGradient:rd:)"
                  stroke="url(#strokeGradient:rd:)"
                  strokeWidth={2}
                  fillOpacity="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <clipPath id="gridShapeBankerPair">
                  <path
                    fill="none"
                    d="M 0,18.9921875 L 0,4 C0 2 2 0 4 0 L 85.25,0 C87.25 0 89.25 2 89.25 4 L 89.25,33.984375 C89.25 35.984375 87.25 37.984375 85.25 37.984375 L 4,37.984375 C2 37.984375 0 35.984375 0 33.984375 Z"
                  />
                </clipPath>
              </svg>
              <div className="background--55c8d" />
            </div>
          </div>
          {/* <div className="bottomSpots--c74ef">
            <div
              className="spot--5ad7f super6--91297"
              data-betspot-destination="SuperSix"
            >
              <div
                className="overlay--f1320"
                style={{
                  clipPath: 'url("#gridShapeSuperSix")',
                  transform: "scaleX(1)",
                }}
              />
              <div className="content--aed5a">
                <div className="content--e4fdb small--8943b">
                  <div className="title--f554a bottom--43fdd small--fea0e">
                    <span className="name--52c87">SUPER 6</span>
                    <div
                      className="payoutContainer--4fd39"
                      style={{ "-payoutColor": "#AF6C9C", "-payoutsCount": 1 }}
                    >
                      <span className="payout--30a05">15:1</span>
                    </div>
                  </div>
                  <div className="redEnvelopeChip--ad744 centered--3d67b">
                    <div className="isPortrait--96aa8 fullSize--f7f87 chipSize--1811f">
                      <div
                        data-is-chip-visible="false"
                        className="hidden--f4c2b chip--618c4"
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
                            style={{ color: "rgb(146, 146, 146)" }}
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
              <svg
                viewBox="-1 -1 2 39.984375"
                width={2}
                height="39.984375"
                className="svgBuilder--38c5c"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="fillGradient:re:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(135, 69, 166)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(83, 39, 99)" }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="strokeGradient:re:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(135, 69, 166)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(83, 39, 99)" }}
                    />
                  </linearGradient>
                </defs>
                <path
                  id="strokeGradient:re:"
                  d="M 0,18.9921875 L 0,4 C-1 3 -1 1 0 0 L -4,0 C-2 0 0 2 0 4 L 0,33.984375 C0 35.984375 -2 37.984375 -4 37.984375 L 0,37.984375 C-1 36.984375 -1 34.984375 0 33.984375 Z"
                  fill="url(#fillGradient:re:)"
                  stroke="url(#strokeGradient:re:)"
                  strokeWidth={2}
                  fillOpacity="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <clipPath id="gridShapeSuperSix">
                  <path
                    fill="none"
                    d="M 0,18.9921875 L 0,4 C-1 3 -1 1 0 0 L -4,0 C-2 0 0 2 0 4 L 0,33.984375 C0 35.984375 -2 37.984375 -4 37.984375 L 0,37.984375 C-1 36.984375 -1 34.984375 0 33.984375 Z"
                  />
                </clipPath>
              </svg>
              <div className="background--55c8d" />
            </div>
            <div className="spot--5ad7f" data-betspot-destination="EitherPair">
              <div
                className="overlay--f1320"
                style={{
                  clipPath: 'url("#gridShapeEitherPair")',
                  transform: "scaleX(1)",
                }}
              />
              <div className="content--aed5a">
                <div className="content--e4fdb small--8943b">
                  <div className="title--f554a bottom--43fdd small--fea0e">
                    <span className="name--52c87">EITHER PAIR</span>
                    <div
                      className="payoutContainer--4fd39"
                      style={{ "-payoutColor": "#AF7F5C", "-payoutsCount": 1 }}
                    >
                      <span className="payout--30a05">5:1</span>
                    </div>
                  </div>
                  <div className="redEnvelopeChip--ad744 centered--3d67b">
                    <div className="isPortrait--96aa8 fullSize--f7f87 chipSize--1811f">
                      <div
                        data-is-chip-visible="false"
                        className="hidden--f4c2b chip--618c4"
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
                            style={{ color: "rgb(146, 146, 146)" }}
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
              <svg
                viewBox="-1 -1 367.984375 39.984375"
                width="367.984375"
                height="39.984375"
                className="svgBuilder--38c5c"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="fillGradient:rf:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(138, 88, 52)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(109, 67, 37)" }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="strokeGradient:rf:"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(138, 88, 52)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(109, 67, 37)" }}
                    />
                  </linearGradient>
                </defs>
                <path
                  id="strokeGradient:rf:"
                  d="M 0,18.9921875 L 0,4 C0 2 2 0 4 0 L 361.984375,0 C363.984375 0 365.984375 2 365.984375 4 L 365.984375,33.984375 C365.984375 35.984375 363.984375 37.984375 361.984375 37.984375 L 4,37.984375 C2 37.984375 0 35.984375 0 33.984375 Z"
                  fill="url(#fillGradient:rf:)"
                  stroke="url(#strokeGradient:rf:)"
                  strokeWidth={2}
                  fillOpacity="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <clipPath id="gridShapeEitherPair">
                  <path
                    fill="none"
                    d="M 0,18.9921875 L 0,4 C0 2 2 0 4 0 L 361.984375,0 C363.984375 0 365.984375 2 365.984375 4 L 365.984375,33.984375 C365.984375 35.984375 363.984375 37.984375 361.984375 37.984375 L 4,37.984375 C2 37.984375 0 35.984375 0 33.984375 Z"
                  />
                </clipPath>
              </svg>
              <div className="background--55c8d" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
