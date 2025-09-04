import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Chat from "./Chat";
import { AnimatePresence, motion } from "motion/react";
import GameHistory from "./GameHistory";
import GameHistoryDetails from "./GameHistoryDetails";
import HowToPlay from "./HowToPlay";
import PayoutLimit from "./PayoutLimit";

const Menu = ({ setShowMenu, showFullScreen, setShowFullScreen }) => {
  const [tab, setTab] = useState("menu");
  const navigate = useNavigate();
  const closeModal = () => {
    setShowMenu(false);
  };

  const handleNavigate = () => {
    navigate("/");
    closeModal();
  };

  const handleToggleFullScreen = () => {
    if (showFullScreen) {
      setShowFullScreen(false);
      document.exitFullscreen();
      setShowMenu(false);
    } else {
      setShowFullScreen(true);
      document.body.requestFullscreen();
      setShowMenu(false);
    }
  };
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.2 }}
      exit={{ y: "100%" }}
      className="root--594e2 root--ac0ae withBorder--a433d"
      data-role="drawer-container"
    >
      <div className="touchEventBlocker--32d6c" />

      <AnimatePresence>
        {tab === "chat" && <Chat closeModal={closeModal} setTab={setTab} />}
      </AnimatePresence>
      <AnimatePresence>
        {tab === "game-history" && (
          <GameHistory closeModal={closeModal} setTab={setTab} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {tab === "game-history-details" && (
          <GameHistoryDetails closeModal={closeModal} setTab={setTab} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {tab === "how-to-play" && (
          <HowToPlay closeModal={closeModal} setTab={setTab} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {tab === "payout-limit" && (
          <PayoutLimit closeModal={closeModal} setTab={setTab} />
        )}
      </AnimatePresence>

      {tab === "menu" && (
        <div
          className="card--9bed2 card--2080f transformPositioning--1125f contentFitRestrictsExpandingMode--4a72a withBorderRadius--f0b89"
          data-role="drawer-card"
          data-test-size="65%"
          style={{
            pointerEvents: "initial",
            transform: "translate3d(0px, calc(100% - 605px), 1px)",
            transitionDuration: "initial",
            transitionTimingFunction: "initial",
          }}
        >
          <div
            className="contentContainer--736bb contentSizeRestrictContainer--9da92"
            data-role="content-restrict-container"
            style={{ maxHeight: "838px" }}
          >
            <div className="handleBarContainer--1d331 handleBarContainer--b1c45">
              <div className="handleBar--d2af5" data-role="swipe-bar">
                <div className="bar--28f5d" />
              </div>
            </div>
            <div className="contentContainer--bced0">
              <div
                className="headerContainer--74784 header--bbb34"
                data-role="header-container"
              >
                <div className="backButtonContainer--3999f" />
                <div className="titleContainer--62dac">
                  <div
                    data-role="title-animation-container"
                    className="animatedTitleContainer--0ef83"
                  >
                    <div
                      className="currentTitle--5f5a4"
                      data-role="title-current"
                    >
                      <div className="titleContainer--ae994">
                        <div className="title--b94ad">
                          <div
                            data-role="title-text"
                            className="titleText--44453"
                          >
                            Menu
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={closeModal}
                  data-role="drawer-close-button"
                  className="container--0ac6d drawerHeaderButton--a3e59"
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
                      <path d="m13.615 11.864 6.116 6.116-1.748 1.747-6.115-6.116-6.12 6.12L4 17.984l6.12-6.12-6.116-6.117L5.75 4l6.117 6.116 6.112-6.112 1.747 1.748-6.112 6.112Z" />
                    </svg>
                  </svg>
                </div>
              </div>
              <div className="content--00be2" data-role="drawer-content">
                <div className="screensView--8d90a" data-role="menu-container">
                  <div className="screens--eb504" data-role="stack-screens">
                    <div
                      className="screen--f0473 screenWithTopMargin--d935a"
                      data-screen-id="menu"
                      data-role="menu-screen-menu"
                      style={{ display: "block" }}
                    >
                      <div
                        className="wrapper--f4eb9"
                        data-role="scrollable-wrapper"
                      >
                        <div
                          data-role="scrollable"
                          className="scrollable--96151 vertical--99fcf hiddenScrollbar--27373"
                          style={{
                            maskImage:
                              "linear-gradient(transparent 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%, transparent 100%), linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%, transparent 100%)",
                          }}
                        >
                          <div className="contentOffsets--4b75a withSideOffsets--16d57">
                            <div className="menuContainer--40934">
                              <div className="menuCards--5b49c">
                                <div
                                  onClick={() => handleNavigate("/")}
                                  className="wrapper--6c1a2"
                                  data-role="menu-item-wrapper"
                                >
                                  <div
                                    data-role="menu-button-lobby"
                                    className="container--0ac6d menuCard--8ece4"
                                    style={{ "-color": "#5affff" }}
                                  >
                                    <div className="icon--15612">
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
                                          data-role="menu-item-icon"
                                        >
                                          <path d="M18.8 11.363c-9.4.48-10.58-2.34-12.8-7.28a8.62 8.62 0 0 1 12.8 7.28Zm-11.64 6c1.49-2.85 4-5.34 11.64-4.75A8.618 8.618 0 0 1 6 19.903c.38-.85.74-1.73 1.16-2.55v.01Z" />
                                        </svg>
                                      </svg>
                                    </div>
                                    <div
                                      className="titleContainer--b5b4f"
                                      data-role="menu-item-title-text-container"
                                    >
                                      <span
                                        className="title--9628c"
                                        data-role="menu-item-title-text"
                                      >
                                        Lobby
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  onClick={() => setTab("chat")}
                                  className="wrapper--6c1a2"
                                  data-role="menu-item-wrapper"
                                >
                                  <div
                                    data-role="menu-button-chat"
                                    className="container--0ac6d menuCard--8ece4"
                                  >
                                    <div className="icon--15612">
                                      <svg
                                        viewBox="0 0 100 100"
                                        className="iconWrapper--b4e49"
                                        style={{ height: "100%" }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          className="icon--8dcd0"
                                          data-role="menu-item-icon"
                                          height="100%"
                                          y="0%"
                                        >
                                          <path d="M5 4h10.5c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H10l-3.99 3v-3H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1Zm12.99 17v-3H19c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1h-1v3.5c0 1.1-.9 2-2 2h-5.5l-3 2.31V17c0 .55.45 1 1 1H14l3.99 3Z" />
                                        </svg>
                                      </svg>
                                    </div>
                                    <div
                                      className="titleContainer--b5b4f"
                                      data-role="menu-item-title-text-container"
                                    >
                                      <span
                                        className="title--9628c"
                                        data-role="menu-item-title-text"
                                      >
                                        Chat
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  onClick={() => setTab("live-support")}
                                  className="wrapper--6c1a2"
                                  data-role="menu-item-wrapper"
                                >
                                  <div
                                    data-role="menu-button-liveSupport"
                                    className="container--0ac6d menuCard--8ece4"
                                  >
                                    <div className="icon--15612">
                                      <svg
                                        viewBox="0 0 100 100"
                                        className="iconWrapper--b4e49"
                                        style={{ height: "100%" }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          className="icon--8dcd0"
                                          data-role="menu-item-icon"
                                          height="100%"
                                          y="0%"
                                        >
                                          <path d="M16.74 8.208c-.005-1.46-.515-2.682-1.46-3.528-.86-.76-2.02-1.18-3.27-1.18-2.28 0-4.74 1.48-4.74 4.74v5.99c0 2.375 1.314 3.81 2.911 4.41a.105.105 0 0 1 .035-.045 2 2 0 1 1-.09 1.607C7.756 19.511 5.77 17.49 5.77 14.23H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1l1.77.005C5.772 4.148 8.911 2 12.01 2c3.09 0 6.22 2.126 6.24 6.2h1.74c.55 0 1 .45 1 1v4.03c0 .55-.45 1-1 1h-3.25V8.208Z" />
                                        </svg>
                                      </svg>
                                      <span className="iconBadge--732f0">
                                        <span
                                          className="badge--1ed15 red--724a7 hidden--a6bbc typeRound--48c76"
                                          data-role="badge"
                                          data-scale="1.1"
                                          style={{
                                            "-size":
                                              "calc(var(--rem-migration-size, 10px) * 1.1)",
                                            fontSize:
                                              "calc(var(--size, 10px) * 1)",
                                          }}
                                        >
                                          0
                                        </span>
                                      </span>
                                    </div>
                                    <div
                                      className="titleContainer--b5b4f"
                                      data-role="menu-item-title-text-container"
                                    >
                                      <span
                                        className="title--9628c"
                                        data-role="menu-item-title-text"
                                      >
                                        Live Support
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  onClick={() => setTab("game-history")}
                                  className="wrapper--6c1a2"
                                  data-role="menu-item-wrapper"
                                >
                                  <div
                                    data-role="menu-button-history"
                                    className="container--0ac6d menuCard--8ece4"
                                  >
                                    <div className="icon--15612">
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
                                          data-role="menu-item-icon"
                                        >
                                          <path d="M10.77 3.6c2.16-.33 4.37.19 6.16 1.45l-.04-.02a8.5 8.5 0 1 1-11.66 12.1l1.59-1.21a6.5 6.5 0 1 0-.1-7.74l1.42 1.38-5.64 1.49L3.88 5.4l1.44 1.4a8.51 8.51 0 0 1 5.45-3.2Z" />
                                          <path d="M11.33 12.32V7.49h1.5v4.2l3.05 3.05-1.06 1.06-3.5-3.48Z" />
                                        </svg>
                                      </svg>
                                    </div>
                                    <div
                                      className="titleContainer--b5b4f"
                                      data-role="menu-item-title-text-container"
                                    >
                                      <span
                                        className="title--9628c"
                                        data-role="menu-item-title-text"
                                      >
                                        Game History
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  onClick={() => setTab("settings")}
                                  className="wrapper--6c1a2"
                                  data-role="menu-item-wrapper"
                                >
                                  <div
                                    data-role="menu-button-settings"
                                    className="container--0ac6d menuCard--8ece4"
                                  >
                                    <div className="icon--15612">
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
                                          data-role="menu-item-icon"
                                        >
                                          <path d="M18.79 12a7.178 7.178 0 0 0-.19-1.62l2-1.15-2-3.47-2 1.16a6.86 6.86 0 0 0-2.8-1.63V3h-4v2.29A7 7 0 0 0 7 6.92L5 5.76 3 9.23l2 1.15a6.62 6.62 0 0 0 0 3.23l-2 1.15 2 3.47 2-1.15a7.09 7.09 0 0 0 2.8 1.62V21h4v-2.3a7 7 0 0 0 2.8-1.62l2 1.15 2-3.47-2-1.15a7.154 7.154 0 0 0 .19-1.61Zm-7 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                        </svg>
                                      </svg>
                                    </div>
                                    <div
                                      className="titleContainer--b5b4f"
                                      data-role="menu-item-title-text-container"
                                    >
                                      <span
                                        className="title--9628c"
                                        data-role="menu-item-title-text"
                                      >
                                        Settings
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  onClick={() => setTab("how-to-play")}
                                  className="wrapper--6c1a2"
                                  data-role="menu-item-wrapper"
                                >
                                  <div
                                    data-role="menu-button-help"
                                    className="container--0ac6d menuCard--8ece4"
                                  >
                                    <div className="icon--15612">
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
                                          data-role="menu-item-icon"
                                        >
                                          <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm1 16h-2v-1.59h2V18Zm1.92-6.03-.86.88c-.61.62-.93.97-1.01 2.15l-2.01-.03c0-1.05.43-1.9 1.12-2.6l1.18-1.2c.35-.34.56-.82.56-1.35 0-1.05-.86-1.91-1.91-1.91-.96 0-1.76.94-1.89 1.91H8.19c.14-2 1.78-3.82 3.8-3.82 2.02 0 3.82 1.71 3.82 3.82 0 .84-.34 1.6-.89 2.15Z" />
                                        </svg>
                                      </svg>
                                    </div>
                                    <div
                                      className="titleContainer--b5b4f"
                                      data-role="menu-item-title-text-container"
                                    >
                                      <span
                                        className="title--9628c"
                                        data-role="menu-item-title-text"
                                      >
                                        How To Play
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="menuList--226cd">
                                <div className="menuListItems--374da">
                                  <div
                                    onClick={handleToggleFullScreen}
                                    className="wrapper--6c1a2"
                                    data-role="menu-item-wrapper"
                                  >
                                    <div
                                      data-role="menu-button-hideToolbarTutorialMenuScreen"
                                      className="container--0ac6d menuItem--95787"
                                    >
                                      <div className="icon--15612">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 14 14"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M2.576 6.35c.327 0 .57-.24.57-.57v-.37l-.108-1.607 1.199 1.26L5.72 6.557a.538.538 0 0 0 .4.166c.352 0 .607-.239.607-.591a.589.589 0 0 0-.172-.415l-1.49-1.488L3.8 3.037l1.619.109h.405a.557.557 0 0 0 .576-.57A.559.559 0 0 0 5.825 2h-2.88C2.347 2 2 2.347 2 2.943V5.78c0 .327.244.57.576.57Zm5.6 5.65h2.88c.596 0 .944-.347.944-.944V8.221a.56.56 0 0 0-.576-.57.553.553 0 0 0-.57.57v.368l.108 1.607-1.199-1.26L8.28 7.443a.54.54 0 0 0-.405-.166c-.352 0-.607.239-.607.591 0 .161.063.306.177.415l1.49 1.488 1.265 1.192-1.619-.109h-.405a.555.555 0 0 0-.576.57.56.56 0 0 0 .576.576Z"
                                          />
                                        </svg>
                                      </div>
                                      <div
                                        className="titleContainer--b5b4f"
                                        data-role="menu-item-title-text-container"
                                      >
                                        <span
                                          className="title--9628c hidden--1319d"
                                          data-role="menu-item-title-text"
                                        >
                                          How To Enter Fullscreen
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    onClick={() => setTab("payout-limit")}
                                    className="wrapper--6c1a2"
                                    data-role="menu-item-wrapper"
                                  >
                                    <div
                                      data-role="menu-button-betLimits"
                                      className="container--0ac6d menuItem--95787"
                                    >
                                      <div className="icon--15612">
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
                                            data-role="menu-item-icon"
                                          >
                                            <path d="m8.94 6.97 2.18 2.18 1.06-1.06L8.09 4 4 8.09l1.06 1.06 2.18-2.18v8.04h1.7V6.97Zm8 10.07 2.18-2.18 1.06 1.06-4.09 4.09L12 15.92l1.06-1.06 2.18 2.18V9h1.7v8.04Z" />
                                          </svg>
                                        </svg>
                                      </div>
                                      <div
                                        className="titleContainer--b5b4f"
                                        data-role="menu-item-title-text-container"
                                      >
                                        <span
                                          className="title--9628c hidden--1319d"
                                          data-role="menu-item-title-text"
                                        >
                                          Payouts &amp; Limits
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="soundControlContainer--07114">
                                  <div className="soundControl--f67a2">
                                    <div className="soundControl--21a02">
                                      <div
                                        data-role="sound-toggle"
                                        className="container--0ac6d iconContainer--f2a40"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          preserveAspectRatio="xMidYMid meet"
                                          viewBox="0 0 24 24"
                                          className="icon--e49fa"
                                          data-role="volume-icon"
                                        >
                                          <path
                                            className="speaker--81c1b"
                                            data-role="speaker"
                                            d="M2 9v6a1 1 0 0 0 1 1h5l5 5V3L8 8H3a1 1 0 0 0-1 1Z"
                                          />
                                          <path
                                            className="cross--91683"
                                            data-role="cross"
                                            opacity={0}
                                            fillRule="nonzero"
                                            d="m18.363 10.955-2.3-2.3-1.061 1.06 2.3 2.301-2.298 2.298 1.06 1.061 2.299-2.298 2.295 2.295 1.061-1.06-2.295-2.296 2.298-2.298-1.061-1.06-2.298 2.297Z"
                                            style={{
                                              transform:
                                                "translateX(-30%) rotateZ(-90deg)",
                                            }}
                                          />
                                          <circle
                                            className="stripe--4eaa6"
                                            data-role="first-stripe"
                                            fill="transparent"
                                            cx={10}
                                            cy="50%"
                                            strokeWidth="1.5"
                                            r={7}
                                            opacity={1}
                                            strokeDasharray="8.79645943005142 35.18583772020568"
                                            strokeDashoffset="4.39822971502571"
                                          />
                                          <circle
                                            className="stripe--4eaa6"
                                            data-role="second-stripe"
                                            fill="transparent"
                                            cx={10}
                                            cy="50%"
                                            strokeWidth="1.5"
                                            r={11}
                                            opacity={1}
                                            strokeDasharray="15.205308443374598 53.90972993560084"
                                            strokeDashoffset="7.602654221687299"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="floatingContainer--039f0 transformFloatingContainer--20649"
        data-role="floating-container"
        style={{
          transitionProperty: "transform",
          transform: "translate3d(0px, 0px, 1px)",
          transitionDuration: "initial",
          transitionTimingFunction: "initial",
        }}
      />
      <div
        data-role="drawer-content-mask"
        className="contentMask--32bde"
        style={{ transform: "scaleY(0) translate3d(0px, 0px, 1px)" }}
      />
    </motion.div>
  );
};

export default Menu;
