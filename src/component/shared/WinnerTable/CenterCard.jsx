import { Fragment } from "react";

const CenterCard = ({ data, size }) => {
  return (
    <Fragment>
      <table className="ssr_table">
        <tbody>
          <tr>
            <td className="ssr_resultHeaderCell">
              <span></span>
            </td>
            <td className="ssr_resultHeaderCell">
              <span>Winner</span>
            </td>
          </tr>
          <tr>
            <td className="ssr_cell">
              <div className="ssr_dt_result" data-role="history-outcome-cell">
                <img
                  style={{
                    width: size,
                    height: size,
                  }}
                  src={`/cards/${data?.result?.game_details?.card?.[0]}.png`}
                  alt=""
                />
                <img
                  style={{
                    width: size,
                    height: size,
                  }}
                  src={`/cards/${data?.result?.game_details?.card?.[2]}.png`}
                  alt=""
                />
                <img
                  style={{
                    width: size,
                    height: size,
                  }}
                  src={`/cards/${data?.result?.game_details?.card?.[1]}.png`}
                  alt=""
                />
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
    </Fragment>
  );
};

export default CenterCard;
