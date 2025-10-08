import { useDispatch, useSelector } from "react-redux";
import { setStake } from "../../../redux/features/global/globalSlice";
import { playChipChange } from "../../../utils/sound";
import { useSound } from "../../../context/ApiProvider";

const ChipContainer = ({
  isPlaceStake,
  handleUndoStake,
  handleDoubleStake,
  isRepeatTheBet,
}) => {
  const { sound } = useSound();
  const { stake } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const handleChangeChip = (chip) => {
    dispatch(setStake(chip));

    if (sound) playChipChange();
  };

  return (
    <div className="chipstack--fd307" data-role="chip-stack-container">
      <div className="box--28913 stick-to-bottom--e2852">
        <div
          className="container--81b6a commonUiElement"
          data-role="chip-stack-wrapper"
        >
          <div
            style={{
              opacity: isPlaceStake ? 1 : "0.5",
              cursor: isPlaceStake ? "pointer" : "not-allowed",
              pointerEvents: isPlaceStake ? "auto" : "none",
            }}
            onClick={handleUndoStake}
            className="leftSideButtonBox--ada21 leftPinnedButtonBox--91a69"
          >
            <div
              className="undoButtonWrapper--5a8a0"
              data-role="expanded-chip-stack-undo-button-wrapper"
            >
              <div style={{ position: "relative" }}>
                <button
                  className="button--673ce sm--8ab3e roundingBoth--6d5e6 buttonStateDisabled--77839 buttonRoot--3bd4d disabled--c81e1"
                  data-type="secondary"
                  data-role="undo-button"
                  data-state="Disabled"
                >
                  <span
                    className="roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b"
                    data-role="button-content"
                  >
                    <div
                      className="buttonBase--73d7d"
                      data-role="base-border"
                      style={{
                        padding: `calc(
                                        var(--rem-migration-size, 10px) * 0.12
                                      )`,
                      }}
                    />
                    <div className="iconLabelWrapper--8e144 left--60884">
                      <span className="icon--54b42">
                        <span
                          className="iconWrapper--9127d"
                          data-role="icon-wrapper"
                        >
                          <svg
                            viewBox="0 0 100 100"
                            className="iconWrapper--b4e49"
                            style={{ height: "100%" }}
                          >
                            <svg
                              xmlns="http://wwwUndoSVG.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="icon--8dcd0"
                              height="100%"
                              y="0%"
                            >
                              <path d="M13 6H9V4L4 7l5 3V8h4a4.5 4.5 0 1 1 0 9H5v2h8a6.5 6.5 0 1 0 0-13Z" />
                            </svg>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="badge--81159" />
                  </span>
                </button>
              </div>
              <button className="clickableLabel--ffc68">
                <span
                  className="labelText--1755b"
                  data-role="expanded-chip-stack-undo-label"
                >
                  UNDO
                </span>
              </button>
            </div>
          </div>
          {/* CHIPS */}
          <div
            className="expandedWrapper--e8856"
            data-role="expanded-chip-stack-wrapper"
          >
            <div data-role="chip-stack" className="expandedChipStack--f87da">
              <div
                onClick={() => handleChangeChip(100)}
                className="chipItem--7d58b md--fdbc4"
                data-role="selected-chip"
                style={{ padding: "5px", margin: "-1px" }}
              >
                <div
                  className="hoverEffect--12915"
                  data-role="hover-effect"
                  style={{ inset: "2px" }}
                >
                  <svg viewBox="0 0 64 64">
                    <defs>
                      <linearGradient id="strokeGradient-0kk0wf" x2={0} y2={1}>
                        <stop offset={0} stopColor="rgba(255, 255, 255, 0.2)" />
                        <stop offset={1} stopColor="transparent" />
                      </linearGradient>
                      <radialGradient id="fillGradient-aimxzi">
                        <stop offset={0} stopColor="transparent" />
                        <stop offset={1} stopColor="rgba(255, 255, 255, 0.2)" />
                      </radialGradient>
                    </defs>
                    <circle
                      cx={32}
                      cy={32}
                      r="31.5"
                      fill="url(#fillGradient-aimxzi)"
                      stroke="url(#strokeGradient-0kk0wf)"
                      strokeWidth={1}
                    />
                  </svg>
                </div>
                {stake === 100 && (
                  <div
                    className="border--ddab7 expanded--9da79"
                    data-role="selected-chip-border"
                  >
                    <svg viewBox="0 0 70 70">
                      <defs>
                        <linearGradient id="ar6a" x1={1} x2={0} y2={1}>
                          <stop offset="0%" stopColor="#fff9b1" />
                          <stop offset="40%" stopColor="#f0d475" />
                          <stop offset="60%" stopColor="#c38b19" />
                          <stop offset="80%" stopColor="#fff9b1" />
                          <stop offset="100%" stopColor="#fff9b1" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx={35}
                        cy={35}
                        r={33}
                        fill="none"
                        stroke="url(#ar6a)"
                        strokeWidth={4}
                      />
                    </svg>
                  </div>
                )}
                <div className="chip--29b81" data-role="chip" data-value={100}>
                  <svg
                    viewBox="0 0 78 78"
                    className="graphics--22cbe"
                    data-role="default-svg"
                    style={{ color: "rgb(89, 89, 89)" }}
                  >
                    <g>
                      <circle
                        className="paint--13ff6"
                        cx="39.019"
                        cy="38.999"
                        r="38.5"
                      />
                      <path
                        className="body--369ee"
                        d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                      />
                      <circle
                        className="textBackground--84c26"
                        cx={39}
                        cy="38.997"
                        r="25.5"
                      />
                      <path
                        className="body--369ee"
                        d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                      />
                    </g>
                    <text
                      className="value--ebf30"
                      x="50%"
                      y="50%"
                      fontSize={24}
                      dy={8}
                      data-role="chip-value"
                    >
                      100
                    </text>
                  </svg>
                </div>
              </div>
              <div
                onClick={() => handleChangeChip(200)}
                className="chipItem--7d58b md--fdbc4"
                style={{ padding: "5px", margin: "-1px" }}
              >
                <div
                  className="hoverEffect--12915"
                  data-role="hover-effect"
                  style={{ inset: "2px" }}
                >
                  <svg viewBox="0 0 64 64">
                    <defs>
                      <linearGradient id="strokeGradient-v4q03u" x2={0} y2={1}>
                        <stop offset={0} stopColor="rgba(255, 255, 255, 0.2)" />
                        <stop offset={1} stopColor="transparent" />
                      </linearGradient>
                      <radialGradient id="fillGradient-zcl098">
                        <stop offset={0} stopColor="transparent" />
                        <stop offset={1} stopColor="rgba(255, 255, 255, 0.2)" />
                      </radialGradient>
                    </defs>
                    <circle
                      cx={32}
                      cy={32}
                      r="31.5"
                      fill="url(#fillGradient-zcl098)"
                      stroke="url(#strokeGradient-v4q03u)"
                      strokeWidth={1}
                    />
                  </svg>
                </div>
                {stake === 200 && (
                  <div
                    className="border--ddab7 expanded--9da79"
                    data-role="selected-chip-border"
                  >
                    <svg viewBox="0 0 70 70">
                      <defs>
                        <linearGradient id="ar6a" x1={1} x2={0} y2={1}>
                          <stop offset="0%" stopColor="#fff9b1" />
                          <stop offset="40%" stopColor="#f0d475" />
                          <stop offset="60%" stopColor="#c38b19" />
                          <stop offset="80%" stopColor="#fff9b1" />
                          <stop offset="100%" stopColor="#fff9b1" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx={35}
                        cy={35}
                        r={33}
                        fill="none"
                        stroke="url(#ar6a)"
                        strokeWidth={4}
                      />
                    </svg>
                  </div>
                )}
                <div className="chip--29b81" data-role="chip" data-value={200}>
                  <svg
                    viewBox="0 0 78 78"
                    className="graphics--22cbe"
                    data-role="default-svg"
                    style={{ color: "rgb(255, 130, 214)" }}
                  >
                    <g>
                      <circle
                        className="paint--13ff6"
                        cx="39.019"
                        cy="38.999"
                        r="38.5"
                      />
                      <path
                        className="body--369ee"
                        d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                      />
                      <circle
                        className="textBackground--84c26"
                        cx={39}
                        cy="38.997"
                        r="25.5"
                      />
                      <path
                        className="body--369ee"
                        d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                      />
                    </g>
                    <text
                      className="value--ebf30"
                      x="50%"
                      y="50%"
                      fontSize={24}
                      dy={8}
                      data-role="chip-value"
                    >
                      200
                    </text>
                  </svg>
                </div>
              </div>
              <div
                onClick={() => handleChangeChip(500)}
                className="chipItem--7d58b md--fdbc4"
                style={{ padding: "5px", margin: "-1px" }}
              >
                <div
                  className="hoverEffect--12915"
                  data-role="hover-effect"
                  style={{ inset: "2px" }}
                >
                  <svg viewBox="0 0 64 64">
                    <defs>
                      <linearGradient id="strokeGradient-v3mozp" x2={0} y2={1}>
                        <stop offset={0} stopColor="rgba(255, 255, 255, 0.2)" />
                        <stop offset={1} stopColor="transparent" />
                      </linearGradient>
                      <radialGradient id="fillGradient-y29x1p">
                        <stop offset={0} stopColor="transparent" />
                        <stop offset={1} stopColor="rgba(255, 255, 255, 0.2)" />
                      </radialGradient>
                    </defs>
                    <circle
                      cx={32}
                      cy={32}
                      r="31.5"
                      fill="url(#fillGradient-y29x1p)"
                      stroke="url(#strokeGradient-v3mozp)"
                      strokeWidth={1}
                    />
                  </svg>
                </div>
                {stake === 500 && (
                  <div
                    className="border--ddab7 expanded--9da79"
                    data-role="selected-chip-border"
                  >
                    <svg viewBox="0 0 70 70">
                      <defs>
                        <linearGradient id="ar6a" x1={1} x2={0} y2={1}>
                          <stop offset="0%" stopColor="#fff9b1" />
                          <stop offset="40%" stopColor="#f0d475" />
                          <stop offset="60%" stopColor="#c38b19" />
                          <stop offset="80%" stopColor="#fff9b1" />
                          <stop offset="100%" stopColor="#fff9b1" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx={35}
                        cy={35}
                        r={33}
                        fill="none"
                        stroke="url(#ar6a)"
                        strokeWidth={4}
                      />
                    </svg>
                  </div>
                )}
                <div className="chip--29b81" data-role="chip" data-value={500}>
                  <svg
                    viewBox="0 0 78 78"
                    className="graphics--22cbe"
                    data-role="default-svg"
                    style={{ color: "rgb(206, 29, 0)" }}
                  >
                    <g>
                      <circle
                        className="paint--13ff6"
                        cx="39.019"
                        cy="38.999"
                        r="38.5"
                      />
                      <path
                        className="body--369ee"
                        d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                      />
                      <circle
                        className="textBackground--84c26"
                        cx={39}
                        cy="38.997"
                        r="25.5"
                      />
                      <path
                        className="body--369ee"
                        d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                      />
                    </g>
                    <text
                      className="value--ebf30"
                      x="50%"
                      y="50%"
                      fontSize={24}
                      dy={8}
                      data-role="chip-value"
                    >
                      500
                    </text>
                  </svg>
                </div>
              </div>
              <div
                onClick={() => handleChangeChip(2500)}
                className="chipItem--7d58b md--fdbc4"
                style={{ padding: "5px", margin: "-1px" }}
              >
                <div
                  className="hoverEffect--12915"
                  data-role="hover-effect"
                  style={{ inset: "2px" }}
                >
                  <svg viewBox="0 0 64 64">
                    <defs>
                      <linearGradient id="strokeGradient-4k3qab" x2={0} y2={1}>
                        <stop offset={0} stopColor="rgba(255, 255, 255, 0.2)" />
                        <stop offset={1} stopColor="transparent" />
                      </linearGradient>
                      <radialGradient id="fillGradient-f6atvz">
                        <stop offset={0} stopColor="transparent" />
                        <stop offset={1} stopColor="rgba(255, 255, 255, 0.2)" />
                      </radialGradient>
                    </defs>
                    <circle
                      cx={32}
                      cy={32}
                      r="31.5"
                      fill="url(#fillGradient-f6atvz)"
                      stroke="url(#strokeGradient-4k3qab)"
                      strokeWidth={1}
                    />
                  </svg>
                </div>
                {stake === 2500 && (
                  <div
                    className="border--ddab7 expanded--9da79"
                    data-role="selected-chip-border"
                  >
                    <svg viewBox="0 0 70 70">
                      <defs>
                        <linearGradient id="ar6a" x1={1} x2={0} y2={1}>
                          <stop offset="0%" stopColor="#fff9b1" />
                          <stop offset="40%" stopColor="#f0d475" />
                          <stop offset="60%" stopColor="#c38b19" />
                          <stop offset="80%" stopColor="#fff9b1" />
                          <stop offset="100%" stopColor="#fff9b1" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx={35}
                        cy={35}
                        r={33}
                        fill="none"
                        stroke="url(#ar6a)"
                        strokeWidth={4}
                      />
                    </svg>
                  </div>
                )}
                <div className="chip--29b81" data-role="chip" data-value={2500}>
                  <svg
                    viewBox="0 0 78 78"
                    className="graphics--22cbe"
                    data-role="default-svg"
                    style={{ color: "rgb(5, 174, 41)" }}
                  >
                    <g>
                      <circle
                        className="paint--13ff6"
                        cx="39.019"
                        cy="38.999"
                        r="38.5"
                      />
                      <path
                        className="body--369ee"
                        d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                      />
                      <circle
                        className="textBackground--84c26"
                        cx={39}
                        cy="38.997"
                        r="25.5"
                      />
                      <path
                        className="body--369ee"
                        d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                      />
                    </g>
                    <text
                      className="value--ebf30"
                      x="50%"
                      y="50%"
                      fontSize={18}
                      dy={5}
                      data-role="chip-value"
                    >
                      2500
                    </text>
                  </svg>
                </div>
              </div>
              <div
                onClick={() => handleChangeChip(10000)}
                className="chipItem--7d58b md--fdbc4"
                style={{ padding: "5px", margin: "-1px" }}
              >
                <div
                  className="hoverEffect--12915"
                  data-role="hover-effect"
                  style={{ inset: "2px" }}
                >
                  <svg viewBox="0 0 64 64">
                    <defs>
                      <linearGradient id="strokeGradient-4k3qab" x2={0} y2={1}>
                        <stop offset={0} stopColor="rgba(255, 255, 255, 0.2)" />
                        <stop offset={1} stopColor="transparent" />
                      </linearGradient>
                      <radialGradient id="fillGradient-f6atvz">
                        <stop offset={0} stopColor="transparent" />
                        <stop offset={1} stopColor="rgba(255, 255, 255, 0.2)" />
                      </radialGradient>
                    </defs>
                    <circle
                      cx={32}
                      cy={32}
                      r="31.5"
                      fill="url(#fillGradient-f6atvz)"
                      stroke="url(#strokeGradient-4k3qab)"
                      strokeWidth={1}
                    />
                  </svg>
                </div>
                {stake === 10000 && (
                  <div
                    className="border--ddab7 expanded--9da79"
                    data-role="selected-chip-border"
                  >
                    <svg viewBox="0 0 70 70">
                      <defs>
                        <linearGradient id="ar6a" x1={1} x2={0} y2={1}>
                          <stop offset="0%" stopColor="#fff9b1" />
                          <stop offset="40%" stopColor="#f0d475" />
                          <stop offset="60%" stopColor="#c38b19" />
                          <stop offset="80%" stopColor="#fff9b1" />
                          <stop offset="100%" stopColor="#fff9b1" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx={35}
                        cy={35}
                        r={33}
                        fill="none"
                        stroke="url(#ar6a)"
                        strokeWidth={4}
                      />
                    </svg>
                  </div>
                )}
                <div
                  className="chip--29b81 "
                  data-role="chip"
                  data-value={10000}
                >
                  <svg
                    viewBox="0 0 78 78"
                    className="graphics--22cbe"
                    data-role="default-svg"
                    style={{ color: "rgb(26, 26, 26)" }}
                  >
                    <g>
                      <circle
                        className="paint--13ff6"
                        cx="39.019"
                        cy="38.999"
                        r="38.5"
                      />
                      <path
                        className="body--369ee"
                        d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                      />
                      <circle
                        className="textBackground--84c26"
                        cx={39}
                        cy="38.997"
                        r="25.5"
                      />
                      <path
                        className="body--369ee"
                        d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                      />
                    </g>
                    <text
                      className="value--ebf30"
                      x="50%"
                      y="50%"
                      fontSize={24}
                      dy={8}
                      data-role="chip-value"
                    >
                      10k
                    </text>
                  </svg>
                </div>
              </div>
              <div
                onClick={() => handleChangeChip(50000)}
                className="chipItem--7d58b md--fdbc4"
                style={{ padding: "5px", margin: "-1px" }}
              >
                <div
                  className="hoverEffect--12915"
                  data-role="hover-effect"
                  style={{ inset: "2px" }}
                >
                  <svg viewBox="0 0 64 64">
                    <defs>
                      <linearGradient id="strokeGradient-4k3qab" x2={0} y2={1}>
                        <stop offset={0} stopColor="rgba(255, 255, 255, 0.2)" />
                        <stop offset={1} stopColor="transparent" />
                      </linearGradient>
                      <radialGradient id="fillGradient-f6atvz">
                        <stop offset={0} stopColor="transparent" />
                        <stop offset={1} stopColor="rgba(255, 255, 255, 0.2)" />
                      </radialGradient>
                    </defs>
                    <circle
                      cx={32}
                      cy={32}
                      r="31.5"
                      fill="url(#fillGradient-f6atvz)"
                      stroke="url(#strokeGradient-4k3qab)"
                      strokeWidth={1}
                    />
                  </svg>
                </div>
                {stake === 50000 && (
                  <div
                    className="border--ddab7 expanded--9da79"
                    data-role="selected-chip-border"
                  >
                    <svg viewBox="0 0 70 70">
                      <defs>
                        <linearGradient id="ar6a" x1={1} x2={0} y2={1}>
                          <stop offset="0%" stopColor="#fff9b1" />
                          <stop offset="40%" stopColor="#f0d475" />
                          <stop offset="60%" stopColor="#c38b19" />
                          <stop offset="80%" stopColor="#fff9b1" />
                          <stop offset="100%" stopColor="#fff9b1" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx={35}
                        cy={35}
                        r={33}
                        fill="none"
                        stroke="url(#ar6a)"
                        strokeWidth={4}
                      />
                    </svg>
                  </div>
                )}
                <div
                  className="chip--29b81 "
                  data-role="chip"
                  data-value={50000}
                >
                  <svg
                    viewBox="0 0 78 78"
                    className="graphics--22cbe"
                    data-role="default-svg"
                    style={{ color: "rgb(133, 72, 176)" }}
                  >
                    <g>
                      <circle
                        className="paint--13ff6"
                        cx="39.019"
                        cy="38.999"
                        r="38.5"
                      />
                      <path
                        className="body--369ee"
                        d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                      />
                      <circle
                        className="textBackground--84c26"
                        cx={39}
                        cy="38.997"
                        r="25.5"
                      />
                      <path
                        className="body--369ee"
                        d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                      />
                    </g>
                    <text
                      className="value--ebf30"
                      x="50%"
                      y="50%"
                      fontSize={24}
                      dy={8}
                      data-role="chip-value"
                    >
                      50k
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* CHIPS */}
          <div
            style={{
              opacity: isPlaceStake || isRepeatTheBet ? "1" : "0.5",
              cursor:
                isPlaceStake || isRepeatTheBet ? "pointer" : "not-allowed",
              pointerEvents: isPlaceStake || isRepeatTheBet ? "auto" : "none",
            }}
            onClick={handleDoubleStake}
            className="bettingButtonBox--31054 rightPinnedButtonBox--2c5af"
          >
            <div
              className="doubleRepeatButtonWrapper--54937"
              data-role="expanded-chip-stack-double-repeat-button-wrapper"
            >
              <button
                className="button--673ce sm--8ab3e roundingBoth--6d5e6 buttonStateDisabled--77839 buttonRoot--715a7 disabled--308db"
                data-type="secondaryCallToAction"
                data-role="double-button"
                data-state="Disabled"
              >
                <span
                  className="roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b"
                  data-role="button-content"
                >
                  <div
                    className="buttonBase--bf354"
                    data-role="base-border"
                    style={{
                      padding: `calc(
                                      var(--rem-migration-size, 10px) * 0.12
                                    )`,
                    }}
                  />
                  <div className="iconLabelWrapper--8e144 left--60884">
                    <span className="icon--54b42">
                      <span
                        className="iconWrapper--9127d"
                        data-role="icon-wrapper"
                      >
                        <svg
                          viewBox="0 0 100 100"
                          className="iconWrapper--b4e49"
                          style={{ height: "100%" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="icon--8dcd0"
                            data-role="double-svg"
                            height="100%"
                            y="0%"
                          >
                            <path d="M12.017 18.881v-1.49l4.63-4.81c.458-.477.841-.92 1.148-1.275l.082-.095c.287-.344.529-.724.72-1.13a2.57 2.57 0 0 0 .25-1.14 2.12 2.12 0 0 0-.33-1.18 2.17 2.17 0 0 0-.87-.77 2.83 2.83 0 0 0-1.25-.27 2.67 2.67 0 0 0-1.29.3 2.21 2.21 0 0 0-.84.85 2.67 2.67 0 0 0-.29 1.29h-2a4.14 4.14 0 0 1 .58-2.19 3.88 3.88 0 0 1 1.58-1.45 4.85 4.85 0 0 1 2.28-.52 4.84 4.84 0 0 1 2.27.51 3.87 3.87 0 0 1 1.55 1.39c.373.6.564 1.294.55 2a4.107 4.107 0 0 1-.28 1.5 6.777 6.777 0 0 1-1 1.62c-.473.593-1.14 1.313-2 2.16l-2.72 2.85v.1h6.16v1.77l-8.93-.02Zm-4.654-8.02L5.061 8.557 4 9.618l2.303 2.303-2.3 2.3 1.06 1.06 2.3-2.3 2.294 2.294 1.06-1.06-2.293-2.294 2.296-2.296-1.06-1.06-2.297 2.295Z" />
                          </svg>
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="badge--81159" />
                </span>
              </button>
              <button className="clickableLabel--8fd8e">
                <span
                  className="labelText--1755b"
                  data-role="expanded-chip-stack-double-repeat-label"
                >
                  {isRepeatTheBet ? "Repeat" : "Double"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChipContainer;
