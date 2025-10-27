import { useEffect, useState } from "react";
import ActionButtons from "./ActionButtons";
import BetSlip from "./BetSlip";
import Menu from "../../../component/shared/Menu/Menu";
import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import { Status } from "../../../const";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { handleDoubleStake } from "../../../utils/handleDoubleStake";
import { handleUndoStake } from "../../../utils/handleUndoStake";
import Footer from "../../../component/shared/Footer";
import AntMedia from "../../../component/shared/Antmedia";
import { useSound } from "../../../context/ApiProvider";
import { playClick } from "../../../utils/sound";

const DragonTigerPhoenix = () => {
  const { sound } = useSound();
  const [showMenu, setShowMenu] = useState(false);
  const [double, setDouble] = useState(false);
  const [, setCurrentRoundWinAmount] = useState(null);
  const [animation, setAnimation] = useState([]);
  const [showWinLossResult, setShowWinLossResult] = useState(false);
  const [totalWinAmount, setTotalWinAmount] = useState(null);
  const { stake, deviceWidth } = useSelector((state) => state.global);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const { eventTypeId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId: 10001 },
    { pollingInterval: 1000 }
  );

  const firstEvent = data?.result?.[0];

  const keysArray = [
    "dragonEven",
    "dragonOdd",
    "tigerEven",
    "tigerOdd",
    "dragon",
    "tie",
    "tiger",
    "suitedTie",
    "dragonRed",
    "dragonBlack",
    "tigerRed",
    "tigerBlack",
    "dragonA",
    "dragon2",
    "dragon3",
    "dragon4",
    "tigerA",
    "tiger2",
    "tiger3",
    "tiger4",
  ];

  const initialState = keysArray.reduce((acc, key) => {
    acc[key] = { show: false, stake };
    return acc;
  }, {});

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
          {/* <div
            data-role="branded-gradient"
            className="gradient--5a4aa onlyPortrait--08467"
            style={{
              background: `linear-gradient(
                45deg,
                rgba(70, 43, 24, 0) 0%,
                rgba(70, 43, 24, 0.8) 50%,
                rgba(70, 43, 24, 0) 100%
              ),
              linear-gradient(
                45deg,
                rgb(147, 101, 66) -5%,
                rgb(70, 43, 24) 50%,
                rgb(147, 101, 66) 105%
              )`,
            }}
          /> */}
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
            <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
              <div className="relativeChildren--99d54" />
            </div>
            <div style={{ width: "100%", height: "322.5px", margin: "auto" }}>
              <div
                data-role="scaled-video-container"
                className="videoWrapper--0aab6 noAnimation--5e625"
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
                                'url("blob:https://babylonbetst.evo-games.com/67d66017-d734-4553-b43d-282340b689b3")',
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
              className="videoGradient--29fdc"
              style={{
                top: "210.431px",
                backgroundSize: "758px 621.333px",
                backgroundRepeat: "no-repeat",
                background:
                  "linear-gradient(rgba(19, 5, 5, 0) 0%,rgb(19, 5, 5) 25%,rgba(21, 21, 21, 0) 100%)",
                // transform: "translateY(145px)"
              }}
            />
          </div>
          <div
            className="gameOverlay--aabc7"
            data-role="game-overlay-container"
          >
            <div
              className
              style={{
                "--3c-card1-primary": "255, 26, 26",
                "--3c-card1-secondary": "131, 13, 13",
                "--3c-card1-highlight": "255, 153, 153",
                "--3c-card2-primary": "255, 198, 27",
                "--3c-card2-secondary": "93, 72, 10",
                "--3c-card2-highlight": "255, 229, 153",
                "--3c-card3-primary": "27, 84, 255",
                "--3c-card3-secondary": "15, 46, 138",
                "--3c-card3-highlight": "153, 178, 255",
                "--3c-tie-primary": "21, 146, 84",
                "--3c-tie-secondary": "11, 76, 43",
                "--3c-tie-highlight": "166, 242, 203",
              }}
            >
              <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
                <div className="relativeChildren--99d54">
                  <div
                    className="betPanelWithRoads--efe50 isPortrait--c529f"
                    style={{
                      transform: `scale(${deviceWidth / 440})`,
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
                    {/* <RoadPrediction/> */}
                    <div className="menuButtonSpace--f0aa1" />
                  </div>
                </div>
              </div>
              <div className="flyingChips--62413" />
              <div className="winMessage--3ac50 portrait--2732f">
                <div />
              </div>
              <div className="circleTimer--643df portrait--e0206">
                <div className="wrapper--59090">
                  <div
                    data-role="circle-timer"
                    data-timer-version={2}
                    className="container--fab83 commonUiElement"
                  >
                    <div
                      className="timerCircleContainer--ec8df"
                      data-role="timer-circle"
                    >
                      <canvas
                        style={{
                          display: "block",
                          width: "100px",
                          height: "100px",
                        }}
                        width={300}
                        height={300}
                      />
                    </div>
                    <div
                      className="contentWrapper--cee51"
                      data-role="timer-content"
                    >
                      <canvas
                        style={{
                          display: "block",
                          width: "100px",
                          height: "100px",
                        }}
                        width={300}
                        height={300}
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

export default DragonTigerPhoenix;
