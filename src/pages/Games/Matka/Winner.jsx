import { Status } from "../../../const";

const Winner = ({ firstEvent, currentRoundWinAmount }) => {
  const winner = firstEvent?.runners?.find(
    (runner) => runner?.status === Status.WINNER
  );

  return (
    <div className="overlays--4cd0a">
      <div className="mobileGameOverlay--a7837" style={{ height: "auto" }}>
        <div className="gameResultContainer--374ad isMobile--d2fa5 isPortrait--01bd0 hasWin--ce559 isLargeDevice--710cc shiftBottom--027e5">
          <div className="gameResultElements--81495">
            {winner && (
              <div
                className="winner--6aa50"
                style={{
                  background: `linear-gradient(to right, rgba(0,150,255, 0),${
                    winner?.name === "Daga/Teja"
                      ? "rgb(255, 0, 0)"
                      : "rgba(0,150,255, 0.9)"
                  },rgba(0,150,255, 0)`,
                }}
              >
                <span
                  className="genericPhrase--d0b15"
                  data-role="game-result-winner"
                >
                  {winner?.name}
                </span>
              </div>
            )}
            {currentRoundWinAmount > 0 &&
              firstEvent?.status === Status.SUSPENDED && (
                <div className="message--f7a3d" data-role="winning-message">
                  <div data-role="winning-message-text">YOU WIN</div>
                  <div
                    className="amount--47c0e"
                    data-role="winning-message-amount"
                  >
                    ₹{currentRoundWinAmount}
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
