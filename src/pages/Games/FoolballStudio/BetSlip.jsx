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
      className="gameControls--c8a56"
      data-role="expand-betting-grid"
      data-expanded="true"
    >
      <div>
        <div>
          <div className="bettingGrid--b7220">
            <div style={{ width: "420px", height: "231px" }}>
              <div
                className="container--8b37f isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                data-role="betting-grid-container"
                style={{ transform: "scale(1.15)" }}
              >
                <div className="mainBetsContainer--30daa isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32">
                  <div
                    className="tieBet--568c9 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                    data-role="tie-container"
                  >
                    <div
                      data-betspot-destination="Tie"
                      className="tie--58f0f"
                      data-role="bet-spot-tie"
                    >
                      <svg
                        style={{ opacity: status === Status.OPEN ? 1 : 0.5 }}
                        className="svg--bbbd4 betspot--f231e cursorPointer--7ae0f"
                        preserveAspectRatio="none"
                        viewBox="0 0 204 204"
                        width={204}
                        height={204}
                      >
                        <g fill="none" fillRule="evenodd">
                          <path
                            className="path--e4315"
                            d="M102 202.501C46.4952 202.501 1.5 157.505 1.5 102.001C1.5 46.4963 46.4952 1.501 102 1.501C157.504 1.501 202.5 46.4963 202.5 102.001C202.5 157.505 157.504 202.501 102 202.501Z"
                            fill="black"
                            fillOpacity="85%"
                          />
                          <path
                            className="path--e4315"
                            d="M102 202.501C46.4952 202.501 1.5 157.505 1.5 102.001C1.5 46.4963 46.4952 1.501 102 1.501C157.504 1.501 202.5 46.4963 202.5 102.001C202.5 157.505 157.504 202.501 102 202.501Z"
                            fill="url(#foreground-BetsOpen-solid"
                            fillOpacity={1}
                            gradientUnits="userSpaceOnUse"
                            stroke="url(#border-BetsOpen-solid)"
                            strokeOpacity={1}
                            strokeWidth={2}
                          />
                          <defs>
                            <linearGradient
                              id="foreground-BetsOpen-solid"
                              x1={0}
                              y1={0}
                              x2={0}
                              y2="100%"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor="rgba(228,196,132,1)"
                                stopOpacity="0.75"
                              />
                              <stop
                                offset={1}
                                stopColor="rgba(228,196,132,1)"
                                stopOpacity="0.25"
                              />
                            </linearGradient>
                            <linearGradient
                              id="border-BetsOpen-solid"
                              x1={0}
                              y1={0}
                              x2={0}
                              y2="100%"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor="rgba(228,196,132,1)"
                                stopOpacity="0.75"
                              />
                              <stop
                                offset={1}
                                stopColor="rgba(228,196,132,1)"
                                stopOpacity="0.25"
                              />
                            </linearGradient>
                          </defs>
                          <circle cx={102} cy={102} r={50} />
                        </g>
                      </svg>
                      <div
                        className="title--4a5d2 noSerif--946d0 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                        data-role="title"
                      >
                        <div
                          className="payout--22a94 noSerif--946d0 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                          data-role="payout"
                        >
                          <span>11:1</span>
                        </div>
                        <span className="isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32">
                          DRAW
                        </span>
                      </div>
                      <div
                        className="label--cf058 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                        data-role="label"
                        style={{ color: "rgb(228, 196, 132)" }}
                      >
                        X
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
                    </div>
                    <div className="statisticsIndicator--65db1 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32">
                      <svg
                        className="svg--bbbd4"
                        data-total-percent={6}
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
                          stroke="rgba(228,196,132,1)"
                          strokeOpacity="0.5"
                        />
                        <circle
                          className="circle--9987b"
                          cx={60}
                          cy={60}
                          r={54}
                          strokeWidth={6}
                          fill="none"
                          stroke="rgba(228,196,132,1)"
                          strokeDashoffset="318.93448619243577"
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
                          fill="rgba(228,196,132,1)"
                        >
                          6%
                        </text>
                      </svg>
                    </div>
                  </div>
                  <div
                    data-betspot-destination="Dragon"
                    className="mainBet--c6e6f dragon--85bae isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                    data-role="bet-spot-dragon"
                  >
                    <svg
                      style={{ opacity: status === Status.OPEN ? 1 : 0.5 }}
                      viewBox="0 0 180 200"
                      className="svg--bbbd4 betspot--f231e cursorPointer--7ae0f"
                      preserveAspectRatio="none"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          className="path--e4315"
                          d="M180 0V33.0293C143.922 34.087 115 63.6659 115 100C115 136.334 143.922 165.913 180 166.971V200H6C2.68629 200 0 197.314 0 194V6C0 2.68629 2.68629 0 6 0H180Z"
                          fill="black"
                          fillOpacity="85%"
                        />
                        <path
                          className="path--e4315"
                          d="M180 0V33.0293C143.922 34.087 115 63.6659 115 100C115 136.334 143.922 165.913 180 166.971V200H6C2.68629 200 0 197.314 0 194V6C0 2.68629 2.68629 0 6 0H180Z"
                          fill="url(#foreground-BetsOpen-right"
                          fillOpacity={1}
                          gradientUnits="userSpaceOnUse"
                          stroke="url(#border-BetsOpen-right)"
                          strokeOpacity={1}
                          strokeWidth={2}
                        />
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
                      </g>
                    </svg>
                    <div className="statsWrapper--9ff10">
                      <div className="statsWrapperChild--625a5">
                        <div className="statisticsIndicator--65db1 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32">
                          <svg
                            className="svg--bbbd4"
                            data-total-percent={70}
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
                              stroke="rgba(255,0,0,1)"
                              strokeOpacity="0.5"
                            />
                            <circle
                              className="circle--9987b"
                              cx={60}
                              cy={60}
                              r={54}
                              strokeWidth={6}
                              fill="none"
                              stroke="rgba(255,0,0,1)"
                              strokeDashoffset="101.7876019763093"
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
                              fill="rgba(255,0,0,1)"
                            >
                              70%
                            </text>
                          </svg>
                        </div>
                        <div className="liveStatisticsContainer--64db8 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32">
                          <div
                            className="liveStatistics--c9c15 LeftSpot--3faea isPortrait--9fee0"
                            data-role="betting-stats"
                            data-total-wager="10,359.14"
                            data-total-bettors={38}
                            data-currency-symbol="₹"
                            style={{ color: "rgb(255, 0, 0)" }}
                          >
                            <div>
                              <span className="symbol--5dd5a">₹</span>
                              <span>10,359.14</span>
                            </div>
                            <div className="count--3ca60">
                              <span className="symbol--5dd5a">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 8 12"
                                >
                                  <g fill="rgba(255,0,0,1)" fillRule="evenodd">
                                    <circle cx={4} cy={3} r={3} />
                                    <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                                  </g>
                                </svg>
                              </span>
                              <span>38</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="title--4a5d2 noSerif--946d0 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                      data-role="title"
                    >
                      HOME
                    </div>
                    <div
                      className="label--cf058 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                      data-role="label"
                      style={{ color: "rgb(255, 0, 0)" }}
                    >
                      A
                    </div>
                    <div
                      className="payout--22a94 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                      data-role="payout"
                    >
                      <span>1:1</span>
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
                  </div>
                  <div
                    data-betspot-destination="Tiger"
                    className="mainBet--c6e6f tiger--54a0d isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                    data-role="bet-spot-tiger"
                  >
                    <svg
                      style={{ opacity: status === Status.OPEN ? 1 : 0.5 }}
                      viewBox="0 0 180 200"
                      className="svg--bbbd4 betspot--f231e isMirrored--8be15 cursorPointer--7ae0f"
                      preserveAspectRatio="none"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          className="path--e4315"
                          d="M180 0V33.0293C143.922 34.087 115 63.6659 115 100C115 136.334 143.922 165.913 180 166.971V200H6C2.68629 200 0 197.314 0 194V6C0 2.68629 2.68629 0 6 0H180Z"
                          fill="black"
                          fillOpacity="85%"
                        />
                        <path
                          className="path--e4315"
                          d="M180 0V33.0293C143.922 34.087 115 63.6659 115 100C115 136.334 143.922 165.913 180 166.971V200H6C2.68629 200 0 197.314 0 194V6C0 2.68629 2.68629 0 6 0H180Z"
                          fill="url(#foreground-BetsOpen-left"
                          fillOpacity={1}
                          gradientUnits="userSpaceOnUse"
                          stroke="url(#border-BetsOpen-left)"
                          strokeOpacity={1}
                          strokeWidth={2}
                        />
                        <defs>
                          <linearGradient
                            id="foreground-BetsOpen-left"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2="100%"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              stopColor="rgba(14,94,255,1)"
                              stopOpacity="0.75"
                            />
                            <stop
                              offset={1}
                              stopColor="rgba(14,94,255,1)"
                              stopOpacity="0.25"
                            />
                          </linearGradient>
                          <linearGradient
                            id="border-BetsOpen-left"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2="100%"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              stopColor="rgba(14,94,255,1)"
                              stopOpacity="0.75"
                            />
                            <stop
                              offset={1}
                              stopColor="rgba(14,94,255,1)"
                              stopOpacity="0.25"
                            />
                          </linearGradient>
                        </defs>
                      </g>
                    </svg>
                    <div className="statsWrapper--9ff10">
                      <div className="statsWrapperChild--625a5">
                        <div className="liveStatisticsContainer--64db8 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32">
                          <div
                            className="liveStatistics--c9c15 RightSpot--c961a isPortrait--9fee0"
                            data-role="betting-stats"
                            data-total-wager="3,589.92"
                            data-total-bettors={16}
                            data-currency-symbol="₹"
                            style={{
                              color: "rgb(14, 94, 255)",
                            }}
                          >
                            <div>
                              <span className="symbol--5dd5a">₹</span>
                              <span>3,589.92</span>
                            </div>
                            <div className="count--3ca60">
                              <span className="symbol--5dd5a">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 8 12"
                                >
                                  <g
                                    fill="rgba(14,94,255,1)"
                                    fillRule="evenodd"
                                  >
                                    <circle cx={4} cy={3} r={3} />
                                    <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                                  </g>
                                </svg>
                              </span>
                              <span>16</span>
                            </div>
                          </div>
                        </div>
                        <div className="statisticsIndicator--65db1 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32">
                          <svg
                            className="svg--bbbd4"
                            data-total-percent={24}
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
                              stroke="rgba(14,94,255,1)"
                              strokeOpacity="0.5"
                            />
                            <circle
                              className="circle--9987b"
                              cx={60}
                              cy={60}
                              r={54}
                              strokeWidth={6}
                              fill="none"
                              stroke="rgba(14,94,255,1)"
                              strokeDashoffset="257.8619250066502"
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
                              fill="rgba(14,94,255,1)"
                            >
                              24%
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      className="title--4a5d2 noSerif--946d0 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                      data-role="title"
                    >
                      AWAY
                    </div>
                    <div
                      className="label--cf058 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                      data-role="label"
                      style={{ color: "rgb(14, 94, 255)" }}
                    >
                      B
                    </div>
                    <div
                      className="payout--22a94 isPortrait--54d78 isPortraitVeryNarrowOrHigher--280b6 isVeryNarrowLikeOrHigher--c1e32"
                      data-role="payout"
                    >
                      <span>1:1</span>
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
                  </div>
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
