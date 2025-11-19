import { useGetBets } from "../../../../hooks/bets";
import { usePlaySound } from "../../../../hooks/playSound";

const GameHistoryDetails = ({ setTab, roundId }) => {
  const { playClickSound } = usePlaySound();
  const { data, isLoading } = useGetBets({ round_id: roundId });
  const totalWin = data?.result?.bet_details?.reduce(
    (sum, item) => sum + (Number(item?.win) || 0),
    0
  );

  const totalBet = data?.result?.bet_details?.reduce(
    (sum, item) => sum + (Number(item?.bet) || 0),
    0
  );

  console.log(data);
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
          <span data-role="window-title">
            GAME HISTORY - {data?.result?.game_details?.table}
          </span>
          <a
            onClick={() => {
              setTab(null);
              playClickSound();
            }}
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
                  <span className="text--51457">Loading...</span>
                </div>
              </div>
            </div>
            <div className="container--3f053 md--31f18" data-role="round">
              <div
                data-role="round-info-container"
                className="roundInfo--86fb5"
              >
                <div className="roundInfoBlockContainer--80018">
                  <div
                    data-role="round-info-row-container"
                    className="roundInfoBlock--99885"
                  >
                    <span className="roundInfoBlockKey--9edf3">Table:</span>
                    <span
                      dir="auto"
                      className="roundInfoBlockValue--b1263"
                      data-role="history-table-name"
                    >
                      {data?.result?.game_details?.table}
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
                      {data?.result?.game_details?.game_resolved}
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
                      {data?.result?.game_details?.game_number}
                    </span>
                  </div>
                </div>
              </div>
              <div className="scrollableOuterWrapper--311c1">
                <div className="scrollableInnerWrapper--84a26">
                  <div className="scrollable--8b445">
                    <div
                      className="wrapper--f4eb9"
                      data-role="scrollable-wrapper"
                    >
                      <div
                        data-role="scrollable"
                        className="scrollable--96151 pan--202dc hiddenScrollbar--27373"
                      >
                        <div className>
                          <div className="header--c62fa">
                            <div className="jsClientsWrapperStylesToSsrContent--72a1c">
                              <style
                                dangerouslySetInnerHTML={{
                                  __html:
                                    ".ssr_cellBetName{background-color:rgba(0,0,0,.4);border-left:.1rem solid #5a5a5a;border-top:.1rem solid #5a5a5a;font:inherit;height:2.333rem;padding:0 .833rem;text-align:left}.ssr_cellBetName:last-of-type{border-right:.1rem solid #5a5a5a;padding-right:2rem}.ssr_cellBetName:last-child,.ssr_cellBetName:nth-last-child(2){text-align:right}.ssr_cellBetName{background-color:hsla(0,0%,42%,.4);border-left-color:transparent;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ssr_cellBetName:hover{overflow:visible;position:relative}.ssr_cellBet,.ssr_cellCombination{background-color:rgba(0,0,0,.4);border-left:.1rem solid #5a5a5a;border-top:.1rem solid #5a5a5a;font:inherit;height:2.333rem;padding:0 .833rem;text-align:left}.ssr_cellBet:last-of-type,.ssr_cellCombination:last-of-type{border-right:.1rem solid #5a5a5a;padding-right:2rem}.ssr_cellBet:last-child,.ssr_cellBet:nth-last-child(2),.ssr_cellCombination:last-child,.ssr_cellCombination:nth-last-child(2){text-align:right}.ssr_cellBet,.ssr_cellCombination{background-color:hsla(0,0%,42%,.4)}.ssr_cellBet:last-of-type,.ssr_cellCombination:last-of-type{border-right-color:transparent}.ssr_freeplay .ssr_cellBet:not(.ssr_zeroWinValue){color:#00dbfc}.ssr_betsTable{border-collapse:initial;border-spacing:0;color:#fff;font-size:1.2em;font-weight:400;line-height:normal;overflow:hidden;table-layout:fixed;width:100%}.ssr_headerCell,.ssr_headerCellBet,.ssr_headerCellCombination{background-color:rgba(0,0,0,.4);border-left:.1rem solid #5a5a5a;border-top:.1rem solid #5a5a5a;font:inherit;height:2.333rem;padding:0 .833rem;text-align:left}.ssr_headerCell:last-of-type,.ssr_headerCellBet:last-of-type,.ssr_headerCellCombination:last-of-type{border-right:.1rem solid #5a5a5a;padding-right:2rem}.ssr_headerCell:last-child,.ssr_headerCell:nth-last-child(2),.ssr_headerCellBet:last-child,.ssr_headerCellBet:nth-last-child(2),.ssr_headerCellCombination:last-child,.ssr_headerCellCombination:nth-last-child(2){text-align:right}.ssr_headerCell,.ssr_headerCellBet,.ssr_headerCellCombination{overflow:hidden;text-overflow:ellipsis;white-space:normal}.ssr_headerCell:hover,.ssr_headerCellBet:hover,.ssr_headerCellCombination:hover{overflow:visible;position:relative}.ssr_footerCell,.ssr_footerCellCombination{background-color:rgba(0,0,0,.4);border-left:.1rem solid #5a5a5a;border-top:.1rem solid #5a5a5a;font:inherit;height:2.333rem;padding:0 .833rem;text-align:left}.ssr_footerCell:last-of-type,.ssr_footerCellCombination:last-of-type{border-right:.1rem solid #5a5a5a;padding-right:2rem}.ssr_footerCell:last-child,.ssr_footerCell:nth-last-child(2),.ssr_footerCellCombination:last-child,.ssr_footerCellCombination:nth-last-child(2){text-align:right}.ssr_footerCell,.ssr_footerCellCombination{border-bottom:.1rem solid #5a5a5a;border-top:0}.ssr_footerCellBet{background-color:rgba(0,0,0,.4);border-left:.1rem solid #5a5a5a;border-top:.1rem solid #5a5a5a;font:inherit;height:2.333rem;padding:0 .833rem;text-align:left}.ssr_footerCellBet:last-of-type{border-right:.1rem solid #5a5a5a}.ssr_footerCellBet:last-child,.ssr_footerCellBet:nth-last-child(2){text-align:right}.ssr_footerCellBet{border-bottom:.1rem solid #5a5a5a;border-top:0}.ssr_freeplay .ssr_footerCellBet:not(.ssr_zeroWinValue){color:#00dbfc}.ssr_freeplayWin{color:#ffcf00!important}.ssr_playForFun{color:#00ffa1}.ssr_header{flex-shrink:0}.ssr_bets,.ssr_content{display:flex;flex-grow:1}.ssr_bets{position:relative}.ssr_table{border-collapse:initial;border-spacing:0;color:#fff;font-size:1.2em;font-weight:400;line-height:normal;overflow:hidden;table-layout:fixed;text-align:center;width:100%}.ssr_cell{background-color:rgba(0,0,0,.4);background-color:initial;border-top:.1rem solid #5a5a5a;font:inherit;height:2.333rem;height:100%;padding:0 .833rem}.ssr_cell.ssr_fullWidth{padding-left:0;padding-right:0}.ssr_resultHeaderCell{background-color:rgba(0,0,0,.4);border-top:.1rem solid #5a5a5a;font:inherit;height:2.333rem;padding:0 .833rem}.ssr_dt_gameRound{font-size:.8em}.ssr_dt_red{fill:#e02423}.ssr_dt_black{fill:#0d0d0d}.ssr_dt_darkRed{fill:#7a3030}.ssr_dt_darkKhaki{fill:#756957}.ssr_dt_darkOpacity{opacity:.5}.ssr_dt_wrapper{display:inline-block;position:relative}.ssr_dt_innerCard,.ssr_dt_suit{height:100%;width:100%}.ssr_dt_card,.ssr_dt_suit{display:inline-block}.ssr_dt_card{font-size:.6em;height:4em;margin-right:.333em;position:relative;width:2.88em}.ssr_dt_result{font-size:1.1em;justify-content:center;padding:.378em}.ssr_dt_cards,.ssr_dt_result{align-items:center;display:flex}.ssr_dt_cards{justify-content:flex-end}.ssr_dt_innerMultiplier{display:flex;flex-grow:1;height:2em}.ssr_dt_innerCellMultiplier{display:flex;flex-grow:1;height:1.4em}.ssr_dt_multiplierWrapper{display:flex;height:0;justify-content:center;position:relative;width:2.88em}.ssr_dt_cellWithMultiplier{align-items:center;display:inline-flex;width:100%}.ssr_dt_headerCellBet{width:7.5em}.ssr_dt_multiplier{height:4em;margin-right:.333em;margin-top:-2.2em;position:absolute;width:2.88em}.ssr_dt_multiplier.ssr_dt_dark{opacity:.5}.ssr_dt_withMultipliers{background-position:50%!important;background-size:contain!important;display:flex;flex-grow:1;margin:.5em}.ssr_dt_withMultipliers:hover{background:none}.ssr_dt_cardOverlay{background:none;border:.1em solid #968770;border-radius:.2em;box-sizing:border-box;height:100%;left:0;position:absolute;top:0;width:100%}.ssr_dt_multiplierCard{margin-top:1em}.ssr_dt_multiplierCards{align-items:center;display:flex;justify-content:center}",
                                }}
                              />
                              <div>
                                <div className="ssr_dt_gameRound">
                                  <svg
                                    style={{
                                      visibility: "hidden",
                                      height: 0,
                                      width: 0,
                                      position: "absolute",
                                    }}
                                  >
                                    <linearGradient
                                      id="card-bg-light-default"
                                      x1={90}
                                      y1={250}
                                      x2={90}
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop offset={0} stopColor="#e6e6e6" />
                                      <stop offset={1} stopColor="#fff" />
                                    </linearGradient>
                                    <linearGradient
                                      id="card-border-default"
                                      x1={90}
                                      y1={250}
                                      x2={90}
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop offset={0} stopColor="#fff" />
                                      <stop offset={1} stopColor="#bfbfbf" />
                                    </linearGradient>
                                    <symbol
                                      id="card-background"
                                      viewBox="0 0 180 250"
                                    >
                                      <path d="M180 233.037c-.039 9.406-7.694 17-17.1 16.963H17.1c-9.406.037-17.06-7.557-17.1-16.963V16.963C.04 7.557 7.694-.037 17.1 0h145.8c9.406-.037 17.061 7.557 17.1 16.963v216.074z" />
                                    </symbol>
                                    <symbol
                                      id="card-border"
                                      viewBox="0 0 180 250"
                                    >
                                      <path d="M162.9 1c8.85-.027 16.052 7.114 16.1 15.963v216.074c-.048 8.85-7.25 15.99-16.1 15.963H17.1c-8.85.027-16.051-7.113-16.1-15.963V16.963C1.049 8.114 8.25.973 17.1 1h145.8m0-1H17.1C7.694-.036.04 7.558 0 16.963v216.074c.04 9.406 7.694 17 17.1 16.963h145.8c9.406.037 17.061-7.557 17.1-16.963V16.963c-.039-9.406-7.694-17-17.1-16.963z" />
                                    </symbol>
                                    <symbol
                                      id="suit-C"
                                      viewBox="0 0 68 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M49.82 33.72a15 15 0 00-3.58.43 15.56 15.56 0 00-3.13 1.14 14.68 14.68 0 004.58-6.21 14.38 14.38 0 001-5.22 14.82 14.82 0 00-15-14.69c-8.181-.067-14.869 6.509-14.94 14.69a14.38 14.38 0 001 5.22 14.68 14.68 0 004.58 6.21 16 16 0 00-3.13-1.14 15.12 15.12 0 00-3.58-.43c-7.711-.112-14.192 5.765-14.833 13.45-.64 7.686 4.78 14.555 12.403 15.72a15.81 15.81 0 003.4.38 14.58 14.58 0 0013.07-7.81c.21-.4.41-.81.58-1.23-.08.46-.15.9-.22 1.33a43.41 43.41 0 01-1.48 7.8c-.12.39-.24.78-.38 1.2-2.56 7.32-7.81 9.65-7.81 9.65v2.41h22.68v-2.41s-5.25-2.33-7.81-9.65c-.25-.73-.45-1.38-.62-2a48.63 48.63 0 01-1.24-7c-.07-.44-.14-.88-.22-1.34a14.62 14.62 0 0013.68 9.04 15.89 15.89 0 003.4-.38c7.623-1.165 13.043-8.034 12.403-15.72-.64-7.685-7.122-13.562-14.833-13.45l.03.01z" />
                                    </symbol>
                                    <symbol
                                      id="suit-D"
                                      viewBox="0 0 68 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M33.73 7.46L7.24 42.9l26.49 35.43 26.5-35.43z" />
                                    </symbol>
                                    <symbol
                                      id="suit-H"
                                      viewBox="0 0 68 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M48.4 11.17c-6.33 0-11.82 6.14-14.6 12.15-2.79-6-8.27-12.15-14.6-12.15-9.14 0-15.56 7-15.56 17.47a21.05 21.05 0 003.71 11.91 43.94 43.94 0 003.47 5.2l23 28.88 23-28.88a44.88 44.88 0 003.48-5.2A21 21 0 0064 28.64c0-10.5-6.45-17.47-15.6-17.47z" />
                                    </symbol>
                                    <symbol
                                      id="suit-S"
                                      viewBox="0 0 68 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M50.9 26.45C41.92 16.33 33.73 8 33.73 8s-8.18 8.33-17.16 18.45C10.01 33.85 3.7 39.88 3.69 48.81c-.004.558.023 1.115.08 1.67.8 8.13 7.6 12.24 15.87 12.25h1.12c5-.34 8.85-3.1 11.53-7.29-.58 3.06-.53 5.33-1.71 9.14-.11.38-.23.77-.38 1.19-2.55 7.32-7.81 9.66-7.81 9.66v2.37h22.68v-2.41s-5.25-2.34-7.8-9.66c-.26-.72-.45-1.38-.63-2-.93-3.33-.93-5.48-1.46-8.32 2.67 4.19 6.52 6.95 11.53 7.29h1.11c8.28 0 15.08-4.12 15.88-12.25.05-.54.08-1.1.08-1.67-.02-8.9-6.32-14.93-12.88-22.33z" />
                                    </symbol>
                                    <symbol
                                      id="rank-2"
                                      viewBox="0 0 59 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M43.79 69.24H26.54l12.31-13.32a119.72 119.72 0 0013-16.39 24.3 24.3 0 004-13.64c0-7.35-2.13-13.19-7-17.62-4.87-4.43-11.58-6.64-20-6.64S13.43 4.23 8.37 9.37A25 25 0 001 28.28v.15l.05.14.11.33.23.68h17.2v-1c0-3.9.9-7 2.66-9.34 1.76-2.34 4.2-3.34 7.58-3.34a8.47 8.47 0 016.89 2.83 11.33 11.33 0 012.47 7.56A16.53 16.53 0 0136 34a61.57 61.57 0 01-7.8 10.56L2.54 71.36l-.27.28v12.53h56.2V69.24H43.79z" />
                                    </symbol>
                                    <symbol
                                      id="rank-3"
                                      viewBox="0 0 60 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M57.25 47.7a16.55 16.55 0 00-5.55-6.42 21.28 21.28 0 00-6.36-2.65A22.49 22.49 0 0053 31.32 17.52 17.52 0 0055.57 22a19.05 19.05 0 00-6.26-14.57C45.103 3.57 38.333 1.637 29 1.63c-8.153 0-14.453 1.77-18.9 5.31-4.45 3.54-7.9 9.48-8.53 17.9l17.32-.11.15-.85c.49-2.51 1.15-4.65 2.65-6.25a8.53 8.53 0 016.53-2.69 11.17 11.17 0 016.87 2.58c.16.14.33.27.48.41a10.34 10.34 0 012.69 6.83 10.5 10.5 0 01-3 7.48 9.81 9.81 0 01-7.45 3.15 19.06 19.06 0 01-2.5-.24l-.07 10.53a17.12 17.12 0 014.35 0c3.45.49 6.33 1 8.25 3.31s2.88 5.46 2.88 9.58-1 5.35-3 7.77a6.84 6.84 0 01-3 2 18.76 18.76 0 01-5.66.91c-4.37.18-6.55-2-8.37-3.91-1.41-1.51-2.3-3.89-2.31-9.39L0 55.61c.73 11.45 2.95 15.46 5.38 18.73 2.43 3.27 5.75 5.17 9.51 6.86a36.36 36.36 0 0015.22 3 33.87 33.87 0 0016.4-3.85A23.12 23.12 0 0056 70.51a28.68 28.68 0 003.27-13.3 21.08 21.08 0 00-2.02-9.51z" />
                                    </symbol>
                                    <symbol
                                      id="rank-4"
                                      viewBox="0 0 61 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M51.35 48.61V34.26H35l-1.29 14.35H20.22L50.23 2.17H31.24L.03 49.7v13.24h33.43v20.68h17.89V62.94h8.93V48.61z" />
                                    </symbol>
                                    <symbol
                                      id="rank-5"
                                      viewBox="0 0 57 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M48.76 36.33c-4.2-4.75-10.15-7.15-17.68-7.15h-.52a22.82 22.82 0 00-7.07 1.15c-.53.18-1 .38-1.51.59V16.33h31.18V2.17H5.49v41.85h13l.33-.12c1.4-.29 1.4-.45 3.23-.87 2.85-.38 6.4-1 10.83 1.07a9.55 9.55 0 013 2c2.89 3 3.08 7.05 3.15 9.4a18.32 18.32 0 01-.95 6.33 10.74 10.74 0 01-2.52 4.53 9.48 9.48 0 01-2.35 1.72 11.65 11.65 0 01-5.4 1.51A11.25 11.25 0 0123.9 69a9 9 0 01-1.46-.72A8.32 8.32 0 0120.79 67a10.23 10.23 0 01-3.34-7.4v-1h-.46l-14.9.75-1 .05L1 60.54A20.66 20.66 0 003.8 72a19.71 19.71 0 005 5.54 28.81 28.81 0 003.61 2.33c6.95 3.83 15.41 3.75 15.41 3.75 26.61.22 28.4-21.64 28.48-28.08a26.07 26.07 0 00-7.54-19.21z" />
                                    </symbol>
                                    <symbol
                                      id="rank-6"
                                      viewBox="0 0 59 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M32.11 28.53H32L50.1 2.22H29.57l-25 37.94A28.46 28.46 0 000 56c0 16.26 12 27.62 29.07 27.62S58.16 72.29 58.16 56c0-15.19-10.47-26.24-26.05-27.47zM41.77 56c0 8.08-6.38 12.31-12.69 12.31-7.47.03-12.68-5.03-12.68-12.31s5.21-12.31 12.68-12.31C35.39 43.72 41.77 48 41.77 56z" />
                                    </symbol>
                                    <symbol
                                      id="rank-7"
                                      viewBox="0 0 55 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M.01 2.19v14.17h38.04L8.53 83.65h18.36l28.03-66.98.16-.38V2.19z" />
                                    </symbol>
                                    <symbol
                                      id="rank-8"
                                      viewBox="0 0 56 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M42.26 39.88C49 35.67 52.71 29.44 52.71 22.17c0-9.88-7.4-20.52-23.63-20.52H29c-14.67 0-25.32 9.29-25.32 22.08 0 7.07 3.76 13.33 10.38 17.39C5.5 45.82 1 53 1 61.82c0 10.74 8.41 22.31 26.87 22.31 16.17 0 27.47-9.86 27.47-24 .01-8.64-4.74-15.94-13.08-20.25zM28.39 72.56h-.12a10.47 10.47 0 01-7.69-3.09 12.35 12.35 0 01-3.32-8.89c0-6.12 3.52-10.93 9.67-13.27 8.3 3 12.34 7.58 12.34 14.13 0 6.55-4.37 11.12-10.88 11.12zm1.27-38.07c-7.13-2.52-10.6-6.33-10.6-11.66 0-4.46 2.4-9.66 9.17-9.66h.12c8.39 0 9 7.77 9 10.15a12.35 12.35 0 01-7.69 11.17z" />
                                    </symbol>
                                    <symbol
                                      id="rank-9"
                                      viewBox="0 0 60 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M27.33 57.52h.12L9.09 84.22H29.9l25.34-38.49a28.88 28.88 0 004.65-16.11c0-16.49-12.13-28-29.49-28S.9 13.14.9 29.62c0 15.44 10.62 26.65 26.43 27.9zm-9.8-27.9c0-8.2 6.47-12.49 12.87-12.49 7.57 0 12.87 5.14 12.87 12.49 0 7.35-5.27 12.49-12.87 12.49-6.4 0-12.87-4.29-12.87-12.49z" />
                                    </symbol>
                                    <symbol
                                      id="rank-T"
                                      viewBox="0 0 95 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M65.19 1.55A30.85 30.85 0 0176.41 3.4a23.58 23.58 0 018 5.14A25.18 25.18 0 0189.6 16a41.47 41.47 0 012.85 8.7 60.54 60.54 0 011.24 9.22 143.599 143.599 0 010 17.92 61.22 61.22 0 01-1.24 9.22 42.78 42.78 0 01-2.81 8.68 24.38 24.38 0 01-5.16 7.45 23.67 23.67 0 01-8.08 5.1 31 31 0 01-11.24 1.85 31.24 31.24 0 01-11.31-1.85 23.3 23.3 0 01-13.18-12.54 43.75 43.75 0 01-2.81-8.67 62.89 62.89 0 01-1.24-9.26c-.18-3.08-.28-6.11-.28-9 0-2.89.1-5.92.28-9a62.75 62.75 0 011.24-9.25 40.82 40.82 0 012.86-8.67 25 25 0 015.19-7.4 24 24 0 018-5.1 31 31 0 0111.28-1.85zM33.18 2.62v80.5H16.09V20.35l-5.5 4.54L.57 14.12l15.39-11.5h17.22zm33.032 11.902l-.352.008a8.87 8.87 0 00-5.07 1.34 11.36 11.36 0 00-3.42 3.73 20 20 0 00-2.1 5.59 49 49 0 00-1 6.67c-.18 2.25-.27 4.47-.27 6.61v10.89a60.45 60.45 0 00.29 6.21 50.55 50.55 0 001.07 6.36 18.15 18.15 0 002.08 5.29 10.63 10.63 0 003.37 3.55 9 9 0 005 1.27 8.76 8.76 0 005-1.31 10.69 10.69 0 003.34-3.68 21.7 21.7 0 002.11-5.54 51.75 51.75 0 001.1-6.53c.22-2.2.33-4.37.33-6.37V37.92l-.02-.02c0-2.02-.11-4.16-.33-6.36a53.14 53.14 0 00-1.1-6.54 20.65 20.65 0 00-2.04-5.5 10.9 10.9 0 00-3.34-3.66 8.76 8.76 0 00-5-1.31z" />
                                    </symbol>
                                    <symbol
                                      id="rank-J"
                                      viewBox="0 0 57 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M25.47 2.17h-1v11.28l.79.17 6.63 1.44v43.83c.06 5.38-.41 10.64-6.76 10.75h-.22c-6.56 0-7.47-5.21-7.47-10.85v-1H1.28l-.13.86c-.06.44-1.51 11 6.07 18.77 4.41 4.52 9.51 6.28 18.18 6.28 7 0 11.86-1.6 16.64-5.52 6.54-5.34 7.51-14.91 7.51-20.14v-43l6.63-1.44.78-.17V2.17H25.47z" />
                                    </symbol>
                                    <symbol
                                      id="rank-Q"
                                      viewBox="0 0 76 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M69.49 71.24a11.84 11.84 0 01-7.78-3.1 38.59 38.59 0 004-7.14 47.21 47.21 0 003.58-18.61v-1.18c0-11.333-3.197-20.767-9.59-28.3C53.307 5.377 44.94 1.623 34.6 1.65c-10.273 0-18.56 3.753-24.86 11.26C3.44 20.417.29 29.85.29 41.21v1.18c0 11.44 3.16 20.893 9.48 28.36C16.09 78.217 24.387 81.967 34.66 82a31.6 31.6 0 004.1-.27 20.82 20.82 0 004.1-.7 28.9 28.9 0 009.67-3.73c4.4 3.91 9.93 6.89 16.92 6.89H76V71.24h-6.51zm-34.85-1.45c-6.233 0-10.9-2.51-14-7.53A29.61 29.61 0 0117 52.72h4.43c7.71.18 13.72 1.14 20.7 11.65.59.9 1.24 1.87 1.94 2.88a16.82 16.82 0 01-9.43 2.54zm19-27.4a44.76 44.76 0 01-1.8 13.34C41.7 41.47 30.93 40 21.59 39.82H16c.16-7.55 1.68-13.71 4.59-18.44 3.087-5.007 7.753-7.51 14-7.51s10.983 2.52 14.21 7.56c3.2 5.047 4.8 11.607 4.8 19.68l.04 1.28z" />
                                    </symbol>
                                    <symbol
                                      id="rank-K"
                                      viewBox="0 0 78 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M68.77 70.78L47.5 40.35l18.86-25.18 7.24-1.4.82-.16V2.16h-31.5v11.47l.83.14 2.14.38-14.08 20.48h-5.39V15.22l6.29-1.46.79-.18V2.16H1v11.43l.79.18 6.67 1.46v55.39L1.8 72.08l-.79.18v11.37H33.5V72.27l-.79-.18-6.29-1.46V50.46h7.34l14.12 21.22-2.37.39-.85.15v11.41h32.51V72.22l-.84-.14z" />
                                    </symbol>
                                    <symbol
                                      id="rank-A"
                                      viewBox="0 0 76 86"
                                      preserveAspectRatio="xMinYMax"
                                    >
                                      <path d="M75 72.1l-4-.72L47.13 2.87l-.23-.68H29.15l-.24.68-24 68.51-4.09.72-.84.14v11.41h27.11V72.28l-.79-.17-3.43-.75 2.93-9.15h24.28L53 71.36l-3.43.75-.79.17v11.37h27.09V72.24L75 72.1zM30.59 50.19L38.32 26 46 50.19H30.59z" />
                                    </symbol>
                                  </svg>
                                  <table className="ssr_table">
                                    <tbody>
                                      <tr>
                                        <td className="ssr_resultHeaderCell">
                                          <span>
                                            {" "}
                                            {data?.result?.game_details?.table}
                                          </span>
                                        </td>
                                        {/* <td className="ssr_resultHeaderCell">
                                          <span>Tiger</span>
                                        </td>
                                        <td className="ssr_resultHeaderCell">
                                          <span>Winner</span>
                                        </td> */}
                                      </tr>
                                      <tr>
                                        {/* <td className="ssr_cell">
                                          <div
                                            className="ssr_dt_result"
                                            data-role="history-dragon-hand"
                                          >
                                            <div className="ssr_dt_cards">
                                              <div className="ssr_dt_card">
                                                <span
                                                  className="ssr_dt_wrapper"
                                                  data-role="card-D4"
                                                >
                                                  <span className="ssr_dt_suit">
                                                    <svg
                                                      viewBox="0 0 180 250"
                                                      className="ssr_dt_innerCard ssr_dt_red"
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
                                                          xlinkHref="#rank-4"
                                                          height={95}
                                                          x="56.308"
                                                          y={20}
                                                        />
                                                        <use
                                                          xlinkHref="#suit-D"
                                                          height={108}
                                                          x={48}
                                                          y={132}
                                                        />
                                                      </g>
                                                    </svg>
                                                  </span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="ssr_cell">
                                          <div
                                            className="ssr_dt_result"
                                            data-role="history-tiger-hand"
                                          >
                                            <div className="ssr_dt_cards">
                                              <div className="ssr_dt_card">
                                                <span
                                                  className="ssr_dt_wrapper"
                                                  data-role="card-S2"
                                                >
                                                  <span className="ssr_dt_suit">
                                                    <svg
                                                      viewBox="0 0 180 250"
                                                      className="ssr_dt_innerCard ssr_dt_black"
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
                                                          xlinkHref="#rank-2"
                                                          height={95}
                                                          x="57.413"
                                                          y={20}
                                                        />
                                                        <use
                                                          xlinkHref="#suit-S"
                                                          height={108}
                                                          x={48}
                                                          y={132}
                                                        />
                                                      </g>
                                                    </svg>
                                                  </span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </td> */}
                                        <td className="ssr_cell">
                                          <div
                                            className="ssr_dt_result"
                                            data-role="history-outcome-cell"
                                          >
                                            {data?.result?.game_details
                                              ?.card && (
                                              <img
                                                style={{
                                                  width: "50px",
                                                  height: "50px",
                                                }}
                                                src={`/cards/${data?.result?.game_details?.card}.png`}
                                                alt=""
                                              />
                                            )}
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className="ssr_bets">
                                    <div className="ssr_content">
                                      <div>
                                        <table className="ssr_betsTable">
                                          <thead>
                                            <tr>
                                              <td
                                                className="ssr_headerCell"
                                                data-role="type"
                                              >
                                                Bet Type
                                              </td>
                                              <td
                                                className="ssr_headerCellBet ssr_dt_headerCellBet"
                                                data-role="heading"
                                              >
                                                Bet
                                              </td>
                                              <td
                                                className="ssr_headerCellBet ssr_headerCellBetWin ssr_dt_headerCellBet"
                                                data-role="win"
                                              >
                                                Win
                                              </td>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {data?.result?.bet_details?.map(
                                              (item, i) => {
                                                return (
                                                  <tr
                                                    key={i}
                                                    data-role="betContainer"
                                                  >
                                                    <td
                                                      className="ssr_cellBetName"
                                                      data-role="betName"
                                                    >
                                                      <span className="ssr_dt_cellWithMultiplier">
                                                        {item?.place_name}
                                                      </span>
                                                    </td>
                                                    <td
                                                      className="ssr_cellBet"
                                                      data-role="bet"
                                                    >
                                                      {Number(item?.bet) < 0 &&
                                                        "-"}{" "}
                                                      ₹
                                                      {Number(
                                                        Math.abs(item?.bet)
                                                      )}
                                                    </td>
                                                    <td
                                                      className="ssr_cellBet"
                                                      data-role="won"
                                                    >
                                                      {Number(item?.win) < 0 &&
                                                        "-"}{" "}
                                                      ₹
                                                      {Math.abs(
                                                        Number(item?.win)
                                                      )}
                                                    </td>
                                                  </tr>
                                                );
                                              }
                                            )}
                                          </tbody>
                                          <tfoot>
                                            <tr>
                                              <td
                                                className="ssr_footerCell"
                                                colSpan={1}
                                                data-role="total"
                                              >
                                                Total
                                              </td>
                                              <td
                                                className="ssr_footerCellBet"
                                                data-role="amount"
                                              >
                                                {totalBet < 0 && "-"} ₹
                                                {Math.abs(totalBet)}
                                              </td>
                                              <td
                                                className="ssr_footerCellBet"
                                                data-role="win"
                                              >
                                                {totalWin < 0 && "-"} ₹
                                                {Math.abs(totalWin)}
                                              </td>
                                            </tr>
                                          </tfoot>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bets--c7ba8" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="navigation--db816"
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
                    Previous Game
                  </div>
                </div>
                <div className="goBack--9724a">
                  <button
                    onClick={() => {
                      setTab("game-history");
                      playClickSound();
                    }}
                    className="button--673ce sm--8ab3e roundingBoth--6d5e6 buttonFitWidth--efe75 labelPositionInside--74c5c buttonRoot--3bd4d"
                    data-type="secondary"
                    data-role="go-back"
                    data-state="Default"
                  >
                    <span
                      className="roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b"
                      data-role="button-content"
                    >
                      <div
                        className="buttonBase--73d7d"
                        data-role="base-border"
                        style={{
                          padding:
                            "calc(var(--rem-migration-size, 10px) * 0.12)",
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
                <div className="switchToNextContainer--a97b7">
                  <div
                    className="switchRound--4e646"
                    data-role="switch-to-next"
                  >
                    Next Game
                    <span className="chevronRight--0c51b">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon--8dcd0"
                        height={15}
                      >
                        <path d="m8 7.41 4.95 4.95L8 17.31l1.41 1.42 6.37-6.37L9.41 6 8 7.41Z" />
                      </svg>
                    </span>
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

export default GameHistoryDetails;
