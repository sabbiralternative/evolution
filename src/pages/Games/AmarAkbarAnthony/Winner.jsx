import { useParams } from "react-router-dom";

const Winner = ({ data, totalWinAmount, showWinLossResult }) => {
  const totalBetPlace = localStorage.getItem("totalBetPlace");
  const { eventId } = useParams();
  let card = undefined;
  const indexCard = data?.result?.[0]?.indexCard;
  if (indexCard?.length > 0) {
    card = Number(indexCard[0].slice(1));
  }

  let totalBetAmount = 0;
  if (totalBetPlace) {
    const parseTotalBet = JSON.parse(totalBetPlace);
    // console.log(parseTotalBet);
    if (parseTotalBet?.length > 0) {
      const filterOrderByEventId = parseTotalBet?.filter(
        (order) => order?.eventId == eventId
      );
      for (const order of filterOrderByEventId) {
        totalBetAmount = parseFloat((totalBetAmount + order?.stake).toFixed(2));
      }
    }
  }

  return (
    <div className="overlays--4cd0a">
      <div className="mobileGameOverlay--a7837">
        <div className="gameResultContainer--374ad isMobile--d2fa5 isPortrait--01bd0 hasWin--ce559 isLargeDevice--710cc shiftBottom--027e5">
          <div className="gameResultElements--81495">
            {card && (
              <div
                className="winner--6aa50"
                style={{
                  background: `linear-gradient(to right, rgba(0,150,255, 0),${
                    card > 7
                      ? "rgb(255, 0, 0)"
                      : card < 7
                      ? "rgba(0,150,255, 0.9)"
                      : "rgb(0, 150, 0)"
                  },rgba(0,150,255, 0)`,
                }}
              >
                <span
                  className="genericPhrase--d0b15"
                  data-role="game-result-winner"
                >
                  {card < 7 && "Amar"}
                  {card > 6 && card < 11 && "Akbar"}

                  {card > 10 && "Anthony"}
                </span>
              </div>
            )}
            {showWinLossResult && totalWinAmount > 0 && totalBetAmount > 0 && (
              <div className="message--f7a3d" data-role="winning-message">
                <div data-role="winning-message-text">YOU WIN</div>
                <div
                  className="amount--47c0e"
                  data-role="winning-message-amount"
                >
                  ⁦⁦₹⁩{totalWinAmount}⁩
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="winAnimationWrapper--313ed isMobile--d2fa5 isPortrait--01bd0 isLargeDevice--710cc" />
      </div>
    </div>
  );
};

export default Winner;
