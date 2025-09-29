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
}) => {
  const { sound } = useSound();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const dispatch = useDispatch();
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);
  const { balance } = useSelector((state) => state.auth);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    if (status === Status.OPEN) {
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
      className={`bettingGridContainer--1ba64 phone--0e01b  ${
        status === Status.OPEN ? "" : "disabled--25286"
      }`}
      data-role="betting-grid"
      style={{
        "-multiplierCount": 0,
        "-multiplierFadeInFirstDelay": "250ms",
        "-multiplierFadeInDelay": "400ms",
        "-multiplierFadeInOutDuration": "900ms",
      }}
    >
      <div
        className={`betGrid--11ece  ${
          status === Status.SUSPENDED ? "disabled--f5334" : ""
        }`}
      >
        <div className="textContainer--ffb7b phone--5d669">
          <span>
            <strong>1:1</strong> ON 1 COLOUR
          </span>
          <span>
            <strong>2:1</strong> ON 2 COLOURS
          </span>
          <span>
            <strong>3:1</strong> ON 3 COLOURS
          </span>
        </div>
        <div className="multipliersContainer--b1094 phone--5d669">
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
        </div>
        <div className="gridContainer--17f1b phone--5d669">
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on single Yellow"
              className="spot--3581f SCG_S--ac105 Yellow--d2b08 phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_S_Yellow-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Yellow--405b0 singleBetSpot--5d861 Yellow--84514 spotColorBlock--2771b"
                data-role="single-bet-spot-Yellow"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 singleBetSpotInnerBorder--4a66f">
                  <div className="colorBlockBackground--ae05d singleBetSpotBackground--48a52 spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                </div>
                <div className="singleBetSpotStatistics--7ef70">
                  <div className="singleBetSpotStatisticsLine--568ec">
                    <div className="singleBetSpotStatisticsSymbol--ebfee singleBetSpotStatisticsIcon--75b2d">
                      <svg
                        height="100%"
                        viewBox="0 0 9.21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#userIconFilter)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.14.46A2.74 2.74 0 1 0 3.1 5.03 2.74 2.74 0 0 0 6.14.46ZM1.2 11h6.86a1.17 1.17 0 0 0 1.1-1.5 4 4 0 0 0-2-2.59 5.27 5.27 0 0 0-5.71.4A4.19 4.19 0 0 0 .01 9.67 1.17 1.17 0 0 0 1.2 11Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <filter
                            id="userIconFilter"
                            x={0}
                            y={0}
                            width="9.21"
                            height={11}
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
                            <feOffset dx="0.7" dy="0.7" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2={-1}
                              k3={1}
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_2233_12729"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div>12</div>
                  </div>
                  <div className="singleBetSpotStatisticsLine--568ec">
                    <div className="singleBetSpotStatisticsSymbol--ebfee">
                      ₹
                    </div>
                    <div>717.74</div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />

              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on single White"
              className="spot--3581f SCG_S--ac105 White--5f3d2 phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_S_White-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 White--8e95b singleBetSpot--5d861 White--bc801 spotColorBlock--2771b"
                data-role="single-bet-spot-White"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 singleBetSpotInnerBorder--4a66f">
                  <div className="colorBlockBackground--ae05d singleBetSpotBackground--48a52 spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                </div>
                <div className="singleBetSpotStatistics--7ef70">
                  <div className="singleBetSpotStatisticsLine--568ec">
                    <div className="singleBetSpotStatisticsSymbol--ebfee singleBetSpotStatisticsIcon--75b2d">
                      <svg
                        height="100%"
                        viewBox="0 0 9.21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#userIconFilter)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.14.46A2.74 2.74 0 1 0 3.1 5.03 2.74 2.74 0 0 0 6.14.46ZM1.2 11h6.86a1.17 1.17 0 0 0 1.1-1.5 4 4 0 0 0-2-2.59 5.27 5.27 0 0 0-5.71.4A4.19 4.19 0 0 0 .01 9.67 1.17 1.17 0 0 0 1.2 11Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <filter
                            id="userIconFilter"
                            x={0}
                            y={0}
                            width="9.21"
                            height={11}
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
                            <feOffset dx="0.7" dy="0.7" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2={-1}
                              k3={1}
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_2233_12729"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div>16</div>
                  </div>
                  <div className="singleBetSpotStatisticsLine--568ec">
                    <div className="singleBetSpotStatisticsSymbol--ebfee">
                      ₹
                    </div>
                    <div>725.57</div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on single Pink"
              className="spot--3581f SCG_S--ac105 Pink--b6cfc phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_S_Pink-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Pink--c3ba1 singleBetSpot--5d861 Pink--1ac3d spotColorBlock--2771b"
                data-role="single-bet-spot-Pink"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 singleBetSpotInnerBorder--4a66f">
                  <div className="colorBlockBackground--ae05d singleBetSpotBackground--48a52 spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                </div>
                <div className="singleBetSpotStatistics--7ef70">
                  <div className="singleBetSpotStatisticsLine--568ec">
                    <div className="singleBetSpotStatisticsSymbol--ebfee singleBetSpotStatisticsIcon--75b2d">
                      <svg
                        height="100%"
                        viewBox="0 0 9.21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#userIconFilter)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.14.46A2.74 2.74 0 1 0 3.1 5.03 2.74 2.74 0 0 0 6.14.46ZM1.2 11h6.86a1.17 1.17 0 0 0 1.1-1.5 4 4 0 0 0-2-2.59 5.27 5.27 0 0 0-5.71.4A4.19 4.19 0 0 0 .01 9.67 1.17 1.17 0 0 0 1.2 11Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <filter
                            id="userIconFilter"
                            x={0}
                            y={0}
                            width="9.21"
                            height={11}
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
                            <feOffset dx="0.7" dy="0.7" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2={-1}
                              k3={1}
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_2233_12729"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div>7</div>
                  </div>
                  <div className="singleBetSpotStatisticsLine--568ec">
                    <div className="singleBetSpotStatisticsSymbol--ebfee">
                      ₹
                    </div>
                    <div>3,259.74</div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on single Blue"
              className="spot--3581f SCG_S--ac105 Blue--993d3 phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_S_Blue-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Blue--65215 singleBetSpot--5d861 Blue--661db spotColorBlock--2771b"
                data-role="single-bet-spot-Blue"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 singleBetSpotInnerBorder--4a66f">
                  <div className="colorBlockBackground--ae05d singleBetSpotBackground--48a52 spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                </div>
                <div className="singleBetSpotStatistics--7ef70">
                  <div className="singleBetSpotStatisticsLine--568ec">
                    <div className="singleBetSpotStatisticsSymbol--ebfee singleBetSpotStatisticsIcon--75b2d">
                      <svg
                        height="100%"
                        viewBox="0 0 9.21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#userIconFilter)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.14.46A2.74 2.74 0 1 0 3.1 5.03 2.74 2.74 0 0 0 6.14.46ZM1.2 11h6.86a1.17 1.17 0 0 0 1.1-1.5 4 4 0 0 0-2-2.59 5.27 5.27 0 0 0-5.71.4A4.19 4.19 0 0 0 .01 9.67 1.17 1.17 0 0 0 1.2 11Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <filter
                            id="userIconFilter"
                            x={0}
                            y={0}
                            width="9.21"
                            height={11}
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
                            <feOffset dx="0.7" dy="0.7" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2={-1}
                              k3={1}
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_2233_12729"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div>9</div>
                  </div>
                  <div className="singleBetSpotStatisticsLine--568ec">
                    <div className="singleBetSpotStatisticsSymbol--ebfee">
                      ₹
                    </div>
                    <div>243.94</div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on single Red"
              className="spot--3581f SCG_S--ac105 Red--f7a54 phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_S_Red-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Red--3509b singleBetSpot--5d861 Red--09434 spotColorBlock--2771b"
                data-role="single-bet-spot-Red"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 singleBetSpotInnerBorder--4a66f">
                  <div className="colorBlockBackground--ae05d singleBetSpotBackground--48a52 spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                </div>
                <div className="singleBetSpotStatistics--7ef70">
                  <div className="singleBetSpotStatisticsLine--568ec">
                    <div className="singleBetSpotStatisticsSymbol--ebfee singleBetSpotStatisticsIcon--75b2d">
                      <svg
                        height="100%"
                        viewBox="0 0 9.21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#userIconFilter)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.14.46A2.74 2.74 0 1 0 3.1 5.03 2.74 2.74 0 0 0 6.14.46ZM1.2 11h6.86a1.17 1.17 0 0 0 1.1-1.5 4 4 0 0 0-2-2.59 5.27 5.27 0 0 0-5.71.4A4.19 4.19 0 0 0 .01 9.67 1.17 1.17 0 0 0 1.2 11Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <filter
                            id="userIconFilter"
                            x={0}
                            y={0}
                            width="9.21"
                            height={11}
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
                            <feOffset dx="0.7" dy="0.7" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2={-1}
                              k3={1}
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_2233_12729"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div>11</div>
                  </div>
                  <div className="singleBetSpotStatisticsLine--568ec">
                    <div className="singleBetSpotStatisticsSymbol--ebfee">
                      ₹
                    </div>
                    <div>3,407.00</div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on single Green"
              className="spot--3581f SCG_S--ac105 Green--02deb phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_S_Green-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Green--109f8 singleBetSpot--5d861 Green--af545 spotColorBlock--2771b"
                data-role="single-bet-spot-Green"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 singleBetSpotInnerBorder--4a66f">
                  <div className="colorBlockBackground--ae05d singleBetSpotBackground--48a52 spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                </div>
                <div className="singleBetSpotStatistics--7ef70">
                  <div className="singleBetSpotStatisticsLine--568ec">
                    <div className="singleBetSpotStatisticsSymbol--ebfee singleBetSpotStatisticsIcon--75b2d">
                      <svg
                        height="100%"
                        viewBox="0 0 9.21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#userIconFilter)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.14.46A2.74 2.74 0 1 0 3.1 5.03 2.74 2.74 0 0 0 6.14.46ZM1.2 11h6.86a1.17 1.17 0 0 0 1.1-1.5 4 4 0 0 0-2-2.59 5.27 5.27 0 0 0-5.71.4A4.19 4.19 0 0 0 .01 9.67 1.17 1.17 0 0 0 1.2 11Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <filter
                            id="userIconFilter"
                            x={0}
                            y={0}
                            width="9.21"
                            height={11}
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
                            <feOffset dx="0.7" dy="0.7" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2={-1}
                              k3={1}
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_2233_12729"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div>9</div>
                  </div>
                  <div className="singleBetSpotStatisticsLine--568ec">
                    <div className="singleBetSpotStatisticsSymbol--ebfee">
                      ₹
                    </div>
                    <div>493.97</div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`betGrid--11ece ${
          status === Status.SUSPENDED ? "disabled--f5334" : ""
        }`}
      >
        <div className="textContainer--ffb7b phone--5d669">
          <span>
            <strong>8:1</strong> DOUBLE
          </span>
        </div>
        <div className="multipliersContainer--b1094 multiDiceBet--3e3d9 phone--5d669">
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
        </div>
        <div className="gridContainer--17f1b multiDiceBet--3e3d9 phone--5d669">
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on double Yellow"
              className="spot--3581f SCG_D--0df68 Yellow--d2b08 phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_D_Yellow-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Yellow--405b0 multipleDiceBetSpot--8e207 Yellow--aeed2 phone--8ecc8 spotColorBlock--2771b"
                data-role="double-bet-spot-Yellow"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 multipleDiceBetSpotInnerRectangle--c09b4">
                  <div className="colorBlockBackground--ae05d spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                  <div className="colorBlock--634b6 Yellow--405b0 dice--ae7fa Yellow--d4cc1">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Yellow--405b0 dice--ae7fa Yellow--d4cc1">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on double White"
              className="spot--3581f SCG_D--0df68 White--5f3d2 phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_D_White-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 White--8e95b multipleDiceBetSpot--8e207 White--78a22 phone--8ecc8 spotColorBlock--2771b"
                data-role="double-bet-spot-White"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 multipleDiceBetSpotInnerRectangle--c09b4">
                  <div className="colorBlockBackground--ae05d spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                  <div className="colorBlock--634b6 White--8e95b dice--ae7fa White--6d93f">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 White--8e95b dice--ae7fa White--6d93f">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on double Pink"
              className="spot--3581f SCG_D--0df68 Pink--b6cfc phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_D_Pink-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Pink--c3ba1 multipleDiceBetSpot--8e207 Pink--1c146 phone--8ecc8 spotColorBlock--2771b"
                data-role="double-bet-spot-Pink"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 multipleDiceBetSpotInnerRectangle--c09b4">
                  <div className="colorBlockBackground--ae05d spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                  <div className="colorBlock--634b6 Pink--c3ba1 dice--ae7fa Pink--a4392">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Pink--c3ba1 dice--ae7fa Pink--a4392">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on double Blue"
              className="spot--3581f SCG_D--0df68 Blue--993d3 phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_D_Blue-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Blue--65215 multipleDiceBetSpot--8e207 Blue--0b18f phone--8ecc8 spotColorBlock--2771b"
                data-role="double-bet-spot-Blue"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 multipleDiceBetSpotInnerRectangle--c09b4">
                  <div className="colorBlockBackground--ae05d spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                  <div className="colorBlock--634b6 Blue--65215 dice--ae7fa Blue--6b5b4">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Blue--65215 dice--ae7fa Blue--6b5b4">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on double Red"
              className="spot--3581f SCG_D--0df68 Red--f7a54 phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_D_Red-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Red--3509b multipleDiceBetSpot--8e207 Red--2949e phone--8ecc8 spotColorBlock--2771b"
                data-role="double-bet-spot-Red"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 multipleDiceBetSpotInnerRectangle--c09b4">
                  <div className="colorBlockBackground--ae05d spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                  <div className="colorBlock--634b6 Red--3509b dice--ae7fa Red--36459">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Red--3509b dice--ae7fa Red--36459">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on double Green"
              className="spot--3581f SCG_D--0df68 Green--02deb phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_D_Green-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Green--109f8 multipleDiceBetSpot--8e207 Green--c0c9f phone--8ecc8 spotColorBlock--2771b"
                data-role="double-bet-spot-Green"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 multipleDiceBetSpotInnerRectangle--c09b4">
                  <div className="colorBlockBackground--ae05d spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                  <div className="colorBlock--634b6 Green--109f8 dice--ae7fa Green--225c1">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Green--109f8 dice--ae7fa Green--225c1">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`betGrid--11ece ${
          status === Status.SUSPENDED ? "disabled--f5334" : ""
        }`}
      >
        <div className="textContainer--ffb7b phone--5d669">
          <span>
            <strong>150:1</strong> TRIPLE
          </span>
        </div>
        <div className="multipliersContainer--b1094 multiDiceBet--3e3d9 phone--5d669">
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
          <div className="multiplierContainer--5b5cb" />
        </div>
        <div className="gridContainer--17f1b multiDiceBet--3e3d9 phone--5d669">
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on triple Yellow"
              className="spot--3581f SCG_T--fcfe1 Yellow--d2b08 phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_T_Yellow-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Yellow--405b0 multipleDiceBetSpot--8e207 Yellow--aeed2 triple--b53f5 phone--8ecc8 spotColorBlock--2771b"
                data-role="triple-bet-spot-Yellow"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 multipleDiceBetSpotInnerRectangle--c09b4">
                  <div className="colorBlockBackground--ae05d spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                  <div className="colorBlock--634b6 Yellow--405b0 dice--ae7fa Yellow--d4cc1">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Yellow--405b0 dice--ae7fa Yellow--d4cc1">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Yellow--405b0 dice--ae7fa Yellow--d4cc1">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on triple White"
              className="spot--3581f SCG_T--fcfe1 White--5f3d2 phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_T_White-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 White--8e95b multipleDiceBetSpot--8e207 White--78a22 triple--b53f5 phone--8ecc8 spotColorBlock--2771b"
                data-role="triple-bet-spot-White"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 multipleDiceBetSpotInnerRectangle--c09b4">
                  <div className="colorBlockBackground--ae05d spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                  <div className="colorBlock--634b6 White--8e95b dice--ae7fa White--6d93f">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 White--8e95b dice--ae7fa White--6d93f">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 White--8e95b dice--ae7fa White--6d93f">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on triple Pink"
              className="spot--3581f SCG_T--fcfe1 Pink--b6cfc phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_T_Pink-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Pink--c3ba1 multipleDiceBetSpot--8e207 Pink--1c146 triple--b53f5 phone--8ecc8 spotColorBlock--2771b"
                data-role="triple-bet-spot-Pink"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 multipleDiceBetSpotInnerRectangle--c09b4">
                  <div className="colorBlockBackground--ae05d spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                  <div className="colorBlock--634b6 Pink--c3ba1 dice--ae7fa Pink--a4392">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Pink--c3ba1 dice--ae7fa Pink--a4392">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Pink--c3ba1 dice--ae7fa Pink--a4392">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on triple Blue"
              className="spot--3581f SCG_T--fcfe1 Blue--993d3 phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_T_Blue-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Blue--65215 multipleDiceBetSpot--8e207 Blue--0b18f triple--b53f5 phone--8ecc8 spotColorBlock--2771b"
                data-role="triple-bet-spot-Blue"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 multipleDiceBetSpotInnerRectangle--c09b4">
                  <div className="colorBlockBackground--ae05d spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                  <div className="colorBlock--634b6 Blue--65215 dice--ae7fa Blue--6b5b4">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Blue--65215 dice--ae7fa Blue--6b5b4">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Blue--65215 dice--ae7fa Blue--6b5b4">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on triple Red"
              className="spot--3581f SCG_T--fcfe1 Red--f7a54 phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_T_Red-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Red--3509b multipleDiceBetSpot--8e207 Red--2949e triple--b53f5 phone--8ecc8 spotColorBlock--2771b"
                data-role="triple-bet-spot-Red"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 multipleDiceBetSpotInnerRectangle--c09b4">
                  <div className="colorBlockBackground--ae05d spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                  <div className="colorBlock--634b6 Red--3509b dice--ae7fa Red--36459">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Red--3509b dice--ae7fa Red--36459">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Red--3509b dice--ae7fa Red--36459">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
          <div className="bettingSpotContainer--4ee3a">
            <button
              tabIndex={-1}
              aria-label="Bet on triple Green"
              className="spot--3581f SCG_T--fcfe1 Green--02deb phone--849a8 isEnabled--cafcf"
              data-role="betting-spot-container"
            >
              <span
                className="chip--645a2"
                data-role="betting-spot-SCG_T_Green-chip-container"
              >
                <div
                  data-role="chip-wrapper"
                  className="chipWrapper--8521f disabled--17548"
                />
              </span>
              <div
                className="colorBlock--634b6 Green--109f8 multipleDiceBetSpot--8e207 Green--c0c9f triple--b53f5 phone--8ecc8 spotColorBlock--2771b"
                data-role="triple-bet-spot-Green"
              >
                <div className="colorBlockBorder--e9b14 spotColorBlockBorder--888cc" />
                <div className="colorBlockInnerBorder--bf229 multipleDiceBetSpotInnerRectangle--c09b4">
                  <div className="colorBlockBackground--ae05d spotColorBlockBackground--96f01" />
                  <div className="colorBlockGlitter--e13bd" />
                  <div className="colorBlock--634b6 Green--109f8 dice--ae7fa Green--225c1">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Green--109f8 dice--ae7fa Green--225c1">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                  <div className="colorBlock--634b6 Green--109f8 dice--ae7fa Green--225c1">
                    <div className="colorBlockInnerBorder--bf229 diceBorder--adca2">
                      <div className="colorBlockBackground--ae05d" />
                      <div className="colorBlockGlitter--e13bd" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spotGlow--35f02" />
              {status === Status.SUSPENDED && (
                <div
                  className="darkLayer--94cc2 applyDarkLayer--ed7d1"
                  data-role="spot-container"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
