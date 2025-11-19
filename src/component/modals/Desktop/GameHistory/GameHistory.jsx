import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useGetHistory } from "../../../../hooks/history";
import { usePlaySound } from "../../../../hooks/playSound";

const GameHistory = ({ setRoundId, setTab }) => {
  const { playClickSound } = usePlaySound();
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
    <div
      data-role="position-container"
      style={{
        visibility: "visible",
        right: "10px",
        top: "6.66%",
        zIndex: 100,
        position: "fixed",
        pointerEvents: "initial",
      }}
    >
      <div className="container--a7b05" data-role="window-gamehistory">
        <h3 className="title--47f58" data-role="draggable">
          <div className="handlebar-wrapper--d9d5a">
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
                <path d="M8 20V4h2v16H8Zm5 0V4h2v16h-2Z" />
              </svg>
            </svg>
          </div>
          <span className="icon--c1698">
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
          </span>
          <span data-role="window-title">GAME HISTORY</span>
          <a
            onClick={() => setTab(null)}
            className="close--ed249"
            data-role="window-gamehistory_close"
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
          </a>
        </h3>
        <div className="content--7dcc6" data-role="window-gamehistory_content">
          <div
            className="container--9c8bb md--edad1"
            data-role="client-history-container"
          >
            <div className="loadingIndicator--39463">
              <div
                className={`container--c48cc ${
                  isLoading && !data ? "" : "hidden--85eb1"
                } `}
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
                  <span className="text--51457">
                    {" "}
                    {page === 1 ? "Loading..." : "Loading more..."}
                  </span>
                </div>
              </div>
            </div>
            <div
              data-role="history-list"
              className="container--d7c87 md--4832c"
            >
              <table className="historyTable--564ed headerTable--7ae62">
                <thead className="thead--eaa4b">
                  <tr
                    className="theadRow--eebc9"
                    data-role="history-list-header-row"
                  >
                    <th className="time--4258e" style={{}}>
                      <span>Date</span>
                    </th>
                    <th className="gameType--b4fe8" style={{}}>
                      <span>Game</span>
                    </th>
                    <th className="bet--b4e2d" style={{}}>
                      <span>Bet</span>
                    </th>
                    <th className="winLose--b6e11" style={{}}>
                      <span>Win/Lose</span>
                    </th>
                  </tr>
                </thead>
              </table>
              <div className="scrollable--ba985">
                <div className="wrapper--f4eb9" data-role="scrollable-wrapper">
                  <div
                    ref={scrollableRef}
                    onScroll={handleScroll}
                    data-role="scrollable"
                    className="scrollable--96151 vertical--99fcf hiddenScrollbar--27373"
                  >
                    <table className="historyTable--564ed">
                      <tbody>
                        {dateCategory?.map((date) => {
                          return (
                            <Fragment key={date}>
                              <tr
                                data-role="history-day"
                                className="row--d06c8"
                              >
                                <td
                                  data-role="history-day-date-cell"
                                  className="date--32e9b"
                                >
                                  <span dir="auto">
                                    {date?.split("-")?.join("/")}
                                  </span>
                                </td>
                                <td
                                  data-role="history-day-balance-type"
                                  className="balanceType--4d19a"
                                />
                                <td
                                  data-role="history-day-bet"
                                  className="bet--71853"
                                >
                                  ₹{" "}
                                  {allHistoryData
                                    .filter(
                                      (item) =>
                                        item?.date?.split(" ")[0] === date
                                    )
                                    .reduce(
                                      (sum, item) => sum + (item?.bet || 0),
                                      0
                                    )
                                    .toLocaleString()}
                                </td>
                                <td
                                  data-role="history-day-win-lose"
                                  className="winLose--1be70"
                                >
                                  ₹
                                  {allHistoryData
                                    .filter(
                                      (item) =>
                                        item?.date?.split(" ")[0] === date
                                    )
                                    .reduce(
                                      (sum, item) =>
                                        sum + (item?.win_lose || 0),
                                      0
                                    )
                                    .toLocaleString()}
                                </td>
                              </tr>
                              {allHistoryData
                                ?.filter(
                                  (item) => item?.date?.split(" ")[0] === date
                                )
                                .map((singleItem, i) => {
                                  return (
                                    <tr
                                      onClick={() => {
                                        setTab("game-history-details");
                                        setRoundId(singleItem?.round_id);
                                        playClickSound();
                                      }}
                                      key={`${date}-${i}`}
                                      className="row--a868c"
                                      data-game-id="1872202a3f52907f6422c5c0"
                                      data-role="history-transaction-row"
                                    >
                                      <td
                                        className="time--f5e9e"
                                        data-role="time"
                                      >
                                        {singleItem?.date?.split(" ")[1]}
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
                                        {singleItem?.win_lose < 0 && "-"} ₹
                                        {Math.abs(singleItem?.win_lose)}
                                      </td>
                                    </tr>
                                  );
                                })}
                            </Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="scrollbarWrapper--a29dd vertical--99fcf"
                    data-role="scroll-bar-wrapper"
                    style={{ opacity: 0, pointerEvents: "none" }}
                  >
                    <div
                      className="scrollbar--c2fae scrollbar--a6072 vertical--a78a4"
                      data-role="scroll-bar-track"
                    >
                      <div
                        className="thumb--c4fa3"
                        data-role="scroll-bar-thumb"
                      />
                      <div className="blind--86239" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHistory;
