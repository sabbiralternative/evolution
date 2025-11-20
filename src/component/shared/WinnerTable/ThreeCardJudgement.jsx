const ThreeCardJudgement = ({ data, size }) => {
  return (
    <table className="ssr_table">
      <tbody>
        <tr>
          <td className="ssr_cell">
            <div className="ssr_dt_result" data-role="history-outcome-cell">
              {data?.result?.game_details?.card?.map((card, idx) => {
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
        </tr>
      </tbody>
    </table>
  );
};

export default ThreeCardJudgement;
