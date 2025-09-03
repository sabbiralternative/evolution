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
                        GOLDEN WEALTH BACCARAT
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
                            className="scrollable--96151 vertical--99fcf"
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
                                    Golden Wealth Baccarat
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
                                    03/09/2025 06:57:34
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
                                    #00:57:04
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
                                  <div className="jsClientsWrapperStylesToSsrContent--72a1c">
                                    <style
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          ".ssr_cellBetName{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_cellBetName:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_cellBetName:last-child,.ssr_cellBetName:nth-last-child(2){text-align:right}.ssr_cellBetName{background-color:hsla(0,0%,42%,.4);border-left-color:transparent;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ssr_cellBetName:hover{overflow:visible;position:relative}.ssr_cellBet,.ssr_cellCombination{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_cellBet:last-of-type,.ssr_cellCombination:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_cellBet:last-child,.ssr_cellBet:nth-last-child(2),.ssr_cellCombination:last-child,.ssr_cellCombination:nth-last-child(2){text-align:right}.ssr_cellBet,.ssr_cellCombination{background-color:hsla(0,0%,42%,.4)}.ssr_cellBet:last-of-type,.ssr_cellCombination:last-of-type{border-right-color:transparent}.ssr_freeplay .ssr_cellBet:not(.ssr_zeroWinValue){color:#00dbfc}.ssr_betsTable{border-collapse:initial;border-spacing:0;font-size:1.2em;font-weight:400;line-height:normal;overflow:hidden;table-layout:fixed;width:100%}.ssr_headerCell,.ssr_headerCellBet,.ssr_headerCellCombination{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_headerCell:last-of-type,.ssr_headerCellBet:last-of-type,.ssr_headerCellCombination:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_headerCell:last-child,.ssr_headerCell:nth-last-child(2),.ssr_headerCellBet:last-child,.ssr_headerCellBet:nth-last-child(2),.ssr_headerCellCombination:last-child,.ssr_headerCellCombination:nth-last-child(2){text-align:right}.ssr_headerCell,.ssr_headerCellBet,.ssr_headerCellCombination{overflow:hidden;text-overflow:ellipsis;white-space:normal}.ssr_headerCell:hover,.ssr_headerCellBet:hover,.ssr_headerCellCombination:hover{overflow:visible;position:relative}.ssr_footerCell,.ssr_footerCellCombination{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_footerCell:last-of-type,.ssr_footerCellCombination:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_footerCell:last-child,.ssr_footerCell:nth-last-child(2),.ssr_footerCellCombination:last-child,.ssr_footerCellCombination:nth-last-child(2){text-align:right}.ssr_footerCell,.ssr_footerCellCombination{border-bottom:1px solid #5a5a5a;border-top:0}.ssr_footerCellBet{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_footerCellBet:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_footerCellBet:last-child,.ssr_footerCellBet:nth-last-child(2){text-align:right}.ssr_footerCellBet{border-bottom:1px solid #5a5a5a;border-top:0}.ssr_freeplay .ssr_footerCellBet:not(.ssr_zeroWinValue){color:#00dbfc}.ssr_freeplayWin{color:#ffcf00!important}.ssr_playForFun{color:#00ffa1}.ssr_header{flex-shrink:0}.ssr_bets,.ssr_content{display:flex;flex-grow:1}.ssr_bets{position:relative}.ssr_table{border-collapse:initial;border-spacing:0;font-size:1.2em;font-weight:400;line-height:normal;overflow:hidden;table-layout:fixed;text-align:center;width:100%}.ssr_cell{background-color:rgba(0,0,0,.4);background-color:initial;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;height:100%;padding:0 .45em}.ssr_cell.ssr_fullWidth{padding-left:0;padding-right:0}.ssr_resultHeaderCell{background-color:rgba(0,0,0,.4);border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em}.ssr_Common_block{background:hsla(0,0%,100%,.05);display:flex;flex-basis:100%;font-size:1em;margin:0 6px}.ssr_Common_block.ssr_Common_fixed{height:7.2em}.ssr_Common_block.ssr_Common_winner{border:1px solid #fbdc01;color:inherit}.ssr_Common_twoBlocks{display:flex;flex:1 1 0;flex-direction:column}.ssr_Common_twoBlocks>.ssr_Common_block{flex:1}@media (orientation:portrait){.ssr_Common_twoBlocks>.ssr_Common_block{flex:auto}}.ssr_Common_twoBlocks:last-child{margin-bottom:6px}@media (orientation:landscape){.ssr_Common_twoBlocks{flex-direction:row}}.ssr_Common_blockPart{display:flex;flex-direction:column;font-size:1.4em}.ssr_Common_blockPart:first-child{flex:1 1 0;justify-content:center;line-height:1.3em;margin-left:1.2em;padding-right:.5em}.ssr_Common_blockPart:last-child{align-items:center;flex:2 2 0;font-size:1.2em;justify-content:center}.ssr_Common_winner{color:#fbdc01;min-height:2em}.ssr_Common_tie{background:hsla(0,0%,100%,.05);color:#fbdc01;font-size:1.2em;margin:3px 6px 0}.ssr_Common_cardHeader,.ssr_Common_tie{align-items:center;display:flex;font-weight:500;justify-content:center}.ssr_Common_cardHeader{min-height:2em}.ssr_Common_gameHistoryWrapper{container-name:ssr_baccarat;container-type:inline-size}.ssr_BetRow_cellBetName{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_BetRow_cellBetName:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_BetRow_cellBetName:last-child,.ssr_BetRow_cellBetName:nth-last-child(2){text-align:right}.ssr_BetRow_cellBetName{background-color:hsla(0,0%,42%,.4);border-left-color:transparent;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ssr_BetRow_cellBetName:hover{overflow:visible;position:relative}.ssr_BetRow_cellBet,.ssr_BetRow_cellCombination{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_BetRow_cellBet:last-of-type,.ssr_BetRow_cellCombination:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_BetRow_cellBet:last-child,.ssr_BetRow_cellBet:nth-last-child(2),.ssr_BetRow_cellCombination:last-child,.ssr_BetRow_cellCombination:nth-last-child(2){text-align:right}.ssr_BetRow_cellBet,.ssr_BetRow_cellCombination{background-color:hsla(0,0%,42%,.4);width:9em}.ssr_BetRow_cellBet:last-of-type,.ssr_BetRow_cellCombination:last-of-type{border-right-color:transparent}.ssr_BetRow_mobile .ssr_BetRow_cellBetName{padding:0 .3em 0 .7em}.ssr_BetRow_mobile .ssr_BetRow_cellBet,.ssr_BetRow_mobile .ssr_BetRow_cellBetName{background-color:initial;border:0;border-top:.1em solid hsla(0,0%,100%,.2);white-space:normal;width:auto}.ssr_BetRow_mobile .ssr_BetRow_cellBet{padding:0 .3em;white-space:nowrap}.ssr_BetRow_mobile .ssr_BetRow_cellBet:last-child{padding-left:1em;padding-right:.7em;white-space:nowrap}.ssr_BetRow_mobile .ssr_BetRow_cellCombination,.ssr_BetRow_mobile .ssr_BetRow_cellOutcome{background-color:initial;border:0;border-top:.1em solid hsla(0,0%,100%,.2);padding:0 .3em;white-space:normal;width:auto}.ssr_BetRow_mobile:first-child .ssr_BetRow_cellBet,.ssr_BetRow_mobile:first-child .ssr_BetRow_cellBetName,.ssr_BetRow_mobile:first-child .ssr_BetRow_cellCombination,.ssr_BetRow_mobile:first-child .ssr_BetRow_cellOutcome{border:0}.ssr_BetRow_wideHeader.ssr_BetRow_mobile .ssr_BetRow_cellBetName{overflow:visible;text-overflow:inherit}.ssr_BetRow_freeplay .ssr_BetRow_cellBet:not(.ssr_BetRow_zeroWinValue){color:#00dbfc}.ssr_BetRow_freeplayWin{color:#ffcf00!important}.ssr_BetRow_playForFun{color:#00ffa1}.ssr_BetsFooter_footerCell,.ssr_BetsFooter_footerCellCombination{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_BetsFooter_footerCell:last-of-type,.ssr_BetsFooter_footerCellCombination:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_BetsFooter_footerCell:last-child,.ssr_BetsFooter_footerCell:nth-last-child(2),.ssr_BetsFooter_footerCellCombination:last-child,.ssr_BetsFooter_footerCellCombination:nth-last-child(2){text-align:right}.ssr_BetsFooter_footerCell,.ssr_BetsFooter_footerCellCombination{border-bottom:1px solid #5a5a5a;border-top:0}.ssr_BetsFooter_footerCellBet{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_BetsFooter_footerCellBet:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_BetsFooter_footerCellBet:last-child,.ssr_BetsFooter_footerCellBet:nth-last-child(2){text-align:right}.ssr_BetsFooter_footerCellBet{border-bottom:1px solid #5a5a5a;border-top:0;width:9em}.ssr_BetsFooter_mobile .ssr_BetsFooter_footerCell{padding:0 .3em 0 .7em}.ssr_BetsFooter_mobile .ssr_BetsFooter_footerCell,.ssr_BetsFooter_mobile .ssr_BetsFooter_footerCellBet{background-color:initial;border:0;border-top:.1em solid hsla(0,0%,100%,.2);white-space:normal;width:auto}.ssr_BetsFooter_mobile .ssr_BetsFooter_footerCellBet{padding:0 .3em;white-space:nowrap}.ssr_BetsFooter_mobile .ssr_BetsFooter_footerCellBet:last-child{padding-left:1em;padding-right:.7em;white-space:nowrap}.ssr_BetsFooter_mobile .ssr_BetsFooter_footerCellCombination{background-color:initial;border:0;border-top:.1em solid hsla(0,0%,100%,.2);padding:0 .3em;white-space:normal;width:auto}.ssr_BetsFooter_freeplay .ssr_BetsFooter_footerCellBet:not(.ssr_BetsFooter_zeroWinValue){color:#00dbfc}.ssr_BetsFooter_freeplayWin{color:#ffcf00!important}.ssr_BetsFooter_playForFun{color:#00ffa1}.ssr_BetsHeader_headerCell{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_BetsHeader_headerCell:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_BetsHeader_headerCell:last-child,.ssr_BetsHeader_headerCell:nth-last-child(2){text-align:right}.ssr_BetsHeader_headerCellBet,.ssr_BetsHeader_headerCellCombination{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_BetsHeader_headerCellBet:last-of-type,.ssr_BetsHeader_headerCellCombination:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_BetsHeader_headerCellBet:last-child,.ssr_BetsHeader_headerCellBet:nth-last-child(2),.ssr_BetsHeader_headerCellCombination:last-child,.ssr_BetsHeader_headerCellCombination:nth-last-child(2){text-align:right}.ssr_BetsHeader_headerCellBet,.ssr_BetsHeader_headerCellCombination{width:9em}.ssr_BetsHeader_mobile .ssr_BetsHeader_headerCell{background-color:initial;background-color:hsla(0,0%,42%,.4);border:0;padding:0 .3em 0 .7em;white-space:normal;width:auto}.ssr_BetsHeader_mobile .ssr_BetsHeader_headerCellBet,.ssr_BetsHeader_mobile .ssr_BetsHeader_headerCellCombination{background-color:initial;background-color:hsla(0,0%,42%,.4);border:0;padding:0 .3em;white-space:normal;white-space:nowrap;width:auto}.ssr_BetsHeader_mobile .ssr_BetsHeader_headerCellBetWin{padding-left:1em;padding-right:.7em;white-space:nowrap;width:1%}.ssr_BetsTable_mobile .ssr_BetsTable_header{line-height:2em}.ssr_BetsTable_bets{border-collapse:initial;border-spacing:0;font-size:1.2em;font-weight:400;line-height:normal;overflow:hidden;table-layout:fixed;width:100%}.ssr_BetsTable_mobile .ssr_BetsTable_bets{font-size:1.4em;table-layout:auto}.ssr_BetsTable_mobile .ssr_BetsTable_bets thead{line-height:2em}.ssr_BetsTable_mobile .ssr_BetsTable_bets span{opacity:.8}.ssr_BetsTable_mobile{width:100%}@supports (container-type:inline-size){@container ssr_baccarat (min-width: 431px){.ssr_BetsTable_mobile{font-size:.6em}}}.ssr_Card_wrapper{display:inline-block;position:relative}.ssr_Card_card,.ssr_Card_wrapper{height:100%;width:100%}.ssr_Card_red{fill:#e02423}.ssr_Card_black{fill:#0d0d0d}.ssr_Card_darkRed{fill:#7a3030}.ssr_Card_darkKhaki{fill:#756957}.ssr_Card_horizontal-left{transform:rotate(-90deg) translateX(-.2em)}.ssr_Card_horizontal-right{transform:rotate(90deg) translateX(.2em)}.ssr_Card_suit{display:inline-block;height:100%;width:100%}.ssr_Card_with-animation .ssr_Card_suit{-webkit-backface-visibility:hidden;backface-visibility:hidden;left:0;position:absolute;top:0;transform:rotateY(180deg);transform-style:preserve-3d;transition:.6s}.ssr_Card_with-animation .ssr_Card_suit.ssr_Card_active{transform:rotateY(0deg)}.ssr_Card_with-animation.ssr_Card_horizontal-right .ssr_Card_suit{bottom:0;left:inherit;right:0;top:inherit}.ssr_Cards_card{display:inline-block;height:4em;margin-right:.333em;position:relative;width:2.88em}.ssr_Cards_cardGlow,.ssr_Cards_cardOverlay{border-radius:.2em;box-sizing:border-box;height:100%;left:0;position:absolute;top:0;width:100%}.ssr_Cards_cardOverlay{--cardBorderColor:#968770;--cardOverlayBackground:none;background:var(--cardOverlayBackground);border:.1em solid var(--cardBorderColor)}.ssr_Cards_cardGlow{--cardGlowColor:none;box-shadow:0 0 .7em 0 var(--cardGlowColor)}.ssr_Cards_horizontal .ssr_Cards_cardGlow{bottom:.4em;height:2em;top:auto}.ssr_Cards_card.ssr_Cards_horizontal{align-self:flex-end;height:4em;width:4em}.ssr_Cards_multiplierWrapper{display:flex;height:0;justify-content:center;position:relative}.ssr_Cards_multiplierWrapper.ssr_Cards_horizontal{width:3.3em}.ssr_Cards_multiplier{height:4em;margin-top:-2.2em;position:absolute;width:2.88em}.ssr_Cards_multiplier.ssr_Cards_largeMultiplier{width:3.667em}.ssr_Cards_multiplier.ssr_Cards_horizontal{margin-top:-1.3em}.ssr_Cards_multiplier.ssr_Cards_dark{opacity:.5}.ssr_Cards_mobile .ssr_Cards_card{align-self:center;height:3.1em;margin-right:.3em;width:2.2em}.ssr_Cards_mobile .ssr_Cards_card.ssr_Cards_horizontal{height:3.1em;width:3.1em}.ssr_Cards_mobile .ssr_Cards_multiplier{margin-right:.3em;margin-top:-1.9em;width:2.2em}.ssr_Cards_mobile .ssr_Cards_multiplier.ssr_Cards_largeMultiplier{width:2.88em}.ssr_Cards_mobile .ssr_Cards_multiplier.ssr_Cards_horizontal{margin-top:-1.2em}.ssr_Cards_cards{align-items:center;display:flex;justify-content:flex-end}.ssr_Cards_cards.ssr_Cards_withMultipliers{margin-top:2em}.ssr_Cards_cards.ssr_Cards_withMultipleRows{flex-wrap:wrap;justify-content:flex-start;margin-bottom:-2em;margin-left:1em}.ssr_Cards_cards.ssr_Cards_withMultipleRows.ssr_Cards_mobile{width:12em}.ssr_Cards_cards.ssr_Cards_withMultipleRows>.ssr_Cards_card{margin-bottom:3em}@supports (container-type:inline-size){@container ssr_baccarat (min-width: 431px){.ssr_Cards_cards.ssr_Cards_withMultipliers:first-child,.ssr_Cards_cards.ssr_Cards_withMultipliers:last-child{margin-top:.7em}}}.ssr_GradientWithStroke_text{font-family:EvoAsul-Bold,sans-serif}.ssr_Multiplier_multiplier{display:flex;flex-grow:1;height:2em}.ssr_Result_result{align-items:center;display:flex;justify-content:center;padding:.8em 0}.ssr_Result_withWinnerHighlight .ssr_Result_result{margin-top:.8em}.ssr_Result_withWinnerHighlight .ssr_Result_result.ssr_Result_winner{background:hsla(0,0%,100%,.1);border:.1em solid #fbdc01;color:inherit}.ssr_Result_winnerCell{align-items:center;display:flex;height:4em}.ssr_Result_tableWrapper tr:nth-child(2) td{vertical-align:top}.ssr_Result_score{display:inline-block;font-size:2.333em;font-weight:400;margin-left:.583em}.ssr_Result_score.ssr_Result_withMultipliers,.ssr_Result_winnerCell.ssr_Result_withMultipliers{margin-top:2.2em}.ssr_Result_blocks{display:flex;flex:1 1 0;flex-direction:column}.ssr_Result_blocks:last-child{margin-bottom:6px}.ssr_Result_modeHeader{display:flex;line-height:1.3;text-align:left;width:100%}.ssr_Result_modeHeader .ssr_Result_noCommission{color:#f190ff}.ssr_Result_modeHeader .ssr_Result_modeTitle,.ssr_Result_modeHeader .ssr_Result_modeValue{padding:0 .45em}.ssr_Result_modeHeader .ssr_Result_modeTitle{background:rgba(0,0,0,.4);width:40%}.ssr_Result_modeHeader .ssr_Result_modeValue{background:hsla(0,0%,42%,.4);flex:1}.ssr_Result_modeHeader.ssr_Result_isMobile{border-bottom:.1em solid #5a5a5a;border-top:.1em solid #5a5a5a;font-size:1.4em;line-height:1.5;margin-bottom:6px}.ssr_Result_modeHeader.ssr_Result_isMobile .ssr_Result_modeTitle{background:rgba(0,0,0,.4);border-right:.1em solid #5a5a5a}@supports (container-type:inline-size){@container ssr_baccarat (min-width: 431px){.ssr_Result_isMobile.ssr_Result_modeHeader{font-size:.9em}}}.ssr_ResultBlock_score{align-items:center;display:flex;font-size:1.8em;font-weight:500;justify-content:flex-start;min-height:2em;padding-left:.4em}.ssr_ResultBlock_score.ssr_ResultBlock_withMultipliers{margin-top:1.5em;min-height:2.4em}.ssr_ResultBlock_cardsAndScore{display:flex;justify-content:center}.ssr_ResultBlock_resultBlock{align-items:center;padding:1.5em 1em 2em}.ssr_ResultBlock_resultBlock .ssr_ResultBlock_description{display:flex;flex:1 1 50%;flex-direction:column;font-size:1.2em;justify-content:center;line-height:1.3em;margin-bottom:.5em;text-align:left}.ssr_ResultBlock_resultBlock .ssr_ResultBlock_content{align-items:center;flex:2 2 50%;font-size:1.2em;justify-content:center}.ssr_ResultBlock_resultBlock .ssr_ResultBlock_resultTitle{display:none;flex:1 1 50%;justify-content:flex-start}.ssr_ResultBlock_resultBlock.ssr_ResultBlock_winner .ssr_ResultBlock_description{display:none}.ssr_ResultBlock_resultBlock.ssr_ResultBlock_winner .ssr_ResultBlock_resultTitle{display:flex}.ssr_ResultBlock_resultBlock.ssr_ResultBlock_withMultipliers .ssr_ResultBlock_description{margin-bottom:0;margin-top:1.2em}.ssr_ResultBlock_resultBlock.ssr_ResultBlock_withMultipliers .ssr_ResultBlock_resultTitle{margin-top:1.5em}@supports (container-type:inline-size){@container ssr_baccarat (min-width: 431px){.ssr_ResultBlock_resultBlock{font-size:.7em;padding:.5em}.ssr_ResultBlock_resultBlock.ssr_ResultBlock_withMultipliers{padding-top:1.2em}.ssr_ResultBlock_resultBlock.ssr_ResultBlock_withMultipliers:first-child,.ssr_ResultBlock_resultBlock.ssr_ResultBlock_withMultipliers:last-child{padding-top:.7em}.ssr_ResultBlock_score.ssr_ResultBlock_withMultipliers:first-child,.ssr_ResultBlock_score.ssr_ResultBlock_withMultipliers:last-child{margin-top:.6em}}}.ssr_WithMultipliersBetRow_bet{align-items:center;display:inline-flex;width:100%}.ssr_WithMultipliersBetRow_betName:hover{overflow:visible;position:relative}.ssr_WithMultipliersBetRow_cellBetName{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_WithMultipliersBetRow_cellBetName:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_WithMultipliersBetRow_cellBetName:last-child,.ssr_WithMultipliersBetRow_cellBetName:nth-last-child(2){text-align:right}.ssr_WithMultipliersBetRow_cellBetName{background-color:hsla(0,0%,42%,.4);border-left-color:transparent;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ssr_WithMultipliersBetRow_withMultipliers{background-position:50%!important;background-size:contain!important;display:flex;flex-grow:1;margin:0 .5em}.ssr_WithMultipliersBetRow_withMultipliers:hover{background:none}@supports (container-type:inline-size){@container ssr_baccarat (min-width: 431px){.ssr_WithMultipliersBetRow_withMultipliers{font-size:.8em}}}.ssr_RedEnvelopeBetRow_bet{align-items:center;display:inline-flex;width:100%}.ssr_RedEnvelopeBetRow_betName:hover{overflow:visible;position:relative}.ssr_RedEnvelopeBetRow_cellBetName{background-color:rgba(0,0,0,.4);border-left:1px solid #5a5a5a;border-top:1px solid #5a5a5a;font:inherit;height:1.5em;padding:0 .45em;text-align:left}.ssr_RedEnvelopeBetRow_cellBetName:last-of-type{border-right:1px solid #5a5a5a;padding-right:1.1em}.ssr_RedEnvelopeBetRow_cellBetName:last-child,.ssr_RedEnvelopeBetRow_cellBetName:nth-last-child(2){text-align:right}.ssr_RedEnvelopeBetRow_cellBetName{background-color:hsla(0,0%,42%,.4);border-left-color:transparent;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ssr_RedEnvelopeBetRow_cellPayout{text-align:right}.ssr_RedEnvelopeBetsHeader_headerCellPayout{text-align:right}.ssr_RedEnvelopeBetsHeader_headerCellPayout svg{padding:.225em 0;vertical-align:middle;width:2.43em}",
                                      }}
                                    />
                                    <div>
                                      <div className="game-round ssr_Common_gameHistoryWrapper">
                                        <svg
                                          style={{
                                            visibility: "hidden",
                                            height: 0,
                                            width: 0,
                                            position: "absolute",
                                          }}
                                        >
                                          <defs>
                                            <linearGradient
                                              id="card-bg-light-default"
                                              x1={90}
                                              y1={250}
                                              x2={90}
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop
                                                offset={0}
                                                stopColor="#e6e6e6"
                                              />
                                              <stop
                                                offset={1}
                                                stopColor="#fff"
                                              />
                                            </linearGradient>
                                            <linearGradient
                                              id="card-bg-dark"
                                              x1={90}
                                              y1={250}
                                              x2={90}
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop
                                                offset={0}
                                                stopColor="#121212"
                                              />
                                              <stop
                                                offset={1}
                                                stopColor="#272727"
                                              />
                                            </linearGradient>
                                            <linearGradient
                                              id="card-bg-gold"
                                              x1={90}
                                              y1={250}
                                              x2={90}
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop
                                                stopColor="#FFB600"
                                                offset={0}
                                              />
                                              <stop
                                                stopColor="#FFB600"
                                                offset="0.15"
                                              />
                                              <stop
                                                stopColor="#FFB600"
                                                offset="0.2"
                                              />
                                              <stop
                                                stopColor="#FFD264"
                                                offset="0.3"
                                              />
                                              <stop
                                                stopColor="#FFB600"
                                                offset="0.45"
                                              />
                                              <stop
                                                stopColor="#FFB600"
                                                offset="0.6"
                                              />
                                              <stop
                                                stopColor="#FFD874"
                                                offset="0.8"
                                              />
                                              <stop
                                                stopColor="#FFB600"
                                                offset={1}
                                              />
                                            </linearGradient>
                                            <linearGradient
                                              id="card-bg-metal-gold"
                                              x1="75.978"
                                              y1="-17.192"
                                              x2="105.5943"
                                              y2="342.5"
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop stopColor="#F7B81D" />
                                              <stop
                                                offset="0.034"
                                                stopColor="#F6BC26"
                                              />
                                              <stop
                                                offset="0.091"
                                                stopColor="#F6C741"
                                              />
                                              <stop
                                                offset="0.164"
                                                stopColor="#F5D96C"
                                              />
                                              <stop
                                                offset="0.241"
                                                stopColor="#F5EFA1"
                                              />
                                              <stop
                                                offset="0.295"
                                                stopColor="#F5EA94"
                                              />
                                              <stop
                                                offset="0.397"
                                                stopColor="#F5DE72"
                                              />
                                              <stop
                                                offset="0.527"
                                                stopColor="#F7CB3E"
                                              />
                                              <stop
                                                offset="0.57"
                                                stopColor="#F6D04D"
                                              />
                                              <stop
                                                offset="0.803"
                                                stopColor="#F5EFA1"
                                              />
                                              <stop
                                                offset="0.829"
                                                stopColor="#EFE697"
                                              />
                                              <stop
                                                offset="0.873"
                                                stopColor="#E2CF7F"
                                              />
                                              <stop
                                                offset="0.929"
                                                stopColor="#CBAB56"
                                              />
                                              <stop
                                                offset="0.994"
                                                stopColor="#AD781F"
                                              />
                                              <stop
                                                offset={1}
                                                stopColor="#AA731A"
                                              />
                                            </linearGradient>
                                            <linearGradient
                                              id="card-bg-gradient-grey"
                                              x1={90}
                                              y1={0}
                                              x2={90}
                                              y2={250}
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop stopColor="white" />
                                              <stop
                                                offset={1}
                                                stopColor="#C8C8C8"
                                              />
                                            </linearGradient>
                                            <linearGradient
                                              id="card-bg-pale-gold"
                                              x1={0}
                                              y1={70}
                                              x2={190}
                                              y2={20}
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop stopColor="#CFA032" />
                                              <stop
                                                offset="0.253"
                                                stopColor="#FFED6C"
                                              />
                                              <stop
                                                offset="0.585"
                                                stopColor="#CFA032"
                                              />
                                              <stop
                                                offset="0.798"
                                                stopColor="#FEEC6C"
                                              />
                                              <stop
                                                offset={1}
                                                stopColor="#CFA031"
                                              />
                                            </linearGradient>
                                            <linearGradient
                                              id="card-border-metal-gold"
                                              x1={0}
                                              y1={125}
                                              x2={180}
                                              y2={125}
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop stopColor="#CFA032" />
                                              <stop
                                                offset="0.253"
                                                stopColor="#FFED6C"
                                              />
                                              <stop
                                                offset="0.585"
                                                stopColor="#CFA032"
                                              />
                                              <stop
                                                offset="0.798"
                                                stopColor="#FEEC6C"
                                              />
                                              <stop
                                                offset={1}
                                                stopColor="#CFA031"
                                              />
                                            </linearGradient>
                                            <linearGradient
                                              id="card-border-gold-gradient"
                                              x1={0}
                                              y1={0}
                                              x2={0}
                                              y2={180}
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop stopColor="#DAC7A8" />
                                              <stop
                                                offset={1}
                                                stopColor="#795E3D"
                                              />
                                            </linearGradient>
                                            <linearGradient
                                              id="card-border-red-gradient"
                                              x1={0}
                                              y1={0}
                                              x2={0}
                                              y2={180}
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop stopColor="#DAA8A8" />
                                              <stop
                                                offset={1}
                                                stopColor="#793D3D"
                                              />
                                            </linearGradient>
                                            <linearGradient
                                              id="card-border-default"
                                              x1={90}
                                              y1={250}
                                              x2={90}
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop
                                                offset={0}
                                                stopColor="#fff"
                                              />
                                              <stop
                                                offset={1}
                                                stopColor="#bfbfbf"
                                              />
                                            </linearGradient>
                                            <linearGradient
                                              id="card-border-dark"
                                              x1={90}
                                              y1={250}
                                              x2={90}
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop
                                                offset={0}
                                                stopColor="#dac7a8"
                                              />
                                              <stop
                                                offset={1}
                                                stopColor="#7a5f3e"
                                              />
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
                                              id="card-border-thick"
                                              viewBox="0 0 180 250"
                                            >
                                              <path d="M 159.953 8.777 L 20.439 8.777 C 17.011 8.601 14.507 9.7 12.363 12.083 C 9.98 14.245 8.738 16.84 8.879 20.313 L 8.544 229.657 C 8.395 233.133 9.5 235.628 11.868 237.78 C 14.014 240.166 16.567 241.389 19.987 241.21 L 159.566 241.209 C 162.979 241.39 165.472 240.256 167.67 237.874 C 170.047 235.666 171.274 233.136 171.127 229.677 L 171.464 20.329 C 171.611 16.852 170.509 14.358 168.139 12.208 C 165.991 9.822 163.436 8.597 160.019 8.776 Z M 180.162 20.345 L 180 120.693 L 180 233.037 C 179.961 242.443 172.306 250.037 162.9 250 L 17.1 250 C 7.694 250.037 0.04 242.443 0 233.037 L 0 231.613 C -0.081 230.95 -0.133 230.291 -0.156 229.641 L 0 132.723 L 0 16.963 C 0.04 7.558 7.694 -0.036 17.1 0 L 162.9 0 C 172.306 -0.037 179.961 7.557 180 16.963 L 180 18.317 C 180.085 19 180.139 19.678 180.162 20.345 Z" />
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
                                              id="rank-10"
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
                                            <symbol
                                              id="back-of-card_small"
                                              viewBox="0 0 180 250"
                                            >
                                              <path
                                                fill="#e6e6e6"
                                                d="M180,233.037A17.033,17.033,0,0,1,162.9,250H17.1A17.033,17.033,0,0,1,0,233.037V16.963A17.034,17.034,0,0,1,17.1,0H162.9A17.034,17.034,0,0,1,180,16.963V233.037Z"
                                              />
                                              <rect
                                                fill="#999"
                                                x={15}
                                                y={15}
                                                width={150}
                                                height={220}
                                              />
                                              <ellipse
                                                fill="#e6e6e6"
                                                cx={90}
                                                cy={125}
                                                rx="52.768"
                                                ry="52.336"
                                              />
                                              <path
                                                fill="#999"
                                                d="M65.173,93.226c21.983-11.643,50.373.637,52.507,30.273C76.91,126.676,72,108.47,65.173,93.226Z"
                                              />
                                              <path
                                                fill="#999"
                                                d="M65.173,156.772c21.983,11.645,50.373-.634,52.507-30.272C76.91,123.327,72,141.532,65.173,156.772Z"
                                              />
                                            </symbol>
                                            <symbol
                                              id="back-of-card_default"
                                              viewBox="0 0 180 250"
                                            >
                                              <path
                                                fill="#e6e6e6"
                                                d="M180,233.037A17.033,17.033,0,0,1,162.9,250H17.1A17.033,17.033,0,0,1,0,233.037V16.963A17.034,17.034,0,0,1,17.1,0H162.9A17.034,17.034,0,0,1,180,16.963V233.037Z"
                                              />
                                              <path
                                                fill="url(${url}#card-border-light)"
                                                d="M162.9,1A16.051,16.051,0,0,1,179,16.963V233.037A16.051,16.051,0,0,1,162.9,249H17.1A16.052,16.052,0,0,1,1,233.037V16.963A16.052,16.052,0,0,1,17.1,1H162.9m0-1H17.1A17.034,17.034,0,0,0,0,16.963V233.037A17.034,17.034,0,0,0,17.1,250H162.9A17.033,17.033,0,0,0,180,233.037V16.963A17.033,17.033,0,0,0,162.9,0h0Z"
                                              />
                                              <rect
                                                fill="#999"
                                                x={15}
                                                y={15}
                                                width={150}
                                                height={220}
                                              />
                                              <ellipse
                                                fill="#e6e6e6"
                                                cx={90}
                                                cy={125}
                                                rx="52.768"
                                                ry="52.336"
                                              />
                                              <path
                                                fill="#999"
                                                d="M65.173,93.226c21.983-11.643,50.373.637,52.507,30.273C76.91,126.676,72,108.47,65.173,93.226Z"
                                              />
                                              <path
                                                fill="#999"
                                                d="M65.173,156.772c21.983,11.645,50.373-.634,52.507-30.272C76.91,123.327,72,141.532,65.173,156.772Z"
                                              />
                                            </symbol>
                                          </defs>
                                        </svg>
                                        <div>
                                          <div className="ssr_Result_blocks">
                                            <div className="ssr_Common_block ssr_ResultBlock_resultBlock ssr_ResultBlock_winner ssr_Common_winner ssr_ResultBlock_withMultipliers">
                                              <div
                                                className="ssr_Common_cardHeader ssr_ResultBlock_resultTitle ssr_Common_winner"
                                                data-role="result"
                                              >
                                                PLAYER WINS
                                              </div>
                                              <div className="ssr_ResultBlock_description">
                                                Player
                                              </div>
                                              <div className="ssr_ResultBlock_content">
                                                <div
                                                  className="ssr_ResultBlock_cardsAndScore"
                                                  data-role="player-hand"
                                                >
                                                  <div className="ssr_Cards_cards  ssr_Cards_mobile ssr_Cards_withMultipliers">
                                                    <div
                                                      className="ssr_Cards_card "
                                                      data-role="card-container"
                                                      data-dealt="true"
                                                    >
                                                      <span
                                                        className="ssr_Card_wrapper "
                                                        data-role="card-H3"
                                                      >
                                                        <span className="ssr_Card_suit ssr_Card_active">
                                                          <svg
                                                            viewBox="0 0 180 250"
                                                            className="ssr_Card_card ssr_Card_red"
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
                                                                height={95}
                                                                x="56.86"
                                                                y={20}
                                                              />
                                                              <use
                                                                xlinkHref="#suit-H"
                                                                height={108}
                                                                x={48}
                                                                y={132}
                                                              />
                                                            </g>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </div>
                                                    <div
                                                      className="ssr_Cards_card "
                                                      data-role="card-container"
                                                      data-dealt="true"
                                                    >
                                                      <span
                                                        className="ssr_Card_wrapper "
                                                        data-role="card-S4"
                                                      >
                                                        <span className="ssr_Card_suit ssr_Card_active">
                                                          <svg
                                                            viewBox="0 0 180 250"
                                                            className="ssr_Card_card ssr_Card_black"
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
                                                  <div
                                                    className="ssr_ResultBlock_score ssr_ResultBlock_withMultipliers"
                                                    data-role="player-hand-score"
                                                  >
                                                    7
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="ssr_Common_block ssr_ResultBlock_resultBlock  ssr_ResultBlock_withMultipliers">
                                              <div className="ssr_Common_cardHeader ssr_ResultBlock_resultTitle ssr_Common_winner"></div>
                                              <div className="ssr_ResultBlock_description">
                                                Golden cards
                                              </div>
                                              <div className="ssr_ResultBlock_content">
                                                <div
                                                  className="ssr_ResultBlock_cardsAndScore"
                                                  data-role="with-multipliers-cards"
                                                >
                                                  <div className="ssr_Cards_cards  ssr_Cards_mobile ssr_Cards_withMultipliers">
                                                    <div
                                                      className="ssr_Cards_card "
                                                      data-role="card-container"
                                                      data-dealt="false"
                                                    >
                                                      <div className="ssr_Cards_multiplierWrapper ">
                                                        <div className="ssr_Cards_multiplier  ssr_Cards_dark ">
                                                          <div
                                                            className="ssr_Multiplier_multiplier"
                                                            data-role="multiplier"
                                                            data-value={2}
                                                          >
                                                            <svg
                                                              width="100%"
                                                              height="100%"
                                                              viewBox="0 -6 30 20.4"
                                                              version="1.1"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="46.095936%"
                                                                  y1="73.20873%"
                                                                  x2="46.2950709%"
                                                                  y2="21.7043652%"
                                                                  id="linearGradient-1-1"
                                                                >
                                                                  <stop
                                                                    stopColor="#DBB251"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#C08843"
                                                                    offset="42.5510296%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#FFDEA9"
                                                                    offset="42.8203665%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#EBC963"
                                                                    offset="68.4331154%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#FFD67D"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                                <text
                                                                  id="text-2-1"
                                                                  fontFamily="Inter, Arial, sans-serif"
                                                                  fontSize={17}
                                                                  fontWeight="bold"
                                                                  textAnchor="middle"
                                                                  x="50%"
                                                                  y="50%"
                                                                >
                                                                  2x
                                                                </text>
                                                                <filter
                                                                  x="-73.9%"
                                                                  y="-36.0%"
                                                                  width="247.8%"
                                                                  height="240.0%"
                                                                  filterUnits="objectBoundingBox"
                                                                  id="filter-1-1"
                                                                >
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={3}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter1"
                                                                  />
                                                                  <feGaussianBlur
                                                                    stdDeviation={
                                                                      2
                                                                    }
                                                                    in="shadowOffsetOuter1"
                                                                    result="shadowBlurOuter1"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.75220788 0"
                                                                    type="matrix"
                                                                    in="shadowBlurOuter1"
                                                                    result="shadowMatrixOuter1"
                                                                  />
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={5}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter2"
                                                                  />
                                                                  <feGaussianBlur
                                                                    stdDeviation="3.5"
                                                                    in="shadowOffsetOuter2"
                                                                    result="shadowBlurOuter2"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.467136549 0"
                                                                    type="matrix"
                                                                    in="shadowBlurOuter2"
                                                                    result="shadowMatrixOuter2"
                                                                  />
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={1}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter3"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0.441151495   0 0 0 0 0.247312201   0 0 0 0 0  0 0 0 1 0"
                                                                    type="matrix"
                                                                    in="shadowOffsetOuter3"
                                                                    result="shadowMatrixOuter3"
                                                                  />
                                                                  <feMerge>
                                                                    <feMergeNode in="shadowMatrixOuter1" />
                                                                    <feMergeNode in="shadowMatrixOuter2" />
                                                                    <feMergeNode in="shadowMatrixOuter3" />
                                                                  </feMerge>
                                                                </filter>
                                                                <filter
                                                                  x="-50.0%"
                                                                  y="-14.0%"
                                                                  width="200.0%"
                                                                  height="196.0%"
                                                                  filterUnits="objectBoundingBox"
                                                                  id="filter-2-1"
                                                                >
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={1}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetInner1"
                                                                  />
                                                                  <feComposite
                                                                    in="shadowOffsetInner1"
                                                                    in2="SourceAlpha"
                                                                    operator="arithmetic"
                                                                    k2={-1}
                                                                    k3={1}
                                                                    result="shadowInnerInner1"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
                                                                    in="shadowInnerInner1"
                                                                  />
                                                                </filter>
                                                              </defs>
                                                              <g
                                                                fill="none"
                                                                fillRule="evenodd"
                                                              >
                                                                <use
                                                                  fill="#FFD67D"
                                                                  fillOpacity={
                                                                    1
                                                                  }
                                                                  filter="url(#filter-1-1)"
                                                                  xlinkHref="#text-2-1"
                                                                />
                                                                <use
                                                                  fill="url(#linearGradient-1-1)"
                                                                  fillRule="evenodd"
                                                                  xlinkHref="#text-2-1"
                                                                />
                                                                <use
                                                                  fill="#FFD67D"
                                                                  fillOpacity={
                                                                    1
                                                                  }
                                                                  filter="url(#filter-2-1)"
                                                                  xlinkHref="#text-2-1"
                                                                />
                                                              </g>
                                                            </svg>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <span
                                                        className="ssr_Card_wrapper "
                                                        data-role="card-CK"
                                                      >
                                                        <span className="ssr_Card_suit ssr_Card_active">
                                                          <svg
                                                            viewBox="0 0 180 250"
                                                            className="ssr_Card_card ssr_Card_darkKhaki"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <g>
                                                              <use
                                                                xlinkHref="#card-background"
                                                                fill="url(#card-bg-dark)"
                                                              />
                                                              <use
                                                                xlinkHref="#card-border"
                                                                fill="url(#card-border-dark)"
                                                              />
                                                            </g>
                                                            <g>
                                                              <use
                                                                xlinkHref="#rank-K"
                                                                height={95}
                                                                x="46.919"
                                                                y={20}
                                                              />
                                                              <use
                                                                xlinkHref="#suit-C"
                                                                height={108}
                                                                x={48}
                                                                y={132}
                                                              />
                                                            </g>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                      <div
                                                        className="ssr_Cards_cardOverlay"
                                                        style={{
                                                          "-cardbordercolor":
                                                            "#968770",
                                                        }}
                                                      />
                                                    </div>
                                                    <div
                                                      className="ssr_Cards_card "
                                                      data-role="card-container"
                                                      data-dealt="false"
                                                    >
                                                      <div className="ssr_Cards_multiplierWrapper ">
                                                        <div className="ssr_Cards_multiplier  ssr_Cards_dark ">
                                                          <div
                                                            className="ssr_Multiplier_multiplier"
                                                            data-role="multiplier"
                                                            data-value={2}
                                                          >
                                                            <svg
                                                              width="100%"
                                                              height="100%"
                                                              viewBox="0 -6 30 20.4"
                                                              version="1.1"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="46.095936%"
                                                                  y1="73.20873%"
                                                                  x2="46.2950709%"
                                                                  y2="21.7043652%"
                                                                  id="linearGradient-1-2"
                                                                >
                                                                  <stop
                                                                    stopColor="#DBB251"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#C08843"
                                                                    offset="42.5510296%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#FFDEA9"
                                                                    offset="42.8203665%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#EBC963"
                                                                    offset="68.4331154%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#FFD67D"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                                <text
                                                                  id="text-2-2"
                                                                  fontFamily="Inter, Arial, sans-serif"
                                                                  fontSize={17}
                                                                  fontWeight="bold"
                                                                  textAnchor="middle"
                                                                  x="50%"
                                                                  y="50%"
                                                                >
                                                                  2x
                                                                </text>
                                                                <filter
                                                                  x="-73.9%"
                                                                  y="-36.0%"
                                                                  width="247.8%"
                                                                  height="240.0%"
                                                                  filterUnits="objectBoundingBox"
                                                                  id="filter-1-2"
                                                                >
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={3}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter1"
                                                                  />
                                                                  <feGaussianBlur
                                                                    stdDeviation={
                                                                      2
                                                                    }
                                                                    in="shadowOffsetOuter1"
                                                                    result="shadowBlurOuter1"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.75220788 0"
                                                                    type="matrix"
                                                                    in="shadowBlurOuter1"
                                                                    result="shadowMatrixOuter1"
                                                                  />
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={5}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter2"
                                                                  />
                                                                  <feGaussianBlur
                                                                    stdDeviation="3.5"
                                                                    in="shadowOffsetOuter2"
                                                                    result="shadowBlurOuter2"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.467136549 0"
                                                                    type="matrix"
                                                                    in="shadowBlurOuter2"
                                                                    result="shadowMatrixOuter2"
                                                                  />
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={1}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter3"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0.441151495   0 0 0 0 0.247312201   0 0 0 0 0  0 0 0 1 0"
                                                                    type="matrix"
                                                                    in="shadowOffsetOuter3"
                                                                    result="shadowMatrixOuter3"
                                                                  />
                                                                  <feMerge>
                                                                    <feMergeNode in="shadowMatrixOuter1" />
                                                                    <feMergeNode in="shadowMatrixOuter2" />
                                                                    <feMergeNode in="shadowMatrixOuter3" />
                                                                  </feMerge>
                                                                </filter>
                                                                <filter
                                                                  x="-50.0%"
                                                                  y="-14.0%"
                                                                  width="200.0%"
                                                                  height="196.0%"
                                                                  filterUnits="objectBoundingBox"
                                                                  id="filter-2-2"
                                                                >
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={1}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetInner1"
                                                                  />
                                                                  <feComposite
                                                                    in="shadowOffsetInner1"
                                                                    in2="SourceAlpha"
                                                                    operator="arithmetic"
                                                                    k2={-1}
                                                                    k3={1}
                                                                    result="shadowInnerInner1"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
                                                                    in="shadowInnerInner1"
                                                                  />
                                                                </filter>
                                                              </defs>
                                                              <g
                                                                fill="none"
                                                                fillRule="evenodd"
                                                              >
                                                                <use
                                                                  fill="#FFD67D"
                                                                  fillOpacity={
                                                                    1
                                                                  }
                                                                  filter="url(#filter-1-2)"
                                                                  xlinkHref="#text-2-2"
                                                                />
                                                                <use
                                                                  fill="url(#linearGradient-1-2)"
                                                                  fillRule="evenodd"
                                                                  xlinkHref="#text-2-2"
                                                                />
                                                                <use
                                                                  fill="#FFD67D"
                                                                  fillOpacity={
                                                                    1
                                                                  }
                                                                  filter="url(#filter-2-2)"
                                                                  xlinkHref="#text-2-2"
                                                                />
                                                              </g>
                                                            </svg>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <span
                                                        className="ssr_Card_wrapper "
                                                        data-role="card-C7"
                                                      >
                                                        <span className="ssr_Card_suit ssr_Card_active">
                                                          <svg
                                                            viewBox="0 0 180 250"
                                                            className="ssr_Card_card ssr_Card_darkKhaki"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <g>
                                                              <use
                                                                xlinkHref="#card-background"
                                                                fill="url(#card-bg-dark)"
                                                              />
                                                              <use
                                                                xlinkHref="#card-border"
                                                                fill="url(#card-border-dark)"
                                                              />
                                                            </g>
                                                            <g>
                                                              <use
                                                                xlinkHref="#rank-7"
                                                                height={95}
                                                                x="59.622"
                                                                y={20}
                                                              />
                                                              <use
                                                                xlinkHref="#suit-C"
                                                                height={108}
                                                                x={48}
                                                                y={132}
                                                              />
                                                            </g>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                      <div
                                                        className="ssr_Cards_cardOverlay"
                                                        style={{
                                                          "-cardbordercolor":
                                                            "#968770",
                                                        }}
                                                      />
                                                    </div>
                                                    <div
                                                      className="ssr_Cards_card "
                                                      data-role="card-container"
                                                      data-dealt="false"
                                                    >
                                                      <div className="ssr_Cards_multiplierWrapper ">
                                                        <div className="ssr_Cards_multiplier  ssr_Cards_dark ">
                                                          <div
                                                            className="ssr_Multiplier_multiplier"
                                                            data-role="multiplier"
                                                            data-value={3}
                                                          >
                                                            <svg
                                                              width="100%"
                                                              height="100%"
                                                              viewBox="0 -6 30 20.4"
                                                              version="1.1"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="46.095936%"
                                                                  y1="73.20873%"
                                                                  x2="46.2950709%"
                                                                  y2="21.7043652%"
                                                                  id="linearGradient-1-3"
                                                                >
                                                                  <stop
                                                                    stopColor="#DBB251"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#C08843"
                                                                    offset="42.5510296%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#FFDEA9"
                                                                    offset="42.8203665%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#EBC963"
                                                                    offset="68.4331154%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#FFD67D"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                                <text
                                                                  id="text-2-3"
                                                                  fontFamily="Inter, Arial, sans-serif"
                                                                  fontSize={17}
                                                                  fontWeight="bold"
                                                                  textAnchor="middle"
                                                                  x="50%"
                                                                  y="50%"
                                                                >
                                                                  3x
                                                                </text>
                                                                <filter
                                                                  x="-73.9%"
                                                                  y="-36.0%"
                                                                  width="247.8%"
                                                                  height="240.0%"
                                                                  filterUnits="objectBoundingBox"
                                                                  id="filter-1-3"
                                                                >
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={3}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter1"
                                                                  />
                                                                  <feGaussianBlur
                                                                    stdDeviation={
                                                                      2
                                                                    }
                                                                    in="shadowOffsetOuter1"
                                                                    result="shadowBlurOuter1"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.75220788 0"
                                                                    type="matrix"
                                                                    in="shadowBlurOuter1"
                                                                    result="shadowMatrixOuter1"
                                                                  />
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={5}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter2"
                                                                  />
                                                                  <feGaussianBlur
                                                                    stdDeviation="3.5"
                                                                    in="shadowOffsetOuter2"
                                                                    result="shadowBlurOuter2"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.467136549 0"
                                                                    type="matrix"
                                                                    in="shadowBlurOuter2"
                                                                    result="shadowMatrixOuter2"
                                                                  />
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={1}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter3"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0.441151495   0 0 0 0 0.247312201   0 0 0 0 0  0 0 0 1 0"
                                                                    type="matrix"
                                                                    in="shadowOffsetOuter3"
                                                                    result="shadowMatrixOuter3"
                                                                  />
                                                                  <feMerge>
                                                                    <feMergeNode in="shadowMatrixOuter1" />
                                                                    <feMergeNode in="shadowMatrixOuter2" />
                                                                    <feMergeNode in="shadowMatrixOuter3" />
                                                                  </feMerge>
                                                                </filter>
                                                                <filter
                                                                  x="-50.0%"
                                                                  y="-14.0%"
                                                                  width="200.0%"
                                                                  height="196.0%"
                                                                  filterUnits="objectBoundingBox"
                                                                  id="filter-2-3"
                                                                >
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={1}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetInner1"
                                                                  />
                                                                  <feComposite
                                                                    in="shadowOffsetInner1"
                                                                    in2="SourceAlpha"
                                                                    operator="arithmetic"
                                                                    k2={-1}
                                                                    k3={1}
                                                                    result="shadowInnerInner1"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
                                                                    in="shadowInnerInner1"
                                                                  />
                                                                </filter>
                                                              </defs>
                                                              <g
                                                                fill="none"
                                                                fillRule="evenodd"
                                                              >
                                                                <use
                                                                  fill="#FFD67D"
                                                                  fillOpacity={
                                                                    1
                                                                  }
                                                                  filter="url(#filter-1-3)"
                                                                  xlinkHref="#text-2-3"
                                                                />
                                                                <use
                                                                  fill="url(#linearGradient-1-3)"
                                                                  fillRule="evenodd"
                                                                  xlinkHref="#text-2-3"
                                                                />
                                                                <use
                                                                  fill="#FFD67D"
                                                                  fillOpacity={
                                                                    1
                                                                  }
                                                                  filter="url(#filter-2-3)"
                                                                  xlinkHref="#text-2-3"
                                                                />
                                                              </g>
                                                            </svg>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <span
                                                        className="ssr_Card_wrapper "
                                                        data-role="card-D2"
                                                      >
                                                        <span className="ssr_Card_suit ssr_Card_active">
                                                          <svg
                                                            viewBox="0 0 180 250"
                                                            className="ssr_Card_card ssr_Card_darkRed"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <g>
                                                              <use
                                                                xlinkHref="#card-background"
                                                                fill="url(#card-bg-dark)"
                                                              />
                                                              <use
                                                                xlinkHref="#card-border"
                                                                fill="url(#card-border-dark)"
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
                                                                xlinkHref="#suit-D"
                                                                height={108}
                                                                x={48}
                                                                y={132}
                                                              />
                                                            </g>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                      <div
                                                        className="ssr_Cards_cardOverlay"
                                                        style={{
                                                          "-cardbordercolor":
                                                            "#968770",
                                                        }}
                                                      />
                                                    </div>
                                                    <div
                                                      className="ssr_Cards_card "
                                                      data-role="card-container"
                                                      data-dealt="true"
                                                    >
                                                      <div className="ssr_Cards_multiplierWrapper ">
                                                        <div className="ssr_Cards_multiplier   ">
                                                          <div
                                                            className="ssr_Multiplier_multiplier"
                                                            data-role="multiplier"
                                                            data-value={2}
                                                          >
                                                            <svg
                                                              width="100%"
                                                              height="100%"
                                                              viewBox="0 -6 30 20.4"
                                                              version="1.1"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="46.095936%"
                                                                  y1="73.20873%"
                                                                  x2="46.2950709%"
                                                                  y2="21.7043652%"
                                                                  id="linearGradient-1-4"
                                                                >
                                                                  <stop
                                                                    stopColor="#DBB251"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#C08843"
                                                                    offset="42.5510296%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#FFDEA9"
                                                                    offset="42.8203665%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#EBC963"
                                                                    offset="68.4331154%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#FFD67D"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                                <text
                                                                  id="text-2-4"
                                                                  fontFamily="Inter, Arial, sans-serif"
                                                                  fontSize={17}
                                                                  fontWeight="bold"
                                                                  textAnchor="middle"
                                                                  x="50%"
                                                                  y="50%"
                                                                >
                                                                  2x
                                                                </text>
                                                                <filter
                                                                  x="-73.9%"
                                                                  y="-36.0%"
                                                                  width="247.8%"
                                                                  height="240.0%"
                                                                  filterUnits="objectBoundingBox"
                                                                  id="filter-1-4"
                                                                >
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={3}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter1"
                                                                  />
                                                                  <feGaussianBlur
                                                                    stdDeviation={
                                                                      2
                                                                    }
                                                                    in="shadowOffsetOuter1"
                                                                    result="shadowBlurOuter1"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.75220788 0"
                                                                    type="matrix"
                                                                    in="shadowBlurOuter1"
                                                                    result="shadowMatrixOuter1"
                                                                  />
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={5}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter2"
                                                                  />
                                                                  <feGaussianBlur
                                                                    stdDeviation="3.5"
                                                                    in="shadowOffsetOuter2"
                                                                    result="shadowBlurOuter2"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.467136549 0"
                                                                    type="matrix"
                                                                    in="shadowBlurOuter2"
                                                                    result="shadowMatrixOuter2"
                                                                  />
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={1}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter3"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0.441151495   0 0 0 0 0.247312201   0 0 0 0 0  0 0 0 1 0"
                                                                    type="matrix"
                                                                    in="shadowOffsetOuter3"
                                                                    result="shadowMatrixOuter3"
                                                                  />
                                                                  <feMerge>
                                                                    <feMergeNode in="shadowMatrixOuter1" />
                                                                    <feMergeNode in="shadowMatrixOuter2" />
                                                                    <feMergeNode in="shadowMatrixOuter3" />
                                                                  </feMerge>
                                                                </filter>
                                                                <filter
                                                                  x="-50.0%"
                                                                  y="-14.0%"
                                                                  width="200.0%"
                                                                  height="196.0%"
                                                                  filterUnits="objectBoundingBox"
                                                                  id="filter-2-4"
                                                                >
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={1}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetInner1"
                                                                  />
                                                                  <feComposite
                                                                    in="shadowOffsetInner1"
                                                                    in2="SourceAlpha"
                                                                    operator="arithmetic"
                                                                    k2={-1}
                                                                    k3={1}
                                                                    result="shadowInnerInner1"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
                                                                    in="shadowInnerInner1"
                                                                  />
                                                                </filter>
                                                              </defs>
                                                              <g
                                                                fill="none"
                                                                fillRule="evenodd"
                                                              >
                                                                <use
                                                                  fill="#FFD67D"
                                                                  fillOpacity={
                                                                    1
                                                                  }
                                                                  filter="url(#filter-1-4)"
                                                                  xlinkHref="#text-2-4"
                                                                />
                                                                <use
                                                                  fill="url(#linearGradient-1-4)"
                                                                  fillRule="evenodd"
                                                                  xlinkHref="#text-2-4"
                                                                />
                                                                <use
                                                                  fill="#FFD67D"
                                                                  fillOpacity={
                                                                    1
                                                                  }
                                                                  filter="url(#filter-2-4)"
                                                                  xlinkHref="#text-2-4"
                                                                />
                                                              </g>
                                                            </svg>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <span
                                                        className="ssr_Card_wrapper "
                                                        data-role="card-C10"
                                                      >
                                                        <span className="ssr_Card_suit ssr_Card_active">
                                                          <svg
                                                            viewBox="0 0 180 250"
                                                            className="ssr_Card_card ssr_Card_black"
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
                                                                height={95}
                                                                x="37.529"
                                                                y={20}
                                                              />
                                                              <use
                                                                xlinkHref="#suit-C"
                                                                height={108}
                                                                x={48}
                                                                y={132}
                                                              />
                                                            </g>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </div>
                                                    <div
                                                      className="ssr_Cards_card "
                                                      data-role="card-container"
                                                      data-dealt="false"
                                                    >
                                                      <div className="ssr_Cards_multiplierWrapper ">
                                                        <div className="ssr_Cards_multiplier  ssr_Cards_dark ">
                                                          <div
                                                            className="ssr_Multiplier_multiplier"
                                                            data-role="multiplier"
                                                            data-value={2}
                                                          >
                                                            <svg
                                                              width="100%"
                                                              height="100%"
                                                              viewBox="0 -6 30 20.4"
                                                              version="1.1"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="46.095936%"
                                                                  y1="73.20873%"
                                                                  x2="46.2950709%"
                                                                  y2="21.7043652%"
                                                                  id="linearGradient-1-5"
                                                                >
                                                                  <stop
                                                                    stopColor="#DBB251"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#C08843"
                                                                    offset="42.5510296%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#FFDEA9"
                                                                    offset="42.8203665%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#EBC963"
                                                                    offset="68.4331154%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#FFD67D"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                                <text
                                                                  id="text-2-5"
                                                                  fontFamily="Inter, Arial, sans-serif"
                                                                  fontSize={17}
                                                                  fontWeight="bold"
                                                                  textAnchor="middle"
                                                                  x="50%"
                                                                  y="50%"
                                                                >
                                                                  2x
                                                                </text>
                                                                <filter
                                                                  x="-73.9%"
                                                                  y="-36.0%"
                                                                  width="247.8%"
                                                                  height="240.0%"
                                                                  filterUnits="objectBoundingBox"
                                                                  id="filter-1-5"
                                                                >
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={3}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter1"
                                                                  />
                                                                  <feGaussianBlur
                                                                    stdDeviation={
                                                                      2
                                                                    }
                                                                    in="shadowOffsetOuter1"
                                                                    result="shadowBlurOuter1"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.75220788 0"
                                                                    type="matrix"
                                                                    in="shadowBlurOuter1"
                                                                    result="shadowMatrixOuter1"
                                                                  />
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={5}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter2"
                                                                  />
                                                                  <feGaussianBlur
                                                                    stdDeviation="3.5"
                                                                    in="shadowOffsetOuter2"
                                                                    result="shadowBlurOuter2"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.467136549 0"
                                                                    type="matrix"
                                                                    in="shadowBlurOuter2"
                                                                    result="shadowMatrixOuter2"
                                                                  />
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={1}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter3"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0.441151495   0 0 0 0 0.247312201   0 0 0 0 0  0 0 0 1 0"
                                                                    type="matrix"
                                                                    in="shadowOffsetOuter3"
                                                                    result="shadowMatrixOuter3"
                                                                  />
                                                                  <feMerge>
                                                                    <feMergeNode in="shadowMatrixOuter1" />
                                                                    <feMergeNode in="shadowMatrixOuter2" />
                                                                    <feMergeNode in="shadowMatrixOuter3" />
                                                                  </feMerge>
                                                                </filter>
                                                                <filter
                                                                  x="-50.0%"
                                                                  y="-14.0%"
                                                                  width="200.0%"
                                                                  height="196.0%"
                                                                  filterUnits="objectBoundingBox"
                                                                  id="filter-2-5"
                                                                >
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={1}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetInner1"
                                                                  />
                                                                  <feComposite
                                                                    in="shadowOffsetInner1"
                                                                    in2="SourceAlpha"
                                                                    operator="arithmetic"
                                                                    k2={-1}
                                                                    k3={1}
                                                                    result="shadowInnerInner1"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
                                                                    in="shadowInnerInner1"
                                                                  />
                                                                </filter>
                                                              </defs>
                                                              <g
                                                                fill="none"
                                                                fillRule="evenodd"
                                                              >
                                                                <use
                                                                  fill="#FFD67D"
                                                                  fillOpacity={
                                                                    1
                                                                  }
                                                                  filter="url(#filter-1-5)"
                                                                  xlinkHref="#text-2-5"
                                                                />
                                                                <use
                                                                  fill="url(#linearGradient-1-5)"
                                                                  fillRule="evenodd"
                                                                  xlinkHref="#text-2-5"
                                                                />
                                                                <use
                                                                  fill="#FFD67D"
                                                                  fillOpacity={
                                                                    1
                                                                  }
                                                                  filter="url(#filter-2-5)"
                                                                  xlinkHref="#text-2-5"
                                                                />
                                                              </g>
                                                            </svg>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <span
                                                        className="ssr_Card_wrapper "
                                                        data-role="card-H10"
                                                      >
                                                        <span className="ssr_Card_suit ssr_Card_active">
                                                          <svg
                                                            viewBox="0 0 180 250"
                                                            className="ssr_Card_card ssr_Card_darkRed"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <g>
                                                              <use
                                                                xlinkHref="#card-background"
                                                                fill="url(#card-bg-dark)"
                                                              />
                                                              <use
                                                                xlinkHref="#card-border"
                                                                fill="url(#card-border-dark)"
                                                              />
                                                            </g>
                                                            <g>
                                                              <use
                                                                xlinkHref="#rank-10"
                                                                height={95}
                                                                x="37.529"
                                                                y={20}
                                                              />
                                                              <use
                                                                xlinkHref="#suit-H"
                                                                height={108}
                                                                x={48}
                                                                y={132}
                                                              />
                                                            </g>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                      <div
                                                        className="ssr_Cards_cardOverlay"
                                                        style={{
                                                          "-cardbordercolor":
                                                            "#968770",
                                                        }}
                                                      />
                                                    </div>
                                                  </div>
                                                  <div
                                                    className="ssr_ResultBlock_score ssr_ResultBlock_withMultipliers"
                                                    data-role
                                                  ></div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="ssr_Common_block ssr_ResultBlock_resultBlock  ssr_ResultBlock_withMultipliers">
                                              <div className="ssr_Common_cardHeader ssr_ResultBlock_resultTitle ssr_Common_winner"></div>
                                              <div className="ssr_ResultBlock_description">
                                                Banker
                                              </div>
                                              <div className="ssr_ResultBlock_content">
                                                <div
                                                  className="ssr_ResultBlock_cardsAndScore"
                                                  data-role="banker-hand"
                                                >
                                                  <div className="ssr_Cards_cards  ssr_Cards_mobile ssr_Cards_withMultipliers">
                                                    <div
                                                      className="ssr_Cards_card "
                                                      data-role="card-container"
                                                      data-dealt="true"
                                                    >
                                                      <span
                                                        className="ssr_Card_wrapper "
                                                        data-role="card-CQ"
                                                      >
                                                        <span className="ssr_Card_suit ssr_Card_active">
                                                          <svg
                                                            viewBox="0 0 180 250"
                                                            className="ssr_Card_card ssr_Card_black"
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
                                                                xlinkHref="#rank-Q"
                                                                height={95}
                                                                x="48.023"
                                                                y={20}
                                                              />
                                                              <use
                                                                xlinkHref="#suit-C"
                                                                height={108}
                                                                x={48}
                                                                y={132}
                                                              />
                                                            </g>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </div>
                                                    <div
                                                      className="ssr_Cards_card "
                                                      data-role="card-container"
                                                      data-dealt="true"
                                                    >
                                                      <span
                                                        className="ssr_Card_wrapper "
                                                        data-role="card-SQ"
                                                      >
                                                        <span className="ssr_Card_suit ssr_Card_active">
                                                          <svg
                                                            viewBox="0 0 180 250"
                                                            className="ssr_Card_card ssr_Card_black"
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
                                                                xlinkHref="#rank-Q"
                                                                height={95}
                                                                x="48.023"
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
                                                    <div
                                                      className="ssr_Cards_card ssr_Cards_horizontal"
                                                      data-role="card-container"
                                                      data-dealt="true"
                                                    >
                                                      <div className="ssr_Cards_multiplierWrapper ssr_Cards_horizontal">
                                                        <div className="ssr_Cards_multiplier   ssr_Cards_horizontal">
                                                          <div
                                                            className="ssr_Multiplier_multiplier"
                                                            data-role="multiplier"
                                                            data-value={2}
                                                          >
                                                            <svg
                                                              width="100%"
                                                              height="100%"
                                                              viewBox="0 -6 30 20.4"
                                                              version="1.1"
                                                            >
                                                              <defs>
                                                                <linearGradient
                                                                  x1="46.095936%"
                                                                  y1="73.20873%"
                                                                  x2="46.2950709%"
                                                                  y2="21.7043652%"
                                                                  id="linearGradient-1-6"
                                                                >
                                                                  <stop
                                                                    stopColor="#DBB251"
                                                                    offset="0%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#C08843"
                                                                    offset="42.5510296%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#FFDEA9"
                                                                    offset="42.8203665%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#EBC963"
                                                                    offset="68.4331154%"
                                                                  />
                                                                  <stop
                                                                    stopColor="#FFD67D"
                                                                    offset="100%"
                                                                  />
                                                                </linearGradient>
                                                                <text
                                                                  id="text-2-6"
                                                                  fontFamily="Inter, Arial, sans-serif"
                                                                  fontSize={17}
                                                                  fontWeight="bold"
                                                                  textAnchor="middle"
                                                                  x="50%"
                                                                  y="50%"
                                                                >
                                                                  2x
                                                                </text>
                                                                <filter
                                                                  x="-73.9%"
                                                                  y="-36.0%"
                                                                  width="247.8%"
                                                                  height="240.0%"
                                                                  filterUnits="objectBoundingBox"
                                                                  id="filter-1-6"
                                                                >
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={3}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter1"
                                                                  />
                                                                  <feGaussianBlur
                                                                    stdDeviation={
                                                                      2
                                                                    }
                                                                    in="shadowOffsetOuter1"
                                                                    result="shadowBlurOuter1"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.75220788 0"
                                                                    type="matrix"
                                                                    in="shadowBlurOuter1"
                                                                    result="shadowMatrixOuter1"
                                                                  />
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={5}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter2"
                                                                  />
                                                                  <feGaussianBlur
                                                                    stdDeviation="3.5"
                                                                    in="shadowOffsetOuter2"
                                                                    result="shadowBlurOuter2"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.467136549 0"
                                                                    type="matrix"
                                                                    in="shadowBlurOuter2"
                                                                    result="shadowMatrixOuter2"
                                                                  />
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={1}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetOuter3"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 0.441151495   0 0 0 0 0.247312201   0 0 0 0 0  0 0 0 1 0"
                                                                    type="matrix"
                                                                    in="shadowOffsetOuter3"
                                                                    result="shadowMatrixOuter3"
                                                                  />
                                                                  <feMerge>
                                                                    <feMergeNode in="shadowMatrixOuter1" />
                                                                    <feMergeNode in="shadowMatrixOuter2" />
                                                                    <feMergeNode in="shadowMatrixOuter3" />
                                                                  </feMerge>
                                                                </filter>
                                                                <filter
                                                                  x="-50.0%"
                                                                  y="-14.0%"
                                                                  width="200.0%"
                                                                  height="196.0%"
                                                                  filterUnits="objectBoundingBox"
                                                                  id="filter-2-6"
                                                                >
                                                                  <feOffset
                                                                    dx={0}
                                                                    dy={1}
                                                                    in="SourceAlpha"
                                                                    result="shadowOffsetInner1"
                                                                  />
                                                                  <feComposite
                                                                    in="shadowOffsetInner1"
                                                                    in2="SourceAlpha"
                                                                    operator="arithmetic"
                                                                    k2={-1}
                                                                    k3={1}
                                                                    result="shadowInnerInner1"
                                                                  />
                                                                  <feColorMatrix
                                                                    values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
                                                                    in="shadowInnerInner1"
                                                                  />
                                                                </filter>
                                                              </defs>
                                                              <g
                                                                fill="none"
                                                                fillRule="evenodd"
                                                              >
                                                                <use
                                                                  fill="#FFD67D"
                                                                  fillOpacity={
                                                                    1
                                                                  }
                                                                  filter="url(#filter-1-6)"
                                                                  xlinkHref="#text-2-6"
                                                                />
                                                                <use
                                                                  fill="url(#linearGradient-1-6)"
                                                                  fillRule="evenodd"
                                                                  xlinkHref="#text-2-6"
                                                                />
                                                                <use
                                                                  fill="#FFD67D"
                                                                  fillOpacity={
                                                                    1
                                                                  }
                                                                  filter="url(#filter-2-6)"
                                                                  xlinkHref="#text-2-6"
                                                                />
                                                              </g>
                                                            </svg>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <span
                                                        className="ssr_Card_wrapper ssr_Card_horizontal-left"
                                                        data-role="card-C10"
                                                      >
                                                        <span className="ssr_Card_suit ssr_Card_active">
                                                          <svg
                                                            viewBox="0 0 180 250"
                                                            className="ssr_Card_card ssr_Card_black"
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
                                                                height={95}
                                                                x="37.529"
                                                                y={20}
                                                              />
                                                              <use
                                                                xlinkHref="#suit-C"
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
                                                  <div
                                                    className="ssr_ResultBlock_score ssr_ResultBlock_withMultipliers"
                                                    data-role="banker-hand-score"
                                                  >
                                                    0
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="ssr_content">
                                          <div className="ssr_BetsTable_mobile">
                                            <table className="ssr_BetsTable_bets">
                                              <thead className="ssr_BetsTable_header">
                                                <tr className="ssr_BetsHeader_mobile">
                                                  <td
                                                    className="ssr_BetsHeader_headerCell"
                                                    data-role="type"
                                                  />
                                                  <td
                                                    className="ssr_BetsHeader_headerCellBet"
                                                    data-role="heading"
                                                  >
                                                    BET
                                                  </td>
                                                  <td
                                                    className="ssr_BetsHeader_headerCellBet ssr_BetsHeader_headerCellBetWin"
                                                    data-role="win"
                                                  >
                                                    WIN
                                                  </td>
                                                </tr>
                                              </thead>
                                              <tbody data-role="betContainer">
                                                <tr
                                                  className="ssr_BetRow_mobile"
                                                  data-role="betRow"
                                                >
                                                  <td
                                                    className="ssr_WithMultipliersBetRow_cellBetName"
                                                    data-role="betName"
                                                  >
                                                    <span className="ssr_WithMultipliersBetRow_bet">
                                                      <span className="ssr_WithMultipliersBetRow_betName">
                                                        Player
                                                      </span>
                                                    </span>
                                                  </td>
                                                  <td
                                                    className="ssr_BetRow_cellBet "
                                                    data-role="bet"
                                                  >
                                                    ₹100
                                                  </td>
                                                  <td
                                                    className="ssr_BetRow_cellBet"
                                                    data-role="won"
                                                  >
                                                    ₹200
                                                  </td>
                                                </tr>
                                                <tr
                                                  className="ssr_BetRow_mobile"
                                                  data-role="betRow"
                                                >
                                                  <td
                                                    className="ssr_WithMultipliersBetRow_cellBetName"
                                                    data-role="betName"
                                                  >
                                                    <span className="ssr_WithMultipliersBetRow_bet">
                                                      <span className="ssr_WithMultipliersBetRow_betName">
                                                        Fee
                                                      </span>
                                                    </span>
                                                  </td>
                                                  <td
                                                    className="ssr_BetRow_cellBet "
                                                    data-role="bet"
                                                  >
                                                    ₹20
                                                  </td>
                                                  <td
                                                    className="ssr_BetRow_cellBet ssr_BetRow_zeroWinValue"
                                                    data-role="won"
                                                  ></td>
                                                </tr>
                                              </tbody>
                                              <tfoot>
                                                <tr className="ssr_BetsFooter_mobile ">
                                                  <td
                                                    className="ssr_BetsFooter_footerCell"
                                                    data-role="total"
                                                    colSpan={1}
                                                  >
                                                    TOTAL
                                                  </td>
                                                  <td
                                                    className="ssr_BetsFooter_footerCellBet "
                                                    data-role="amount"
                                                  >
                                                    ₹120
                                                  </td>
                                                  <td
                                                    className="ssr_BetsFooter_footerCellBet"
                                                    data-role="win"
                                                  >
                                                    ₹200
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
                            </div>
                            <div className="bets--c7ba8" />
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
