import { useEffect, useRef, useState } from "react";
import Chip100 from "../../../component/UI/Chip/Chip100";
import Chip200 from "../../../component/UI/Chip/Chip200";
import Chip500 from "../../../component/UI/Chip/Chip500";
import Chip2K500 from "../../../component/UI/Chip/Chip2K500";
import Chip10K from "../../../component/UI/Chip/Chip10K";
import Chip100K from "../../../component/UI/Chip/Chip100K";
import Stake from "../../../component/UI/Chip/Stake";
import { useDispatch, useSelector } from "react-redux";
import { setStake } from "../../../redux/features/global/globalSlice";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import Chip50K from "../../../component/UI/Chip/Chip50K";
import { playChipChange } from "../../../utils/sound";
import { useSound } from "../../../context/ApiProvider";

const ActionButtons = ({
  isPlaceStake,
  handleUndoStake,
  handleDoubleStake,
  isRepeatTheBet,
}) => {
  const { sound } = useSound();
  const { stake } = useSelector((state) => state.global);
  const modalRef = useRef();
  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();
  const [showChip, setShowChip] = useState(false);

  const closeModal = () => {
    setShowChip(false);
  };
  const openModal = () => {
    setShowChip(true);
    setDisable(true);
  };

  const handleChangeChip = (chip) => {
    dispatch(setStake(chip));
    closeModal();
    if (sound) playChipChange();
  };

  useCloseModalClickOutside(modalRef, () => {
    closeModal();
  });

  useEffect(() => {
    if (showChip === false) {
      setTimeout(() => {
        setDisable(false);
      }, 1000);
    }
  }, [showChip]);

  return (
    <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
      <div className="relativeChildren--99d54">
        {!showChip ? (
          <div
            data-role="chipstack-container"
            className="chipstack--3f519 positionBottomCentered--447ab visible--27fab phone--e75c2"
          >
            <div className="container--4e775">
              <div className="before--33fc6 commonUiElement hideable--4b209">
                <div
                  style={{
                    opacity: isPlaceStake ? 1 : "0.5",
                    cursor: isPlaceStake ? "pointer" : "not-allowed",
                    pointerEvents: isPlaceStake ? "auto" : "none",
                  }}
                  onClick={handleUndoStake}
                  className="actionButton--e4d79 buttonPositionLeft--2073e"
                  data-role="chipstack-undo-button"
                >
                  <div style={{ position: "relative" }}>
                    <button
                      className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonStateDisabled--77839 buttonRoot--3bd4d disabled--c81e1"
                      data-type="secondary"
                      data-role="undo-button"
                      data-state="Disabled"
                    >
                      <span
                        className="roundingBoth--2a8e7 buttonContent--2a2d4 xxs--c4d69"
                        data-role="button-content"
                      >
                        <div
                          className="buttonBase--73d7d"
                          data-role="base-border"
                          style={{
                            padding:
                              "cal( var(--rem-migration-size, 10px) * 0.1)",
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
                    <div className="label--e8213">
                      <div
                        className="label--365af disabledButtonLabel--a77ae buttonLocationChipStackHorizontal--4058e"
                        data-role="chip-stack-label"
                      >
                        UNDO
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="wrapper--08238 hideable--4b209">
                <div
                  data-role="chip-stack"
                  className="revolver--30d24 commonUiElement up--a4695"
                >
                  <div
                    className="overlay--ba584"
                    data-revolver-overlay="true"
                    data-role="revolver-overlay"
                  />
                  <ul
                    className="items--4189d"
                    data-role="revolver-item-list"
                    style={{
                      top: "calc(var(--size, 10px) * -6.85)",
                      left: "calc(var(--size, 10px) * -5.3)",
                      width: "calc(var(--size, 10px) * 15)",
                      height: "calc(var(--size, 10px) * 15)",
                      // "-chipTransitionDuration": "0ms",
                    }}
                  >
                    <li
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 5.7)",
                        left: "calc(var(--size, 10px) * 5.7)",
                        width: "calc(var(--size, 10px) * 3.6)",
                        height: "calc(var(--size, 10px) * 3.6)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
                        data-role="chip"
                        data-value={100}
                      >
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
                    </li>
                    <li
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 5.675)",
                        left: "calc(var(--size, 10px) * 4.65)",
                        width: "calc(var(--size, 10px) * 3.65)",
                        height: "calc(var(--size, 10px) * 3.65)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
                        data-role="chip"
                        data-value={200}
                      >
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
                    </li>
                    <li
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 5.7)",
                        left: "calc(var(--size, 10px) * 5.7)",
                        width: "calc(var(--size, 10px) * 3.6)",
                        height: "calc(var(--size, 10px) * 3.6)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
                        data-role="chip"
                        data-value={500}
                      >
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
                    </li>
                    <li
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 5.7)",
                        left: "calc(var(--size, 10px) * 5.7)",
                        width: "calc(var(--size, 10px) * 3.6)",
                        height: "calc(var(--size, 10px) * 3.6)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
                        data-role="chip"
                        data-value={2500}
                      >
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
                    </li>
                    <li
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 5.675)",
                        left: "calc(var(--size, 10px) * 6.7)",
                        width: "calc(var(--size, 10px) * 3.65)",
                        height: "calc(var(--size, 10px) * 3.65)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
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
                    </li>
                    <li
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 5.7)",
                        left: "calc(var(--size, 10px) * 5.7)",
                        width: "calc(var(--size, 10px) * 3.6)",
                        height: "calc(var(--size, 10px) * 3.6)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
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
                    </li>
                  </ul>
                  <div
                    onClick={openModal}
                    style={{ pointerEvents: disable ? "none" : "auto" }}
                    data-role="chip-stack-toggle-container"
                    className="toggleContainer--3bdf3 up--4547e"
                  >
                    <div
                      data-role="chip-stack-toggle"
                      className="toggle--3ad8c"
                    >
                      <div
                        className="border--ddab7 revolver--55b2d"
                        data-role="selected-chip-border"
                      >
                        <svg
                          viewBox="0 0 52 52"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="ar0a"
                              x1={0}
                              y1={52}
                              x2={52}
                              y2={0}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.262627" stopColor="#F7EAA3" />
                              <stop offset="0.505208" stopColor="#C29740" />
                              <stop offset="0.760417" stopColor="#FEF8B9" />
                            </linearGradient>
                          </defs>
                          <circle
                            cx={26}
                            cy={26}
                            r={25}
                            stroke="url(#ar0a)"
                            strokeWidth={2}
                          />
                        </svg>
                      </div>
                      <div
                        data-role="selected-chip"
                        className="toggleChip--30494 shadow--c66f4"
                      >
                        <div
                          className="chip--29b81 cover--6df8f"
                          data-role="chip"
                          data-value={100}
                        >
                          <Stake stake={stake} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="after--31b84 commonUiElement hideable--4b209">
                {isRepeatTheBet ? (
                  <div
                    style={{
                      opacity: isPlaceStake || isRepeatTheBet ? "1" : "0.5",
                      cursor:
                        isPlaceStake || isRepeatTheBet
                          ? "pointer"
                          : "not-allowed",
                      pointerEvents:
                        isPlaceStake || isRepeatTheBet ? "auto" : "none",
                    }}
                    onClick={handleDoubleStake}
                    className="actionButton--e4d79 buttonPositionRight--f7cb3"
                    data-role="chipstack-double-repeat-button"
                  >
                    <button
                      className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonRoot--715a7"
                      data-type="secondaryCallToAction"
                      data-role="repeat-button"
                      data-state="Default"
                    >
                      <span
                        className="roundingBoth--2a8e7 buttonContent--2a2d4 xxs--c4d69"
                        data-role="button-content"
                      >
                        <div
                          className="buttonBase--bf354"
                          data-role="base-border"
                          style={{
                            padding:
                              "calc(var(--rem-migration-size, 10px) * 0.1)",
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
                                  height="100%"
                                  y="0%"
                                >
                                  <path d="M21.5 11.5H20a8.5 8.5 0 1 0-8.5 8.5 8.25 8.25 0 0 0 2.55-.4l-.6-1.9A6.499 6.499 0 1 1 18 11.5h-2l3 5 3-5h-.5Z" />
                                </svg>
                              </svg>
                            </span>
                          </span>
                        </div>
                        <div className="badge--81159" />
                      </span>
                    </button>
                    <button className="clickableLabel--8fd8e active--bbaa2">
                      <div className="label--e8213">
                        <div
                          className="label--365af buttonLocationChipStackHorizontal--4058e"
                          data-role="chip-stack-label"
                        >
                          REPEAT
                        </div>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div
                    style={{
                      opacity: isPlaceStake || isRepeatTheBet ? "1" : "0.5",
                      cursor:
                        isPlaceStake || isRepeatTheBet
                          ? "pointer"
                          : "not-allowed",
                      pointerEvents:
                        isPlaceStake || isRepeatTheBet ? "auto" : "none",
                    }}
                    onClick={handleDoubleStake}
                    className="actionButton--e4d79 buttonPositionRight--f7cb3"
                    data-role="chipstack-double-repeat-button"
                  >
                    <button
                      className={`button--673ce xxs--2f9fb roundingBoth--6d5e6  buttonRoot--715a7 ${
                        isPlaceStake || isRepeatTheBet
                          ? ""
                          : "buttonStateDisabled--77839 disabled--308db"
                      }`}
                      data-type="secondaryCallToAction"
                      data-role="double-button"
                      data-state="Disabled"
                    >
                      <span
                        className="roundingBoth--2a8e7 buttonContent--2a2d4 xxs--c4d69"
                        data-role="button-content"
                      >
                        <div
                          className="buttonBase--bf354"
                          data-role="base-border"
                          style={{
                            padding:
                              "calc(var(--rem-migration-size, 10px) * 0.1)",
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
                      <div className="label--e8213">
                        <div
                          className="label--365af disabledButtonLabel--a77ae buttonLocationChipStackHorizontal--4058e"
                          data-role="chip-stack-label"
                        >
                          DOUBLE
                        </div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="chipstack--3f519 positionBottomCentered--447ab  visible--27fab phone--e75c2"
            data-role="chipstack-container"
          >
            <div className="container--4e775">
              <div className="before--33fc6 commonUiElement hideable--4b209">
                <div
                  className="actionButton--e4d79 buttonPositionLeft--2073e"
                  data-role="chipstack-undo-button"
                >
                  <div style={{ position: "relative" }}>
                    <button
                      className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonStateDisabled--77839 buttonRoot--3bd4d disabled--c81e1"
                      data-type="secondary"
                      data-role="undo-button"
                      data-state="Disabled"
                    >
                      <span
                        className="roundingBoth--2a8e7 buttonContent--2a2d4 xxs--c4d69"
                        data-role="button-content"
                      >
                        <div
                          className="buttonBase--73d7d"
                          data-role="base-border"
                          style={{
                            padding:
                              "calc(var(--rem-migration-size, 10px) * 0.1)",
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
                    <div className="label--e8213">
                      <div
                        className="label--365af disabledButtonLabel--a77ae buttonLocationChipStackHorizontal--4058e"
                        data-role="chip-stack-label"
                      >
                        UNDO
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="wrapper--08238 hideable--4b209">
                <div
                  data-role="chip-stack"
                  className="revolver--30d24 commonUiElement open--35bc8 up--a4695"
                >
                  <div
                    className="overlay--ba584"
                    data-revolver-overlay="true"
                    data-role="revolver-overlay"
                  />
                  <ul
                    ref={modalRef}
                    className="items--4189d"
                    data-role="revolver-item-list"
                    style={{
                      top: "calc(var(--size, 10px) * -7.35)",
                      left: "calc(var(--size, 10px) * -5.8)",
                      width: "calc(var(--size, 10px) * 16)",
                      height: "calc(var(--size, 10px) * 16)",
                    }}
                  >
                    <li
                      onClick={() => handleChangeChip(100)}
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 6.2)",
                        left: "calc(var(--size, 10px) * 6.2)",
                        width: "calc(var(--size, 10px) * 3.6)",
                        height: "calc(var(--size, 10px) * 3.6)",
                        transform:
                          "translate3d(calc(var(--size, 10px) * -7.8400), calc(var(--size, 10px) * 1.5922), 0)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
                        data-role="chip"
                        data-value={100}
                      >
                        <Chip100 value={100} />
                      </div>
                    </li>
                    <li
                      onClick={() => handleChangeChip(200)}
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 6.2)",
                        left: "calc(var(--size, 10px) * 6.2)",
                        width: "calc(var(--size, 10px) * 3.6)",
                        height: "calc(var(--size, 10px) * 3.6)",
                        transform:
                          "translate3d(calc(var(--size, 10px) * -7.3992), calc(var(--size, 10px) * -3.0417), 0)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
                        data-role="chip"
                        data-value={200}
                      >
                        <Chip200 value={200} />
                      </div>
                    </li>
                    <li
                      onClick={() => handleChangeChip(500)}
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 6.2)",
                        left: "calc(var(--size, 10px) * 6.2)",
                        width: "calc(var(--size, 10px) * 3.6)",
                        height: "calc(var(--size, 10px) * 3.6)",
                        transform:
                          "translate3d(calc(var(--size, 10px) * -4.4535), calc(var(--size, 10px) * -6.6458), 0)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
                        data-role="chip"
                        data-value={500}
                      >
                        <Chip500 value={500} />
                      </div>
                    </li>
                    <li
                      onClick={() => handleChangeChip(2500)}
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 6.2)",
                        left: "calc(var(--size, 10px) * 6.2)",
                        width: "calc(var(--size, 10px) * 3.6)",
                        height: "calc(var(--size, 10px) * 3.6)",
                        transform:
                          "translate3d(calc(var(--size, 10px) * -0.0000), calc(var(--size, 10px) * -8.0000), 0)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
                        data-role="chip"
                        data-value={2500}
                      >
                        <Chip2K500 value={2500} />
                      </div>
                    </li>
                    <li
                      onClick={() => handleChangeChip(10000)}
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 6.2)",
                        left: "calc(var(--size, 10px) * 6.2)",
                        width: "calc(var(--size, 10px) * 3.6)",
                        height: "calc(var(--size, 10px) * 3.6)",
                        transform:
                          "translate3d(calc(var(--size, 10px) * 4.4535), calc(var(--size, 10px) * -6.6458), 0)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
                        data-role="chip"
                        data-value={10000}
                      >
                        <Chip10K value="10k" />
                      </div>
                    </li>
                    <li
                      onClick={() => handleChangeChip(50000)}
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 6.2)",
                        left: "calc(var(--size, 10px) * 6.2)",
                        width: "calc(var(--size, 10px) * 3.6)",
                        height: "calc(var(--size, 10px) * 3.6)",
                        transform:
                          "translate3d(calc(var(--size, 10px) * 7.3992), calc(var(--size, 10px) * -3.0417), 0)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
                        data-role="chip"
                        data-value={50000}
                      >
                        <Chip50K value="50k" />
                      </div>
                    </li>
                    <li
                      onClick={() => handleChangeChip(100000)}
                      className="item--9e3ac chip--5e586"
                      data-role="revolver-chip-item"
                      style={{
                        top: "calc(var(--size, 10px) * 6.2)",
                        left: "calc(var(--size, 10px) * 6.2)",
                        width: "calc(var(--size, 10px) * 3.6)",
                        height: "calc(var(--size, 10px) * 3.6)",
                        transform:
                          "translate3d(calc(var(--size, 10px) * 7.8400), calc(var(--size, 10px) * 1.5922), 0)",
                      }}
                    >
                      <div
                        className="chip--29b81 cover--6df8f"
                        data-role="chip"
                        data-value={100000}
                      >
                        <Chip100K value="100k" />
                      </div>
                    </li>
                  </ul>
                  <div
                    data-role="chip-stack-toggle-container"
                    className="toggleContainer--3bdf3 up--4547e open--c66f5"
                  >
                    <div
                      data-role="chip-stack-toggle"
                      className="toggle--3ad8c"
                    >
                      <div
                        className="border--ddab7 revolver--55b2d open--bc0a8"
                        data-role="selected-chip-border"
                      >
                        <svg
                          viewBox="0 0 52 52"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="aria"
                              x1={0}
                              y1={52}
                              x2={52}
                              y2={0}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.262627" stopColor="#F7EAA3" />
                              <stop offset="0.505208" stopColor="#C29740" />
                              <stop offset="0.760417" stopColor="#FEF8B9" />
                            </linearGradient>
                          </defs>
                          <circle
                            cx={26}
                            cy={26}
                            r={25}
                            stroke="url(#aria)"
                            strokeWidth={2}
                          />
                        </svg>
                      </div>
                      <div
                        data-role="selected-chip"
                        className="toggleChip--30494 shadow--c66f4"
                      >
                        <div
                          className="chip--29b81 cover--6df8f"
                          data-role="chip"
                          data-value={100}
                        >
                          <Stake stake={stake} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="after--31b84 commonUiElement hideable--4b209">
                <div
                  className="actionButton--e4d79 buttonPositionRight--f7cb3"
                  data-role="chipstack-double-repeat-button"
                >
                  <button
                    className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonStateDisabled--77839 buttonRoot--715a7 disabled--308db"
                    data-type="secondaryCallToAction"
                    data-role="double-button"
                    data-state="Disabled"
                  >
                    <span
                      className="roundingBoth--2a8e7 buttonContent--2a2d4 xxs--c4d69"
                      data-role="button-content"
                    >
                      <div
                        className="buttonBase--bf354"
                        data-role="base-border"
                        style={{
                          padding:
                            "calc(var(--rem-migration-size, 10px) * 0.1)",
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
                    <div className="label--e8213">
                      <div
                        className="label--365af disabledButtonLabel--a77ae buttonLocationChipStackHorizontal--4058e"
                        data-role="chip-stack-label"
                      >
                        DOUBLE
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionButtons;
