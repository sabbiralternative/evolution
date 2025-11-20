const BetDetailsTable = ({ data }) => {
  const totalWin = data?.result?.bet_details?.reduce(
    (sum, item) => sum + (Number(item?.win) || 0),
    0
  );

  const totalBet = data?.result?.bet_details?.reduce(
    (sum, item) => sum + (Number(item?.bet) || 0),
    0
  );
  return (
    <div className="ssr_bets">
      <div className="ssr_content">
        <div>
          <table className="ssr_betsTable">
            <thead>
              <tr>
                <td className="ssr_headerCell" data-role="type">
                  Bet Type
                </td>
                <td
                  className="ssr_headerCellBet ssr_dt_headerCellBet"
                  data-role="heading"
                >
                  Bet
                </td>
                <td
                  style={{
                    padding: "0px 10px",
                  }}
                  className="ssr_headerCellBet ssr_headerCellBetWin ssr_dt_headerCellBet"
                  data-role="win"
                >
                  Win
                </td>
              </tr>
            </thead>
            <tbody>
              {data?.result?.bet_details?.map((item, i) => {
                return (
                  <tr key={i} data-role="betContainer">
                    <td className="ssr_cellBetName" data-role="betName">
                      <span className="ssr_dt_cellWithMultiplier">
                        {item?.place_name}
                      </span>
                    </td>
                    <td className="ssr_cellBet" data-role="bet">
                      {Number(item?.bet) < 0 && "-"} ₹
                      {Number(Math.abs(item?.bet))}
                    </td>
                    <td
                      style={{
                        padding: "0px 10px",
                      }}
                      className="ssr_cellBet"
                      data-role="won"
                    >
                      {Number(item?.win) < 0 && "-"} ₹
                      {Math.abs(Number(item?.win))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className="ssr_footerCell" colSpan={1} data-role="total">
                  Total
                </td>
                <td className="ssr_footerCellBet" data-role="amount">
                  {totalBet < 0 && "-"} ₹{Math.abs(totalBet)}
                </td>
                <td
                  style={{
                    padding: "0px 10px",
                  }}
                  className="ssr_footerCellBet"
                  data-role="win"
                >
                  {totalWin < 0 && "-"} ₹{Math.abs(totalWin)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BetDetailsTable;
