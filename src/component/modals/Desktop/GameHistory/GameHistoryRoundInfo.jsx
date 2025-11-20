const GameHistoryRoundInfo = ({ data }) => {
  return (
    <div data-role="round-info-container" className="roundInfo--86fb5">
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
          <span className="roundInfoBlockKey--9edf3">Game Resolved:</span>
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
          <span className="roundInfoBlockKey--9edf3">Game Number:</span>
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
  );
};

export default GameHistoryRoundInfo;
