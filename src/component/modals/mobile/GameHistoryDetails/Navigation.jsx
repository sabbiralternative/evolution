import { usePlaySound } from "../../../../hooks/playSound";

const Navigation = ({ setTab }) => {
  const { playClickSound } = usePlaySound();
  return (
    <div
      className="navigation--db816 sm--b5a1a"
      data-role="history-round-navigation"
    >
      <div
        onClick={() => {
          setTab("game-history");
          playClickSound();
        }}
        className="switchToPrevContainer--84636"
      >
        <div className="switchRound--4e646" data-role="switch-to-prev">
          <span className="chevronLeft--424f8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon--8dcd0"
              height={15}
            >
              <path d="m15.78 17.31-4.95-4.95 4.95-4.95L14.37 6 8 12.36l6.37 6.36 1.41-1.41Z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="goBack--9724a">
        <button
          onClick={() => {
            setTab("game-history");
            playClickSound();
          }}
          className="button--673ce xxxs--2d4a2 roundingBoth--6d5e6 labelPositionInside--74c5c buttonRoot--3bd4d"
          data-type="secondary"
          data-role="go-back"
          data-state="Default"
        >
          <span
            className="roundingBoth--2a8e7 buttonContent--2a2d4 xxxs--a7f61"
            data-role="button-content"
          >
            <div
              className="buttonBase--73d7d"
              data-role="base-border"
              style={{
                padding: "calc(var(--rem-migration-size, 10px) * 0.08)",
              }}
            />
            <div className="iconLabelWrapper--8e144">
              <span
                data-role="button-label"
                className="label--6561f labelSizeDefault--145bb"
              >
                Back to Game History
              </span>
            </div>
            <div className="badge--81159" />
          </span>
        </button>
      </div>
      <div className="switchToNextContainer--a97b7" />
    </div>
  );
};

export default Navigation;
