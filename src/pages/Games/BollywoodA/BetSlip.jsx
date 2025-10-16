import { useEffect, useState } from "react";
import { Status } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../redux/features/events/events";
import { setBalance } from "../../../redux/features/auth/authSlice";
import { getBackPrice, isRunnerWinner } from "../../../utils/betSlip";
import StakeAnimation from "../../../component/UI/Chip/StakeAnimation";
import { cn } from "../../../utils/cn";
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
      handleStoreRecentPlay(username, eventId, "bollywood");
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
              stake: prev[key]?.show
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
          if (updatedState[key]?.show) {
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
          stake: prev[key]?.show ? prev[key].stake : stake,
          actionBy: stake,
        };
      }
      return updatedState;
    });
  }, [stake]); // Runs when stake value changes

  useEffect(() => {
    const filterPlacedBet = Object.values(stakeState).filter(
      (bet) => bet?.show
    );
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

  // const indexCard = data?.[0]?.indexCard?.[0];
  // const cardNumber = indexCard && parseFloat(indexCard.substring(1));

  return (
    <div
      style={{
        transform: transform ? `scale(${innerWidth / 375})` : "none",
        marginBottom: "0px",
      }}
      onClick={handleShowSuspendedStatus}
      className={`bettingGrid--a60ca ${
        status === Status.SUSPENDED ? "pointer-events-none" : ""
      }`}
    >
      <div
        style={{
          // width: width ? `${innerWidth - 10}px` : "auto",
          height: height ? "auto" : "auto",
        }}
      >
        <div
          className="bettingGrid--0835e bettingTime--7f9cd isVertical--28984 onlyPairs--f14f6 flex-col !h-auto"
          data-role="betting-grid-container"
          style={{
            opacity: status === Status.SUSPENDED ? 0.7 : 1,
          }}
        >
          <div className="bubble--2b7a1" />

          <div className="h-[44px] flex items-center justify-between w-full gap-x-1">
            <div
              className="h-full w-full"
              onClick={() =>
                handleStakeChange({
                  key: "donBack",
                  data,
                  dataIndex: 0,
                  runnerIndex: 0,
                  type: "back",
                })
              }
            >
              <div
                data-betspot-destination="PlayerPair"
                className="item--8e08a vertical--98be1 relative py-2"
                data-role="bet-spot-PlayerPair"
              >
                <div className="absolute z-50 -top-[1px] left-0.5">
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner="donBack"
                    stake={stake}
                    stakeState={stakeState}
                  />
                </div>
                <svg
                  className={cn(
                    `svg--7e996 svgBetspot--43e31 rectShape--a9f3a `,
                    isRunnerWinner(data, 0, 0) && "animate--6c17d  win--e65a1",
                    stakeState.donBack?.show && "hasBet--8e3d4"
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
                      id="PlayerPair0.03899799357536238_id_rect_fill8"
                    >
                      <stop
                        style={{
                          stopColor: "#08d307",
                        }}
                        stopOpacity="0.8"
                        className="gradientLight--ba468 blue--5d4e7"
                      />
                      <stop
                        style={{
                          stopColor: "#08d307",
                        }}
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
                      id="PlayerPair0.03899799357536238_id_rect_stroke8"
                    >
                      <stop
                        style={{
                          stopColor: "#08d307",
                        }}
                        stopOpacity="0.8"
                        className="strokeLight--26bed blue--5d4e7"
                      />
                      <stop
                        style={{
                          stopColor: "#08d307",
                        }}
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
                    fill="url(#PlayerPair0.03899799357536238_id_rect_fill8)"
                    stroke="url(#PlayerPair0.03899799357536238_id_rect_stroke8)"
                    strokeWidth={4}
                    fillRule="evenodd"
                    className="shape--84077"
                  />
                </svg>
                <div className="payoutContainer--a32db">
                  <div>
                    <div
                      className="payout--c827b !text-white text-[12px]"
                      data-role="payout"
                    >
                      {data?.[0]?.runners?.[0]?.name}
                    </div>
                  </div>
                </div>
                <div className="betspotTitle--d0907">
                  <span className="text-[10px]">
                    {" "}
                    x{getBackPrice(data, 0, 0)}
                  </span>
                </div>
              </div>
            </div>
            <div
              onClick={() =>
                handleStakeChange({
                  key: "aaaBack",
                  data,
                  dataIndex: 0,
                  runnerIndex: 1,
                  type: "back",
                })
              }
              className="w-full h-full"
            >
              <div
                data-betspot-destination="PlayerPair"
                className="item--8e08a vertical--98be1 relative py-2"
                data-role="bet-spot-PlayerPair"
              >
                <div className="absolute z-50 -top-[1px] left-0.5">
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner="aaaBack"
                    stake={stake}
                    stakeState={stakeState}
                  />
                </div>
                <svg
                  className={cn(
                    `svg--7e996 svgBetspot--43e31 rectShape--a9f3a`,
                    isRunnerWinner(data, 0, 1) && "animate--6c17d  win--e65a1",
                    stakeState.aaaBack?.show && "hasBet--8e3d4"
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
                      id="PlayerPair0.03899799357536238_id_rect_fill1"
                    >
                      <stop
                        style={{
                          stopColor: "#08d378",
                        }}
                        stopOpacity="0.8"
                        className="gradientLight--ba468 blue--5d4e7"
                      />
                      <stop
                        style={{
                          stopColor: "#08d378",
                        }}
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
                      id="PlayerPair0.03899799357536238_id_rect_stroke1"
                    >
                      <stop
                        style={{
                          stopColor: "#08d378",
                        }}
                        stopOpacity="0.8"
                        className="strokeLight--26bed blue--5d4e7"
                      />
                      <stop
                        style={{
                          stopColor: "#08d378",
                        }}
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
                    fill="url(#PlayerPair0.03899799357536238_id_rect_fill1)"
                    stroke="url(#PlayerPair0.03899799357536238_id_rect_stroke1)"
                    strokeWidth={4}
                    fillRule="evenodd"
                    className="shape--84077"
                  />
                </svg>
                <div className="payoutContainer--a32db">
                  <div>
                    <div
                      className="payout--c827b !text-white text-[12px]"
                      data-role="payout"
                    >
                      {data?.[0]?.runners?.[1]?.name}
                    </div>
                  </div>
                </div>
                <div className="betspotTitle--d0907">
                  <span className="text-[10px]">
                    x{getBackPrice(data, 0, 1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[44px] flex items-center justify-between w-full gap-x-1">
            <div
              className="h-full w-full"
              onClick={() =>
                handleStakeChange({
                  key: "sbagBack",
                  data,
                  dataIndex: 0,
                  runnerIndex: 2,
                  type: "back",
                })
              }
            >
              <div
                data-betspot-destination="PlayerPair"
                className="item--8e08a vertical--98be1 relative py-2"
                data-role="bet-spot-PlayerPair"
              >
                <div className="absolute z-50 -top-[1px] left-0.5">
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner="sbagBack"
                    stake={stake}
                    stakeState={stakeState}
                  />
                </div>
                <svg
                  className={cn(
                    `svg--7e996 svgBetspot--43e31 rectShape--a9f3a `,
                    isRunnerWinner(data, 0, 2) && "animate--6c17d  win--e65a1",
                    stakeState.sbagBack?.show && "hasBet--8e3d4"
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
                      id="PlayerPair0.03899799357536238_id_rect_fill2"
                    >
                      <stop
                        style={{
                          stopColor: "#08d3ff",
                        }}
                        stopOpacity="0.8"
                        className="gradientLight--ba468 blue--5d4e7"
                      />
                      <stop
                        style={{
                          stopColor: "#08d3ff",
                        }}
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
                      id="PlayerPair0.03899799357536238_id_rect_stroke2"
                    >
                      <stop
                        style={{
                          stopColor: "#08d3ff",
                        }}
                        stopOpacity="0.8"
                        className="strokeLight--26bed blue--5d4e7"
                      />
                      <stop
                        style={{
                          stopColor: "#08d3ff",
                        }}
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
                    fill="url(#PlayerPair0.03899799357536238_id_rect_fill2)"
                    stroke="url(#PlayerPair0.03899799357536238_id_rect_stroke2)"
                    strokeWidth={4}
                    fillRule="evenodd"
                    className="shape--84077"
                  />
                </svg>
                <div className="payoutContainer--a32db">
                  <div>
                    <div
                      className="payout--c827b !text-white text-[12px]"
                      data-role="payout"
                    >
                      {data?.[0]?.runners?.[2]?.name}
                    </div>
                  </div>
                </div>
                <div className="betspotTitle--d0907">
                  <span className="text-[10px]">
                    {" "}
                    x{getBackPrice(data, 0, 2)}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="h-full w-full"
              onClick={() =>
                handleStakeChange({
                  key: "dvBack",
                  data,
                  dataIndex: 0,
                  runnerIndex: 3,
                  type: "back",
                })
              }
            >
              <div
                data-betspot-destination="PlayerPair"
                className="item--8e08a vertical--98be1 relative py-2"
                data-role="bet-spot-PlayerPair"
              >
                <div className="absolute z-50 -top-[1px] left-0.5">
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner="dvBack"
                    stake={stake}
                    stakeState={stakeState}
                  />
                </div>
                <svg
                  className={cn(
                    `svg--7e996 svgBetspot--43e31 rectShape--a9f3a `,
                    isRunnerWinner(data, 0, 3) && "animate--6c17d  win--e65a1",
                    stakeState.dvBack?.show && "hasBet--8e3d4"
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
                      id="PlayerPair0.03899799357536238_id_rect_fill3"
                    >
                      <stop
                        style={{
                          stopColor: "#9478",
                        }}
                        stopOpacity="0.8"
                        className="gradientLight--ba468 blue--5d4e7"
                      />
                      <stop
                        style={{
                          stopColor: "#9478",
                        }}
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
                      id="PlayerPair0.03899799357536238_id_rect_stroke3"
                    >
                      <stop
                        style={{
                          stopColor: "#9478",
                        }}
                        stopOpacity="0.8"
                        className="strokeLight--26bed blue--5d4e7"
                      />
                      <stop
                        style={{
                          stopColor: "#9478",
                        }}
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
                    fill="url(#PlayerPair0.03899799357536238_id_rect_fill3)"
                    stroke="url(#PlayerPair0.03899799357536238_id_rect_stroke3)"
                    strokeWidth={4}
                    fillRule="evenodd"
                    className="shape--84077"
                  />
                </svg>
                <div className="payoutContainer--a32db">
                  <div>
                    <div
                      className="payout--c827b !text-white text-[12px]"
                      data-role="payout"
                    >
                      {data?.[0]?.runners?.[3]?.name}
                    </div>
                  </div>
                </div>
                <div className="betspotTitle--d0907">
                  <span className="text-[10px]">
                    {" "}
                    x{getBackPrice(data, 0, 3)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[44px] flex items-center justify-between w-full gap-x-1">
            <div
              onClick={() =>
                handleStakeChange({
                  key: "kkpkBack",
                  data,
                  dataIndex: 0,
                  runnerIndex: 4,
                  type: "back",
                })
              }
              className="w-full h-full"
            >
              <div
                data-betspot-destination="PlayerPair"
                className="item--8e08a vertical--98be1 relative py-2"
                data-role="bet-spot-PlayerPair"
              >
                <div className="absolute z-50 -top-[1px] left-0.5">
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner="kkpkBack"
                    stake={stake}
                    stakeState={stakeState}
                  />
                </div>
                <svg
                  className={cn(
                    `svg--7e996 svgBetspot--43e31 rectShape--a9f3a`,
                    isRunnerWinner(data, 0, 4) && "animate--6c17d  win--e65a1",
                    stakeState.kkpkBack?.show && "hasBet--8e3d4"
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
                      id="PlayerPair0.03899799357536238_id_rect_fill4"
                    >
                      <stop
                        style={{
                          stopColor: "#9478ff",
                        }}
                        stopOpacity="0.8"
                        className="gradientLight--ba468 blue--5d4e7"
                      />
                      <stop
                        style={{
                          stopColor: "#9478ff",
                        }}
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
                      id="PlayerPair0.03899799357536238_id_rect_stroke4"
                    >
                      <stop
                        style={{
                          stopColor: "#9478ff",
                        }}
                        stopOpacity="0.8"
                        className="strokeLight--26bed blue--5d4e7"
                      />
                      <stop
                        style={{
                          stopColor: "#9478ff",
                        }}
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
                    fill="url(#PlayerPair0.03899799357536238_id_rect_fill4)"
                    stroke="url(#PlayerPair0.03899799357536238_id_rect_stroke4)"
                    strokeWidth={4}
                    fillRule="evenodd"
                    className="shape--84077"
                  />
                </svg>
                <div className="payoutContainer--a32db">
                  <div>
                    <div
                      className="payout--c827b !text-white text-[12px]"
                      data-role="payout"
                    >
                      {data?.[0]?.runners?.[4]?.name}
                    </div>
                  </div>
                </div>
                <div className="betspotTitle--d0907">
                  <span className="text-[10px]">
                    x{getBackPrice(data, 0, 4)}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="h-full w-full"
              onClick={() =>
                handleStakeChange({
                  key: "gulamBack",
                  data,
                  dataIndex: 0,
                  runnerIndex: 5,
                  type: "back",
                })
              }
            >
              <div
                data-betspot-destination="PlayerPair"
                className="item--8e08a vertical--98be1 relative py-2"
                data-role="bet-spot-PlayerPair"
              >
                <div className="absolute z-50 -top-[1px] left-0.5">
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner="gulamBack"
                    stake={stake}
                    stakeState={stakeState}
                  />
                </div>
                <svg
                  className={cn(
                    `svg--7e996 svgBetspot--43e31 rectShape--a9f3a `,
                    isRunnerWinner(data, 0, 5) && "animate--6c17d  win--e65a1",
                    stakeState.gulamBack?.show && "hasBet--8e3d4"
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
                      id="PlayerPair0.03899799357536238_id_rect_fill5"
                    >
                      <stop
                        style={{
                          stopColor: "#94733F",
                        }}
                        stopOpacity="0.8"
                        className="gradientLight--ba468 blue--5d4e7"
                      />
                      <stop
                        style={{
                          stopColor: "#94733F",
                        }}
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
                      id="PlayerPair0.03899799357536238_id_rect_stroke5"
                    >
                      <stop
                        style={{
                          stopColor: "#94733F",
                        }}
                        stopOpacity="0.8"
                        className="strokeLight--26bed blue--5d4e7"
                      />
                      <stop
                        style={{
                          stopColor: "#94733F",
                        }}
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
                    fill="url(#PlayerPair0.03899799357536238_id_rect_fill5)"
                    stroke="url(#PlayerPair0.03899799357536238_id_rect_stroke5)"
                    strokeWidth={4}
                    fillRule="evenodd"
                    className="shape--84077"
                  />
                </svg>
                <div className="payoutContainer--a32db">
                  <div>
                    <div
                      className="payout--c827b !text-white text-[12px]"
                      data-role="payout"
                    >
                      {data?.[0]?.runners?.[5]?.name}
                    </div>
                  </div>
                </div>
                <div className="betspotTitle--d0907">
                  <span className="text-[10px]">
                    {" "}
                    x{getBackPrice(data, 0, 5)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[44px] flex items-center justify-between w-full gap-x-1">
            <div
              className="h-full w-full"
              onClick={() =>
                handleStakeChange({
                  key: "kq",
                  data,
                  dataIndex: 1,
                  runnerIndex: 0,
                  type: "back",
                })
              }
            >
              <div
                data-betspot-destination="PlayerPair"
                className="item--8e08a vertical--98be1 relative py-2"
                data-role="bet-spot-PlayerPair"
              >
                <div className="absolute z-50 -top-[1px] left-0.5">
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner="kq"
                    stake={stake}
                    stakeState={stakeState}
                  />
                </div>
                <svg
                  className={cn(
                    `svg--7e996 svgBetspot--43e31 rectShape--a9f3a `,
                    isRunnerWinner(data, 1, 0) && "animate--6c17d  win--e65a1",
                    stakeState.kq?.show && "hasBet--8e3d4"
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
                      id="PlayerPair0.03899799357536238_id_rect_fill6"
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
                      id="PlayerPair0.03899799357536238_id_rect_stroke6"
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
                    fill="url(#PlayerPair0.03899799357536238_id_rect_fill6)"
                    stroke="url(#PlayerPair0.03899799357536238_id_rect_stroke6)"
                    strokeWidth={4}
                    fillRule="evenodd"
                    className="shape--84077"
                  />
                </svg>
                <div className="payoutContainer--a32db">
                  <div>
                    <div
                      className="payout--c827b !text-white text-[12px]"
                      data-role="payout"
                    >
                      {data?.[1]?.runners?.[0]?.name}
                    </div>
                  </div>
                </div>
                <div className="betspotTitle--d0907">
                  <span className="text-[10px]">
                    {" "}
                    x{getBackPrice(data, 1, 0)}
                  </span>
                </div>
              </div>
            </div>
            <div
              onClick={() =>
                handleStakeChange({
                  key: "ja",
                  data,
                  dataIndex: 1,
                  runnerIndex: 1,
                  type: "back",
                })
              }
              className="h-full w-full"
            >
              <div
                data-betspot-destination="BankerPair"
                className="item--8e08a vertical--98be1 relative py-2"
                data-role="bet-spot-BankerPair"
              >
                <div className="absolute z-50 -top-[1px] left-0.5">
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner="ja"
                    stake={stake}
                    stakeState={stakeState}
                  />
                </div>
                <svg
                  className={cn(
                    `svg--7e996 svgBetspot--43e31 isMirrored--d9896 rectShape--a9f3a `,
                    isRunnerWinner(data, 1, 1) && "animate--6c17d  win--e65a1",
                    stakeState.ja?.show && "hasBet--8e3d4"
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
                      id="BankerPair0.6604065570309232_id_rect_fillkq"
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
                    fill="url(#BankerPair0.6604065570309232_id_rect_fillkq)"
                    stroke="url(#BankerPair0.6604065570309232_id_rect_stroke)"
                    strokeWidth={4}
                    fillRule="evenodd"
                    className="shape--84077"
                  />
                </svg>
                <div className="payoutContainer--a32db">
                  <div>
                    <div
                      className="payout--c827b !text-white text-[12px]"
                      data-role="payout"
                    >
                      {data?.[1]?.runners?.[1]?.name}
                    </div>
                  </div>
                </div>
                <div className="betspotTitle--d0907">
                  <span className="text-[10px]">
                    {" "}
                    x{getBackPrice(data, 1, 1)}
                  </span>
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
              className="w-full h-full"
            >
              <div
                data-betspot-destination="PlayerPair"
                className="item--8e08a vertical--98be1 relative py-2"
                data-role="bet-spot-PlayerPair"
              >
                <div className="absolute z-50 -top-[1px] left-0.5">
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
                    `svg--7e996 svgBetspot--43e31 rectShape--a9f3a`,
                    isRunnerWinner(data, 2, 1) && "animate--6c17d  win--e65a1",
                    stakeState.black?.show && "hasBet--8e3d4"
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
                      id="PlayerPair0.03899799357536238_id_rect_fill7"
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
                    fill="url(#PlayerPair0.03899799357536238_id_rect_fill7)"
                    stroke="url(#PlayerPair0.03899799357536238_id_rect_stroke)"
                    strokeWidth={4}
                    fillRule="evenodd"
                    className="shape--84077"
                  />
                </svg>
                <div className="payoutContainer--a32db">
                  <div>
                    <div
                      className="payout--c827b !text-white text-[12px]"
                      data-role="payout"
                    >
                      {data?.[2]?.runners?.[1]?.name}
                    </div>
                  </div>
                </div>
                <div className="betspotTitle--d0907">
                  <span className="text-[10px]">
                    x{getBackPrice(data, 2, 1)}
                  </span>
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
              className="w-full h-full"
            >
              <div
                data-betspot-destination="BankerPair"
                className="item--8e08a vertical--98be1 relative py-2"
                data-role="bet-spot-BankerPair "
              >
                <div className="absolute z-50 -top-[1px] left-0.5">
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
                    `svg--7e996 svgBetspot--43e31 isMirrored--d9896 rectShape--a9f3a`,
                    isRunnerWinner(data, 2, 0) && "animate--6c17d  win--e65a1",
                    stakeState.red?.show && "hasBet--8e3d4"
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
                      id="BankerPair0.6604065570309232_id_rect_fill1"
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
                    fill="url(#BankerPair0.6604065570309232_id_rect_fill1)"
                    stroke="url(#BankerPair0.6604065570309232_id_rect_stroke)"
                    strokeWidth={4}
                    fillRule="evenodd"
                    className="shape--84077"
                  />
                </svg>
                <div className="payoutContainer--a32db">
                  <div>
                    <div
                      className="payout--c827b !text-white text-[12px]"
                      data-role="payout"
                    >
                      {data?.[2]?.runners?.[0]?.name}
                    </div>
                  </div>
                </div>
                <div className="betspotTitle--d0907">
                  <span className="text-[10px]">
                    x{getBackPrice(data, 2, 0)}
                  </span>
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
