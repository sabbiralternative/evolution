import { useGetBets } from "../../../../hooks/bets";
import GameHistoryBetDetailsTable from "./GameHistoryBetDetailsTable";
import GameHistoryFooter from "./GameHistoryFooter";
import GameHistoryRoundInfo from "./GameHistoryRoundInfo";
import GameHistoryWinnerTable from "./GameHistoryWinnerTable";
import Header from "./Header";
import Loading from "./Loading";
import Style from "./Style";

const GameHistoryDetails = ({ setTab, roundId, eventId }) => {
  const { data, isLoading } = useGetBets({ round_id: roundId, eventId });

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
        <Header data={data} setTab={setTab} />
        <div className="content--7dcc6" data-role="window-gamehistory_content">
          <div
            className="container--9c8bb md--edad1"
            data-role="client-history-container"
          >
            <Loading data={data} isLoading={isLoading} />
            <div className="container--3f053 md--31f18" data-role="round">
              <GameHistoryRoundInfo data={data} />
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
                              <Style />
                              <div>
                                <div className="ssr_dt_gameRound">
                                  <GameHistoryWinnerTable
                                    data={data}
                                    eventId={eventId}
                                  />
                                  <GameHistoryBetDetailsTable data={data} />
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

              <GameHistoryFooter setTab={setTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHistoryDetails;
