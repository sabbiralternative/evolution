import { useEffect, useState } from "react";
import ActionButtons from "./ActionButtons";
import BetSlip from "./BetSlip";
import Footer from "../../../component/shared/Footer";
// import RoadPrediction from "./RoadPrediction";
import Menu from "../../../component/shared/Menu/Menu";
import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import { Status } from "../../../const";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { handleDoubleStake } from "../../../utils/handleDoubleStake";
import { handleUndoStake } from "../../../utils/handleUndoStake";
import Counter from "../../../component/UI/Counter";
import AntMedia from "../../../component/shared/Antmedia";
// import Winner from "./Winner";

const ImperialQuest = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [double, setDouble] = useState(false);
  const [animation, setAnimation] = useState([]);
  const [showWinLossResult, setShowWinLossResult] = useState(false);
  const [totalWinAmount, setTotalWinAmount] = useState(null);
  const [, setCurrentRoundWinAmount] = useState(null);
  const { stake } = useSelector((state) => state.global);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId: 10001 },
    { pollingInterval: 1000 }
  );

  const firstEvent = data?.result?.[0];

  const initialState = {
    even: { show: false, stake },
    up: { show: false, stake },
    odd: { show: false, stake },
    red: { show: false, stake },
    down: { show: false, stake },
    black: { show: false, stake },
    seven: { show: false, stake },
    diamond: { show: false, stake },
    heart: { show: false, stake },
    spade: { show: false, stake },
    club: { show: false, stake },
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
        <div>
          <div className="container--efd24">
            <div
              data-role="branded-gradient"
              className="gradient--5a4aa onlyPortrait--08467"
              style={{
                background: `linear-gradient(
                  45deg,
                  rgba(40, 0, 8, 0) 0%,
                  rgba(40, 0, 8, 0.8) 50%,
                  rgba(40, 0, 8, 0) 100%
                ),
                linear-gradient(
                  45deg,
                  rgb(97, 0, 18) -5%,
                  rgb(40, 0, 8) 50%,
                  rgb(97, 0, 18) 105%
                )`,
              }}
            />
            <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
              <div className="relativeChildren--99d54">
                <div
                  className="container--1668a"
                  data-role="circle-timer-container"
                >
                  <div
                    className="timer--51f1d"
                    data-role="status-text"
                    data-status="NEXT GAME SOON"
                  >
                    <div className="wrapper--8b249">
                      {firstEvent?.status === Status.OPEN && (
                        <Counter firstEvent={firstEvent} />
                      )}
                    </div>
                  </div>
                </div>
                <div
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
                <div className="autoplay--349e5">
                  <div className="button--15026 commonUiElement">
                    <button
                      className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonStateDisabled--77839 buttonRoot--3bd4d disabled--c81e1"
                      data-type="secondary"
                      data-role="autoplay-button"
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
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  className="icon--8dcd0"
                                  height="100%"
                                  y="0%"
                                >
                                  <path d="M5.434 7.964A5 5 0 0 0 3.97 11.5a5 5 0 0 0 1.4 3.42L3.64 16A7 7 0 0 1 9 4.5h6V3l4 2.5-.2.13-2 1.23L14.97 8V6.5h-6a5 5 0 0 0-3.536 1.464ZM20.34 8.01l-1.73 1.08a5 5 0 0 1 1.36 3.41 5 5 0 0 1-5 5h-6V16l-1.82 1.15-2 1.23-.2.12 4 2.5v-1.5h6a7 7 0 0 0 7-7 7 7 0 0 0-1.61-4.49Z" />
                                  <path d="m15 12-5-3v6l5-3Z" />
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
              <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
                <div className="relativeChildren--99d54" />
              </div>
              <div
                style={{ width: "100%", height: "290.25px", margin: "auto" }}
              >
                <div
                  data-role="scaled-video-container"
                  className="videoWrapper--0aab6"
                  style={{
                    width: "100%",
                    height: "241.875px",
                    transformOrigin: "center top",
                    transform: "scale(1.1) translate(0px, 0px)",
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
                      <div id="video-wrapper" className="videoWrapper--514d0">
                        <div
                          className="transformWrapper--37164"
                          style={{ visibility: "visible" }}
                        >
                          <div style={{ height: "100%" }}>
                            <div style={{ width: "100%", height: "100%" }}>
                              {firstEvent?.server && (
                                <AntMedia server={firstEvent?.server} />
                              )}
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
                                  'url("blob:https://babylonbetst.evo-games.com/b0d5b886-864d-4406-ba58-4154a1930177")',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gradientWrapper--373cf"
                style={{
                  top: "187.755px",
                  height: "108.239px",
                  transform: "translateY(48.375px) translateZ(0px)",
                }}
              >
                <div
                  className="videoGradient--aa947"
                  style={{
                    background: `linear-gradient(
                    rgba(97, 0, 18, 0) 0%,
                    30%,
                    rgb(40, 0, 8) 50%,
                    rgba(40, 0, 8, 0) 100%
                  )`,
                  }}
                />
              </div>
              <div className="gradient--4c9eb areBetsOpen--cad6e hidden--ac9d5" />
              <div
                className="winnersListPortraitPhone--57744 winnersListGradient--6fa71"
                data-role="video-winners-list"
                style={{
                  top: "calc(var(--root-size, 10px) * 2)",
                  height: "220px",
                }}
              >
                <div
                  className="smoothPositioningLayer--a0161"
                  data-role="video-winners-list-positioning-layer"
                  style={{ transform: "translateY(220px)" }}
                >
                  <div
                    className="container--249b3 fadeOut--105fe"
                    data-role="winners-list-container"
                  >
                    <div
                      className="winnersList--d6707 sm--8c185 winnersListLeft--f2595"
                      data-role="winners-list"
                      style={{
                        transition: "transform 11.65s linear",
                        transform: "translate3d(0px, -233px, 0px)",
                      }}
                    >
                      <div className="winnersListInner--4b484" />
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
                  <div className="portraitContent--aa203">
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
                </div>
              </div>
            </div>
            {firstEvent?.status === Status.OPEN && (
              <ActionButtons
                isRepeatTheBet={isRepeatTheBet}
                handleDoubleStake={() =>
                  handleDoubleStake(
                    isRepeatTheBet,
                    setDouble,
                    setStakeState,
                    setAnimation,
                    firstEvent
                  )
                }
                handleUndoStake={() =>
                  handleUndoStake(setStakeState, stakeState)
                }
                isPlaceStake={isPlaceStake}
              />
            )}
            <Footer
              showWinLossResult={showWinLossResult}
              setShowWinLossResult={setShowWinLossResult}
              setTotalWinAmount={setTotalWinAmount}
              totalWinAmount={totalWinAmount}
              data={data?.result}
              firstEvent={firstEvent}
              title={firstEvent?.eventName}
              setCurrentRoundWinAmount={setCurrentRoundWinAmount}
            />
            <div className="tooltipsContainer--515fb increasedZIndex--60d95" />
            <div className="layoutOverlay--fd8be">
              <div className="trafficLight--8570c isPortrait--383f5">
                <div
                  className="overlayStatus--ad1a9 hidden--5fe23"
                  data-role="status-container"
                  data-size="sm"
                  style={{ "-scale": "1.6" }}
                >
                  <div
                    className="gradient--957d4"
                    data-role="status-gradient"
                    style={{ top: "-45.5938px", left: "-97.1172px" }}
                  />
                  <div data-role="status-text">
                    <span>NEXT GAME SOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-role="overlay-container"
              className="chatOverlayPortal--fd539"
            />
            <div
              className="onboardingBubbleContainer--d208c"
              data-role="onboarding-bubble-container"
            />
          </div>
          <div className="flyingChips--d568c" data-no-flying-chips="true" />
          <div className="container--e035c">
            <div className="chipContainer--94886">
              <div className="chipTransformWrapper--6dd0c">
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
        </div>
      </div>
    </>
  );
};

export default ImperialQuest;
