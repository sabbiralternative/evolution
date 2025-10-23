import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSound } from "../../../context/ApiProvider";
import { setBalance } from "../../../redux/features/auth/authSlice";
import { playWinSound } from "../../../utils/sound";

const AmountSection = ({
  data,
  totalWinAmount,
  setTotalWinAmount,
  setShowWinLossResult,
  showWinLossResult,
  setCurrentRoundWinAmount,
}) => {
  const { balance } = useSelector((state) => state.auth);

  const { sound } = useSound();
  const dispatch = useDispatch();
  const totalBetPlace = localStorage.getItem("totalBetPlace");
  const { eventId } = useParams();

  let totalBetAmount = 0;
  if (totalBetPlace) {
    const parseTotalBet = JSON.parse(totalBetPlace);

    if (parseTotalBet?.length > 0) {
      const filterOrderByEventId = parseTotalBet?.filter(
        (order) => order?.eventId == eventId
      );
      for (const order of filterOrderByEventId) {
        totalBetAmount = parseFloat((totalBetAmount + order?.stake).toFixed(2));
      }
    }
  }

  useEffect(() => {
    let totalWin = 0;

    if (totalBetPlace) {
      const parseTotalBet = JSON.parse(totalBetPlace);

      if (parseTotalBet && parseTotalBet.length > 0) {
        data?.forEach((games) => {
          games?.runners?.forEach((runner) => {
            if (runner?.status === "WINNER") {
              const winnerFilter = parseTotalBet?.filter(
                (order) =>
                  order?.selection_id === runner?.id &&
                  runner?.status === "WINNER"
              );

              const looserFilter = parseTotalBet?.filter(
                (order) =>
                  order?.selection_id === runner?.id &&
                  runner?.status === "ACTIVE"
              );

              let WinnerSum = 0;
              let looserSum = 0;
              if (looserFilter) {
                for (const looser of looserFilter) {
                  looserSum = looserSum + -looser?.stake;
                }
              }

              if (winnerFilter) {
                for (const winner of winnerFilter) {
                  WinnerSum += winner?.price * winner?.stake;
                }
              }

              totalWin += looserSum + WinnerSum;

              setTotalWinAmount(totalWin);
              setCurrentRoundWinAmount(totalWin);
              setShowWinLossResult(true);
            }
          });
        });
      }
    }
  }, [data, totalBetPlace]);

  useEffect(() => {
    if (totalBetPlace && (totalWinAmount != null || showWinLossResult)) {
      const parseTotalBet = JSON.parse(totalBetPlace);
      const filterOrderByEventId = parseTotalBet?.filter(
        (order) => order?.eventId == eventId
      );
      if (totalWinAmount > 0 && filterOrderByEventId?.length > 0) {
        dispatch(setBalance(balance + parseFloat(totalWinAmount)));
        if (sound) {
          playWinSound();
        }
      }

      const filterCurrentEventBet = parseTotalBet?.filter(
        (bet) => bet?.eventId != eventId
      );

      localStorage.setItem(
        "totalBetPlace",
        JSON.stringify(filterCurrentEventBet)
      );
    }
  }, [eventId, totalWinAmount, showWinLossResult, sound]);
  return (
    <div className="bottom-left--24748" data-role="bottom-left-corner">
      <div className="box--4ecd6">
        <div className="item-wrapper--7891b left--e9b9f">
          <div className="balance--9d5c5 md--c934f" data-role="balance-label">
            <div className="textContainer--7e5ca">
              <span
                className="title--aaf15 lineClamp--fe41f"
                data-role="balance-label-title"
                style={{
                  fontSize: "calc(var(--root-size, 10px) * 1.4)",
                }}
              >
                BALANCE
              </span>
              <span
                className="amount--f8dd5"
                style={{
                  fontSize: `calc(
                              var(--root-size, 10px) * 1.9999995694294943
                            )`,
                }}
              >
                <span
                  data-role="balance-label-value"
                  data-balance-visible="₹6,924.33"
                  data-currency-symbol="₹"
                  data-fs-element="Visible balance"
                  data-fs-properties-schema='{
                            "data-balance-visible": "real",
                            "data-currency-symbol": "string",
                        }'
                >
                  ₹{balance}
                </span>
              </span>
            </div>
          </div>
          <div
            className="totalBet--12561 md--f7fae"
            data-role="total-bet-label"
          >
            <div
              className="highlighting--23ca1"
              data-role="total-bet-label-highlighting"
            />
            <div className="textContainer--874f1">
              <span
                className="title--14f79 lineClamp--fe41f"
                data-role="total-bet-label-title"
                style={{
                  fontSize: "calc(var(--root-size, 10px) * 1.4)",
                }}
              >
                {showWinLossResult ? "LAST WIN" : " TOTAL BET"}
              </span>
              <span
                className="amount--04d84"
                style={{
                  fontSize: `calc(
                              var(--root-size, 10px) * 1.9999995694294943
                            )`,
                }}
              >
                <span data-role="total-bet-label-value">
                  {showWinLossResult
                    ? `₹ ${totalWinAmount}`
                    : `₹ ${totalBetAmount}`}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmountSection;
