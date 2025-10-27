import { useEffect, useState } from "react";
import { Status } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../redux/features/events/events";
import { setBalance } from "../../../redux/features/auth/authSlice";
import { playSuspendedSound } from "../../../utils/sound";
import { useSound } from "../../../context/ApiProvider";
import { useParams } from "react-router-dom";
import { handleStoreRecentPlay } from "../../../utils/handleStorateRecentPlay";
import { cn } from "../../../utils/cn";
import { isRunnerWinner } from "../../../utils/betSlip";
import StakeAnimation from "../../../component/UI/Chip/StakeAnimation";

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
  const { eventId } = useParams();
  const { sound } = useSound();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const dispatch = useDispatch();
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);
  const { balance, username } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    if (status === Status.OPEN) {
      setIsLoading(true);
      handleStoreRecentPlay(username, eventId, "mogambo");
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
        setIsLoading(false);
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
      onClick={handleShowSuspendedStatus}
      className="gameControls--c8a56"
      data-role="expand-betting-grid"
      data-expanded="true"
    >
      <div className={status === Status.SUSPENDED ? "pointer-events-none" : ""}>
        <div>
          <div className="bettingGrid--b7220">
            <div
              style={{
                width: "100%",
                height: "231px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="container--8b37f isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                data-role="betting-grid-container"
                style={{
                  transform: innerWidth < 371 ? "scale(0.8)" : "none",
                  transformOrigin: "center",
                }}
              >
                <div className="mainBetsContainer--30daa isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32">
                  {/* ---- */}
                  <button
                    disabled={stakeState?.no?.show || isLoading}
                    onClick={() =>
                      handleStakeChange({
                        key: "yes",
                        data,
                        dataIndex: 0,
                        runnerIndex: 0,
                        type: "back",
                      })
                    }
                    data-betspot-destination="Dragon"
                    className="mainBet--c6e6f dragon--85bae isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                    data-role="bet-spot-dragon"
                  >
                    <svg
                      className={cn(
                        `svg--7e996 mainShape--f586c svgBetspot--43e31 `,
                        isRunnerWinner(data, 0, 0) && "animate-win",
                        stakeState.yes?.show && "hasBet--8e3d4"
                      )}
                      style={{ opacity: status === Status.OPEN ? 1 : 0.5 }}
                      viewBox="0 0 180 200"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="foreground-BetsOpen-right"
                          x1={0}
                          y1={0}
                          x2={0}
                          y2="100%"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            stopColor="rgba(255,0,0,1)"
                            stopOpacity="0.75"
                          />
                          <stop
                            offset={1}
                            stopColor="rgba(255,0,0,1)"
                            stopOpacity="0.25"
                          />
                        </linearGradient>
                        <linearGradient
                          id="border-BetsOpen-right"
                          x1={0}
                          y1={0}
                          x2={0}
                          y2="100%"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            stopColor="rgba(255,0,0,1)"
                            stopOpacity="0.75"
                          />
                          <stop
                            offset={1}
                            stopColor="rgba(255,0,0,1)"
                            stopOpacity="0.25"
                          />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        {/* Base background */}
                        <path
                          d="M180 0V200H6C2.686 200 0 197.314 0 194V6C0 2.686 2.686 0 6 0H180Z"
                          fill="black"
                          fillOpacity={1}
                        />
                        <path
                          d="M180 0V200H6C2.686 200 0 197.314 0 194V6C0 2.686 2.686 0 6 0H180Z"
                          fill="url(#foreground-BetsOpen-right)"
                          stroke="url(#border-BetsOpen-right)"
                          strokeWidth={2}
                        />
                      </g>
                    </svg>
                    <StakeAnimation
                      animation={animation}
                      double={double}
                      runner="yes"
                      stake={stake}
                      stakeState={stakeState}
                      className={`absolute top-[20px]  left-3`}
                    />
                    <div
                      className="title--4a5d2 noSerif--946d0 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                      data-role="title"
                    >
                      Yes
                    </div>

                    <div
                      className="payout--22a94 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                      data-role="payout"
                    >
                      <span>{data?.[0]?.runners?.[0]?.back?.[0]?.price}</span>
                    </div>
                    <div className="chipContainer--f421a isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32">
                      <div className="isPortrait--beef1 relative--a3924 chipSize--8b13c">
                        <div
                          data-is-chip-visible="false"
                          className="hidden--a819a chip--30e0c"
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
                  </button>
                  {/* ---- */}
                  <button
                    disabled={stakeState?.yes?.show || isLoading}
                    onClick={() =>
                      handleStakeChange({
                        key: "no",
                        data,
                        dataIndex: 1,
                        runnerIndex: 0,
                        type: "back",
                      })
                    }
                    data-betspot-destination="Tiger"
                    className="mainBet--c6e6f tiger--54a0d isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32 pointer-events-none"
                    data-role="bet-spot-tiger"
                  >
                    <svg
                      className={cn(
                        `svg--7e996 mainShape--f586c svgBetspot--43e31 `,
                        isRunnerWinner(data, 1, 0) && "animate-win",
                        stakeState.no?.show && "hasBet--8e3d4"
                      )}
                      style={{
                        opacity: status === Status.OPEN ? 1 : 0.5,
                        transform: "rotate(180deg)",
                      }}
                      viewBox="0 0 180 200"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="foreground-BetsOpen-right1"
                          x1={0}
                          y1={0}
                          x2={0}
                          y2="100%"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            stopColor="rgba(14,94,255,1)"
                            stopOpacity="0.25"
                          />
                          <stop
                            offset={1}
                            stopColor="rgba(14,94,255,1)"
                            stopOpacity="0.75"
                          />
                        </linearGradient>
                        <linearGradient
                          id="border-BetsOpen-right1"
                          x1={0}
                          y1={0}
                          x2={0}
                          y2="100%"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            stopColor="rgba(14,94,255,1)"
                            stopOpacity="0.25"
                          />
                          <stop
                            offset={1}
                            stopColor="rgba(14,94,255,1)"
                            stopOpacity="0.75"
                          />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M180 0V200H6C2.686 200 0 197.314 0 194V6C0 2.686 2.686 0 6 0H180Z"
                          fill="black"
                          fillOpacity={1}
                        />
                        <path
                          d="M180 0V200H6C2.686 200 0 197.314 0 194V6C0 2.686 2.686 0 6 0H180Z"
                          fill="url(#foreground-BetsOpen-right1)"
                          stroke="url(#border-BetsOpen-right1)"
                          strokeWidth={2}
                        />
                      </g>
                    </svg>
                    <StakeAnimation
                      animation={animation}
                      double={double}
                      runner="no"
                      stake={stake}
                      stakeState={stakeState}
                      className={`absolute top-[20px]  left-3`}
                    />
                    <div
                      className="title--4a5d2 noSerif--946d0 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                      data-role="title"
                    >
                      No
                    </div>

                    <div
                      className="payout--22a94 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                      data-role="payout"
                    >
                      <span>{data?.[1]?.runners?.[0]?.back?.[0]?.price}</span>
                    </div>
                    <div className="chipContainer--f421a isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32">
                      <div className="isPortrait--beef1 relative--a3924 chipSize--8b13c">
                        <div
                          data-is-chip-visible="false"
                          className="hidden--a819a chip--30e0c"
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
                  </button>
                  {/* ---- */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
