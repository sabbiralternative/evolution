import { useEffect, useState } from "react";
import { useSound } from "../../../../context/ApiProvider";
import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../../../redux/features/events/events";
import { useSelector } from "react-redux";
import { Status } from "../../../../const";
import AntMedia from "../../../../component/shared/Antmedia/Antmedia";
import ChipContainer from "../../../../component/shared/desktop/CommonUIElement/ChipContainer";
import { handleDoubleStake } from "../../../../utils/handleDoubleStake";
import { handleUndoStake } from "../../../../utils/handleUndoStake";
import CommonUIElement from "../../../../component/shared/desktop/CommonUIElement/CommonUIElement";
import BetSlip from "../../../Games/CenterCard/BetSlip";
import Timer from "../../../../component/shared/desktop/Timer/Timer";
import History from "./History";
import Card from "../../../Games/CenterCard/Card";

const CenterCard = () => {
  const { sound } = useSound();
  const [double, setDouble] = useState(false);
  const [animation, setAnimation] = useState([]);
  const [showWinLossResult, setShowWinLossResult] = useState(false);
  const [totalWinAmount, setTotalWinAmount] = useState(null);
  const [, setCurrentRoundWinAmount] = useState(null);
  const { stake } = useSelector((state) => state.global);
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    { pollingInterval: 1000 }
  );

  const firstEvent = data?.result?.[0];

  const initialState = {
    centerYes: { show: false, stake },
    centerNo: { show: false, stake },
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
    <div id="root" className="rootContainer--308ad">
      <div className="app--788ab" data-role="current-view-classic">
        <div className="container--55875">
          <div className="background--e597d narrow--71f90" />
          <div data-scale-content="true" className="content--6d02a">
            <div
              className="topCenterSeparate--dca79 skipTransition--4efda"
              data-role="unmountable-video-first-level"
            >
              <div
                className="box--26455"
                data-role="unmountable-video-second-level"
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
                              <AntMedia
                                server={firstEvent?.server}
                                height="100%"
                              />
                            )}
                            {/* <video
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
                              src="blob:https://babylonbetst.evo-games.com/8bcb137d-d0b7-4c2a-a7c3-98e117d7ee6e"
                            />
                            <canvas
                              width={0}
                              height={0}
                              style={{ display: "none", objectFit: "contain" }}
                            /> */}
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
                                'url("blob:https://babylonbetst.evo-games.com/b0bfdcc0-019b-482d-9efa-2aa169b8fb22")',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="videoOverlay--6684f"
                  data-role="unmountable-video-video-overlay"
                >
                  <div className="videoOverlayContainer--2e7ac">
                    <div className="gameOverlayContainer--4b87a">
                      <div className="mobileGameOverlay--a7837" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-role="layout-classic">
              <div data-role="smallView" className="wrapper--2cd01">
                <div
                  className="gradientColor--434d8"
                  data-role="classic-view-background"
                >
                  <svg
                    viewBox="0 0 1920 1080"
                    xmlns="http://www.w3.org/2000/svg"
                    className="backgroundColor--88a9b"
                  >
                    <defs>
                      <radialGradient fx="50%" fy="50%" r="47.9%" id="a">
                        <stop stopColor="#380000" offset="0%" />
                        <stop
                          stopColor="#380000"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </radialGradient>
                      <radialGradient fx="50%" fy="50%" r="49.3%" id="b">
                        <stop stopColor="#380000" offset="0%" />
                        <stop
                          stopColor="#380000"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </radialGradient>
                    </defs>
                    <g>
                      <circle
                        fill="url(#a)"
                        opacity=".7"
                        cx={1676}
                        cy={1080}
                        r={1000}
                      />
                      <circle fill="url(#a)" opacity=".7" cx={475} r={1000} />
                      <circle
                        fill="url(#b)"
                        opacity=".7"
                        cx={-55}
                        cy={790}
                        r={700}
                      />
                      <circle
                        fill="url(#b)"
                        opacity=".7"
                        cx={1235}
                        cy={232}
                        r={700}
                      />
                    </g>
                  </svg>
                </div>
                <div className="transitionGradient--4fc7d">
                  <svg
                    viewBox="0 0 1920 1080"
                    xmlns="http://www.w3.org/2000/svg"
                    className="backgroundColor--88a9b"
                  >
                    <defs>
                      <radialGradient fx="50%" fy="50%" r="47.9%" id="c">
                        <stop stopColor="#003688" offset="0%" />
                        <stop
                          stopColor="#003688"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </radialGradient>
                      <radialGradient fx="50%" fy="50%" r="49.3%" id="d">
                        <stop stopColor="#003688" offset="0%" />
                        <stop
                          stopColor="#003688"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </radialGradient>
                    </defs>
                    <g>
                      <circle
                        fill="url(#c)"
                        opacity=".7"
                        cx={1676}
                        cy={1080}
                        r={1000}
                      />
                      <circle fill="url(#c)" opacity=".7" cx={475} r={1000} />
                      <circle
                        fill="url(#d)"
                        opacity=".7"
                        cx={-55}
                        cy={790}
                        r={700}
                      />
                      <circle
                        fill="url(#d)"
                        opacity=".7"
                        cx={1235}
                        cy={232}
                        r={700}
                      />
                    </g>
                  </svg>
                </div>
                <div className="container--fb02b md--a0ef3">
                  <div
                    className="center--9b96d md--a0ef3"
                    data-role="toast-drawer-wrapper"
                  >
                    <div
                      className="drawer--e8e4c hidden--d3be2"
                      data-role="toast-drawer"
                    />
                  </div>
                </div>
                <div
                  className="gradient--e96cd commonUiElement"
                  data-role="top-corner-gradient"
                />
                <div className="fullScreenGameOverlay--e2de7">
                  <div className="box--28913" />
                </div>
                <div className="top-container--67c84">
                  <History recentWinner={firstEvent?.recent_winner} />
                </div>
                <div className="bottom-container--11469">
                  <Timer firstEvent={firstEvent} />
                  {firstEvent?.status === Status.OPEN && (
                    <ChipContainer
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
                </div>
              </div>
            </div>
            <div data-role="bubble-container" />
            <div className="cardsPositions--0232f">
              <span style={{ left: "555.581px", top: "209.97px" }} />
              <span style={{ left: "566.794px", top: "209.97px" }} />
              <span style={{ left: "544.368px", top: "210.478px" }} />
              <span style={{ left: "598.19px", top: "209.97px" }} />
              <span style={{ left: "609.403px", top: "209.97px" }} />
              <span style={{ left: "622.859px", top: "210.478px" }} />
            </div>
            <div
              className="pot--e01f2"
              style={{ left: "580.698px", top: "220.896px" }}
            />
            <div
              className="gameOverlay--ad8aa"
              style={{
                transform:
                  firstEvent?.status === Status.SUSPENDED
                    ? "translateY(25px)"
                    : "translateY(0px)",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <div className="classicOverlay--fde0a">
                <div
                  className="bettingGrid--190e8"
                  style={{
                    transform: "scale(1)",
                    transformOrigin: "center",
                    pointerEvents: "auto",
                  }}
                >
                  <Card cards={firstEvent?.indexCard} />
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
            <CommonUIElement
              data={data}
              setCurrentRoundWinAmount={setCurrentRoundWinAmount}
              setShowWinLossResult={setShowWinLossResult}
              setTotalWinAmount={setTotalWinAmount}
              showWinLossResult={showWinLossResult}
              totalWinAmount={totalWinAmount}
            />
            <div className="tooltipsContainer--515fb" />
            <div
              className="onboardingBubbleContainer--d208c desktop--86dc8"
              data-role="onboarding-bubble-container"
            />
            <div
              className="desktopDrawerContainer--f0216"
              data-role="desktop-drawer-container"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterCard;
