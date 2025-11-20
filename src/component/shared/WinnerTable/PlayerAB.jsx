const PlayerAB = ({ data, player_a, player_b, size }) => {
  return (
    <table className="ssr_table">
      <tbody>
        <tr>
          <td className="ssr_resultHeaderCell">
            <span>{player_a}</span>
          </td>
          <td className="ssr_resultHeaderCell">
            <span>{player_b}</span>
          </td>
          <td className="ssr_resultHeaderCell">
            <span>Winner</span>
          </td>
        </tr>
        <tr>
          <td className="ssr_cell">
            <div className="ssr_dt_result" data-role="history-outcome-cell">
              {data?.result?.game_details?.player_a?.map((card, idx) => {
                return (
                  <img
                    key={idx}
                    style={{
                      width: size,
                      height: size,
                    }}
                    src={`/cards/${card}.png`}
                    alt=""
                  />
                );
              })}
            </div>
          </td>
          <td className="ssr_cell">
            <div className="ssr_dt_result" data-role="history-outcome-cell">
              {data?.result?.game_details?.player_b?.map((card, idx) => {
                return (
                  <img
                    key={idx}
                    style={{
                      width: size,
                      height: size,
                    }}
                    src={`/cards/${card}.png`}
                    alt=""
                  />
                );
              })}
            </div>
          </td>
          <td className="ssr_cell">
            <div className="ssr_dt_result" data-role="history-outcome-cell">
              {data?.result?.game_details?.winner}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PlayerAB;
