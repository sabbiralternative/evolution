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
import RecentResult from "./RecentResult";
import AntMedia from "../../../component/shared/Antmedia";
import { useSound } from "../../../context/ApiProvider";
import { playClick } from "../../../utils/sound";

const LightningDice = () => {
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
    (item) => item?.selection_id && item?.show === false
  );

  const isPlaceStake = Object.values(stakeState).find((item) => item?.show);

  useEffect(() => {
    if (firstEvent?.status === Status.OPEN) {
      setCurrentRoundWinAmount(null);
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
            data-role="branded-gradient"
            className="gradient--5a4aa"
            style={{
              background: `linear-gradient(
                45deg,
                rgba(10, 0, 0, 0) 0%,
                rgba(10, 0, 0, 0.8) 50%,
                rgba(10, 0, 0, 0) 100%
              ),
              linear-gradient(
                45deg,
                rgb(52, 20, 9) -5%,
                rgb(10, 0, 0) 50%,
                rgb(52, 20, 9) 105%
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
                  style={{ top: "calc(var(--root-size, 10px) * 3)" }}
                >
                  <div className="wrapper--8b249">
                    {firstEvent?.status === Status.OPEN && (
                      <Counter firstEvent={firstEvent} />
                    )}
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
            <div style={{ width: "100%", height: "362.812px", margin: "auto" }}>
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
                                'url("blob:https://babylonbetst.evo-games.com/6836bf41-cb00-43a5-ac27-4b3f334104f2")',
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
              data-role="video-gradient"
              className="videoGradient--b34bf animated--8f2af"
              style={{
                "-positiony": "362.8125px",
                "-gradientcolor": "10, 0, 0",
              }}
            />
            <div
              className="winnersListPortraitPhone--57744 winnersListGradient--6fa71"
              data-role="video-winners-list"
              style={{
                top: "calc(var(--root-size, 10px) * 2)",
                height: "293px",
              }}
            >
              <div
                className="smoothPositioningLayer--a0161"
                data-role="video-winners-list-positioning-layer"
                style={{ transform: "translateY(293px)" }}
              >
                <div
                  className="container--249b3 fadeOut--105fe"
                  data-role="winners-list-container"
                >
                  <div
                    className="winnersList--d6707 sm--8c185 winnersListLeft--f2595"
                    data-role="winners-list"
                    style={{
                      transition: "transform 15.3s linear",
                      transform: "translate3d(0px, -306px, 0px)",
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
            <RecentResult />
            <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
              <div className="relativeChildren--99d54">
                <div
                  className="GameOverlayContainer--686cd"
                  data-role="game-overlay-container"
                >
                  <div className="recentResultContainer--d92ff" />
                  <div data-role="grid-area" className="gridArea--fe238">
                    <div className="VerticalGrid--1af56">
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
                    </div>
                  </div>
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
            title="1Day Teenpatti"
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
      </div>
    </>
  );
};

export default LightningDice;
