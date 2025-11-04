import { Fragment, useEffect, useState } from "react";
import { Status } from "../../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../../redux/features/events/events";
import { setBalance } from "../../../../redux/features/auth/authSlice";
import StakeAnimation from "../../../../component/UI/Chip/StakeAnimation";
import { rouletteData } from "../const";
import { playPlaceChip, playSuspendedSound } from "../../../../utils/sound";
import { useSound } from "../../../../context/ApiProvider";
import { useParams } from "react-router-dom";
import { handleStoreRecentPlay } from "../../../../utils/handleStorateRecentPlay";
import NumbersBet from "./NumbersBet";

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
  const [, setInnerWidth] = useState(window.innerWidth);
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const dispatch = useDispatch();
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);
  const { balance, username } = useSelector((state) => state.auth);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    handleStoreRecentPlay(username, eventId, "roulette");
    const isRepeatTheBet = Object.values(stakeState).find(
      (item) => item?.selection_id && item?.show === false
    );
    if (isRepeatTheBet) {
      setStakeState(initialState);
    }

    if (sound) playPlaceChip();

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
            stake: prev?.[key]?.show
              ? prev?.[key]?.stake + prev?.[key]?.actionBy
              : 100,
            marketId: formatData?.marketId,
            selection_id: formatData?.selection_id,
            price: formatData?.price,
            runner_name: formatData?.runner_name,
            isback: formatData?.isback,
            serial: prev?.[key]?.serial ? prev?.[key]?.serial : maxSerial + 1,
            actionBy: stake,
            undo: [...(prev?.[key]?.undo || []), stake],
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
      style={{ maxWidth: "calc(100vw - 10px)", marginTop: "100px" }}
    >
      <div className="roulette-table-container">
        <section className="container-first">
          <div className="zero-item" data-action={0} data-bet={0}>
            <div
              className="spleet-bet-catcher"
              data-action="STREET"
              data-highlight="0-00-2"
              style={{ left: "auto", right: "-15px", zIndex: 13 }}
            />

            <div
              className="corner-bet-catcher bottom"
              data-action="BASKET_US"
              data-highlight="0-00-1-2-3"
              style={{ zIndex: 14 }}
            />

            <div
              className="split-up-bet-catcher-top"
              data-action="ROW"
              data-highlight="0-00"
            />

            <div
              className="split-up-bet-catcher-right"
              data-action="SPLIT"
              data-highlight="0-2"
            />

            <div
              className="split-up-bet-catcher-right"
              data-action="SPLIT"
              data-highlight="0-1"
              style={{ height: "85px", top: "auto", bottom: "0px" }}
            />
            <div
              className="basket-catcher-bottom"
              data-action="BASKET_US"
              data-highlight="0-00-1-2-3"
              style={{ left: "-3px" }}
            />
            <div
              onClick={() =>
                handleStakeChange({
                  key: 0,
                  data,
                  dataIndex: 0,
                  runnerIndex: 0,
                  type: "back",
                })
              }
              className="value"
            >
              0
              <div className="absolute bottom-1/2 lg:rotate-90 scale-[60%] origin-center z-50 left-1/2 -translate-x-1/2 translate-y-1/2">
                {" "}
                <StakeAnimation
                  animation={animation}
                  double={double}
                  runner={"0"}
                  stake={stake}
                  stakeState={stakeState}
                />
              </div>
            </div>
          </div>
          <div className="zero-item" data-action={0} data-bet={0}>
            <div
              className="corner-bet-catcher"
              data-action="BASKET_US"
              data-highlight="00-0-1-2-3"
              style={{ zIndex: 14 }}
            />
            <div
              className="split-up-bet-catcher-right"
              data-action="SPLIT"
              data-highlight="00-3"
              style={{ zIndex: 12, height: "85px" }}
            />
            <div
              className="split-up-bet-catcher-right"
              data-action="SPLIT"
              data-highlight="00-2"
              style={{ height: "85px", top: "auto", bottom: "0px" }}
            />
            <div
              className="basket-catcher-top"
              data-action="BASKET_US"
              data-highlight="00-0-1-2-3"
              style={{ left: "-3px" }}
            />
            <div className="value">00</div>
          </div>
          <NumbersBet
            animation={animation}
            data={data}
            double={double}
            handleStakeChange={handleStakeChange}
            stake={stake}
            stakeState={stakeState}
          />
          <div
            className="column-item"
            data-action="1ST_COLUMN"
            data-bet="1ST_COLUMN"
            data-highlight="1ST_COLUMN"
          >
            <div className="value">1st</div>
          </div>
          <div
            className="column-item"
            data-action="2ND_COLUMN"
            data-bet="2ND_COLUMN"
            data-highlight="2ND_COLUMN"
          >
            <div className="value">2nd</div>
          </div>
          <div
            className="column-item"
            data-action="3RD_COLUMN"
            data-bet="3RD_COLUMN"
            data-highlight="3RD_COLUMN"
          >
            <div className="value">3rd</div>
          </div>
        </section>
        <section className="container-second">
          <div
            className="doz-item"
            data-action="1ST_DOZEN"
            data-bet="1ST_DOZEN"
            data-highlight="1ST_DOZEN"
          >
            <div>1-12</div>
          </div>
          <div
            className="doz-item"
            data-action="2ND_DOZEN"
            data-bet="2ND_DOZEN"
            data-highlight="2ND_DOZEN"
          >
            <div>13-24</div>
          </div>
          <div
            className="doz-item"
            data-action="3RD_DOZEN"
            data-bet="3RD_DOZEN"
            data-highlight="3RD_DOZEN"
          >
            <div>25-36</div>
          </div>
        </section>
        <div className="container-third">
          <div
            className="outside-section"
            data-action="1_TO_18"
            data-bet="1_TO_18"
            data-highlight="1_TO_18"
          >
            <div>1-18</div>
          </div>
          <div
            className="outside-section"
            data-action="EVEN"
            data-bet="EVEN"
            data-highlight="EVEN"
          >
            <div>EVEN</div>
          </div>
          <div
            className="outside-section"
            data-action="RED"
            data-bet="RED"
            data-highlight="RED"
          >
            <div>
              <div className="rhomb-red" />
            </div>
          </div>
          <div
            className="outside-section"
            data-action="BLACK"
            data-bet="BLACK"
            data-highlight="BLACK"
          >
            <div>
              <div className="rhomb-black" />
            </div>
          </div>
          <div
            className="outside-section"
            data-action="ODD"
            data-bet="ODD"
            data-highlight="ODD"
          >
            <div>ODD</div>
          </div>
          <div
            className="outside-section"
            data-action="19_TO_36"
            data-bet="19_TO_36"
            data-highlight="19_TO_36"
          >
            <div>19-36</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
