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
import { cn } from "../../../../utils/cn";

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
  isMobile,
}) => {
  const [highlight, setHighlight] = useState([]);
  const { eventId } = useParams();
  const { sound } = useSound();
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const dispatch = useDispatch();
  const [addOrder] = useOrderMutation();
  const { stake, deviceWidth } = useSelector((state) => state.global);
  const { balance, username } = useSelector((state) => state.auth);

  const handleStakeChange = (payload) => {
    if (status === Status.OPEN) {
      handleStoreRecentPlay(username, eventId, "roulette");
      const isRepeatTheBet = Object.values(stakeState).find(
        (item) => item?.selection_id && item?.show === false
      );
      if (isRepeatTheBet) {
        setStakeState({});
      }

      if (sound) playPlaceChip();

      const { key, type } = payload;
      setAnimation([key]);
      const formatData = {
        marketId: data?.[0]?.marketId,
        roundId: data?.[0]?.roundId,
        name: data?.[0]?.name,
        eventId: data?.[0]?.eventId,
        eventName: data?.[0]?.eventName,
        key,
        type,
        isback: type === "back" ? 0 : 1,
        event_id: data?.[0]?.eventId,
        event_type_id: data?.[0]?.event_type_id,
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
                : stake,
              marketId: formatData?.marketId,
              key: formatData?.key,
              type: formatData.type,
              isback: formatData?.isback,
              serial: prev?.[key]?.serial ? prev?.[key]?.serial : maxSerial + 1,
              actionBy: stake,
              undo: [...(prev?.[key]?.undo || []), stake],
            },
          };
        });
      }, 300);

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
      type: bet?.type,
      amount: bet?.stake,
      numbers: bet?.key,
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
              type: bet?.type,
              amount: bet?.stake,
              numbers: bet?.key,
              eventId: bet?.eventId,
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

  return (
    <div
      className={cn(
        isMobile && "rotate-[90deg] absolute",
        isMobile &&
          status === Status.SUSPENDED &&
          "w-[120vw] mt-[250px] translate-x-[-10%] ",
        isMobile && status === Status.OPEN && "w-[150vw] translate-x-[-19%]  ",
        "transition-all duration-700",
        deviceWidth < 360 &&
          isMobile &&
          status === Status.SUSPENDED &&
          "bottom-[50px]",
        deviceWidth < 360 &&
          isMobile &&
          status === Status.OPEN &&
          "bottom-[100px]",

        deviceWidth > 360 &&
          isMobile &&
          status === Status.SUSPENDED &&
          "bottom-[80px]",
        deviceWidth > 360 &&
          isMobile &&
          status === Status.OPEN &&
          "bottom-[150px]"
      )}
      onClick={handleShowSuspendedStatus}
    >
      <div
        className="roulette-table-container"
        style={{
          pointerEvents: status === Status.SUSPENDED ? "none" : "auto",
        }}
      >
        {/* <span
          className="absolute aspect-square w-[148px] -top-[74px]   -z-10 left-[31px] border-[4px] border-gold bg-[#5ea94f] "
          style={{ transform: "rotateX(82deg) rotateZ(46deg)" }}
        /> */}
        <section
          className="container-first relative"
          style={{
            height: status === Status.SUSPENDED ? "180px" : "228px",
          }}
        >
          <ZeroBet
            animation={animation}
            double={double}
            handleStakeChange={handleStakeChange}
            stake={stake}
            stakeState={stakeState}
            setHighlight={setHighlight}
            highlight={highlight}
            isMobile={isMobile}
            status={status}
          />
          <NumbersBet
            animation={animation}
            double={double}
            handleStakeChange={handleStakeChange}
            stake={stake}
            stakeState={stakeState}
            setHighlight={setHighlight}
            highlight={highlight}
            isMobile={isMobile}
            status={status}
          />
          <ColumnBet
            animation={animation}
            double={double}
            handleStakeChange={handleStakeChange}
            stake={stake}
            stakeState={stakeState}
            setHighlight={setHighlight}
            isMobile={isMobile}
            status={status}
          />
        </section>
        <Dozen
          animation={animation}
          double={double}
          handleStakeChange={handleStakeChange}
          stake={stake}
          stakeState={stakeState}
          setHighlight={setHighlight}
          isMobile={isMobile}
        />

        <BottomBets
          animation={animation}
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
