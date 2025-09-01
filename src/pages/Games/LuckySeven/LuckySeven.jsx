import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";

const LuckySeven = () => {
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    { pollingInterval: 1000 }
  );

  return (
    <div id="root" className="rootContainer--308ad">
      <div className="container--efd24">
        <div
          className="gameUnderlay--be9f5"
          data-role="container"
          style={{ background: "rgb(21, 21, 21)", opacity: 1 }}
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
              >
                <div className="wrapper--8b249">
                  <div
                    data-role="circle-timer"
                    data-timer-version={1}
                    className="container--6cb86 md--5cf06 commonUiElement"
                  >
                    <div
                      className="timerCircleContainer--4935d"
                      data-role="timer-circle"
                    >
                      <canvas
                        style={{
                          display: "block",
                          width: "76px",
                          height: "76px",
                        }}
                        width={228}
                        height={228}
                      />
                    </div>
                    <div
                      className="contentWrapper--db941"
                      data-role="timer-content"
                    >
                      <canvas
                        style={{
                          display: "block",
                          width: "76px",
                          height: "76px",
                        }}
                        width={228}
                        height={228}
                      />
                    </div>
                  </div>
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
        <div className="video--53b3c" data-role="video-with-overlay-container">
          <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
            <div className="relativeChildren--99d54" />
          </div>
          <div style={{ width: "430px", height: "387px", margin: "auto" }}>
            <div
              data-role="scaled-video-container"
              className="videoWrapper--0aab6"
              style={{
                width: "430px",
                height: "241.875px",
                transformOrigin: "center top",
                transform: "scale(1.6, 1.6) translate(0px, 0px)",
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
                          <video
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
                            src="blob:https://babylonbetst.evo-games.com/1bfbee58-82d4-4911-8af7-cdcb2732567a"
                          />
                          <canvas
                            width={0}
                            height={0}
                            style={{ display: "none", objectFit: "contain" }}
                          />
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
            style={{ height: "314px", transform: "translateY(230px)" }}
          >
            <div
              className="videoGradient--10404"
              style={{
                background:
                  "linear-gradient(rgba(19, 5, 5, 0) 0%,rgb(19, 5, 5) 50%,rgba(21, 21, 21, 0) 100%)",
              }}
            />
          </div>
          <div className="overlays--4cd0a">
            <div className="mobileGameOverlay--a7837" />
          </div>
          <div
            className="winnersListPortraitPhone--57744 winnersListGradient--6fa71"
            data-role="video-winners-list"
            style={{ top: "calc(var(--root-size, 10px) * 2)", height: "317px" }}
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
        <div className="gameOverlay--aabc7" data-role="game-overlay-container">
          <div className="backdrop--251c9 isPortrait--0f397" />
          <div className="bottomBackdrop--defc4 bottomBackdropV2--766c3 isPortrait--0f397" />
          <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
            <div className="relativeChildren--99d54">
              <div className="overlay--e3c59">
                <div
                  className="gameControlsWrapper--9fbf7"
                  data-role="gameControlsWrapper"
                  style={{ top: "100px", bottom: "auto" }}
                >
                  <div
                    className="gameControls--ab9e4 goldenWealth--60b45"
                    data-role="expand-betting-grid"
                    data-expanded="true"
                  >
                    <div>
                      <div>
                        <div className="bettingGrid--a60ca">
                          <div style={{ width: "420px", height: "227px" }}>
                            <div
                              className="bettingGrid--0835e bettingTime--7f9cd isVertical--28984 onlyPairs--f14f6"
                              data-role="betting-grid-container"
                              style={{ transform: "scale(1.15)" }}
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
                                        id="player0.5621318576918524_id_fill"
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
                                        id="player0.5621318576918524_id_stroke"
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
                                        fill="url(#player0.5621318576918524_id_fill)"
                                        stroke="url(#player0.5621318576918524_id_stroke)"
                                        strokeWidth={2}
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
                                    <img src="frontend/evo/mini/images/playersymb.ec2d1e8e.svg" />
                                  </div>
                                  <div className="cardsHand--538f4 enhanced--181e0 isPortrait--28ada">
                                    <div className="cards--d48f8 enhanced--181e0" />
                                  </div>
                                  <div className="title--967a1">
                                    <div className="titleContainer--98fa0">
                                      7 Down
                                    </div>
                                  </div>
                                  <div className="liveStatisticsContainer--fc00f">
                                    <div
                                      className="liveStatistics--951fa LeftSpot--cfe31 isPortrait--b2a22"
                                      data-role="betting-stats"
                                      data-total-wager="92,439.39"
                                      data-total-bettors={42}
                                      data-currency-symbol="₹"
                                      style={{ color: "rgb(0, 150, 255)" }}
                                    >
                                      <div className="currency--abe5b">
                                        <span className="symbol--08ff1">₹</span>
                                        <span>92,439.39</span>
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
                                              <circle cx={4} cy={3} r={3} />
                                              <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                                            </g>
                                          </svg>
                                        </span>
                                        <span>42</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bettingStatistics--1bd62">
                                    <svg
                                      data-total-percent={20}
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
                                          id="background_Player0.9441224087490725_id_gradient"
                                        >
                                          <stop
                                            stopColor="#000"
                                            stopOpacity="0.7"
                                            offset="0%"
                                          />
                                          <stop
                                            stopColor="#000"
                                            stopOpacity={0}
                                            offset="100%"
                                          />
                                        </linearGradient>
                                      </defs>
                                      <circle
                                        cx={54}
                                        cy={54}
                                        r={54}
                                        fill="url(#background_Player0.9441224087490725_id_gradient)"
                                      />
                                      <circle
                                        cx={54}
                                        cy={54}
                                        r={50}
                                        strokeWidth={8}
                                        fill="none"
                                        stroke="#0096FF"
                                        strokeOpacity="0.1"
                                      />
                                      <circle
                                        cx={54}
                                        cy={54}
                                        r={50}
                                        strokeWidth={8}
                                        fill="none"
                                        stroke="#0096FF"
                                        strokeDashoffset="251.32741228718348"
                                        strokeDasharray="314.1592653589793"
                                        transform="rotate(-90 54 54)"
                                        style={{
                                          transition: "stroke-dashoffset 500ms",
                                        }}
                                      />
                                    </svg>
                                    <span
                                      className="indicatorPercentage--ac6cf"
                                      style={{ color: "rgb(0, 150, 255)" }}
                                    >
                                      20%
                                    </span>
                                  </div>
                                  <div className="chipContainer--9cdca">
                                    <div className="isPortrait--96aa8 mediumChip--83319 chipSize--1811f">
                                      <div
                                        data-is-chip-visible="false"
                                        className="hidden--f4c2b interactable--180c0 chip--618c4"
                                      >
                                        <div
                                          className="chip--29b81 shadow--24a83 cover--6df8f"
                                          data-role="chip"
                                          data-value={0}
                                        >
                                          <svg
                                            viewBox="0 0 78 78"
                                            className="graphics--22cbe"
                                            data-role="default-svg"
                                            style={{
                                              color: "rgb(146, 146, 146)",
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
                                        id="banker0.9485415553895895_id_fill"
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
                                        id="banker0.9485415553895895_id_stroke"
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
                                        fill="url(#banker0.9485415553895895_id_fill)"
                                        stroke="url(#banker0.9485415553895895_id_stroke)"
                                        strokeWidth={2}
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
                                    <img src="frontend/evo/mini/images/bankersymb.78bc4fda.svg" />
                                  </div>
                                  <div className="cardsHand--538f4 toRight--d458d enhanced--181e0 isPortrait--28ada">
                                    <div className="cards--d48f8 enhanced--181e0" />
                                  </div>
                                  <div className="title--967a1">
                                    <div className="titleContainer--98fa0">
                                      7 Up
                                    </div>
                                  </div>
                                  <div className="liveStatisticsContainer--fc00f">
                                    <div
                                      className="liveStatistics--951fa RightSpot--29540 isPortrait--b2a22 medium--0dfff"
                                      data-role="betting-stats"
                                      data-total-wager="347,866.70"
                                      data-total-bettors={139}
                                      data-currency-symbol="₹"
                                      style={{ color: "rgb(255, 0, 6)" }}
                                    >
                                      <div className="currency--abe5b">
                                        <span className="symbol--08ff1">₹</span>
                                        <span>347,866.70</span>
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
                                              <circle cx={4} cy={3} r={3} />
                                              <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                                            </g>
                                          </svg>
                                        </span>
                                        <span>139</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bettingStatistics--1bd62">
                                    <svg
                                      data-total-percent={76}
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
                                          id="background_Banker0.8946531488189704_id_gradient"
                                        >
                                          <stop
                                            stopColor="#000"
                                            stopOpacity="0.7"
                                            offset="0%"
                                          />
                                          <stop
                                            stopColor="#000"
                                            stopOpacity={0}
                                            offset="100%"
                                          />
                                        </linearGradient>
                                      </defs>
                                      <circle
                                        cx={54}
                                        cy={54}
                                        r={54}
                                        fill="url(#background_Banker0.8946531488189704_id_gradient)"
                                      />
                                      <circle
                                        cx={54}
                                        cy={54}
                                        r={50}
                                        strokeWidth={8}
                                        fill="none"
                                        stroke="#FF0006"
                                        strokeOpacity="0.1"
                                      />
                                      <circle
                                        cx={54}
                                        cy={54}
                                        r={50}
                                        strokeWidth={8}
                                        fill="none"
                                        stroke="#FF0006"
                                        strokeDashoffset="75.39822368615503"
                                        strokeDasharray="314.1592653589793"
                                        transform="rotate(-90 54 54)"
                                        style={{
                                          transition: "stroke-dashoffset 500ms",
                                        }}
                                      />
                                    </svg>
                                    <span
                                      className="indicatorPercentage--ac6cf"
                                      style={{ color: "rgb(255, 0, 6)" }}
                                    >
                                      76%
                                    </span>
                                  </div>
                                  <div className="chipContainer--9cdca">
                                    <div className="isPortrait--96aa8 mediumChip--83319 chipSize--1811f">
                                      <div
                                        data-is-chip-visible="false"
                                        className="hidden--f4c2b interactable--180c0 chip--618c4"
                                      >
                                        <div
                                          className="chip--29b81 shadow--24a83 cover--6df8f"
                                          data-role="chip"
                                          data-value={0}
                                        >
                                          <svg
                                            viewBox="0 0 78 78"
                                            className="graphics--22cbe"
                                            data-role="default-svg"
                                            style={{
                                              color: "rgb(146, 146, 146)",
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
                                        id="tie_fill0.10415904578682589_id"
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
                                        id="tie_stroke0.10415904578682589_id"
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
                                      fill="url(#tie_fill0.10415904578682589_id)"
                                      stroke="url(#tie_stroke0.10415904578682589_id)"
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
                                      <span className>7</span>
                                    </div>
                                    <div className="payoutContainer--a32db" />
                                  </div>
                                  <div className="liveStatisticsContainer--fc00f">
                                    <div
                                      className="liveStatistics--951fa Tie--9449f horizontal--dc92b isPortrait--b2a22"
                                      data-role="betting-stats"
                                      data-total-wager="18,188.65"
                                      data-total-bettors={47}
                                      data-currency-symbol="₹"
                                      style={{ color: "rgb(0, 255, 0)" }}
                                    >
                                      <div className="currency--abe5b">
                                        <span className="symbol--08ff1">₹</span>
                                        <span>18,188.65</span>
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
                                              <circle cx={4} cy={3} r={3} />
                                              <path d="M4 6c2.21 0 4 1.151 4 2.571V12H0V8.571l.006-.14C.12 7.075 1.864 6 4 6z" />
                                            </g>
                                          </svg>
                                        </span>
                                        <span>47</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bettingStatistics--1bd62">
                                    <svg
                                      data-total-percent={4}
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
                                          id="background_Tie0.37193448220955583_id_gradient"
                                        >
                                          <stop
                                            stopColor="#000"
                                            stopOpacity="0.7"
                                            offset="0%"
                                          />
                                          <stop
                                            stopColor="#000"
                                            stopOpacity={0}
                                            offset="100%"
                                          />
                                        </linearGradient>
                                      </defs>
                                      <circle
                                        cx={54}
                                        cy={54}
                                        r={54}
                                        fill="url(#background_Tie0.37193448220955583_id_gradient)"
                                      />
                                      <circle
                                        cx={54}
                                        cy={54}
                                        r={50}
                                        strokeWidth={8}
                                        fill="none"
                                        stroke="#00FF00"
                                        strokeOpacity="0.1"
                                      />
                                      <circle
                                        cx={54}
                                        cy={54}
                                        r={50}
                                        strokeWidth={8}
                                        fill="none"
                                        stroke="#00FF00"
                                        strokeDashoffset="301.59289474462014"
                                        strokeDasharray="314.1592653589793"
                                        transform="rotate(-90 54 54)"
                                        style={{
                                          transition: "stroke-dashoffset 500ms",
                                        }}
                                      />
                                    </svg>
                                    <span
                                      className="indicatorPercentage--ac6cf"
                                      style={{ color: "rgb(0, 255, 0)" }}
                                    >
                                      4%
                                    </span>
                                  </div>
                                  <div className="chipContainer--9cdca">
                                    <div className="isPortrait--96aa8 mediumChip--83319 chipSize--1811f">
                                      <div
                                        data-is-chip-visible="false"
                                        className="hidden--f4c2b interactable--180c0 chip--618c4"
                                      >
                                        <div
                                          className="chip--29b81 shadow--24a83 cover--6df8f"
                                          data-role="chip"
                                          data-value={0}
                                        >
                                          <svg
                                            viewBox="0 0 78 78"
                                            className="graphics--22cbe"
                                            data-role="default-svg"
                                            style={{
                                              color: "rgb(146, 146, 146)",
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
                                </div>
                              </div>
                              <div className="betspot--53c9f left--fcc6a">
                                <div
                                  data-betspot-destination="PlayerPair"
                                  className="item--8e08a vertical--98be1"
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
                                        id="PlayerPair0.03899799357536238_id_rect_fill"
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
                                        id="PlayerPair0.03899799357536238_id_rect_stroke"
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
                                      fill="url(#PlayerPair0.03899799357536238_id_rect_fill)"
                                      stroke="url(#PlayerPair0.03899799357536238_id_rect_stroke)"
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
                                    <span className>P PAIR</span>
                                  </div>
                                  <div className="chipContainer--9cdca">
                                    <div className="isPortrait--96aa8 mediumChip--83319 chipSize--1811f">
                                      <div
                                        data-is-chip-visible="false"
                                        className="hidden--f4c2b interactable--180c0 chip--618c4"
                                      >
                                        <div
                                          className="chip--29b81 shadow--24a83 cover--6df8f"
                                          data-role="chip"
                                          data-value={0}
                                        >
                                          <svg
                                            viewBox="0 0 78 78"
                                            className="graphics--22cbe"
                                            data-role="default-svg"
                                            style={{
                                              color: "rgb(146, 146, 146)",
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
                                </div>
                              </div>
                              <div className="betspot--53c9f right--d8912">
                                <div
                                  data-betspot-destination="BankerPair"
                                  className="item--8e08a vertical--98be1"
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
                                        id="BankerPair0.6604065570309232_id_rect_fill"
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
                                        id="BankerPair0.6604065570309232_id_rect_stroke"
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
                                      fill="url(#BankerPair0.6604065570309232_id_rect_fill)"
                                      stroke="url(#BankerPair0.6604065570309232_id_rect_stroke)"
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
                                    <span className>B PAIR</span>
                                  </div>
                                  <div className="chipContainer--9cdca">
                                    <div className="isPortrait--96aa8 mediumChip--83319 chipSize--1811f">
                                      <div
                                        data-is-chip-visible="false"
                                        className="hidden--f4c2b interactable--180c0 chip--618c4"
                                      >
                                        <div
                                          className="chip--29b81 shadow--24a83 cover--6df8f"
                                          data-role="chip"
                                          data-value={0}
                                        >
                                          <svg
                                            viewBox="0 0 78 78"
                                            className="graphics--22cbe"
                                            data-role="default-svg"
                                            style={{
                                              color: "rgb(146, 146, 146)",
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
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="roads--a31b6">
                          <div className="cardsBox--c95b5 isBetsOpen--f2708 noMargin--b2a41">
                            <div
                              className="goldenWealthBox--bf3f3 isPortrait--87e63"
                              style={{ minHeight: "0px" }}
                            >
                              <div className="bubbleRefContainer--cdb39" />
                            </div>
                          </div>
                          <div className="roadsPredictionsArea--0e2da">
                            <div
                              className="roadsPredictionsGradient--83b8d"
                              style={{
                                background:
                                  "linear-gradient(360deg,rgb(19, 5, 5) 26.65%, rgba(19, 5, 5, 0) 100%)",
                              }}
                            />
                            <div className="roadsPredictions--efdfd">
                              <div className="roadsPredictionsContainer--0dbff isPhone--72c48 faceLiftBright--09348">
                                <div className="statisticsContainer--d6f82 noShift--c70ef">
                                  <div className="statistics--2b5d9">
                                    <div className="svgGameStatistics--acd83 faceLiftBright--0f3a4 phone--fe7e7">
                                      <div className="itemWrapper--98ad7">
                                        <div className="item--92c48">
                                          <div>#</div>
                                        </div>
                                        <div className="count--ae30a">
                                          <div data-role="gameCount" className>
                                            54
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
                                          <div data-role="playerWins" className>
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
                                          <div data-role="bankerWins" className>
                                            24
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
                                          <div data-role="ties" className>
                                            4
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="predictions--c3611">
                                    <div className="prediction--53c61">
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
                                            backgroundColor: "transparent",
                                            borderColor: "transparent",
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
                                    <div className="prediction--53c61">
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
                                            backgroundColor: "transparent",
                                            borderColor: "transparent",
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
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                      fill="#2E83FF"
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
                                <div className="roadsContainer--67673">
                                  <div
                                    className="wrapper--f4eb9"
                                    data-role="scrollable-wrapper"
                                  >
                                    <div
                                      data-role="scrollable"
                                      className="scrollable--96151 horizontal--8dcae hiddenScrollbar--27373"
                                      style={{
                                        maskImage:
                                          "linear-gradient(transparent 0%,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%,transparent 100%),linear-gradient(to right,transparent 0%,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 89%, transparent 100% )",
                                      }}
                                    >
                                      <div className="scrollContent--6aa96">
                                        <div
                                          className="fourRoads--4b982 isPortrait--9df54 isPortraitWidePhone--d8ba9 reducedHeight--86cb1"
                                          style={{ height: "214px" }}
                                        >
                                          <div className="roads--d0173 white--48bfa right--94e52 noPadding--52fc3">
                                            <div className="roadGrid--aaa62">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 38.5 9.4"
                                                className="gridCreator--b3937"
                                              >
                                                <rect
                                                  width="18.4"
                                                  height="9.4"
                                                  rx="0.2"
                                                  fill="#fff"
                                                  x={0}
                                                  y={0}
                                                  stroke="none"
                                                  strokeWidth="none"
                                                  style={{
                                                    pointerEvents: "none",
                                                  }}
                                                />
                                                <rect
                                                  width="19.9"
                                                  height="9.4"
                                                  rx="0.2"
                                                  fill="#fff"
                                                  x="18.599999999999998"
                                                  y={0}
                                                  stroke="none"
                                                  strokeWidth="none"
                                                  style={{
                                                    pointerEvents: "none",
                                                  }}
                                                />
                                                <svg
                                                  x="18.799999999999997"
                                                  y="0.2"
                                                  width="19.5"
                                                  height={9}
                                                >
                                                  <svg
                                                    data-role="Bead-road"
                                                    data-mode="en"
                                                    viewBox="0 0 13 6"
                                                    className="beadRoad--9fce3"
                                                  >
                                                    <svg
                                                      className="svg--eb430"
                                                      viewBox="0 0 13 6"
                                                    >
                                                      <rect
                                                        x={0}
                                                        y={0}
                                                        fill="#ffffff"
                                                        width={13}
                                                        height={6}
                                                      />
                                                      <defs>
                                                        <svg
                                                          id="bead-road"
                                                          width={1}
                                                          height={1}
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="svg--c8f9e"
                                                            viewBox="0 0 80 80"
                                                            data-type="emptyRoadItem"
                                                          >
                                                            <svg
                                                              height={100}
                                                              width={100}
                                                            >
                                                              <circle
                                                                cx={40}
                                                                cy={40}
                                                                r={8}
                                                                fill="rgba(255,255,255,0.15)"
                                                              />
                                                            </svg>
                                                          </svg>
                                                        </svg>
                                                      </defs>
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={9}
                                                        y={0}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={10}
                                                        y={0}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={11}
                                                        y={0}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={12}
                                                        y={0}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={9}
                                                        y={1}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={10}
                                                        y={1}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={11}
                                                        y={1}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={12}
                                                        y={1}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={9}
                                                        y={2}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={10}
                                                        y={2}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={11}
                                                        y={2}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={12}
                                                        y={2}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={9}
                                                        y={3}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={10}
                                                        y={3}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={11}
                                                        y={3}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={12}
                                                        y={3}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={9}
                                                        y={4}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={10}
                                                        y={4}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={11}
                                                        y={4}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={12}
                                                        y={4}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={9}
                                                        y={5}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={10}
                                                        y={5}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={11}
                                                        y={5}
                                                      />
                                                      <use
                                                        xlinkHref="#bead-road"
                                                        x={12}
                                                        y={5}
                                                      />
                                                      <line
                                                        x1={0}
                                                        x2={13}
                                                        y1="0.025"
                                                        y2="0.025"
                                                        stroke="rgba(167, 169, 172, 0.5)"
                                                        style={{
                                                          strokeWidth: "0.05",
                                                        }}
                                                      />
                                                      <line
                                                        x1={0}
                                                        x2={13}
                                                        y1={1}
                                                        y2={1}
                                                        stroke="rgba(167, 169, 172, 0.5)"
                                                        style={{
                                                          strokeWidth: "0.05",
                                                        }}
                                                      />
                                                      <line
                                                        x1={0}
                                                        x2={13}
                                                        y1={2}
                                                        y2={2}
                                                        stroke="rgba(167, 169, 172, 0.5)"
                                                        style={{
                                                          strokeWidth: "0.05",
                                                        }}
                                                      />
                                                      <line
                                                        x1={0}
                                                        x2={13}
                                                        y1={3}
                                                        y2={3}
                                                        stroke="rgba(167, 169, 172, 0.5)"
                                                        style={{
                                                          strokeWidth: "0.05",
                                                        }}
                                                      />
                                                      <line
                                                        x1={0}
                                                        x2={13}
                                                        y1={4}
                                                        y2={4}
                                                        stroke="rgba(167, 169, 172, 0.5)"
                                                        style={{
                                                          strokeWidth: "0.05",
                                                        }}
                                                      />
                                                      <line
                                                        x1={0}
                                                        x2={13}
                                                        y1={5}
                                                        y2={5}
                                                        stroke="rgba(167, 169, 172, 0.5)"
                                                        style={{
                                                          strokeWidth: "0.05",
                                                        }}
                                                      />
                                                      <line
                                                        x1={0}
                                                        x2={13}
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
                                                        x1="12.975"
                                                        x2="12.975"
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
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="0.05"
                                                        y="3.05"
                                                        data-type="coordinates"
                                                        data-x={0}
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="0.05"
                                                        y="4.05"
                                                        data-type="coordinates"
                                                        data-x={0}
                                                        data-y={4}
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="svg--c8f9e"
                                                          viewBox="0 0 80 80"
                                                          data-role="roadItem"
                                                          name="Tie"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="0.05"
                                                        y="5.05"
                                                        data-type="coordinates"
                                                        data-x={0}
                                                        data-y={5}
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="svg--c8f9e"
                                                          viewBox="0 0 80 80"
                                                          data-role="roadItem"
                                                          name="Banker"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                                fill="#EC2024"
                                                                stroke="none"
                                                                data-role="roadItemColor"
                                                              >
                                                                <path
                                                                  d="
    M290 769 c-19 -6 -36 -12 -38 -13 -1 -2 5 -19 13 -39 48 -114 -25
    -243 -144 -255 -27 -2 -63 0 -80 6 -36 13 -41 4 -41 -78 0 -212 175 -390 383
    -390 54 0 147 17 147 27 0 2 -8 15 -17 30 -23 35 -23 118 1 167 12 23 38 50
    65 68 40 25 54 29 101 25 30 -2 62 -7 71 -11 14 -6 18 1 24 42 21 156 -80 329
    -232 399 -65 30 -190 41 -253 22z
"
                                                                  fill="#EC2024"
                                                                />
                                                              </g>
                                                              <circle
                                                                cx={67}
                                                                cy={63}
                                                                r={10}
                                                                fill="#EC2024"
                                                              />
                                                              <circle
                                                                cx={10}
                                                                cy={14}
                                                                r={10}
                                                                fill="#2E83FF"
                                                              />
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
                                                          name="Banker Banker"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
    M312 770 c-64 -13 -157 -67 -203 -117 -22 -24 -55 -74 -72 -111 -27
    -59 -31 -78 -31 -152 0 -74 4 -93 31 -152 78 -167 244 -259 416 -228 37 6 67
    15 67 20 0 4 -7 24 -15 43 -56 135 71 282 215 249 25 -6 47 -8 50 -5 3 2 5 40
    4 84 -1 69 -5 87 -37 152 -44 88 -103 147 -190 187 -69 33 -165 45 -235 30z
"
                                                                  fill="#EC2024"
                                                                />
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
                                                                  strokeDasharray="1175, 350"
                                                                />
                                                              </g>
                                                              <circle
                                                                cx={67}
                                                                cy={63}
                                                                r={10}
                                                                fill="#EC2024"
                                                              />
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="1.05"
                                                        y="3.05"
                                                        data-type="coordinates"
                                                        data-x={1}
                                                        data-y={3}
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="svg--c8f9e"
                                                          viewBox="0 0 80 80"
                                                          data-role="roadItem"
                                                          name="Player"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="1.05"
                                                        y="4.05"
                                                        data-type="coordinates"
                                                        data-x={1}
                                                        data-y={4}
                                                      >
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="1.05"
                                                        y="5.05"
                                                        data-type="coordinates"
                                                        data-x={1}
                                                        data-y={5}
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="2.05"
                                                        y="3.05"
                                                        data-type="coordinates"
                                                        data-x={2}
                                                        data-y={3}
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="svg--c8f9e"
                                                          viewBox="0 0 80 80"
                                                          data-role="roadItem"
                                                          name="Player"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="2.05"
                                                        y="4.05"
                                                        data-type="coordinates"
                                                        data-x={2}
                                                        data-y={4}
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="svg--c8f9e"
                                                          viewBox="0 0 80 80"
                                                          data-role="roadItem"
                                                          name="Player"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="2.05"
                                                        y="5.05"
                                                        data-type="coordinates"
                                                        data-x={2}
                                                        data-y={5}
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="3.05"
                                                        y="2.05"
                                                        data-type="coordinates"
                                                        data-x={3}
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="3.05"
                                                        y="3.05"
                                                        data-type="coordinates"
                                                        data-x={3}
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="3.05"
                                                        y="4.05"
                                                        data-type="coordinates"
                                                        data-x={3}
                                                        data-y={4}
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="3.05"
                                                        y="5.05"
                                                        data-type="coordinates"
                                                        data-x={3}
                                                        data-y={5}
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
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="4.05"
                                                        y="2.05"
                                                        data-type="coordinates"
                                                        data-x={4}
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="4.05"
                                                        y="3.05"
                                                        data-type="coordinates"
                                                        data-x={4}
                                                        data-y={3}
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="svg--c8f9e"
                                                          viewBox="0 0 80 80"
                                                          data-role="roadItem"
                                                          name="Player"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="4.05"
                                                        y="4.05"
                                                        data-type="coordinates"
                                                        data-x={4}
                                                        data-y={4}
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
                                                                fill="#2E83FF"
                                                                stroke="none"
                                                                data-role="roadItemColor"
                                                              >
                                                                <path
                                                                  d="
    M308 768 c-27 -5 -48 -14 -48 -18 0 -4 7 -24 15 -43 56 -135 -71
    -282 -215 -249 -25 6 -47 8 -50 5 -3 -2 -5 -40 -4 -84 1 -69 5 -87 37 -152 44
    -90 103 -147 195 -190 59 -27 78 -31 152 -31 74 0 93 4 152 31 92 43 151 100
    195 191 34 69 37 81 37 162 0 81 -3 93 -37 162 -44 89 -103 148 -190 188 -71
    34 -166 45 -239 28z
"
                                                                  fill="#2E83FF"
                                                                />
                                                              </g>
                                                              <circle
                                                                cx={10}
                                                                cy={14}
                                                                r={10}
                                                                fill="#2E83FF"
                                                              />
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="4.05"
                                                        y="5.05"
                                                        data-type="coordinates"
                                                        data-x={4}
                                                        data-y={5}
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
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                          name="Banker Banker"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
    M312 770 c-64 -13 -157 -67 -203 -117 -22 -24 -55 -74 -72 -111 -27
    -59 -31 -78 -31 -152 0 -74 4 -93 31 -152 78 -167 244 -259 416 -228 37 6 67
    15 67 20 0 4 -7 24 -15 43 -56 135 71 282 215 249 25 -6 47 -8 50 -5 3 2 5 40
    4 84 -1 69 -5 87 -37 152 -44 88 -103 147 -190 187 -69 33 -165 45 -235 30z
"
                                                                  fill="#EC2024"
                                                                />
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
                                                                  strokeDasharray="1175, 350"
                                                                />
                                                              </g>
                                                              <circle
                                                                cx={67}
                                                                cy={63}
                                                                r={10}
                                                                fill="#EC2024"
                                                              />
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="5.05"
                                                        y="4.05"
                                                        data-type="coordinates"
                                                        data-x={5}
                                                        data-y={4}
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="5.05"
                                                        y="5.05"
                                                        data-type="coordinates"
                                                        data-x={5}
                                                        data-y={5}
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="svg--c8f9e"
                                                          viewBox="0 0 80 80"
                                                          data-role="roadItem"
                                                          name="Banker"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="6.05"
                                                        y="1.05"
                                                        data-type="coordinates"
                                                        data-x={6}
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="6.05"
                                                        y="2.05"
                                                        data-type="coordinates"
                                                        data-x={6}
                                                        data-y={2}
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="svg--c8f9e"
                                                          viewBox="0 0 80 80"
                                                          data-role="roadItem"
                                                          name="Player"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="6.05"
                                                        y="3.05"
                                                        data-type="coordinates"
                                                        data-x={6}
                                                        data-y={3}
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="svg--c8f9e"
                                                          viewBox="0 0 80 80"
                                                          data-role="roadItem"
                                                          name="Banker"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="6.05"
                                                        y="4.05"
                                                        data-type="coordinates"
                                                        data-x={6}
                                                        data-y={4}
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
                                                                fill="#2E83FF"
                                                                stroke="none"
                                                                data-role="roadItemColor"
                                                              >
                                                                <path
                                                                  d="
    M312 770 c-64 -13 -157 -67 -203 -117 -22 -24 -55 -74 -72 -111 -27
    -59 -31 -78 -31 -152 0 -74 4 -93 31 -152 78 -167 244 -259 416 -228 37 6 67
    15 67 20 0 4 -7 24 -15 43 -56 135 71 282 215 249 25 -6 47 -8 50 -5 3 2 5 40
    4 84 -1 69 -5 87 -37 152 -44 88 -103 147 -190 187 -69 33 -165 45 -235 30z
"
                                                                  fill="#2E83FF"
                                                                />
                                                              </g>
                                                              <circle
                                                                cx={67}
                                                                cy={63}
                                                                r={10}
                                                                fill="#EC2024"
                                                              />
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="6.05"
                                                        y="5.05"
                                                        data-type="coordinates"
                                                        data-x={6}
                                                        data-y={5}
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
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
    M308 768 c-27 -5 -48 -14 -48 -18 0 -4 7 -24 15 -43 56 -135 -71
    -282 -215 -249 -25 6 -47 8 -50 5 -3 -2 -5 -40 -4 -84 1 -69 5 -87 37 -152 44
    -90 103 -147 195 -190 59 -27 78 -31 152 -31 74 0 93 4 152 31 92 43 151 100
    195 191 34 69 37 81 37 162 0 81 -3 93 -37 162 -44 89 -103 148 -190 188 -71
    34 -166 45 -239 28z
"
                                                                  fill="#EC2024"
                                                                />
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
                                                                  strokeDasharray="75, 350, 1800"
                                                                />
                                                              </g>
                                                              <circle
                                                                cx={10}
                                                                cy={14}
                                                                r={10}
                                                                fill="#2E83FF"
                                                              />
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
                                                          name="Tie"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="7.05"
                                                        y="5.05"
                                                        data-type="coordinates"
                                                        data-x={7}
                                                        data-y={5}
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
                                                          name="Banker"
                                                        >
                                                          <defs>
                                                            <linearGradient
                                                              x1="50%"
                                                              y1="0%"
                                                              x2="50%"
                                                              y2="100%"
                                                              id="lightningCircleGradientFaceLift"
                                                            >
                                                              <stop
                                                                stopColor="#dcb51b"
                                                                offset="0%"
                                                              />
                                                              <stop
                                                                stopColor="#ffffff"
                                                                offset="46.0800918%"
                                                              />
                                                              <stop
                                                                stopColor="#c8a311"
                                                                offset="100%"
                                                              />
                                                            </linearGradient>
                                                          </defs>
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
                                                                <path
                                                                  d="M40,390a350,350 0 1,0 700,0a350,350 0 1,0 -700,0"
                                                                  fill="none"
                                                                  stroke="url(#lightningCircleGradientFaceLift)"
                                                                  strokeWidth={
                                                                    80
                                                                  }
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="8.05"
                                                        y="3.05"
                                                        data-type="coordinates"
                                                        data-x={8}
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="8.05"
                                                        y="4.05"
                                                        data-type="coordinates"
                                                        data-x={8}
                                                        data-y={4}
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
                                                      </svg>
                                                      <svg
                                                        width="0.95"
                                                        height="0.95"
                                                        x="8.05"
                                                        y="5.05"
                                                        data-type="coordinates"
                                                        data-x={8}
                                                        data-y={5}
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
                                                      </svg>
                                                    </svg>
                                                  </svg>
                                                </svg>
                                                <svg x="0.2" y={0} width={18}>
                                                  <svg
                                                    viewBox="0 0 18 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <g>
                                                      <svg
                                                        id="Big-0.9480638922282743"
                                                        x={0}
                                                        y={0}
                                                        width={18}
                                                        height={6}
                                                        data-role="Big-road"
                                                      >
                                                        <svg
                                                          className="svg--eb430"
                                                          viewBox="0 0 18 6"
                                                        >
                                                          <rect
                                                            x={0}
                                                            y={0}
                                                            fill="#ffffff"
                                                            width={18}
                                                            height={6}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={18}
                                                            y1="0.025"
                                                            y2="0.025"
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={18}
                                                            y1={1}
                                                            y2={1}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={18}
                                                            y1={2}
                                                            y2={2}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={18}
                                                            y1={3}
                                                            y2={3}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={18}
                                                            y1={4}
                                                            y2={4}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={18}
                                                            y1={5}
                                                            y2={5}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={18}
                                                            y1="5.975"
                                                            y2="5.975"
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1="0.025"
                                                            x2="0.025"
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={1}
                                                            x2={1}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={2}
                                                            x2={2}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={3}
                                                            x2={3}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={4}
                                                            x2={4}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={5}
                                                            x2={5}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={6}
                                                            x2={6}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={7}
                                                            x2={7}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={8}
                                                            x2={8}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={9}
                                                            x2={9}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={10}
                                                            x2={10}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={11}
                                                            x2={11}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={12}
                                                            x2={12}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={13}
                                                            x2={13}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={14}
                                                            x2={14}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={15}
                                                            x2={15}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={16}
                                                            x2={16}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1={17}
                                                            x2={17}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
                                                            }}
                                                          />
                                                          <line
                                                            x1="17.975"
                                                            x2="17.975"
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.05",
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
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="lightningCircleGradient"
                                                                >
                                                                  <stop
                                                                    stopColor="#956723"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#c69844"
                                                                    offset="56%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#f4e584"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
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
                                                                      fill="url(#lightningCircleGradient)"
                                                                    />
                                                                  </g>
                                                                  <circle
                                                                    data-type="lightning-circle"
                                                                    fill="#EC2024"
                                                                    cx={39}
                                                                    cy={39}
                                                                    r={22}
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
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                      fill="#2E83FF"
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
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="lightningCircleGradient"
                                                                >
                                                                  <stop
                                                                    stopColor="#956723"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#c69844"
                                                                    offset="56%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#f4e584"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
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
                                                                      fill="url(#lightningCircleGradient)"
                                                                    />
                                                                  </g>
                                                                  <circle
                                                                    data-type="lightning-circle"
                                                                    fill="#EC2024"
                                                                    cx={39}
                                                                    cy={39}
                                                                    r={22}
                                                                  />
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
                                                              name="Banker Banker"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="lightningCircleGradient"
                                                                >
                                                                  <stop
                                                                    stopColor="#956723"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#c69844"
                                                                    offset="56%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#f4e584"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
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
    M312 770 c-64 -13 -157 -67 -203 -117 -22 -24 -55 -74 -72 -111 -27
    -59 -31 -78 -31 -152 0 -74 4 -93 31 -152 78 -167 244 -259 416 -228 37 6 67
    15 67 20 0 4 -7 24 -15 43 -56 135 71 282 215 249 25 -6 47 -8 50 -5 3 2 5 40
    4 84 -1 69 -5 87 -37 152 -44 88 -103 147 -190 187 -69 33 -165 45 -235 30z
"
                                                                      fill="url(#lightningCircleGradient)"
                                                                    />
                                                                  </g>
                                                                  <circle
                                                                    data-type="lightning-circle"
                                                                    fill="#EC2024"
                                                                    cx={39}
                                                                    cy={39}
                                                                    r={22}
                                                                  />
                                                                  <circle
                                                                    cx={67}
                                                                    cy={63}
                                                                    r={10}
                                                                    fill="#EC2024"
                                                                  />
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
                                                          </svg>
                                                          <svg
                                                            width="0.95"
                                                            height="0.95"
                                                            x="2.05"
                                                            y="3.05"
                                                            data-type="coordinates"
                                                            data-x={2}
                                                            data-y={3}
                                                          >
                                                            <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              className="svg--c8f9e"
                                                              viewBox="0 0 80 80"
                                                              data-role="roadItem"
                                                              name="Banker"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="lightningCircleGradient"
                                                                >
                                                                  <stop
                                                                    stopColor="#956723"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#c69844"
                                                                    offset="56%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#f4e584"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
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
                                                                      fill="url(#lightningCircleGradient)"
                                                                    />
                                                                  </g>
                                                                  <circle
                                                                    data-type="lightning-circle"
                                                                    fill="#EC2024"
                                                                    cx={39}
                                                                    cy={39}
                                                                    r={22}
                                                                  />
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
                                                                    fill="#2E83FF"
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
                                                                      fill="#2E83FF"
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
                                                                    fill="#2E83FF"
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
                                                                      fill="#2E83FF"
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
                                                            y="2.05"
                                                            data-type="coordinates"
                                                            data-x={3}
                                                            data-y={2}
                                                          >
                                                            <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              className="svg--c8f9e"
                                                              viewBox="0 0 80 80"
                                                              data-role="roadItem"
                                                              name="Player"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="lightningCircleGradient"
                                                                >
                                                                  <stop
                                                                    stopColor="#956723"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#c69844"
                                                                    offset="56%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#f4e584"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
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
                                                                      fill="url(#lightningCircleGradient)"
                                                                    />
                                                                  </g>
                                                                  <circle
                                                                    data-type="lightning-circle"
                                                                    fill="#2E83FF"
                                                                    cx={39}
                                                                    cy={39}
                                                                    r={22}
                                                                  />
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
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="lightningCircleGradient"
                                                                >
                                                                  <stop
                                                                    stopColor="#956723"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#c69844"
                                                                    offset="56%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#f4e584"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
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
                                                                      fill="url(#lightningCircleGradient)"
                                                                    />
                                                                  </g>
                                                                  <circle
                                                                    data-type="lightning-circle"
                                                                    fill="#EC2024"
                                                                    cx={39}
                                                                    cy={39}
                                                                    r={22}
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
                                                                    fill="#2E83FF"
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
                                                                      fill="#2E83FF"
                                                                    />
                                                                  </g>
                                                                  <circle
                                                                    cx={67}
                                                                    cy={63}
                                                                    r={10}
                                                                    fill="#EC2024"
                                                                  />
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
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                      fill="#2E83FF"
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
                                                              name="Banker TiePlayer"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="lightningCircleGradient"
                                                                >
                                                                  <stop
                                                                    stopColor="#956723"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#c69844"
                                                                    offset="56%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#f4e584"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
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
                                                                      fill="url(#lightningCircleGradient)"
                                                                    />
                                                                  </g>
                                                                  <circle
                                                                    data-type="lightning-circle"
                                                                    fill="#EC2024"
                                                                    cx={39}
                                                                    cy={39}
                                                                    r={22}
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
                                                                      fill="#159252"
                                                                    />
                                                                  </g>
                                                                  <circle
                                                                    cx={10}
                                                                    cy={14}
                                                                    r={10}
                                                                    fill="#2E83FF"
                                                                  />
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
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                      fill="#2E83FF"
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
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                      fill="#2E83FF"
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
                                                              name="Banker"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="50%"
                                                                  y1="0%"
                                                                  x2="50%"
                                                                  y2="100%"
                                                                  id="lightningCircleGradient"
                                                                >
                                                                  <stop
                                                                    stopColor="#956723"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#c69844"
                                                                    offset="56%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#f4e584"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                              </defs>
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
                                                                      fill="url(#lightningCircleGradient)"
                                                                    />
                                                                  </g>
                                                                  <circle
                                                                    data-type="lightning-circle"
                                                                    fill="#EC2024"
                                                                    cx={39}
                                                                    cy={39}
                                                                    r={22}
                                                                  />
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
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                      fill="#2E83FF"
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
                                                            y="1.05"
                                                            data-type="coordinates"
                                                            data-x={11}
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
                                                                    fill="#2E83FF"
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
                                                                      fill="#2E83FF"
                                                                    />
                                                                  </g>
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
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                      fill="#2E83FF"
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
    M275 764 c-103 -37 -194 -110 -228 -184 -81 -174 -56 -342 67 -466
    154 -153 398 -153 552 0 123 124 148 292 67 466 -21 44 -109 132 -153 153
    -105 48 -221 60 -305 31z m179 -123 c3 -4 19 -11 36 -15 40 -8 128 -96 136
    -136 4 -17 11 -33 15 -36 5 -3 9 -32 9 -64 0 -32 -4 -61 -9 -64 -4 -3 -11 -19
    -15 -36 -8 -40 -96 -128 -136 -136 -17 -4 -33 -11 -36 -15 -3 -5 -32 -9 -64
    -9 -32 0 -61 4 -64 9 -3 4 -19 11 -36 15 -40 8 -128 96 -136 136 -4 17 -11 33
    -15 36 -12 7 -12 121 0 128 4 3 11 19 15 36 8 40 96 128 136 136 17 4 33 11
    36 15 3 5 32 9 64 9 32 0 61 -4 64 -9z
"
                                                                      fill="#2E83FF"
                                                                    />
                                                                  </g>
                                                                </svg>
                                                              </g>
                                                            </svg>
                                                          </svg>
                                                        </svg>
                                                      </svg>
                                                    </g>
                                                    <g>
                                                      <svg
                                                        id="BigEye-0.9480638922282743"
                                                        x={0}
                                                        y={6}
                                                        width={6}
                                                        height={3}
                                                        data-role="BigEye-road"
                                                      >
                                                        <svg
                                                          className="svg--eb430"
                                                          viewBox="0 0 12 6"
                                                        >
                                                          <rect
                                                            x={0}
                                                            y={0}
                                                            fill="#ffffff"
                                                            width={12}
                                                            height={6}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={12}
                                                            y1="0.05"
                                                            y2="0.05"
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={12}
                                                            y1={2}
                                                            y2={2}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={12}
                                                            y1={4}
                                                            y2={4}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={12}
                                                            y1="5.95"
                                                            y2="5.95"
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1="0.05"
                                                            x2="0.05"
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={2}
                                                            x2={2}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={4}
                                                            x2={4}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={6}
                                                            x2={6}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={8}
                                                            x2={8}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={10}
                                                            x2={10}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1="11.95"
                                                            x2="11.95"
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="0.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="0.1"
                                                            y="1.1"
                                                            data-type="coordinates"
                                                            data-x={0}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="1.1"
                                                            y="0.1"
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
                                                                    fill="#2E83FF"
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
                                                                      fill="#2E83FF"
                                                                    />
                                                                  </g>
                                                                </svg>
                                                              </g>
                                                            </svg>
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="2.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="2.1"
                                                            y="1.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="3.1"
                                                            y="0.1"
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
                                                                    fill="#2E83FF"
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
                                                                      fill="#2E83FF"
                                                                    />
                                                                  </g>
                                                                </svg>
                                                              </g>
                                                            </svg>
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="3.1"
                                                            y="1.1"
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
                                                                    fill="#2E83FF"
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
                                                                      fill="#2E83FF"
                                                                    />
                                                                  </g>
                                                                </svg>
                                                              </g>
                                                            </svg>
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="4.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="4.1"
                                                            y="1.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="4.1"
                                                            y="2.1"
                                                            data-type="coordinates"
                                                            data-x={4}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="4.1"
                                                            y="3.1"
                                                            data-type="coordinates"
                                                            data-x={4}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="5.1"
                                                            y="0.1"
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
                                                                    fill="#2E83FF"
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
                                                                      fill="#2E83FF"
                                                                    />
                                                                  </g>
                                                                </svg>
                                                              </g>
                                                            </svg>
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="5.1"
                                                            y="1.1"
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
                                                                    fill="#2E83FF"
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
                                                                      fill="#2E83FF"
                                                                    />
                                                                  </g>
                                                                </svg>
                                                              </g>
                                                            </svg>
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="6.1"
                                                            y="0.1"
                                                            data-type="coordinates"
                                                            data-x={6}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="6.1"
                                                            y="1.1"
                                                            data-type="coordinates"
                                                            data-x={6}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="6.1"
                                                            y="2.1"
                                                            data-type="coordinates"
                                                            data-x={6}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="6.1"
                                                            y="3.1"
                                                            data-type="coordinates"
                                                            data-x={6}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="7.1"
                                                            y="0.1"
                                                            data-type="coordinates"
                                                            data-x={7}
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
                                                                    fill="#2E83FF"
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
                                                                      fill="#2E83FF"
                                                                    />
                                                                  </g>
                                                                </svg>
                                                              </g>
                                                            </svg>
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="7.1"
                                                            y="1.1"
                                                            data-type="coordinates"
                                                            data-x={7}
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
                                                                    fill="#2E83FF"
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
                                                                      fill="#2E83FF"
                                                                    />
                                                                  </g>
                                                                </svg>
                                                              </g>
                                                            </svg>
                                                          </svg>
                                                        </svg>
                                                      </svg>
                                                    </g>
                                                    <g>
                                                      <svg
                                                        id="Small-0.9480638922282743"
                                                        x={6}
                                                        y={6}
                                                        width={6}
                                                        height={3}
                                                        data-role="Small-road"
                                                      >
                                                        <svg
                                                          className="svg--eb430"
                                                          viewBox="0 0 12 6"
                                                        >
                                                          <rect
                                                            x={0}
                                                            y={0}
                                                            fill="#ffffff"
                                                            width={12}
                                                            height={6}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={12}
                                                            y1="0.05"
                                                            y2="0.05"
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={12}
                                                            y1={2}
                                                            y2={2}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={12}
                                                            y1={4}
                                                            y2={4}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={12}
                                                            y1="5.95"
                                                            y2="5.95"
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1="0.05"
                                                            x2="0.05"
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={2}
                                                            x2={2}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={4}
                                                            x2={4}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={6}
                                                            x2={6}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={8}
                                                            x2={8}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={10}
                                                            x2={10}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1="11.95"
                                                            x2="11.95"
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="0.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="0.1"
                                                            y="1.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="1.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="2.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="2.1"
                                                            y="1.1"
                                                            data-type="coordinates"
                                                            data-x={2}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="2.1"
                                                            y="2.1"
                                                            data-type="coordinates"
                                                            data-x={2}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="3.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="3.1"
                                                            y="1.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="3.1"
                                                            y="2.1"
                                                            data-type="coordinates"
                                                            data-x={3}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="4.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="4.1"
                                                            y="1.1"
                                                            data-type="coordinates"
                                                            data-x={4}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="4.1"
                                                            y="2.1"
                                                            data-type="coordinates"
                                                            data-x={4}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="4.1"
                                                            y="3.1"
                                                            data-type="coordinates"
                                                            data-x={4}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="5.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="5.1"
                                                            y="1.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="6.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="7.1"
                                                            y="0.1"
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
                                                          </svg>
                                                        </svg>
                                                      </svg>
                                                    </g>
                                                    <g>
                                                      <svg
                                                        id="Cockroach-0.9480638922282743"
                                                        x={12}
                                                        y={6}
                                                        width={6}
                                                        height={3}
                                                        data-role="Cockroach-road"
                                                      >
                                                        <svg
                                                          className="svg--eb430"
                                                          viewBox="0 0 12 6"
                                                        >
                                                          <rect
                                                            x={0}
                                                            y={0}
                                                            fill="#ffffff"
                                                            width={12}
                                                            height={6}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={12}
                                                            y1="0.05"
                                                            y2="0.05"
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={12}
                                                            y1={2}
                                                            y2={2}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={12}
                                                            y1={4}
                                                            y2={4}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={0}
                                                            x2={12}
                                                            y1="5.95"
                                                            y2="5.95"
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1="0.05"
                                                            x2="0.05"
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={2}
                                                            x2={2}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={4}
                                                            x2={4}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={6}
                                                            x2={6}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={8}
                                                            x2={8}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1={10}
                                                            x2={10}
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <line
                                                            x1="11.95"
                                                            x2="11.95"
                                                            y1={0}
                                                            y2={6}
                                                            stroke="rgba(167, 169, 172, 0.5)"
                                                            style={{
                                                              strokeWidth:
                                                                "0.1",
                                                            }}
                                                          />
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="0.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="0.1"
                                                            y="1.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="0.1"
                                                            y="2.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="1.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="2.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="3.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="4.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="4.1"
                                                            y="1.1"
                                                            data-type="coordinates"
                                                            data-x={4}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="5.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="5.1"
                                                            y="1.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="6.1"
                                                            y="0.1"
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="6.1"
                                                            y="1.1"
                                                            data-type="coordinates"
                                                            data-x={6}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="6.1"
                                                            y="2.1"
                                                            data-type="coordinates"
                                                            data-x={6}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="6.1"
                                                            y="3.1"
                                                            data-type="coordinates"
                                                            data-x={6}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="6.1"
                                                            y="4.1"
                                                            data-type="coordinates"
                                                            data-x={6}
                                                            data-y={4}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="6.1"
                                                            y="5.1"
                                                            data-type="coordinates"
                                                            data-x={6}
                                                            data-y={5}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="7.1"
                                                            y="5.1"
                                                            data-type="coordinates"
                                                            data-x={7}
                                                            data-y={5}
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
                                                          </svg>
                                                          <svg
                                                            width="0.9"
                                                            height="0.9"
                                                            x="7.1"
                                                            y="0.1"
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
                                                          </svg>
                                                        </svg>
                                                      </svg>
                                                    </g>
                                                    <animate
                                                      xlinkHref="#Big-0.9480638922282743"
                                                      from={0}
                                                      to={-9}
                                                      attributeName="x"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#Big-0.9480638922282743"
                                                      from={18}
                                                      to={27}
                                                      attributeName="width"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#Big-0.9480638922282743"
                                                      from={6}
                                                      to={9}
                                                      attributeName="height"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#BigEye-0.9480638922282743"
                                                      from={6}
                                                      to={0}
                                                      attributeName="y"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#BigEye-0.9480638922282743"
                                                      from={6}
                                                      to={18}
                                                      attributeName="width"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#BigEye-0.9480638922282743"
                                                      from={3}
                                                      to={9}
                                                      attributeName="height"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#Small-0.9480638922282743"
                                                      from={6}
                                                      to={0}
                                                      attributeName="x"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#Small-0.9480638922282743"
                                                      from={6}
                                                      to={0}
                                                      attributeName="y"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#Small-0.9480638922282743"
                                                      from={6}
                                                      to={18}
                                                      attributeName="width"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#Small-0.9480638922282743"
                                                      from={3}
                                                      to={9}
                                                      attributeName="height"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#Cockroach-0.9480638922282743"
                                                      from={12}
                                                      to={0}
                                                      attributeName="x"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#Cockroach-0.9480638922282743"
                                                      from={6}
                                                      to={0}
                                                      attributeName="y"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#Cockroach-0.9480638922282743"
                                                      from={6}
                                                      to={18}
                                                      attributeName="width"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                    <animate
                                                      xlinkHref="#Cockroach-0.9480638922282743"
                                                      from={3}
                                                      to={9}
                                                      attributeName="height"
                                                      dur="400ms"
                                                      begin="click"
                                                      fill="freeze"
                                                    />
                                                  </svg>
                                                </svg>
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
                          <div className="particlesFall--6426e mobile--83bf3">
                            <canvas style={{ width: "100%", height: "100%" }} />
                          </div>
                        </div>
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
                        padding: "calc(var(--rem-migration-size, 10px) * 0.1)",
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
              <div className="buttonContainer--8c7a9 isLeft--03674">
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
        <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
          <div className="relativeChildren--99d54">
            <div
              className="chipstack--3f519 positionBottomCentered--447ab visible--27fab phone--e75c2"
              data-role="chipstack-container"
            >
              <div className="container--4e775">
                <div className="before--33fc6 commonUiElement hideable--4b209">
                  <div
                    className="actionButton--e4d79 buttonPositionLeft--2073e"
                    data-role="chipstack-undo-button"
                  >
                    <div style={{ position: "relative" }}>
                      <button
                        className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonStateDisabled--77839 buttonRoot--3bd4d disabled--c81e1"
                        data-type="secondary"
                        data-role="undo-button"
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
                                "cal( var(--rem-migration-size, 10px) * 0.1)",
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
                    <button className="clickableLabel--ffc68">
                      <div className="label--e8213">
                        <div
                          className="label--365af disabledButtonLabel--a77ae buttonLocationChipStackHorizontal--4058e"
                          data-role="chip-stack-label"
                        >
                          UNDO
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="wrapper--08238 hideable--4b209">
                  <div
                    data-role="chip-stack"
                    className="revolver--30d24 commonUiElement up--a4695 disabled--8c25d"
                  >
                    <div
                      className="overlay--ba584"
                      data-revolver-overlay="true"
                      data-role="revolver-overlay"
                    />
                    <ul
                      className="items--4189d"
                      data-role="revolver-item-list"
                      style={{
                        top: "calc(var(--size, 10px) * -6.85)",
                        left: "calc(var(--size, 10px) * -5.3)",
                        width: "calc(var(--size, 10px) * 15)",
                        height: "calc(var(--size, 10px) * 15)",
                        "-chipTransitionDuration": "0ms",
                      }}
                    >
                      <li
                        className="item--9e3ac chip--5e586"
                        data-role="revolver-chip-item"
                        style={{
                          top: "calc(var(--size, 10px) * 5.7)",
                          left: "calc(var(--size, 10px) * 5.7)",
                          width: "calc(var(--size, 10px) * 3.6)",
                          height: "calc(var(--size, 10px) * 3.6)",
                        }}
                      >
                        <div
                          className="chip--29b81 disabled--5146f cover--6df8f"
                          data-role="chip"
                          data-value={100}
                        >
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
                      </li>
                      <li
                        className="item--9e3ac chip--5e586"
                        data-role="revolver-chip-item"
                        style={{
                          top: "calc(var(--size, 10px) * 5.675)",
                          left: "calc(var(--size, 10px) * 4.65)",
                          width: "calc(var(--size, 10px) * 3.65)",
                          height: "calc(var(--size, 10px) * 3.65)",
                        }}
                      >
                        <div
                          className="chip--29b81 disabled--5146f cover--6df8f"
                          data-role="chip"
                          data-value={200}
                        >
                          <svg
                            viewBox="0 0 78 78"
                            className="graphics--22cbe"
                            data-role="default-svg"
                            style={{ color: "rgb(255, 130, 214)" }}
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
                          width: "calc(var(--size, 10px) * 3.6)",
                          height: "calc(var(--size, 10px) * 3.6)",
                        }}
                      >
                        <div
                          className="chip--29b81 disabled--5146f cover--6df8f"
                          data-role="chip"
                          data-value={500}
                        >
                          <svg
                            viewBox="0 0 78 78"
                            className="graphics--22cbe"
                            data-role="default-svg"
                            style={{ color: "rgb(206, 29, 0)" }}
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
                          width: "calc(var(--size, 10px) * 3.6)",
                          height: "calc(var(--size, 10px) * 3.6)",
                        }}
                      >
                        <div
                          className="chip--29b81 disabled--5146f cover--6df8f"
                          data-role="chip"
                          data-value={2500}
                        >
                          <svg
                            viewBox="0 0 78 78"
                            className="graphics--22cbe"
                            data-role="default-svg"
                            style={{ color: "rgb(5, 174, 41)" }}
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
                          top: "calc(var(--size, 10px) * 5.675)",
                          left: "calc(var(--size, 10px) * 6.7)",
                          width: "calc(var(--size, 10px) * 3.65)",
                          height: "calc(var(--size, 10px) * 3.65)",
                        }}
                      >
                        <div
                          className="chip--29b81 disabled--5146f cover--6df8f"
                          data-role="chip"
                          data-value={10000}
                        >
                          <svg
                            viewBox="0 0 78 78"
                            className="graphics--22cbe"
                            data-role="default-svg"
                            style={{ color: "rgb(26, 26, 26)" }}
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
                          width: "calc(var(--size, 10px) * 3.6)",
                          height: "calc(var(--size, 10px) * 3.6)",
                        }}
                      >
                        <div
                          className="chip--29b81 disabled--5146f cover--6df8f"
                          data-role="chip"
                          data-value={50000}
                        >
                          <svg
                            viewBox="0 0 78 78"
                            className="graphics--22cbe"
                            data-role="default-svg"
                            style={{ color: "rgb(133, 72, 176)" }}
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
                      className="toggleContainer--3bdf3 up--4547e"
                    >
                      <div
                        data-role="chip-stack-toggle"
                        className="toggle--3ad8c"
                      >
                        <div
                          className="border--ddab7 revolver--55b2d"
                          data-role="selected-chip-border"
                        >
                          <svg
                            viewBox="0 0 52 52"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient
                                id="ar10a"
                                x1={0}
                                y1={52}
                                x2={52}
                                y2={0}
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0.262627" stopColor="#F7EAA3" />
                                <stop offset="0.505208" stopColor="#C29740" />
                                <stop offset="0.760417" stopColor="#FEF8B9" />
                              </linearGradient>
                            </defs>
                            <circle
                              cx={26}
                              cy={26}
                              r={25}
                              stroke="url(#ar10a)"
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
                            data-value={100}
                          >
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
                    </div>
                  </div>
                </div>
                <div className="after--31b84 commonUiElement hideable--4b209">
                  <div
                    className="actionButton--e4d79 buttonPositionRight--f7cb3"
                    data-role="chipstack-double-repeat-button"
                  >
                    <button
                      className="button--673ce xxs--2f9fb roundingBoth--6d5e6 buttonStateDisabled--77839 buttonRoot--715a7 disabled--308db"
                      data-type="secondaryCallToAction"
                      data-role="double-button"
                      data-state="Disabled"
                    >
                      <span
                        className="roundingBoth--2a8e7 buttonContent--2a2d4 xxs--c4d69"
                        data-role="button-content"
                      >
                        <div
                          className="buttonBase--bf354"
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
                    <button className="clickableLabel--8fd8e">
                      <div className="label--e8213">
                        <div
                          className="label--365af disabledButtonLabel--a77ae buttonLocationChipStackHorizontal--4058e"
                          data-role="chip-stack-label"
                        >
                          DOUBLE
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tableInfoContainer--b6c41 commonUiElement sm--89dd5 tall--a21d4 iphone10--fa60a hasRoundedCorners--1e1b3 hasNotch--267d0 withGradient--c01fc hasExtraRoundedCorners--6ed2f isFullscreen--d501d"
          data-role="table-bottom-info"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 140%),linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)",
          }}
        >
          <div
            className="messageOneLine--78130 positionBottom--82ca2"
            data-role="one-line-chat"
          >
            {/* <li class="row--46c58 item--252d7 latestMessageBottom--fdfb0 mobile--bd7ac" data-role="chat-message">
                        <div class="bubble--aef29 dealer--4af2e removeBackground--373e2 removeHorizontalPadding--79df3 removeVerticalPadding--7bc76 singleLine--ba50e">
                            <div class="name--5b112" data-role="chat-message__sender-name">Anastasija: </div>
                            <div class="message--a529e" data-role="chat-message__text">Hello, Rocky! Welcome to Golden Wealth Baccarat!</div>
                        </div>
                    </li> */}
          </div>
          <div className="row--cc33b">
            <div className="totalBetContainer--d8028">
              <div className="totalBet--ab8a8 container--cf1f7 md--8e6c2">
                <span className="title--2a257" data-role="total-bet-title">
                  Total Bet
                </span>
                <span className="amount--58e65">
                  <span className="value--58a54" data-role="total-bet-value">
                    ₹ 0
                  </span>
                </span>
              </div>
            </div>
            <div className="clockContainer--1684d">
              <div
                className="gameTime--9d037 gameTime--4b53f"
                data-role="game-time"
              >
                11:34:10
              </div>
            </div>
          </div>
          <div className="row--cc33b">
            <div className="balanceContainer--ac1aa">
              <div
                className="balance--ede09 container--cf1f7 md--8e6c2 portrait--304f9"
                data-role="balance-label-one-line"
              >
                <span className="title--2a257" data-role="balance-title">
                  Balance
                </span>
                <span className="amount--58e65">
                  <span
                    className="value--58a54"
                    data-role="balance-value"
                    data-balance-visible="₹8.24"
                    data-currency-symbol="₹"
                    data-fs-element="Visible balance"
                    data-fs-properties-schema='{
                        "data-balance-visible": "real",
                        "data-currency-symbol": "string",
                    }'
                  >
                    ₹8.24
                  </span>
                </span>
              </div>
            </div>
            <div className="tableNameContainer--2fc7c">
              <span
                className="tableName--ed38c tableName--aad8c md--faf59"
                data-role="table-name"
              >
                Lucky 7
              </span>
              <div
                className="tableLimits--97b4b tableLimits--f2c2b"
                data-role="table-limits"
              >
                ₹100 – 100,000
              </div>
            </div>
          </div>
        </div>
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
                  <span className="text--68a0b placeholder--6cec6">₹ 1.00</span>
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
  );
};

export default LuckySeven;
