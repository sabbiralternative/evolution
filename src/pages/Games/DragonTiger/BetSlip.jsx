import { useEffect, useState } from "react";
import { Status } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../redux/features/events/events";
import { setBalance } from "../../../redux/features/auth/authSlice";

import { isRunnerWinner } from "../../../utils/betSlip";
import images from "../../../assets/images";
import StakeAnimation from "../../../component/UI/Chip/StakeAnimation";
import { useSound } from "../../../context/ApiProvider";
import { playSuspendedSound } from "../../../utils/sound";
import { useParams } from "react-router-dom";
import { handleStoreRecentPlay } from "../../../utils/handleStorateRecentPlay";
import { cn } from "../../../utils/cn";

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
  const firstData = data?.[0];
  const card1 = firstData?.runners?.[0]?.card?.[0];
  const card2 = firstData?.runners?.[1]?.card?.[0];
  const { balance, username } = useSelector((state) => state.auth);

  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    if (status === Status.OPEN) {
      handleStoreRecentPlay(username, eventId, "dragon-tiger");
      const isRepeatTheBet = Object.values(stakeState).find(
        (item) => item?.selection_id && item?.show === false
      );
      if (isRepeatTheBet) {
        setStakeState(initialState);
      }
      if (sound) {
        new Audio("/bet.mp3").play();
      }
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
    <div onClick={handleShowSuspendedStatus} className="bettingGrid--b7220">
      <div
        style={{
          width: width ? `${innerWidth - 10}px` : "auto",
          height: height ? "auto" : "200px",
        }}
      >
        <div
          className="container--924d1 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
          data-role="betting-grid-container"
          style={{
            transform: transform ? `scale(${innerWidth / 375})` : "none",
            opacity: status === Status.SUSPENDED ? 0.7 : 1,
          }}
        >
          <div className="mainBetsContainer--73e00 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206">
            {/* Tie suited tie start */}
            <div
              className="tieBet--ece01 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
              data-role="tie-container"
            >
              <div
                onClick={() =>
                  handleStakeChange({
                    key: "tie",
                    data,
                    dataIndex: 0,
                    runnerIndex: 2,
                    type: "back",
                  })
                }
                data-betspot-destination="Tie"
                className="tie--9c6e6"
                data-role="bet-spot-tie"
              >
                <svg
                  className={cn(
                    "svg--bbbd4 betspot--f231e",
                    isRunnerWinner(data, 0, 2) && "animate-win"
                  )}
                  preserveAspectRatio="none"
                  viewBox="0 0 144 70"
                  width={144}
                  height={70}
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      className="path--e4315"
                      d="M72 0C111.134 0 142.979 31.1667 144 69.9994L98 70C97.205 57.1218 85.4819 46 72.3851 46C59.2883 46 46.795 57.1218 46 70H0C1.02077 31.1673 32.8655 0 72 0Z"
                      fill="black"
                      fillOpacity="85%"
                    />
                    <path
                      className
                      d="M72 0C111.134 0 142.979 31.1667 144 69.9994L98 70C97.205 57.1218 85.4819 46 72.3851 46C59.2883 46 46.795 57.1218 46 70H0C1.02077 31.1673 32.8655 0 72 0Z"
                      fill="url(#foreground-Dealing-tie"
                      fillOpacity="0.5"
                      gradientUnits="userSpaceOnUse"
                      stroke="url(#border-Dealing-tie)"
                      strokeOpacity="0.5"
                      strokeWidth={2}
                    />
                    <defs>
                      <radialGradient
                        id="foreground-Dealing-tie"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientTransform="translate(72 70) rotate(-90) scale(70)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="rgba(21,146,82,1)" stopOpacity="0.9" />
                        <stop
                          offset="0.2"
                          stopColor="rgba(21,146,82,1)"
                          stopOpacity="0.9"
                        />
                        <stop
                          offset={1}
                          stopColor="rgba(21,146,82,1)"
                          stopOpacity="0.4"
                        />
                      </radialGradient>
                      <linearGradient
                        id="border-Dealing-tie"
                        x1={72}
                        y1={70}
                        x2={72}
                        y2="2.08903e-06"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="rgba(21,146,82,1)" stopOpacity="0.9" />
                        <stop
                          offset={1}
                          stopColor="rgba(21,146,82,1)"
                          stopOpacity="2.6"
                        />
                      </linearGradient>
                    </defs>
                  </g>
                </svg>
                <div
                  className="title--9b129 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
                  data-role="title"
                >
                  <div
                    className="payout--c05ce noSerif--e06f4 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
                    data-role="payout"
                  >
                    <span> {data?.[0]?.runners?.[2]?.back[0]?.price}</span>
                  </div>
                  <span className="isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206">
                    TIE
                    <StakeAnimation
                      animation={animation}
                      double={double}
                      runner="tie"
                      stake={stake}
                      stakeState={stakeState}
                    />
                  </span>
                </div>
                <div className="chipContainer--4d3de isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206">
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
              <div className="statisticsIndicator--59f76 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206">
                <svg
                  className="svg--bbbd4"
                  data-total-percent={7}
                  width={120}
                  height={120}
                  viewBox="0 0 120 120"
                >
                  <circle
                    className="circle--9987b"
                    cx={60}
                    cy={60}
                    r={51}
                    fill="#000"
                  />
                  <circle
                    className="circle--9987b"
                    cx={60}
                    cy={60}
                    r={54}
                    strokeWidth={6}
                    fill="none"
                    stroke="rgba(21,146,82,1)"
                    strokeOpacity="0.5"
                  />
                  <circle
                    className="circle--9987b"
                    cx={60}
                    cy={60}
                    r={54}
                    strokeWidth={6}
                    fill="none"
                    stroke="rgba(21,146,82,1)"
                    strokeDashoffset="315.5415661265588"
                    strokeDasharray="339.29200658769764"
                    transform="rotate(-90 60 60)"
                    style={{ transition: "0.5s" }}
                  />
                  <text
                    x="50%"
                    y="50%"
                    dy="12.25"
                    textAnchor="middle"
                    fontSize={35}
                    fontWeight={500}
                    fill="rgba(21,146,82,1)"
                  >
                    7%
                  </text>
                </svg>
              </div>
              <div
                onClick={() =>
                  handleStakeChange({
                    key: "suitedTie",
                    data,
                    dataIndex: 0,
                    runnerIndex: 3,
                    type: "back",
                  })
                }
                data-betspot-destination="SuitedTie"
                className="suitedTie--e7198"
                data-role="bet-spot-suitedTie"
              >
                <svg
                  className={cn(
                    "svg--bbbd4 betspot--f231e",
                    isRunnerWinner(data, 0, 3) && "animate-win"
                  )}
                  preserveAspectRatio="none"
                  viewBox="0 0 144 70"
                  width={144}
                  height={70}
                  style={{ transform: "rotate(180deg)" }}
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      className="path--e4315"
                      d="M72 0C111.134 0 142.979 31.1667 144 69.9994L98 70C97.205 57.1218 85.4819 46 72.3851 46C59.2883 46 46.795 57.1218 46 70H0C1.02077 31.1673 32.8655 0 72 0Z"
                      fill="black"
                      fillOpacity="85%"
                    />
                    <path
                      className
                      d="M72 0C111.134 0 142.979 31.1667 144 69.9994L98 70C97.205 57.1218 85.4819 46 72.3851 46C59.2883 46 46.795 57.1218 46 70H0C1.02077 31.1673 32.8655 0 72 0Z"
                      fill="url(#foreground-Dealing-suited-tie"
                      fillOpacity="0.5"
                      gradientUnits="userSpaceOnUse"
                      stroke="url(#border-Dealing-suited-tie)"
                      strokeOpacity="0.5"
                      strokeWidth={2}
                    />
                    <defs>
                      <radialGradient
                        id="foreground-Dealing-suited-tie"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientTransform="translate(72 70) rotate(-90) scale(70)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="rgba(21,146,82,1)" stopOpacity="0.9" />
                        <stop
                          offset="0.2"
                          stopColor="rgba(21,146,82,1)"
                          stopOpacity="0.9"
                        />
                        <stop
                          offset={1}
                          stopColor="rgba(21,146,82,1)"
                          stopOpacity="0.4"
                        />
                      </radialGradient>
                      <linearGradient
                        id="border-Dealing-suited-tie"
                        x1={72}
                        y1={70}
                        x2={72}
                        y2="2.08903e-06"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="rgba(21,146,82,1)" stopOpacity="2.6" />
                        <stop
                          offset={1}
                          stopColor="rgba(21,146,82,1)"
                          stopOpacity="0.4"
                        />
                      </linearGradient>
                    </defs>
                  </g>
                </svg>
                <div
                  className="title--9b129 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
                  data-role="title"
                >
                  <div
                    className="payout--c05ce noSerif--e06f4 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
                    data-role="payout"
                  >
                    <span> {data?.[0]?.runners?.[3]?.back?.[0]?.price}</span>
                  </div>
                  <span className="isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206">
                    <StakeAnimation
                      animation={animation}
                      double={double}
                      runner="suitedTie"
                      stake={stake}
                      stakeState={stakeState}
                    />{" "}
                    SUITED TIE
                  </span>
                </div>
                <div className="chipContainer--4d3de isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206">
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
            {/* Tie suited tie end */}
            {/* Dragon Start */}
            <div
              onClick={() =>
                handleStakeChange({
                  key: "dragon",
                  data,
                  dataIndex: 0,
                  runnerIndex: 0,
                  type: "back",
                })
              }
              data-betspot-destination="Dragon"
              className="mainBet--af559 dragon--9c012 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
              data-role="bet-spot-dragon"
            >
              <svg
                viewBox="0 0 180 148"
                width={180}
                height={148}
                className={`svg--bbbd4 betspot--f231e ${
                  isRunnerWinner(data, 0, 0) ? "animate-win" : ""
                }`}
                preserveAspectRatio="none"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    className="path--e4315"
                    d="M180 0V7.02927C143.922 8.08695 115 37.6659 115 74C115 110.334 143.922 139.913 180 140.971V148H6C2.68629 148 0 145.314 0 142V6C0 2.68629 2.68629 0 6 0H180Z"
                    fill="black"
                    fillOpacity="85%"
                  />
                  <path
                    className="path--e4315"
                    d="M180 0V7.02927C143.922 8.08695 115 37.6659 115 74C115 110.334 143.922 139.913 180 140.971V148H6C2.68629 148 0 145.314 0 142V6C0 2.68629 2.68629 0 6 0H180Z"
                    fill="url(#foreground-Dealing-left"
                    fillOpacity="0.5"
                    gradientUnits="userSpaceOnUse"
                    stroke="url(#border-Dealing-left)"
                    strokeOpacity="0.5"
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient
                      id="foreground-Dealing-left"
                      x1={0}
                      y1={0}
                      x2={0}
                      y2="100%"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="rgba(241,36,36,1)" stopOpacity="0.75" />
                      <stop
                        offset={1}
                        stopColor="rgba(241,36,36,1)"
                        stopOpacity="0.25"
                      />
                    </linearGradient>
                    <linearGradient
                      id="border-Dealing-left"
                      x1={0}
                      y1={0}
                      x2={0}
                      y2="100%"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="rgba(241,36,36,1)" stopOpacity="0.75" />
                      <stop
                        offset={1}
                        stopColor="rgba(241,36,36,1)"
                        stopOpacity="0.25"
                      />
                    </linearGradient>
                  </defs>
                </g>
              </svg>
              <div className="mainShapeIcon--0ad6d dragon--9c012 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb">
                <svg
                  className="mainShapeIconSvg--39b28"
                  viewBox="0 0 241 307"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <image
                    width={241}
                    height={307}
                    xlinkHref={images.dragon}
                    opacity="0.2"
                  />
                </svg>
              </div>
              <div className="statsWrapper--445ef">
                <div className="statsWrapperChild--697ed">
                  <div
                    className="statisticsIndicator--59f76 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
                    style={{ margin: "20px" }}
                  >
                    {/* <svg
                      className="svg--bbbd4"
                      data-total-percent={44}
                      width={120}
                      height={120}
                      viewBox="0 0 120 120"
                    >
                      <circle
                        className="circle--9987b"
                        cx={60}
                        cy={60}
                        r={51}
                        fill="#000"
                      />
                      <circle
                        className="circle--9987b"
                        cx={60}
                        cy={60}
                        r={54}
                        strokeWidth={6}
                        fill="none"
                        stroke="rgba(241,36,36,1)"
                        strokeOpacity="0.5"
                      />
                      <circle
                        className="circle--9987b"
                        cx={60}
                        cy={60}
                        r={54}
                        strokeWidth={6}
                        fill="none"
                        stroke="rgba(241,36,36,1)"
                        strokeDashoffset="190.0035236891107"
                        strokeDasharray="339.29200658769764"
                        transform="rotate(-90 60 60)"
                        style={{ transition: "0.5s" }}
                      />
                      <text
                        x="50%"
                        y="50%"
                        dy="12.25"
                        textAnchor="middle"
                        fontSize={35}
                        fontWeight={500}
                        fill="rgba(241,36,36,1)"
                      >
                        44%
                      </text>
                    </svg> */}
                    <StakeAnimation
                      animation={animation}
                      double={double}
                      runner="dragon"
                      stake={stake}
                      stakeState={stakeState}
                    />
                    {card1 && (
                      <img
                        src={`/cards/${"D5"}.png`}
                        alt=""
                        style={{
                          height: "60px",
                          width: "60px",
                          position: "absolute",
                          top: "20px",
                          zIndex: 9999,
                        }}
                      />
                    )}
                  </div>
                  <div className="liveStatisticsContainer--06bfc isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206">
                    {/* <div
                      className="liveStatistics--c9c15 LeftSpot--3faea isPortrait--9fee0"
                      data-role="betting-stats"
                      data-total-wager="71,399.43"
                      data-total-bettors={127}
                      data-currency-symbol="₹"
                      style={{ color: "rgb(241, 36, 36)" }}
                    >
                      <div>
                        <span className="symbol--5dd5a">₹</span>
                        <span>71,399.43</span>
                      </div>
                      <div className="count--3ca60">
                        <span className="symbol--5dd5a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 8 12"
                          >
                            <g fill="rgba(241,36,36,1)" fillRule="evenodd">
                              <circle cx={4} cy={3} r={3} />
                              <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                            </g>
                          </svg>
                        </span>
                        <span>127</span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              <div
                className="title--9b129 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
                data-role="title"
              >
                DRAGON
              </div>
              <div
                className="payout--c05ce isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
                data-role="payout"
              >
                <span> {data?.[0]?.runners?.[0]?.back?.[0]?.price}</span>
              </div>
              <div className="card--16d57 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206" />
              <div className="chipContainer--4d3de isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206">
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
            {/* Dragon end */}
            {/* Tiger start */}
            <div
              onClick={() =>
                handleStakeChange({
                  key: "tiger",
                  data,
                  dataIndex: 0,
                  runnerIndex: 1,
                  type: "back",
                })
              }
              data-betspot-destination="Tiger"
              className="mainBet--af559 tiger--939b0 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
              data-role="bet-spot-tiger"
            >
              <svg
                viewBox="0 0 180 148"
                width={180}
                height={148}
                className={cn(
                  "svg--bbbd4 betspot--f231e isMirrored--8be15",
                  isRunnerWinner(data, 0, 1) && "animate-win"
                )}
                preserveAspectRatio="none"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    className="path--e4315"
                    d="M180 0V7.02927C143.922 8.08695 115 37.6659 115 74C115 110.334 143.922 139.913 180 140.971V148H6C2.68629 148 0 145.314 0 142V6C0 2.68629 2.68629 0 6 0H180Z"
                    fill="black"
                    fillOpacity="85%"
                  />
                  <path
                    className="path--e4315"
                    d="M180 0V7.02927C143.922 8.08695 115 37.6659 115 74C115 110.334 143.922 139.913 180 140.971V148H6C2.68629 148 0 145.314 0 142V6C0 2.68629 2.68629 0 6 0H180Z"
                    fill="url(#foreground-Dealing-right"
                    fillOpacity="0.5"
                    gradientUnits="userSpaceOnUse"
                    stroke="url(#border-Dealing-right)"
                    strokeOpacity="0.5"
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient
                      id="foreground-Dealing-right"
                      x1={0}
                      y1={0}
                      x2={0}
                      y2="100%"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="rgba(255,194,27,1)" stopOpacity="0.75" />
                      <stop
                        offset={1}
                        stopColor="rgba(255,194,27,1)"
                        stopOpacity="0.25"
                      />
                    </linearGradient>
                    <linearGradient
                      id="border-Dealing-right"
                      x1={0}
                      y1={0}
                      x2={0}
                      y2="100%"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="rgba(255,194,27,1)" stopOpacity="0.75" />
                      <stop
                        offset={1}
                        stopColor="rgba(255,194,27,1)"
                        stopOpacity="0.25"
                      />
                    </linearGradient>
                  </defs>
                </g>
              </svg>
              <div className="mainShapeIcon--0ad6d tiger--939b0 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb">
                <svg
                  className="mainShapeIconSvg--39b28"
                  viewBox="0 0 221 279"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <image
                    width={221}
                    height={279}
                    xlinkHref={images.tiger}
                    opacity="0.2"
                  />
                </svg>
              </div>

              <div className="statsWrapper--445ef">
                <div className="statsWrapperChild--697ed">
                  <div className="liveStatisticsContainer--06bfc isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206">
                    {/* <div
                      className="liveStatistics--c9c15 RightSpot--c961a isPortrait--9fee0"
                      data-role="betting-stats"
                      data-total-wager="78,324.71"
                      data-total-bettors={112}
                      data-currency-symbol="₹"
                      style={{ color: "rgb(255, 194, 27)" }}
                    >
                      <div>
                        <span className="symbol--5dd5a">₹</span>
                        <span>78,324.71</span>
                      </div>
                      <div className="count--3ca60">
                        <span className="symbol--5dd5a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 8 12"
                          >
                            <g fill="rgba(255,194,27,1)" fillRule="evenodd">
                              <circle cx={4} cy={3} r={3} />
                              <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                            </g>
                          </svg>
                        </span>
                        <span>112</span>
                      </div>
                    </div> */}
                  </div>
                  <div
                    className="statisticsIndicator--59f76 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
                    style={{ margin: "20px" }}
                  >
                    {/* <svg
                      className="svg--bbbd4"
                      data-total-percent={49}
                      width={120}
                      height={120}
                      viewBox="0 0 120 120"
                    >
                      <circle
                        className="circle--9987b"
                        cx={60}
                        cy={60}
                        r={51}
                        fill="#000"
                      />
                      <circle
                        className="circle--9987b"
                        cx={60}
                        cy={60}
                        r={54}
                        strokeWidth={6}
                        fill="none"
                        stroke="rgba(255,194,27,1)"
                        strokeOpacity="0.5"
                      />
                      <circle
                        className="circle--9987b"
                        cx={60}
                        cy={60}
                        r={54}
                        strokeWidth={6}
                        fill="none"
                        stroke="rgba(255,194,27,1)"
                        strokeDashoffset="173.0389233597258"
                        strokeDasharray="339.29200658769764"
                        transform="rotate(-90 60 60)"
                        style={{ transition: "0.5s" }}
                      />
                      <text
                        x="50%"
                        y="50%"
                        dy="12.25"
                        textAnchor="middle"
                        fontSize={35}
                        fontWeight={500}
                        fill="rgba(255,194,27,1)"
                      >
                        49%
                      </text>
                    </svg> */}
                    <StakeAnimation
                      animation={animation}
                      double={double}
                      runner="tiger"
                      stake={stake}
                      stakeState={stakeState}
                    />
                    {card2 && (
                      <img
                        src={`/cards/${card2}.png`}
                        alt=""
                        style={{
                          height: "60px",
                          width: "60px",
                          position: "absolute",
                          top: "20px",
                          zIndex: 9999,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div
                className="title--9b129 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
                data-role="title"
              >
                TIGER
              </div>
              <div
                className="payout--c05ce isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206"
                data-role="payout"
              >
                <span> {data?.[0]?.runners?.[1]?.back[0]?.price}</span>
              </div>
              <div className="card--16d57 isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206" />
              <div className="chipContainer--4d3de isPortrait--1de25 isVeryNarrowLikeOrHigher--d74cb withStats--a0c3b phone--48206">
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
            {/* Tiger end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
