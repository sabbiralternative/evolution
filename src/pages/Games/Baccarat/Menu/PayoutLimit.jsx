/* eslint-disable no-irregular-whitespace */
import { motion } from "motion/react";
const PayoutLimit = ({ setTab, closeModal }) => {
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
                      <div className="titleIcon--f10b6">
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
                            <path d="m8.94 6.97 2.18 2.18 1.06-1.06L8.09 4 4 8.09l1.06 1.06 2.18-2.18v8.04h1.7V6.97Zm8 10.07 2.18-2.18 1.06 1.06-4.09 4.09L12 15.92l1.06-1.06 2.18 2.18V9h1.7v8.04Z" />
                          </svg>
                        </svg>
                      </div>
                      <div data-role="title-text" className="titleText--44453">
                        Payouts &amp; Limits
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
                  data-screen-id="betLimits"
                  data-role="menu-screen-betLimits"
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
                      <div
                        className="scrollContainer--c39d6"
                        data-role="drawer-scrollable"
                      >
                        <div className="tableInfo--47273">
                          <div>
                            Table:{" "}
                            <span className="tableName--b461c">
                              Golden Wealth Baccarat
                            </span>
                          </div>
                          <div>
                            <span>Bet Limits:</span>&nbsp;
                            <span className="limits--0b506">
                              ⁦⁦⁦₹⁩100⁩ – 100,000⁩
                            </span>
                          </div>
                        </div>
                        <table className="table--14466">
                          <thead className="header--9dd12 sm--bbe87">
                            <tr>
                              <th className="left--693f2" colSpan={1}>
                                <span>BET</span>
                              </th>
                              <th className="middle--d4568">
                                <span>BET LIMITS</span>
                              </th>
                              <th className="right--402ec">
                                <span>PAYOUT</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              data-role="bet-limits_player"
                              className="sm--8f329 hasContent--7f13d hasBottomBorder--87313 fixedColumnWidths--a60d9"
                            >
                              <td className="bet--7d654" colSpan={1}>
                                <div className="cellContent--e7e92">
                                  <span data-role="title" className>
                                    PLAYER
                                  </span>
                                </div>
                              </td>
                              <td className="middleDataCell--a2446">
                                <div className="cellContent--e7e92">
                                  <div
                                    data-role="min-max"
                                    className="betLimits--3cf27"
                                    data-min={100}
                                    data-max={100000}
                                  >
                                    ⁦⁦⁦₹⁩100⁩ – 100,000⁩
                                  </div>
                                </div>
                              </td>
                              <td className="payout--46826">
                                <div
                                  className="cellContent--e7e92"
                                  data-role="payout"
                                >
                                  1–512:1
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-role="bet-limits_banker"
                              className="sm--8f329 hasContent--7f13d hasBottomBorder--87313 fixedColumnWidths--a60d9"
                            >
                              <td className="bet--7d654" colSpan={1}>
                                <div className="cellContent--e7e92">
                                  <span data-role="title" className>
                                    BANKER*
                                  </span>
                                </div>
                              </td>
                              <td className="middleDataCell--a2446">
                                <div className="cellContent--e7e92">
                                  <div
                                    data-role="min-max"
                                    className="betLimits--3cf27"
                                    data-min={100}
                                    data-max={100000}
                                  >
                                    ⁦⁦⁦₹⁩100⁩ – 100,000⁩
                                  </div>
                                </div>
                              </td>
                              <td className="payout--46826">
                                <div
                                  className="cellContent--e7e92"
                                  data-role="payout"
                                >
                                  1–512:1
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-role="bet-limits_tie"
                              className="sm--8f329 hasContent--7f13d hasBottomBorder--87313 fixedColumnWidths--a60d9"
                            >
                              <td className="bet--7d654" colSpan={1}>
                                <div className="cellContent--e7e92">
                                  <span data-role="title" className>
                                    TIE
                                  </span>
                                </div>
                              </td>
                              <td className="middleDataCell--a2446">
                                <div className="cellContent--e7e92">
                                  <div
                                    data-role="min-max"
                                    className="betLimits--3cf27"
                                    data-min={100}
                                    data-max={10000}
                                  >
                                    ⁦⁦⁦₹⁩100⁩ – 10,000⁩
                                  </div>
                                </div>
                              </td>
                              <td className="payout--46826">
                                <div
                                  className="cellContent--e7e92"
                                  data-role="payout"
                                >
                                  5:1 (Up to ⁦⁦₹⁩50,000,000⁩)
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-role="bet-limits_undefined"
                              className="sm--8f329 hasBottomBorder--87313 fixedColumnWidths--a60d9"
                            >
                              <td className="bet--7d654" colSpan={1}>
                                <div className="cellContent--e7e92">
                                  <span data-role="title" className>
                                    ​
                                  </span>
                                </div>
                              </td>
                              <td className="middleDataCell--a2446">
                                <div className="cellContent--e7e92">
                                  <div
                                    data-role="min-max"
                                    className="betLimits--3cf27"
                                  />
                                </div>
                              </td>
                              <td className="payout--46826">
                                <div
                                  className="cellContent--e7e92"
                                  data-role="payout"
                                />
                              </td>
                            </tr>
                            <tr
                              data-role="bet-limits_player_pair"
                              className="sm--8f329 hasContent--7f13d hasBottomBorder--87313 fixedColumnWidths--a60d9"
                            >
                              <td className="bet--7d654" colSpan={1}>
                                <div className="cellContent--e7e92">
                                  <span data-role="title" className>
                                    P PAIR
                                  </span>
                                </div>
                              </td>
                              <td className="middleDataCell--a2446">
                                <div className="cellContent--e7e92">
                                  <div
                                    data-role="min-max"
                                    className="betLimits--3cf27"
                                    data-min={100}
                                    data-max={25000}
                                  >
                                    ⁦⁦⁦₹⁩100⁩ – 25,000⁩
                                  </div>
                                </div>
                              </td>
                              <td className="payout--46826">
                                <div
                                  className="cellContent--e7e92"
                                  data-role="payout"
                                >
                                  9–576:1
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-role="bet-limits_banker_pair"
                              className="sm--8f329 hasContent--7f13d hasBottomBorder--87313 fixedColumnWidths--a60d9"
                            >
                              <td className="bet--7d654" colSpan={1}>
                                <div className="cellContent--e7e92">
                                  <span data-role="title" className>
                                    B PAIR
                                  </span>
                                </div>
                              </td>
                              <td className="middleDataCell--a2446">
                                <div className="cellContent--e7e92">
                                  <div
                                    data-role="min-max"
                                    className="betLimits--3cf27"
                                    data-min={100}
                                    data-max={25000}
                                  >
                                    ⁦⁦⁦₹⁩100⁩ – 25,000⁩
                                  </div>
                                </div>
                              </td>
                              <td className="payout--46826">
                                <div
                                  className="cellContent--e7e92"
                                  data-role="payout"
                                >
                                  9–576:1
                                </div>
                              </td>
                            </tr>
                            <tr data-role="bet-limits-footer">
                              <td
                                colSpan={3}
                                className="footerContentWrapper--24329 sm--18019"
                              >
                                <div
                                  data-role="max-payout-amount"
                                  className="maxPayoutAmount--18149"
                                >
                                  <div>
                                    * 95% of your Banker bet is returned if
                                    Banker wins
                                  </div>
                                  <div>
                                    MAX PAYOUT ⁦⁦₹⁩50,000,000⁩ PLUS INITIAL BET
                                    ON THE WINNING HAND
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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

export default PayoutLimit;
