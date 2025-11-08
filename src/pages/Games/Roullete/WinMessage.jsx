import { Status } from "../../../const";

const WinMessage = ({ firstEvent, currentRoundWinAmount }) => {
  return (
    <div className="overlays--4cd0a top-[150px]" style={{ height: "auto" }}>
      <div className="mobileGameOverlay--a7837" style={{ height: "auto" }}>
        <div className="gameResultContainer--374ad isMobile--d2fa5 isPortrait--01bd0 hasWin--ce559 isLargeDevice--710cc shiftBottom--027e5">
          <div className="gameResultElements--81495">
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

export default WinMessage;
