import { motion } from "motion/react";

const GameHistory = ({ setTab, closeModal }) => {
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
        transform: "translate3d(0px, calc(100% - 443px), 1px)",
        transitionDuration: "initial",
        transitionTimingFunction: "initial",
        height: "605px",
      }}
    >
      <div
        className="contentContainer--736bb contentSizeRestrictContainer--9da92"
        data-role="content-restrict-container"
        style={{ maxHeight: "613px" }}
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
                            <path d="M10.77 3.6c2.16-.33 4.37.19 6.16 1.45l-.04-.02a8.5 8.5 0 1 1-11.66 12.1l1.59-1.21a6.5 6.5 0 1 0-.1-7.74l1.42 1.38-5.64 1.49L3.88 5.4l1.44 1.4a8.51 8.51 0 0 1 5.45-3.2Z" />
                            <path d="M11.33 12.32V7.49h1.5v4.2l3.05 3.05-1.06 1.06-3.5-3.48Z" />
                          </svg>
                        </svg>
                      </div>
                      <div data-role="title-text" className="titleText--44453">
                        Game History
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
                      data-role="history-list"
                      className="container--d7c87 sm--25c44"
                    >
                      <table className="historyTable--564ed headerTable--7ae62">
                        <thead className="thead--eaa4b">
                          <tr
                            className="theadRow--eebc9"
                            data-role="history-list-header-row"
                          >
                            <th
                              className="time--4258e"
                              style={{ width: "69px" }}
                            >
                              <span>DATE</span>
                            </th>
                            <th
                              className="gameType--b4fe8"
                              style={{ width: "161px" }}
                            >
                              <span>GAME</span>
                            </th>
                            <th
                              className="bet--b4e2d"
                              style={{ width: "46px" }}
                            >
                              <span>BET</span>
                            </th>
                            <th
                              className="winLose--b6e11"
                              style={{ width: "42px" }}
                            >
                              <span>WIN/LOSE</span>
                            </th>
                          </tr>
                        </thead>
                      </table>
                      <div
                        onClick={() => setTab("game-history-details")}
                        className="scrollable--ba985"
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
                                "linear-gradient(transparent 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 99.23%, transparent 100%), linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%, transparent 100%)",
                            }}
                          >
                            <table className="historyTable--564ed">
                              <tbody>
                                <tr
                                  data-role="history-day"
                                  className="row--d06c8 sm--20e69"
                                >
                                  <td
                                    data-role="history-day-date-cell"
                                    className="date--32e9b"
                                  >
                                    −<span dir="auto">18/09/2025</span>
                                  </td>
                                  <td
                                    data-role="history-day-balance-type"
                                    className="balanceType--4d19a"
                                  />
                                  <td
                                    data-role="history-day-bet"
                                    className="bet--71853"
                                  >
                                    ⁦⁦₹⁩120⁩
                                  </td>
                                  <td
                                    data-role="history-day-win-lose"
                                    className="winLose--1be70"
                                  >
                                    ⁦-⁦₹⁩17.04⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18665af8aea3f100ebeac9c6"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    16:52:20
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>First Person HiLo</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩20⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩23.65⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18665af4fc0f1bd17dea3140"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    16:52:00
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>First Person HiLo</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩20⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩13.57⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18665af1f2ef0394332fb87c"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    16:51:46
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>First Person HiLo</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩20⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦-⁦₹⁩20⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18665af117a5ed9b211cc1bf"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    16:51:36
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>First Person HiLo</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩0⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩0⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18665aedb54b6cf621086bdf"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    16:51:30
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>First Person HiLo</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩20⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦-⁦₹⁩20⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18665ae5b25bbe80f6fbd83f"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    16:50:47
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>First Person HiLo</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩0⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩0⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18665ae4d8bde776d804e75e"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    16:50:44
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>First Person HiLo</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩0⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩0⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18665ae21c449c8049279c7c"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    16:50:36
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>First Person HiLo</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩20⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩5.74⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18665adf912598b031331a9d"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    16:50:26
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>First Person HiLo</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩20⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦-⁦₹⁩20⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18665adee7ede4b38cfa965e"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    16:50:18
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>First Person HiLo</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩0⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩0⁩
                                  </td>
                                </tr>
                                <tr
                                  data-role="history-day"
                                  className="row--d06c8 sm--20e69"
                                >
                                  <td
                                    data-role="history-day-date-cell"
                                    className="date--32e9b"
                                  >
                                    −<span dir="auto">17/09/2025</span>
                                  </td>
                                  <td
                                    data-role="history-day-balance-type"
                                    className="balanceType--4d19a"
                                  />
                                  <td
                                    data-role="history-day-bet"
                                    className="bet--71853"
                                  >
                                    ⁦⁦₹⁩200⁩
                                  </td>
                                  <td
                                    data-role="history-day-win-lose"
                                    className="winLose--1be70"
                                  >
                                    ⁦-⁦₹⁩130⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="1865fac337f28425d97c4538-so7u4iagxxbalv25"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    11:29:05
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Balloon Race</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩100⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦-⁦₹⁩50⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="1865fac200c060de4a594964-so7u4iagxxbalv25"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    11:29:00
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Balloon Race</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩100⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦-⁦₹⁩80⁩
                                  </td>
                                </tr>
                                <tr
                                  data-role="history-day"
                                  className="row--d06c8 sm--20e69"
                                >
                                  <td
                                    data-role="history-day-date-cell"
                                    className="date--32e9b"
                                  >
                                    −<span dir="auto">11/09/2025</span>
                                  </td>
                                  <td
                                    data-role="history-day-balance-type"
                                    className="balanceType--4d19a"
                                  />
                                  <td
                                    data-role="history-day-bet"
                                    className="bet--71853"
                                  >
                                    ⁦⁦₹⁩200⁩
                                  </td>
                                  <td
                                    data-role="history-day-win-lose"
                                    className="winLose--1be70"
                                  >
                                    ⁦⁦₹⁩100⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18643608448d13b264a5fe5a"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    17:13:02
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Dragon Tiger</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩50⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩50⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18643602dc1d2eec4c780052"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    17:12:38
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Dragon Tiger</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩50⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦-⁦₹⁩50⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="186435f265f2475af652f917"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    17:11:29
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Dragon Tiger</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩50⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩50⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="186435d634c7103ba908e685"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    17:09:28
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Dragon Tiger</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩50⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩50⁩
                                  </td>
                                </tr>
                                <tr
                                  data-role="history-day"
                                  className="row--d06c8 sm--20e69"
                                >
                                  <td
                                    data-role="history-day-date-cell"
                                    className="date--32e9b"
                                  >
                                    −<span dir="auto">09/09/2025</span>
                                  </td>
                                  <td
                                    data-role="history-day-balance-type"
                                    className="balanceType--4d19a"
                                  />
                                  <td
                                    data-role="history-day-bet"
                                    className="bet--71853"
                                  >
                                    ⁦⁦₹⁩150⁩
                                  </td>
                                  <td
                                    data-role="history-day-win-lose"
                                    className="winLose--1be70"
                                  >
                                    ⁦-⁦₹⁩150⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18639cb7a7d00a6d3882dbcb"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    18:23:59
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Roulette</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩100⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦-⁦₹⁩100⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18639cac72cd7ceb41234dda"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    18:23:09
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Roulette</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩50⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦-⁦₹⁩50⁩
                                  </td>
                                </tr>
                                <tr
                                  data-role="history-day"
                                  className="row--d06c8 sm--20e69"
                                >
                                  <td
                                    data-role="history-day-date-cell"
                                    className="date--32e9b"
                                  >
                                    −<span dir="auto">08/09/2025</span>
                                  </td>
                                  <td
                                    data-role="history-day-balance-type"
                                    className="balanceType--4d19a"
                                  />
                                  <td
                                    data-role="history-day-bet"
                                    className="bet--71853"
                                  >
                                    ⁦⁦₹⁩1,400⁩
                                  </td>
                                  <td
                                    data-role="history-day-win-lose"
                                    className="winLose--1be70"
                                  >
                                    ⁦-⁦₹⁩1,400⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="18634480635a73e752e1d888"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    15:27:25
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Roulette</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩1,400⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦-⁦₹⁩1,400⁩
                                  </td>
                                </tr>
                                <tr
                                  data-role="history-day"
                                  className="row--d06c8 sm--20e69"
                                >
                                  <td
                                    data-role="history-day-date-cell"
                                    className="date--32e9b"
                                  >
                                    −<span dir="auto">06/09/2025</span>
                                  </td>
                                  <td
                                    data-role="history-day-balance-type"
                                    className="balanceType--4d19a"
                                  />
                                  <td
                                    data-role="history-day-bet"
                                    className="bet--71853"
                                  >
                                    ⁦⁦₹⁩343.48⁩
                                  </td>
                                  <td
                                    data-role="history-day-win-lose"
                                    className="winLose--1be70"
                                  >
                                    ⁦-⁦₹⁩75.89⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="1862a854ab44aefc330ba0ae"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    15:45:07
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Stock Market</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩12.71⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩9.97⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="1862a84fa9d3fa3ab6e30ada"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    15:44:46
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Stock Market</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩10⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩2.71⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="1862a84aa816fa38c981e35e"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    15:44:24
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Stock Market</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩10.77⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦⁦₹⁩5.52⁩
                                  </td>
                                </tr>
                                <tr
                                  className="row--a868c sm--179b8"
                                  data-game-id="1862a845a6f290b601b4e6bc"
                                  data-role="history-transaction-row"
                                >
                                  <td className="time--f5e9e" data-role="time">
                                    15:44:03
                                  </td>
                                  <td
                                    className="gameType--e7702"
                                    data-role="game-type"
                                  >
                                    <span>Stock Market</span>
                                  </td>
                                  <td className="bet--7530c" data-role="bet">
                                    ⁦⁦₹⁩10⁩
                                  </td>
                                  <td
                                    className="winLose--789d9"
                                    data-role="amount"
                                  >
                                    ⁦-⁦₹⁩9.23⁩
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
        </div>
      </div>
    </motion.div>
  );
};

export default GameHistory;
