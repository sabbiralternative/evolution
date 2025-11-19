import { motion } from "motion/react";
import { useGetHistory } from "../../hooks/history";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { playClick } from "../../utils/sound";
import { useSound } from "../../context/ApiProvider";

const GameHistory = ({ setTab, closeModal, setRoundId }) => {
  const { sound } = useSound();
  const { deviseHeight } = useSelector((state) => state.global);
  const [dateCategory, setDateCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [allHistoryData, setAllHistoryData] = useState([]); // Store all accumulated data
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const scrollableRef = useRef(null);

  const { data, isLoading } = useGetHistory({ page });

  // Handle new data when page changes
  useEffect(() => {
    if (data?.result?.length > 0) {
      if (page === 1) {
        // First page - replace all data
        setAllHistoryData(data.result);
      } else {
        // Subsequent pages - merge with existing data
        setAllHistoryData((prevData) => [...prevData, ...data.result]);
      }

      // Check if there's more data (assuming less than expected means no more data)
      if (data.result.length < 10) {
        // Assuming 10 is your page size
        setHasMore(false);
      }
    } else if (data?.result?.length === 0 && page > 1) {
      // No more data available
      setHasMore(false);
    }

    setLoading(false);
  }, [data, page]);

  // Update date categories when allHistoryData changes
  useEffect(() => {
    if (allHistoryData.length > 0) {
      const uniqueDateArray = Array.from(
        new Set(allHistoryData.map((item) => item?.date?.split(" ")[0]))
      );
      setDateCategory(uniqueDateArray);
    }
  }, [allHistoryData]);

  // Scroll handler for pagination
  const handleScroll = useCallback(
    (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const threshold = 10; // pixels from bottom to trigger load

      if (
        scrollHeight - scrollTop <= clientHeight + threshold &&
        !loading &&
        !isLoading &&
        hasMore
      ) {
        setLoading(true);
        setPage((prevPage) => prevPage + 1);
      }
    },
    [loading, isLoading, hasMore]
  );

  // Reset data when component mounts or when needed
  // const resetPagination = useCallback(() => {
  //   setPage(1);
  //   setAllHistoryData([]);
  //   setDateCategory([]);
  //   setHasMore(true);
  //   setLoading(false);
  // }, []);

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
                        className={`container--c48cc ${
                          isLoading || loading ? "" : "hidden--85eb1"
                        }`}
                        data-role="loading-indicator-container"
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
                          <span className="text--51457">
                            {page === 1 ? "Loading..." : "Loading more..."}
                          </span>
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
                              style={{ width: "174px" }}
                            >
                              <span>GAME</span>
                            </th>
                            <th
                              className="bet--b4e2d"
                              style={{ width: "42px" }}
                            >
                              <span>BET</span>
                            </th>
                            <th
                              className="winLose--b6e11"
                              style={{ width: "33px" }}
                            >
                              <span>WIN/LOSE</span>
                            </th>
                          </tr>
                        </thead>
                      </table>
                      <div className="scrollable--ba985">
                        <div
                          className="wrapper--f4eb9"
                          data-role="scrollable-wrapper"
                        >
                          <div
                            ref={scrollableRef}
                            data-role="scrollable"
                            className="scrollable--96151 vertical--99fcf"
                            style={{
                              maskImage:
                                "linear-gradient(transparent 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 97.91%, transparent 100%), linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%, transparent 100%)",
                            }}
                            onScroll={handleScroll}
                          >
                            <table className="historyTable--564ed">
                              <tbody>
                                {dateCategory?.map((date) => {
                                  return (
                                    <React.Fragment key={date}>
                                      <tr
                                        data-role="history-day"
                                        className="row--d06c8 sm--20e69"
                                      >
                                        <td
                                          data-role="history-day-date-cell"
                                          className="date--32e9b"
                                        >
                                          −<span dir="auto">{date}</span>
                                        </td>
                                        <td
                                          data-role="history-day-balance-type"
                                          className="balanceType--4d19a"
                                        />
                                        <td
                                          data-role="history-day-bet"
                                          className="bet--71853"
                                        >
                                          ⁦⁦₹⁩
                                          {allHistoryData
                                            .filter(
                                              (item) =>
                                                item?.date?.split(" ")[0] ===
                                                date
                                            )
                                            .reduce(
                                              (sum, item) =>
                                                sum + (item?.bet || 0),
                                              0
                                            )
                                            .toLocaleString()}
                                          ⁩
                                        </td>
                                        <td
                                          data-role="history-day-win-lose"
                                          className="winLose--1be70"
                                        >
                                          ⁦⁦₹⁩
                                          {allHistoryData
                                            .filter(
                                              (item) =>
                                                item?.date?.split(" ")[0] ===
                                                date
                                            )
                                            .reduce(
                                              (sum, item) =>
                                                sum + (item?.win_lose || 0),
                                              0
                                            )
                                            .toLocaleString()}
                                          ⁩
                                        </td>
                                      </tr>
                                      {allHistoryData
                                        ?.filter(
                                          (item) =>
                                            item?.date?.split(" ")[0] === date
                                        )
                                        .map((singleItem, i) => {
                                          return (
                                            <tr
                                              onClick={() => {
                                                setTab("game-history-details");
                                                setRoundId(
                                                  singleItem?.round_id
                                                );
                                                if (sound) playClick();
                                              }}
                                              key={`${date}-${i}`}
                                              className="row--a868c sm--179b8"
                                              data-game-id="185d68e6864f2b895f0eb79a"
                                              data-role="history-transaction-row"
                                            >
                                              <td
                                                className="time--f5e9e"
                                                data-role="time"
                                              >
                                                {
                                                  singleItem?.date?.split(
                                                    " "
                                                  )[1]
                                                }
                                              </td>
                                              <td
                                                className="gameType--e7702"
                                                data-role="game-type"
                                              >
                                                <span>{singleItem?.game}</span>
                                              </td>
                                              <td
                                                className="bet--7530c"
                                                data-role="bet"
                                              >
                                                {singleItem?.bet < 0 && "-"} ₹
                                                {Math.abs(singleItem?.bet)}
                                              </td>
                                              <td
                                                className="winLose--789d9"
                                                data-role="amount"
                                              >
                                                {singleItem?.win_lose < 0 &&
                                                  "-"}{" "}
                                                ₹
                                                {Math.abs(singleItem?.win_lose)}
                                              </td>
                                            </tr>
                                          );
                                        })}
                                    </React.Fragment>
                                  );
                                })}

                                {!hasMore && (
                                  <tr>
                                    <td
                                      colSpan="4"
                                      style={{
                                        textAlign: "center",
                                        padding: "20px",
                                        color: "#666",
                                      }}
                                    >
                                      No more data to load
                                    </td>
                                  </tr>
                                )}
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
