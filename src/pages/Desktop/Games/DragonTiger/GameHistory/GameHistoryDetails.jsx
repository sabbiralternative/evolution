import { useGetBets } from "../../../../../hooks/bets";
import { usePlaySound } from "../../../../../hooks/playSound";

const GameHistoryDetails = ({ setTab, roundId, eventId }) => {
  const { playClickSound } = usePlaySound();
  const { data, isLoading } = useGetBets({ round_id: roundId, eventId });
  const totalWin = data?.result?.bet_details?.reduce(
    (sum, item) => sum + (Number(item?.win) || 0),
    0
  );

  const totalBet = data?.result?.bet_details?.reduce(
    (sum, item) => sum + (Number(item?.bet) || 0),
    0
  );

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
                                  <table className="ssr_table">
                                    <tbody>
                                      <tr>
                                        <td className="ssr_resultHeaderCell">
                                          <span>Dragon</span>
                                        </td>
                                        <td className="ssr_resultHeaderCell">
                                          <span>Tiger</span>
                                        </td>
                                        <td className="ssr_resultHeaderCell">
                                          <span>Winner</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="ssr_cell">
                                          <div
                                            className="ssr_dt_result"
                                            data-role="history-outcome-cell"
                                          >
                                            {data?.result?.game_details?.player_a?.map(
                                              (card, idx) => {
                                                return (
                                                  <img
                                                    key={idx}
                                                    style={{
                                                      width: "50px",
                                                      height: "50px",
                                                    }}
                                                    src={`/cards/${card}.png`}
                                                    alt=""
                                                  />
                                                );
                                              }
                                            )}
                                          </div>
                                        </td>
                                        <td className="ssr_cell">
                                          <div
                                            className="ssr_dt_result"
                                            data-role="history-outcome-cell"
                                          >
                                            {data?.result?.game_details?.player_b?.map(
                                              (card, idx) => {
                                                return (
                                                  <img
                                                    key={idx}
                                                    style={{
                                                      width: "50px",
                                                      height: "50px",
                                                    }}
                                                    src={`/cards/${card}.png`}
                                                    alt=""
                                                  />
                                                );
                                              }
                                            )}
                                          </div>
                                        </td>
                                        <td className="ssr_cell">
                                          <div
                                            className="ssr_dt_result"
                                            data-role="history-outcome-cell"
                                          >
                                            {data?.result?.game_details?.winner}
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
