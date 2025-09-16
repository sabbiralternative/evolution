import { motion } from "motion/react";

const HowToPlay = ({ setTab, closeModal }) => {
  return (
    <motion.div
      initial={{ x: "100%", y: "10%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.2 }}
      exit={{ x: "100%" }}
      className="card--9bed2 card--2080f transformPositioning--1125f withBorderRadius--f0b89"
      data-role="drawer-card"
      data-test-size="65%"
      style={{
        pointerEvents: "initial",
        transform: "translate3d(0px, calc(100% - 542px), 1px)",
        transitionDuration: "initial",
        transitionTimingFunction: "initial",
      }}
    >
      <div
        className="contentContainer--736bb contentSizeRestrictContainer--9da92"
        data-role="content-restrict-container"
        style={{ maxHeight: "750px" }}
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
            <div
              onClick={() => setTab("menu")}
              className="backButtonContainer--3999f"
            >
              <div
                className="backButton--096e8 visible--24b70 animated--9d0fa"
                data-role="drawer-back-button-container"
              >
                <div
                  data-role="drawer-back-button"
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
                      <path d="m7.83 13.36 3.95 3.95-1.42 1.42L4 12.36 10.36 6l1.42 1.41-3.95 3.95H20v2H7.83Z" />
                    </svg>
                  </svg>
                </div>
              </div>
            </div>
            <div className="titleContainer--62dac">
              <div
                data-role="title-animation-container"
                className="animatedTitleContainer--0ef83"
              >
                <div className="currentTitle--5f5a4" data-role="title-current">
                  <div className="titleContainer--ae994">
                    <div className="title--b94ad">
                      <div className="titleIcon--f10b6 rtlIcon--2a992">
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
                            <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm1 16h-2v-1.59h2V18Zm1.92-6.03-.86.88c-.61.62-.93.97-1.01 2.15l-2.01-.03c0-1.05.43-1.9 1.12-2.6l1.18-1.2c.35-.34.56-.82.56-1.35 0-1.05-.86-1.91-1.91-1.91-.96 0-1.76.94-1.89 1.91H8.19c.14-2 1.78-3.82 3.8-3.82 2.02 0 3.82 1.71 3.82 3.82 0 .84-.34 1.6-.89 2.15Z" />
                          </svg>
                        </svg>
                      </div>
                      <div data-role="title-text" className="titleText--44453">
                        How To Play
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
                  data-screen-id="help"
                  data-role="menu-screen-help"
                  style={{ display: "block" }}
                >
                  <div
                    className="wrapper--f4eb9"
                    data-role="scrollable-wrapper"
                  >
                    <div
                      data-role="scrollable"
                      className="scrollable--96151 vertical--99fcf lockScroll--49962"
                      style={{
                        maskImage:
                          "linear-gradient(transparent 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%, transparent 100%), linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%, transparent 100%)",
                      }}
                    >
                      <div className="contentOffsets--4b75a">
                        <div data-role="help-wrapper" dir="ltr">
                          <div className="content--478df">
                            <div className="gameInfo--a537d" />
                            <div
                              className="wrapper--3f4b5"
                              data-role="tabs-wrapper"
                            >
                              <div dir="ltr" className>
                                <div
                                  className="wrapper--f4eb9"
                                  data-role="scrollable-wrapper"
                                >
                                  <div
                                    data-role="scrollable"
                                    className="scrollable--96151 horizontal--8dcae hiddenScrollbar--27373"
                                  >
                                    <div
                                      className="barWrapper--83c4f"
                                      data-role="tab-bar-wrapper"
                                    >
                                      <ul
                                        className="list--a098a indicatorBottomPosition--b410d"
                                        data-role="tab-bar-list"
                                        style={{
                                          "-tabBarSideOffset":
                                            "calc(var(--root-size, 10px) * 1.6)",
                                        }}
                                      >
                                        <li
                                          data-role="tab-bar-item-0"
                                          className="item--acccf selected--bfe52"
                                        >
                                          <button
                                            className="button--c2691"
                                            type="button"
                                            data-role="tab-bar-button-0"
                                          >
                                            <span
                                              data-role="tab-label"
                                              data-label="GAME DETAILS"
                                              className="label--eb22b"
                                            >
                                              GAME DETAILS
                                            </span>
                                            <span
                                              data-label="GAME DETAILS"
                                              className="label--eb22b widthReservation--d16ee"
                                            >
                                              GAME DETAILS
                                            </span>
                                          </button>
                                        </li>
                                        <li
                                          data-role="tab-bar-item-1"
                                          className="item--acccf"
                                        >
                                          <button
                                            className="button--c2691"
                                            type="button"
                                            data-role="tab-bar-button-1"
                                          >
                                            <span
                                              data-role="tab-label"
                                              data-label="FEATURES"
                                              className="label--eb22b"
                                            >
                                              FEATURES
                                            </span>
                                            <span
                                              data-label="FEATURES"
                                              className="label--eb22b widthReservation--d16ee"
                                            >
                                              FEATURES
                                            </span>
                                          </button>
                                        </li>
                                        <li
                                          data-role="tab-bar-item-2"
                                          className="item--acccf"
                                        >
                                          <button
                                            className="button--c2691"
                                            type="button"
                                            data-role="tab-bar-button-2"
                                          >
                                            <span
                                              data-role="tab-label"
                                              data-label="MORE"
                                              className="label--eb22b"
                                            >
                                              MORE
                                            </span>
                                            <span
                                              data-label="MORE"
                                              className="label--eb22b widthReservation--d16ee"
                                            >
                                              MORE
                                            </span>
                                          </button>
                                        </li>
                                        <li
                                          data-role="tab-bar-indicator"
                                          className="indicator--9de73 visible--16d67 animating--2a52b"
                                          style={{
                                            "-tablinewidth": "0.44",
                                            "-tablineleftposition": "0%",
                                          }}
                                        />
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="list--72361"
                                data-role="tab-content-wrapper"
                                style={{
                                  "-contentSideOffset":
                                    "calc(var(--root-size, 10px) * 1.6)",
                                }}
                              >
                                <div
                                  className="active--f0a91 relativePosition--ac9e2"
                                  data-role="tab-content-item"
                                >
                                  <div className="tabChaptersList--1e012">
                                    <div
                                      data-role="help-chapter"
                                      data-chapter-id="GameObjective"
                                      className="helpChapter--73696"
                                    >
                                      <a className="title--bfec4">
                                        <span>Game Objective</span>
                                        <span className="arrow--4cf7b collapsed--02021">
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
                                              <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                            </svg>
                                          </svg>
                                        </span>
                                      </a>
                                      <div className="contentContainer--e1e0b" />
                                    </div>
                                    <div
                                      data-role="help-chapter"
                                      data-chapter-id="GameRules"
                                      className="helpChapter--73696"
                                    >
                                      <a className="title--bfec4">
                                        <span>Game Rules</span>
                                        <span className="arrow--4cf7b collapsed--02021">
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
                                              <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                            </svg>
                                          </svg>
                                        </span>
                                      </a>
                                      <div className="contentContainer--e1e0b" />
                                    </div>
                                    <div
                                      data-role="help-chapter"
                                      data-chapter-id="Sidebets"
                                      className="helpChapter--73696"
                                    >
                                      <a className="title--bfec4">
                                        <span>Side Bets</span>
                                        <span className="arrow--4cf7b collapsed--02021">
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
                                              <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                            </svg>
                                          </svg>
                                        </span>
                                      </a>
                                      <div className="contentContainer--e1e0b" />
                                    </div>
                                    <div
                                      data-role="help-chapter"
                                      data-chapter-id="PlaceBets"
                                      className="helpChapter--73696"
                                    >
                                      <a className="title--bfec4">
                                        <span>Place Bets</span>
                                        <span className="arrow--4cf7b collapsed--02021">
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
                                              <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                            </svg>
                                          </svg>
                                        </span>
                                      </a>
                                      <div className="contentContainer--e1e0b" />
                                    </div>
                                    <div
                                      data-role="help-chapter"
                                      data-chapter-id="Payouts"
                                      className="helpChapter--73696"
                                    >
                                      <a className="title--bfec4">
                                        <span>Payouts</span>
                                        <span className="arrow--4cf7b collapsed--02021">
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
                                              <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                            </svg>
                                          </svg>
                                        </span>
                                      </a>
                                      <div className="contentContainer--e1e0b" />
                                    </div>
                                    <div
                                      data-role="help-chapter"
                                      data-chapter-id="ReturnToPlayer"
                                      className="helpChapter--73696"
                                    >
                                      <a className="title--bfec4">
                                        <span>Return to Player</span>
                                        <span className="arrow--4cf7b collapsed--02021">
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
                                              <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                            </svg>
                                          </svg>
                                        </span>
                                      </a>
                                      <div className="contentContainer--e1e0b" />
                                    </div>
                                    <div
                                      data-role="help-chapter"
                                      data-chapter-id="BetStatistics"
                                      className="helpChapter--73696"
                                    >
                                      <a className="title--bfec4">
                                        <span>Bet Statistics</span>
                                        <span className="arrow--4cf7b collapsed--02021">
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
                                              <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                            </svg>
                                          </svg>
                                        </span>
                                      </a>
                                      <div className="contentContainer--e1e0b" />
                                    </div>
                                    <div
                                      data-role="help-chapter"
                                      data-chapter-id="ScoreCards"
                                      className="helpChapter--73696"
                                    >
                                      <a className="title--bfec4">
                                        <span>Scorecards</span>
                                        <span className="arrow--4cf7b collapsed--02021">
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
                                              <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                            </svg>
                                          </svg>
                                        </span>
                                      </a>
                                      <div className="contentContainer--e1e0b" />
                                    </div>
                                    <div
                                      data-role="help-chapter"
                                      data-chapter-id="Multiplay"
                                      className="helpChapter--73696"
                                    >
                                      <a className="title--bfec4">
                                        <span>Multiplay</span>
                                        <span className="arrow--4cf7b collapsed--02021">
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
                                              <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                            </svg>
                                          </svg>
                                        </span>
                                      </a>
                                      <div className="contentContainer--e1e0b" />
                                    </div>
                                    <div
                                      data-role="help-chapter"
                                      data-chapter-id="Shuffling"
                                      className="helpChapter--73696"
                                    >
                                      <a className="title--bfec4">
                                        <span>Shuffling</span>
                                        <span className="arrow--4cf7b collapsed--02021">
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
                                              <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                            </svg>
                                          </svg>
                                        </span>
                                      </a>
                                      <div className="contentContainer--e1e0b" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="hidden--63b32 relativePosition--ac9e2"
                                  data-role="tab-content-item"
                                />
                                <div
                                  className="hidden--63b32 relativePosition--ac9e2"
                                  data-role="tab-content-item"
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
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HowToPlay;
