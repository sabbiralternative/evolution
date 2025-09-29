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
import Counter from "../../../component/UI/Counter";
import Winner from "./Winner";
import AntMedia from "../../../component/shared/Antmedia";
import { useSound } from "../../../context/ApiProvider";
import { playClick } from "../../../utils/sound";

const LuckySeven = () => {
  const { sound } = useSound();
  const [showMenu, setShowMenu] = useState(false);
  const [double, setDouble] = useState(false);
  const [animation, setAnimation] = useState([]);
  const [showWinLossResult, setShowWinLossResult] = useState(false);
  const [totalWinAmount, setTotalWinAmount] = useState(null);
  const [currentRoundWinAmount, setCurrentRoundWinAmount] = useState(null);
  const { stake } = useSelector((state) => state.global);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
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
        <div className="container--efd24">
          <div
            className="gameUnderlay--be9f5"
            data-role="container"
            style={{ background: "rgb(21, 21, 21)", opacity: 1 }}
          />
          {/* Timer */}
          <div className="safeContainer--71c25 isAndroid--e3c3c hasExtraRoundedCorners--a605d">
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
                  <div className="wrapper--8b249"></div>
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
            <div style={{ width: "100%", height: "100%", margin: "auto" }}>
              <div
                data-role="scaled-video-container"
                className="videoWrapper--0aab6"
                style={{
                  width: "100%",
                  height: "195px",
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
                                'url("blob:https://babylonbetst.evo-games.com/60aae0ad-69f0-4eb4-ab61-4f013917d195")',
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
              className="gradientWrapper--3d7b6"
              style={{ height: "314px", transform: "translateY(145px)" }}
            >
              <div
                className="videoGradient--10404"
                style={{
                  background:
                    "linear-gradient(rgba(19, 5, 5, 0) 0%,rgb(19, 5, 5) 25%,rgba(21, 21, 21, 0) 100%)",
                }}
              />
            </div>
            {/* Winner */}
            <Winner
              data={data}
              firstEvent={firstEvent}
              currentRoundWinAmount={currentRoundWinAmount}
            />

            <div
              className="winnersListPortraitPhone--57744 winnersListGradient--6fa71"
              data-role="video-winners-list"
              style={{
                top: "calc(var(--root-size, 10px) * 2)",
                height: "317px",
              }}
            >
              <div
                className="smoothPositioningLayer--a0161"
                data-role="video-winners-list-positioning-layer"
                style={{ transform: "translateY(317px)" }}
              >
                <div
                  className="container--249b3 fadeOut--105fe"
                  data-role="winners-list-container"
                >
                  <div
                    className="winnersList--d6707 sm--8c185 winnersListLeft--f2595"
                    data-role="winners-list"
                    style={{
                      transition: "transform 16.5s linear",
                      transform: "translate3d(0px, -330px, 0px)",
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
            <div className="backdrop--251c9 isPortrait--0f397" />
            <div className="bottomBackdrop--defc4 bottomBackdropV2--766c3 isPortrait--0f397" />
            <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
              <div className="relativeChildren--99d54">
                <div className="overlay--e3c59">
                  <div
                    className="gameControlsWrapper--9fbf7"
                    data-role="gameControlsWrapper"
                    //  top: "280px",
                    style={{
                      top: "280px",
                      bottom: "auto",
                      transform:
                        firstEvent?.status === Status.SUSPENDED
                          ? "translateY(25px)"
                          : "translateY(0px)",
                    }}
                  >
                    <div
                      className="gameControls--ab9e4 goldenWealth--60b45"
                      data-role="expand-betting-grid"
                      data-expanded="true"
                    >
                      <div>
                        <div>
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
                          />

                          <div className="dealNow--971b0 portrait--55ead hidden--c5c76">
                            <div className="buttonWrapper--86a37 mobile--2fe7c">
                              <button
                                type="button"
                                className="button--8e600 mobile--2fe7c"
                                data-role="play-now-button"
                              >
                                <svg
                                  className="buttonSVG--c2730 shouldAnimateFill--5e1e6"
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 204 60"
                                  preserveAspectRatio="xMaxYMid meet"
                                >
                                  <defs>
                                    <linearGradient id="actionNowGradient-200504">
                                      <stop stopColor="#A1701B" offset="0%" />
                                      <stop stopColor="#fff" offset="50%" />
                                      <stop stopColor="#A1701B" offset="100%" />
                                    </linearGradient>
                                    <linearGradient
                                      id="actionNowBGGradient-200504"
                                      x1="0%"
                                      y1="0%"
                                      x2="0%"
                                      y2="100%"
                                    >
                                      <stop offset="0%" stopColor="#1a1a1a" />
                                      <stop offset="100%" stopColor="#333333" />
                                    </linearGradient>
                                    <filter id="glowBlur-200504">
                                      <feGaussianBlur
                                        in="SourceGraphic"
                                        stdDeviation={4}
                                      />
                                    </filter>
                                    <filter id="lightStripeBlur-200504">
                                      <feGaussianBlur
                                        in="SourceGraphic"
                                        stdDeviation={6}
                                      />
                                    </filter>
                                  </defs>
                                  <rect
                                    rx={27}
                                    ry={27}
                                    width={198}
                                    height={54}
                                    x={3}
                                    y={3}
                                    stroke="url(#actionNowGradient-200504)"
                                    strokeWidth={3}
                                    fill="url(#actionNowBGGradient-200504)"
                                    data-role="touchendable"
                                  />
                                  <clipPath id="effectsClip-200504">
                                    <rect
                                      rx={26}
                                      ry={26}
                                      width={194}
                                      height={50}
                                      x={5}
                                      y={5}
                                    />
                                  </clipPath>
                                  <rect
                                    className="buttonInnerBorder--11ef2"
                                    rx={26}
                                    ry={26}
                                    width={194}
                                    height={50}
                                    x={5}
                                    y={5}
                                    stroke="#20201C"
                                    strokeWidth={1}
                                  />
                                  <svg
                                    viewBox="0 0 36 36"
                                    width={36}
                                    height={36}
                                    x={13}
                                    y={12}
                                  >
                                    <g
                                      className="iconActionContainer--805aa"
                                      fill="#FFFFFF"
                                    >
                                      <path
                                        className="icon--640c1"
                                        d="M20.392 2.355l-1.082-.214v-1.07h-8.55a1.167 1.167 0 0 0-.19 0H3.082v23.55H4.38l-.216 1.071H3.082c-.598 0-1.082-.48-1.082-1.07V1.07C2 .479 2.484 0 3.082 0H19.31c.597 0 1.082.48 1.082 1.07v1.285zm-9.123-.848l15.874 3.339c.584.123.957.691.833 1.27l-4.948 23.036a1.082 1.082 0 0 1-1.284.824L5.871 26.638a1.07 1.07 0 0 1-.833-1.27L9.986 2.332a1.082 1.082 0 0 1 1.283-.825zm-.224 1.047L6.096 25.591l15.873 3.338 4.949-23.036-15.873-3.339zm-5.258 6.01c.435.416 1.524 1.074 1.617 1.923.101.928-1.182 1.088-1.516.486.022.43.254.803.254.803h-.71s.231-.365.253-.795c-.334.602-1.617.434-1.516-.494.093-.849 1.182-1.507 1.618-1.923zM17.182 12.6c.565.829 2.108 2.274 1.963 3.69-.16 1.547-2.308 1.368-2.641.272-.115.708.132 1.396.132 1.396l-1.158-.244s.506-.515.692-1.208c-.755.867-2.788.152-2.298-1.325.449-1.352 2.453-2.051 3.31-2.58zM7.409 2.698H7.02l.005 3.316s.024 1.478-1.386 1.48c-1.55 0-1.475-1.476-1.475-1.476V5.84l.779.004v.177s.034.774.682.773c.632 0 .623-.795.623-.795l-.005-3.3h-.39v-.556l1.555-.002.001.557zm11.882 19.649l-.317-.067.112-.523 1.216.258-.111.52-.318-.066-.021.871 1.06.223.337-.805-.318-.066.113-.524 1.216.258-.11.522-.32-.067-1.91 4.523-.741-.158.112-4.9zm1.4 1.717l-.846-.178-.074 2.404.92-2.226zM11.184 8.603l1.911-4.522.742.155-.113 4.9.32.068-.115.521-1.217-.254.112-.523.318.066.023-.87-1.06-.223-.339.804.318.067-.112.52-1.218-.253.113-.523.317.067zm1.986-1.005l.074-2.404-.92 2.226.846.178z"
                                      />
                                    </g>
                                  </svg>
                                  <svg width={135} height={50} x={49} y={5}>
                                    <rect
                                      width="100%"
                                      height="100%"
                                      fill="none"
                                    />
                                    <text
                                      className
                                      textAnchor="middle"
                                      fontFamily="Inter, Arial, sans-serif"
                                      fontSize={20}
                                      fontWeight={500}
                                      fill="#FFFFFF"
                                      y="50%"
                                      x="50%"
                                      dominantBaseline="central"
                                    >
                                      DEAL NOW
                                    </text>
                                  </svg>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                {/* <div className="buttonContainer--8c7a9 isLeft--03674">
                  <button
                    className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonRoot--3bd4d"
                    data-type="secondary"
                    data-role="button"
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
                                className="icon--8f42b"
                                fill="none"
                                viewBox="0 0 24 24"
                                height="100%"
                                y="0%"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  fill="currentColor"
                                  d="M12.0042 6.35163C10.8048 6.35163 9.63338 5.98849 8.64424 5.31C7.25248 5.35955 5.93717 5.95901 4.98674 6.97692C4.03631 7.99483 3.52835 9.34811 3.57424 10.74C3.56892 12.128 4.11453 13.4614 5.09131 14.4476C6.06809 15.4337 7.39624 15.9921 8.78424 16H15.2242C16.6114 15.9894 17.938 15.4303 18.9142 14.4447C19.8905 13.4591 20.4369 12.1272 20.4342 10.74C20.4801 9.34811 19.9722 7.99483 19.0217 6.97692C18.0713 5.95901 16.756 5.35955 15.3642 5.31C14.3751 5.98849 13.2037 6.35163 12.0042 6.35163ZM15.5742 17.31H8.43424V17.33C7.57978 17.3209 6.73551 17.1433 5.94973 16.8076C5.16395 16.4718 4.45209 15.9844 3.85487 15.3733C3.25765 14.7621 2.78679 14.0392 2.46924 13.2459C2.15169 12.4526 1.99368 11.6044 2.00424 10.75C1.94204 9.02551 2.56601 7.34668 3.73942 6.08143C4.91282 4.81618 6.53995 4.06769 8.26424 4H8.44424V4.48C9.49614 5.18892 10.7358 5.56764 12.0042 5.56764C13.2727 5.56764 14.5123 5.18892 15.5642 4.48V4H15.7442C17.4685 4.07286 19.0941 4.8243 20.2667 6.09056C21.4393 7.35681 22.0638 9.03523 22.0042 10.76C22.0176 12.4805 21.3482 14.1361 20.1429 15.3639C18.9376 16.5917 17.2947 17.2915 15.5742 17.31ZM19.944 16.9077C18.7586 18.019 17.199 18.6444 15.5742 18.66H8.43424C6.80292 18.6566 5.2333 18.0361 4.04059 16.9231C2.84788 15.8102 2.1204 14.2872 2.00424 12.66V13.42C1.98556 15.1449 2.65223 16.8067 3.85783 18.0404C5.06343 19.2741 6.70939 19.9789 8.43424 20H15.5742C17.2956 19.971 18.9354 19.2614 20.1348 18.0264C21.3343 16.7913 21.9956 15.1315 21.9742 13.41V12.66C21.854 14.2804 21.1293 15.7964 19.944 16.9077Z"
                                />
                              </svg>
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div className="badge--81159" />
                    </span>
                  </button>
                </div> */}
              </div>
            </div>
            <div
              style={{
                pointerEvents: "none",
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            >
              <div
                className="container--092a4"
                data-role="game-3D-canvas-container"
                style={{ zIndex: 0 }}
              >
                <canvas
                  key="game-3D-canvas"
                  data-role="game-3D-canvas"
                  className="canvas--bf275"
                  style={{
                    width: "430px",
                    height: "932px",
                    backgroundColor: "transparent",
                  }}
                  width={860}
                  height={1864}
                />
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
            title="Lucky 7"
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
            className="flyingBodies--27a9a"
            data-bodies="fee"
            data-no-flying-bodies="true"
          >
            <div className="flyingBody--6d663">
              <div className="feeWrapper--1cfaa">
                <div className="fee--850e1">
                  <span
                    className="textContainer--1a1ac"
                    style={{ justifyContent: "center" }}
                  >
                    <span className="text--68a0b placeholder--6cec6">
                      ₹ 1.00
                    </span>
                    <span
                      className="text--68a0b base--b286e"
                      data-role="multiplierBase"
                    >
                      ₹ 1.00
                    </span>
                    <span className="text--68a0b shadow--551ae">₹ 1.00</span>
                    <span className="text--68a0b textBackground--cded2 lightning--2aac5">
                      ₹ 1.00
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="cardsPositions--0232f">
            <span style={{ left: "173.72px", top: "239.94px" }} />
            <span style={{ left: "190.92px", top: "239.94px" }} />
            <span style={{ left: "156.52px", top: "240.714px" }} />
            <span style={{ left: "239.08px", top: "239.94px" }} />
            <span style={{ left: "256.28px", top: "239.94px" }} />
            <span style={{ left: "276.92px", top: "240.714px" }} />
          </div>
          <div
            className="pot--e01f2"
            style={{ left: "212.248px", top: "256.581px" }}
          />
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

export default LuckySeven;
