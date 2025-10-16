import { useEffect, useState } from "react";
import ActionButtons from "./ActionButtons";
import BetSlip from "./BetSlip";
import Footer from "../../../component/shared/Footer";
import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import { Status } from "../../../const";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { handleDoubleStake } from "../../../utils/handleDoubleStake";
import { handleUndoStake } from "../../../utils/handleUndoStake";
import AntMedia from "../../../component/shared/Antmedia";
import { useSound } from "../../../context/ApiProvider";
import Menu from "../../../component/shared/Menu/Menu";
import { playClick } from "../../../utils/sound";
import Counter from "../../../component/UI/Counter";

const War = () => {
  const { sound } = useSound();
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
    { eventTypeId, eventId: eventId },
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
            data-role="branded-gradient"
            className="gradient--5a4aa onlyPortrait--08467"
            style={{
              background: `linear-gradient(
                45deg,
                rgba(38, 42, 9, 0) 0%,
                rgba(38, 42, 9, 0.8) 50%,
                rgba(38, 42, 9, 0) 100%
              ),
              linear-gradient(
                45deg,
                rgb(111, 84, 46) -5%,
                rgb(38, 42, 9) 50%,
                rgb(111, 84, 46) 105%
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
                  data-status="PLACE YOUR BETS"
                >
                  <div className="wrapper--8b249">
                    {firstEvent?.status === Status.OPEN && (
                      <Counter firstEvent={firstEvent} />
                    )}
                    {/* <RoadPrediction2 /> */}
                  </div>
                </div>
              </div>
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
            <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
              <div className="relativeChildren--99d54" />
            </div>
            <div style={{ width: "100%", height: "432.956px", margin: "auto" }}>
              <div
                data-role="scaled-video-container"
                className="videoWrapper--0aab6 noAnimation--5e625"
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
                                'url("blob:https://babylonbetst.evo-games.com/a4dee174-a066-45de-b532-ffdf77da042b")',
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
          <div
            className="gameOverlay--aabc7"
            data-role="game-overlay-container"
          >
            <div
              className="draggingOverlay--767ae"
              style={{ "-chipsize": "0px" }}
            >
              <div className="draggingChip--13576 hidden--314c0">
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
            <div
              className="portraitOverlay--13d63"
              style={{
                "-portraitgradientheight": "533.04375px",
                "-safecontainerpaddingbottom": "90px",
              }}
            >
              <div className="gradientOverlay--7b319">
                <div className="gradient--c2af0">
                  <svg
                    className="inner--861d7"
                    viewBox="0 0 440 1200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      mask="url(#mask0_10087_221404)"
                      fill="url(#pattern0_10087_221404)"
                    >
                      <rect width={440} height={1100} fill="#676A32" />
                      <rect
                        height={440}
                        width={1120}
                        className="cloth--762de"
                        transform="rotate(-90) translate(-800 0)"
                      />
                    </g>
                    <defs>
                      <mask
                        id="mask0_10087_221404"
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={440}
                        height={1120}
                        style={{ maskType: "alpha" }}
                      >
                        <path
                          d="M0 0H440V120H0V0Z"
                          fill="url(#paint0_radial_10084_247239)"
                        />
                        <rect
                          y={119}
                          height={1120}
                          width={440}
                          fillOpacity={1}
                          fill="#ffffff"
                        />
                      </mask>
                      <radialGradient
                        id="paint0_radial_10084_247239"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(220 -52.2581) scale(342.5 166.004)"
                      >
                        <stop stopColor="#676A32" stopOpacity={0} />
                        <stop
                          offset="0.70618"
                          stopColor="#676A32"
                          stopOpacity={0}
                        />
                        <stop offset="0.945826" stopColor="#676A32" />
                      </radialGradient>
                      <radialGradient
                        id="gradient-mask"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(220 -52.2581) scale(342.5 166.004)"
                      >
                        <stop stopColor="#ffffff" stopOpacity={0} />
                        <stop
                          offset="0.70618"
                          stopColor="#ffffff"
                          stopOpacity={0}
                        />
                        <stop offset="0.945826" stopColor="#ffffff" />
                      </radialGradient>
                      <pattern
                        id="pattern0_10087_221404"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <use
                          xlinkHref="#image0_10087_221404"
                          transform="matrix(0.000256188 0 0 0.000478185 -0.0231621 -0.0489897)"
                        />
                      </pattern>
                      <image
                        id="image0_10087_221404"
                        width={4096}
                        height={2304}
                        preserveAspectRatio="none"
                        xlinkHref="/frontend/evo/mini/images/cloth.11389db5.webp"
                      />
                    </defs>
                  </svg>
                </div>
                <div className="warGradient--1a80c" />
                <div className="tableInfoGradient--9ec30" />
              </div>
              <div className="innerContainer--9ef9f">
                {/* <div className="trafficLightContainer--9a485">
                  <div
                    className="overlayStatus--ad1a9"
                    data-role="status-container"
                    data-size="sm"
                    style={{ "-scale": "1.6" }}
                  >
                    <div data-role="status-text">
                      <div className="trafficLightWrapper--3ca3e gradientSm--8b47b phone--a7df7">
                        <span className="trafficLightText--7ae6e">
                          PLACE YOUR BETS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lineTimer--d92aa">
                  <div
                    className="visible--6ef4a"
                    style={{
                      "-timein": "200ms",
                      "-timeout": "200ms",
                      "-delayin": "0ms",
                      "-delayout": "0ms",
                    }}
                  >
                    <div
                      className="linearTimer--1abb0 sm--de46e"
                      data-role="linear-timer"
                      style={{ "-commonLineartimerWidth": "100%" }}
                    >
                      <div className="rail--14b30">
                        <div
                          className="bar--32675"
                          style={{ maskPosition: "32.0737% 0px" }}
                        >
                          <div className="barFill--71be5 green--521ab" />
                          <div className="barFill--71be5 yellow--021f4 hidden--3b295" />
                        </div>
                      </div>
                      <div className="shadow--95274" />
                      <div className="numberWrapper--3d1dc">
                        <div className="number--4d612">6</div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="decisionContainer--85f12">
                  <div
                    className="hidden--6c351"
                    style={{
                      "-timein": "200ms",
                      "-timeout": "500ms",
                      "-delayin": "0ms",
                      "-delayout": "0ms",
                    }}
                  />
                </div>
                <div className="gameResultContainer--bd622">
                  <div className="gameResultContainer--38d17 sm--59ab9 hidden--1acaa green--9e049 defaultWin--e2a34">
                    <div className="effects--8dbd2">
                      <canvas
                        className="canvas--fbafc front--8acd6"
                        width={1024}
                        height={1024}
                      />
                      <canvas
                        className="canvas--fbafc back--527ad"
                        width={1024}
                        height={1024}
                      />
                    </div>
                    <div className="header--c6435">
                      <div
                        className="gameResultHeader--58666 sm--9ef9b green--586f7 hidden--e9c3a"
                        data-role="game-result-header"
                      >
                        <div className="background--8ea54" />
                        <div className="gradientTopLine--b0fad" />
                        <div className="label--3d371">
                          <span className="goldenText--95415">
                            PLAYER<span className="shadow--a83a6">PLAYER</span>
                          </span>
                        </div>
                        <div className="gradientBottomLine--4e452" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="bottomChipHolder--e9aba" />
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
                  firstEvent,
                  sound
                )
              }
              handleUndoStake={() =>
                handleUndoStake(setStakeState, stakeState, sound)
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
            title="Super Color"
            setCurrentRoundWinAmount={setCurrentRoundWinAmount}
          />
          <div className="tooltipsContainer--515fb increasedZIndex--60d95" />
          <div
            data-role="overlay-container"
            className="chatOverlayPortal--fd539"
          />
          <div
            className="onboardingBubbleContainer--d208c"
            data-role="onboarding-bubble-container"
          />
        </div>
        <div className="flyingChips--e543f" data-no-flying-chips="true" />
      </div>
    </>
  );
};

export default War;
