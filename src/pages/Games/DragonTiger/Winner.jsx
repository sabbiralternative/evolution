import { Status } from "../../../const";

const Winner = ({ firstEvent, currentRoundWinAmount }) => {
  const winner = firstEvent?.runners?.find(
    (runner) => runner?.status === "WINNER"
  );

  return (
    <div className="overlays--4cd0a">
      <div className="mobileGameOverlay--a7837">
        <div className="gameResultContainer--374ad isMobile--d2fa5 isPortrait--01bd0 hasWin--ce559 isLargeDevice--710cc shiftBottom--027e5">
          <div className="gameResultElements--81495">
            {winner && (
              <div
                className="winner--6aa50"
                style={{
                  background: `linear-gradient(to right, rgba(0,150,255, 0),${
                    winner?.name === "Dragon"
                      ? "#540c0c"
                      : winner?.name === "Tiger"
                      ? "#60470a"
                      : winner?.name === "Tie"
                      ? "#0b2012"
                      : winner?.name === "Suited"
                      ? "#0b2012"
                      : "rgba(0,150,255, 0)"
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
