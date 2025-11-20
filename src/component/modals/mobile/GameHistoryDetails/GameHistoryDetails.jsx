import { motion } from "motion/react";
import { useGetBets } from "../../../../hooks/bets";
import { useSelector } from "react-redux";
import Header from "./Header";
import Loading from "./Loading";
import Navigation from "./Navigation";
import RoundInfo from "./RoundInfo";
import Style from "./Style";
import WinnerTable from "./WinnerTable";
import BetDetailsTable from "./BetDetailsTable";

const GameHistoryDetails = ({ setTab, closeModal, roundId, eventId }) => {
  const { deviseHeight } = useSelector((state) => state.global);
  const { data, isLoading } = useGetBets({ round_id: roundId, eventId });

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
          <Header closeModal={closeModal} data={data} setTab={setTab} />

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
                    <Loading data={data} isLoading={isLoading} />
                    <div
                      data-role="round"
                      className="container--3f053 sm--96ec1"
                    >
                      <Navigation setTab={setTab} />
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
                            <RoundInfo data={data} />

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
                                    <Style />
                                    <div>
                                      <div className="ssr_dt_gameRound">
                                        <WinnerTable
                                          data={data}
                                          eventId={eventId}
                                        />
                                        <BetDetailsTable data={data} />
                                      </div>
                                    </div>
                                  </div>
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
