import { motion } from "motion/react";
import { useState } from "react";
import { useSelector } from "react-redux";

const HowToPlay = ({ setTab, closeModal }) => {
  const { deviseHeight } = useSelector((state) => state.global);
  const [tabs, setTabs] = useState("game-details");
  const [open, setOpen] = useState(null);

  const handleToggleOpen = (n) => {
    if (n === open) {
      setOpen(null);
    } else {
      setOpen(n);
    }
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.2 }}
      exit={{ x: "100%" }}
      className="card--9bed2 card--2080f transformPositioning--1125f withBorderRadius--f0b89"
      data-role="drawer-card"
      data-test-size="65%"
      style={{
        pointerEvents: "initial",
        transitionDuration: "initial",
        transitionTimingFunction: "initial",
        height: `${deviseHeight * 0.65}px`,
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
                                          onClick={() =>
                                            setTabs("game-details")
                                          }
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
                                          onClick={() => setTabs("features")}
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
                                          onClick={() => setTabs("more")}
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
                                            width:
                                              tabs === "game-details"
                                                ? "40%"
                                                : "35%",
                                            left:
                                              tabs === "game-details"
                                                ? "0%"
                                                : tabs === "features"
                                                ? "40%"
                                                : "75%",
                                          }}
                                        />
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {tabs === "game-details" && (
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
                                        <a
                                          onClick={() => handleToggleOpen(1)}
                                          className="title--bfec4"
                                        >
                                          <span>Game Objective</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 1
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 1 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <p>
                                                <span>
                                                  The objective in{" "}
                                                  <strong>
                                                    Golden Wealth Baccarat
                                                  </strong>{" "}
                                                  is to predict whether the
                                                  Player’s or Banker’s hand will
                                                  win by having the value
                                                  closest to 9.
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div
                                        data-role="help-chapter"
                                        data-chapter-id="GameRules"
                                        className="helpChapter--73696"
                                      >
                                        <a
                                          onClick={() => handleToggleOpen(2)}
                                          className="title--bfec4"
                                        >
                                          <span>Game Rules</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 2
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 2 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <div>
                                                <p>
                                                  <span>
                                                    The game is hosted by a
                                                    dealer and is played with
                                                    eight standard 52-card
                                                    decks. Card values are as
                                                    follows:
                                                  </span>
                                                </p>
                                                <ul>
                                                  <li>
                                                    <span>
                                                      Aces are the lowest cards
                                                      and are worth 1 point
                                                      each.
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      Cards from 2 to 9 are
                                                      worth their numerical face
                                                      values.
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      10s and face cards (Jacks,
                                                      Queens, and Kings) are
                                                      each worth 0.
                                                    </span>
                                                  </li>
                                                </ul>
                                                <p>
                                                  <span>
                                                    Only the numeric value of
                                                    each card is relevant in the
                                                    main Baccarat game; each
                                                    card’s suit (Hearts, Spades,
                                                    Clubs or Diamonds) is
                                                    irrelevant.
                                                  </span>
                                                </p>
                                                <p>
                                                  <span>
                                                    Prior to each deal, you must
                                                    place your bet on whether
                                                    the Player or the Banker
                                                    will win the round by having
                                                    the hand with a value
                                                    closest to 9.
                                                  </span>
                                                </p>
                                                <p>
                                                  <span>
                                                    If you believe that both the
                                                    Player and Banker will hold
                                                    hands of equal value, you
                                                    also have the option to bet
                                                    on Tie.
                                                  </span>
                                                </p>
                                                <p>
                                                  <span>
                                                    In addition, you can also
                                                    bet on Player/Banker Pair
                                                    (P/B Pair), which will pay
                                                    if the first two cards dealt
                                                    to the Player/Banker
                                                    constitute a pair.
                                                  </span>
                                                </p>
                                                <p>
                                                  <span>
                                                    A fee of 20% will be added
                                                    to each of your placed bets.
                                                    For example, if your bet is
                                                    5, then the 20% fee applied
                                                    is 1, and your total bet
                                                    will be 6. This total bet
                                                    value will be visible on
                                                    your screen.
                                                  </span>
                                                </p>
                                                <div
                                                  data-role="help-component-container"
                                                  className="helpComponentContainer--faa7d noMargin--96c39"
                                                  style={{
                                                    direction: "initial",
                                                  }}
                                                >
                                                  <div
                                                    className="container--5502c"
                                                    style={{
                                                      flexDirection:
                                                        "column-reverse",
                                                    }}
                                                  >
                                                    <div
                                                      style={{
                                                        width: "254px",
                                                        height: "137.467px",
                                                      }}
                                                    >
                                                      <div
                                                        className="bettingGrid--0835e bettingTime--7f9cd isVertical--28984 onlyPairs--f14f6"
                                                        data-role="betting-grid-container"
                                                        style={{
                                                          transform:
                                                            "scale(0.697802)",
                                                        }}
                                                      >
                                                        <div className="bubble--2b7a1" />
                                                        <div className="mainContainer--2572f">
                                                          <div
                                                            data-betspot-destination="Player"
                                                            className="player--b46f0"
                                                            data-role="bet-spot-Player"
                                                          >
                                                            <svg
                                                              className="svg--7e996 mainShape--f586c svgBetspot--43e31"
                                                              preserveAspectRatio="none"
                                                              width={180}
                                                              height={149}
                                                              viewBox="0 0 180 149"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="player0.31379739459290945_id_fill"
                                                                >
                                                                  <stop
                                                                    stopOpacity="0.8"
                                                                    className="gradientLight--ba468 blue--5d4e7"
                                                                  />
                                                                  <stop
                                                                    offset={1}
                                                                    stopOpacity="0.8"
                                                                    className="gradientDark--2ae9f blue--5d4e7"
                                                                  />
                                                                </linearGradient>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="player0.31379739459290945_id_stroke"
                                                                >
                                                                  <stop
                                                                    stopOpacity="0.8"
                                                                    className="strokeLight--26bed blue--5d4e7"
                                                                  />
                                                                  <stop
                                                                    offset={1}
                                                                    stopOpacity="0.8"
                                                                    className="strokeDark--60bd1 blue--5d4e7"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
                                                              <g>
                                                                <path
                                                                  d="M179.000,1.000 L179.000,12.116 C161.467,13.133 145.716,20.793 134.227,32.616 C122.563,44.620 115.292,60.915 115.009,78.914 L115.009,78.914 L115.000,80.000 L115.000,148.000 L3.198,148.000 C2.591,148.000 2.042,147.754 1.644,147.356 C1.246,146.958 1.000,146.409 1.000,145.802 L1.000,145.802 L1.000,3.198 C1.000,2.591 1.246,2.042 1.644,1.644 C2.042,1.246 2.591,1.000 3.198,1.000 L3.198,1.000 L179.000,1.000 Z"
                                                                  fill="url(#player0.31379739459290945_id_fill)"
                                                                  stroke="url(#player0.31379739459290945_id_stroke)"
                                                                  strokeWidth={
                                                                    2
                                                                  }
                                                                  fillRule="evenodd"
                                                                  className="shape--84077"
                                                                />
                                                              </g>
                                                            </svg>
                                                            <div
                                                              className="score--393b3"
                                                              data-role="score"
                                                            />
                                                            <div className="symbol--a11ac">
                                                              <img src="/frontend/evo/mini/images/playersymb.ec2d1e8e.svg" />
                                                            </div>
                                                            <div className="cardsHand--538f4">
                                                              <div className="cards--d48f8" />
                                                            </div>
                                                            <div className="title--967a1">
                                                              <div className="titleContainer--98fa0">
                                                                PLAYER
                                                              </div>
                                                            </div>
                                                            <div className="liveStatisticsContainer--fc00f">
                                                              <div
                                                                className="liveStatistics--951fa LeftSpot--cfe31"
                                                                data-role="betting-stats"
                                                                data-total-wager={
                                                                  100
                                                                }
                                                                data-total-bettors={
                                                                  100
                                                                }
                                                                data-currency-symbol="₹"
                                                                style={{
                                                                  color:
                                                                    "rgb(0, 150, 255)",
                                                                }}
                                                              >
                                                                <div className="currency--abe5b">
                                                                  <span className="symbol--08ff1">
                                                                    ₹
                                                                  </span>
                                                                  <span>
                                                                    100
                                                                  </span>
                                                                </div>
                                                                <div className="count--17131">
                                                                  <span className="symbol--08ff1">
                                                                    <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      width="100%"
                                                                      height="100%"
                                                                      viewBox="0 0 8 12"
                                                                    >
                                                                      <g
                                                                        fill="#0096FF"
                                                                        fillRule="evenodd"
                                                                      >
                                                                        <circle
                                                                          cx={4}
                                                                          cy={3}
                                                                          r={3}
                                                                        />
                                                                        <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                                                                      </g>
                                                                    </svg>
                                                                  </span>
                                                                  <span>
                                                                    100
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="bettingStatistics--1bd62">
                                                              <svg
                                                                data-total-percent={
                                                                  20
                                                                }
                                                                width={108}
                                                                height={108}
                                                                viewBox="0 0 108 108"
                                                              >
                                                                <defs>
                                                                  <linearGradient
                                                                    x1="50%"
                                                                    y1="0%"
                                                                    x2="50%"
                                                                    y2="100%"
                                                                    id="background_Player0.18292631179248253_id_gradient"
                                                                  >
                                                                    <stop
                                                                      stopColor="#000"
                                                                      stopOpacity="0.7"
                                                                      offset="0%"
                                                                    />
                                                                    <stop
                                                                      stopColor="#000"
                                                                      stopOpacity={
                                                                        0
                                                                      }
                                                                      offset="100%"
                                                                    />
                                                                  </linearGradient>
                                                                </defs>
                                                                <circle
                                                                  cx={54}
                                                                  cy={54}
                                                                  r={54}
                                                                  fill="url(#background_Player0.18292631179248253_id_gradient)"
                                                                />
                                                                <circle
                                                                  cx={54}
                                                                  cy={54}
                                                                  r={50}
                                                                  strokeWidth={
                                                                    8
                                                                  }
                                                                  fill="none"
                                                                  stroke="#0096FF"
                                                                  strokeOpacity="0.1"
                                                                />
                                                                <circle
                                                                  cx={54}
                                                                  cy={54}
                                                                  r={50}
                                                                  strokeWidth={
                                                                    8
                                                                  }
                                                                  fill="none"
                                                                  stroke="#0096FF"
                                                                  strokeDashoffset="251.32741228718348"
                                                                  strokeDasharray="314.1592653589793"
                                                                  transform="rotate(-90 54 54)"
                                                                  style={{
                                                                    transition:
                                                                      "stroke-dashoffset 500ms",
                                                                  }}
                                                                />
                                                              </svg>
                                                              <span
                                                                className="indicatorPercentage--ac6cf"
                                                                style={{
                                                                  color:
                                                                    "rgb(0, 150, 255)",
                                                                }}
                                                              >
                                                                20%
                                                              </span>
                                                            </div>
                                                            <div className="chipContainer--9cdca" />
                                                          </div>
                                                          <div
                                                            data-betspot-destination="Banker"
                                                            className="banker--abb19"
                                                            data-role="bet-spot-Banker"
                                                          >
                                                            <svg
                                                              className="svg--7e996 mainShape--f586c svgBetspot--43e31 isMirrored--d9896"
                                                              preserveAspectRatio="none"
                                                              width={180}
                                                              height={149}
                                                              viewBox="0 0 180 149"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="banker0.3118418684855849_id_fill"
                                                                >
                                                                  <stop
                                                                    stopOpacity="0.8"
                                                                    className="gradientLight--ba468 red--7fb61"
                                                                  />
                                                                  <stop
                                                                    offset={1}
                                                                    stopOpacity="0.8"
                                                                    className="gradientDark--2ae9f red--7fb61"
                                                                  />
                                                                </linearGradient>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="banker0.3118418684855849_id_stroke"
                                                                >
                                                                  <stop
                                                                    stopOpacity="0.8"
                                                                    className="strokeLight--26bed red--7fb61"
                                                                  />
                                                                  <stop
                                                                    offset={1}
                                                                    stopOpacity="0.8"
                                                                    className="strokeDark--60bd1 red--7fb61"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
                                                              <g>
                                                                <path
                                                                  d="M179.000,1.000 L179.000,12.116 C161.467,13.133 145.716,20.793 134.227,32.616 C122.563,44.620 115.292,60.915 115.009,78.914 L115.009,78.914 L115.000,80.000 L115.000,148.000 L3.198,148.000 C2.591,148.000 2.042,147.754 1.644,147.356 C1.246,146.958 1.000,146.409 1.000,145.802 L1.000,145.802 L1.000,3.198 C1.000,2.591 1.246,2.042 1.644,1.644 C2.042,1.246 2.591,1.000 3.198,1.000 L3.198,1.000 L179.000,1.000 Z"
                                                                  fill="url(#banker0.3118418684855849_id_fill)"
                                                                  stroke="url(#banker0.3118418684855849_id_stroke)"
                                                                  strokeWidth={
                                                                    2
                                                                  }
                                                                  fillRule="evenodd"
                                                                  className="shape--84077"
                                                                />
                                                              </g>
                                                            </svg>
                                                            <div
                                                              className="score--393b3"
                                                              data-role="score"
                                                            />
                                                            <div className="symbol--a11ac">
                                                              <img src="/frontend/evo/mini/images/bankersymb.78bc4fda.svg" />
                                                            </div>
                                                            <div className="cardsHand--538f4 toRight--d458d">
                                                              <div className="cards--d48f8" />
                                                            </div>
                                                            <div className="title--967a1">
                                                              <div className="titleContainer--98fa0">
                                                                BANKER
                                                              </div>
                                                            </div>
                                                            <div className="liveStatisticsContainer--fc00f">
                                                              <div
                                                                className="liveStatistics--951fa RightSpot--29540"
                                                                data-role="betting-stats"
                                                                data-total-wager={
                                                                  100
                                                                }
                                                                data-total-bettors={
                                                                  100
                                                                }
                                                                data-currency-symbol="₹"
                                                                style={{
                                                                  color:
                                                                    "rgb(255, 0, 6)",
                                                                }}
                                                              >
                                                                <div className="currency--abe5b">
                                                                  <span className="symbol--08ff1">
                                                                    ₹
                                                                  </span>
                                                                  <span>
                                                                    100
                                                                  </span>
                                                                </div>
                                                                <div className="count--17131">
                                                                  <span className="symbol--08ff1">
                                                                    <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      width="100%"
                                                                      height="100%"
                                                                      viewBox="0 0 8 12"
                                                                    >
                                                                      <g
                                                                        fill="#FF0006"
                                                                        fillRule="evenodd"
                                                                      >
                                                                        <circle
                                                                          cx={4}
                                                                          cy={3}
                                                                          r={3}
                                                                        />
                                                                        <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                                                                      </g>
                                                                    </svg>
                                                                  </span>
                                                                  <span>
                                                                    100
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="bettingStatistics--1bd62">
                                                              <svg
                                                                data-total-percent={
                                                                  20
                                                                }
                                                                width={108}
                                                                height={108}
                                                                viewBox="0 0 108 108"
                                                              >
                                                                <defs>
                                                                  <linearGradient
                                                                    x1="50%"
                                                                    y1="0%"
                                                                    x2="50%"
                                                                    y2="100%"
                                                                    id="background_Banker0.025049257748918308_id_gradient"
                                                                  >
                                                                    <stop
                                                                      stopColor="#000"
                                                                      stopOpacity="0.7"
                                                                      offset="0%"
                                                                    />
                                                                    <stop
                                                                      stopColor="#000"
                                                                      stopOpacity={
                                                                        0
                                                                      }
                                                                      offset="100%"
                                                                    />
                                                                  </linearGradient>
                                                                </defs>
                                                                <circle
                                                                  cx={54}
                                                                  cy={54}
                                                                  r={54}
                                                                  fill="url(#background_Banker0.025049257748918308_id_gradient)"
                                                                />
                                                                <circle
                                                                  cx={54}
                                                                  cy={54}
                                                                  r={50}
                                                                  strokeWidth={
                                                                    8
                                                                  }
                                                                  fill="none"
                                                                  stroke="#FF0006"
                                                                  strokeOpacity="0.1"
                                                                />
                                                                <circle
                                                                  cx={54}
                                                                  cy={54}
                                                                  r={50}
                                                                  strokeWidth={
                                                                    8
                                                                  }
                                                                  fill="none"
                                                                  stroke="#FF0006"
                                                                  strokeDashoffset="251.32741228718348"
                                                                  strokeDasharray="314.1592653589793"
                                                                  transform="rotate(-90 54 54)"
                                                                  style={{
                                                                    transition:
                                                                      "stroke-dashoffset 500ms",
                                                                  }}
                                                                />
                                                              </svg>
                                                              <span
                                                                className="indicatorPercentage--ac6cf"
                                                                style={{
                                                                  color:
                                                                    "rgb(255, 0, 6)",
                                                                }}
                                                              >
                                                                20%
                                                              </span>
                                                            </div>
                                                            <div className="chipContainer--9cdca" />
                                                          </div>
                                                          <div
                                                            data-betspot-destination="Tie"
                                                            className="tie--01ff7"
                                                            data-role="bet-spot-Tie"
                                                          >
                                                            <svg
                                                              preserveAspectRatio="none"
                                                              className="svg--7e996 svgBetspot--43e31 tieShape--d6bfd"
                                                              width={123}
                                                              height={130}
                                                              viewBox="0 0 123 130"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="tie_fill0.7955262074733686_id"
                                                                >
                                                                  <stop
                                                                    stopOpacity="0.8"
                                                                    className="gradientLight--ba468 green--1e33e"
                                                                  />
                                                                  <stop
                                                                    offset={1}
                                                                    stopOpacity="0.8"
                                                                    className="gradientDark--2ae9f green--1e33e"
                                                                  />
                                                                </linearGradient>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="tie_stroke0.7955262074733686_id"
                                                                >
                                                                  <stop
                                                                    stopOpacity="0.8"
                                                                    className="strokeLight--26bed green--1e33e"
                                                                  />
                                                                  <stop
                                                                    offset={1}
                                                                    stopOpacity="0.8"
                                                                    className="strokeDark--60bd1 green--1e33e"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
                                                              <path
                                                                d="M61.500,1.000 C78.207,1.000 93.332,7.772 104.280,18.720 C115.228,29.668 122.000,44.793 122.000,61.500 L122.000,61.500 L122.000,129.000 L1.000,129.000 L1.000,61.500 C1.000,44.793 7.772,29.668 18.720,18.720 C29.668,7.772 44.793,1.000 61.500,1.000 Z"
                                                                fill="url(#tie_fill0.7955262074733686_id)"
                                                                stroke="url(#tie_stroke0.7955262074733686_id)"
                                                                strokeWidth={2}
                                                                fillRule="evenodd"
                                                                className="shape--84077"
                                                              />
                                                            </svg>
                                                            <div
                                                              className="title--967a1"
                                                              data-role="payout"
                                                            >
                                                              <div className="titleContainer--98fa0 single--27bc5">
                                                                <span className>
                                                                  TIE
                                                                </span>
                                                              </div>
                                                              <div className="payoutContainer--a32db">
                                                                <div>
                                                                  <div
                                                                    className="payout--c827b"
                                                                    data-role="payout"
                                                                  >
                                                                    5:1
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="liveStatisticsContainer--fc00f">
                                                              <div
                                                                className="liveStatistics--951fa Tie--9449f"
                                                                data-role="betting-stats"
                                                                data-total-wager={
                                                                  100
                                                                }
                                                                data-total-bettors={
                                                                  100
                                                                }
                                                                data-currency-symbol="₹"
                                                                style={{
                                                                  color:
                                                                    "rgb(0, 255, 0)",
                                                                }}
                                                              >
                                                                <div className="currency--abe5b">
                                                                  <span className="symbol--08ff1">
                                                                    ₹
                                                                  </span>
                                                                  <span>
                                                                    100
                                                                  </span>
                                                                </div>
                                                                <div className="count--17131">
                                                                  <span className="symbol--08ff1">
                                                                    <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      width="100%"
                                                                      height="100%"
                                                                      viewBox="0 0 8 12"
                                                                    >
                                                                      <g
                                                                        fill="#00FF00"
                                                                        fillRule="evenodd"
                                                                      >
                                                                        <circle
                                                                          cx={4}
                                                                          cy={3}
                                                                          r={3}
                                                                        />
                                                                        <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                                                                      </g>
                                                                    </svg>
                                                                  </span>
                                                                  <span>
                                                                    100
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="bettingStatistics--1bd62">
                                                              <svg
                                                                data-total-percent={
                                                                  20
                                                                }
                                                                width={108}
                                                                height={108}
                                                                viewBox="0 0 108 108"
                                                              >
                                                                <defs>
                                                                  <linearGradient
                                                                    x1="50%"
                                                                    y1="0%"
                                                                    x2="50%"
                                                                    y2="100%"
                                                                    id="background_Tie0.676008507959934_id_gradient"
                                                                  >
                                                                    <stop
                                                                      stopColor="#000"
                                                                      stopOpacity="0.7"
                                                                      offset="0%"
                                                                    />
                                                                    <stop
                                                                      stopColor="#000"
                                                                      stopOpacity={
                                                                        0
                                                                      }
                                                                      offset="100%"
                                                                    />
                                                                  </linearGradient>
                                                                </defs>
                                                                <circle
                                                                  cx={54}
                                                                  cy={54}
                                                                  r={54}
                                                                  fill="url(#background_Tie0.676008507959934_id_gradient)"
                                                                />
                                                                <circle
                                                                  cx={54}
                                                                  cy={54}
                                                                  r={50}
                                                                  strokeWidth={
                                                                    8
                                                                  }
                                                                  fill="none"
                                                                  stroke="#00FF00"
                                                                  strokeOpacity="0.1"
                                                                />
                                                                <circle
                                                                  cx={54}
                                                                  cy={54}
                                                                  r={50}
                                                                  strokeWidth={
                                                                    8
                                                                  }
                                                                  fill="none"
                                                                  stroke="#00FF00"
                                                                  strokeDashoffset="251.32741228718348"
                                                                  strokeDasharray="314.1592653589793"
                                                                  transform="rotate(-90 54 54)"
                                                                  style={{
                                                                    transition:
                                                                      "stroke-dashoffset 500ms",
                                                                  }}
                                                                />
                                                              </svg>
                                                              <span
                                                                className="indicatorPercentage--ac6cf"
                                                                style={{
                                                                  color:
                                                                    "rgb(0, 255, 0)",
                                                                }}
                                                              >
                                                                20%
                                                              </span>
                                                            </div>
                                                            <div className="chipContainer--9cdca" />
                                                          </div>
                                                        </div>
                                                        <div className="betspot--53c9f left--fcc6a">
                                                          <div
                                                            data-betspot-destination="PlayerPair"
                                                            className="item--8e08a single--27bc5"
                                                            data-role="bet-spot-PlayerPair"
                                                          >
                                                            <svg
                                                              className="svg--7e996 svgBetspot--43e31 rectShape--a9f3a"
                                                              preserveAspectRatio="none"
                                                              width={122}
                                                              height={38}
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="PlayerPair0.4114726856333465_id_rect_fill"
                                                                >
                                                                  <stop
                                                                    stopOpacity="0.8"
                                                                    className="gradientLight--ba468 blue--5d4e7"
                                                                  />
                                                                  <stop
                                                                    offset={1}
                                                                    stopOpacity="0.8"
                                                                    className="gradientDark--2ae9f blue--5d4e7"
                                                                  />
                                                                </linearGradient>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="PlayerPair0.4114726856333465_id_rect_stroke"
                                                                >
                                                                  <stop
                                                                    stopOpacity="0.8"
                                                                    className="strokeLight--26bed blue--5d4e7"
                                                                  />
                                                                  <stop
                                                                    offset={1}
                                                                    stopOpacity="0.8"
                                                                    className="strokeDark--60bd1 blue--5d4e7"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
                                                              <rect
                                                                width="100%"
                                                                height="100%"
                                                                data-width={122}
                                                                data-height={38}
                                                                rx={4}
                                                                ry={4}
                                                                fill="url(#PlayerPair0.4114726856333465_id_rect_fill)"
                                                                stroke="url(#PlayerPair0.4114726856333465_id_rect_stroke)"
                                                                strokeWidth={4}
                                                                fillRule="evenodd"
                                                                className="shape--84077"
                                                              />
                                                            </svg>
                                                            <div className="payoutContainer--a32db">
                                                              <div>
                                                                <div
                                                                  className="payout--c827b"
                                                                  data-role="payout"
                                                                >
                                                                  9:1
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="betspotTitle--d0907">
                                                              <span className>
                                                                P PAIR
                                                              </span>
                                                            </div>
                                                            <div className="chipContainer--9cdca" />
                                                          </div>
                                                        </div>
                                                        <div className="betspot--53c9f right--d8912">
                                                          <div
                                                            data-betspot-destination="BankerPair"
                                                            className="item--8e08a single--27bc5"
                                                            data-role="bet-spot-BankerPair"
                                                          >
                                                            <svg
                                                              className="svg--7e996 svgBetspot--43e31 isMirrored--d9896 rectShape--a9f3a"
                                                              preserveAspectRatio="none"
                                                              width={122}
                                                              height={38}
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="BankerPair0.3958321367636135_id_rect_fill"
                                                                >
                                                                  <stop
                                                                    stopOpacity="0.8"
                                                                    className="gradientLight--ba468 red--7fb61"
                                                                  />
                                                                  <stop
                                                                    offset={1}
                                                                    stopOpacity="0.8"
                                                                    className="gradientDark--2ae9f red--7fb61"
                                                                  />
                                                                </linearGradient>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="BankerPair0.3958321367636135_id_rect_stroke"
                                                                >
                                                                  <stop
                                                                    stopOpacity="0.8"
                                                                    className="strokeLight--26bed red--7fb61"
                                                                  />
                                                                  <stop
                                                                    offset={1}
                                                                    stopOpacity="0.8"
                                                                    className="strokeDark--60bd1 red--7fb61"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
                                                              <rect
                                                                width="100%"
                                                                height="100%"
                                                                data-width={122}
                                                                data-height={38}
                                                                rx={4}
                                                                ry={4}
                                                                fill="url(#BankerPair0.3958321367636135_id_rect_fill)"
                                                                stroke="url(#BankerPair0.3958321367636135_id_rect_stroke)"
                                                                strokeWidth={4}
                                                                fillRule="evenodd"
                                                                className="shape--84077"
                                                              />
                                                            </svg>
                                                            <div className="payoutContainer--a32db">
                                                              <div>
                                                                <div
                                                                  className="payout--c827b"
                                                                  data-role="payout"
                                                                >
                                                                  9:1
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="betspotTitle--d0907">
                                                              <span className>
                                                                B PAIR
                                                              </span>
                                                            </div>
                                                            <div className="chipContainer--9cdca" />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="fee--2c40e feeTop--cf80d"
                                                      style={{
                                                        marginTop: "0px",
                                                      }}
                                                    >
                                                      <div
                                                        className="tooltip--c9c35"
                                                        style={{
                                                          width: "254px",
                                                          height: "27.9121px",
                                                        }}
                                                      >
                                                        <div
                                                          className="fee--2df1e"
                                                          style={{
                                                            transform:
                                                              "scale(0.697802)",
                                                            width: "364px",
                                                            height: "40px",
                                                            fontSize: "24px",
                                                            animationDelay:
                                                              "0ms",
                                                            animationDuration:
                                                              "400ms",
                                                          }}
                                                        >
                                                          <div className="background--8e9c4">
                                                            <div className="feeBackground--9a910">
                                                              <div className="borderTop--6f369 borderTop--505aa" />
                                                              <div className="fill--982a1 fill--415e7" />
                                                              <div className="borderBottom--5a90d borderBottom--e5b20" />
                                                            </div>
                                                          </div>
                                                          <div className="statusText--379fc">
                                                            <div className="statusTextContainer--1edd5">
                                                              <span
                                                                className="textContainer--1a1ac"
                                                                style={{
                                                                  justifyContent:
                                                                    "center",
                                                                }}
                                                              >
                                                                <span className="text--68a0b placeholder--6cec6">
                                                                  20%
                                                                </span>
                                                                <span
                                                                  className="text--68a0b base--b286e"
                                                                  data-role="multiplierBase"
                                                                >
                                                                  20%
                                                                </span>
                                                                <span className="text--68a0b shadow--551ae">
                                                                  20%
                                                                </span>
                                                                <span className="text--68a0b textBackground--cded2 lightning--2aac5">
                                                                  20%
                                                                </span>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <h2>
                                                  <span>Golden Round</span>
                                                </h2>
                                                <p>
                                                  <span>
                                                    After your bets are
                                                    accepted, the Golden round
                                                    occurs. During the Golden
                                                    round five random{" "}
                                                    <strong>
                                                      Golden cards
                                                    </strong>{" "}
                                                    are drawn from a virtual
                                                    52-card pack. These Golden
                                                    cards are then given
                                                    randomly assigned{" "}
                                                    <strong>
                                                      Golden multipliers
                                                    </strong>{" "}
                                                    of 2x, 3x, 5x or 8x. If your
                                                    bet wins and contains card/s
                                                    that are among the selected
                                                    Golden cards, your payout
                                                    will be multiplied by the
                                                    Golden multiplier assigned
                                                    to the card/s.
                                                  </span>
                                                </p>
                                                <p>
                                                  <span>
                                                    You will have a chance to
                                                    win even more if two or more
                                                    Golden cards are dealt to
                                                    the same bet spot. Those
                                                    multipliers will be
                                                    multiplied and your payout
                                                    then will be multiplied by
                                                    the total multiplier! Your
                                                    initial bet will be added on
                                                    top of your winnings. If the
                                                    winning hand does not
                                                    contain the revealed Golden
                                                    card/s, then the regular
                                                    payout is applied. See
                                                    “Payouts” section for
                                                    detailed payout information.
                                                  </span>
                                                </p>
                                                <p>
                                                  <span>
                                                    After the Golden Round has
                                                    occurred, the dealer deals
                                                    two initial cards to the
                                                    Player and to the Banker.
                                                  </span>
                                                </p>
                                                <p>
                                                  <span>
                                                    If the Player and Banker
                                                    hold hands of equal value,
                                                    the round ends in a tie. The
                                                    Tie bet wins, and bets on
                                                    the Player and Banker push
                                                    (are returned). The fee for
                                                    the pushed Player/Banker
                                                    bets is not returned.
                                                  </span>
                                                </p>
                                                <p>
                                                  <span>
                                                    Each hand’s value is
                                                    calculated by dropping the
                                                    tens digit in a hand
                                                    otherwise worth 10 or more.
                                                    For example, a hand
                                                    consisting of a 7 and a 9 is
                                                    only worth 6 in Baccarat
                                                    (because 16-10=6).
                                                    Similarly, a face card plus
                                                    a 9 will be worth 9.
                                                  </span>
                                                </p>
                                                <p>
                                                  <span>
                                                    If the Player or the Banker
                                                    receives an initial two-card
                                                    hand worth 8 or a 9 (a
                                                    “natural” 8 or 9), no
                                                    additional cards will be
                                                    dealt to either hand.
                                                  </span>
                                                </p>
                                                <p>
                                                  <span>
                                                    If the Player and Banker
                                                    receive initial two-card
                                                    hands worth from 0 to 7, the
                                                    “Third Card Rule” is
                                                    consulted to determine if a
                                                    third card is to be dealt to
                                                    either hand or both hands.
                                                    The Player always goes
                                                    first.
                                                  </span>
                                                </p>
                                                <h2>
                                                  <span>Player’s Hand</span>
                                                </h2>
                                                <table className="playersHandTable--af069">
                                                  <thead>
                                                    <tr>
                                                      <th>
                                                        <span>
                                                          Player’s initial
                                                          two-card hand
                                                        </span>
                                                      </th>
                                                      <th />
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>0-1-2-3-4-5</td>
                                                      <td>
                                                        <span>
                                                          Player draws a third
                                                          card.
                                                        </span>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>6-7</td>
                                                      <td>
                                                        <span>
                                                          Player stands.
                                                        </span>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>
                                                        <span>
                                                          8–9 (a “natural”)
                                                        </span>
                                                      </td>
                                                      <td>
                                                        <span>
                                                          No third card to
                                                          either hand.
                                                        </span>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <h2>
                                                  <span>Banker’s Hand</span>
                                                </h2>
                                                <table className="bankersHandTableRedesigned--d2093">
                                                  <thead>
                                                    <tr className="tr--8ca10">
                                                      <th
                                                        rowSpan={2}
                                                        className="th--cdc06 initialTwoCardHand--e631f"
                                                        style={{
                                                          width: "104px",
                                                        }}
                                                      >
                                                        <span>
                                                          Banker’s initial
                                                          two-card hand
                                                        </span>
                                                      </th>
                                                      <th
                                                        colSpan={11}
                                                        className="th--cdc06"
                                                      >
                                                        <span>
                                                          Value of third card
                                                          drawn by Player
                                                        </span>
                                                      </th>
                                                    </tr>
                                                    <tr className="drawStandRow--1484f tr--8ca10">
                                                      <th className="th--cdc06">
                                                        <span>
                                                          No third card
                                                        </span>
                                                      </th>
                                                      <th className="th--cdc06">
                                                        0
                                                      </th>
                                                      <th className="th--cdc06">
                                                        1
                                                      </th>
                                                      <th className="th--cdc06">
                                                        2
                                                      </th>
                                                      <th className="th--cdc06">
                                                        3
                                                      </th>
                                                      <th className="th--cdc06">
                                                        4
                                                      </th>
                                                      <th className="th--cdc06">
                                                        5
                                                      </th>
                                                      <th className="th--cdc06">
                                                        6
                                                      </th>
                                                      <th className="th--cdc06">
                                                        7
                                                      </th>
                                                      <th className="th--cdc06">
                                                        8
                                                      </th>
                                                      <th className="th--cdc06">
                                                        9
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr className="drawStandRow--1484f tr--8ca10">
                                                      <td className="td--1dc44">
                                                        0
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                    </tr>
                                                    <tr className="drawStandRow--1484f tr--8ca10">
                                                      <td className="td--1dc44">
                                                        1
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                    </tr>
                                                    <tr className="drawStandRow--1484f tr--8ca10">
                                                      <td className="td--1dc44">
                                                        2
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                    </tr>
                                                    <tr className="drawStandRow--1484f tr--8ca10">
                                                      <td className="td--1dc44">
                                                        3
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                    </tr>
                                                    <tr className="drawStandRow--1484f tr--8ca10">
                                                      <td className="td--1dc44">
                                                        4
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                    </tr>
                                                    <tr className="drawStandRow--1484f tr--8ca10">
                                                      <td className="td--1dc44">
                                                        5
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                    </tr>
                                                    <tr className="drawStandRow--1484f tr--8ca10">
                                                      <td className="td--1dc44">
                                                        6
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44 cellHighlight--44708 redesigned--6dd19">
                                                        <span>D</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                    </tr>
                                                    <tr className="drawStandRow--1484f tr--8ca10">
                                                      <td className="td--1dc44">
                                                        7
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                    </tr>
                                                    <tr className="drawStandRow--1484f tr--8ca10">
                                                      <td className="td--1dc44">
                                                        8
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                    </tr>
                                                    <tr className="drawStandRow--1484f tr--8ca10">
                                                      <td className="td--1dc44">
                                                        9
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                      <td className="td--1dc44">
                                                        <span>S</span>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <p>
                                                  <span>
                                                    D — Draw; S — Stand
                                                  </span>
                                                </p>
                                                <p>
                                                  <span>
                                                    If the Player’s hand stands
                                                    on a 6 or 7, then a Banker’s
                                                    hand totalling 3, 4 or 5
                                                    must draw, while a Banker’s
                                                    hand totalling 6 must stand.
                                                  </span>
                                                </p>
                                                <p>
                                                  <span>
                                                    Whoever gets the hand
                                                    closest to a total of 9
                                                    wins.
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div
                                        data-role="help-chapter"
                                        data-chapter-id="Sidebets"
                                        className="helpChapter--73696"
                                      >
                                        <a
                                          onClick={() => handleToggleOpen(3)}
                                          className="title--bfec4"
                                        >
                                          <span>Side Bets</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 3
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 3 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <table className="twoColumnTable--146ac paymentsInfoTable--771a8">
                                                <thead>
                                                  <tr>
                                                    <th>
                                                      <span>Side Bet</span>
                                                    </th>
                                                    <th>
                                                      <span>Description</span>
                                                    </th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <span>P Pair</span>
                                                    </td>
                                                    <td>
                                                      <span>
                                                        Pays if the first two
                                                        cards dealt to the
                                                        Player constitute a
                                                        pair.
                                                      </span>
                                                      <br />
                                                      <span>
                                                        The side bet cannot be
                                                        higher than 20% of the
                                                        combined main bet if 312
                                                        cards are dealt.
                                                      </span>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <span>B Pair</span>
                                                    </td>
                                                    <td>
                                                      <span>
                                                        Pays if the first two
                                                        cards dealt to the
                                                        Banker constitute a
                                                        pair.
                                                      </span>
                                                      <br />
                                                      <span>
                                                        The side bet cannot be
                                                        higher than 20% of the
                                                        combined main bet if 312
                                                        cards are dealt.
                                                      </span>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <span>
                                                Note - the table above contains
                                                information about the number of
                                                dealt cards, after which the
                                                corresponding side bet will not
                                                exceed the main bet by the
                                                specified percentage.
                                              </span>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div
                                        data-role="help-chapter"
                                        data-chapter-id="PlaceBets"
                                        className="helpChapter--73696"
                                      >
                                        <a
                                          onClick={() => handleToggleOpen(4)}
                                          className="title--bfec4"
                                        >
                                          <span>Place Bets</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 4
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 4 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <p>
                                                <span>
                                                  The BET LIMITS panel shows the
                                                  minimum and maximum allowed
                                                  bet limits at the table, which
                                                  may change from time to time.
                                                  Open the Bet Limits to check
                                                  your current limits.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d"
                                              >
                                                <div className="tableInfo--03d67 sm--b6f1d">
                                                  <span
                                                    className="tableName--ed38c tableName--e8c8d md--faf59"
                                                    data-role="table-name"
                                                  >
                                                    Golden Wealth Baccarat
                                                  </span>
                                                  <div
                                                    className="tableLimits--97b4b tableLimits--7be0c"
                                                    data-role="table-limits"
                                                  >
                                                    ⁦⁦⁦₹⁩100⁩ – 100,000⁩
                                                  </div>
                                                </div>
                                              </div>
                                              <p>
                                                <span>
                                                  To participate in the game,
                                                  you must have sufficient funds
                                                  to cover your bets. You can
                                                  see your current BALANCE on
                                                  your screen.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d"
                                              >
                                                <div className="mobileBalance--18a5d">
                                                  <div
                                                    className="balance--ede09 container--cf1f7 md--8e6c2 portrait--304f9"
                                                    data-role="balance-label-one-line"
                                                  >
                                                    <span
                                                      className="title--2a257"
                                                      data-role="balance-title"
                                                    >
                                                      Balance
                                                    </span>
                                                    <span className="amount--58e65">
                                                      <span
                                                        className="value--58a54"
                                                        data-role="balance-value"
                                                        data-balance-visible="⁦⁦₹⁩100,000⁩"
                                                        data-currency-symbol="₹"
                                                        data-fs-element="Visible balance"
                                                        data-fs-properties-schema='{
                        "data-balance-visible": "real",
                        "data-currency-symbol": "string",
                    }'
                                                      >
                                                        ⁦⁦₹⁩100,000⁩
                                                      </span>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <p>
                                                <span>
                                                  In the Immersive view, the
                                                  TIMER informs you of the
                                                  duration of betting time.
                                                  After it expires, betting is
                                                  closed and no more bets are
                                                  accepted.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d"
                                              >
                                                <div
                                                  style={{
                                                    width: "5em",
                                                    height: "5em",
                                                  }}
                                                >
                                                  <div className="wrapper--8b249">
                                                    <div
                                                      data-role="circle-timer"
                                                      data-timer-version={1}
                                                      className="container--6cb86 commonUiElement"
                                                    >
                                                      <div
                                                        className="timerCircleContainer--4935d"
                                                        data-role="timer-circle"
                                                      >
                                                        <canvas
                                                          width={60}
                                                          height={60}
                                                          style={{
                                                            display: "block",
                                                            width: "49.98px",
                                                            height: "49.98px",
                                                          }}
                                                        />
                                                      </div>
                                                      <div
                                                        className="contentWrapper--db941"
                                                        data-role="timer-content"
                                                      >
                                                        <canvas
                                                          width={60}
                                                          height={60}
                                                          style={{
                                                            display: "block",
                                                            width: "49.98px",
                                                            height: "49.98px",
                                                          }}
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <p>
                                                <span>
                                                  The CHIP DISPLAY allows you to
                                                  select the value of each chip
                                                  you wish to bet. Only chips of
                                                  denominations that can be
                                                  covered by your current
                                                  balance will be enabled.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d"
                                              >
                                                <div className="chipStackContainer--2f7e7 chipStackRevolver--5d89e sm--6e7ab">
                                                  <div className="revolverWrapper--af495">
                                                    <div
                                                      data-role="chip-stack"
                                                      className="revolver--30d24 commonUiElement open--35bc8 up--a4695"
                                                    >
                                                      <ul
                                                        className="items--4189d"
                                                        data-role="revolver-item-list"
                                                        style={{
                                                          top: "calc(var(--size, 10px) * -6.85)",
                                                          left: "calc(var(--size, 10px) * -5.3)",
                                                          width:
                                                            "calc(var(--size, 10px) * 15)",
                                                          height:
                                                            "calc(var(--size, 10px) * 15)",
                                                          "-chipTransitionDuration":
                                                            "0ms",
                                                        }}
                                                      >
                                                        <li
                                                          className="item--9e3ac chip--5e586"
                                                          data-role="revolver-chip-item"
                                                          style={{
                                                            top: "calc(var(--size, 10px) * 5.7)",
                                                            left: "calc(var(--size, 10px) * 5.7)",
                                                            width:
                                                              "calc(var(--size, 10px) * 3.6)",
                                                            height:
                                                              "calc(var(--size, 10px) * 3.6)",
                                                            transform:
                                                              "translate3d(calc(var(--size, 10px) * -7.3500), calc(var(--size, 10px) * 1.4927), 0)",
                                                          }}
                                                        >
                                                          <div
                                                            className="chip--29b81 cover--6df8f"
                                                            data-role="chip"
                                                            data-value={100}
                                                          >
                                                            <svg
                                                              viewBox="0 0 78 78"
                                                              className="graphics--22cbe"
                                                              data-role="default-svg"
                                                              style={{
                                                                color:
                                                                  "rgb(89, 89, 89)",
                                                              }}
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
                                                        </li>
                                                        <li
                                                          className="item--9e3ac chip--5e586"
                                                          data-role="revolver-chip-item"
                                                          style={{
                                                            top: "calc(var(--size, 10px) * 5.7)",
                                                            left: "calc(var(--size, 10px) * 5.7)",
                                                            width:
                                                              "calc(var(--size, 10px) * 3.6)",
                                                            height:
                                                              "calc(var(--size, 10px) * 3.6)",
                                                            transform:
                                                              "translate3d(calc(var(--size, 10px) * -6.5525), calc(var(--size, 10px) * -3.6489), 0)",
                                                          }}
                                                        >
                                                          <div
                                                            className="chip--29b81 cover--6df8f"
                                                            data-role="chip"
                                                            data-value={200}
                                                          >
                                                            <svg
                                                              viewBox="0 0 78 78"
                                                              className="graphics--22cbe"
                                                              data-role="default-svg"
                                                              style={{
                                                                color:
                                                                  "rgb(255, 130, 214)",
                                                              }}
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
                                                                200
                                                              </text>
                                                            </svg>
                                                          </div>
                                                        </li>
                                                        <li
                                                          className="item--9e3ac chip--5e586"
                                                          data-role="revolver-chip-item"
                                                          style={{
                                                            top: "calc(var(--size, 10px) * 5.7)",
                                                            left: "calc(var(--size, 10px) * 5.7)",
                                                            width:
                                                              "calc(var(--size, 10px) * 3.6)",
                                                            height:
                                                              "calc(var(--size, 10px) * 3.6)",
                                                            transform:
                                                              "translate3d(calc(var(--size, 10px) * -2.6015), calc(var(--size, 10px) * -7.0343), 0)",
                                                          }}
                                                        >
                                                          <div
                                                            className="chip--29b81 cover--6df8f"
                                                            data-role="chip"
                                                            data-value={500}
                                                          >
                                                            <svg
                                                              viewBox="0 0 78 78"
                                                              className="graphics--22cbe"
                                                              data-role="default-svg"
                                                              style={{
                                                                color:
                                                                  "rgb(206, 29, 0)",
                                                              }}
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
                                                                500
                                                              </text>
                                                            </svg>
                                                          </div>
                                                        </li>
                                                        <li
                                                          className="item--9e3ac chip--5e586"
                                                          data-role="revolver-chip-item"
                                                          style={{
                                                            top: "calc(var(--size, 10px) * 5.7)",
                                                            left: "calc(var(--size, 10px) * 5.7)",
                                                            width:
                                                              "calc(var(--size, 10px) * 3.6)",
                                                            height:
                                                              "calc(var(--size, 10px) * 3.6)",
                                                            transform:
                                                              "translate3d(calc(var(--size, 10px) * 2.6015), calc(var(--size, 10px) * -7.0343), 0)",
                                                          }}
                                                        >
                                                          <div
                                                            className="chip--29b81 cover--6df8f"
                                                            data-role="chip"
                                                            data-value={2500}
                                                          >
                                                            <svg
                                                              viewBox="0 0 78 78"
                                                              className="graphics--22cbe"
                                                              data-role="default-svg"
                                                              style={{
                                                                color:
                                                                  "rgb(5, 174, 41)",
                                                              }}
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
                                                                fontSize={18}
                                                                dy={5}
                                                                data-role="chip-value"
                                                              >
                                                                2500
                                                              </text>
                                                            </svg>
                                                          </div>
                                                        </li>
                                                        <li
                                                          className="item--9e3ac chip--5e586"
                                                          data-role="revolver-chip-item"
                                                          style={{
                                                            top: "calc(var(--size, 10px) * 5.7)",
                                                            left: "calc(var(--size, 10px) * 5.7)",
                                                            width:
                                                              "calc(var(--size, 10px) * 3.6)",
                                                            height:
                                                              "calc(var(--size, 10px) * 3.6)",
                                                            transform:
                                                              "translate3d(calc(var(--size, 10px) * 6.5525), calc(var(--size, 10px) * -3.6489), 0)",
                                                          }}
                                                        >
                                                          <div
                                                            className="chip--29b81 cover--6df8f"
                                                            data-role="chip"
                                                            data-value={10000}
                                                          >
                                                            <svg
                                                              viewBox="0 0 78 78"
                                                              className="graphics--22cbe"
                                                              data-role="default-svg"
                                                              style={{
                                                                color:
                                                                  "rgb(26, 26, 26)",
                                                              }}
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
                                                                10k
                                                              </text>
                                                            </svg>
                                                          </div>
                                                        </li>
                                                        <li
                                                          className="item--9e3ac chip--5e586"
                                                          data-role="revolver-chip-item"
                                                          style={{
                                                            top: "calc(var(--size, 10px) * 5.7)",
                                                            left: "calc(var(--size, 10px) * 5.7)",
                                                            width:
                                                              "calc(var(--size, 10px) * 3.6)",
                                                            height:
                                                              "calc(var(--size, 10px) * 3.6)",
                                                            transform:
                                                              "translate3d(calc(var(--size, 10px) * 7.3500), calc(var(--size, 10px) * 1.4927), 0)",
                                                          }}
                                                        >
                                                          <div
                                                            className="chip--29b81 cover--6df8f"
                                                            data-role="chip"
                                                            data-value={50000}
                                                          >
                                                            <svg
                                                              viewBox="0 0 78 78"
                                                              className="graphics--22cbe"
                                                              data-role="default-svg"
                                                              style={{
                                                                color:
                                                                  "rgb(133, 72, 176)",
                                                              }}
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
                                                                50k
                                                              </text>
                                                            </svg>
                                                          </div>
                                                        </li>
                                                      </ul>
                                                      <div
                                                        data-role="chip-stack-toggle-container"
                                                        className="toggleContainer--3bdf3 up--4547e open--c66f5"
                                                      >
                                                        <div
                                                          data-role="chip-stack-toggle"
                                                          className="toggle--3ad8c"
                                                        >
                                                          <div
                                                            className="border--ddab7 revolver--55b2d open--bc0a8"
                                                            data-role="selected-chip-border"
                                                          >
                                                            <svg
                                                              viewBox="0 0 52 52"
                                                              fill="none"
                                                              xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  id="ar7a"
                                                                  x1={0}
                                                                  y1={52}
                                                                  x2={52}
                                                                  y2={0}
                                                                  gradientUnits="userSpaceOnUse"
                                                                >
                                                                  <stop
                                                                    offset="0.262627"
                                                                    stopColor="#F7EAA3"
                                                                  />
                                                                  <stop
                                                                    offset="0.505208"
                                                                    stopColor="#C29740"
                                                                  />
                                                                  <stop
                                                                    offset="0.760417"
                                                                    stopColor="#FEF8B9"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
                                                              <circle
                                                                cx={26}
                                                                cy={26}
                                                                r={25}
                                                                stroke="url(#ar7a)"
                                                                strokeWidth={2}
                                                              />
                                                            </svg>
                                                          </div>
                                                          <div
                                                            data-role="selected-chip"
                                                            className="toggleChip--30494 shadow--c66f4"
                                                          >
                                                            <div
                                                              className="chip--29b81 cover--6df8f"
                                                              data-role="chip"
                                                              data-value={500}
                                                            >
                                                              <svg
                                                                viewBox="0 0 78 78"
                                                                className="graphics--22cbe"
                                                                data-role="default-svg"
                                                                style={{
                                                                  color:
                                                                    "rgb(206, 29, 0)",
                                                                }}
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
                                                                  500
                                                                </text>
                                                              </svg>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <p>
                                                <span>
                                                  Once you have selected a chip,
                                                  place your bet by simply
                                                  clicking/tapping the
                                                  appropriate bet spot on the
                                                  game table. Each time you
                                                  click/tap the bet spot, the
                                                  amount of your bet increases
                                                  by the value of the selected
                                                  chip or up to the maximum
                                                  limit for the type of bet you
                                                  have selected. Once you have
                                                  bet the maximum limit, no
                                                  additional funds will be
                                                  accepted for that bet, and a
                                                  message will appear above your
                                                  bet to notify you that you
                                                  have bet the maximum.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  NOTE: Please do not minimise
                                                  your browser or open any other
                                                  tab in your browser while
                                                  betting time remains and you
                                                  have placed bets on the table.
                                                  Such actions may be
                                                  interpreted as leaving the
                                                  game, and your bets will
                                                  therefore be declined for that
                                                  particular game round.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  The REPEAT button allows you
                                                  to repeat all bets from the
                                                  previous game round. This
                                                  button is available only
                                                  before the first chip is
                                                  placed.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d"
                                              >
                                                <button
                                                  className="button--673ce xxxs--2d4a2 roundingBoth--6d5e6 buttonRoot--3bd4d"
                                                  data-type="secondary"
                                                  data-role="repeat-button"
                                                  data-state="Default"
                                                >
                                                  <span
                                                    className="roundingBoth--2a8e7 buttonContent--2a2d4 xxxs--a7f61"
                                                    data-role="button-content"
                                                  >
                                                    <div
                                                      className="buttonBase--73d7d"
                                                      data-role="base-border"
                                                      style={{
                                                        padding:
                                                          "calc(var(--rem-migration-size, 10px) * 0.08)",
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
                                                            style={{
                                                              height: "100%",
                                                            }}
                                                          >
                                                            <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              viewBox="0 0 24 24"
                                                              className="icon--8dcd0"
                                                              height="100%"
                                                              y="0%"
                                                            >
                                                              <path d="M21.5 11.5H20a8.5 8.5 0 1 0-8.5 8.5 8.25 8.25 0 0 0 2.55-.4l-.6-1.9A6.499 6.499 0 1 1 18 11.5h-2l3 5 3-5h-.5Z" />
                                                            </svg>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </div>
                                                    <div className="badge--81159" />
                                                  </span>
                                                </button>
                                              </div>
                                              <p>
                                                <span>
                                                  The DOUBLE (x2) button becomes
                                                  available after you have
                                                  placed any bet. Each click/tap
                                                  doubles all your bets up to
                                                  the maximum limit. Note that
                                                  you must have a sufficient
                                                  account balance to double ALL
                                                  your placed bets.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d"
                                              >
                                                <button
                                                  className="button--673ce xxxs--2d4a2 roundingBoth--6d5e6 buttonRoot--3bd4d"
                                                  data-type="secondary"
                                                  data-role="double-button"
                                                  data-state="Default"
                                                >
                                                  <span
                                                    className="roundingBoth--2a8e7 buttonContent--2a2d4 xxxs--a7f61"
                                                    data-role="button-content"
                                                  >
                                                    <div
                                                      className="buttonBase--73d7d"
                                                      data-role="base-border"
                                                      style={{
                                                        padding:
                                                          "calc(var(--rem-migration-size, 10px) * 0.08)",
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
                                                            style={{
                                                              height: "100%",
                                                            }}
                                                          >
                                                            <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              viewBox="0 0 24 24"
                                                              className="icon--8dcd0"
                                                              data-role="double-svg"
                                                              height="100%"
                                                              y="0%"
                                                            >
                                                              <path d="M12.017 18.881v-1.49l4.63-4.81c.458-.477.841-.92 1.148-1.275l.082-.095c.287-.344.529-.724.72-1.13a2.57 2.57 0 0 0 .25-1.14 2.12 2.12 0 0 0-.33-1.18 2.17 2.17 0 0 0-.87-.77 2.83 2.83 0 0 0-1.25-.27 2.67 2.67 0 0 0-1.29.3 2.21 2.21 0 0 0-.84.85 2.67 2.67 0 0 0-.29 1.29h-2a4.14 4.14 0 0 1 .58-2.19 3.88 3.88 0 0 1 1.58-1.45 4.85 4.85 0 0 1 2.28-.52 4.84 4.84 0 0 1 2.27.51 3.87 3.87 0 0 1 1.55 1.39c.373.6.564 1.294.55 2a4.107 4.107 0 0 1-.28 1.5 6.777 6.777 0 0 1-1 1.62c-.473.593-1.14 1.313-2 2.16l-2.72 2.85v.1h6.16v1.77l-8.93-.02Zm-4.654-8.02L5.061 8.557 4 9.618l2.303 2.303-2.3 2.3 1.06 1.06 2.3-2.3 2.294 2.294 1.06-1.06-2.293-2.294 2.296-2.296-1.06-1.06-2.297 2.295Z" />
                                                            </svg>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </div>
                                                    <div className="badge--81159" />
                                                  </span>
                                                </button>
                                              </div>
                                              <p>
                                                <span>
                                                  The UNDO button removes the
                                                  last bet you placed.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d"
                                              >
                                                <div
                                                  style={{
                                                    position: "relative",
                                                  }}
                                                >
                                                  <button
                                                    className="button--673ce xxxs--2d4a2 roundingBoth--6d5e6 buttonRoot--3bd4d"
                                                    data-type="secondary"
                                                    data-role="undo-button"
                                                    data-state="Default"
                                                  >
                                                    <span
                                                      className="roundingBoth--2a8e7 buttonContent--2a2d4 xxxs--a7f61"
                                                      data-role="button-content"
                                                    >
                                                      <div
                                                        className="buttonBase--73d7d"
                                                        data-role="base-border"
                                                        style={{
                                                          padding:
                                                            "calc(var(--rem-migration-size, 10px) * 0.08)",
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
                                                              style={{
                                                                height: "100%",
                                                              }}
                                                            >
                                                              <svg
                                                                xmlns="http://wwwUndoSVG.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                className="icon--8dcd0"
                                                                height="100%"
                                                                y="0%"
                                                              >
                                                                <path d="M13 6H9V4L4 7l5 3V8h4a4.5 4.5 0 1 1 0 9H5v2h8a6.5 6.5 0 1 0 0-13Z" />
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
                                              <p>
                                                <span>
                                                  You can click/tap the UNDO
                                                  button repeatedly to remove
                                                  bets, one by one, in the
                                                  reverse order in which they
                                                  were placed. You can clear all
                                                  your bets by holding the UNDO
                                                  button.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  The TOTAL BET indicator
                                                  displays the total amount of
                                                  all bets placed in the current
                                                  round.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d"
                                              >
                                                <div className="mobile--b26d3">
                                                  <div className="totalBet--ab8a8 container--cf1f7 md--8e6c2">
                                                    <span
                                                      className="title--2a257"
                                                      data-role="total-bet-title"
                                                    >
                                                      Total Bet
                                                    </span>
                                                    <span className="amount--58e65">
                                                      <span
                                                        className="value--58a54"
                                                        data-role="total-bet-value"
                                                      >
                                                        ⁦⁦₹⁩500⁩
                                                      </span>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div
                                        data-role="help-chapter"
                                        data-chapter-id="Payouts"
                                        className="helpChapter--73696"
                                      >
                                        <a
                                          onClick={() => handleToggleOpen(5)}
                                          className="title--bfec4"
                                        >
                                          <span>Payouts</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 5
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 5 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <p>
                                                <span>
                                                  Your payout depends on the
                                                  type of bet placed.
                                                </span>
                                              </p>
                                              <table className="twoColumnTable--146ac paymentsInfoTable--771a8 payoutsTable--41800">
                                                <tbody>
                                                  <tr>
                                                    <th>
                                                      <span>BET</span>
                                                    </th>
                                                    <th>
                                                      <span>PAYS</span>
                                                    </th>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <span>Player</span>
                                                    </td>
                                                    <td>
                                                      <span>1–512:1</span>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <span>Banker*</span>
                                                    </td>
                                                    <td>
                                                      <span>1–512:1</span>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <span>Tie</span>
                                                    </td>
                                                    <td>
                                                      <span>
                                                        5:1 (Up to
                                                        ⁦⁦₹⁩50,000,000⁩)
                                                      </span>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <span>P Pair</span>
                                                    </td>
                                                    <td>
                                                      <span>9–576:1</span>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <span>B Pair</span>
                                                    </td>
                                                    <td>
                                                      <span>9–576:1</span>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <p>
                                                <span>
                                                  *95% of your Banker bet is
                                                  returned if Banker wins
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  Maximum payout for all your
                                                  winnings within a game round
                                                  is limited. For details, see
                                                  the Bet Limits table.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  Please note that any
                                                  malfunction voids the game
                                                  round and all eventual payouts
                                                  for the round. Bets will be
                                                  returned.
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div
                                        data-role="help-chapter"
                                        data-chapter-id="ReturnToPlayer"
                                        className="helpChapter--73696"
                                      >
                                        <a
                                          onClick={() => handleToggleOpen(6)}
                                          className="title--bfec4"
                                        >
                                          <span>Return to Player</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 6
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 6 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <p>
                                                <span>
                                                  The optimal Return to Player
                                                  (RTP) percentage for Golden
                                                  Wealth Baccarat is 98.85%.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  The following table displays
                                                  the return-to-player
                                                  percentage on the different
                                                  optional side bets.
                                                </span>
                                              </p>
                                              <table className="returnTable--19862 paymentsInfoTable--771a8 helpRedesigned--e8afd">
                                                <thead>
                                                  <tr>
                                                    <th>
                                                      <span>Bet</span>
                                                    </th>
                                                    <th>
                                                      <span>
                                                        Return to Player
                                                      </span>
                                                    </th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <span>Player</span>
                                                    </td>
                                                    <td>
                                                      <span>98.85%</span>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <span>Banker</span>
                                                    </td>
                                                    <td>
                                                      <span>98.69%</span>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <span>Tie</span>
                                                    </td>
                                                    <td>
                                                      <span>93.36%</span>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <span>B Pair</span>
                                                    </td>
                                                    <td>
                                                      <span>86%</span>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <span>P Pair</span>
                                                    </td>
                                                    <td>
                                                      <span>86%</span>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <p>
                                                <span>
                                                  RTP is based on a maximum bet
                                                  placed on an individual bet
                                                  spot.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  The probability for the top
                                                  prize, matching all 6 cards
                                                  for a Tie, is one in
                                                  452,656,878,803.
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div
                                        data-role="help-chapter"
                                        data-chapter-id="BetStatistics"
                                        className="helpChapter--73696"
                                      >
                                        <a
                                          onClick={() => handleToggleOpen(7)}
                                          className="title--bfec4"
                                        >
                                          <span>Bet Statistics</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 7
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 7 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <p>
                                                <span>
                                                  The total wager placed on a
                                                  particular bet spot is shown
                                                  as well as the number of
                                                  players who placed bets on the
                                                  spot.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  The percentages of all bets
                                                  placed on the Banker, the
                                                  Player or on a Tie are also
                                                  shown.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  You can choose to hide these
                                                  statistics under Game
                                                  Settings.
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div
                                        data-role="help-chapter"
                                        data-chapter-id="ScoreCards"
                                        className="helpChapter--73696"
                                      >
                                        <a
                                          onClick={() => handleToggleOpen(8)}
                                          className="title--bfec4"
                                        >
                                          <span>Scorecards</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 8
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 8 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <p>
                                                <span>
                                                  Baccarat streaks and trends
                                                  for either the Player or the
                                                  Banker using a particular shoe
                                                  are recorded in various
                                                  scoreboards. These pictorial
                                                  representations of past round
                                                  results and other statistics
                                                  regarding the current shoe may
                                                  be of help to you in
                                                  predicting the results of
                                                  future rounds.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  The BIG ROAD displays the
                                                  results of each past round,
                                                  while the{" "}
                                                  <strong>Big Eye Road</strong>,{" "}
                                                  <strong>Small Road</strong>{" "}
                                                  and{" "}
                                                  <strong>
                                                    Cockroach Road
                                                  </strong>{" "}
                                                  display patterns derived from
                                                  the BIG ROAD.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  Roads and shoe statistics are
                                                  always cleared when a new shoe
                                                  is introduced.
                                                </span>
                                              </p>
                                              <br />
                                              <h2>
                                                <span>BIG ROAD</span>
                                              </h2>
                                              <p>
                                                <span>
                                                  In the BIG ROAD, the result of
                                                  the earliest round is recorded
                                                  in the upper left corner.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  A new column is created each
                                                  time the Banker’s winning
                                                  streak changes in favour of
                                                  the Player, or vice versa.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  A cell outlined in red
                                                  indicates a Banker win. A cell
                                                  outlined in blue indicates a
                                                  Player win.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  A cell for the game result
                                                  that was impacted by the
                                                  Golden multiplier is circled
                                                  in gold.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  A Tie is recorded as a green
                                                  line through the cell for the
                                                  preceding round. If the first
                                                  round is a Tie, the green line
                                                  will appear first, and the red
                                                  or blue outline will appear
                                                  around the line once the
                                                  Player or Banker wins a round.
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  If there are two or more
                                                  consecutive tie rounds, the
                                                  number on line will show the
                                                  number of ties.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d bigRoad--50c74"
                                              >
                                                <svg viewBox="0 0 50 6">
                                                  <svg
                                                    className="svg--eb430"
                                                    viewBox="0 0 50 6"
                                                  >
                                                    <rect
                                                      x={0}
                                                      y={0}
                                                      fill="#ffffff"
                                                      width={50}
                                                      height={6}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={50}
                                                      y1="0.025"
                                                      y2="0.025"
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={50}
                                                      y1={1}
                                                      y2={1}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={50}
                                                      y1={2}
                                                      y2={2}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={50}
                                                      y1={3}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={50}
                                                      y1={4}
                                                      y2={4}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={50}
                                                      y1={5}
                                                      y2={5}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={50}
                                                      y1="5.975"
                                                      y2="5.975"
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1="0.025"
                                                      x2="0.025"
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={1}
                                                      x2={1}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={2}
                                                      x2={2}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={3}
                                                      x2={3}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={4}
                                                      x2={4}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={5}
                                                      x2={5}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={6}
                                                      x2={6}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={7}
                                                      x2={7}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={8}
                                                      x2={8}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={9}
                                                      x2={9}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={10}
                                                      x2={10}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={11}
                                                      x2={11}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={12}
                                                      x2={12}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={13}
                                                      x2={13}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={14}
                                                      x2={14}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={15}
                                                      x2={15}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={16}
                                                      x2={16}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={17}
                                                      x2={17}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={18}
                                                      x2={18}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={19}
                                                      x2={19}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={20}
                                                      x2={20}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={21}
                                                      x2={21}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={22}
                                                      x2={22}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={23}
                                                      x2={23}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={24}
                                                      x2={24}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={25}
                                                      x2={25}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={26}
                                                      x2={26}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={27}
                                                      x2={27}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={28}
                                                      x2={28}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={29}
                                                      x2={29}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={30}
                                                      x2={30}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={31}
                                                      x2={31}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={32}
                                                      x2={32}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={33}
                                                      x2={33}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={34}
                                                      x2={34}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={35}
                                                      x2={35}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={36}
                                                      x2={36}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={37}
                                                      x2={37}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={38}
                                                      x2={38}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={39}
                                                      x2={39}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={40}
                                                      x2={40}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={41}
                                                      x2={41}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={42}
                                                      x2={42}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={43}
                                                      x2={43}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={44}
                                                      x2={44}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={45}
                                                      x2={45}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={46}
                                                      x2={46}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={47}
                                                      x2={47}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={48}
                                                      x2={48}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={49}
                                                      x2={49}
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1="49.975"
                                                      x2="49.975"
                                                      y1={0}
                                                      y2={6}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="0.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={0}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player BankerPlayer"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M283 767 c-36 -12 -42 -27 -18 -47 9 -7 15 -29 15 -51 0 -32 4 -39
    19 -39 11 0 23 5 26 10 8 12 122 13 129 1 3 -4 19 -11 36 -15 38 -7 127 -94
    136 -133 4 -15 11 -33 16 -40 5 -6 8 -38 7 -70 l-3 -58 58 -8 c32 -5 61 -5 65
    -2 10 11 6 137 -7 182 -34 121 -137 227 -259 266 -57 19 -169 20 -220 4z
"
                                                                fill="#185CC6"
                                                              />
                                                              <path
                                                                d="
    M0 398 c1 -187 107 -329 291 -387 47 -15 154 -14 196 1 32 12 43 31
    24 43 -6 3 -13 26 -17 50 -6 43 -24 59 -39 35 -8 -12 -122 -13 -129 -1 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -66 10 l-63 7 0 -73z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="1.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={1}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker BankerPlayer"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M283 767 c-36 -12 -42 -27 -18 -47 9 -7 15 -29 15 -51 0 -32 4 -39
    19 -39 11 0 23 5 26 10 8 12 122 13 129 1 3 -4 19 -11 36 -15 38 -7 127 -94
    136 -133 4 -15 11 -33 16 -40 5 -6 8 -38 7 -70 l-3 -58 58 -8 c32 -5 61 -5 65
    -2 10 11 6 137 -7 182 -34 121 -137 227 -259 266 -57 19 -169 20 -220 4z
"
                                                                fill="#C52123"
                                                              />
                                                              <path
                                                                d="
    M0 398 c1 -187 107 -329 291 -387 47 -15 154 -14 196 1 32 12 43 31
    24 43 -6 3 -13 26 -17 50 -6 43 -24 59 -39 35 -8 -12 -122 -13 -129 -1 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -66 10 l-63 7 0 -73z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="2.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={2}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="3.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={3}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="4.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={4}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-78 -28 -110 -48 -161 -98 -123 -124 -148 -292 -67 -466
    21 -44 109 -132 153 -153 102 -47 215 -61 287 -35 32 12 45 40 23 53 -5 3 -10
    22 -10 41 0 37 -22 56 -43 35 -13 -13 -123 -15 -131 -2 -3 4 -19 11 -36 15
    -40 8 -128 96 -136 136 -4 17 -11 33 -15 36 -12 7 -12 121 0 128 4 3 11 19 15
    36 8 40 96 128 136 136 17 4 33 11 36 15 3 5 32 9 64 9 32 0 61 -4 64 -9 3 -4
    19 -11 36 -15 38 -7 127 -94 136 -133 4 -15 11 -33 16 -40 5 -6 8 -37 7 -67
    -1 -31 -1 -57 2 -60 2 -2 32 -6 67 -10 l62 -7 0 73 c0 115 -37 206 -114 284
    -52 52 -84 71 -166 98 -55 19 -171 19 -225 0z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="5.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={5}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="6.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={6}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="7.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={7}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="8.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={8}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="9.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={9}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="10.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={10}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="11.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={11}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="12.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={12}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="13.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={13}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="14.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={14}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player Tie"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#51A548"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="15.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={15}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="16.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={16}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="17.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={17}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="18.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={18}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="19.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={19}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="20.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={20}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-78 -28 -110 -48 -161 -98 -123 -124 -148 -292 -67 -466
    21 -44 109 -132 153 -153 102 -47 215 -61 287 -35 32 12 45 40 23 53 -5 3 -10
    22 -10 41 0 37 -22 56 -43 35 -13 -13 -123 -15 -131 -2 -3 4 -19 11 -36 15
    -40 8 -128 96 -136 136 -4 17 -11 33 -15 36 -12 7 -12 121 0 128 4 3 11 19 15
    36 8 40 96 128 136 136 17 4 33 11 36 15 3 5 32 9 64 9 32 0 61 -4 64 -9 3 -4
    19 -11 36 -15 38 -7 127 -94 136 -133 4 -15 11 -33 16 -40 5 -6 8 -37 7 -67
    -1 -31 -1 -57 2 -60 2 -2 32 -6 67 -10 l62 -7 0 73 c0 115 -37 206 -114 284
    -52 52 -84 71 -166 98 -55 19 -171 19 -225 0z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="21.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={21}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="22.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={22}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-78 -28 -110 -48 -161 -98 -123 -124 -148 -292 -67 -466
    21 -44 109 -132 153 -153 102 -47 215 -61 287 -35 32 12 45 40 23 53 -5 3 -10
    22 -10 41 0 37 -22 56 -43 35 -13 -13 -123 -15 -131 -2 -3 4 -19 11 -36 15
    -40 8 -128 96 -136 136 -4 17 -11 33 -15 36 -12 7 -12 121 0 128 4 3 11 19 15
    36 8 40 96 128 136 136 17 4 33 11 36 15 3 5 32 9 64 9 32 0 61 -4 64 -9 3 -4
    19 -11 36 -15 38 -7 127 -94 136 -133 4 -15 11 -33 16 -40 5 -6 8 -37 7 -67
    -1 -31 -1 -57 2 -60 2 -2 32 -6 67 -10 l62 -7 0 73 c0 115 -37 206 -114 284
    -52 52 -84 71 -166 98 -55 19 -171 19 -225 0z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="23.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={23}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-78 -28 -110 -48 -161 -98 -123 -124 -148 -292 -67 -466
    21 -44 109 -132 153 -153 102 -47 215 -61 287 -35 32 12 45 40 23 53 -5 3 -10
    22 -10 41 0 37 -22 56 -43 35 -13 -13 -123 -15 -131 -2 -3 4 -19 11 -36 15
    -40 8 -128 96 -136 136 -4 17 -11 33 -15 36 -12 7 -12 121 0 128 4 3 11 19 15
    36 8 40 96 128 136 136 17 4 33 11 36 15 3 5 32 9 64 9 32 0 61 -4 64 -9 3 -4
    19 -11 36 -15 38 -7 127 -94 136 -133 4 -15 11 -33 16 -40 5 -6 8 -37 7 -67
    -1 -31 -1 -57 2 -60 2 -2 32 -6 67 -10 l62 -7 0 73 c0 115 -37 206 -114 284
    -52 52 -84 71 -166 98 -55 19 -171 19 -225 0z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="24.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={24}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="25.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={25}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="26.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={26}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="27.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={27}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="28.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={28}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="29.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={29}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="30.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={30}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="31.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={31}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="32.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={32}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="33.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={33}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="34.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={34}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="35.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={35}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="36.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={36}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="37.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={37}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-78 -28 -110 -48 -161 -98 -123 -124 -148 -292 -67 -466
    21 -44 109 -132 153 -153 102 -47 215 -61 287 -35 32 12 45 40 23 53 -5 3 -10
    22 -10 41 0 37 -22 56 -43 35 -13 -13 -123 -15 -131 -2 -3 4 -19 11 -36 15
    -40 8 -128 96 -136 136 -4 17 -11 33 -15 36 -12 7 -12 121 0 128 4 3 11 19 15
    36 8 40 96 128 136 136 17 4 33 11 36 15 3 5 32 9 64 9 32 0 61 -4 64 -9 3 -4
    19 -11 36 -15 38 -7 127 -94 136 -133 4 -15 11 -33 16 -40 5 -6 8 -37 7 -67
    -1 -31 -1 -57 2 -60 2 -2 32 -6 67 -10 l62 -7 0 73 c0 115 -37 206 -114 284
    -52 52 -84 71 -166 98 -55 19 -171 19 -225 0z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="38.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={38}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player Tie"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#51A548"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="39.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={39}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="40.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={40}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="41.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={41}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="42.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={42}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="43.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={43}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="44.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={44}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-78 -28 -110 -48 -161 -98 -123 -124 -148 -292 -67 -466
    21 -44 109 -132 153 -153 102 -47 215 -61 287 -35 32 12 45 40 23 53 -5 3 -10
    22 -10 41 0 37 -22 56 -43 35 -13 -13 -123 -15 -131 -2 -3 4 -19 11 -36 15
    -40 8 -128 96 -136 136 -4 17 -11 33 -15 36 -12 7 -12 121 0 128 4 3 11 19 15
    36 8 40 96 128 136 136 17 4 33 11 36 15 3 5 32 9 64 9 32 0 61 -4 64 -9 3 -4
    19 -11 36 -15 38 -7 127 -94 136 -133 4 -15 11 -33 16 -40 5 -6 8 -37 7 -67
    -1 -31 -1 -57 2 -60 2 -2 32 -6 67 -10 l62 -7 0 73 c0 115 -37 206 -114 284
    -52 52 -84 71 -166 98 -55 19 -171 19 -225 0z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="45.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={45}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="1.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={1}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="4.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={4}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-78 -28 -110 -48 -161 -98 -123 -124 -148 -292 -67 -466
    21 -44 109 -132 153 -153 102 -47 215 -61 287 -35 32 12 45 40 23 53 -5 3 -10
    22 -10 41 0 37 -22 56 -43 35 -13 -13 -123 -15 -131 -2 -3 4 -19 11 -36 15
    -40 8 -128 96 -136 136 -4 17 -11 33 -15 36 -12 7 -12 121 0 128 4 3 11 19 15
    36 8 40 96 128 136 136 17 4 33 11 36 15 3 5 32 9 64 9 32 0 61 -4 64 -9 3 -4
    19 -11 36 -15 38 -7 127 -94 136 -133 4 -15 11 -33 16 -40 5 -6 8 -37 7 -67
    -1 -31 -1 -57 2 -60 2 -2 32 -6 67 -10 l62 -7 0 73 c0 115 -37 206 -114 284
    -52 52 -84 71 -166 98 -55 19 -171 19 -225 0z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="5.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={5}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="7.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={7}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="8.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={8}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="9.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={9}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="10.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={10}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="13.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={13}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Tie"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#51A548"
                                                              />
                                                            </g>
                                                            <text
                                                              x="50%"
                                                              y="75%"
                                                              textAnchor="middle"
                                                              fontSize={55}
                                                              fill="black"
                                                            >
                                                              3
                                                            </text>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="14.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={14}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-78 -28 -110 -48 -161 -98 -123 -124 -148 -292 -67 -466
    21 -44 109 -132 153 -153 102 -47 215 -61 287 -35 32 12 45 40 23 53 -5 3 -10
    22 -10 41 0 37 -22 56 -43 35 -13 -13 -123 -15 -131 -2 -3 4 -19 11 -36 15
    -40 8 -128 96 -136 136 -4 17 -11 33 -15 36 -12 7 -12 121 0 128 4 3 11 19 15
    36 8 40 96 128 136 136 17 4 33 11 36 15 3 5 32 9 64 9 32 0 61 -4 64 -9 3 -4
    19 -11 36 -15 38 -7 127 -94 136 -133 4 -15 11 -33 16 -40 5 -6 8 -37 7 -67
    -1 -31 -1 -57 2 -60 2 -2 32 -6 67 -10 l62 -7 0 73 c0 115 -37 206 -114 284
    -52 52 -84 71 -166 98 -55 19 -171 19 -225 0z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="17.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={17}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="19.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={19}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="21.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={21}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="22.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={22}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="25.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={25}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="27.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={27}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-78 -28 -110 -48 -161 -98 -123 -124 -148 -292 -67 -466
    21 -44 109 -132 153 -153 102 -47 215 -61 287 -35 32 12 45 40 23 53 -5 3 -10
    22 -10 41 0 37 -22 56 -43 35 -13 -13 -123 -15 -131 -2 -3 4 -19 11 -36 15
    -40 8 -128 96 -136 136 -4 17 -11 33 -15 36 -12 7 -12 121 0 128 4 3 11 19 15
    36 8 40 96 128 136 136 17 4 33 11 36 15 3 5 32 9 64 9 32 0 61 -4 64 -9 3 -4
    19 -11 36 -15 38 -7 127 -94 136 -133 4 -15 11 -33 16 -40 5 -6 8 -37 7 -67
    -1 -31 -1 -57 2 -60 2 -2 32 -6 67 -10 l62 -7 0 73 c0 115 -37 206 -114 284
    -52 52 -84 71 -166 98 -55 19 -171 19 -225 0z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="29.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={29}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="30.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={30}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="31.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={31}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="32.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={32}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="33.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={33}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="35.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={35}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="37.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={37}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="41.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={41}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="44.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={44}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player Tie"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#51A548"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="45.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={45}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="5.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={5}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="7.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={7}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="8.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={8}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="10.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={10}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player Tie"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#51A548"
                                                              />
                                                            </g>
                                                            <text
                                                              x="50%"
                                                              y="75%"
                                                              textAnchor="middle"
                                                              fontSize={55}
                                                              fill="black"
                                                            >
                                                              2
                                                            </text>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="14.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={14}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="17.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={17}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="21.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={21}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="27.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={27}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="31.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={31}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Tie"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#51A548"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="37.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={37}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="44.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={44}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="5.05"
                                                      y="3.05"
                                                      data-type="coordinates"
                                                      data-x={5}
                                                      data-y={3}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker TieBanker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-78 -28 -110 -48 -161 -98 -123 -124 -148 -292 -67 -466
    21 -44 109 -132 153 -153 102 -47 215 -61 287 -35 32 12 45 40 23 53 -5 3 -10
    22 -10 41 0 37 -22 56 -43 35 -13 -13 -123 -15 -131 -2 -3 4 -19 11 -36 15
    -40 8 -128 96 -136 136 -4 17 -11 33 -15 36 -12 7 -12 121 0 128 4 3 11 19 15
    36 8 40 96 128 136 136 17 4 33 11 36 15 3 5 32 9 64 9 32 0 61 -4 64 -9 3 -4
    19 -11 36 -15 38 -7 127 -94 136 -133 4 -15 11 -33 16 -40 5 -6 8 -37 7 -67
    -1 -31 -1 -57 2 -60 2 -2 32 -6 67 -10 l62 -7 0 73 c0 115 -37 206 -114 284
    -52 52 -84 71 -166 98 -55 19 -171 19 -225 0z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#51A548"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="7.05"
                                                      y="3.05"
                                                      data-type="coordinates"
                                                      data-x={7}
                                                      data-y={3}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="21.05"
                                                      y="3.05"
                                                      data-type="coordinates"
                                                      data-x={21}
                                                      data-y={3}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="27.05"
                                                      y="3.05"
                                                      data-type="coordinates"
                                                      data-x={27}
                                                      data-y={3}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Tie"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#51A548"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="31.05"
                                                      y="3.05"
                                                      data-type="coordinates"
                                                      data-x={31}
                                                      data-y={3}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="37.05"
                                                      y="3.05"
                                                      data-type="coordinates"
                                                      data-x={37}
                                                      data-y={3}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="44.05"
                                                      y="3.05"
                                                      data-type="coordinates"
                                                      data-x={44}
                                                      data-y={3}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="7.05"
                                                      y="4.05"
                                                      data-type="coordinates"
                                                      data-x={7}
                                                      data-y={4}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M288 767 c-28 -11 -38 -40 -18 -52 6 -3 10 -22 10 -41 0 -37 22 -56
    43 -35 13 13 123 15 131 2 3 -4 19 -11 36 -15 40 -8 128 -96 136 -136 4 -17
    11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19 -15 -36 -8
    -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -7 -12 -121 -12 -128 0 -3 4
    -19 11 -36 15 -38 7 -127 94 -136 133 -4 15 -11 33 -16 40 -5 6 -8 37 -7 67 1
    31 1 57 -2 60 -2 2 -32 6 -67 10 l-62 7 0 -73 c0 -115 37 -206 114 -284 154
    -153 398 -153 552 0 153 154 153 398 0 552 -52 52 -84 71 -166 98 -51 18 -171
    19 -212 3z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={10}
                                                              cy={14}
                                                              r={10}
                                                              fill="#185CC6"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="31.05"
                                                      y="4.05"
                                                      data-type="coordinates"
                                                      data-x={31}
                                                      data-y={4}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-78 -28 -110 -48 -161 -98 -123 -124 -148 -292 -67 -466
    21 -44 109 -132 153 -153 102 -47 215 -61 287 -35 32 12 45 40 23 53 -5 3 -10
    22 -10 41 0 37 -22 56 -43 35 -13 -13 -123 -15 -131 -2 -3 4 -19 11 -36 15
    -40 8 -128 96 -136 136 -4 17 -11 33 -15 36 -12 7 -12 121 0 128 4 3 11 19 15
    36 8 40 96 128 136 136 17 4 33 11 36 15 3 5 32 9 64 9 32 0 61 -4 64 -9 3 -4
    19 -11 36 -15 38 -7 127 -94 136 -133 4 -15 11 -33 16 -40 5 -6 8 -37 7 -67
    -1 -31 -1 -57 2 -60 2 -2 32 -6 67 -10 l62 -7 0 73 c0 115 -37 206 -114 284
    -52 52 -84 71 -166 98 -55 19 -171 19 -225 0z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                            <circle
                                                              cx={67}
                                                              cy={63}
                                                              r={10}
                                                              fill="#C52123"
                                                            />
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                  </svg>
                                                </svg>
                                              </div>
                                              <br />
                                              <h2>
                                                <span>DERIVED ROADS</span>
                                              </h2>
                                              <p>
                                                <span>
                                                  For the true Baccarat
                                                  enthusiast, the Big Eye Road,
                                                  Small Road and Cockroach Road
                                                  are included to display
                                                  patterns derived from past
                                                  results recorded in the BIG
                                                  ROAD. The Big Eye Road uses
                                                  outlined circles, the Small
                                                  Road uses solid circles, and
                                                  the Cockroach Road uses
                                                  slashes. However, in these
                                                  derived roads, the colours red
                                                  and blue do not correspond to
                                                  Banker and Player wins, and
                                                  there is no way to discern
                                                  ties or pairs. In derived
                                                  roads, red entries are a sign
                                                  of repetition, whereas blue
                                                  entries signal a more erratic,
                                                  “choppy” shoe.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d derivedRoadsContainer--110ad"
                                              >
                                                <svg viewBox="0 0 10 3">
                                                  <svg
                                                    className="svg--eb430"
                                                    viewBox="0 0 10 3"
                                                  >
                                                    <rect
                                                      x={0}
                                                      y={0}
                                                      fill="#ffffff"
                                                      width={10}
                                                      height={3}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={10}
                                                      y1="0.025"
                                                      y2="0.025"
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={10}
                                                      y1={1}
                                                      y2={1}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={10}
                                                      y1={2}
                                                      y2={2}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={10}
                                                      y1="2.975"
                                                      y2="2.975"
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1="0.025"
                                                      x2="0.025"
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={1}
                                                      x2={1}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={2}
                                                      x2={2}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={3}
                                                      x2={3}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={4}
                                                      x2={4}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={5}
                                                      x2={5}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={6}
                                                      x2={6}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={7}
                                                      x2={7}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={8}
                                                      x2={8}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={9}
                                                      x2={9}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1="9.975"
                                                      x2="9.975"
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="0.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={0}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="1.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={1}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="2.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={2}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="3.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={3}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="4.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={4}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="5.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={5}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="0.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={0}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="3.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={3}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="0.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={0}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                  </svg>
                                                </svg>
                                                <svg viewBox="0 0 10 3">
                                                  <svg
                                                    className="svg--eb430"
                                                    viewBox="0 0 10 3"
                                                  >
                                                    <rect
                                                      x={0}
                                                      y={0}
                                                      fill="#ffffff"
                                                      width={10}
                                                      height={3}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={10}
                                                      y1="0.025"
                                                      y2="0.025"
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={10}
                                                      y1={1}
                                                      y2={1}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={10}
                                                      y1={2}
                                                      y2={2}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={10}
                                                      y1="2.975"
                                                      y2="2.975"
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1="0.025"
                                                      x2="0.025"
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={1}
                                                      x2={1}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={2}
                                                      x2={2}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={3}
                                                      x2={3}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={4}
                                                      x2={4}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={5}
                                                      x2={5}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={6}
                                                      x2={6}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={7}
                                                      x2={7}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={8}
                                                      x2={8}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={9}
                                                      x2={9}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1="9.975"
                                                      x2="9.975"
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="0.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={0}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="1.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={1}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="2.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={2}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="3.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={3}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="4.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={4}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="5.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={5}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="1.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={1}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="3.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={3}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="4.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={4}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="5.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={5}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                  </svg>
                                                </svg>
                                                <svg viewBox="0 0 10 3">
                                                  <svg
                                                    className="svg--eb430"
                                                    viewBox="0 0 10 3"
                                                  >
                                                    <rect
                                                      x={0}
                                                      y={0}
                                                      fill="#ffffff"
                                                      width={10}
                                                      height={3}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={10}
                                                      y1="0.025"
                                                      y2="0.025"
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={10}
                                                      y1={1}
                                                      y2={1}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={10}
                                                      y1={2}
                                                      y2={2}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={0}
                                                      x2={10}
                                                      y1="2.975"
                                                      y2="2.975"
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1="0.025"
                                                      x2="0.025"
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={1}
                                                      x2={1}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={2}
                                                      x2={2}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={3}
                                                      x2={3}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={4}
                                                      x2={4}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={5}
                                                      x2={5}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={6}
                                                      x2={6}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={7}
                                                      x2={7}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={8}
                                                      x2={8}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1={9}
                                                      x2={9}
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <line
                                                      x1="9.975"
                                                      x2="9.975"
                                                      y1={0}
                                                      y2={3}
                                                      stroke="rgba(167, 169, 172, 0.5)"
                                                      style={{
                                                        strokeWidth: "0.05",
                                                      }}
                                                    />
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="0.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={0}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            />
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="1.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={1}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            />
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="2.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={2}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            />
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="3.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={3}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            />
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="4.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={4}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            />
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="5.05"
                                                      y="0.05"
                                                      data-type="coordinates"
                                                      data-x={5}
                                                      data-y={0}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            />
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="1.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={1}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            />
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="2.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={2}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            />
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="5.05"
                                                      y="1.05"
                                                      data-type="coordinates"
                                                      data-x={5}
                                                      data-y={1}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            />
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="1.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={1}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Player"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            />
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#185CC6"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#185CC6"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                    <svg
                                                      width="0.95"
                                                      height="0.95"
                                                      x="2.05"
                                                      y="2.05"
                                                      data-type="coordinates"
                                                      data-x={2}
                                                      data-y={2}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="svg--c8f9e"
                                                        viewBox="0 0 80 80"
                                                        data-role="roadItem"
                                                        name="Banker"
                                                      >
                                                        <defs />
                                                        <g>
                                                          <svg
                                                            width="68px"
                                                            height="68px"
                                                            x={6}
                                                            y={6}
                                                            viewBox="0 0 80 80"
                                                          >
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            />
                                                            <g
                                                              transform="translate(0,78) scale(0.1,-0.1)"
                                                              fill="#C52123"
                                                              stroke="none"
                                                              data-role="roadItemColor"
                                                            >
                                                              <path
                                                                d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                fill="#C52123"
                                                              />
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </svg>
                                                  </svg>
                                                </svg>
                                              </div>
                                              <p>
                                                <span>
                                                  The derived roads do not start
                                                  at the very beginning of the
                                                  shoe. They start with the hand
                                                  following the first hand in
                                                  the second, third and fourth
                                                  columns of the BIG ROAD. Once
                                                  a derived road starts, an
                                                  additional red or blue symbol
                                                  is added after every round.
                                                </span>
                                              </p>
                                              <br />
                                              <h2>
                                                <span>SHOE STATISTICS</span>
                                              </h2>
                                              <p>
                                                <span>
                                                  The following statistics based
                                                  on the current shoe are
                                                  displayed for you:
                                                </span>
                                              </p>
                                              <p>
                                                <span>
                                                  Total — the number of
                                                  completed rounds thus far.
                                                </span>
                                                <br />
                                                <span>
                                                  Player — the number of Player
                                                  wins thus far.
                                                </span>
                                                <br />
                                                <span>
                                                  Banker — the number of Banker
                                                  wins thus far.
                                                </span>
                                                <br />
                                                <span>
                                                  Tie — the number of tie rounds
                                                  thus far.
                                                </span>
                                                <br />
                                                <span>
                                                  Banker (Pair) — the number of
                                                  Banker pairs thus far.
                                                </span>
                                                <br />
                                                <span>
                                                  Player (Pair) — the number of
                                                  Player pairs thus far.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d"
                                              >
                                                <div className="gameStatistic--27e7f">
                                                  <div className="svgGameStatistics--acd83 faceLiftBright--0f3a4">
                                                    <div className="itemWrapper--98ad7">
                                                      <div className="item--92c48">
                                                        <div>#</div>
                                                      </div>
                                                      <div className="count--ae30a">
                                                        <div
                                                          data-role="gameCount"
                                                          className
                                                        >
                                                          60
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="itemWrapper--98ad7">
                                                      <div className="item--92c48">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="svg--c8f9e"
                                                          viewBox="0 0 80 80"
                                                          data-role="roadItem"
                                                          name="Player"
                                                        >
                                                          <defs />
                                                          <g>
                                                            <svg
                                                              width="68px"
                                                              height="68px"
                                                              x={6}
                                                              y={6}
                                                              viewBox="0 0 80 80"
                                                            >
                                                              <g
                                                                transform="translate(0,78) scale(0.1,-0.1)"
                                                                fill="#2E83FF"
                                                                stroke="none"
                                                                data-role="roadItemColor"
                                                              >
                                                                <path
                                                                  d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                  fill="#2E83FF"
                                                                />
                                                              </g>
                                                              <text
                                                                x="50%"
                                                                y="75%"
                                                                textAnchor="middle"
                                                                fontSize={55}
                                                                fill="white"
                                                              >
                                                                P
                                                              </text>
                                                            </svg>
                                                          </g>
                                                        </svg>
                                                      </div>
                                                      <div className="count--ae30a">
                                                        <div
                                                          data-role="playerWins"
                                                          className
                                                        >
                                                          26
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="itemWrapper--98ad7">
                                                      <div className="item--92c48">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="svg--c8f9e"
                                                          viewBox="0 0 80 80"
                                                          data-role="roadItem"
                                                          name="Banker"
                                                        >
                                                          <defs />
                                                          <g>
                                                            <svg
                                                              width="68px"
                                                              height="68px"
                                                              x={6}
                                                              y={6}
                                                              viewBox="0 0 80 80"
                                                            >
                                                              <g
                                                                transform="translate(0,78) scale(0.1,-0.1)"
                                                                fill="#EC2024"
                                                                stroke="none"
                                                                data-role="roadItemColor"
                                                              >
                                                                <path
                                                                  d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                  fill="#EC2024"
                                                                />
                                                              </g>
                                                              <text
                                                                x="50%"
                                                                y="75%"
                                                                textAnchor="middle"
                                                                fontSize={55}
                                                                fill="white"
                                                              >
                                                                B
                                                              </text>
                                                            </svg>
                                                          </g>
                                                        </svg>
                                                      </div>
                                                      <div className="count--ae30a">
                                                        <div
                                                          data-role="bankerWins"
                                                          className
                                                        >
                                                          32
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="itemWrapper--98ad7">
                                                      <div className="item--92c48">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="svg--c8f9e"
                                                          viewBox="0 0 80 80"
                                                          data-role="roadItem"
                                                          name="Tie"
                                                        >
                                                          <defs />
                                                          <g>
                                                            <svg
                                                              width="68px"
                                                              height="68px"
                                                              x={6}
                                                              y={6}
                                                              viewBox="0 0 80 80"
                                                            >
                                                              <g
                                                                transform="translate(0,78) scale(0.1,-0.1)"
                                                                fill="#159252"
                                                                stroke="none"
                                                                data-role="roadItemColor"
                                                              >
                                                                <path
                                                                  d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                  fill="#159252"
                                                                />
                                                              </g>
                                                              <text
                                                                x="50%"
                                                                y="75%"
                                                                textAnchor="middle"
                                                                fontSize={55}
                                                                fill="white"
                                                              >
                                                                T
                                                              </text>
                                                            </svg>
                                                          </g>
                                                        </svg>
                                                      </div>
                                                      <div className="count--ae30a">
                                                        <div
                                                          data-role="ties"
                                                          className
                                                        >
                                                          2
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <br />
                                              <h2>
                                                <span>ROAD PROBING TABLE</span>
                                              </h2>
                                              <p>
                                                <span>
                                                  The Road PROBING Table
                                                  displays the icon that will be
                                                  added to the three derived
                                                  roads if the next round is won
                                                  by the Banker or the Player.
                                                  Click the Banker (B) or Player
                                                  (P) button to see the icon
                                                  that will be added in the
                                                  roads if the next round is won
                                                  by the Banker or the Player.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d prediction--e801e"
                                              >
                                                <div className="roadProbing--b78e6">
                                                  <div>
                                                    <div
                                                      className="prediction--9877c rounded--90c01 Player--d3a01 faceLiftBright--80399 phone--1043d"
                                                      data-role="PlayerPrediction"
                                                    >
                                                      <div className="backgroundBorder--49c52 borderBefore--925a0" />
                                                      <div className="backgroundBorder--49c52 borderAfter--0ce41" />
                                                      <div className="simpleSymbol--f3e7d">
                                                        P?
                                                      </div>
                                                      <div
                                                        className="icons--f4e38 faceLiftBright--80399"
                                                        style={{
                                                          backgroundColor:
                                                            "transparent",
                                                          borderColor:
                                                            "transparent",
                                                        }}
                                                      >
                                                        <div
                                                          className="item--8df89"
                                                          data-role="BigEye"
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="svg--c8f9e"
                                                            viewBox="0 0 80 80"
                                                            data-role="roadItem"
                                                            name="Banker"
                                                          >
                                                            <defs />
                                                            <g>
                                                              <svg
                                                                width="68px"
                                                                height="68px"
                                                                x={6}
                                                                y={6}
                                                                viewBox="0 0 80 80"
                                                              >
                                                                <g
                                                                  transform="translate(0,78) scale(0.1,-0.1)"
                                                                  fill="#EC2024"
                                                                  stroke="none"
                                                                  data-role="roadItemColor"
                                                                >
                                                                  <path
                                                                    d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                    fill="#EC2024"
                                                                  />
                                                                </g>
                                                              </svg>
                                                            </g>
                                                          </svg>
                                                        </div>
                                                        <div
                                                          className="item--8df89"
                                                          data-role="Small"
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="svg--c8f9e"
                                                            viewBox="0 0 80 80"
                                                            data-role="roadItem"
                                                            name="Player"
                                                          >
                                                            <defs />
                                                            <g>
                                                              <svg
                                                                width="68px"
                                                                height="68px"
                                                                x={6}
                                                                y={6}
                                                                viewBox="0 0 80 80"
                                                              >
                                                                <g
                                                                  transform="translate(0,78) scale(0.1,-0.1)"
                                                                  fill="#2E83FF"
                                                                  stroke="none"
                                                                  data-role="roadItemColor"
                                                                >
                                                                  <path
                                                                    d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                    fill="#2E83FF"
                                                                  />
                                                                </g>
                                                              </svg>
                                                            </g>
                                                          </svg>
                                                        </div>
                                                        <div
                                                          className="item--8df89 lastItem--89af0"
                                                          data-role="Cockroach"
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="svg--c8f9e"
                                                            viewBox="0 0 80 80"
                                                            data-role="roadItem"
                                                            name="Player"
                                                          >
                                                            <defs />
                                                            <g>
                                                              <svg
                                                                width="68px"
                                                                height="68px"
                                                                x={6}
                                                                y={6}
                                                                viewBox="0 0 80 80"
                                                              >
                                                                <g
                                                                  transform="translate(0,78) scale(0.1,-0.1)"
                                                                  fill="#2E83FF"
                                                                  stroke="none"
                                                                  data-role="roadItemColor"
                                                                />
                                                                <g
                                                                  transform="translate(0,78) scale(0.1,-0.1)"
                                                                  fill="#2E83FF"
                                                                  stroke="none"
                                                                  data-role="roadItemColor"
                                                                >
                                                                  <path
                                                                    d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                    fill="#2E83FF"
                                                                  />
                                                                </g>
                                                              </svg>
                                                            </g>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div
                                                      className="prediction--9877c rounded--90c01 Banker--84cf1 faceLiftBright--80399 phone--1043d"
                                                      data-role="BankerPrediction"
                                                    >
                                                      <div className="backgroundBorder--49c52 borderBefore--925a0" />
                                                      <div className="backgroundBorder--49c52 borderAfter--0ce41" />
                                                      <div className="simpleSymbol--f3e7d">
                                                        B?
                                                      </div>
                                                      <div
                                                        className="icons--f4e38 faceLiftBright--80399"
                                                        style={{
                                                          backgroundColor:
                                                            "transparent",
                                                          borderColor:
                                                            "transparent",
                                                        }}
                                                      >
                                                        <div
                                                          className="item--8df89"
                                                          data-role="BigEye"
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="svg--c8f9e"
                                                            viewBox="0 0 80 80"
                                                            data-role="roadItem"
                                                            name="Banker"
                                                          >
                                                            <defs />
                                                            <g>
                                                              <svg
                                                                width="68px"
                                                                height="68px"
                                                                x={6}
                                                                y={6}
                                                                viewBox="0 0 80 80"
                                                              >
                                                                <g
                                                                  transform="translate(0,78) scale(0.1,-0.1)"
                                                                  fill="#EC2024"
                                                                  stroke="none"
                                                                  data-role="roadItemColor"
                                                                >
                                                                  <path
                                                                    d="
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                    fill="#EC2024"
                                                                  />
                                                                </g>
                                                              </svg>
                                                            </g>
                                                          </svg>
                                                        </div>
                                                        <div
                                                          className="item--8df89"
                                                          data-role="Small"
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="svg--c8f9e"
                                                            viewBox="0 0 80 80"
                                                            data-role="roadItem"
                                                            name="Banker"
                                                          >
                                                            <defs />
                                                            <g>
                                                              <svg
                                                                width="68px"
                                                                height="68px"
                                                                x={6}
                                                                y={6}
                                                                viewBox="0 0 80 80"
                                                              >
                                                                <g
                                                                  transform="translate(0,78) scale(0.1,-0.1)"
                                                                  fill="#EC2024"
                                                                  stroke="none"
                                                                  data-role="roadItemColor"
                                                                >
                                                                  <path
                                                                    d="
    M265 759 c-201 -65 -310 -283 -245 -490 64 -205 283 -315 491 -249
    205 64 315 283 249 491 -65 205 -286 316 -495 248z
"
                                                                    fill="#EC2024"
                                                                  />
                                                                </g>
                                                              </svg>
                                                            </g>
                                                          </svg>
                                                        </div>
                                                        <div
                                                          className="item--8df89 lastItem--89af0"
                                                          data-role="Cockroach"
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="svg--c8f9e"
                                                            viewBox="0 0 80 80"
                                                            data-role="roadItem"
                                                            name="Banker"
                                                          >
                                                            <defs />
                                                            <g>
                                                              <svg
                                                                width="68px"
                                                                height="68px"
                                                                x={6}
                                                                y={6}
                                                                viewBox="0 0 80 80"
                                                              >
                                                                <g
                                                                  transform="translate(0,78) scale(0.1,-0.1)"
                                                                  fill="#EC2024"
                                                                  stroke="none"
                                                                  data-role="roadItemColor"
                                                                />
                                                                <g
                                                                  transform="translate(0,78) scale(0.1,-0.1)"
                                                                  fill="#EC2024"
                                                                  stroke="none"
                                                                  data-role="roadItemColor"
                                                                >
                                                                  <path
                                                                    d="
    M260 360 l-255 -255 60 -60 60 -60 410 410 255 255 -60 60 -60 60
"
                                                                    fill="#EC2024"
                                                                  />
                                                                </g>
                                                              </svg>
                                                            </g>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div
                                        data-role="help-chapter"
                                        data-chapter-id="Multiplay"
                                        className="helpChapter--73696"
                                      >
                                        <a
                                          onClick={() => handleToggleOpen(9)}
                                          className="title--bfec4"
                                        >
                                          <span>Multiplay</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 9
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 9 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <p>
                                                Baccarat Multiplay is a
                                                Multiplay panel in which players
                                                can quickly observe and sort the
                                                road patterns, place bets, and
                                                play at multiple Baccarat tables
                                                at the same time.
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d block--2a07c"
                                              >
                                                <button className="multiplayButton--7002c tiny--41d31">
                                                  <div className="icon--0700d">
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
                                                  </div>
                                                  <span className="label--ef0cd">
                                                    Multiplay
                                                  </span>
                                                </button>
                                              </div>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d block--2a07c"
                                              >
                                                <button
                                                  className="button--673ce xxxs--2d4a2 roundingBoth--6d5e6 buttonRoot--3bd4d"
                                                  data-type="secondary"
                                                  data-role="button"
                                                  data-state="Default"
                                                >
                                                  <span
                                                    className="roundingBoth--2a8e7 buttonContent--2a2d4 xxxs--a7f61"
                                                    data-role="button-content"
                                                  >
                                                    <div
                                                      className="buttonBase--73d7d"
                                                      data-role="base-border"
                                                      style={{
                                                        padding:
                                                          "calc(var(--rem-migration-size, 10px) * 0.08)",
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
                                                            style={{
                                                              height: "100%",
                                                            }}
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
                                              </div>
                                            </div>
                                          </div>
                                        )}
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
                              )}
                              {tabs === "features" && (
                                <div
                                  className="list--72361"
                                  data-role="tab-content-wrapper"
                                  style={{
                                    "-contentSideOffset":
                                      "calc(var(--root-size, 10px) * 1.6)",
                                  }}
                                >
                                  <div
                                    className="hidden--63b32 relativePosition--ac9e2"
                                    data-role="tab-content-item"
                                  />
                                  <div
                                    className="active--f0a91 relativePosition--ac9e2"
                                    data-role="tab-content-item"
                                  >
                                    <div className="tabChaptersList--1e012">
                                      <div
                                        data-role="help-chapter"
                                        data-chapter-id="Menu"
                                        className="helpChapter--73696"
                                      >
                                        <a
                                          onClick={() => handleToggleOpen(10)}
                                          className="title--bfec4"
                                        >
                                          <span>Menu</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 10
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 10 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <table>
                                                <tbody>
                                                  <tr className="row--54e42">
                                                    <td data-role="menu-section">
                                                      <div className="menuItemIcon--86f6c">
                                                        <svg
                                                          viewBox="0 0 100 100"
                                                          className="iconWrapper--b4e49"
                                                          style={{
                                                            height: "100%",
                                                          }}
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
                                                      </div>
                                                    </td>
                                                    <td>
                                                      <span>
                                                        Menu offers game
                                                        elements to use.
                                                      </span>
                                                    </td>
                                                  </tr>
                                                  <tr className="row--54e42">
                                                    <td data-role="sound-section">
                                                      <div className="menuItemIcon--86f6c">
                                                        <svg
                                                          viewBox="0 0 100 100"
                                                          className="iconWrapper--b4e49"
                                                          style={{
                                                            height: "100%",
                                                          }}
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            viewBox="0 0 24 24"
                                                            className="icon--8dcd0"
                                                            height="100%"
                                                            y="0%"
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
                                                        </svg>
                                                      </div>
                                                    </td>
                                                    <td>
                                                      <span>
                                                        Sound controls all
                                                        sounds in the game.
                                                      </span>
                                                    </td>
                                                  </tr>
                                                  <tr className="row--54e42">
                                                    <td>
                                                      <div className="menuItemIcon--86f6c">
                                                        <svg
                                                          viewBox="0 0 100 100"
                                                          className="iconWrapper--b4e49"
                                                          style={{
                                                            height: "100%",
                                                          }}
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            className="icon--8dcd0"
                                                            height="100%"
                                                            y="0%"
                                                          >
                                                            <path d="M18.8 11.363c-9.4.48-10.58-2.34-12.8-7.28a8.62 8.62 0 0 1 12.8 7.28Zm-11.64 6c1.49-2.85 4-5.34 11.64-4.75A8.618 8.618 0 0 1 6 19.903c.38-.85.74-1.73 1.16-2.55v.01Z" />
                                                          </svg>
                                                        </svg>
                                                      </div>
                                                    </td>
                                                    <td>
                                                      <span>
                                                        Evolution Lobby — easy
                                                        game selection without
                                                        exiting your current
                                                        game until a new game is
                                                        chosen.
                                                      </span>
                                                    </td>
                                                  </tr>
                                                  <tr className="row--54e42">
                                                    <td data-role="chat-section">
                                                      <div className="menuItemIcon--86f6c">
                                                        <svg
                                                          viewBox="0 0 100 100"
                                                          className="iconWrapper--b4e49"
                                                          style={{
                                                            height: "100%",
                                                          }}
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            className="icon--8dcd0"
                                                            data-role="chat-icon-svg"
                                                            height="100%"
                                                            y="0%"
                                                          >
                                                            <path d="M5 4h10.5c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H10l-3.99 3v-3H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1Zm12.99 17v-3H19c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1h-1v3.5c0 1.1-.9 2-2 2h-5.5l-3 2.31V17c0 .55.45 1 1 1H14l3.99 3Z" />
                                                          </svg>
                                                        </svg>
                                                      </div>
                                                    </td>
                                                    <td>
                                                      <span>
                                                        Chat with other players
                                                        and/or with a game
                                                        presenter.
                                                      </span>
                                                    </td>
                                                  </tr>
                                                  <tr className="row--54e42">
                                                    <td data-role="live-support-section">
                                                      <div className="menuItemIcon--86f6c">
                                                        <svg
                                                          viewBox="0 0 100 100"
                                                          className="iconWrapper--b4e49"
                                                          style={{
                                                            height: "100%",
                                                          }}
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            className="icon--8dcd0"
                                                            data-role="customer-support-svg"
                                                            height="100%"
                                                            y="0%"
                                                          >
                                                            <path d="M16.74 8.208c-.005-1.46-.515-2.682-1.46-3.528-.86-.76-2.02-1.18-3.27-1.18-2.28 0-4.74 1.48-4.74 4.74v5.99c0 2.375 1.314 3.81 2.911 4.41a.105.105 0 0 1 .035-.045 2 2 0 1 1-.09 1.607C7.756 19.511 5.77 17.49 5.77 14.23H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1l1.77.005C5.772 4.148 8.911 2 12.01 2c3.09 0 6.22 2.126 6.24 6.2h1.74c.55 0 1 .45 1 1v4.03c0 .55-.45 1-1 1h-3.25V8.208Z" />
                                                          </svg>
                                                        </svg>
                                                      </div>
                                                    </td>
                                                    <td>
                                                      <span>
                                                        Contact Live Support for
                                                        game-related inquiries.
                                                      </span>
                                                    </td>
                                                  </tr>
                                                  <tr className="row--54e42">
                                                    <td>
                                                      <div className="menuItemIcon--86f6c">
                                                        <svg
                                                          viewBox="0 0 100 100"
                                                          className="iconWrapper--b4e49"
                                                          style={{
                                                            height: "100%",
                                                          }}
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            className="icon--8dcd0"
                                                            height="100%"
                                                            y="0%"
                                                          >
                                                            <path d="M10.77 3.6c2.16-.33 4.37.19 6.16 1.45l-.04-.02a8.5 8.5 0 1 1-11.66 12.1l1.59-1.21a6.5 6.5 0 1 0-.1-7.74l1.42 1.38-5.64 1.49L3.88 5.4l1.44 1.4a8.51 8.51 0 0 1 5.45-3.2Z" />
                                                            <path d="M11.33 12.32V7.49h1.5v4.2l3.05 3.05-1.06 1.06-3.5-3.48Z" />
                                                          </svg>
                                                        </svg>
                                                      </div>
                                                    </td>
                                                    <td>
                                                      <span>
                                                        Game History displays
                                                        your Evolution game
                                                        rounds and results.
                                                      </span>
                                                    </td>
                                                  </tr>
                                                  <tr className="row--54e42">
                                                    <td>
                                                      <div className="menuItemIcon--86f6c">
                                                        <svg
                                                          viewBox="0 0 100 100"
                                                          className="iconWrapper--b4e49"
                                                          style={{
                                                            height: "100%",
                                                          }}
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            className="icon--8dcd0"
                                                            height="100%"
                                                            y="0%"
                                                          >
                                                            <path d="M18.79 12a7.178 7.178 0 0 0-.19-1.62l2-1.15-2-3.47-2 1.16a6.86 6.86 0 0 0-2.8-1.63V3h-4v2.29A7 7 0 0 0 7 6.92L5 5.76 3 9.23l2 1.15a6.62 6.62 0 0 0 0 3.23l-2 1.15 2 3.47 2-1.15a7.09 7.09 0 0 0 2.8 1.62V21h4v-2.3a7 7 0 0 0 2.8-1.62l2 1.15 2-3.47-2-1.15a7.154 7.154 0 0 0 .19-1.61Zm-7 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                                          </svg>
                                                        </svg>
                                                      </div>
                                                    </td>
                                                    <td>
                                                      <span>
                                                        Settings let you
                                                        customize user
                                                        preferences that are
                                                        saved to your profile.
                                                      </span>
                                                    </td>
                                                  </tr>
                                                  <tr className="row--54e42">
                                                    <td>
                                                      <div className="menuItemIcon--86f6c">
                                                        <svg
                                                          viewBox="0 0 100 100"
                                                          className="iconWrapper--b4e49"
                                                          style={{
                                                            height: "100%",
                                                          }}
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
                                                    </td>
                                                    <td>
                                                      <span>
                                                        How To Play shows game
                                                        rules, objectives, and
                                                        controls.
                                                      </span>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="hidden--63b32 relativePosition--ac9e2"
                                    data-role="tab-content-item"
                                  />
                                </div>
                              )}
                              {tabs === "more" && (
                                <div
                                  className="list--72361"
                                  data-role="tab-content-wrapper"
                                  style={{
                                    "-contentSideOffset":
                                      "calc(var(--root-size, 10px) * 1.6)",
                                  }}
                                >
                                  <div
                                    className="hidden--63b32 relativePosition--ac9e2"
                                    data-role="tab-content-item"
                                  />
                                  <div
                                    className="hidden--63b32 relativePosition--ac9e2"
                                    data-role="tab-content-item"
                                  />
                                  <div
                                    className="active--f0a91 relativePosition--ac9e2"
                                    data-role="tab-content-item"
                                  >
                                    <div className="tabChaptersList--1e012">
                                      <div
                                        data-role="help-chapter"
                                        data-chapter-id="GameNumber"
                                        className="helpChapter--73696"
                                      >
                                        <a
                                          onClick={() => handleToggleOpen(11)}
                                          className="title--bfec4"
                                        >
                                          <span>Game Number</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 11
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 11 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <p>
                                                <span>
                                                  Each game round is identified
                                                  by a unique GAME NUMBER.
                                                </span>
                                              </p>
                                              <div
                                                data-role="help-component-container"
                                                className="helpComponentContainer--faa7d"
                                                style={{
                                                  color:
                                                    "rgba(255, 255, 255, 0.5)",
                                                }}
                                              >
                                                <div
                                                  className="gameTime--9d037"
                                                  data-role="game-time"
                                                >
                                                  21:10:10
                                                </div>
                                              </div>
                                              <p>
                                                <span>
                                                  This number reflects when the
                                                  game round began in terms of
                                                  GMT by{" "}
                                                  <em>hour: minute: second</em>.
                                                  Please use this game number
                                                  for reference (or take a
                                                  screenshot of the game number)
                                                  if you wish to contact
                                                  Customer Service regarding a
                                                  particular round.
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div
                                        data-role="help-chapter"
                                        data-chapter-id="ErrorHandling"
                                        className="helpChapter--73696"
                                      >
                                        <a
                                          onClick={() => handleToggleOpen(12)}
                                          className="title--bfec4"
                                        >
                                          <span>Error Handling</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 12
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 12 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <p>
                                                <span>
                                                  If there is an error in the
                                                  game, system or game
                                                  procedure, the game round will
                                                  be temporarily paused while
                                                  the game host notifies the
                                                  service manager. You and other
                                                  players will be notified via
                                                  Chat, or by an on-screen
                                                  pop-up message, that the issue
                                                  is being investigated. If the
                                                  manager can immediately
                                                  resolve the error, the game
                                                  round will continue as normal.
                                                  If immediate resolution is not
                                                  possible, the game round will
                                                  be cancelled, and the initial
                                                  bets will be refunded to all
                                                  the players who participated
                                                  in the game round.
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div
                                        data-role="help-chapter"
                                        data-chapter-id="DisconnectionPolicy"
                                        className="helpChapter--73696"
                                      >
                                        <a
                                          onClick={() => handleToggleOpen(13)}
                                          className="title--bfec4"
                                        >
                                          <span>Disconnection Policy</span>
                                          <span
                                            className={`arrow--4cf7b  ${
                                              open === 13
                                                ? "expanded--92ef0"
                                                : "collapsed--02021"
                                            } `}
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
                                                <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                                              </svg>
                                            </svg>
                                          </span>
                                        </a>
                                        {open === 13 && (
                                          <div
                                            className="contentContainer--e1e0b"
                                            style={{ height: "initial" }}
                                          >
                                            <div className="content--f49a0">
                                              <p>
                                                <span>
                                                  If you are disconnected from a
                                                  game round, any placed bets
                                                  remain valid and are settled
                                                  in your absence. Upon
                                                  reconnecting, you can view the
                                                  bet outcomes in the History
                                                  window.
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
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
