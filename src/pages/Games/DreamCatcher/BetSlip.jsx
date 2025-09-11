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
    <div className="bettingGrid--9427e">
      <div>
        <div className="gameResult--fc618">
          <div className="mobileGameResult--fc3c2">
            <div
              className="winMessage--f6733 isHeaderVisible--6ceab"
              style={{ "-scale": "0.5" }}
            />
            <div className="container--d7d94" style={{ "-scale": "0.5" }}>
              <canvas style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
        <History />
        <div className="spotsPerspectiveContainer--7ec32">
          <div
            className={`spotsContainer--481f6 portrait--81f54 ${
              status === Status.SUSPENDED ? "collapsed--e75c0" : ""
            }`}
          >
            <div style={{ height: "357px", width: "408px" }}>
              <div
                className="spots--49c03"
                data-is-betting-time="true"
                data-role="betting-grid-container"
                style={{
                  height: "306.605px",
                  width: "351px",
                  transform:
                    status === Status.OPEN
                      ? "scale(1.1631)"
                      : "translateY(25px) scale(1.1631)",
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <div
                  className={`betSpot--3d530 ${
                    status === Status.OPEN
                      ? "isBettingTime--be2b7"
                      : "disabled--9d7b0"
                  } `}
                  data-role="bet-spot-01"
                  style={{
                    height: "97.5349px",
                    width: "172px",
                  }}
                >
                  <div className="betSpotInner--04779">
                    <div className="front--563c9">
                      <div className="backdrop--d4490" />
                      <div
                        className="styledSpot--fe1f7"
                        style={{
                          height: "97.5349px",
                          width: "172px",
                        }}
                      >
                        <svg
                          height="97.53488372093022"
                          viewBox="0 0 172 97.53488372093022"
                          width={172}
                        >
                          <defs>
                            <linearGradient
                              id="BetSpotGradient-01"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop stopColor="#FFC94B" offset="0%" />
                              <stop stopColor="#FDFA9B" offset="33.33%" />
                              <stop stopColor="#FFC94B" offset="66.66%" />
                              <stop stopColor="#A37D24" offset="99.99%" />
                            </linearGradient>
                          </defs>
                          <rect
                            className={`background--728af  ${
                              status === Status.OPEN
                                ? "active--9e66d"
                                : "disabled--f7c24"
                            }`}
                            fill="#FFC94B"
                            fillOpacity={status === Status.OPEN ? 1 : 0.2}
                            height="100%"
                            width="100%"
                          />
                          <rect
                            fill="transparent"
                            fillOpacity={0}
                            height="100%"
                            stroke="url(#BetSpotGradient-01)"
                            strokeWidth={9}
                            width="100%"
                          />
                          <g fill="none" fillRule="evenodd">
                            <rect
                              x={9}
                              y={9}
                              width={154}
                              height="79.53488372093022"
                              stroke="#FFC94B"
                              strokeOpacity="0.5"
                              strokeWidth={1}
                            />
                            <svg
                              x="9.5"
                              y="9.5"
                              width={153}
                              height="78.53488372093022"
                            >
                              <circle
                                cx={0}
                                cy={0}
                                fill="#FFC94B"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={0}
                                cy="79.53488372093022"
                                fill="#FFC94B"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy={0}
                                fill="#FFC94B"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy="79.53488372093022"
                                fill="#FFC94B"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={17}
                                cy="39.26744186046511"
                                r={4}
                                fill="#FFC94B"
                                opacity="0.5"
                              />
                              <circle
                                cx={136}
                                cy="39.26744186046511"
                                r={4}
                                fill="#FFC94B"
                                opacity="0.5"
                              />
                            </svg>
                          </g>
                        </svg>
                        <div className="spotOverlay--59de7">
                          <div className="ovalBox--305dc">
                            <svg width={93} height={49} viewBox="0 0 93 49">
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <ellipse
                                  stroke="#FFC94B"
                                  strokeWidth={2}
                                  fillOpacity="0.5"
                                  fill="#000"
                                  cx="46.5"
                                  cy="24.5"
                                  rx="45.5"
                                  ry="23.5"
                                />
                                <path
                                  d="M37.6428571,38.9772727 C37.6428571,38.9772727 41.6436425,38.8471678 46.4261905,38.8471678 C51.2087385,38.8471678 55.2095238,38.9772727 55.2095238,38.9772727 L55.2095238,38.5435896 C52.8642359,38.5435896 51.7605709,37.7629599 51.7605709,34.6838096 L51.7605709,7.79545455 C48.0816879,9.09650398 42.0115308,9.61692376 37.6428571,9.61692376 L37.6428571,10.0939752 C40.1720893,10.0939752 41.09181,11.0047098 41.09181,15.0813314 L41.09181,33.1225503 C41.09181,36.5052788 39.9881451,38.5435896 37.6428571,38.5435896 L37.6428571,38.9772727 Z"
                                  fill="#FFC94B"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="paysBoxWrapper--3e540">
                            <div
                              className="paysBox--967b1"
                              style={{
                                backgroundColor: "rgb(46, 46, 13)",
                                color: "rgb(255, 201, 75)",
                              }}
                            >
                              PAYS 1x
                            </div>
                          </div>
                          {status === Status.SUSPENDED && (
                            <div className="disabledOverlay--914ac"></div>
                          )}
                        </div>
                      </div>
                      <div className="chipContainer--e2b9f">
                        <div
                          className="isPortrait--83052 chipSize--c8c49"
                          style={{
                            width: "44px",
                            height: "44px",
                          }}
                        >
                          <div
                            data-is-chip-visible="false"
                            className="hidden--f75dc chip--88d5c"
                          >
                            <div className="perspectiveChip--09607 betSpotOne--50813">
                              <div className="flange--c8674">
                                <div className="shadow--ee15e" />
                                <div
                                  className="background--2f10a"
                                  style={{
                                    backgroundColor: `rgb(
                                                    146,
                                                    146,
                                                    146
                                                  )`,
                                  }}
                                />
                                <div className="shader--d42ad" />
                              </div>
                              <div className="chip--e820b">
                                <div
                                  className="chip--29b81"
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
                    <div className="placeholder--2a315 topLeft--840f0" />
                    <div className="placeholder--2a315 topRight--e3652" />
                  </div>
                </div>
                <div
                  className={`betSpot--3d530 ${
                    status === Status.OPEN
                      ? "isBettingTime--be2b7"
                      : "disabled--9d7b0"
                  } `}
                  data-role="bet-spot-02"
                  style={{
                    height: "97.5349px",
                    width: "172px",
                  }}
                >
                  <div className="betSpotInner--04779">
                    <div className="front--563c9">
                      <div className="backdrop--d4490" />
                      <div
                        className="styledSpot--fe1f7"
                        style={{
                          height: "97.5349px",
                          width: "172px",
                        }}
                      >
                        <svg
                          height="97.53488372093022"
                          viewBox="0 0 172 97.53488372093022"
                          width={172}
                        >
                          <defs>
                            <linearGradient
                              id="BetSpotGradient-02"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop stopColor="#5B91F7" offset="0%" />
                              <stop stopColor="#A7DFFB" offset="33.33%" />
                              <stop stopColor="#4A7FE4" offset="66.66%" />
                              <stop stopColor="#2B5AB5" offset="99.99%" />
                            </linearGradient>
                          </defs>
                          <rect
                            className={`background--728af  ${
                              status === Status.OPEN
                                ? "active--9e66d"
                                : "disabled--f7c24"
                            }`}
                            fill="#6298FF"
                            fillOpacity={status === Status.OPEN ? 1 : 0.2}
                            height="100%"
                            width="100%"
                          />
                          <rect
                            fill="transparent"
                            fillOpacity={0}
                            height="100%"
                            stroke="url(#BetSpotGradient-02)"
                            strokeWidth={9}
                            width="100%"
                          />
                          <g fill="none" fillRule="evenodd">
                            <rect
                              x={9}
                              y={9}
                              width={154}
                              height="79.53488372093022"
                              stroke="#6298FF"
                              strokeOpacity="0.5"
                              strokeWidth={1}
                            />
                            <svg
                              x="9.5"
                              y="9.5"
                              width={153}
                              height="78.53488372093022"
                            >
                              <circle
                                cx={0}
                                cy={0}
                                fill="#6298FF"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={0}
                                cy="79.53488372093022"
                                fill="#6298FF"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy={0}
                                fill="#6298FF"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy="79.53488372093022"
                                fill="#6298FF"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={17}
                                cy="39.26744186046511"
                                r={4}
                                fill="#6298FF"
                                opacity="0.5"
                              />
                              <circle
                                cx={136}
                                cy="39.26744186046511"
                                r={4}
                                fill="#6298FF"
                                opacity="0.5"
                              />
                            </svg>
                          </g>
                        </svg>
                        <div className="spotOverlay--59de7">
                          <div className="ovalBox--305dc">
                            <svg width={93} height={49} viewBox="0 0 93 49">
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <ellipse
                                  stroke="#6298FF"
                                  strokeWidth={2}
                                  fillOpacity="0.5"
                                  fill="#000"
                                  cx="46.5"
                                  cy="24.5"
                                  rx="45.5"
                                  ry="23.5"
                                />
                                <path
                                  d="M43.036 9.5c2.51 0 4.669 1.69 4.669 5.578 0 11.661-14.49 12.718-14.49 23.112 0 .802.131 1.478.264 1.9l.264-.041c0-1.31 1.1-2.747 3.567-2.747 3.744 0 7.135 2.789 12.905 2.789 7.047 0 9.866-3.718 9.866-11.662h-.44c-.22 1.521-1.278 2.282-2.951 2.282-3.436 0-7.576-1.183-11.276-1.183-2.995 0-7.047.211-9.865 3.338l-.133-.127C41.01 24.542 59.2 28.472 59.2 17.064c0-4.986-5.682-8.155-13.169-8.155-8.633 0-12.288 3.676-12.288 7.352 0 2.155 1.189 4.943 4.845 4.943 2.774 0 4.404-1.985 4.404-3.887 0-.38-.088-.887-.176-1.14-1.806-.127-3.436-.972-3.436-3.254 0-1.732 1.366-3.422 3.656-3.422z"
                                  fill="#6298FF"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="paysBoxWrapper--3e540">
                            <div
                              className="paysBox--967b1"
                              style={{
                                backgroundColor: "rgb(26, 45, 55)",
                                color: "rgb(98, 152, 255)",
                              }}
                            >
                              PAYS 2x
                            </div>
                          </div>
                          {status === Status.SUSPENDED && (
                            <div className="disabledOverlay--914ac"></div>
                          )}
                        </div>
                      </div>
                      <div className="chipContainer--e2b9f">
                        <div
                          className="isPortrait--83052 chipSize--c8c49"
                          style={{
                            width: "44px",
                            height: "44px",
                          }}
                        >
                          <div
                            data-is-chip-visible="false"
                            className="hidden--f75dc chip--88d5c"
                          >
                            <div className="perspectiveChip--09607 betSpotTwo--e9876">
                              <div className="flange--c8674">
                                <div className="shadow--ee15e" />
                                <div
                                  className="background--2f10a"
                                  style={{
                                    backgroundColor: `rgb(
                                                    146,
                                                    146,
                                                    146
                                                  )`,
                                  }}
                                />
                                <div className="shader--d42ad" />
                              </div>
                              <div className="chip--e820b">
                                <div
                                  className="chip--29b81"
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
                    <div className="placeholder--2a315 topLeft--840f0" />
                    <div className="placeholder--2a315 topRight--e3652" />
                  </div>
                </div>
                <div
                  className={`betSpot--3d530 ${
                    status === Status.OPEN
                      ? "isBettingTime--be2b7"
                      : "disabled--9d7b0"
                  } `}
                  data-role="bet-spot-05"
                  style={{
                    height: "97.5349px",
                    width: "172px",
                  }}
                >
                  <div className="betSpotInner--04779">
                    <div className="front--563c9">
                      <div className="backdrop--d4490" />
                      <div
                        className="styledSpot--fe1f7"
                        style={{
                          height: "97.5349px",
                          width: "172px",
                        }}
                      >
                        <svg
                          height="97.53488372093022"
                          viewBox="0 0 172 97.53488372093022"
                          width={172}
                        >
                          <defs>
                            <linearGradient
                              id="BetSpotGradient-05"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop stopColor="#9E57C7" offset="0%" />
                              <stop stopColor="#E7C6FF" offset="33.33%" />
                              <stop stopColor="#894BAC" offset="66.66%" />
                              <stop stopColor="#78419F" offset="99.99%" />
                            </linearGradient>
                          </defs>
                          <rect
                            className={`background--728af  ${
                              status === Status.OPEN
                                ? "active--9e66d"
                                : "disabled--f7c24"
                            }`}
                            fill="#CC85FF"
                            fillOpacity={status === Status.OPEN ? 1 : 0.2}
                            height="100%"
                            width="100%"
                          />
                          <rect
                            fill="transparent"
                            fillOpacity={0}
                            height="100%"
                            stroke="url(#BetSpotGradient-05)"
                            strokeWidth={9}
                            width="100%"
                          />
                          <g fill="none" fillRule="evenodd">
                            <rect
                              x={9}
                              y={9}
                              width={154}
                              height="79.53488372093022"
                              stroke="#CC85FF"
                              strokeOpacity="0.5"
                              strokeWidth={1}
                            />
                            <svg
                              x="9.5"
                              y="9.5"
                              width={153}
                              height="78.53488372093022"
                            >
                              <circle
                                cx={0}
                                cy={0}
                                fill="#CC85FF"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={0}
                                cy="79.53488372093022"
                                fill="#CC85FF"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy={0}
                                fill="#CC85FF"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy="79.53488372093022"
                                fill="#CC85FF"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={17}
                                cy="39.26744186046511"
                                r={4}
                                fill="#CC85FF"
                                opacity="0.5"
                              />
                              <circle
                                cx={136}
                                cy="39.26744186046511"
                                r={4}
                                fill="#CC85FF"
                                opacity="0.5"
                              />
                            </svg>
                          </g>
                        </svg>
                        <div className="spotOverlay--59de7">
                          <div className="ovalBox--305dc">
                            <svg width={93} height={49} viewBox="0 0 93 49">
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <ellipse
                                  stroke="#CC85FF"
                                  strokeWidth={2}
                                  fillOpacity="0.5"
                                  fill="#000"
                                  cx="46.5"
                                  cy="24.5"
                                  rx="45.5"
                                  ry="23.5"
                                />
                                <path
                                  d="M42.8159636,39.5142308 C40.1563439,39.5142308 38.8490732,37.8665786 38.8490732,36.1777351 C38.8490732,34.1593611 40.5169703,33.1295785 42.3651806,33.0060046 C42.4553372,32.7176654 42.5004155,32.388135 42.5004155,32.0997958 C42.5004155,30.2461871 40.8775967,28.3925784 38.0376638,28.3925784 C34.611713,28.3925784 33.2142857,30.8228654 33.2142857,32.923622 C33.2142857,36.5072655 36.7303931,40.0909091 45.5657399,40.0909091 C56.7000799,40.0909091 60.0809524,34.7772307 60.0809524,29.834274 C60.0809524,25.1384652 56.0239054,20.3602738 47.2336369,20.3602738 C42.9061202,20.3602738 38.8039949,22.0491173 36.5951582,24.5205957 L37.5868808,16.7354389 C41.824241,17.2297346 46.0165229,19.3304912 50.253883,19.3304912 C55.212496,19.3304912 58.4581336,16.9002042 58.4581336,12.286778 C58.4581336,11.0510388 58.2778204,9.93887354 57.917194,8.90909091 L57.466411,8.90909091 C57.466411,10.3095953 56.6550016,11.1334214 52.3725631,11.1334214 C50.1186481,11.1334214 42.275024,10.7215083 37.9475072,10.4743605 L36.0091403,25.8387174 C42.8159636,25.8387174 48.3605944,29.0928306 48.3605944,33.9945959 C48.3605944,38.2373003 45.1149569,39.5142308 42.8159636,39.5142308 Z"
                                  fill="#CC85FF"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="paysBoxWrapper--3e540">
                            <div
                              className="paysBox--967b1"
                              style={{
                                backgroundColor: "rgb(47, 37, 55)",
                                color: "rgb(204, 133, 255)",
                              }}
                            >
                              PAYS 5x
                            </div>
                          </div>
                          {status === Status.SUSPENDED && (
                            <div className="disabledOverlay--914ac"></div>
                          )}
                        </div>
                      </div>
                      <div className="chipContainer--e2b9f">
                        <div
                          className="isPortrait--83052 chipSize--c8c49"
                          style={{
                            width: "44px",
                            height: "44px",
                          }}
                        >
                          <div
                            data-is-chip-visible="false"
                            className="hidden--f75dc chip--88d5c"
                          >
                            <div className="perspectiveChip--09607 betSpotFive--d0efe">
                              <div className="flange--c8674">
                                <div className="shadow--ee15e" />
                                <div
                                  className="background--2f10a"
                                  style={{
                                    backgroundColor: `rgb(
                                                    146,
                                                    146,
                                                    146
                                                  )`,
                                  }}
                                />
                                <div className="shader--d42ad" />
                              </div>
                              <div className="chip--e820b">
                                <div
                                  className="chip--29b81"
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
                    <div className="placeholder--2a315 topLeft--840f0" />
                    <div className="placeholder--2a315 topRight--e3652" />
                  </div>
                </div>
                <div
                  className={`betSpot--3d530 ${
                    status === Status.OPEN
                      ? "isBettingTime--be2b7"
                      : "disabled--9d7b0"
                  } `}
                  data-betspot-destination={10}
                  data-role="bet-spot-10"
                  style={{
                    height: "97.5349px",
                    width: "172px",
                  }}
                >
                  <div className="betSpotInner--04779">
                    <div className="front--563c9">
                      <div className="backdrop--d4490" />
                      <div
                        className="styledSpot--fe1f7"
                        style={{
                          height: "97.5349px",
                          width: "172px",
                        }}
                      >
                        <svg
                          height="97.53488372093022"
                          viewBox="0 0 172 97.53488372093022"
                          width={172}
                        >
                          <defs>
                            <linearGradient
                              id="BetSpotGradient-10"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop stopColor="#59E777" offset="0%" />
                              <stop stopColor="#BCFF96" offset="33.33%" />
                              <stop stopColor="#59E777" offset="66.66%" />
                              <stop stopColor="#248939" offset="99.99%" />
                            </linearGradient>
                          </defs>
                          <rect
                            className={`background--728af  ${
                              status === Status.OPEN
                                ? "active--9e66d"
                                : "disabled--f7c24"
                            }`}
                            fill="#59E777"
                            fillOpacity={status === Status.OPEN ? 1 : 0.2}
                            height="100%"
                            width="100%"
                          />
                          <rect
                            fill="transparent"
                            fillOpacity={0}
                            height="100%"
                            stroke="url(#BetSpotGradient-10)"
                            strokeWidth={9}
                            width="100%"
                          />
                          <g fill="none" fillRule="evenodd">
                            <rect
                              x={9}
                              y={9}
                              width={154}
                              height="79.53488372093022"
                              stroke="#59E777"
                              strokeOpacity="0.5"
                              strokeWidth={1}
                            />
                            <svg
                              x="9.5"
                              y="9.5"
                              width={153}
                              height="78.53488372093022"
                            >
                              <circle
                                cx={0}
                                cy={0}
                                fill="#59E777"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={0}
                                cy="79.53488372093022"
                                fill="#59E777"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy={0}
                                fill="#59E777"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy="79.53488372093022"
                                fill="#59E777"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={17}
                                cy="39.26744186046511"
                                r={4}
                                fill="#59E777"
                                opacity="0.5"
                              />
                              <circle
                                cx={136}
                                cy="39.26744186046511"
                                r={4}
                                fill="#59E777"
                                opacity="0.5"
                              />
                            </svg>
                          </g>
                        </svg>
                        <div className="spotOverlay--59de7">
                          <div className="ovalBox--305dc">
                            <svg width={93} height={49} viewBox="0 0 93 49">
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <ellipse
                                  stroke="#59E777"
                                  strokeWidth={2}
                                  fillOpacity="0.5"
                                  fill="#000"
                                  cx="46.5"
                                  cy="24.5"
                                  rx="45.5"
                                  ry="23.5"
                                />
                                <path
                                  d="M21.0357143,40.0909091 C21.0357143,40.0909091 25.0392658,39.9608041 29.8251204,39.9608041 C34.6109751,39.9608041 38.6145265,40.0909091 38.6145265,40.0909091 L38.6145265,39.6572259 C36.267617,39.6572259 35.1631891,38.8765963 35.1631891,35.7974459 L35.1631891,8.90909091 C31.4817624,10.2101403 25.4074084,10.7305601 21.0357143,10.7305601 L21.0357143,11.2076116 C23.5666951,11.2076116 24.4870518,12.1183462 24.4870518,16.1949678 L24.4870518,34.2361866 C24.4870518,37.6189152 23.3826238,39.6572259 21.0357143,39.6572259 L21.0357143,40.0909091 Z M57.0102999,8.90909091 C47.8527511,8.90909091 41.0881296,16.3454053 41.0881296,25.1760286 C41.0881296,34.0066519 47.4385906,40.0909091 56.6421572,40.0909091 C65.8457238,40.0909091 72.702381,32.6123429 72.702381,23.7817196 C72.702381,14.9510963 66.2138665,8.90909091 57.0102999,8.90909091 Z M57.1597133,39.6683912 C54.5827146,39.6683912 52.834037,33.4573787 52.834037,24.0352304 C52.834037,13.3877802 53.8004115,9.33160877 56.1013031,9.33160877 C58.7243196,9.33160877 60.3809616,15.5426213 60.3809616,24.9647696 C60.3809616,35.6967233 59.4606049,39.6683912 57.1597133,39.6683912 Z"
                                  fill="#59E777"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="paysBoxWrapper--3e540">
                            <div
                              className="paysBox--967b1"
                              style={{
                                backgroundColor: "rgb(21, 52, 28)",
                                color: "rgb(89, 231, 119)",
                              }}
                            >
                              PAYS 10x
                            </div>
                          </div>
                          {status === Status.SUSPENDED && (
                            <div className="disabledOverlay--914ac"></div>
                          )}
                        </div>
                      </div>
                      <div className="chipContainer--e2b9f">
                        <div
                          className="isPortrait--83052 chipSize--c8c49"
                          style={{
                            width: "44px",
                            height: "44px",
                          }}
                        >
                          <div
                            data-is-chip-visible="false"
                            className="hidden--f75dc chip--88d5c"
                          >
                            <div className="perspectiveChip--09607 betSpotTen--e973f">
                              <div className="flange--c8674">
                                <div className="shadow--ee15e" />
                                <div
                                  className="background--2f10a"
                                  style={{
                                    backgroundColor: `rgb(
                                                    146,
                                                    146,
                                                    146
                                                  )`,
                                  }}
                                />
                                <div className="shader--d42ad" />
                              </div>
                              <div className="chip--e820b">
                                <div
                                  className="chip--29b81"
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
                    <div className="placeholder--2a315 topLeft--840f0" />
                    <div className="placeholder--2a315 topRight--e3652" />
                  </div>
                </div>
                <div
                  className={`betSpot--3d530 ${
                    status === Status.OPEN
                      ? "isBettingTime--be2b7"
                      : "disabled--9d7b0"
                  } `}
                  data-betspot-destination={20}
                  data-role="bet-spot-20"
                  style={{
                    height: "97.5349px",
                    width: "172px",
                  }}
                >
                  <div className="betSpotInner--04779">
                    <div className="front--563c9">
                      <div className="backdrop--d4490" />
                      <div
                        className="styledSpot--fe1f7"
                        style={{
                          height: "97.5349px",
                          width: "172px",
                        }}
                      >
                        <svg
                          height="97.53488372093022"
                          viewBox="0 0 172 97.53488372093022"
                          width={172}
                        >
                          <defs>
                            <linearGradient
                              id="BetSpotGradient-20"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop stopColor="#F9966D" offset="0%" />
                              <stop stopColor="#FFCEB9" offset="33.33%" />
                              <stop stopColor="#F18558" offset="66.66%" />
                              <stop stopColor="#B65228" offset="99.99%" />
                            </linearGradient>
                          </defs>
                          <rect
                            className={`background--728af  ${
                              status === Status.OPEN
                                ? "active--9e66d"
                                : "disabled--f7c24"
                            }`}
                            fill="#FF7840"
                            fillOpacity={status === Status.OPEN ? 1 : 0.2}
                            height="100%"
                            width="100%"
                          />
                          <rect
                            fill="transparent"
                            fillOpacity={0}
                            height="100%"
                            stroke="url(#BetSpotGradient-20)"
                            strokeWidth={9}
                            width="100%"
                          />
                          <g fill="none" fillRule="evenodd">
                            <rect
                              x={9}
                              y={9}
                              width={154}
                              height="79.53488372093022"
                              stroke="#FF7840"
                              strokeOpacity="0.5"
                              strokeWidth={1}
                            />
                            <svg
                              x="9.5"
                              y="9.5"
                              width={153}
                              height="78.53488372093022"
                            >
                              <circle
                                cx={0}
                                cy={0}
                                fill="#FF7840"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={0}
                                cy="79.53488372093022"
                                fill="#FF7840"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy={0}
                                fill="#FF7840"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy="79.53488372093022"
                                fill="#FF7840"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={17}
                                cy="39.26744186046511"
                                r={4}
                                fill="#FF7840"
                                opacity="0.5"
                              />
                              <circle
                                cx={136}
                                cy="39.26744186046511"
                                r={4}
                                fill="#FF7840"
                                opacity="0.5"
                              />
                            </svg>
                          </g>
                        </svg>
                        <div className="spotOverlay--59de7">
                          <div className="ovalBox--305dc">
                            <svg width={93} height={49} viewBox="0 0 93 49">
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <ellipse
                                  stroke="#FF7840"
                                  strokeWidth={2}
                                  fillOpacity="0.5"
                                  fill="#000"
                                  cx="46.5"
                                  cy="24.5"
                                  rx="45.5"
                                  ry="23.5"
                                />
                                <path
                                  d="M26.3437626,9.50061592 C28.832495,9.50061592 30.9719316,11.1906874 30.9719316,15.0778517 C30.9719316,26.7393447 16.6071429,27.7956393 16.6071429,38.1895787 C16.6071429,38.9923627 16.7381288,39.6683912 16.8691147,40.0909091 L17.1310865,40.0486573 C17.1310865,38.7388519 18.2226358,37.3022912 20.6677062,37.3022912 C24.3789738,37.3022912 27.7409457,40.0909091 33.460664,40.0909091 C40.4465795,40.0909091 43.2409457,36.3727519 43.2409457,28.4294161 L42.804326,28.4294161 C42.5860161,29.9504804 41.5381288,30.7110126 39.8789738,30.7110126 C36.47334,30.7110126 32.3691147,29.5279626 28.7015091,29.5279626 C25.732495,29.5279626 21.7155936,29.7392215 18.9212274,32.8658537 L18.7902414,32.7390983 C24.3353119,24.5422518 42.3677062,28.4716679 42.3677062,17.0636856 C42.3677062,12.0779749 36.7353119,8.90909091 29.3127767,8.90909091 C20.7550302,8.90909091 17.1310865,12.5849963 17.1310865,16.2609017 C17.1310865,18.4157428 18.3099598,21.2043607 21.9339034,21.2043607 C24.6846076,21.2043607 26.3001006,19.2185267 26.3001006,17.3171964 C26.3001006,16.9369303 26.2127767,16.4299088 26.1254527,16.1763981 C24.3353119,16.0496428 22.7198189,15.204607 22.7198189,12.9230106 C22.7198189,11.1906874 24.07334,9.50061592 26.3437626,9.50061592 Z M60.6184105,8.90909091 C51.9296781,8.90909091 45.5113682,16.3454053 45.5113682,25.1760286 C45.5113682,34.0066519 51.5367203,40.0909091 60.2691147,40.0909091 C69.0015091,40.0909091 75.5071429,32.6123429 75.5071429,23.7817196 C75.5071429,14.9510963 69.3508048,8.90909091 60.6184105,8.90909091 Z M61.0113682,39.6683912 C58.5662978,39.6683912 56.9071429,33.4573787 56.9071429,24.0352304 C56.9071429,13.3877802 57.8240443,9.33160877 60.0071429,9.33160877 C62.4958753,9.33160877 64.0677062,15.5426213 64.0677062,24.9647696 C64.0677062,35.6967233 63.1944668,39.6683912 61.0113682,39.6683912 Z"
                                  fill="#FF7840"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="paysBoxWrapper--3e540">
                            <div
                              className="paysBox--967b1"
                              style={{
                                backgroundColor: "rgb(57, 30, 19)",
                                color: "rgb(255, 120, 64)",
                              }}
                            >
                              PAYS 20x
                            </div>
                          </div>
                          {status === Status.SUSPENDED && (
                            <div className="disabledOverlay--914ac"></div>
                          )}
                        </div>
                      </div>
                      <div className="chipContainer--e2b9f">
                        <div
                          className="isPortrait--83052 chipSize--c8c49"
                          style={{
                            width: "44px",
                            height: "44px",
                          }}
                        >
                          <div
                            data-is-chip-visible="false"
                            className="hidden--f75dc chip--88d5c"
                          >
                            <div className="perspectiveChip--09607 betSpotTwenty--2d2b5">
                              <div className="flange--c8674">
                                <div className="shadow--ee15e" />
                                <div
                                  className="background--2f10a"
                                  style={{
                                    backgroundColor: `rgb(
                                                    146,
                                                    146,
                                                    146
                                                  )`,
                                  }}
                                />
                                <div className="shader--d42ad" />
                              </div>
                              <div className="chip--e820b">
                                <div
                                  className="chip--29b81"
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
                    <div className="placeholder--2a315 topLeft--840f0" />
                    <div className="placeholder--2a315 topRight--e3652" />
                  </div>
                </div>
                <div
                  className={`betSpot--3d530 ${
                    status === Status.OPEN
                      ? "isBettingTime--be2b7"
                      : "disabled--9d7b0"
                  } `}
                  data-betspot-destination={40}
                  data-role="bet-spot-40"
                  style={{
                    height: "97.5349px",
                    width: "172px",
                  }}
                >
                  <div className="betSpotInner--04779">
                    <div className="front--563c9">
                      <div className="backdrop--d4490" />
                      <div
                        className="styledSpot--fe1f7"
                        style={{
                          height: "97.5349px",
                          width: "172px",
                        }}
                      >
                        <svg
                          height="97.53488372093022"
                          viewBox="0 0 172 97.53488372093022"
                          width={172}
                        >
                          <defs>
                            <linearGradient
                              id="BetSpotGradient-40"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop stopColor="#CF3D3D" offset="0%" />
                              <stop stopColor="#FF909B" offset="33.33%" />
                              <stop stopColor="#CF3D3D" offset="66.66%" />
                              <stop stopColor="#A62C2C" offset="99.99%" />
                            </linearGradient>
                          </defs>
                          <rect
                            className={`background--728af  ${
                              status === Status.OPEN
                                ? "active--9e66d"
                                : "disabled--f7c24"
                            }`}
                            fill="#FF4053"
                            fillOpacity={status === Status.OPEN ? 1 : 0.2}
                            height="100%"
                            width="100%"
                          />
                          <rect
                            fill="transparent"
                            fillOpacity={0}
                            height="100%"
                            stroke="url(#BetSpotGradient-40)"
                            strokeWidth={9}
                            width="100%"
                          />
                          <g fill="none" fillRule="evenodd">
                            <rect
                              x={9}
                              y={9}
                              width={154}
                              height="79.53488372093022"
                              stroke="#FF4053"
                              strokeOpacity="0.5"
                              strokeWidth={1}
                            />
                            <svg
                              x="9.5"
                              y="9.5"
                              width={153}
                              height="78.53488372093022"
                            >
                              <circle
                                cx={0}
                                cy={0}
                                fill="#FF4053"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={0}
                                cy="79.53488372093022"
                                fill="#FF4053"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy={0}
                                fill="#FF4053"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy="79.53488372093022"
                                fill="#FF4053"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={17}
                                cy="39.26744186046511"
                                r={4}
                                fill="#FF4053"
                                opacity="0.5"
                              />
                              <circle
                                cx={136}
                                cy="39.26744186046511"
                                r={4}
                                fill="#FF4053"
                                opacity="0.5"
                              />
                            </svg>
                          </g>
                        </svg>
                        <div className="spotOverlay--59de7">
                          <div className="ovalBox--305dc">
                            <svg width={93} height={49} viewBox="0 0 93 49">
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <ellipse
                                  stroke="#FF4053"
                                  strokeWidth={2}
                                  fillOpacity="0.5"
                                  fill="#000"
                                  cx="46.5"
                                  cy="24.5"
                                  rx="45.5"
                                  ry="23.5"
                                />
                                <path
                                  d="M28.8449605,25.4757871 L28.8449605,32.501454 L17.3554986,32.501454 L30.1655883,22.4833734 C34.3475763,19.2307498 35.5801623,16.5419143 35.5801623,14.2433936 C35.5801623,11.6412947 33.4671578,8.90909091 29.9014627,8.90909091 C27.8324792,8.90909091 25.9395793,9.86319383 24.7510143,11.0341383 C26.0276212,12.508661 26.4238095,14.4168669 26.4238095,16.0214945 C26.4238095,18.4501201 25.5874119,20.922114 23.2983237,23.9578961 L16.6071429,32.7182956 L16.8712684,33.0218738 L28.8449605,33.0218738 L28.8449605,34.2361866 C28.8449605,37.6189152 27.7884583,39.6572259 25.543391,39.6572259 L25.543391,40.0909091 C25.543391,40.0909091 29.3732116,39.9608041 33.951388,39.9608041 C38.5295644,39.9608041 42.359385,40.0909091 42.359385,40.0909091 L42.359385,39.6572259 C40.1143177,39.6572259 39.0578155,38.8765963 39.0578155,35.7974459 L39.0578155,33.0218738 L42.8876361,33.0218738 L42.8876361,32.501454 L39.0578155,32.501454 L39.0578155,20.228221 L28.8449605,25.4757871 Z M60.4960068,8.90909091 C51.7358424,8.90909091 45.2647662,16.3454053 45.2647662,25.1760286 C45.2647662,34.0066519 51.3396541,40.0909091 60.1438394,40.0909091 C68.9480248,40.0909091 75.5071429,32.6123429 75.5071429,23.7817196 C75.5071429,14.9510963 69.3001922,8.90909091 60.4960068,8.90909091 Z M60.8921952,39.6683912 C58.4270233,39.6683912 56.7542281,33.4573787 56.7542281,24.0352304 C56.7542281,13.3877802 57.6786675,9.33160877 59.8797139,9.33160877 C62.3889067,9.33160877 63.97366,15.5426213 63.97366,24.9647696 C63.97366,35.6967233 63.0932415,39.6683912 60.8921952,39.6683912 Z"
                                  fill="#FF4053"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="paysBoxWrapper--3e540">
                            <div
                              className="paysBox--967b1"
                              style={{
                                backgroundColor: "rgb(55, 26, 29)",
                                color: "rgb(255, 64, 83)",
                              }}
                            >
                              PAYS 40x
                            </div>
                          </div>
                          {status === Status.SUSPENDED && (
                            <div className="disabledOverlay--914ac"></div>
                          )}
                        </div>
                      </div>
                      <div className="chipContainer--e2b9f">
                        <div
                          className="isPortrait--83052 chipSize--c8c49"
                          style={{
                            width: "44px",
                            height: "44px",
                          }}
                        >
                          <div
                            data-is-chip-visible="false"
                            className="hidden--f75dc chip--88d5c"
                          >
                            <div className="perspectiveChip--09607 betSpotForty--2f85b">
                              <div className="flange--c8674">
                                <div className="shadow--ee15e" />
                                <div
                                  className="background--2f10a"
                                  style={{
                                    backgroundColor: `rgb(
                                                    146,
                                                    146,
                                                    146
                                                  )`,
                                  }}
                                />
                                <div className="shader--d42ad" />
                              </div>
                              <div className="chip--e820b">
                                <div
                                  className="chip--29b81"
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
                    <div className="placeholder--2a315 topLeft--840f0" />
                    <div className="placeholder--2a315 topRight--e3652" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadowSpotsContainer--141c5 portrait--81f54" />
      </div>
      {status === Status.OPEN && (
        <div className="betOnAll--41352">
          <div className="betOnAllContainer--8600d">
            <div
              className="betOnAllWithTooltip--490a9"
              data-role="bet-on-all-button-with-tooltip"
            >
              <div className="tooltipContainer--3069a" />
              <div
                className="button--5e401 visible--3b3cf animated--937e5"
                data-role="bet-on-all-button"
                data-state-enabled="true"
                style={{ width: "408px", height: "41px" }}
              >
                <div className="buttonSVGWrapper--3b2db">
                  <svg className="buttonSVG--aaf5b" viewBox="0 0 408 41">
                    <defs>
                      <linearGradient
                        id="fadeGrad-bet-on-all-v2-201133736-1757350227717"
                        y2={1}
                        x2={0}
                      >
                        <stop offset={0} stopColor="white" stopOpacity={1} />
                        <stop offset="0.3" stopColor="white" stopOpacity={1} />
                        <stop offset={1} stopColor="white" stopOpacity="0.3" />
                      </linearGradient>
                      <mask id="fadem-bet-on-all-v2-201133736-1757350227717">
                        <rect
                          className="buttonMask--41daf"
                          x={0}
                          y={0}
                          width={408}
                          height={41}
                          fill="url(#fadeGrad-bet-on-all-v2-201133736-1757350227717)"
                        />
                      </mask>
                      <linearGradient
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                        id="g1-bet-on-all-v2-201133736-1757350227717"
                      >
                        <stop stopColor="#FFC94B" offset="0%" />
                        <stop stopColor="#59E777" offset="18.25%" />
                        <stop stopColor="#6298FF" offset="35%" />
                        <stop stopColor="#FF7840" offset="60.55%" />
                        <stop stopColor="#CC85FF" offset="76%" />
                        <stop stopColor="#FF4053" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="100%"
                        y1="50%"
                        x2="0%"
                        y2="50%"
                        id="g3-bet-on-all-v2-201133736-1757350227717"
                      >
                        <stop offset="0.48%" />
                        <stop stopOpacity={0} offset="31.73%" />
                        <stop stopOpacity={0} offset="68.59%" />
                        <stop offset="100%" />
                      </linearGradient>
                    </defs>
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                      mask="url(#fadem-bet-on-all-v2-201133736-1757350227717)"
                    >
                      <rect
                        className="buttonFill--0d9d3"
                        fill="url(#g1-bet-on-all-v2-201133736-1757350227717)"
                        width={408}
                        height={41}
                      />
                      <rect
                        className="buttonDarkBackground--f97af"
                        fill="#1A1A1A"
                        x={2}
                        y={2}
                        width={404}
                        height={37}
                      />
                      <rect
                        fill="transparent"
                        stroke="url(#g3-bet-on-all-v2-201133736-1757350227717)"
                        strokeOpacity="0.4"
                        x={6}
                        y={6}
                        width={396}
                        height={29}
                      />
                    </g>
                  </svg>
                  <div className="buttonInner--f9dac">
                    <img
                      className="iconContainer--611d7 animated--937e5"
                      src={images.chip}
                    />
                    <span className="label--382a2 animated--937e5">
                      BET ON ALL
                    </span>
                  </div>
                  <div className="gradientLeft--3f0bc" />
                  <div className="gradientRight--80ca2" />
                </div>
                <div className="disabledForeground--70093" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BetSlip;
