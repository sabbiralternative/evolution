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
// import Counter from "../../../component/UI/Counter";
// import Winner from "./Winner";
import RecentNumberContainer from "./RecentNumberContainer";
import { keysArray } from "./const";
import AntMedia from "../../../component/shared/Antmedia";

const Roullete = () => {
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
    { eventTypeId, eventId },
    { pollingInterval: 1000 }
  );

  const firstEvent = data?.result?.[0];

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
        <div
          className="layoutContainer--2535f"
          data-role="current-view-immersive"
        >
          <div className="container--efd24">
            <div
              data-role="branded-gradient"
              className="gradient--5a4aa"
              style={{
                background:
                  "linear-gradient(45deg,rgba(30, 0, 30, 0) 0%,rgba(30, 0, 30, 0.8) 50%,rgba(30, 0, 30, 0) 100%),linear-gradient(45deg,rgb(60, 65, 80) -5%,rgb(30, 0, 30) 50%,rgb(60, 65, 80) 105%)",
              }}
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
                data-role="order-container"
                className="orderContainer--3a569"
                style={{ height: "210.875px" }}
              >
                <div className="videoWrapper--7279b">
                  <div id="video-wrapper" className="videoWrapper--514d0">
                    <div
                      className="transformWrapper--37164"
                      style={{
                        transition: "transform 7000ms",
                        transform: "scale(1) translate(0%, 0%)",
                        visibility: "visible",
                      }}
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
                          animationDelay: "250ms",
                        }}
                      >
                        <div
                          style={{
                            transform: "scale(1) translate(0%, 0%)",
                            height: "100%",
                            textAlign: "center",
                          }}
                        >
                          <img className="image--8ded7" alt="videoImg" src />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container--8c2d0 hidden--0d2df" />
                  <div className="mobilePortraitVideoGradient--3c3e1">
                    <div className="transitionableGradientInner--7cb1a">
                      <div
                        className="individualGradient--21a15"
                        style={{
                          transitionDuration: "0ms",
                          backgroundImage: `linear-gradient(rgba(30, 0, 30, 0) 0%,rgba(30, 0, 30, 0.004) 0.4%,rgba(30, 0, 30, 0.016) 1.2%,rgba(30, 0, 30, 0.03) 2.4%,
                          rgba(30, 0, 30, 0.063) 3.95%,
                          rgba(30, 0, 30, 0.098) 5.9%,
                          rgba(30, 0, 30, 0.145) 8.25%,
                          rgba(30, 0, 30, 0.204) 11.05%,
                          rgba(30, 0, 30, 0.27) 14.25%,
                          rgba(30, 0, 30, 0.345) 17.85%,
                          rgba(30, 0, 30, 0.427) 21.85%,
                          rgba(30, 0, 30, 0.514) 26.15%,
                          rgba(30, 0, 30, 0.608) 30.7%,
                          rgba(30, 0, 30, 0.7) 35.4%,
                          rgba(30, 0, 30, 0.796) 40.25%,
                          rgba(30, 0, 30, 0.894) 45.15%,
                          rgb(30, 0, 30) 50%,
                          rgba(30, 0, 30, 0.894) 54.85%,
                          rgba(30, 0, 30, 0.796) 59.75%,
                          rgba(30, 0, 30, 0.7) 64.6%,
                          rgba(30, 0, 30, 0.608) 69.3%,
                          rgba(30, 0, 30, 0.514) 73.85%,
                          rgba(30, 0, 30, 0.427) 78.15%,
                          rgba(30, 0, 30, 0.345) 82.15%,
                          rgba(30, 0, 30, 0.27) 85.75%,
                          rgba(30, 0, 30, 0.204) 88.95%,
                          rgba(30, 0, 30, 0.145) 91.75%,
                          rgba(30, 0, 30, 0.098) 94.1%,
                          rgba(30, 0, 30, 0.063) 96.05%,
                          rgba(30, 0, 30, 0.03) 97.6%,
                          rgba(30, 0, 30, 0.016) 98.8%,
                          rgba(30, 0, 30, 0.004) 99.6%,
                          rgba(30, 0, 30, 0) 100%
                        )`,
                        }}
                      />
                      <div
                        className="individualGradient--21a15 isVisible--99075"
                        style={{
                          backgroundImage: `linear-gradient(
                          rgba(30, 0, 30, 0) 0%,
                          rgba(30, 0, 30, 0.004) 0.4%,
                          rgba(30, 0, 30, 0.016) 1.2%,
                          rgba(30, 0, 30, 0.03) 2.4%,
                          rgba(30, 0, 30, 0.063) 3.95%,
                          rgba(30, 0, 30, 0.098) 5.9%,
                          rgba(30, 0, 30, 0.145) 8.25%,
                          rgba(30, 0, 30, 0.204) 11.05%,
                          rgba(30, 0, 30, 0.27) 14.25%,
                          rgba(30, 0, 30, 0.345) 17.85%,
                          rgba(30, 0, 30, 0.427) 21.85%,
                          rgba(30, 0, 30, 0.514) 26.15%,
                          rgba(30, 0, 30, 0.608) 30.7%,
                          rgba(30, 0, 30, 0.7) 35.4%,
                          rgba(30, 0, 30, 0.796) 40.25%,
                          rgba(30, 0, 30, 0.894) 45.15%,
                          rgb(30, 0, 30) 50%,
                          rgba(30, 0, 30, 0.894) 54.85%,
                          rgba(30, 0, 30, 0.796) 59.75%,
                          rgba(30, 0, 30, 0.7) 64.6%,
                          rgba(30, 0, 30, 0.608) 69.3%,
                          rgba(30, 0, 30, 0.514) 73.85%,
                          rgba(30, 0, 30, 0.427) 78.15%,
                          rgba(30, 0, 30, 0.345) 82.15%,
                          rgba(30, 0, 30, 0.27) 85.75%,
                          rgba(30, 0, 30, 0.204) 88.95%,
                          rgba(30, 0, 30, 0.145) 91.75%,
                          rgba(30, 0, 30, 0.098) 94.1%,
                          rgba(30, 0, 30, 0.063) 96.05%,
                          rgba(30, 0, 30, 0.03) 97.6%,
                          rgba(30, 0, 30, 0.016) 98.8%,
                          rgba(30, 0, 30, 0.004) 99.6%,
                          rgba(30, 0, 30, 0) 100%
                        )`,
                          transitionDuration: "0ms",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="result--87104 phoneImmersive--ba95d portrait--62f3c"
                  data-role="game-result"
                />
              </div>
            </div>
            <div
              className="gameOverlay--aabc7"
              style={{ pointerEvents: "auto" }}
              data-role="game-overlay-container"
            >
              <div className="mobileUI--a72b4">
                <RecentNumberContainer />
                <div
                  className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d"
                  style={{ pointerEvents: "auto" }}
                >
                  <div className="relativeChildren--99d54">
                    <div
                      className="gameOverlayContainer--18636 portrait--3950b"
                      style={{
                        "-portraitwidthwithoutfooter": "370px",
                        "-portraitrowbetswidth": "116px",
                        "-top": "28px",
                        "-bottom": "0px",
                        "-left": "0px",
                        "-portraitzerosubtractionheight": "57px",
                        "-portraitimmersivelayoutwheelnumbercontainermargintop":
                          "0px",
                        "-gridwidth": "370px",
                        "-gridheight": "814px",
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
                      <div
                        className="footerContainer--2115a"
                        style={{ display: "none" }}
                      >
                        <div
                          className="footerWrap--1452a"
                          data-role="footer-wrap"
                        >
                          <footer className="footer--c01cb hasNotch--c8db9">
                            <div
                              className="footerGroup--754b6 groupLeft--344df"
                              data-role="group-left"
                            >
                              <div className="footerItem--499aa">
                                <div style={{ position: "relative" }}>
                                  <button
                                    className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonRoot--3bd4d"
                                    data-type="secondary"
                                    data-role="favorite-bets-button"
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
                                          padding: `calc(
                                          var(--rem-migration-size, 10px) * 0.1
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
                                                data-role="star-icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="icon--8dcd0"
                                                height="100%"
                                                y="0%"
                                              >
                                                <path d="M11.99 17.75 18.16 21l-1.17-6.87 4.99-4.87-6.9-1.01L11.99 2 8.9 8.25 2 9.26l5 4.87L5.82 21l6.17-3.25Z" />
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
                              <div className="footerItem--499aa">
                                <button
                                  className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonRoot--3bd4d"
                                  data-type="secondary"
                                  data-role="statistics-button"
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
                                        padding: `calc(
                                        var(--rem-migration-size, 10px) * 0.1
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
                                              height="100%"
                                              y="0%"
                                            >
                                              <path d="M17 20V4h2v16h-2ZM13 6v14h2V6h-2ZM5 20V8h2v12H5Zm4 0V10h2v10H9Z" />
                                            </svg>
                                          </svg>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="badge--81159" />
                                  </span>
                                </button>
                              </div>
                              <div className="footerItem--499aa">
                                <div className="buttonContainer--4b787 active--bc64d">
                                  <button
                                    className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonRoot--3bd4d"
                                    data-type="secondary"
                                    data-role="minimize-grid-button"
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
                                          padding: `calc(
                                          var(--rem-migration-size, 10px) * 0.1
                                        )`,
                                        }}
                                      />
                                      <div className="iconLabelWrapper--8e144 left--60884">
                                        <span className="icon--54b42">
                                          <span
                                            className="iconWrapper--9127d"
                                            data-role="icon-wrapper"
                                          >
                                            <div className="iconWrapper--82ba4">
                                              <img
                                                src="data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.99%208.947l8.218-8.64%201.449%201.38-9.67%2010.164L.344%201.684%201.794.308z%22%20fill%3D%22%23D5D3D0%22%20%2F%3E%3C%2Fsvg%3E%0A"
                                                alt=""
                                                className="icon--44d05"
                                              />
                                            </div>{" "}
                                          </span>
                                        </span>
                                      </div>
                                      <div className="badge--81159" />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div
                              className="footerGroup--754b6"
                              data-role="group-chipstack"
                            />
                            <div className="footerGroup--754b6 groupRight--30b28">
                              <div className="footerItem--499aa autoplayButton--fc7df">
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
                                          padding: `calc(
                                          var(--rem-migration-size, 10px) * 0.1
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
                              <div className="footerItem--499aa">
                                <button
                                  className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonRoot--3bd4d"
                                  data-type="secondary"
                                  data-role="racetrack-button"
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
                                        padding: `calc(
                                        var(--rem-migration-size, 10px) * 0.1
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
                                              viewBox="0 0 30 30"
                                              className="icon--8dcd0"
                                              height="100%"
                                              y="0%"
                                            >
                                              <path d="M8 8h6v2H8V8zm8 0h6v2h-6V8zm8 .07A7.005 7.005 0 0 1 29.93 14H27.9a5.006 5.006 0 0 0-3.9-3.9V8.07zM29.93 16A7.005 7.005 0 0 1 24 21.93V19.9a5.006 5.006 0 0 0 3.9-3.9h2.03zM22 22h-6v-2h6v2zm-8 0H8v-2h6v2zm-8-.07A7.005 7.005 0 0 1 .07 16H2.1A5.006 5.006 0 0 0 6 19.9v2.03zM.07 14A7.005 7.005 0 0 1 6 8.07v2.03A5.006 5.006 0 0 0 2.1 14H.07z" />
                                            </svg>
                                          </svg>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="badge--81159" />
                                  </span>
                                </button>
                              </div>
                              <div className="footerItem--499aa spacer--07058" />
                            </div>
                          </footer>
                        </div>
                      </div>
                    </div>
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
                    firstEvent
                  )
                }
                handleUndoStake={() =>
                  handleUndoStake(setStakeState, stakeState)
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
              title="Roullete"
              setCurrentRoundWinAmount={setCurrentRoundWinAmount}
            />

            {/* <div className="tooltipsContainer--515fb increasedZIndex--60d95" />
            <div
              data-role="overlay-container"
              className="chatOverlayPortal--fd539"
            />
            <div
              className="onboardingBubbleContainer--d208c"
              data-role="onboarding-bubble-container"
            /> */}
          </div>
          {/* <svg style={{ position: "absolute", visibility: "hidden" }}>
            <defs>
              <radialGradient id="svg-radial-red">
                <stop offset="5%" stopColor="#DC3A19" />
                <stop offset="95%" stopColor="#B31C24" />
              </radialGradient>
              <radialGradient id="svg-radial-red-highlighted">
                <stop offset="5%" stopColor="#ED9B8B" />
                <stop offset="95%" stopColor="#D98D91" />
              </radialGradient>
            </defs>
          </svg> */}
        </div>
      </div>
    </>
  );
};

export default Roullete;
