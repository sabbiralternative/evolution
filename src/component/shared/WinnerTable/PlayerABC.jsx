const PlayerABC = ({ data, player_a, player_b, size }) => {
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
            <span>{player_b}</span>
          </td>
          <td className="ssr_resultHeaderCell">
            <span>Winner</span>
          </td>
        </tr>
        <tr>
          {data?.result?.game_details?.card?.map((card, idx) => {
            return (
              <td key={idx} className="ssr_cell">
                <div className="ssr_dt_result" data-role="history-outcome-cell">
                  <img
                    style={{
                      width: size,
                      height: size,
                    }}
                    src={`/cards/${card}.png`}
                    alt=""
                  />
                </div>
              </td>
            );
          })}

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

export default PlayerABC;
