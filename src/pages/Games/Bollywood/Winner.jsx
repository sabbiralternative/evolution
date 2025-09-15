import { Status } from "../../../const";

const Winner = ({ data, firstEvent, currentRoundWinAmount }) => {
  // let card = undefined;
  let winner = undefined;
  const indexCard = data?.result?.[0]?.indexCard;

  // if (indexCard?.length > 0) {
  //   card = Number(indexCard[0].slice(1));
  // }

  if (indexCard == "S1") {
    winner = "Don";
  }
  if (indexCard == "H1" || indexCard == "C1" || indexCard == "D1") {
    winner = "AAA";
  }

  if (indexCard == "S13" || indexCard == "S12" || indexCard == "S11") {
    winner = "SBG";
  }
  if (indexCard == "D13" || indexCard == "C13") {
    winner = "DV";
  }
  if (
    indexCard == "H13" ||
    indexCard == "C12" ||
    indexCard == "D12" ||
    indexCard == "H12"
  ) {
    winner = "KKPK";
  }
  if (indexCard == "H11" || indexCard == "C11" || indexCard == "D11") {
    winner = "Ghulam";
  }

  return (
    <div className="overlays--4cd0a">
      <div className="mobileGameOverlay--a7837">
        <div className="gameResultContainer--374ad isMobile--d2fa5 isPortrait--01bd0 hasWin--ce559 isLargeDevice--710cc shiftBottom--027e5">
          <div className="gameResultElements--81495">
            {winner && (
              <div
                className="winner--6aa50"
                style={{
                  background: `linear-gradient(to right, rgba(0,150,255, 0),rgba(0,150,255, 0.9),rgba(0,150,255, 0)`,
                }}
              >
                <span
                  className="genericPhrase--d0b15"
                  data-role="game-result-winner"
                >
                  {winner}
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
