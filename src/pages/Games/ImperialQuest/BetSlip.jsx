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
      handleStoreRecentPlay(username, eventId, "football-studio");
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
      className="bettingGrid--9427e"
      style={{ position: transform ? "absolute" : "static" }}
    >
      <div>
        <div className="gameResult--fc618">
          <div className="mobileGameResult--fc3c2">
            <div
              className="winMessage--f6733 isHeaderVisible--6ceab"
              style={{ "-scale": "0.5" }}
            >
              <div />
            </div>
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
                  className={`betSpot--3d530  ${
                    status === Status.OPEN
                      ? "isBettingTime--be2b7"
                      : "disabled--9d7b0"
                  } `}
                  data-role="bet-spot-01"
                  style={{ height: "97.5349px", width: "172px" }}
                >
                  <div className="betSpotInner--04779">
                    <div className="front--563c9">
                      <div className="backdrop--d4490" />
                      <div
                        className="styledSpot--fe1f7"
                        style={{ height: "97.5349px", width: "172px" }}
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
                              y1="50%"
                              x2="100%"
                              y2="50%"
                            >
                              <stop stopColor="#FDB913" offset="0%" />
                              <stop stopColor="#FFD530" offset="35%" />
                              <stop stopColor="#FFF450" offset="50%" />
                              <stop stopColor="#FFD530" offset="65%" />
                              <stop stopColor="#FDB913" offset="100%" />
                            </linearGradient>
                          </defs>
                          <rect
                            className={`background--728af   ${
                              status === Status.OPEN
                                ? "active--9e66d"
                                : "disabled--f7c24"
                            }`}
                            fill="#F4B821"
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
                              stroke="#F4B821"
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
                                fill="#F4B821"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={0}
                                cy="79.53488372093022"
                                fill="#F4B821"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy={0}
                                fill="#F4B821"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy="79.53488372093022"
                                fill="#F4B821"
                                opacity="0.5"
                                r={9}
                              />
                              <svg
                                preserveAspectRatio="xMidYMax meet"
                                viewBox="0 0 94 107"
                                fill="none"
                                x="3.06"
                                y="46.74916943521595"
                                width="38.25"
                                height="32.78571428571428"
                              >
                                <path
                                  opacity="0.7"
                                  d="M64.4397 83.0902C62.1497 82.1402 59.9897 80.9302 57.9697 79.5102C55.0697 77.4602 51.9697 74.9402 50.4797 72.6702C50.4797 72.6702 50.7097 75.7202 52.4397 78.5302C16.7097 61.5202 31.2797 0 31.2797 0C31.2797 0 -16.6903 43.42 6.17974 84.2002C12.8097 96.0202 25.7097 101.24 38.6197 105.17C39.3897 104.98 40.2997 105.26 41.1897 105.24C45.7597 105.17 51.9097 104.9 56.4597 105.11C43.3197 102.68 23.4897 95.1102 22.0697 87.2702C36.3997 97.9802 51.1797 98.3802 67.9597 105.02C77.1897 108.67 83.2197 105.14 93.1197 105.27C87.4597 96.6202 78.1997 88.8002 64.4397 83.1002V83.0902ZM33.9297 69.8602C25.3897 61.2502 23.5497 53.6 23.5497 53.6C22.9497 54.26 20.9097 61.8702 20.9097 61.8702C20.1097 60.4 18.3897 50.78 18.3897 50.78C15.9897 54.43 13.6697 69.8302 13.6697 69.8302C9.01975 62.4802 11.8297 47.16 11.8297 47.16C9.88974 50 5.34974 58.41 5.34974 58.41C4.79974 41.43 24.8597 17.56 24.8597 17.56C17.3197 38.24 35.2297 71.1602 33.9397 69.8602H33.9297Z"
                                  fill="url(#left010)"
                                />
                                <defs>
                                  <linearGradient
                                    x1="-73.5303"
                                    y1="53.33"
                                    x2="412.04"
                                    y2="53.33"
                                    id="left010"
                                  >
                                    <stop stopColor="#FDB913" offset={0} />
                                    <stop stopColor="#FFD530" offset="0.35" />
                                    <stop stopColor="#FFF450" offset="0.5" />
                                    <stop stopColor="#FFD530" offset="0.65" />
                                    <stop stopColor="#FDB913" offset={1} />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <svg
                                preserveAspectRatio="xMidYMax meet"
                                viewBox="0 0 93 111"
                                fill="none"
                                x="108.63"
                                y="46.74916943521595"
                                width="38.25"
                                height="32.78571428571428"
                              >
                                <path
                                  opacity="0.7"
                                  d="M37.6 86.3496C37.6 86.3496 16.81 91.0496 0 110.22H62.73C62.2 97.3096 56.58 86.5696 37.6 86.3496Z"
                                  fill="url(#right010)"
                                />
                                <path
                                  opacity="0.7"
                                  d="M53.42 20.6895C53.42 20.6895 52.93 11.4595 54.32 6.49951C54.32 6.49951 51.47 3.79951 51.4 3.05951C51.4 3.05951 45.13 9.39951 47.47 22.5395C47.47 22.5395 50.81 20.5595 53.42 20.6795V20.6895Z"
                                  fill="url(#right011)"
                                />
                                <path
                                  opacity="0.7"
                                  d="M91.47 67.7996C92.65 62.23 96.73 37.23 79.73 26.96C79.24 26.66 78.45 26.33 78.08 26.36C78.81 30.19 76.4 32.95 76.28 33.05C76.22 32.91 76.02 27.3299 75.61 24.8099C75.3 22.8899 74.83 21.04 74.18 19.25C74.18 19.25 74.16 19.21 74.15 19.18C74.13 19.13 74.11 19.08 74.09 19.03C70.56 9.45 62.38 1.11 62.38 1.11C62.38 1.11 62.42 2.63 62.23 3.27C60.86 1.88 59.56 0.55 59.06 0C58.61 0.95 58.16 1.91 57.78 2.89C56.14 7.1 55.32 11.47 55.14 15.97C54.98 20.04 55.36 24.0499 56.4 27.9899C56.45 28.1899 56.51 28.39 56.57 28.59C56.62 28.79 56.66 28.98 56.71 29.18C54.94 27.21 54.21 24.8 53.61 22.27C47.44 23.83 42.66 27.2599 39.06 32.4099C39 32.3799 39.07 30.01 39.4 29.07C37 31.11 35.39 33.73 33.94 36.47C32.54 39.11 31.23 41.7999 29.77 44.4099C27.15 49.0599 25.75 52.6499 21.25 55.5599C18.66 57.2299 16.98 58.43 12.66 60.65C13.16 61.62 13.87 62.41 14.83 62.96C16.67 64.02 19.52 63.8199 21.55 63.5599C21.67 63.5499 20.93 64.9196 19.32 65.4296C21.22 67.1396 22.1 72.4396 33.99 69.2196C37.82 68.1796 41.7 67.3496 45.56 66.4496C48.85 65.6796 52.18 65.2196 55.57 65.2596C58.57 65.2996 64.94 65.9696 67.7 66.8796C66.85 61.3799 48.14 61.9499 48.14 61.9499C68.86 60.1399 71.2 64.53 70.39 69.5496C70.47 69.4196 70.52 69.3396 70.56 69.2596C74.02 62.2 69.75 56.29 68.98 54.55C72.54 56.4 74.56 60.9599 74.69 61.1599C76.05 59.5599 76.77 57.8099 76.9 55.8099C77.03 53.7499 76.81 52.47 76.14 49.19C77.6 51.53 78.97 55.03 78.8 57.76C78.62 60.68 77.76 64.56 75.43 65.3996C78.28 72.2596 79.13 78.9396 75.36 90.6096C75.24 82.8296 73.17 76.1496 67.2 72.2596C63.89 70.0996 60.28 69.0496 56.38 68.8096C53.32 68.6196 50.28 68.8496 47.29 69.4896C44.93 69.9996 43.04 70.8596 38.7 71.2496C39.46 71.4996 54.46 73.2996 63.39 87.9996C63.33 83.0496 60.88 78.9496 58.89 77.1196C67.07 80.5996 73.17 96.2396 72.56 110.21C79.36 102.76 83.01 94.9796 82.52 80.6396C87.16 89.5896 86.48 100.11 83.55 110.22H89.62C92.88 95.3796 93.07 76.9296 85.09 55.61C89.5 57.21 91.43 67.9596 91.47 67.7996ZM43.18 45.5199C42.45 46.2399 41.72 46.9599 40.94 47.6299C39.34 48.9899 37.47 49.33 35.45 48.93C34.54 48.75 34.16 48.19 34.26 47.26C34.64 43.67 37.36 41.0399 41.1 40.6699C43.47 40.4299 47.93 42.81 48.24 43.11C47.91 43.22 44.43 44.3 43.19 45.53L43.18 45.5199ZM72.03 29.1299C71.95 29.0899 71.87 29.0599 71.79 29.0199C69.47 26.7599 66.92 22.4899 66.92 22.4899C66.56 23.6899 66.79 24.94 67.19 26.04C66.02 24.95 65.03 23.66 64.23 22.13C63.48 23.55 63.71 25.01 63.79 26.48C61.38 23.64 60.31 16.6499 60.24 16.6499C58.67 19.2699 58.29 26.4699 58.26 26.3299C57.68 23.6799 57.36 21 57.38 18.27C57.4 15.52 57.75 12.8299 58.72 10.2599C59.18 9.0399 60.9 6.38 60.96 6.45C62.74 8.33 64.51 10.22 66.3 12.09C68.44 14.32 70.26 16.76 71.31 19.7C72.35 22.61 72.84 27.9599 72.03 29.1299Z"
                                  fill="url(#right012)"
                                />
                                <defs>
                                  <linearGradient
                                    x1="-333.72"
                                    y1="98.2896"
                                    x2="151.85"
                                    y2="98.2896"
                                    id="right010"
                                  >
                                    <stop stopColor="#FDB913" offset={0} />
                                    <stop stopColor="#FFD530" offset="0.35" />
                                    <stop stopColor="#FFF450" offset="0.5" />
                                    <stop stopColor="#FFD530" offset="0.65" />
                                    <stop stopColor="#FDB913" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-333.72"
                                    y1="12.7995"
                                    x2="151.85"
                                    y2="12.7995"
                                    id="right011"
                                  >
                                    <stop stopColor="#FDB913" offset={0} />
                                    <stop stopColor="#FFD530" offset="0.35" />
                                    <stop stopColor="#FFF450" offset="0.5" />
                                    <stop stopColor="#FFD530" offset="0.65" />
                                    <stop stopColor="#FDB913" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-333.72"
                                    y1="55.1099"
                                    x2="151.85"
                                    y2="55.1099"
                                    id="right012"
                                  >
                                    <stop stopColor="#FDB913" offset={0} />
                                    <stop stopColor="#FFD530" offset="0.35" />
                                    <stop stopColor="#FFF450" offset="0.5" />
                                    <stop stopColor="#FFD530" offset="0.65" />
                                    <stop stopColor="#FDB913" offset={1} />
                                  </linearGradient>
                                </defs>
                              </svg>
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
                                  stroke="#FFF450"
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
                                  fill="#FFF450"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="paysBoxWrapper--3e540">
                            <div
                              className="paysBox--967b1"
                              style={{
                                backgroundColor: "rgb(46, 46, 13)",
                                color: "rgb(255, 244, 80)",
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
                          style={{ width: "44px", height: "44px" }}
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
                    </div>
                    <div className="placeholder--2a315 topLeft--840f0" />
                    <div className="placeholder--2a315 topRight--e3652" />
                  </div>
                </div>
                <div
                  className={`betSpot--3d530  ${
                    status === Status.OPEN
                      ? "isBettingTime--be2b7"
                      : "disabled--9d7b0"
                  } `}
                  data-role="bet-spot-02"
                  style={{ height: "97.5349px", width: "172px" }}
                >
                  <div className="betSpotInner--04779">
                    <div className="front--563c9">
                      <div className="backdrop--d4490" />
                      <div
                        className="styledSpot--fe1f7"
                        style={{ height: "97.5349px", width: "172px" }}
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
                              y1="50%"
                              x2="100%"
                              y2="50%"
                            >
                              <stop stopColor="#4B95C1" offset="0%" />
                              <stop stopColor="#78ADCC" offset="35%" />
                              <stop stopColor="#92D6E3" offset="50%" />
                              <stop stopColor="#78ADCC" offset="65%" />
                              <stop stopColor="#4B95C1" offset="100%" />
                            </linearGradient>
                          </defs>
                          <rect
                            className={`background--728af   ${
                              status === Status.OPEN
                                ? "active--9e66d"
                                : "disabled--f7c24"
                            }`}
                            fill="#4999C1"
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
                              stroke="#4999C1"
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
                                fill="#4999C1"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={0}
                                cy="79.53488372093022"
                                fill="#4999C1"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy={0}
                                fill="#4999C1"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy="79.53488372093022"
                                fill="#4999C1"
                                opacity="0.5"
                                r={9}
                              />
                              <svg
                                preserveAspectRatio="xMidYMax meet"
                                viewBox="0 0 90 106"
                                fill="none"
                                x="3.06"
                                y="46.74916943521595"
                                width="38.25"
                                height="32.78571428571428"
                              >
                                <path
                                  opacity="0.7"
                                  d="M76.6859 8.61304C69.2859 2.64304 59.5459 0.113041 50.1759 0.00304094C29.3659 -0.236959 10.2559 13.753 3.80587 33.503C-5.33413 59.123 2.57587 87.4629 21.2459 105.673H45.0259C37.3859 102.213 30.4959 97.083 25.1159 90.573C16.2059 79.983 11.3759 65.9329 11.9259 52.043C12.5759 35.403 19.9359 19.883 35.8559 13.013C45.4459 8.76304 56.8759 8.77304 66.4759 12.993C70.2259 14.803 73.4859 17.503 75.9859 20.843C81.6259 28.493 82.7559 39.513 77.9759 47.853C73.8859 54.763 64.4259 57.753 57.0659 54.463C53.1759 52.693 50.6559 48.503 50.8559 44.233C50.9059 43.103 51.1659 41.983 51.5159 40.903C52.0459 39.223 51.1559 37.403 49.4859 36.803C43.7559 35.063 43.6559 45.523 44.5259 49.003C45.3159 52.403 47.1059 55.533 49.6359 57.943C54.6159 62.5929 61.9459 63.9929 68.5159 62.8529C78.0059 61.3029 85.8559 53.633 88.1559 44.313C91.7959 31.483 87.1059 16.943 76.6759 8.62304L76.6859 8.61304Z"
                                  fill="url(#left020)"
                                />
                                <defs>
                                  <linearGradient
                                    x1="-57.5541"
                                    y1="52.843"
                                    x2="427.786"
                                    y2="52.843"
                                    id="left020"
                                  >
                                    <stop stopColor="#4B95C1" offset={0} />
                                    <stop stopColor="#78ADCC" offset="0.35" />
                                    <stop stopColor="#92D6E3" offset="0.5" />
                                    <stop stopColor="#78ADCC" offset="0.65" />
                                    <stop stopColor="#4B95C1" offset={1} />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <svg
                                preserveAspectRatio="xMidYMax meet"
                                viewBox="0 0 99 107"
                                fill="none"
                                x="108.63"
                                y="46.74916943521595"
                                width="38.25"
                                height="32.78571428571428"
                              >
                                <path
                                  opacity="0.7"
                                  d="M49.51 29.2594C49.66 29.2694 51.3 29.2394 51.81 29.9094C53.38 31.9994 56.9 30.8994 56.2 28.0794C55.08 23.5594 50.29 27.3894 49.52 29.2494L49.51 29.2594Z"
                                  fill="url(#right020)"
                                />
                                <path
                                  opacity="0.7"
                                  d="M63.98 28.0889C63.28 30.9089 66.8 31.9989 68.37 29.9189C68.87 29.2489 70.52 29.2789 70.67 29.2689C69.89 27.4089 65.11 23.5789 63.99 28.0989L63.98 28.0889Z"
                                  fill="url(#right021)"
                                />
                                <path
                                  opacity="0.7"
                                  d="M34.1801 106.519H59.6C53.73 97.2689 42.7901 101.179 34.1801 106.519Z"
                                  fill="url(#right022)"
                                />
                                <path
                                  opacity="0.7"
                                  d="M84.36 61.2492C84.66 64.7589 86.55 66.6789 90 65.8789C93.45 65.0789 98.37 62.2689 98.56 54.1992C98.75 46.1292 97.76 49.2392 91.75 43.8392C85.75 38.4392 80.03 39.1892 80.03 39.1892C67.93 40.3592 58.14 69.8889 58.14 69.8889C58.65 53.8692 64.55 47.5392 64.55 47.5392C58.8 48.9292 52.79 45.9692 49.23 40.5292C48.14 38.4092 52.56 37.0292 52.56 37.0292C46.29 38.0392 46.07 29.2292 46.24 26.2492C46.79 16.3492 54.79 17.7992 58.66 19.2992C60.18 19.8892 61.88 19.7892 63.37 19.1292C69.14 16.5792 76.46 19.3192 77.26 27.3392C77.43 29.0392 75.81 38.1892 69.72 36.3892C69.72 36.3892 73.47 38.1092 72.74 39.9592C72.57 40.2192 72.43 40.4292 72.33 40.5792C72.16 40.7792 72.11 40.8592 72.17 40.8192C72.15 40.8492 72.14 40.8692 72.14 40.8692C72.15 40.8492 72.17 40.8392 72.18 40.8192C72.3 40.7292 72.75 40.2392 73.34 39.4492C73.58 39.1892 73.82 38.9492 74.06 38.7292C76.82 36.1892 80.9 35.8492 84.22 37.5892C90.78 41.0392 92.96 32.9792 92.3 29.5692C91.59 25.8592 93.95 16.5992 93.75 15.7292C93.55 14.8692 84.58 17.1492 84.58 17.1492C84.01 13.2992 77.3 -1.47077 61.71 0.119235C46.12 1.70923 42.99 14.5592 42.99 14.5592C42.47 12.4692 33.49 9.96924 34.24 11.2892C34.98 12.6092 32.6 22.8792 33.17 29.4992C33.74 36.1192 42.42 33.1092 42.42 33.1092C43.64 45.7492 57.33 51.9592 57.33 51.9592C44.82 50.8592 41.68 39.7192 41.68 39.7192C27.18 43.7392 19.88 63.2389 18.61 66.9489C17.47 70.2889 4.2 85.0189 0 106.519H30.61C53.08 85.3989 61.57 105.089 61.57 105.089C62.27 96.4389 67.87 94.9489 67.87 94.9489C67.14 95.2589 66.27 98.2289 66.51 99.5989C66.69 100.599 71.51 101.649 78.3 106.519H96.65C88.85 99.7589 78.15 84.3789 78.15 84.3789C46.96 115.249 37.42 58.4492 37.42 58.4492C46.97 94.8689 67.74 90.5589 71.92 86.5489C81.12 77.7389 79.53 62.3689 82.21 55.5892C84.9 48.8192 91.52 54.1592 91.52 54.1592C91.42 54.1292 91.31 54.1092 91.2 54.0892C88.91 53.6892 83.9 55.7392 84.37 61.2292L84.36 61.2492Z"
                                  fill="url(#right023)"
                                />
                                <defs>
                                  <linearGradient
                                    x1="-328.45"
                                    y1="28.4894"
                                    x2="156.89"
                                    y2="28.4894"
                                    id="right020"
                                  >
                                    <stop stopColor="#4B95C1" offset={0} />
                                    <stop stopColor="#78ADCC" offset="0.35" />
                                    <stop stopColor="#92D6E3" offset="0.5" />
                                    <stop stopColor="#78ADCC" offset="0.65" />
                                    <stop stopColor="#4B95C1" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-328.45"
                                    y1="28.4894"
                                    x2="156.89"
                                    y2="28.4894"
                                    id="right021"
                                  >
                                    <stop stopColor="#4B95C1" offset={0} />
                                    <stop stopColor="#78ADCC" offset="0.35" />
                                    <stop stopColor="#92D6E3" offset="0.5" />
                                    <stop stopColor="#78ADCC" offset="0.65" />
                                    <stop stopColor="#4B95C1" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-328.449"
                                    y1="103.739"
                                    x2="156.89"
                                    y2="103.739"
                                    id="right022"
                                  >
                                    <stop stopColor="#4B95C1" offset={0} />
                                    <stop stopColor="#78ADCC" offset="0.35" />
                                    <stop stopColor="#92D6E3" offset="0.5" />
                                    <stop stopColor="#78ADCC" offset="0.65" />
                                    <stop stopColor="#4B95C1" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-328.45"
                                    y1="53.2692"
                                    x2="156.89"
                                    y2="53.2692"
                                    id="right023"
                                  >
                                    <stop stopColor="#4B95C1" offset={0} />
                                    <stop stopColor="#78ADCC" offset="0.35" />
                                    <stop stopColor="#92D6E3" offset="0.5" />
                                    <stop stopColor="#78ADCC" offset="0.65" />
                                    <stop stopColor="#4B95C1" offset={1} />
                                  </linearGradient>
                                </defs>
                              </svg>
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
                                  stroke="#92D6E3"
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
                                  fill="#92D6E3"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="paysBoxWrapper--3e540">
                            <div
                              className="paysBox--967b1"
                              style={{
                                backgroundColor: "rgb(26, 45, 55)",
                                color: "rgb(146, 214, 227)",
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
                          style={{ width: "44px", height: "44px" }}
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
                                    backgroundColor: `gb(
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
                    </div>
                    <div className="placeholder--2a315 topLeft--840f0" />
                    <div className="placeholder--2a315 topRight--e3652" />
                  </div>
                </div>
                <div
                  className={`betSpot--3d530  ${
                    status === Status.OPEN
                      ? "isBettingTime--be2b7"
                      : "disabled--9d7b0"
                  } `}
                  data-role="bet-spot-05"
                  style={{ height: "97.5349px", width: "172px" }}
                >
                  <div className="betSpotInner--04779">
                    <div className="front--563c9">
                      <div className="backdrop--d4490" />
                      <div
                        className="styledSpot--fe1f7"
                        style={{ height: "97.5349px", width: "172px" }}
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
                              y1="50%"
                              x2="100%"
                              y2="50%"
                            >
                              <stop stopColor="#906492" offset="0%" />
                              <stop stopColor="#946996" offset="10%" />
                              <stop stopColor="#A379A2" offset="25%" />
                              <stop stopColor="#B48DB1" offset="35%" />
                              <stop stopColor="#C7B2D6" offset="50%" />
                              <stop stopColor="#B48DB1" offset="65%" />
                              <stop stopColor="#906492" offset="100%" />
                            </linearGradient>
                          </defs>
                          <rect
                            className={`background--728af   ${
                              status === Status.OPEN
                                ? "active--9e66d"
                                : "disabled--f7c24"
                            }`}
                            fill="#B2608B"
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
                              stroke="#B2608B"
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
                                fill="#B2608B"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={0}
                                cy="79.53488372093022"
                                fill="#B2608B"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy={0}
                                fill="#B2608B"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy="79.53488372093022"
                                fill="#B2608B"
                                opacity="0.5"
                                r={9}
                              />
                              <svg
                                preserveAspectRatio="xMidYMax meet"
                                viewBox="0 0 90 105"
                                fill="none"
                                x="3.06"
                                y="46.74916943521595"
                                width="38.25"
                                height="32.78571428571428"
                              >
                                <path
                                  opacity="0.5"
                                  d="M66.5688 0.599412C51.4388 -3.14059 34.6486 11.0194 32.9786 31.9594C31.5386 42.2394 38.6386 71.5198 50.3388 93.8298C52.1688 97.6598 54.1388 101.3 56.1288 104.7H65.7088C62.4588 99.5598 58.0588 91.9198 54.4788 83.0998C47.4588 67.1998 43.2288 47.2794 44.0188 40.2794C44.9688 26.0794 55.0788 15.9694 64.4088 17.8394C73.7788 19.6994 79.2788 30.5694 78.4988 41.9394C77.9488 47.6094 73.1488 64.0498 71.4888 80.1598C70.2388 89.4798 70.0488 98.6798 70.0988 104.7H76.3588C76.6488 99.4098 77.1688 93.7798 78.0188 88.1598C80.5888 65.4798 88.5588 43.0794 89.3988 35.4394C90.6388 20.0594 81.7588 4.31941 66.5588 0.599412H66.5688Z"
                                  fill="url(#left050)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M62.9089 26.2896C56.5389 25.3796 50.2989 31.2296 49.6989 39.2696C49.0889 47.3096 54.3789 53.5796 60.8089 53.3596C67.2489 53.1496 72.4389 47.4596 72.9889 40.5296C73.5189 33.6096 69.2989 27.1896 62.9089 26.2896Z"
                                  fill="url(#left051)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M10.2088 60.6498C0.24876 64.5798 -3.52114 79.1998 3.88886 91.5798C5.50886 94.6998 10.1489 99.5998 16.2889 104.69H26.2588C20.0188 99.7798 14.9489 94.6498 13.3889 91.8298C8.26886 83.4998 9.89876 73.8098 15.8688 71.1498C21.8588 68.4598 29.2688 72.3598 33.3588 79.0398C35.3088 82.4298 39.1689 93.5498 44.6489 103.24C44.9089 103.73 45.1689 104.21 45.4389 104.7H51.2689C43.8189 91.0798 39.4188 75.6298 36.8788 71.0698C31.4488 61.9598 20.2088 56.6801 10.2188 60.6598L10.2088 60.6498Z"
                                  fill="url(#left052)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M18.3888 76.4898C14.4588 78.5198 13.2889 84.2798 16.1589 89.0198C19.0189 93.7698 24.4788 95.1698 27.9888 92.4898C31.5088 89.8098 32.1488 84.5498 29.6988 80.4598C27.2388 76.3698 22.3188 74.4598 18.3788 76.4998L18.3888 76.4898Z"
                                  fill="url(#left053)"
                                />
                                <defs>
                                  <linearGradient
                                    x1="-58.6414"
                                    y1="52.3494"
                                    x2="427.859"
                                    y2="52.3494"
                                    id="left050"
                                  >
                                    <stop stopColor="#956795" offset={0} />
                                    <stop stopColor="#956795" offset="0.16" />
                                    <stop stopColor="#A5739F" offset="0.36" />
                                    <stop stopColor="#B57EA9" offset="0.5" />
                                    <stop stopColor="#C794C3" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-1067.63"
                                    y1="39.7796"
                                    x2="427.859"
                                    y2="39.7796"
                                    id="left051"
                                  >
                                    <stop stopColor="#956795" offset={0} />
                                    <stop stopColor="#956795" offset="0.16" />
                                    <stop stopColor="#A5739F" offset="0.36" />
                                    <stop stopColor="#B57EA9" offset="0.5" />
                                    <stop stopColor="#C794C3" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-1067.63"
                                    y1="81.9998"
                                    x2="427.859"
                                    y2="81.9998"
                                    id="left052"
                                  >
                                    <stop stopColor="#956795" offset={0} />
                                    <stop stopColor="#956795" offset="0.16" />
                                    <stop stopColor="#A5739F" offset="0.36" />
                                    <stop stopColor="#B57EA9" offset="0.5" />
                                    <stop stopColor="#C794C3" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.6409"
                                    y1="84.7498"
                                    x2="427.857"
                                    y2="84.7498"
                                    id="left053"
                                  >
                                    <stop stopColor="#956795" offset={0} />
                                    <stop stopColor="#956795" offset="0.16" />
                                    <stop stopColor="#A5739F" offset="0.36" />
                                    <stop stopColor="#B57EA9" offset="0.5" />
                                    <stop stopColor="#C794C3" offset={1} />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <svg
                                preserveAspectRatio="xMidYMax meet"
                                viewBox="0 0 90 112"
                                fill="none"
                                x="108.63"
                                y="46.74916943521595"
                                width="38.25"
                                height="32.78571428571428"
                              >
                                <path
                                  opacity="0.5"
                                  d="M87.48 39.9C86.78 42.33 85.83 43.73 85.1 44.86C87.02 36.89 81.65 22.8 80.43 19.91C80.23 23.41 78.13 25.68 77.65 26.38C81.49 13.35 75.68 5.45 78.19 0C78.19 0 66.71 0.489998 68.23 12.47C64.8 18.02 61.49 22.83 58.11 28.18C42.52 20.47 27.56 34.47 30.44 47.19C30.44 47.19 23.61 49.7 9.42001 68.3902C14.68 64.95 31.5 56.1 31.5 56.1C31.5 56.1 29.46 53.79 30.99 47.61C30.92 49.23 30.75 63.97 46.99 54.39C46.99 54.39 46.43 60.17 35.62 64.31C22.66 69.2702 5.45 86.3002 4.69 97.0502C9.77 96.9102 15.18 95.2002 20.82 93.1302L1.18002 106.49C1.18002 106.49 0.51 108.06 0 111.1H28.03C29.12 109.47 30.31 107.89 31.61 106.36C35.31 102.04 39.53 98.1602 44.39 95.2002L44.66 95.6102C39.38 99.9502 34.69 105.22 31.06 111.1H66.3C62.68 104.81 57.66 99.3802 51.63 95.2002H51.61C50.53 94.4402 49.6 93.4702 48.94 92.3402C40.96 78.6202 55.13 68.0302 56.87 66.2C62.32 60.47 63.16 56.77 64.07 54.72C65.09 55.22 66.11 55.71 67.13 56.2C70.41 57.79 79.06 61.94 82.47 63.57C81.78 66.02 80.48 67.8902 78.7 69.3602C78.7 69.3602 93.88 61.54 87.47 39.92L87.48 39.9ZM41.12 40.26C42.14 38.32 44.5 37.59 46.39 38.63C48.28 39.66 48.99 42.07 47.97 44.01C46.95 45.95 44.59 46.68 42.7 45.64C40.81 44.61 40.1 42.2 41.12 40.26ZM50.23 49.51C48.52 51.28 42.28 53.58 38.31 50.19C38.31 50.19 39.82 49.33 41.89 47.91C42.31 48.11 42.74 48.26 43.18 48.36C45.89 48.97 48.71 47.64 50.03 45.13C50.79 43.68 50.98 42.02 50.56 40.44C51.51 39.31 52.3 38.14 52.82 36.98C52.82 36.98 56.45 43.05 50.22 49.51H50.23ZM80.07 44.89C75.72 45.21 70.95 45.56 66.88 45.84C67.24 43.68 67.34 41.5 67.02 39.41C68.02 39.3 69.01 39.18 70.01 39.07C71.64 38.88 74.49 38.55 77.45 38.2C78.47 40.6 79.34 42.83 80.06 44.9L80.07 44.89ZM63.7 32.22C62.78 31.2 61.66 30.25 60.31 29.4C59.76 29.05 59.21 28.74 58.66 28.45C59.95 27.18 61.17 25.92 62.42 24.66C63.92 23.13 66.85 20.15 69.56 17.38C69.86 19.76 70.49 22.32 71.53 25.09C68.84 27.55 66.09 30.07 63.7 32.23V32.22ZM67.04 31.61C68.35 30.87 70.54 29.63 72.9 28.29C73.02 28.54 73.13 28.78 73.26 29.03C74.28 31.11 75.21 33.09 76.06 34.97C72.88 36.12 69.65 37.28 66.83 38.28C66.41 36.44 65.65 34.68 64.43 33.08C65.3 32.59 66.17 32.1 67.05 31.61H67.04ZM64.51 53.72C65.38 51.64 66.15 49.39 66.65 47.09C67.49 47.23 68.32 47.36 69.16 47.5C71.71 47.91 77.21 48.79 81.53 49.48C82.42 52.68 82.91 55.44 83.03 57.83C77.52 56.61 70.16 55.01 64.51 53.72Z"
                                  fill="url(#right050)"
                                />
                                <defs>
                                  <linearGradient
                                    x1="-337.341"
                                    y1="55.54"
                                    x2="149.16"
                                    y2="55.54"
                                    id="right050"
                                  >
                                    <stop stopColor="#906492" offset={0} />
                                    <stop stopColor="#956795" offset="0.16" />
                                    <stop stopColor="#A5739F" offset="0.36" />
                                    <stop stopColor="#B57EA9" offset="0.5" />
                                    <stop stopColor="#C794C3" offset={1} />
                                  </linearGradient>
                                </defs>
                              </svg>
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
                                  stroke="#C7B2D6"
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
                                  fill="#C7B2D6"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="paysBoxWrapper--3e540">
                            <div
                              className="paysBox--967b1"
                              style={{
                                backgroundColor: "rgb(47, 37, 55)",
                                color: "rgb(199, 178, 214)",
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
                          style={{ width: "44px", height: "44px" }}
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
                    </div>
                    <div className="placeholder--2a315 topLeft--840f0" />
                    <div className="placeholder--2a315 topRight--e3652" />
                  </div>
                </div>
                <div
                  className={`betSpot--3d530  ${
                    status === Status.OPEN
                      ? "isBettingTime--be2b7"
                      : "disabled--9d7b0"
                  } `}
                  data-betspot-destination={10}
                  data-role="bet-spot-10"
                  style={{ height: "97.5349px", width: "172px" }}
                >
                  <div className="betSpotInner--04779">
                    <div className="front--563c9">
                      <div className="backdrop--d4490" />
                      <div
                        className="styledSpot--fe1f7"
                        style={{ height: "97.5349px", width: "172px" }}
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
                              y1="50%"
                              x2="100%"
                              y2="50%"
                            >
                              <stop stopColor="#7CB65C" offset="0%" />
                              <stop stopColor="#A4CF51" offset="35%" />
                              <stop stopColor="#D3E27C" offset="50%" />
                              <stop stopColor="#A4CF51" offset="65%" />
                              <stop stopColor="#7CB65C" offset="100%" />
                            </linearGradient>
                          </defs>
                          <rect
                            className={`background--728af   ${
                              status === Status.OPEN
                                ? "active--9e66d"
                                : "disabled--f7c24"
                            }`}
                            fill="#89C165"
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
                              stroke="#89C165"
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
                                fill="#89C165"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={0}
                                cy="79.53488372093022"
                                fill="#89C165"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy={0}
                                fill="#89C165"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy="79.53488372093022"
                                fill="#89C165"
                                opacity="0.5"
                                r={9}
                              />
                              <svg
                                preserveAspectRatio="xMidYMax meet"
                                viewBox="0 0 110 103"
                                fill="none"
                                x="3.06"
                                y="46.74916943521595"
                                width="38.25"
                                height="32.78571428571428"
                              >
                                <path
                                  opacity="0.5"
                                  d="M91.7102 59.8801C85.8802 62.8001 81.8902 67.3901 79.5202 73.5401C80.8602 61.4601 81.7802 49.35 85.0902 37.1C84.4002 38.32 83.9202 39.17 83.0602 40.7C84.0402 25.51 82.1502 11.71 72.3302 0C70.0702 14.15 70.9802 27.6001 80.4402 39.2201C82.4002 41.6201 82.9402 43.9201 82.2402 46.9601C81.1402 51.7401 80.5102 56.63 79.6102 61.9401C78.2002 55.05 75.5402 49.3701 71.0202 44.4701C69.0702 42.3601 68.0502 39.4 66.4802 36.61C65.6602 41.14 65.6602 45.57 66.2802 50.02C67.0902 55.74 68.3002 61.3501 71.8202 66.1101C73.0502 67.7701 74.5302 69.3801 76.2202 70.5301C77.9802 71.7301 78.2202 72.9701 78.0002 74.9301C76.9802 84.0001 76.1202 93.1001 75.1602 102.74H76.9402C77.3902 96.3401 77.9502 89.9101 78.5002 83.1101C81.9502 86.9101 85.2802 90.2801 90.5802 90.0001C95.4302 89.7501 99.6602 88.0501 103.46 84.4801C95.4902 80.1601 87.2402 81.0501 78.2802 82.3601C81.6802 79.4001 84.8302 77.2801 88.5902 76.3801C96.3502 74.5301 101.29 69.8501 103.93 62.3501C105.29 58.4901 107.22 54.82 109.03 50.76C106.97 52.03 105.19 53.3 103.27 54.29C99.4602 56.24 95.5402 57.9801 91.7102 59.9001V59.8801Z"
                                  fill="url(#left100)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M58.9202 66.5801C58.1602 64.8001 57.9902 62.6901 57.8902 60.7201C57.7802 58.3501 56.5702 57.0105 54.2202 57.4501C53.7302 57.5401 53.26 57.6601 52.8 57.8101C51.41 54.9405 50.1 52.0405 48.78 49.1405C51.09 45.4805 53.4202 41.4605 56.0902 37.6705C61.1702 30.4605 61.2102 23.4305 55.5702 16.1305C50.34 26.4005 44.1 36.1905 48.13 47.7205C47.22 45.7605 46.3 43.8205 45.32 41.8905C44.18 39.6505 41.53 29.5005 37.61 21.6905C37.1 20.6805 36.07 20.0205 34.94 20.0505C31.93 20.1305 27.34 22.4505 28.87 25.7505C34.66 38.2305 40.98 49.7905 42.45 52.8605C43.61 55.2705 44.79 57.6801 45.97 60.0901C44.91 59.8201 44.27 59.3001 43.66 58.7701C40.09 55.6505 36.79 52.1805 32.89 49.4805C28.9 46.7305 26.48 43.4005 24.93 38.9905C20.4 26.0805 11.22 16.3205 0 7.19049C0.47 9.48049 0.78 11.1705 1.16 12.8405C3.43 22.8805 7.97 31.6605 16.64 38.1705C21.1 41.5205 25.47 44.9605 29.88 48.3705C22.57 46.5605 15.87 48.6405 9 50.6805C16.45 56.9205 22.38 58.2601 31.85 56.0305C33.91 55.5405 36.03 55.2805 38.12 54.9105C38.26 55.2705 38.4 55.6305 38.55 55.9905C32.6 57.5701 28.32 61.2601 24.47 65.8101C27.24 65.9501 30.2 66.3801 32.67 65.5001C36.8 64.0301 37.99 60.0601 39.25 56.1305C40.91 57.7701 42.22 59.3101 43.79 60.5601C44.73 61.3001 45.58 62.1001 46.34 62.9501C45.14 65.0301 46.04 67.6101 47.85 69.2501C49.59 70.8201 51.41 72.6001 52.4 74.6701C54.8502 79.7901 57.2802 84.9201 59.6802 90.0701C58.1902 94.1101 58.5102 98.3801 59.3402 102.74H75.0502C74.5902 102.04 74.3002 101.68 74.1202 101.29C69.0402 89.7401 63.9102 78.2001 58.9502 66.6001L58.9202 66.5801Z"
                                  fill="url(#left101)"
                                />
                                <defs>
                                  <linearGradient
                                    x1="-45.7099"
                                    y1="51.36"
                                    x2="441.03"
                                    y2="51.36"
                                    id="left100"
                                  >
                                    <stop stopColor="#7CB65C" offset={0} />
                                    <stop stopColor="#A4CF51" offset="0.35" />
                                    <stop stopColor="#D3E27C" offset="0.5" />
                                    <stop stopColor="#A4CF51" offset="0.65" />
                                    <stop stopColor="#7CB65C" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-45.71"
                                    y1="54.9505"
                                    x2="441.03"
                                    y2="54.9505"
                                    id="left101"
                                  >
                                    <stop stopColor="#7CB65C" offset={0} />
                                    <stop stopColor="#A4CF51" offset="0.35" />
                                    <stop stopColor="#D3E27C" offset="0.5" />
                                    <stop stopColor="#A4CF51" offset="0.65" />
                                    <stop stopColor="#7CB65C" offset={1} />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <svg
                                preserveAspectRatio="xMidYMax meet"
                                viewBox="0 0 77 105"
                                fill="none"
                                x="108.63"
                                y="46.74916943521595"
                                width="38.25"
                                height="32.78571428571428"
                              >
                                <path
                                  opacity="0.5"
                                  d="M11.1061 42.1756C11.3961 41.0356 11.0661 39.9156 10.3761 39.6556C9.68614 39.4056 8.89612 40.1156 8.60612 41.2456C8.31612 42.3856 8.64613 43.5056 9.33613 43.7656C10.0261 44.0156 10.8161 43.3056 11.1061 42.1656V42.1756Z"
                                  fill="url(#right100)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M39.9662 44.7756C41.1642 44.7756 42.1361 43.804 42.1361 42.6056C42.1361 41.4071 41.1642 40.4356 39.9662 40.4356C38.7672 40.4356 37.7961 41.4071 37.7961 42.6056C37.7961 43.804 38.7672 44.7756 39.9662 44.7756Z"
                                  fill="url(#right101)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M69.7661 30.5052C72.9461 27.3452 77.7561 24.0152 75.9661 14.4452C74.9161 8.84519 71.3861 3.98519 66.2961 1.42519C65.3861 0.96519 64.4762 0.575191 63.5961 0.235191C61.3461 -0.634809 58.8561 1.01519 58.9061 3.43519C58.9461 5.40519 58.1261 7.76519 55.2761 10.1352C43.0461 1.84519 26.4061 6.46519 22.3061 10.7652C22.4161 7.44519 19.7062 6.32519 18.9762 3.73519C18.2362 1.11519 15.1261 -0.0448091 12.8061 1.37519C11.6761 2.06519 10.6062 2.87519 9.81615 3.78519C1.67615 13.0252 5.86614 20.7952 10.0261 24.1552C9.15614 25.4652 7.34615 29.3052 5.53615 33.0352C6.92615 31.8052 8.66614 31.1752 10.8061 31.7552C17.5061 33.5952 15.7361 41.1752 11.7961 47.4652C7.85613 53.7552 10.9861 59.975 10.9861 59.975C7.23614 57.6552 7.54613 53.4652 7.54613 53.4652C1.47613 52.6952 1.18615 48.2752 1.21615 44.7152C-0.623854 52.1952 -0.803844 60.645 3.72616 68.055C15.0562 86.615 18.9261 88.405 39.2161 84.655C45.1461 83.565 50.6161 81.285 55.4261 78.425C59.5661 75.955 63.1262 72.585 65.6962 68.505C66.5362 67.175 67.1462 65.965 67.3462 65.035C67.3462 65.035 74.1661 87.695 29.2161 95.905C17.7861 97.995 7.50615 87.165 5.53615 81.315C3.93615 81.315 -3.41384 89.225 6.44616 99.915C7.81616 101.405 8.46616 102.815 8.66616 104.185H37.4162C37.9462 102.575 38.1561 100.765 37.8561 98.455C40.0361 100.175 41.8061 102.145 43.2461 104.185H55.9462C55.9662 102.045 55.5661 99.885 54.5161 97.855C56.7861 98.755 58.7261 101.305 59.1861 104.185H60.3861C92.6561 60.995 66.8961 58.4452 69.7661 30.5052ZM21.4061 69.625C21.4061 69.625 13.9861 71.475 9.90615 64.735C9.90615 64.735 16.8161 70.875 19.7461 65.745C19.7461 65.745 12.8161 64.945 14.2761 60.245C15.7361 55.5352 21.7661 59.295 21.7661 59.295C21.7661 59.295 27.4962 54.5152 29.2562 60.245C30.7062 64.955 23.7862 65.745 23.7862 65.745C25.7662 71.305 37.0761 66.955 37.0761 66.955C32.2161 74.825 21.4061 69.625 21.4061 69.625ZM42.2562 56.1952C42.2562 56.1952 42.6461 61.015 37.9961 63.685C37.9961 63.685 41.8761 56.5352 36.9961 49.3052C32.1161 42.0752 29.9362 33.3652 38.2262 31.2452C46.5262 29.1352 50.0661 40.7152 50.0761 44.3952C50.0861 48.6252 50.8962 55.1752 42.2562 56.1952ZM68.8462 28.4452C68.3062 27.3952 67.7261 26.4752 67.0761 25.7652C66.1261 26.6952 65.0561 27.3052 63.8961 27.4652C63.8961 27.4652 64.8761 19.9452 61.7161 15.8952C61.7161 15.8952 61.7961 16.8152 61.7661 17.9352C61.7261 20.3652 62.0761 22.7852 62.7161 25.1352C62.9861 26.1152 63.0662 26.7152 63.0662 26.7152C63.0662 26.7152 52.3262 12.6752 37.5062 11.1252C22.6962 9.57519 12.0861 20.8552 12.0861 20.8552C12.3861 19.5352 12.5061 18.1952 12.4061 16.8552C12.3161 15.5452 12.4162 14.2452 12.4162 14.2452C10.2562 17.0452 10.3361 21.7352 10.4661 23.5852C9.37615 21.5752 7.96614 18.5852 7.61614 14.8952C7.15614 10.1052 9.53614 5.45519 13.7361 3.10519C13.7761 3.08519 13.8062 3.06519 13.8462 3.04519C13.8462 3.04519 13.8261 3.99519 14.0761 4.94519C14.0561 4.78519 14.0461 4.63519 14.0561 4.47519C14.1661 2.07519 17.6761 1.95519 18.1262 4.31519C18.2761 5.10519 18.6161 5.89519 19.2461 6.57519C19.5661 6.84519 19.8661 7.13519 20.1262 7.43519C21.3661 8.86519 21.9462 10.5552 22.1662 11.3052C26.2362 8.89519 32.3961 7.15519 41.6761 7.77519C47.9761 8.19519 52.6461 9.95519 56.0961 12.2552C56.3761 11.3852 56.8261 11.1152 58.7761 8.10519C59.4761 7.02519 59.9261 5.78519 60.0161 4.49519C60.0361 4.19519 60.0361 3.90519 60.0161 3.63519C59.9761 2.75519 60.9261 2.17519 61.6761 2.65519C63.1461 3.58519 64.7062 4.67519 65.3462 5.30519C65.6362 4.22519 65.6161 3.13519 65.6161 3.13519C65.8161 3.24519 66.0062 3.35519 66.1962 3.46519C70.3062 5.88519 72.8362 10.2652 73.0662 15.0252C73.4162 22.5052 70.3061 23.2652 68.7161 25.1152L68.8561 28.4552L68.8462 28.4452Z"
                                  fill="url(#right102)"
                                />
                                <defs>
                                  <linearGradient
                                    x1="-350.844"
                                    y1="41.7156"
                                    x2="135.896"
                                    y2="41.7156"
                                    id="right100"
                                  >
                                    <stop stopColor="#7CB65C" offset={0} />
                                    <stop stopColor="#A4CF51" offset="0.35" />
                                    <stop stopColor="#D3E27C" offset="0.5" />
                                    <stop stopColor="#A4CF51" offset="0.65" />
                                    <stop stopColor="#7CB65C" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-350.844"
                                    y1="42.6056"
                                    x2="135.896"
                                    y2="42.6056"
                                    id="right101"
                                  >
                                    <stop stopColor="#7CB65C" offset={0} />
                                    <stop stopColor="#A4CF51" offset="0.35" />
                                    <stop stopColor="#D3E27C" offset="0.5" />
                                    <stop stopColor="#A4CF51" offset="0.65" />
                                    <stop stopColor="#7CB65C" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-350.844"
                                    y1="52.0952"
                                    x2="135.896"
                                    y2="52.0952"
                                    id="right102"
                                  >
                                    <stop stopColor="#7CB65C" offset={0} />
                                    <stop stopColor="#A4CF51" offset="0.35" />
                                    <stop stopColor="#D3E27C" offset="0.5" />
                                    <stop stopColor="#A4CF51" offset="0.65" />
                                    <stop stopColor="#7CB65C" offset={1} />
                                  </linearGradient>
                                </defs>
                              </svg>
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
                                  stroke="#D3E27C"
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
                                  fill="#D3E27C"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="paysBoxWrapper--3e540">
                            <div
                              className="paysBox--967b1"
                              style={{
                                backgroundColor: "rgb(21, 52, 28)",
                                color: "rgb(211, 226, 124)",
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
                          style={{ width: "44px", height: "44px" }}
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
                    </div>
                    <div className="placeholder--2a315 topLeft--840f0" />
                    <div className="placeholder--2a315 topRight--e3652" />
                  </div>
                </div>
                <div
                  className={`betSpot--3d530  ${
                    status === Status.OPEN
                      ? "isBettingTime--be2b7"
                      : "disabled--9d7b0"
                  } `}
                  data-betspot-destination={20}
                  data-role="bet-spot-20"
                  style={{ height: "97.5349px", width: "172px" }}
                >
                  <div className="betSpotInner--04779">
                    <div className="front--563c9">
                      <div className="backdrop--d4490" />
                      <div
                        className="styledSpot--fe1f7"
                        style={{ height: "97.5349px", width: "172px" }}
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
                              y1="50%"
                              x2="100%"
                              y2="50%"
                            >
                              <stop stopColor="#E66A1F" offset="0%" />
                              <stop stopColor="#F9A870" offset="35%" />
                              <stop stopColor="#FECF8D" offset="50%" />
                              <stop stopColor="#F9A870" offset="65%" />
                              <stop stopColor="#E66A1F" offset="100%" />
                            </linearGradient>
                          </defs>
                          <rect
                            className={`background--728af   ${
                              status === Status.OPEN
                                ? "active--9e66d"
                                : "disabled--f7c24"
                            }`}
                            fill="#ED5520"
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
                              stroke="#ED5520"
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
                                fill="#ED5520"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={0}
                                cy="79.53488372093022"
                                fill="#ED5520"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy={0}
                                fill="#ED5520"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy="79.53488372093022"
                                fill="#ED5520"
                                opacity="0.5"
                                r={9}
                              />
                              <svg
                                preserveAspectRatio="xMidYMax meet"
                                viewBox="0 0 106 105"
                                fill="none"
                                x="3.06"
                                y="46.74916943521595"
                                width="38.25"
                                height="32.78571428571428"
                              >
                                <path
                                  opacity="0.5"
                                  d="M34.818 13.26L35.4579 14.66L36.9679 14.39C38.4379 14.12 39.958 13.99 41.498 13.99C44.128 13.99 46.8481 14.39 49.5981 15.16L51.4081 15.67L52.0181 13.89C53.1281 10.67 54.498 7.72 56.078 5.12L57.398 2.96L54.9881 2.19C50.4381 0.739999 45.878 0 41.428 0C38.648 0 35.898 0.290001 33.238 0.860001L31.438 1.25L31.688 3.07C32.128 6.26 33.178 9.69 34.818 13.25V13.26Z"
                                  fill="url(#left200)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M16.5779 28.0201L18.1479 28.7001L19.048 27.2401C20.888 24.2601 23.088 21.7201 25.568 19.7001C26.378 19.0401 27.278 18.4001 28.298 17.7601L29.758 16.8501L29.0581 15.2801C27.6581 12.1301 26.6379 8.99011 26.0379 5.96011L25.518 3.33011L23.158 4.60011C20.848 5.84011 18.688 7.28011 16.738 8.86011C12.968 11.9301 9.70795 15.6801 7.04795 19.9901L6.14795 21.4501L7.45795 22.5501C9.93795 24.6301 13.008 26.4801 16.568 28.0301L16.5779 28.0201Z"
                                  fill="url(#left201)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M51.3281 74.0398L48.7781 73.5298C46.3481 73.0398 44.0181 72.6198 41.6681 72.2498C38.2981 71.7198 35.1281 70.8898 32.2281 69.7798L30.8081 69.2398L29.9181 70.4698C27.7981 73.3798 25.4981 75.8798 23.0781 77.9098L20.7081 79.8898L23.4881 81.2198C28.3181 83.5298 33.6981 85.1598 39.4981 86.0698C40.0981 86.1598 40.6881 86.2598 41.2781 86.3598L42.2281 86.5198L42.9281 85.9398C45.6681 83.6598 48.0981 80.4398 50.1481 76.3598L51.3181 74.0398H51.3281Z"
                                  fill="url(#left202)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M2.63805 49.9396C5.71805 49.9396 9.08805 49.3896 12.658 48.3096L14.148 47.8597L14.0682 46.2997C13.8782 42.8697 14.2881 39.3797 15.2581 35.8997L15.7281 34.2397L14.148 33.5497C10.978 32.1597 8.09815 30.5296 5.55815 28.6796L3.37815 27.0996L2.50815 29.6496C0.468149 35.6496 -0.351953 42.0297 0.138047 48.1097L0.278046 49.8997L2.06815 49.9396C2.25815 49.9396 2.63805 49.9396 2.63805 49.9396Z"
                                  fill="url(#left203)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M80.988 84.5098L78.918 83.4698C72.938 80.4798 66.198 77.9298 58.878 75.9098L57.238 75.4598L56.538 77.0098C55.098 80.2098 53.398 83.0898 51.498 85.5898L49.678 87.9798L52.588 88.7198C58.938 90.3198 64.768 92.3198 69.928 94.6598L70.978 95.1298L71.908 94.4598C74.628 92.4998 77.228 89.7898 79.638 86.3898L80.978 84.4998L80.988 84.5098Z"
                                  fill="url(#left204)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M78.728 35.1202C75.658 35.1202 72.298 35.6902 68.718 36.8202L67.368 37.2502L67.328 38.6602C67.148 45.5502 64.608 51.0202 64.498 51.2402C63.688 52.9302 63.588 54.8202 64.208 56.5902C64.828 58.3502 66.098 59.7698 67.788 60.5698C68.738 61.0198 69.748 61.2598 70.798 61.2598C73.478 61.2598 75.958 59.6998 77.108 57.2802C78.448 54.4902 81.528 46.9202 81.318 37.0802L81.278 35.1902L79.388 35.1402C79.168 35.1402 78.938 35.1402 78.718 35.1402L78.728 35.1202Z"
                                  fill="url(#left205)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M87.8481 88.6298L86.2181 87.5498L85.1081 89.1598C83.1881 91.9498 81.0981 94.4298 78.8681 96.5198L77.0181 98.2698L79.1681 99.6398C81.1181 100.89 82.9381 102.2 84.6381 103.58H97.7481C98.5481 102.74 100.038 104.56 100.608 103.86H105.018L99.7281 98.6198C96.3381 94.9798 92.3381 91.6198 87.8481 88.6298Z"
                                  fill="url(#left206)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M58.088 19.0598C61.798 21.8998 64.428 25.3798 65.898 29.3998L66.528 31.1198L68.298 30.6198C71.618 29.6898 74.828 29.1698 77.858 29.0898L80.448 29.0197L79.698 26.5398C77.268 18.4398 72.228 11.7298 64.718 6.59979L63.068 5.46979L61.948 7.11979C59.658 10.5098 58.208 14.2997 57.398 16.8797L56.978 18.2098L58.078 19.0598H58.088Z"
                                  fill="url(#left207)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M24.228 67.9898L25.438 66.4198L23.868 65.2098C20.418 62.5498 17.828 59.2498 16.158 55.3998L15.468 53.7998L13.798 54.2798C10.458 55.2298 7.21801 55.7898 4.14801 55.9298L1.46802 56.0498L2.36802 58.5798C4.68802 65.0598 8.60802 70.6398 14.028 75.1798L15.118 76.0898L16.328 75.3498C19.088 73.6698 21.748 71.1898 24.218 67.9898H24.228Z"
                                  fill="url(#left208)"
                                />
                                <defs>
                                  <linearGradient
                                    x1="-58.3119"
                                    y1="7.84"
                                    x2="428.607"
                                    y2="7.84"
                                    id="left200"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.3119"
                                    y1="16.0101"
                                    x2="428.607"
                                    y2="16.0101"
                                    id="left201"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.3119"
                                    y1="77.8798"
                                    x2="428.607"
                                    y2="77.8798"
                                    id="left202"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.3119"
                                    y1="38.5196"
                                    x2="428.607"
                                    y2="38.5196"
                                    id="left203"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.3119"
                                    y1="85.2998"
                                    x2="428.607"
                                    y2="85.2998"
                                    id="left204"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.3119"
                                    y1="48.1802"
                                    x2="428.607"
                                    y2="48.1802"
                                    id="left205"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.3119"
                                    y1="95.7898"
                                    x2="428.607"
                                    y2="95.7898"
                                    id="left206"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.3119"
                                    y1="18.2998"
                                    x2="428.607"
                                    y2="18.2998"
                                    id="left207"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.3119"
                                    y1="64.9398"
                                    x2="428.607"
                                    y2="64.9398"
                                    id="left208"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <svg
                                preserveAspectRatio="xMidYMax meet"
                                viewBox="0 0 91 104"
                                fill="none"
                                x="108.63"
                                y="46.74916943521595"
                                width="38.25"
                                height="32.78571428571428"
                              >
                                <path
                                  opacity="0.5"
                                  d="M80.9399 68.0051C72.7799 70.7751 72.4799 79.2651 68.0399 84.3151C57.9999 96.1151 49.23 95.4851 48.83 95.4851C50.94 97.8851 52.3599 100.855 52.8699 103.955H69.6799C81.9799 93.1551 82.4099 78.8951 80.9399 68.0051Z"
                                  fill="url(#right200)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M21.03 66.3561C20.4 78.0361 14.17 97.3661 0 102.926C0.56 105.396 16.5 101.546 17.71 103.946H50.4C43.35 91.6361 26.84 88.5861 21.03 66.3461V66.3561Z"
                                  fill="url(#right201)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M86.4699 62.1551C85.8899 62.9251 85.1699 78.4151 84.2399 84.7651C83.6399 88.8751 81.91 97.6051 73.83 103.955H85.2199C91.4099 89.5951 91.9199 75.6351 86.4699 62.1551Z"
                                  fill="url(#right202)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M60.07 70.2061C60.07 70.2061 60.1099 71.8961 59.8699 72.4961C59.8699 72.4961 58.5399 67.1461 51.6199 67.3861C44.6999 67.1461 43.3699 72.4961 43.3699 72.4961C43.1299 71.8961 43.17 70.2061 43.17 70.2061C38.3 73.9461 42 79.3861 42 79.3861C44.62 83.1761 44.72 82.0761 49.17 84.4861C54.22 87.2161 51.62 90.7461 48.83 93.5761C55.21 91.4761 66.12 76.5161 60.07 70.2161V70.2061Z"
                                  fill="url(#right203)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M18.1899 22.5952C15.4799 27.6152 10.71 41.2152 15.33 52.4152C15.33 52.4152 20.4099 64.5851 27.2199 66.8451C37.8199 70.3651 37.1499 79.9951 37.1499 79.9951C37.1499 79.9951 41.2899 70.6351 29.0599 63.8151C27.9499 63.1951 27.0999 62.1751 26.8099 60.9451C26.5299 59.7551 25.6399 53.3251 22.54 51.3251C19.57 49.4151 13.0799 52.7952 19.0199 32.9652C18.4699 35.9952 15.67 45.6452 27.17 52.4052C27.17 52.4052 30.7899 52.1651 34.2899 47.5751C34.2899 47.5751 26.6599 58.4951 38.3399 61.7651C38.3399 61.7651 33.5099 61.7051 32.5999 60.9851C32.5999 60.9851 39.2999 71.5551 50.3499 63.0351C50.3499 63.0351 50.89 60.3151 47.51 58.6852C47.51 58.6852 46.5399 55.5452 44.1899 55.0052C41.8399 54.4652 42.9799 49.0252 43.3999 48.2452C43.3999 48.2452 42.8 53.0752 46.48 53.2552C50.16 53.4352 48.23 55.4852 51.61 55.3052C54.99 55.4852 53.0599 53.4352 56.7399 53.2552C60.4199 53.0752 59.82 48.2452 59.82 48.2452C60.2399 49.0252 61.3899 54.4652 59.0299 55.0052C56.6799 55.5452 55.7099 58.6852 55.7099 58.6852C52.3299 60.3151 52.8699 63.0351 52.8699 63.0351C63.9199 71.5451 70.6199 60.9851 70.6199 60.9851C69.7099 61.7051 64.8799 61.7651 64.8799 61.7651C77.56 58.5551 68.9299 47.5751 68.9299 47.5751C72.4299 52.1651 76.05 52.4052 76.05 52.4052C85.18 48.0752 84.8199 36.5451 84.2599 33.2951C90.0299 52.7551 83.5899 49.4152 80.6299 51.3152C77.5299 53.3052 76.64 59.7351 76.36 60.9351C76.07 62.1651 75.22 63.1851 74.11 63.8051C61.88 70.6251 66.0199 79.9851 66.0199 79.9851C66.0199 79.9851 65.34 70.3551 75.95 66.8351C82.77 64.5751 87.8399 52.4052 87.8399 52.4052C92.4099 41.3252 87.7899 27.8752 85.0599 22.7452L85.0999 22.7652C85.0999 22.7652 84.68 21.8552 83.05 18.9052C81.42 15.9452 82.5099 14.1952 82.5099 14.1952C87.3999 11.9652 89.33 3.8752 87.64 1.1552C85.95 -1.5648 80.8199 1.27509 76.4099 2.00509C71.9999 2.73509 72.8499 6.6552 72.8499 6.6552C70.9199 -0.534805 52.8 0.435198 52.8 0.435198C52.8 0.435198 51.53 2.97519 57.45 3.45519C63.37 3.93519 64.5699 9.2551 64.2099 8.2251C63.8499 7.1951 58.4099 5.5652 55.9999 5.5652C53.5899 5.5652 51.5899 3.45519 51.5899 3.45519C51.5899 3.45519 49.5999 5.5652 47.1799 5.5652C44.7599 5.5652 39.3299 7.1951 38.9699 8.2251C38.6099 9.2551 39.82 3.93519 45.73 3.45519C51.65 2.97519 50.3799 0.435198 50.3799 0.435198C50.3799 0.435198 32.27 -0.534805 30.33 6.6552C30.33 6.6552 31.1799 2.73509 26.7699 2.00509C22.3599 1.28509 17.23 -1.5548 15.54 1.1552C13.85 3.8752 15.78 11.9652 20.67 14.1952C20.67 14.1952 21.7599 15.9452 20.1299 18.9052C18.8899 21.1652 18.3499 22.2252 18.1599 22.5952H18.1899ZM74.2699 48.8852C71.9799 48.5252 66.42 41.0352 66.42 41.0352C69.26 42.6752 72.6299 42.7852 72.6299 42.7852C84.2199 33.5452 76.26 22.3852 76.26 22.3852C89.36 39.5952 74.2699 48.8951 74.2699 48.8951V48.8852ZM75.7199 23.1852C75.7199 23.1852 77.1999 27.4052 71.9399 28.1552C71.2299 28.2552 70.4499 28.3852 69.6499 28.5252C70.4899 30.4852 69.3999 32.8851 67.1499 33.9551C64.8599 35.0551 62.2299 34.3352 61.29 32.3552C61 31.7452 60.8999 31.0852 60.9699 30.4352C59.1799 30.9352 57.93 31.4051 57.82 31.7251C57.82 31.7251 58.0199 26.0051 66.8699 25.6451C75.7199 25.2851 75.7199 23.1751 75.7199 23.1751V23.1852ZM51.7 14.4751C57.68 10.8951 64.2 11.1051 70.11 14.4251C64.02 13.1451 57.63 15.1252 52.48 20.7152L51.6799 21.5851L50.8699 20.6952C45.3699 14.6252 38.47 12.6651 31.98 14.4251C38.28 10.6251 45.3299 10.3951 51.7099 14.4751H51.7ZM35.98 25.6451C44.84 26.0051 45.0299 31.7251 45.0299 31.7251C44.9199 31.4151 43.6699 30.9452 41.8799 30.4352C41.9499 31.0852 41.8599 31.7452 41.5599 32.3552C40.6199 34.3352 37.99 35.0451 35.7 33.9551C33.46 32.8851 32.37 30.4752 33.2 28.5252C32.39 28.3852 31.6199 28.2552 30.9099 28.1552C25.6399 27.3952 27.1299 23.1852 27.1299 23.1852C27.1299 23.1852 27.13 25.2952 35.98 25.6552V25.6451ZM26.9699 22.3752C26.9699 22.3752 19.0099 33.5452 30.5999 42.7752C30.5999 42.7752 33.9699 42.6652 36.8099 41.0252C36.8099 41.0252 31.2599 48.5152 28.9599 48.8752C28.9599 48.8752 13.8599 39.5751 26.9699 22.3651V22.3752Z"
                                  fill="url(#right204)"
                                />
                                <defs>
                                  <linearGradient
                                    x1="-336.88"
                                    y1="85.9751"
                                    x2="150.04"
                                    y2="85.9751"
                                    id="right200"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-336.88"
                                    y1="85.1561"
                                    x2="150.04"
                                    y2="85.1561"
                                    id="right201"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-336.88"
                                    y1="83.0551"
                                    x2="150.04"
                                    y2="83.0551"
                                    id="right202"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-336.88"
                                    y1="80.4761"
                                    x2="150.04"
                                    y2="80.4761"
                                    id="right203"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-336.88"
                                    y1="39.9952"
                                    x2="150.04"
                                    y2="39.9952"
                                    id="right204"
                                  >
                                    <stop stopColor="#E66A1F" offset={0} />
                                    <stop stopColor="#F9A870" offset="0.35" />
                                    <stop stopColor="#FECF8D" offset="0.5" />
                                    <stop stopColor="#F9A870" offset="0.65" />
                                    <stop stopColor="#E66A1F" offset={1} />
                                  </linearGradient>
                                </defs>
                              </svg>
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
                                  stroke="#F8B180"
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
                                  fill="#F8B180"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="paysBoxWrapper--3e540">
                            <div
                              className="paysBox--967b1"
                              style={{
                                backgroundColor: "rgb(57, 30, 19)",
                                color: "rgb(248, 177, 128)",
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
                          style={{ width: "44px", height: "44px" }}
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
                    </div>
                    <div className="placeholder--2a315 topLeft--840f0" />
                    <div className="placeholder--2a315 topRight--e3652" />
                  </div>
                </div>
                <div
                  className={`betSpot--3d530  ${
                    status === Status.OPEN
                      ? "isBettingTime--be2b7"
                      : "disabled--9d7b0"
                  } `}
                  data-betspot-destination={40}
                  data-role="bet-spot-40"
                  style={{ height: "97.5349px", width: "172px" }}
                >
                  <div className="betSpotInner--04779">
                    <div className="front--563c9">
                      <div className="backdrop--d4490" />
                      <div
                        className="styledSpot--fe1f7"
                        style={{ height: "97.5349px", width: "172px" }}
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
                              y1="50%"
                              x2="100%"
                              y2="50%"
                            >
                              <stop stopColor="#B73A46" offset="0%" />
                              <stop stopColor="#F69896" offset="35%" />
                              <stop stopColor="#F8ADAD" offset="50%" />
                              <stop stopColor="#F69896" offset="65%" />
                              <stop stopColor="#B73A46" offset="100%" />
                            </linearGradient>
                          </defs>
                          <rect
                            className={`background--728af   ${
                              status === Status.OPEN
                                ? "active--9e66d"
                                : "disabled--f7c24"
                            }`}
                            fill="#BA323F"
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
                              stroke="#BA323F"
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
                                fill="#BA323F"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={0}
                                cy="79.53488372093022"
                                fill="#BA323F"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy={0}
                                fill="#BA323F"
                                opacity="0.5"
                                r={9}
                              />
                              <circle
                                cx={154}
                                cy="79.53488372093022"
                                fill="#BA323F"
                                opacity="0.5"
                                r={9}
                              />
                              <svg
                                preserveAspectRatio="xMidYMax meet"
                                viewBox="0 0 89 104"
                                fill="none"
                                x="3.06"
                                y="46.74916943521595"
                                width="38.25"
                                height="32.78571428571428"
                              >
                                <path
                                  opacity="0.5"
                                  d="M28.3627 46.7994C19.9727 48.6694 22.9527 59.5092 30.9827 55.9593C37.5727 53.0393 41.8628 49.7694 56.0028 52.0594C56.0028 52.0594 43.1328 43.5094 28.3528 46.7994H28.3627Z"
                                  fill="url(#left400)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M44.4527 29.0391C41.3827 28.3591 35.9926 26.2491 32.0526 30.9391C31.0226 32.1591 30.6226 33.7991 31.1126 35.3191C34.5126 45.8591 57.3927 35.5391 67.2027 55.5391C67.2027 55.5391 67.1627 55.4291 67.0727 55.2291C68.0527 57.0691 68.9227 58.9592 69.6527 60.8892C69.6527 60.8892 60.0327 -1.18089 28.1027 0.159114C23.9827 0.329114 20.4526 3.51911 20.2526 7.64911C19.9126 14.5291 28.5227 15.4591 44.4527 29.0491V29.0391ZM36.3227 6.73911C45.8327 10.9391 54.8027 26.6391 56.6227 34.0491C56.5127 33.9191 39.7427 18.2791 31.3327 13.4091C30.7627 13.0791 30.2126 12.7091 29.7326 12.2591C25.1226 7.91911 29.8627 3.64911 36.3227 6.72911V6.73911Z"
                                  fill="url(#left401)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M74.4227 2.2193C73.4227 -0.0306971 70.5127 -0.630698 68.4527 0.699302C55.5527 9.0093 65.5327 34.1293 65.5327 34.1293C60.8627 19.4093 77.2327 8.5693 74.4227 2.2193Z"
                                  fill="url(#left402)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M2.95272 5.06909C0.872719 5.25909 -0.39738 7.42909 0.11262 9.44909C3.29262 22.0591 25.4026 22.2691 25.4026 22.2691C8.17262 14.1491 8.81272 4.52908 2.95272 5.05908V5.06909Z"
                                  fill="url(#left403)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M85.0627 13.0597C71.4727 11.2097 69.6627 29.2797 69.6627 29.2797C73.5627 20.8797 87.1627 23.5497 88.4427 17.5997C88.9127 15.4297 87.2627 13.3597 85.0627 13.0597Z"
                                  fill="url(#left404)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M76.6827 62.5492C76.0127 60.5792 73.5827 59.8592 71.9027 61.0992L66.5327 65.0692C65.4127 65.8992 64.8027 67.2192 64.8027 68.6092V68.6292C64.7627 71.0792 63.7427 73.1892 62.5827 75.5792C61.7327 77.2392 60.7727 78.9492 59.7727 80.7192C55.8727 87.5192 52.1727 95.1392 52.2527 103.179H71.6727C70.5527 101.509 69.8227 99.5892 69.6527 97.3892C69.3427 94.1392 70.0027 90.6392 70.8427 87.2892C71.8227 83.3692 75.6227 77.5892 76.5427 73.4992C77.3127 69.9692 77.8727 66.1992 76.6927 62.5992V62.5592L76.6827 62.5492Z"
                                  fill="url(#left405)"
                                />
                                <defs>
                                  <linearGradient
                                    x1="-58.8473"
                                    y1="51.3594"
                                    x2="427.123"
                                    y2="51.3594"
                                    id="left400"
                                  >
                                    <stop stopColor="#B73A46" offset={0} />
                                    <stop stopColor="#F69896" offset="0.35" />
                                    <stop stopColor="#F8ADAD" offset="0.5" />
                                    <stop stopColor="#F69896" offset="0.65" />
                                    <stop stopColor="#B73A46" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.8473"
                                    y1="30.5091"
                                    x2="427.123"
                                    y2="30.5091"
                                    id="left401"
                                  >
                                    <stop stopColor="#B73A46" offset={0} />
                                    <stop stopColor="#F69896" offset="0.35" />
                                    <stop stopColor="#F8ADAD" offset="0.5" />
                                    <stop stopColor="#F69896" offset="0.65" />
                                    <stop stopColor="#B73A46" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.8473"
                                    y1="17.0593"
                                    x2="427.123"
                                    y2="17.0593"
                                    id="left402"
                                  >
                                    <stop stopColor="#B73A46" offset={0} />
                                    <stop stopColor="#F69896" offset="0.35" />
                                    <stop stopColor="#F8ADAD" offset="0.5" />
                                    <stop stopColor="#F69896" offset="0.65" />
                                    <stop stopColor="#B73A46" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.8473"
                                    y1="13.6591"
                                    x2="427.123"
                                    y2="13.6591"
                                    id="left403"
                                  >
                                    <stop stopColor="#B73A46" offset={0} />
                                    <stop stopColor="#F69896" offset="0.35" />
                                    <stop stopColor="#F8ADAD" offset="0.5" />
                                    <stop stopColor="#F69896" offset="0.65" />
                                    <stop stopColor="#B73A46" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.8473"
                                    y1="21.1097"
                                    x2="427.123"
                                    y2="21.1097"
                                    id="left404"
                                  >
                                    <stop stopColor="#B73A46" offset={0} />
                                    <stop stopColor="#F69896" offset="0.35" />
                                    <stop stopColor="#F8ADAD" offset="0.5" />
                                    <stop stopColor="#F69896" offset="0.65" />
                                    <stop stopColor="#B73A46" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-58.8473"
                                    y1="81.8292"
                                    x2="427.123"
                                    y2="81.8292"
                                    id="left405"
                                  >
                                    <stop stopColor="#B73A46" offset={0} />
                                    <stop stopColor="#F69896" offset="0.35" />
                                    <stop stopColor="#F8ADAD" offset="0.5" />
                                    <stop stopColor="#F69896" offset="0.65" />
                                    <stop stopColor="#B73A46" offset={1} />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <svg
                                preserveAspectRatio="xMidYMax meet"
                                viewBox="0 0 109 112"
                                fill="none"
                                x="108.63"
                                y="46.74916943521595"
                                width="38.25"
                                height="32.78571428571428"
                              >
                                <path
                                  opacity="0.5"
                                  d="M60.31 15.41C63.3 15.42 65.3 16.0799 65.38 16.0999C65.58 16.1699 65.76 16.27 65.9 16.41C68.89 14.46 72.73 13.1099 77.36 12.3799C77.99 12.2799 79.0101 11.72 80.2401 10.89C75.2701 0.230003 58.35 0 58.35 0C58.35 0 56.8 12.01 53.26 11.67C46.24 11 40.47 24.9299 40.92 24.4899C50.17 15.3999 56.45 15.39 60.32 15.4L60.31 15.41Z"
                                  fill="url(#right400)"
                                />
                                <path
                                  opacity="0.5"
                                  d="M108.93 43.6401C105.68 40.6601 96.86 34.8101 96.86 34.8101C99.77 34.3401 107.15 37.2001 108.73 38.1701C108.75 34.6201 106.08 29.1501 102.83 25.6001C100.51 25.2201 97.34 24.7201 96.83 24.7601C96.23 24.8101 99.93 23.4701 101.98 22.7401C101.89 22.4501 101.79 22.1701 101.69 21.8801C96.45 6.67009 89.78 6.6601 89.78 6.6601C89.78 6.6601 81.76 16.2401 78.5 16.6801C75.24 17.1201 68.55 16.6901 64.41 20.3401L64.91 18.4901C64.91 18.4901 55.23 15.0201 46.03 23.2101C36.83 31.4001 36.44 28.6301 34.26 30.1301C32.08 31.6301 29.94 33.6201 31.65 38.2601C31.65 38.2601 32.12 39.8701 28.37 44.3001C26.68 46.3001 26.63 49.0701 26.69 52.4001C26.93 52.7301 27.17 53.1301 27.41 53.6401C29.12 57.2501 28.64 57.2001 28.64 57.2001C28.64 57.2001 27.59 57.6101 26.73 56.6901C26.66 58.2201 26.38 59.8201 25.74 61.8001C31.54 60.4201 35.34 64.2501 35.34 64.2501C31.11 62.6101 28.18 61.9301 25.38 62.8901C25.1 63.7201 24.97 64.0001 24.62 64.7801C30.11 63.5601 32.69 66.2898 32.69 66.2898C28.76 64.7601 25.08 65.4501 24.31 65.5201C24 66.2098 23.89 66.3798 23.54 66.9898C21.56 70.3698 15.23 79.9898 21.48 90.5798C20.32 89.4198 18.81 87.7698 18.24 85.3398C14.45 90.3498 9.27 98.2198 0 100.62C7.38 102.52 17.61 95.3798 21.95 91.3298C22.83 92.6998 23.93 94.0798 25.28 95.4598C24.91 95.7798 21.11 103.54 14.66 111.08H16.02C27.04 97.4298 36.78 75.5298 36.78 75.5298C41.86 70.9498 43.11 77.4898 43.11 77.4898C36.1 94.5198 28.63 104.83 22.19 111.08H23.76C26.53 108.31 29.06 105.27 31.23 102.24C31.23 102.24 36.91 93.6098 39.67 87.8898C39.67 87.8898 37.14 96.3398 32.24 103.7C33.9 106.19 35.3 108.6 36.38 111.08H57.27C54.66 101.31 48.79 90.6598 43.79 83.6598C46.51 85.3798 51.75 90.1698 53.56 93.7798C53.84 94.3498 54.75 93.3598 54.75 92.7298C54.77 90.6398 52.36 82.8598 68.32 81.8398C57.49 66.1298 72.57 51.3601 72.57 51.3601C61.54 65.1401 72.21 80.1298 72.21 80.1298C73.89 82.8898 78.79 87.5098 83.88 88.6298C83.88 88.6298 85.65 85.1298 88.55 80.2198L79.9 69.6498C81.12 71.2398 88.53 75.4498 89.7 75.7298C91.54 72.8098 93.8 69.6198 96.47 66.6198C93.7 63.6901 86.77 56.4101 85.31 54.8801C87.95 57.4401 97.24 61.5701 99.57 62.1301C104.94 56.9301 108.07 50.6901 108.95 43.6401H108.93ZM50.35 55.0301C45.99 59.3001 39.93 56.1201 39.93 56.1201C39.93 56.1201 39.26 56.4001 42.51 50.3801C45.75 44.3601 49.66 46.8001 52.2 47.0401C54.74 47.2801 54.28 44.4901 54.28 44.4901C54.75 46.4001 54.71 50.7601 50.35 55.0301ZM64.91 38.7101C65.09 39.1901 65.26 39.6601 65.4 40.1201C65.45 40.2101 65.48 40.3101 65.49 40.4101C66.76 44.6601 66.48 48.2701 66.07 50.4001C66.07 51.2601 65.37 51.7101 65.62 50.4001C65.64 47.8501 64.77 43.9401 63.6 40.4001C58.22 37.2201 58.8 31.5201 58.82 31.6401C59.67 35.2701 61.47 37.4001 63.02 38.6201C62.69 37.6001 62.41 36.6401 62.2 35.7901C60.95 30.7001 65.78 27.5901 65.5 28.0001C62.7 32.0601 63.72 32.8001 63.72 32.8001C66.34 29.8501 68.89 32.5001 68.89 32.5001C68.89 32.5001 61.93 31.0401 64.9 38.7101H64.91Z"
                                  fill="url(#right401)"
                                />
                                <defs>
                                  <linearGradient
                                    x1="-328.541"
                                    y1="12.26"
                                    x2="157.43"
                                    y2="12.26"
                                    id="right400"
                                  >
                                    <stop stopColor="#B73A46" offset={0} />
                                    <stop stopColor="#F69896" offset="0.35" />
                                    <stop stopColor="#F8ADAD" offset="0.5" />
                                    <stop stopColor="#F69896" offset="0.65" />
                                    <stop stopColor="#B73A46" offset={1} />
                                  </linearGradient>
                                  <linearGradient
                                    x1="-328.541"
                                    y1="58.8701"
                                    x2="157.43"
                                    y2="58.8701"
                                    id="right401"
                                  >
                                    <stop stopColor="#B73A46" offset={0} />
                                    <stop stopColor="#F69896" offset="0.35" />
                                    <stop stopColor="#F8ADAD" offset="0.5" />
                                    <stop stopColor="#F69896" offset="0.65" />
                                    <stop stopColor="#B73A46" offset={1} />
                                  </linearGradient>
                                </defs>
                              </svg>
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
                                  stroke="#F8ADAD"
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
                                  fill="#F8ADAD"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="paysBoxWrapper--3e540">
                            <div
                              className="paysBox--967b1"
                              style={{
                                backgroundColor: "rgb(55, 26, 29)",
                                color: "rgb(248, 173, 173)",
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
                          style={{ width: "44px", height: "44px" }}
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
                        id="fadeGrad-bet-on-all-v2-473164664-1758015216387"
                        y2={1}
                        x2={0}
                      >
                        <stop offset={0} stopColor="white" stopOpacity={1} />
                        <stop offset="0.3" stopColor="white" stopOpacity={1} />
                        <stop offset={1} stopColor="white" stopOpacity="0.3" />
                      </linearGradient>
                      <mask id="fadem-bet-on-all-v2-473164664-1758015216387">
                        <rect
                          className="buttonMask--41daf"
                          x={0}
                          y={0}
                          width={408}
                          height={41}
                          fill="url(#fadeGrad-bet-on-all-v2-473164664-1758015216387)"
                        />
                      </mask>
                      <linearGradient
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                        id="g1-bet-on-all-v2-473164664-1758015216387"
                      >
                        <stop stopColor="#F4B821" offset="0%" />
                        <stop stopColor="#89C165" offset="18.25%" />
                        <stop stopColor="#4999C1" offset="35%" />
                        <stop stopColor="#ED5520" offset="60.55%" />
                        <stop stopColor="#B2608B" offset="76%" />
                        <stop stopColor="#BA323F" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="100%"
                        y1="50%"
                        x2="0%"
                        y2="50%"
                        id="g3-bet-on-all-v2-473164664-1758015216387"
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
                      mask="url(#fadem-bet-on-all-v2-473164664-1758015216387)"
                    >
                      <rect
                        className="buttonFill--0d9d3"
                        fill="url(#g1-bet-on-all-v2-473164664-1758015216387)"
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
                        stroke="url(#g3-bet-on-all-v2-473164664-1758015216387)"
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
