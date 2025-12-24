import { motion } from "motion/react";
import { useSelector } from "react-redux";
import { useSound } from "../../../../context/ApiProvider";
import { playClick } from "../../../../utils/sound";
import { useParams } from "react-router-dom";
import { useRulesQuery } from "../../../../hooks/rules";

const HowToPlay = ({ setTab, closeModal }) => {
  const { eventId } = useParams();
  const { data } = useRulesQuery({ event_id: eventId });

  const { sound } = useSound();
  const { deviseHeight } = useSelector((state) => state.global);
  // const [tabs, setTabs] = useState("game-details");
  // const [open, setOpen] = useState(null);

  // const handleToggleOpen = (n) => {
  //   if (sound) playClick();
  //   if (n === open) {
  //     setOpen(null);
  //   } else {
  //     setOpen(n);
  //   }
  // };

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
              onClick={() => {
                setTab("menu");
                if (sound) playClick();
              }}
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
                              {/* <div dir="ltr" className>
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
                                          onClick={() => {
                                            setTabs("game-details");
                                            if (sound) playClick();
                                          }}
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
                                          onClick={() => {
                                            setTabs("features");
                                            if (sound) playClick();
                                          }}
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
                                          onClick={() => {
                                            setTabs("more");
                                            if (sound) playClick();
                                          }}
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
                              </div> */}

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
                                  {/* <div className="tabChaptersList--1e012">
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
                                    </div> */}
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: data?.result?.rules || "",
                                    }}
                                  />
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

                              {/* {tabs === "features" && (
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
                              )} */}
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
