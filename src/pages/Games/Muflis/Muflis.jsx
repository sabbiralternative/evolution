import { useEffect, useState } from "react";
import ActionButtons from "./ActionButtons";
import BetSlip from "./BetSlip";
import Footer from "../../../component/shared/Footer";
import Menu from "../../../component/shared/Menu/Menu";
import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import { Status } from "../../../const";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { handleDoubleStake } from "../../../utils/handleDoubleStake";
import { handleUndoStake } from "../../../utils/handleUndoStake";
import { useSound } from "../../../context/ApiProvider";
import { playClick } from "../../../utils/sound";

const Muflis = () => {
  const { sound } = useSound();
  const [showMenu, setShowMenu] = useState(false);
  const [double, setDouble] = useState(false);
  const [animation, setAnimation] = useState([]);
  const [showWinLossResult, setShowWinLossResult] = useState(false);
  const [totalWinAmount, setTotalWinAmount] = useState(null);
  const [, setCurrentRoundWinAmount] = useState(null);
  const { stake } = useSelector((state) => state.global);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const { eventTypeId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId: 10001 },
    { pollingInterval: 1000 }
  );

  const firstEvent = data?.result?.[0];

  const initialState = {
    player: { show: false, stake },
    banker: { show: false, stake },
    tie: { show: false, stake },
    pPair: { show: false, stake },
    pBonus: { show: false, stake },
    bPair: { show: false, stake },
    bBonus: { show: false, stake },
    either: { show: false, stake },
  };

  const [stakeState, setStakeState] = useState(initialState);

  const isRepeatTheBet = Object.values(stakeState).find(
    (item) => item?.selection_id && item?.show === false && item?.serial
  );

  const isPlaceStake = Object.values(stakeState).find((item) => item?.show);

  useEffect(() => {
    if (firstEvent?.status === Status.OPEN) {
      setCurrentRoundWinAmount(null);
    }
    if (firstEvent?.status === Status.SUSPENDED) {
      setStakeState((prev) => {
        const updatedState = { ...prev };

        Object.keys(updatedState).forEach((key) => {
          if (!updatedState[key].serial) {
            updatedState[key] = {
              ...initialState[key],
            };
          }
        });

        return updatedState;
      });
    }
  }, [firstEvent?.status]);

  return (
    <>
      {showMenu && (
        <div
          className="backgroundScrim--f8ae8 backgroundScrim--3380d"
          data-role="drawer-scrim"
          style={{
            opacity: "0.4",
            transitionDuration: "initial",
            transitionTimingFunction: "initial",
            // background: "green",
          }}
        />
      )}
      <AnimatePresence>
        {showMenu && (
          <Menu
            setShowMenu={setShowMenu}
            setShowFullScreen={setShowFullScreen}
            showFullScreen={showFullScreen}
          />
        )}
      </AnimatePresence>

      <div id="root" className="rootContainer--308ad">
        <div className="container--efd24">
          <div
            className="gameUnderlay--be9f5"
            data-role="container"
            style={{ background: "rgb(217, 196, 154)", opacity: 1 }}
          />
          <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
            <div className="relativeChildren--99d54">
              <div
                onClick={() => {
                  setShowMenu(true);
                  if (sound) playClick();
                }}
                className="container--ea4e5 commonUiElement"
                data-role="menu-button-layout"
              >
                <button
                  className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonRoot--3bd4d"
                  data-type="secondary"
                  data-role="menu-button"
                  data-state="Default"
                >
                  <span
                    className="roundingBoth--2a8e7 buttonContent--2a2d4 xxs--c4d69"
                    data-role="button-content"
                  >
                    <div
                      className="buttonBase--73d7d"
                      data-role="base-border"
                      style={{
                        padding: "calc(var(--rem-migration-size, 10px) * 0.1)",
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
                              data-role="menu-icon"
                              height="100%"
                              y="0%"
                            >
                              <path d="M20 6H4v2h16V6Zm0 5H4v2h16v-2ZM4 16h16v2H4v-2Z" />
                            </svg>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="badge--81159" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="toasts--02433" data-role="toasts-container">
            <div className="container--fb02b sm--4450c">
              <div
                className="center--9b96d sm--4450c useMediumScreenMediaQuery--574a5"
                data-role="toast-drawer-wrapper"
              >
                <div
                  className="drawer--e8e4c hidden--d3be2"
                  data-role="toast-drawer"
                />
              </div>
            </div>
          </div>
          <div
            className="video--53b3c"
            data-role="video-with-overlay-container"
          >
            <div
              className="movable--3cffb timer--a3e31"
              style={{ "-y": "0px", "-x": "0px" }}
            >
              <div className="timer--2b516 portrait--f7c02">
                <div className="wrapper--8b249">
                  <div
                    data-role="circle-timer"
                    data-timer-version={1}
                    className="container--6cb86 commonUiElement fadeIn--a5208"
                  >
                    <div
                      className="timerCircleContainer--4935d spin--ff972"
                      data-role="timer-circle"
                    >
                      <canvas
                        style={{
                          display: "block",
                          width: "76px",
                          height: "76px",
                        }}
                        width={228}
                        height={228}
                      />
                    </div>
                    <div
                      className="contentWrapper--db941"
                      data-role="timer-content"
                    >
                      <canvas
                        style={{
                          display: "block",
                          width: "76px",
                          height: "76px",
                        }}
                        width={228}
                        height={228}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="movable--3cffb mobileVideoWrapper--444cb"
              style={{ "-y": "0px", "-x": "0px" }}
            >
              <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
                <div className="relativeChildren--99d54" />
              </div>
              <div
                style={{ width: "430px", height: "241.875px", margin: "auto" }}
              >
                <div
                  data-role="scaled-video-container"
                  className="videoWrapper--0aab6"
                  style={{
                    width: "430px",
                    height: "241.875px",
                    transformOrigin: "center top",
                    transform: "scale(1, 1) translate(0px, 0px)",
                  }}
                >
                  <div className="zoom--61717">
                    <div
                      className="zoomInner--097ac"
                      style={{
                        "-origin": "50% 0%",
                        "-scale": "1.3",
                        "-transformx": "0%",
                        "-transformy": "0%",
                        "-duration": "0s",
                      }}
                    >
                      <div
                        className="video-wrapper--914e4 inline--a3f70 static-wrapper--ef8dc"
                        data-role="video-wrapper"
                      >
                        <div
                          className="videoInnerWrapper--f6789"
                          id="video-inner"
                          data-role="gesture-target"
                        >
                          <div
                            id="video-wrapper"
                            className="videoWrapper--514d0"
                          >
                            <div
                              className="transformWrapper--37164"
                              style={{ visibility: "visible" }}
                            >
                              <div style={{ height: "100%" }}>
                                <div style={{ width: "100%", height: "100%" }}>
                                  <video
                                    muted="true"
                                    preload="none"
                                    data-current-player="true"
                                    playsInline
                                    style={{
                                      height: "100%",
                                      width: "100%",
                                      pointerEvents: "none",
                                      display: "block",
                                      objectFit: "contain",
                                    }}
                                    src="blob:https://babylonbetst.evo-games.com/6280f135-f1e3-4569-abf6-4f03250a753f"
                                  />
                                  <canvas
                                    width={0}
                                    height={0}
                                    style={{
                                      display: "none",
                                      objectFit: "contain",
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="backdropBlurContainer--3eb32" />
                            </div>
                            <div className="preventPinchingOverlay--0ddab" />
                            <div className="customContent--d8507">
                              <div
                                className="videoLoadingOverlay--bb9e3 hidden--797ae"
                                data-role="video-loading-picture"
                                style={{
                                  animationDuration: "500ms",
                                  animationDelay: "0ms",
                                }}
                              >
                                <div
                                  className="image--6dbc6"
                                  style={{
                                    backgroundImage:
                                      'url("blob:https://babylonbetst.evo-games.com/821905e0-e797-4538-967a-3c0b18429bd3")',
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gradientWrapper--3d7b6 noAnimation--4aa9f"
                style={{
                  height: "730.125px",
                  transform: "translateY(145px)",
                }}
              >
                <div
                  className="videoGradient--10404"
                  style={{
                    background: `linear-gradient(
                    rgba(217, 196, 154, 0) 0%,
                    rgb(217, 196, 154) 25px,
                    rgb(53, 40, 13) 50%
                  )`,
                  }}
                />
              </div>
              <div className="overlays--4cd0a">
                <div className="mobileGameOverlay--de0e3">
                  <div
                    className="gameResultPosition--b98cd headerOnly--4947d underCards--ff92a"
                    style={{ transform: "translateY(73.7116px)" }}
                  >
                    <div className="gameResultContainer--3ab12" />
                  </div>
                  <div className="cuttingCaption--5cba8">
                    <p className="caption--d92c8 phone--f961b" />
                  </div>
                </div>
              </div>
              <div
                className="scores--4d643"
                style={{ transform: "translateY(50.6199px)" }}
              >
                <div
                  className="player--9fa2c"
                  style={{ transform: "scale(1.14754)" }}
                >
                  <div className="score--37bd3 player--3ff16 hidden--83baa">
                    <svg
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1H36C40.9706 1 45 5.02944 45 10V36C45 40.9706 40.9706 45 36 45H4C2.34315 45 1 43.6569 1 42V10C1 5.02944 5.02944 1 10 1Z"
                        fill="url(#fillGradient:r0:)"
                        stroke="url(#strokeGradient:r0:)"
                        strokeWidth={2}
                        vectorEffect="non-scaling-stroke"
                      />
                      <defs>
                        <linearGradient
                          id="fillGradient:r0:"
                          x1={100}
                          y1={0}
                          x2={0}
                          y2={100}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#00000066" />
                          <stop offset="50%" stopColor="#00000000" />
                        </linearGradient>
                        <linearGradient
                          id="strokeGradient:r0:"
                          x1="100%"
                          y1="0%"
                          x2={0}
                          y2="100%"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#FFFFFF98" />
                          <stop offset="50%" stopColor="#FFFFFF00" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="value--cd1e0" />
                  </div>
                </div>
                <div
                  className="banker--5af1c"
                  style={{ transform: "scale(1.14754)" }}
                >
                  <div className="score--37bd3 banker--24a04 hidden--83baa">
                    <svg
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1H36C40.9706 1 45 5.02944 45 10V36C45 40.9706 40.9706 45 36 45H4C2.34315 45 1 43.6569 1 42V10C1 5.02944 5.02944 1 10 1Z"
                        fill="url(#fillGradient:r1:)"
                        stroke="url(#strokeGradient:r1:)"
                        strokeWidth={2}
                        vectorEffect="non-scaling-stroke"
                      />
                      <defs>
                        <linearGradient
                          id="fillGradient:r1:"
                          x1={100}
                          y1={0}
                          x2={0}
                          y2={100}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#00000066" />
                          <stop offset="50%" stopColor="#00000000" />
                        </linearGradient>
                        <linearGradient
                          id="strokeGradient:r1:"
                          x1="100%"
                          y1="0%"
                          x2={0}
                          y2="100%"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#FFFFFF98" />
                          <stop offset="50%" stopColor="#FFFFFF00" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="value--cd1e0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="gameOverlay--aabc7"
            data-role="game-overlay-container"
          >
            <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
              <div className="relativeChildren--99d54">
                <div
                  className="portraitMobileOverlay--fc6c8"
                  style={{
                    "--top-offset": "250.07172131147541px",
                    "--bottom-offset": "50px",
                    "--grid-height": "228px",
                  }}
                >
                  <BetSlip
                    initialState={initialState}
                    double={double}
                    animation={animation}
                    setAnimation={setAnimation}
                    setShowWinLossResult={setShowWinLossResult}
                    setTotalWinAmount={setTotalWinAmount}
                    stakeState={stakeState}
                    setStakeState={setStakeState}
                    data={data?.result}
                    status={firstEvent?.status}
                    height={true}
                    width={true}
                    transform={true}
                  />
                </div>
                <div className="minimizeButtonContainer--4004c buttonContainer--8c7a9">
                  <button
                    className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonStateDisabled--77839 buttonRoot--3bd4d disabled--c81e1"
                    data-type="secondary"
                    data-role="minimizeButton"
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
                            <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23D5D3D0%22%20fill-rule%3D%22nonzero%22%20d%3D%22M10%208.95%2018.2.3l1.45%201.38-9.67%2010.16L.34%201.69%201.8.3z%22%2F%3E%0A%3C%2Fsvg%3E%0A" />
                          </span>
                        </span>
                      </div>
                      <div className="badge--81159" />
                    </span>
                  </button>
                  <div className="menuButtonSpacer--222f9" />
                  <div className="menuButtonSpacer--222f9" />
                </div>
              </div>
            </div>
          </div>

          {
            <ActionButtons
              isRepeatTheBet={isRepeatTheBet}
              handleDoubleStake={() =>
                handleDoubleStake(
                  isRepeatTheBet,
                  setDouble,
                  setStakeState,
                  setAnimation,
                  firstEvent,
                  sound
                )
              }
              handleUndoStake={() =>
                handleUndoStake(setStakeState, stakeState, sound)
              }
              isPlaceStake={isPlaceStake}
            />
          }
          <Footer
            showWinLossResult={showWinLossResult}
            setShowWinLossResult={setShowWinLossResult}
            setTotalWinAmount={setTotalWinAmount}
            totalWinAmount={totalWinAmount}
            data={data?.result}
            firstEvent={firstEvent}
            title="Muflis"
            setCurrentRoundWinAmount={setCurrentRoundWinAmount}
          />
          <div className="tooltipsContainer--515fb increasedZIndex--60d95" />
          <div className="container--75075">
            <div className="chipContainer--7219d">
              <div className="chipTransformWrapper--5204d">
                <div className="chip--29b81" data-role="chip" data-value={0}>
                  <svg
                    viewBox="0 0 78 78"
                    className="graphics--22cbe"
                    data-role="default-svg"
                    style={{ color: "rgb(146, 146, 146)" }}
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
                      fontSize={30}
                      dy={10}
                      data-role="chip-value"
                    >
                      0
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flyingBodies--27a9a"
            data-bodies="chips"
            data-no-flying-bodies="true"
          >
            <div className="flyingBody--6d663">
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
          </div>
          <div data-role="bubble-container" />
          <div
            data-role="overlay-container"
            className="chatOverlayPortal--fd539"
          />
          <div
            className="onboardingBubbleContainer--d208c"
            data-role="onboarding-bubble-container"
          />
        </div>
      </div>
    </>
  );
};

export default Muflis;
