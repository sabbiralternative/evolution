import { useEffect, useState } from "react";
import { Status } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../redux/features/events/events";
import { setBalance } from "../../../redux/features/auth/authSlice";
import { useSound } from "../../../context/ApiProvider";
import { useParams } from "react-router-dom";
import { cn } from "../../../utils/cn";
import { isRunnerWinner } from "../../../utils/betSlip";
import StakeAnimation from "../../../component/UI/Chip/StakeAnimation";
import { handleShowSuspendedStatus } from "../../../utils/handleShowSuspendedStatus";
import { handlePlaceBet } from "../../../utils/handlePlaceBet";

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
  const firstEvent = data?.[0];
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
    handlePlaceBet({
      payload,
      sound,
      eventId,
      gameName: "2cardsteenpatti",
      initialState,
      setAnimation,
      setIsLoading,
      setStakeState,
      stake,
      stakeState,
      status,
      username,
    });
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

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = {
    0: "rgba(255,0,0,1)",
    1: "rgba(14,94,255,1)",
  };

  console.log(data);

  return (
    <div
      onClick={() =>
        handleShowSuspendedStatus(status, sound, setShowSuspendedWarning)
      }
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
                  {firstEvent?.runners?.map((runner, runnerIdx) => {
                    const runnerName = runner?.name
                      ?.split(" ")
                      .join("")
                      .toLowerCase();
                    const disabled = stakeState?.playera?.show
                      ? runnerIdx === 1
                      : stakeState?.playerb?.show
                      ? runnerIdx === 0
                      : false;

                    return (
                      <button
                        key={runner?.id}
                        disabled={disabled}
                        onClick={() =>
                          handleStakeChange({
                            key: runnerName,
                            data,
                            dataIndex: 0,
                            runnerIndex: runnerIdx,
                            type: "back",
                          })
                        }
                        data-betspot-destination="Dragon"
                        className={`mainBet--c6e6f isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32
                         ${runnerIdx === 0 ? "dragon--85bae" : "tiger--54a0d"}`}
                        data-role="bet-spot-dragon"
                      >
                        <svg
                          className={cn(
                            `svg--7e996 mainShape--f586c svgBetspot--43e31 `,
                            isRunnerWinner(data, 0, runnerIdx) && "animate-win",
                            stakeState?.[runnerName]?.show && "hasBet--8e3d4"
                          )}
                          style={{ opacity: status === Status.OPEN ? 1 : 0.5 }}
                          viewBox="0 0 180 200"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id={`foreground-BetsOpen-right-${runnerIdx}`}
                              x1={0}
                              y1={0}
                              x2={0}
                              y2="100%"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor={colors[runnerIdx]}
                                stopOpacity="0.75"
                              />
                              <stop
                                offset={1}
                                stopColor={colors[runnerIdx]}
                                stopOpacity="0.25"
                              />
                            </linearGradient>
                            <linearGradient
                              id={`border-BetsOpen-right-${runnerIdx}`}
                              x1={0}
                              y1={0}
                              x2={0}
                              y2="100%"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor={colors[runnerIdx]}
                                stopOpacity="0.75"
                              />
                              <stop
                                offset={1}
                                stopColor={colors[runnerIdx]}
                                stopOpacity="0.25"
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
                              fill={`url(#foreground-BetsOpen-right-${runnerIdx})`}
                              stroke={`url(#border-BetsOpen-right-${runnerIdx})`}
                              strokeWidth={2}
                            />
                          </g>
                        </svg>
                        <StakeAnimation
                          animation={animation}
                          double={double}
                          runner={runnerName}
                          stake={stake}
                          stakeState={stakeState}
                          className={`absolute top-[20px]  left-3`}
                        />
                        {runner?.cards?.length > 0 && (
                          <div
                            style={{
                              position: "absolute",
                              top: "60px",
                              display: "flex",
                            }}
                          >
                            {runner?.cards?.map((card) => (
                              <img
                                key={card}
                                src={`/cards/${card}.png`}
                                alt=""
                                style={{
                                  height: "60px",
                                  width: "60px",

                                  zIndex: 9999,
                                }}
                              />
                            ))}
                          </div>
                        )}
                        <div
                          className="title--4a5d2 noSerif--946d0 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                          data-role="title"
                        >
                          {runner?.name}
                        </div>

                        <div
                          className="payout--22a94 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                          data-role="payout"
                        >
                          <span>{runner?.back?.[0]?.price}</span>
                        </div>
                      </button>
                    );
                  })}
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
