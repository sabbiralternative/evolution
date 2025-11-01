import { useEffect, useState } from "react";
import { Status } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../redux/features/events/events";
import { setBalance } from "../../../redux/features/auth/authSlice";

import { isRunnerWinner } from "../../../utils/betSlip";
import images from "../../../assets/images";
import StakeAnimation from "../../../component/UI/Chip/StakeAnimation";
import { useSound } from "../../../context/ApiProvider";
import { playPlaceChip, playSuspendedSound } from "../../../utils/sound";
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
}) => {
  const { eventId } = useParams();
  const { sound } = useSound();
  const firstIndex = data?.[0];
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const dispatch = useDispatch();

  const dragonCard = firstIndex?.indexCard?.[0];
  const tigerCard = firstIndex?.indexCard?.[1];
  const phoenixCard = firstIndex?.indexCard?.[2];

  const { balance, username } = useSelector((state) => state.auth);

  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    if (status === Status.OPEN) {
      handleStoreRecentPlay(username, eventId, "dragon-tiger-phoenix");
      const isRepeatTheBet = Object.values(stakeState).find(
        (item) => item?.selection_id && item?.show === false
      );
      if (isRepeatTheBet) {
        setStakeState(initialState);
      }
      if (sound) {
        playPlaceChip();
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
    <div
      className="betPanel--b3b31 portrait--d6948"
      data-role="bet-panel"
      style={{
        "--gridScale": "calc(var(--size, 10px) * 1.034987593052109)",
      }}
    >
      <div className="cardBetSpots--13ff1">
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
          data-role="card1"
          className="betSpot--c8f75 betSpotCard--41838"
          style={{
            "--3c-card1-primary": "255, 26, 26",
            "--3c-card1-secondary": "131, 13, 13",
            "--3c-card1-highlight": "255, 153, 153",
            "--3c-card2-primary": "255, 198, 27",
            "--3c-card2-secondary": "93, 72, 10",
            "--3c-card2-highlight": "255, 229, 153",
            "--3c-card3-primary": "27, 84, 255",
            "--3c-card3-secondary": "15, 46, 138",
            "--3c-card3-highlight": "153, 178, 255",
            "--3c-tie-primary": "21, 146, 84",
            "--3c-tie-secondary": "11, 76, 43",
            "--3c-tie-highlight": "166, 242, 203",
            opacity: status === Status.SUSPENDED ? 0.8 : 1,
          }}
        >
          {/* <div
            className="betSpotLetter--caf10"
            style={{ color: "rgb(var(--3c-card1-primary))" }}
          >
            Q
          </div> */}
          <div
            className="betSpotImage--7b34c"
            style={{
              backgroundImage:
                'url("/frontend/evo/branding/threecard_dtp/assets/card1image_ver2.3576e7d.webp")',
            }}
          />
          <div className="chips--5b809">
            <div className="draggableChipContainer--83767" />
          </div>
          <div className="cardHolder--92100">
            <div className="shine--d0694" />
            <div className="shine--d0694" />
          </div>
          <div className="betSpotName--fcc18" style={{ "-fontsize": 2 }}>
            DRAGON
          </div>
          <div className="payout--e71a0">
            {data?.[0]?.runners?.[0]?.back?.[0]?.price}
          </div>
          {/* <div className="statisticsPosition--dcce6 statistics--6668c">
            <svg
              className="percentIndicator--e9c2c"
              viewBox="0 0 176 176"
              fill="none"
            >
              <circle
                cx={88}
                cy={88}
                r={80}
                fill="rgb(var(--3c-card1-primary))"
                fillOpacity="0.3"
              />
              <path
                d="M 8, 88 a 80,80 0 1,0 160,0 a 80,80 0 1,0 -160,0"
                fill="black"
                opacity="0.6"
                filter="url(#innerShadow)"
              />
              <circle
                cx={88}
                cy={88}
                r={62}
                stroke="url(#card1IndicatorStroke)"
                strokeWidth={12}
              />
              <circle
                cx={88}
                cy={88}
                r={68}
                fill="black"
                opacity="0.55"
                filter="url(#progressDropShadow)"
              />
              <circle
                cx={88}
                cy={88}
                r={56}
                fill="rgb(var(--3c-card1-primary))"
              />
              <circle cx={88} cy={88} r={56} fillOpacity="0.6" fill="#000" />
              <circle
                cx={88}
                cy={88}
                r={62}
                stroke="rgb(var(--3c-card1-highlight))"
                strokeWidth={12}
                strokeDashoffset="377.8707643737803"
                strokeDasharray="389.55748904513433"
                transform="rotate(-90 88 88)"
                style={{
                  transition: "stroke-dashoffset 0.5s",
                  opacity: 1,
                }}
              />
              <text
                x="50%"
                y="49%"
                dominantBaseline="central"
                textAnchor="middle"
              >
                <tspan
                  className="percentage--56809"
                  fontSize={56}
                  fill="rgb(var(--3c-card1-highlight))"
                  dominantBaseline="central"
                  letterSpacing={-2}
                >
                  3
                </tspan>
                <tspan
                  className="percentSign--54813"
                  fontSize="39.199999999999996"
                  fill="rgb(var(--3c-card1-highlight))"
                  dominantBaseline="central"
                >
                  %
                </tspan>
              </text>
              <defs>
                <filter id="innerShadow">
                  <feOffset dx={0} dy={16} />
                  <feGaussianBlur stdDeviation={16} result="offset-blur" />
                  <feComposite
                    operator="out"
                    in="SourceGraphic"
                    result="inverse"
                  />
                  <feFlood floodColor="#000" result="color" />
                  <feComposite
                    operator="in"
                    in="color"
                    in2="inverse"
                    result="shadow"
                  />
                  <feComponentTransfer in="shadow" result="shadow">
                    <feFuncA type="linear" slope={1} />
                  </feComponentTransfer>
                </filter>
                <filter id="progressDropShadow">
                  <feGaussianBlur stdDeviation={4} />
                  <feComposite operator="out" in2="SourceGraphic" />
                </filter>
                <linearGradient
                  id="card1IndicatorStroke"
                  x1={20}
                  y1={6}
                  x2={20}
                  y2={34}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    stopColor="rgb(var(--3c-card1-primary))"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset={1}
                    stopColor="rgb(var(--3c-card1-primary))"
                    stopOpacity="0.2"
                  />
                </linearGradient>
              </defs>
            </svg>
            <div
              className="playerStatistics--686eb"
              style={{
                color: "rgb(var(--3c-card1-highlight))",
              }}
            >
              <div className="totalBet--47361">
                <span className="symbol--84e50">₹</span>126+
              </div>
              <div className="count--717fd">
                <span className="symbol--84e50">
                  <svg height="90%" viewBox="0 0 8 12">
                    <g fill="rgb(var(--3c-card1-highlight))" fillRule="evenodd">
                      <circle cx={4} cy={3} r={3} />
                      <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                    </g>
                  </svg>
                </span>
                4
              </div>
            </div>
          </div> */}
          <StakeAnimation
            animation={animation}
            double={double}
            runner="dragon"
            stake={stake}
            stakeState={stakeState}
            className={`absolute top-[20px]  left-14`}
          />
          {dragonCard && (
            <img
              src={`/cards/${dragonCard}.png`}
              alt=""
              style={{
                height: "60px",
                width: "60px",
                position: "absolute",
                zIndex: 9999,
                top: "20px",
              }}
            />
          )}

          <svg
            className={cn(
              `cardBackground--c510a`,
              isRunnerWinner(data, 0, 0) && "animate-win",
              stakeState.dragon?.show && "hasBet--8e3d4"
            )}
            viewBox="0 0 133 154"
            fill="none"
          >
            <path
              d="
        M 1 153
        V 5
        a 4 4 0 0 1 4 -4
        H 132
        V 153
        Z
    "
              fill="#000"
            />
            <path
              d="
        M 1 153
        V 5
        a 4 4 0 0 1 4 -4
        H 132
        V 153
        Z
    "
              fill="url(#card1Fill)"
            />
            <path
              d="
        M 1 153
        V 5
        a 4 4 0 0 1 4 -4
        H 132
        V 153
        Z
    "
              stroke="url(#card1Stroke)"
              strokeWidth={2}
            />
            <defs>
              <linearGradient
                id="card1Fill"
                x1={0}
                y1={0}
                x2={0}
                y2={154}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor="rgb(var(--3c-card1-primary))"
                  stopOpacity="0.75"
                  className="gradientTopPart--b3829"
                />
                <stop
                  offset={1}
                  stopColor="rgb(var(--3c-card1-primary))"
                  stopOpacity="0.3"
                  className="gradient--11ca5"
                />
              </linearGradient>
              <linearGradient
                id="card1Stroke"
                x1={0}
                y1={0}
                x2={0}
                y2={154}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="rgb(var(--3c-card1-primary), 1)" />
                <stop
                  offset={1}
                  stopColor="rgb(var(--3c-card1-secondary), 1)"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
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
          data-role="card2"
          className="betSpot--c8f75 betSpotCard--41838"
          style={{
            "--3c-card1-primary": "255, 26, 26",
            "--3c-card1-secondary": "131, 13, 13",
            "--3c-card1-highlight": "255, 153, 153",
            "--3c-card2-primary": "255, 198, 27",
            "--3c-card2-secondary": "93, 72, 10",
            "--3c-card2-highlight": "255, 229, 153",
            "--3c-card3-primary": "27, 84, 255",
            "--3c-card3-secondary": "15, 46, 138",
            "--3c-card3-highlight": "153, 178, 255",
            "--3c-tie-primary": "21, 146, 84",
            "--3c-tie-secondary": "11, 76, 43",
            "--3c-tie-highlight": "166, 242, 203",
            opacity: status === Status.SUSPENDED ? 0.8 : 1,
          }}
        >
          {/* <div
            className="betSpotLetter--caf10"
            style={{ color: "rgb(var(--3c-card2-primary))" }}
          >
            Y
          </div> */}
          <div
            className="betSpotImage--7b34c"
            style={{
              backgroundImage:
                'url("/frontend/evo/branding/threecard_dtp/assets/card2image_ver2.c32f173.webp")',
            }}
          />
          <div className="chips--5b809">
            <div className="draggableChipContainer--83767" />
          </div>
          <div className="cardHolder--92100">
            <div
              className="shine--d0694"
              style={{
                transform: `translateX(168%) translateY(-67.2%)
                                rotate(-45deg)`,
              }}
            />
            <div
              className="shine--d0694"
              style={{
                transform: `translateX(168%) translateY(-67.2%)
                                rotate(-45deg)`,
              }}
            />
          </div>
          <div className="betSpotName--fcc18" style={{ "-fontsize": 2 }}>
            TIGER
          </div>
          <div className="payout--e71a0">
            {" "}
            {data?.[0]?.runners?.[1]?.back?.[0]?.price}
          </div>
          {/* <div className="statisticsPosition--dcce6 statistics--6668c">
            <svg
              className="percentIndicator--e9c2c"
              viewBox="0 0 176 176"
              fill="none"
            >
              <circle
                cx={88}
                cy={88}
                r={80}
                fill="rgb(var(--3c-card2-primary))"
                fillOpacity="0.3"
              />
              <path
                d="M 8, 88 a 80,80 0 1,0 160,0 a 80,80 0 1,0 -160,0"
                fill="black"
                opacity="0.6"
                filter="url(#innerShadow)"
              />
              <circle
                cx={88}
                cy={88}
                r={62}
                stroke="url(#card2IndicatorStroke)"
                strokeWidth={12}
              />
              <circle
                cx={88}
                cy={88}
                r={68}
                fill="black"
                opacity="0.55"
                filter="url(#progressDropShadow)"
              />
              <circle
                cx={88}
                cy={88}
                r={56}
                fill="rgb(var(--3c-card2-primary))"
              />
              <circle cx={88} cy={88} r={56} fillOpacity="0.6" fill="#000" />
              <circle
                cx={88}
                cy={88}
                r={62}
                stroke="rgb(var(--3c-card2-highlight))"
                strokeWidth={12}
                strokeDashoffset="206.4654691939212"
                strokeDasharray="389.55748904513433"
                transform="rotate(-90 88 88)"
                style={{
                  transition: "stroke-dashoffset 0.5s",
                  opacity: 1,
                }}
              />
              <text
                x="50%"
                y="49%"
                dominantBaseline="central"
                textAnchor="middle"
              >
                <tspan
                  className="percentage--56809"
                  fontSize={56}
                  fill="rgb(var(--3c-card2-highlight))"
                  dominantBaseline="central"
                  letterSpacing={-2}
                >
                  47
                </tspan>
                <tspan
                  className="percentSign--54813"
                  fontSize="39.199999999999996"
                  fill="rgb(var(--3c-card2-highlight))"
                  dominantBaseline="central"
                >
                  %
                </tspan>
              </text>
              <defs>
                <filter id="innerShadow">
                  <feOffset dx={0} dy={16} />
                  <feGaussianBlur stdDeviation={16} result="offset-blur" />
                  <feComposite
                    operator="out"
                    in="SourceGraphic"
                    result="inverse"
                  />
                  <feFlood floodColor="#000" result="color" />
                  <feComposite
                    operator="in"
                    in="color"
                    in2="inverse"
                    result="shadow"
                  />
                  <feComponentTransfer in="shadow" result="shadow">
                    <feFuncA type="linear" slope={1} />
                  </feComponentTransfer>
                </filter>
                <filter id="progressDropShadow">
                  <feGaussianBlur stdDeviation={4} />
                  <feComposite operator="out" in2="SourceGraphic" />
                </filter>
                <linearGradient
                  id="card2IndicatorStroke"
                  x1={20}
                  y1={6}
                  x2={20}
                  y2={34}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    stopColor="rgb(var(--3c-card2-primary))"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset={1}
                    stopColor="rgb(var(--3c-card2-primary))"
                    stopOpacity="0.2"
                  />
                </linearGradient>
              </defs>
            </svg>
            <div
              className="playerStatistics--686eb"
              style={{
                color: "rgb(var(--3c-card2-highlight))",
              }}
            >
              <div className="totalBet--47361">
                <span className="symbol--84e50">₹</span>2281+
              </div>
              <div className="count--717fd">
                <span className="symbol--84e50">
                  <svg height="90%" viewBox="0 0 8 12">
                    <g fill="rgb(var(--3c-card2-highlight))" fillRule="evenodd">
                      <circle cx={4} cy={3} r={3} />
                      <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                    </g>
                  </svg>
                </span>
                5
              </div>
            </div>
          </div> */}
          <StakeAnimation
            animation={animation}
            double={double}
            runner="tiger"
            stake={stake}
            stakeState={stakeState}
            className={`absolute top-[20px]  left-14`}
          />
          {tigerCard && (
            <img
              src={`/cards/${tigerCard}.png`}
              alt=""
              style={{
                height: "60px",
                width: "60px",
                top: "20px",
                position: "absolute",
                zIndex: 9999,
              }}
            />
          )}
          <svg
            className={cn(
              `cardBackground--c510a`,
              isRunnerWinner(data, 0, 1) && "animate-win",
              stakeState.tiger?.show && "hasBet--8e3d4"
            )}
            viewBox="0 0 133 154"
            fill="none"
          >
            <rect x={1} y={1} width={131} height={152} fill="#000" />
            <rect x={1} y={1} width={131} height={152} fill="url(#card2Fill)" />
            <rect
              x={1}
              y={1}
              width={131}
              height={152}
              fill="transparent"
              stroke="url(#card2Stroke)"
              strokeWidth={2}
            />
            <defs>
              <linearGradient
                id="card2Fill"
                x1={0}
                y1={0}
                x2={0}
                y2={154}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor="rgb(var(--3c-card2-primary))"
                  stopOpacity="0.75"
                  className="gradientTopPart--b3829"
                />
                <stop
                  offset={1}
                  stopColor="rgb(var(--3c-card2-primary))"
                  stopOpacity="0.3"
                  className="gradient--11ca5"
                />
              </linearGradient>
              <linearGradient
                id="card2Stroke"
                x1={0}
                y1={0}
                x2={0}
                y2={154}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="rgb(var(--3c-card2-primary), 1)" />
                <stop
                  offset={1}
                  stopColor="rgb(var(--3c-card2-secondary), 1)"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "phoenix",
              data,
              dataIndex: 0,
              runnerIndex: 2,
              type: "back",
            })
          }
          data-role="card3"
          className="betSpot--c8f75 betSpotCard--41838"
          style={{
            "--3c-card1-primary": "255, 26, 26",
            "--3c-card1-secondary": "131, 13, 13",
            "--3c-card1-highlight": "255, 153, 153",
            "--3c-card2-primary": "255, 198, 27",
            "--3c-card2-secondary": "93, 72, 10",
            "--3c-card2-highlight": "255, 229, 153",
            "--3c-card3-primary": "27, 84, 255",
            "--3c-card3-secondary": "15, 46, 138",
            "--3c-card3-highlight": "153, 178, 255",
            "--3c-tie-primary": "21, 146, 84",
            "--3c-tie-secondary": "11, 76, 43",
            "--3c-tie-highlight": "166, 242, 203",
            opacity: status === Status.SUSPENDED ? 0.8 : 1,
          }}
        >
          {/* <div
            className="betSpotLetter--caf10"
            style={{ color: "rgb(var(--3c-card3-primary))" }}
          >
            Z
          </div> */}
          <div
            className="betSpotImage--7b34c"
            style={{
              backgroundImage:
                'url("/frontend/evo/branding/threecard_dtp/assets/card3image_ver2.b4ba32f.webp")',
            }}
          />
          <div className="chips--5b809">
            <div className="draggableChipContainer--83767" />
          </div>
          <div className="cardHolder--92100">
            <div className="shine--d0694" />
            <div className="shine--d0694" />
          </div>
          <div className="betSpotName--fcc18" style={{ "-fontsize": 2 }}>
            PHOENIX
          </div>
          <div className="payout--e71a0">
            {" "}
            {data?.[0]?.runners?.[2]?.back?.[0]?.price}
          </div>
          {/* <div className="statisticsPosition--dcce6 statistics--6668c">
            <svg
              className="percentIndicator--e9c2c"
              viewBox="0 0 176 176"
              fill="none"
            >
              <circle
                cx={88}
                cy={88}
                r={80}
                fill="rgb(var(--3c-card3-primary))"
                fillOpacity="0.3"
              />
              <path
                d="M 8, 88 a 80,80 0 1,0 160,0 a 80,80 0 1,0 -160,0"
                fill="black"
                opacity="0.6"
                filter="url(#innerShadow)"
              />
              <circle
                cx={88}
                cy={88}
                r={62}
                stroke="url(#card3IndicatorStroke)"
                strokeWidth={12}
              />
              <circle
                cx={88}
                cy={88}
                r={68}
                fill="black"
                opacity="0.55"
                filter="url(#progressDropShadow)"
              />
              <circle
                cx={88}
                cy={88}
                r={56}
                fill="rgb(var(--3c-card3-primary))"
              />
              <circle cx={88} cy={88} r={56} fillOpacity="0.6" fill="#000" />
              <circle
                cx={88}
                cy={88}
                r={62}
                stroke="rgb(var(--3c-card3-highlight))"
                strokeWidth={12}
                strokeDashoffset="194.77874452256717"
                strokeDasharray="389.55748904513433"
                transform="rotate(-90 88 88)"
                style={{
                  transition: "stroke-dashoffset 0.5s",
                  opacity: 1,
                }}
              />
              <text
                x="50%"
                y="49%"
                dominantBaseline="central"
                textAnchor="middle"
              >
                <tspan
                  className="percentage--56809"
                  fontSize={56}
                  fill="rgb(var(--3c-card3-highlight))"
                  dominantBaseline="central"
                  letterSpacing={-2}
                >
                  50
                </tspan>
                <tspan
                  className="percentSign--54813"
                  fontSize="39.199999999999996"
                  fill="rgb(var(--3c-card3-highlight))"
                  dominantBaseline="central"
                >
                  %
                </tspan>
              </text>
              <defs>
                <filter id="innerShadow">
                  <feOffset dx={0} dy={16} />
                  <feGaussianBlur stdDeviation={16} result="offset-blur" />
                  <feComposite
                    operator="out"
                    in="SourceGraphic"
                    result="inverse"
                  />
                  <feFlood floodColor="#000" result="color" />
                  <feComposite
                    operator="in"
                    in="color"
                    in2="inverse"
                    result="shadow"
                  />
                  <feComponentTransfer in="shadow" result="shadow">
                    <feFuncA type="linear" slope={1} />
                  </feComponentTransfer>
                </filter>
                <filter id="progressDropShadow">
                  <feGaussianBlur stdDeviation={4} />
                  <feComposite operator="out" in2="SourceGraphic" />
                </filter>
                <linearGradient
                  id="card3IndicatorStroke"
                  x1={20}
                  y1={6}
                  x2={20}
                  y2={34}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    stopColor="rgb(var(--3c-card3-primary))"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset={1}
                    stopColor="rgb(var(--3c-card3-primary))"
                    stopOpacity="0.2"
                  />
                </linearGradient>
              </defs>
            </svg>
            <div
              className="playerStatistics--686eb"
              style={{
                color: "rgb(var(--3c-card3-highlight))",
              }}
            >
              <div className="totalBet--47361">
                <span className="symbol--84e50">₹</span>2440+
              </div>
              <div className="count--717fd">
                <span className="symbol--84e50">
                  <svg height="90%" viewBox="0 0 8 12">
                    <g fill="rgb(var(--3c-card3-highlight))" fillRule="evenodd">
                      <circle cx={4} cy={3} r={3} />
                      <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                    </g>
                  </svg>
                </span>
                4
              </div>
            </div>
          </div> */}
          <StakeAnimation
            animation={animation}
            double={double}
            runner="phoenix"
            stake={stake}
            stakeState={stakeState}
            className={`absolute top-[20px]  left-14`}
          />
          {phoenixCard && (
            <img
              src={`/cards/${phoenixCard}.png`}
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

          <svg
            viewBox="0 0 133 154"
            fill="none"
            className={cn(
              `cardBackground--c510a`,
              isRunnerWinner(data, 0, 2) && "animate-win",
              stakeState.down?.show && "hasBet--8e3d4"
            )}
          >
            <path
              d="
        M 132 153
        V 5
        a -4 -4 0 0 0 -4 -4
        H 1
        V 153
        Z
    "
              fill="#000"
            />
            <path
              d="
        M 132 153
        V 5
        a -4 -4 0 0 0 -4 -4
        H 1
        V 153
        Z
    "
              fill="url(#card3Fill)"
            />
            <path
              d="
        M 132 153
        V 5
        a -4 -4 0 0 0 -4 -4
        H 1
        V 153
        Z
    "
              stroke="url(#card3Stroke)"
              strokeWidth={2}
            />
            <defs>
              <linearGradient
                id="card3Fill"
                x1={0}
                y1={0}
                x2={0}
                y2={154}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor="rgb(var(--3c-card3-primary))"
                  stopOpacity="0.75"
                  className="gradientTopPart--b3829"
                />
                <stop
                  offset={1}
                  stopColor="rgb(var(--3c-card3-primary))"
                  stopOpacity="0.3"
                  className="gradient--11ca5"
                />
              </linearGradient>
              <linearGradient
                id="card3Stroke"
                x1={0}
                y1={0}
                x2={0}
                y2={154}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="rgb(var(--3c-card3-primary), 1)" />
                <stop
                  offset={1}
                  stopColor="rgb(var(--3c-card3-secondary), 1)"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="tieBetSpot--cbaee">
        <div
          onClick={() =>
            handleStakeChange({
              key: "tie",
              data,
              dataIndex: 0,
              runnerIndex: 3,
              type: "back",
            })
          }
          data-role="tie"
          className="betSpot--c8f75 betSpotTie--b7b88"
          style={{
            "--3c-card1-primary": "255, 26, 26",
            "--3c-card1-secondary": "131, 13, 13",
            "--3c-card1-highlight": "255, 153, 153",
            "--3c-card2-primary": "255, 198, 27",
            "--3c-card2-secondary": "93, 72, 10",
            "--3c-card2-highlight": "255, 229, 153",
            "--3c-card3-primary": "27, 84, 255",
            "--3c-card3-secondary": "15, 46, 138",
            "--3c-card3-highlight": "153, 178, 255",
            "--3c-tie-primary": "21, 146, 84",
            "--3c-tie-secondary": "11, 76, 43",
            "--3c-tie-highlight": "166, 242, 203",
            opacity: status === Status.SUSPENDED ? 0.8 : 1,
          }}
        >
          {/* <div
            className="betSpotLetter--caf10"
            style={{ color: "rgb(var(--3c-tie-primary))" }}
          >
            T
          </div> */}
          <div className="chips--5b809">
            <div className="draggableChipContainer--83767" />
          </div>
          <div className="betSpotName--fcc18" style={{ "-fontsize": 2 }}>
            TIE
          </div>
          <div className="payout--e71a0">
            {" "}
            {data?.[0]?.runners?.[3]?.back?.[0]?.price}
          </div>
          {/* <div className="statisticsPosition--dcce6 statistics--6668c">
            <svg
              className="percentIndicator--e9c2c"
              viewBox="0 0 176 176"
              fill="none"
            >
              <circle
                cx={88}
                cy={88}
                r={80}
                fill="rgb(var(--3c-tie-primary))"
                fillOpacity="0.3"
              />
              <path
                d="M 8, 88 a 80,80 0 1,0 160,0 a 80,80 0 1,0 -160,0"
                fill="black"
                opacity="0.6"
                filter="url(#innerShadow)"
              />
              <circle
                cx={88}
                cy={88}
                r={62}
                stroke="url(#tieIndicatorStroke)"
                strokeWidth={12}
              />
              <circle
                cx={88}
                cy={88}
                r={68}
                fill="black"
                opacity="0.55"
                filter="url(#progressDropShadow)"
              />
              <circle
                cx={88}
                cy={88}
                r={56}
                fill="rgb(var(--3c-tie-primary))"
              />
              <circle cx={88} cy={88} r={56} fillOpacity="0.6" fill="#000" />
              <circle
                cx={88}
                cy={88}
                r={62}
                stroke="rgb(var(--3c-tie-highlight))"
                strokeWidth={12}
                strokeDashoffset="389.55748904513433"
                strokeDasharray="389.55748904513433"
                transform="rotate(-90 88 88)"
                style={{
                  transition: "stroke-dashoffset 0.5s",
                  opacity: 0,
                }}
              />
              <text
                x="50%"
                y="49%"
                dominantBaseline="central"
                textAnchor="middle"
              >
                <tspan
                  className="percentage--56809"
                  fontSize={56}
                  fill="rgb(var(--3c-tie-highlight))"
                  dominantBaseline="central"
                  letterSpacing={-2}
                >
                  0
                </tspan>
                <tspan
                  className="percentSign--54813"
                  fontSize="39.199999999999996"
                  fill="rgb(var(--3c-tie-highlight))"
                  dominantBaseline="central"
                >
                  %
                </tspan>
              </text>
              <defs>
                <filter id="innerShadow">
                  <feOffset dx={0} dy={16} />
                  <feGaussianBlur stdDeviation={16} result="offset-blur" />
                  <feComposite
                    operator="out"
                    in="SourceGraphic"
                    result="inverse"
                  />
                  <feFlood floodColor="#000" result="color" />
                  <feComposite
                    operator="in"
                    in="color"
                    in2="inverse"
                    result="shadow"
                  />
                  <feComponentTransfer in="shadow" result="shadow">
                    <feFuncA type="linear" slope={1} />
                  </feComponentTransfer>
                </filter>
                <filter id="progressDropShadow">
                  <feGaussianBlur stdDeviation={4} />
                  <feComposite operator="out" in2="SourceGraphic" />
                </filter>
                <linearGradient
                  id="tieIndicatorStroke"
                  x1={20}
                  y1={6}
                  x2={20}
                  y2={34}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    stopColor="rgb(var(--3c-tie-primary))"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset={1}
                    stopColor="rgb(var(--3c-tie-primary))"
                    stopOpacity="0.2"
                  />
                </linearGradient>
              </defs>
            </svg>
            <div
              className="playerStatistics--686eb"
              style={{ color: "rgb(var(--3c-tie-highlight))" }}
            >
              <div className="totalBet--47361">
                <span className="symbol--84e50">₹</span>0
              </div>
              <div className="count--717fd">
                <span className="symbol--84e50">
                  <svg height="90%" viewBox="0 0 8 12">
                    <g fill="rgb(var(--3c-tie-highlight))" fillRule="evenodd">
                      <circle cx={4} cy={3} r={3} />
                      <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                    </g>
                  </svg>
                </span>
                0
              </div>
            </div>
          </div> */}
          <StakeAnimation
            animation={animation}
            double={double}
            runner="tie"
            stake={stake}
            stakeState={stakeState}
            className={`absolute top-[10px]  left-1/3`}
          />
          <svg
            className={cn(
              `tieBackground--077e5`,
              isRunnerWinner(data, 0, 0) && "animate-win",
              stakeState.down?.show && "hasBet--8e3d4"
            )}
            viewBox="0 0 403 56"
            fill="none"
          >
            <path
              d="
        M 1 1
        H 402
        V 51
        a -4 4 0 0 1 -4 4
        H 5
        a 4 -4 0 0 1 -4 -4
        Z
    "
              fill="#000"
            />
            <path
              d="
        M 1 1
        H 402
        V 51
        a -4 4 0 0 1 -4 4
        H 5
        a 4 -4 0 0 1 -4 -4
        Z
    "
              fill="url(#tieRadialGradient)"
            />
            <path
              d="
        M 1 1
        H 402
        V 51
        a -4 4 0 0 1 -4 4
        H 5
        a 4 -4 0 0 1 -4 -4
        Z
    "
              fill="transparent"
              stroke="url(#tieLinearGradient)"
              strokeWidth={2}
            />
            <defs>
              <radialGradient
                id="tieRadialGradient"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(202.5 -1) rotate(-90) scale(56 199)"
              >
                <stop
                  stopColor="rgb(var(--3c-tie-primary))"
                  stopOpacity="0.9"
                  className="tieRadialGradient--c4844"
                />
                <stop
                  offset={1}
                  stopColor="rgb(var(--3c-tie-primary))"
                  stopOpacity="0.4"
                  className="gradient--11ca5 tieGradient--fe785"
                />
              </radialGradient>
              <linearGradient
                id="tieLinearGradient"
                x1={1}
                y1={-57}
                x2={1}
                y2={55}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="rgba(var(--3c-tie-primary), 1)" />
                <stop offset={1} stopColor="rgba(var(--3c-tie-secondary), 1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
