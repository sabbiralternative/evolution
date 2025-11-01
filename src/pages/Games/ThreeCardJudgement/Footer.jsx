import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useSound } from "../../../context/ApiProvider";
import { setBalance } from "../../../redux/features/auth/authSlice";
import { playWinSound } from "../../../utils/sound";

const Footer = ({
  firstEvent,
  totalWinAmount,
  setTotalWinAmount,
  setShowWinLossResult,
  showWinLossResult,
  title,
  setCurrentRoundWinAmount,
  cards,
  setWinnerName,
}) => {
  const { sound } = useSound();
  const dispatch = useDispatch();
  const totalBetPlace = localStorage.getItem("totalBetPlace");
  const { eventId } = useParams();
  const { balance } = useSelector((state) => state.auth);
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
        const { rank } = firstEvent;
        const placedBet = parseTotalBet[0];
        let winnerSum = 0;
        let looserSum = 0;
        if (rank?.length === 3) {
          if (placedBet?.name === "Yes") {
            const isWin = cards?.some((card) => rank?.includes(card?.value));
            if (isWin) {
              setWinnerName("Yes");
              winnerSum += placedBet?.price * placedBet?.stake;
            } else {
              setWinnerName("No");
              looserSum = looserSum + -placedBet?.stake;
            }
          } else {
            const isWin = !cards?.some((card) => rank?.includes(card?.value));
            if (isWin) {
              setWinnerName("No");
              winnerSum += placedBet?.price * placedBet?.stake;
            } else {
              setWinnerName("Yes");
              looserSum = looserSum + -placedBet?.stake;
            }
          }
          totalWin += looserSum + winnerSum;
          setTotalWinAmount(totalWin);
          setCurrentRoundWinAmount(totalWin);
          setShowWinLossResult(true);
        }
      }
    }
  }, [
    totalBetPlace,
    cards,
    firstEvent,
    setCurrentRoundWinAmount,
    setShowWinLossResult,
    setTotalWinAmount,
    setWinnerName,
  ]);
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
    <div
      className="tableInfoContainer--b6c41 commonUiElement sm--89dd5 tall--a21d4 iphone10--fa60a hasRoundedCorners--1e1b3 hasNotch--267d0 withGradient--c01fc hasExtraRoundedCorners--6ed2f isFullscreen--d501d"
      data-role="table-bottom-info"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 140%),linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)",
      }}
    >
      <div
        className="messageOneLine--78130 positionBottom--82ca2"
        data-role="one-line-chat"
      >
        {/* <li class="row--46c58 item--252d7 latestMessageBottom--fdfb0 mobile--bd7ac" data-role="chat-message">
                        <div class="bubble--aef29 dealer--4af2e removeBackground--373e2 removeHorizontalPadding--79df3 removeVerticalPadding--7bc76 singleLine--ba50e">
                            <div class="name--5b112" data-role="chat-message__sender-name">Anastasija: </div>
                            <div class="message--a529e" data-role="chat-message__text">Hello, Rocky! Welcome to Golden Wealth Baccarat!</div>
                        </div>
                    </li> */}
      </div>
      <div className="row--cc33b">
        <div className="totalBetContainer--d8028">
          <div className="totalBet--ab8a8 container--cf1f7 md--8e6c2">
            <span className="title--2a257" data-role="total-bet-title">
              {showWinLossResult ? "Last Win" : " Total Bet"}
            </span>
            <span className="amount--58e65">
              <span className="value--58a54" data-role="total-bet-value">
                {showWinLossResult
                  ? `₹ ${totalWinAmount}`
                  : `₹ ${totalBetAmount}`}
              </span>
            </span>
          </div>
        </div>
        <div className="clockContainer--1684d">
          <div
            className="gameTime--9d037 gameTime--4b53f"
            data-role="game-time"
          >
            {firstEvent?.roundId}
          </div>
        </div>
      </div>
      <div className="row--cc33b">
        <div className="balanceContainer--ac1aa">
          <div
            className="balance--ede09 container--cf1f7 md--8e6c2 portrait--304f9"
            data-role="balance-label-one-line"
          >
            <span className="title--2a257" data-role="balance-title">
              Balance
            </span>
            <span className="amount--58e65">
              <span
                className="value--58a54"
                data-role="balance-value"
                data-balance-visible="₹8.24"
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
        <div className="tableNameContainer--2fc7c">
          <span
            className="tableName--ed38c tableName--aad8c md--faf59"
            data-role="table-name"
          >
            {title}
          </span>
          <div
            className="tableLimits--97b4b tableLimits--f2c2b"
            data-role="table-limits"
          >
            ₹100 – 100,000
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
