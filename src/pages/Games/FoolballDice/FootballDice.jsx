import { useEffect, useState } from "react";
import ActionButtons from "./ActionButtons";
import BetSlip from "./BetSlip";
import Footer from "../../../component/shared/GameFooter/GameFooter";
import Menu from "../../../component/modals/mobile/Menu/Menu";
import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import { Status } from "../../../const";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { handleDoubleStake } from "../../../utils/handleDoubleStake";
import { handleUndoStake } from "../../../utils/handleUndoStake";
import Counter from "../../../component/UI/Counter";
import History from "./History";
import AntMedia from "../../../component/shared/Antmedia/Antmedia";
import { useSound } from "../../../context/ApiProvider";
import { playClick } from "../../../utils/sound";

const FootballDice = () => {
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
                rgba(13, 20, 34, 0) 0%,
                rgba(13, 20, 34, 0.8) 50%,
                rgba(13, 20, 34, 0) 100%
              ),
              linear-gradient(
                45deg,
                rgb(73, 22, 22) -5%,
                rgb(13, 20, 34) 50%,
                rgb(73, 22, 22) 105%
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
            <div style={{ width: "100%", height: "483.75px", margin: "auto" }}>
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
                                'url("blob:https://babylonbetst.evo-games.com/03be19c5-43ef-451d-b36b-1552a38d5ef8")',
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
              className="gradient--1c37c mobileI11Portrait--10a8a"
              style={{
                "--light-color": "73, 22, 22",
                "--dark-color": "13, 20, 34",
                "--top": "483.75px",
                "--video-portrait-overlap": "30px",
              }}
            />
            <div
              className="gradientWrapper--45736"
              style={{
                top: "120px",
                height: "200px",
                transform: "translateY(48.375px) translateZ(0px)",
              }}
            >
              <div
                className="videoGradient--0cc0b"
                style={{
                  background: `linear-gradient(
                  rgba(83, 10, 10, 0) 0%,
                  rgb(13, 35, 83) 20%,
                  rgba(13, 35, 83, 0) 100%
                )`,
                }}
              />
            </div>
            <div className="overlays--4cd0a">
              <div
                className="gameResultWrapper--06154 phone--4e26e portrait--fa69a"
                style={{}}
              />
            </div>
          </div>
          <div
            style={{
              transform:
                firstEvent?.status === Status.SUSPENDED
                  ? "translateY(25px)"
                  : "translateY(0px)",
              transition: "transform 0.5s ease-in-out",
            }}
            className="gameOverlay--aabc7"
            data-role="game-overlay-container"
          >
            <History />
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
            <div className="flyingChips--468b5" />
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
            title={firstEvent?.eventName}
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

export default FootballDice;
