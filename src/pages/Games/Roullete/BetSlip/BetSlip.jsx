import { useEffect, useState } from "react";
import { Status } from "../../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../../redux/features/events/events";
import { setBalance } from "../../../../redux/features/auth/authSlice";
import { playPlaceChip, playSuspendedSound } from "../../../../utils/sound";
import { useSound } from "../../../../context/ApiProvider";
import { useParams } from "react-router-dom";
import { handleStoreRecentPlay } from "../../../../utils/handleStorateRecentPlay";
import NumbersBet from "./NumbersBet";
import ZeroBet from "./ZeroBet";
import ColumnBet from "./ColumnBet";
import Dozen from "./Dozen";
import BottomBets from "./BottomBets";

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
  isMobile,
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
    console.log(payload);
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

  const [highlight, setHighlight] = useState([]);

  return (
    <div
      className={`${isMobile ? "scale-x-[1.2] scale-y-[0.9]" : ""}`}
      onClick={handleShowSuspendedStatus}
      style={{
        maxWidth: "calc(100vw - 10px)",
        marginTop: isMobile ? "125px" : "0px",
        rotate: isMobile ? "90deg" : "none",
      }}
    >
      <div className="roulette-table-container">
        <section className="container-first">
          <ZeroBet
            animation={animation}
            data={data}
            double={double}
            handleStakeChange={handleStakeChange}
            stake={stake}
            stakeState={stakeState}
            setHighlight={setHighlight}
            highlight={highlight}
            isMobile={isMobile}
          />
          <NumbersBet
            animation={animation}
            data={data}
            double={double}
            handleStakeChange={handleStakeChange}
            stake={stake}
            stakeState={stakeState}
            setHighlight={setHighlight}
            highlight={highlight}
            isMobile={isMobile}
          />
          <ColumnBet
            animation={animation}
            data={data}
            double={double}
            handleStakeChange={handleStakeChange}
            stake={stake}
            stakeState={stakeState}
            setHighlight={setHighlight}
            isMobile={isMobile}
          />
        </section>
        <Dozen
          animation={animation}
          data={data}
          double={double}
          handleStakeChange={handleStakeChange}
          stake={stake}
          stakeState={stakeState}
          setHighlight={setHighlight}
          isMobile={isMobile}
        />

        <BottomBets
          animation={animation}
          data={data}
          double={double}
          handleStakeChange={handleStakeChange}
          stake={stake}
          stakeState={stakeState}
          setHighlight={setHighlight}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

export default BetSlip;
