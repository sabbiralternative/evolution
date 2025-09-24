import { motion } from "motion/react";

const GameHistoryDetails = ({ setTab, closeModal }) => {
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
                      <div data-role="title-text" className="titleText--44453">
                        FIRST PERSON HILO
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
                  data-screen-id="history"
                  data-role="menu-screen-history"
                  style={{ display: "block" }}
                >
                  <div
                    className="container--9c8bb sm--c0a53"
                    data-role="client-history-container"
                  >
                    <div className="loadingIndicator--39463">
                      <div
                        className="container--c48cc hidden--85eb1"
                        data-role="loading-indicator-container"
                        dir
                      >
                        <div className="indicator--18cd4">
                          <div className="icon--827c8">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-10.95 0 66.8 66.8"
                              className="icon--8dcd0 evoLoading--63b3f isAnimated--844ca"
                            >
                              <path d="M43.2 31.3l-6-3.5c-4.4 0.1-8.1-0.3-11.2-0.9l0.7 3.9c2.8 0.4 5.9 0.7 9.5 0.7C38.3 31.6 40.6 31.5 43.2 31.3z" />
                              <path d="M23.9 30.4l-0.7-4.1c-4.4-1.2-7.7-3.1-10.2-5.4L8.7 22C12.1 25.8 16.7 28.9 23.9 30.4z" />
                              <path d="M5.5 9.6L0 6.4c0.3 0.7 0.6 1.4 0.9 2.1 1.6 3.8 3.3 7.7 5.9 11.3l4.1-1C8.6 16.1 7 12.9 5.5 9.6z" />
                              <path d="M4.5 6.1c4.8-2.1 9.9-2.7 14.8-2l-0.7-3.9c-6-0.7-12.2 0.5-17.9 3.5L0.5 3.8 4.5 6.1z" />
                              <path d="M22 4.7C24 5.2 25.9 6 27.7 7c2.8 1.5 5.2 3.6 7.2 6l4-1c-2.5-3.4-5.6-6.2-9.4-8.3 -2.6-1.4-5.4-2.4-8.3-3L22 4.7z" />
                              <path d="M40.9 27.1l4 2.3v-0.1c-0.4-5.6-2-10.7-4.6-15.1l-3.8 0.9C38.8 18.6 40.3 22.7 40.9 27.1z" />
                              <path d="M40.9 39.7l4-2.3v0.1c-0.4 5.6-2 10.7-4.6 15.1l-3.8-0.9C38.8 48.2 40.3 44.1 40.9 39.7z" />
                              <path d="M22 62.1c2-0.5 3.9-1.3 5.7-2.3 2.8-1.5 5.2-3.6 7.2-6l4 1c-2.5 3.4-5.6 6.2-9.4 8.3 -2.6 1.4-5.4 2.4-8.3 3L22 62.1z" />
                              <path d="M4.5 60.7c4.8 2.1 9.9 2.7 14.8 2l-0.7 3.9c-6 0.7-12.2-0.5-17.9-3.5L0.5 63 4.5 60.7z" />
                              <path d="M5.5 57.2L0 60.4c0.3-0.7 0.6-1.4 0.9-2.1 1.6-3.8 3.3-7.7 5.9-11.3l4.1 1C8.6 50.7 7 53.9 5.5 57.2z" />
                              <path d="M23.9 36.3l-0.7 4.1c-4.4 1.2-7.7 3.1-10.2 5.4l-4.3-1.1C12.1 41 16.7 37.9 23.9 36.3z" />
                              <path d="M43.2 35.4l-6 3.5c-4.4-0.1-8.1 0.3-11.2 0.9l0.7-3.9c2.8-0.4 5.9-0.7 9.5-0.7C38.3 35.2 40.6 35.2 43.2 35.4z" />
                            </svg>
                          </div>
                          <span className="text--51457">Loading...</span>
                        </div>
                      </div>
                    </div>
                    <div
                      data-role="round"
                      className="container--3f053 sm--96ec1"
                    >
                      <div
                        className="navigation--db816 sm--b5a1a"
                        data-role="history-round-navigation"
                      >
                        <div className="switchToPrevContainer--84636">
                          <div
                            className="switchRound--4e646"
                            data-role="switch-to-prev"
                          >
                            <span className="chevronLeft--424f8">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="icon--8dcd0"
                                height={15}
                              >
                                <path d="m15.78 17.31-4.95-4.95 4.95-4.95L14.37 6 8 12.36l6.37 6.36 1.41-1.41Z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="goBack--9724a">
                          <button
                            className="button--673ce xxxs--2d4a2 roundingBoth--6d5e6 labelPositionInside--74c5c buttonRoot--3bd4d"
                            data-type="secondary"
                            data-role="go-back"
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
                              <div className="iconLabelWrapper--8e144">
                                <span
                                  data-role="button-label"
                                  className="label--6561f labelSizeDefault--145bb"
                                >
                                  Back to Game History
                                </span>
                              </div>
                              <div className="badge--81159" />
                            </span>
                          </button>
                        </div>
                        <div className="switchToNextContainer--a97b7" />
                      </div>
                      <div className="scrollable--8b445">
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
                            <div
                              data-role="round-info-container"
                              className="roundInfo--86fb5 sm--100e3"
                            >
                              <div className="roundInfoBlockContainer--80018">
                                <div
                                  data-role="round-info-row-container"
                                  className="roundInfoBlock--99885"
                                >
                                  <span className="roundInfoBlockKey--9edf3">
                                    Table:
                                  </span>
                                  <span
                                    dir="auto"
                                    className="roundInfoBlockValue--b1263"
                                    data-role="history-table-name"
                                  >
                                    First Person HiLo
                                  </span>
                                </div>
                                <div
                                  data-role="round-info-row-container"
                                  className="roundInfoBlock--99885"
                                >
                                  <span className="roundInfoBlockKey--9edf3">
                                    Game Resolved:
                                  </span>
                                  <span
                                    dir="auto"
                                    className="roundInfoBlockValue--b1263"
                                    data-role="history-game-start"
                                  >
                                    18/09/2025 16:52:20
                                  </span>
                                </div>
                                <div
                                  data-role="round-info-row-container"
                                  className="roundInfoBlock--99885"
                                >
                                  <span className="roundInfoBlockKey--9edf3">
                                    Game Number:
                                  </span>
                                  <span
                                    dir="auto"
                                    className="roundInfoBlockValue--b1263"
                                    data-role="history-game-number"
                                  >
                                    #10:52:08
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="header--c62fa">
                              <div
                                className="wrapper--f4eb9"
                                data-role="scrollable-wrapper"
                              >
                                <div
                                  data-role="scrollable"
                                  className="scrollable--96151 pan--202dc"
                                >
                                  <table
                                    data-role="result-header-table"
                                    className="table--295c9"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          data-role="header-cell"
                                          className="headerCell--9903f"
                                          style={{ width: "100%" }}
                                        >
                                          <span className="font--d7ef6">
                                            Result
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          data-role="row-cell"
                                          className="cell--13cd7"
                                          style={{ width: "100%" }}
                                        >
                                          <div
                                            className="roundStatisticsWrapper--38b4e gradient--9a444"
                                            style={{
                                              "--content-mask-side": "90deg",
                                              "--content-mask-start": "0%",
                                              "--content-mask-end": "100%",
                                            }}
                                          >
                                            <div className="roundStatistics--8d09b">
                                              <div className="cardWrapper--b3bcb">
                                                <span
                                                  className="wrapper--9fd49"
                                                  data-role="card-S3"
                                                >
                                                  <span className="suit--2017b active--9b94f">
                                                    <svg
                                                      viewBox="0 0 180 250"
                                                      className="card--32433 black--f031a"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                      <g>
                                                        <use
                                                          xlinkHref="#card-background"
                                                          fill="url(#card-bg-light-default)"
                                                        />
                                                        <use
                                                          xlinkHref="#card-border"
                                                          fill="url(#card-border-default)"
                                                        />
                                                      </g>
                                                      <g>
                                                        <use
                                                          xlinkHref="#rank-3"
                                                          height={86}
                                                          x={8}
                                                          y={6}
                                                        />
                                                        <use
                                                          xlinkHref="#suit-S"
                                                          height={86}
                                                          x={102}
                                                          y={6}
                                                        />
                                                        <g transform="rotate(180,90,125)">
                                                          <use
                                                            xlinkHref="#suit-S"
                                                            height={86}
                                                            x={102}
                                                            y={6}
                                                          />
                                                          <use
                                                            xlinkHref="#rank-3"
                                                            height={86}
                                                            x={8}
                                                            y={6}
                                                          />
                                                        </g>
                                                      </g>
                                                    </svg>
                                                  </span>
                                                </span>
                                              </div>
                                              <div className="cardWrapper--b3bcb">
                                                <span
                                                  className="wrapper--9fd49"
                                                  data-role="card-D3"
                                                >
                                                  <span className="suit--2017b active--9b94f">
                                                    <svg
                                                      viewBox="0 0 180 250"
                                                      className="card--32433 red--db016"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                      <g>
                                                        <use
                                                          xlinkHref="#card-background"
                                                          fill="url(#card-bg-light-default)"
                                                        />
                                                        <use
                                                          xlinkHref="#card-border"
                                                          fill="url(#card-border-default)"
                                                        />
                                                      </g>
                                                      <g>
                                                        <use
                                                          xlinkHref="#rank-3"
                                                          height={86}
                                                          x={8}
                                                          y={6}
                                                        />
                                                        <use
                                                          xlinkHref="#suit-D"
                                                          height={86}
                                                          x={102}
                                                          y={6}
                                                        />
                                                        <g transform="rotate(180,90,125)">
                                                          <use
                                                            xlinkHref="#suit-D"
                                                            height={86}
                                                            x={102}
                                                            y={6}
                                                          />
                                                          <use
                                                            xlinkHref="#rank-3"
                                                            height={86}
                                                            x={8}
                                                            y={6}
                                                          />
                                                        </g>
                                                      </g>
                                                    </svg>
                                                  </span>
                                                </span>
                                              </div>
                                              <div className="cardWrapper--b3bcb">
                                                <span
                                                  className="wrapper--9fd49"
                                                  data-role="card-SJ"
                                                >
                                                  <span className="suit--2017b active--9b94f">
                                                    <svg
                                                      viewBox="0 0 180 250"
                                                      className="card--32433 black--f031a"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                      <g>
                                                        <use
                                                          xlinkHref="#card-background"
                                                          fill="url(#card-bg-light-default)"
                                                        />
                                                        <use
                                                          xlinkHref="#card-border"
                                                          fill="url(#card-border-default)"
                                                        />
                                                      </g>
                                                      <g>
                                                        <use
                                                          xlinkHref="#rank-J"
                                                          height={86}
                                                          x={8}
                                                          y={6}
                                                        />
                                                        <use
                                                          xlinkHref="#suit-S"
                                                          height={86}
                                                          x={102}
                                                          y={6}
                                                        />
                                                        <g transform="rotate(180,90,125)">
                                                          <use
                                                            xlinkHref="#suit-S"
                                                            height={86}
                                                            x={102}
                                                            y={6}
                                                          />
                                                          <use
                                                            xlinkHref="#rank-J"
                                                            height={86}
                                                            x={8}
                                                            y={6}
                                                          />
                                                        </g>
                                                      </g>
                                                    </svg>
                                                  </span>
                                                </span>
                                              </div>
                                              <div className="cardWrapper--b3bcb">
                                                <span
                                                  className="wrapper--9fd49"
                                                  data-role="card-H10"
                                                >
                                                  <span className="suit--2017b active--9b94f">
                                                    <svg
                                                      viewBox="0 0 180 250"
                                                      className="card--32433 red--db016"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                      <g>
                                                        <use
                                                          xlinkHref="#card-background"
                                                          fill="url(#card-bg-light-default)"
                                                        />
                                                        <use
                                                          xlinkHref="#card-border"
                                                          fill="url(#card-border-default)"
                                                        />
                                                      </g>
                                                      <g>
                                                        <use
                                                          xlinkHref="#rank-10"
                                                          height={86}
                                                          x={8}
                                                          y={6}
                                                        />
                                                        <use
                                                          xlinkHref="#suit-H"
                                                          height={86}
                                                          x={102}
                                                          y={6}
                                                        />
                                                        <g transform="rotate(180,90,125)">
                                                          <use
                                                            xlinkHref="#suit-H"
                                                            height={86}
                                                            x={102}
                                                            y={6}
                                                          />
                                                          <use
                                                            xlinkHref="#rank-10"
                                                            height={86}
                                                            x={8}
                                                            y={6}
                                                          />
                                                        </g>
                                                      </g>
                                                    </svg>
                                                  </span>
                                                </span>
                                              </div>
                                              <div className="cardWrapper--b3bcb">
                                                <span
                                                  className="wrapper--9fd49"
                                                  data-role="card-C7"
                                                >
                                                  <span className="suit--2017b active--9b94f">
                                                    <svg
                                                      viewBox="0 0 180 250"
                                                      className="card--32433 black--f031a"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                      <g>
                                                        <use
                                                          xlinkHref="#card-background"
                                                          fill="url(#card-bg-light-default)"
                                                        />
                                                        <use
                                                          xlinkHref="#card-border"
                                                          fill="url(#card-border-default)"
                                                        />
                                                      </g>
                                                      <g>
                                                        <use
                                                          xlinkHref="#rank-7"
                                                          height={86}
                                                          x={8}
                                                          y={6}
                                                        />
                                                        <use
                                                          xlinkHref="#suit-C"
                                                          height={86}
                                                          x={102}
                                                          y={6}
                                                        />
                                                        <g transform="rotate(180,90,125)">
                                                          <use
                                                            xlinkHref="#suit-C"
                                                            height={86}
                                                            x={102}
                                                            y={6}
                                                          />
                                                          <use
                                                            xlinkHref="#rank-7"
                                                            height={86}
                                                            x={8}
                                                            y={6}
                                                          />
                                                        </g>
                                                      </g>
                                                    </svg>
                                                  </span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table className="table--295c9">
                                    <tbody>
                                      <tr
                                        data-role="total-bet-header"
                                        className="font--d7ef6"
                                      >
                                        <td className="headerCell--b3eb5 totalBetTable--aad13">
                                          Bet
                                        </td>
                                        <td className="headerCell--b3eb5 headerCellBetWin--d5651 totalBetTable--aad13">
                                          Win
                                        </td>
                                      </tr>
                                      <tr
                                        className="font--d7ef6"
                                        data-role="total-bet-row"
                                      >
                                        <td
                                          className="totalBetTable--aad13 cellBet--37d63"
                                          data-role="total-bet"
                                        >
                                          ⁦⁦₹⁩20⁩
                                        </td>
                                        <td
                                          className="totalBetTable--aad13 cellBet--37d63"
                                          data-role="total-win"
                                        >
                                          ⁦⁦₹⁩43.65⁩
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table
                                    data-role="result-header-table"
                                    className="table--295c9"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          data-role="header-cell"
                                          className="headerCell--9903f"
                                          style={{ width: "100%" }}
                                        />
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className="bets--c7ba8">
                              <div className="content--cdf51">
                                <div
                                  data-role="bets-table-container"
                                  className="mobile--c49b4"
                                >
                                  <table className="bets--f9d36">
                                    <thead className="header--1c213">
                                      <tr className="font--d7ef6">
                                        <td className="headerCell--b3eb5 drawnCardColumn--8766d">
                                          Drawn Card
                                        </td>
                                        <td className="headerCell--b3eb5 decisionColumn--bbb71">
                                          Decision
                                        </td>
                                        <td className="headerCell--b3eb5 offerValueColumn--c0d3e">
                                          Offer
                                        </td>
                                      </tr>
                                    </thead>
                                    <tbody data-role="betContainer">
                                      <tr className="font--d7ef6">
                                        <td className="cellBet--37d63 drawnCardColumn--8766d">
                                          <div className="cardCell--07c54">
                                            <div className="cardWrapper--d7505">
                                              <span
                                                className="wrapper--9fd49"
                                                data-role="card-S3"
                                              >
                                                <span className="suit--2017b active--9b94f">
                                                  <svg
                                                    viewBox="0 0 180 250"
                                                    className="card--32433 black--f031a"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <g>
                                                      <use
                                                        xlinkHref="#card-background"
                                                        fill="url(#card-bg-light-default)"
                                                      />
                                                      <use
                                                        xlinkHref="#card-border"
                                                        fill="url(#card-border-default)"
                                                      />
                                                    </g>
                                                    <g>
                                                      <use
                                                        xlinkHref="#rank-3"
                                                        height={86}
                                                        x={8}
                                                        y={6}
                                                      />
                                                      <use
                                                        xlinkHref="#suit-S"
                                                        height={86}
                                                        x={102}
                                                        y={6}
                                                      />
                                                      <g transform="rotate(180,90,125)">
                                                        <use
                                                          xlinkHref="#suit-S"
                                                          height={86}
                                                          x={102}
                                                          y={6}
                                                        />
                                                        <use
                                                          xlinkHref="#rank-3"
                                                          height={86}
                                                          x={8}
                                                          y={6}
                                                        />
                                                      </g>
                                                    </g>
                                                  </svg>
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="cellBet--37d63 decisionColumn--bbb71">
                                          HIGHER OR SAME
                                        </td>
                                        <td className="cellBet--37d63 offerValueColumn--c0d3e">
                                          ⁦⁦₹⁩21.45⁩
                                        </td>
                                      </tr>
                                      <tr className="font--d7ef6">
                                        <td className="cellBet--37d63 drawnCardColumn--8766d">
                                          <div className="cardCell--07c54">
                                            <div className="cardWrapper--d7505">
                                              <span
                                                className="wrapper--9fd49"
                                                data-role="card-D3"
                                              >
                                                <span className="suit--2017b active--9b94f">
                                                  <svg
                                                    viewBox="0 0 180 250"
                                                    className="card--32433 red--db016"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <g>
                                                      <use
                                                        xlinkHref="#card-background"
                                                        fill="url(#card-bg-light-default)"
                                                      />
                                                      <use
                                                        xlinkHref="#card-border"
                                                        fill="url(#card-border-default)"
                                                      />
                                                    </g>
                                                    <g>
                                                      <use
                                                        xlinkHref="#rank-3"
                                                        height={86}
                                                        x={8}
                                                        y={6}
                                                      />
                                                      <use
                                                        xlinkHref="#suit-D"
                                                        height={86}
                                                        x={102}
                                                        y={6}
                                                      />
                                                      <g transform="rotate(180,90,125)">
                                                        <use
                                                          xlinkHref="#suit-D"
                                                          height={86}
                                                          x={102}
                                                          y={6}
                                                        />
                                                        <use
                                                          xlinkHref="#rank-3"
                                                          height={86}
                                                          x={8}
                                                          y={6}
                                                        />
                                                      </g>
                                                    </g>
                                                  </svg>
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="cellBet--37d63 decisionColumn--bbb71">
                                          HIGHER OR SAME
                                        </td>
                                        <td className="cellBet--37d63 offerValueColumn--c0d3e">
                                          ⁦⁦₹⁩23.23⁩
                                        </td>
                                      </tr>
                                      <tr className="font--d7ef6">
                                        <td className="cellBet--37d63 drawnCardColumn--8766d">
                                          <div className="cardCell--07c54">
                                            <div className="cardWrapper--d7505">
                                              <span
                                                className="wrapper--9fd49"
                                                data-role="card-SJ"
                                              >
                                                <span className="suit--2017b active--9b94f">
                                                  <svg
                                                    viewBox="0 0 180 250"
                                                    className="card--32433 black--f031a"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <g>
                                                      <use
                                                        xlinkHref="#card-background"
                                                        fill="url(#card-bg-light-default)"
                                                      />
                                                      <use
                                                        xlinkHref="#card-border"
                                                        fill="url(#card-border-default)"
                                                      />
                                                    </g>
                                                    <g>
                                                      <use
                                                        xlinkHref="#rank-J"
                                                        height={86}
                                                        x={8}
                                                        y={6}
                                                      />
                                                      <use
                                                        xlinkHref="#suit-S"
                                                        height={86}
                                                        x={102}
                                                        y={6}
                                                      />
                                                      <g transform="rotate(180,90,125)">
                                                        <use
                                                          xlinkHref="#suit-S"
                                                          height={86}
                                                          x={102}
                                                          y={6}
                                                        />
                                                        <use
                                                          xlinkHref="#rank-J"
                                                          height={86}
                                                          x={8}
                                                          y={6}
                                                        />
                                                      </g>
                                                    </g>
                                                  </svg>
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="cellBet--37d63 decisionColumn--bbb71">
                                          LOWER OR SAME
                                        </td>
                                        <td className="cellBet--37d63 offerValueColumn--c0d3e">
                                          ⁦⁦₹⁩30.21⁩
                                        </td>
                                      </tr>
                                      <tr className="font--d7ef6">
                                        <td className="cellBet--37d63 drawnCardColumn--8766d">
                                          <div className="cardCell--07c54">
                                            <div className="cardWrapper--d7505">
                                              <span
                                                className="wrapper--9fd49"
                                                data-role="card-H10"
                                              >
                                                <span className="suit--2017b active--9b94f">
                                                  <svg
                                                    viewBox="0 0 180 250"
                                                    className="card--32433 red--db016"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <g>
                                                      <use
                                                        xlinkHref="#card-background"
                                                        fill="url(#card-bg-light-default)"
                                                      />
                                                      <use
                                                        xlinkHref="#card-border"
                                                        fill="url(#card-border-default)"
                                                      />
                                                    </g>
                                                    <g>
                                                      <use
                                                        xlinkHref="#rank-10"
                                                        height={86}
                                                        x={8}
                                                        y={6}
                                                      />
                                                      <use
                                                        xlinkHref="#suit-H"
                                                        height={86}
                                                        x={102}
                                                        y={6}
                                                      />
                                                      <g transform="rotate(180,90,125)">
                                                        <use
                                                          xlinkHref="#suit-H"
                                                          height={86}
                                                          x={102}
                                                          y={6}
                                                        />
                                                        <use
                                                          xlinkHref="#rank-10"
                                                          height={86}
                                                          x={8}
                                                          y={6}
                                                        />
                                                      </g>
                                                    </g>
                                                  </svg>
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="cellBet--37d63 decisionColumn--bbb71">
                                          LOWER OR SAME
                                        </td>
                                        <td className="cellBet--37d63 offerValueColumn--c0d3e">
                                          ⁦⁦₹⁩43.65⁩
                                        </td>
                                      </tr>
                                      <tr className="font--d7ef6">
                                        <td className="cellBet--37d63 drawnCardColumn--8766d">
                                          <div className="cardCell--07c54">
                                            <div className="cardWrapper--d7505">
                                              <span
                                                className="wrapper--9fd49"
                                                data-role="card-C7"
                                              >
                                                <span className="suit--2017b active--9b94f">
                                                  <svg
                                                    viewBox="0 0 180 250"
                                                    className="card--32433 black--f031a"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <g>
                                                      <use
                                                        xlinkHref="#card-background"
                                                        fill="url(#card-bg-light-default)"
                                                      />
                                                      <use
                                                        xlinkHref="#card-border"
                                                        fill="url(#card-border-default)"
                                                      />
                                                    </g>
                                                    <g>
                                                      <use
                                                        xlinkHref="#rank-7"
                                                        height={86}
                                                        x={8}
                                                        y={6}
                                                      />
                                                      <use
                                                        xlinkHref="#suit-C"
                                                        height={86}
                                                        x={102}
                                                        y={6}
                                                      />
                                                      <g transform="rotate(180,90,125)">
                                                        <use
                                                          xlinkHref="#suit-C"
                                                          height={86}
                                                          x={102}
                                                          y={6}
                                                        />
                                                        <use
                                                          xlinkHref="#rank-7"
                                                          height={86}
                                                          x={8}
                                                          y={6}
                                                        />
                                                      </g>
                                                    </g>
                                                  </svg>
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="cellBet--37d63 decisionColumn--bbb71">
                                          CASH OUT
                                        </td>
                                        <td className="cellBet--37d63 offerValueColumn--c0d3e">
                                          ⁦⁦₹⁩43.65⁩
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tfoot>
                                      <tr>
                                        <td className="footerCell--9bda1" />
                                        <td className="footerCell--9bda1" />
                                        <td className="footerCell--9bda1" />
                                      </tr>
                                    </tfoot>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className="bottomSpace--49f12" />
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

export default GameHistoryDetails;
