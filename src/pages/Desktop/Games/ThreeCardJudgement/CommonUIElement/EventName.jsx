import { useNavigate } from "react-router-dom";

const EventName = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="top-left--60b08" data-role="top-left-corner">
      <div className="box--4ecd6">
        <div>
          <div data-role="bet-limits-container" data-open="false">
            <div
              className="container--2fb54"
              data-role="bet-limits-inner-container"
              style={{
                minWidth: `calc(
                            276.0625px + calc(var(--root-size, 10px) * 3.5)
                          )`,
              }}
            >
              <table data-role="bet-limits" className="table--f0ff2">
                <thead className="header--9dd12">
                  <tr>
                    <th className="left--693f2" colSpan={1}>
                      <span>BET</span>
                    </th>
                    <th className="middle--d4568">
                      <span>BET LIMITS</span>
                    </th>
                    <th className="right--402ec">
                      <span>PAYOUT</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    data-role="bet-limits_player"
                    className="hasContent--7f13d hasBottomBorder--87313 fixedColumnWidths--a60d9"
                  >
                    <td className="bet--7d654 bold--37d87" colSpan={1}>
                      <div className="cellContent--e7e92">
                        <span data-role="title" className>
                          PLAYER
                        </span>
                      </div>
                    </td>
                    <td className="middleDataCell--a2446">
                      <div className="cellContent--e7e92">
                        <div
                          data-role="min-max"
                          className="betLimits--3cf27"
                          data-min={100}
                          data-max={100000}
                        >
                          ₹100–100,000
                        </div>
                      </div>
                    </td>
                    <td className="payout--46826">
                      <div className="cellContent--e7e92" data-role="payout">
                        1–512:1
                      </div>
                    </td>
                  </tr>
                  <tr
                    data-role="bet-limits_banker"
                    className="hasContent--7f13d hasBottomBorder--87313 fixedColumnWidths--a60d9"
                  >
                    <td className="bet--7d654 bold--37d87" colSpan={1}>
                      <div className="cellContent--e7e92">
                        <span data-role="title" className>
                          BANKER*
                        </span>
                      </div>
                    </td>
                    <td className="middleDataCell--a2446">
                      <div className="cellContent--e7e92">
                        <div
                          data-role="min-max"
                          className="betLimits--3cf27"
                          data-min={100}
                          data-max={100000}
                        >
                          ₹100–100,000
                        </div>
                      </div>
                    </td>
                    <td className="payout--46826">
                      <div className="cellContent--e7e92" data-role="payout">
                        1–512:1
                      </div>
                    </td>
                  </tr>
                  <tr
                    data-role="bet-limits_tie"
                    className="hasContent--7f13d hasBottomBorder--87313 fixedColumnWidths--a60d9"
                  >
                    <td className="bet--7d654 bold--37d87" colSpan={1}>
                      <div className="cellContent--e7e92">
                        <span data-role="title" className>
                          TIE
                        </span>
                      </div>
                    </td>
                    <td className="middleDataCell--a2446">
                      <div className="cellContent--e7e92">
                        <div
                          data-role="min-max"
                          className="betLimits--3cf27"
                          data-min={100}
                          data-max={10000}
                        >
                          ₹100–10,000
                        </div>
                      </div>
                    </td>
                    <td className="payout--46826">
                      <div className="cellContent--e7e92" data-role="payout">
                        5:1 (Up to ₹50,000,000)
                      </div>
                    </td>
                  </tr>
                  <tr
                    data-role="bet-limits_undefined"
                    className="hasBottomBorder--87313 fixedColumnWidths--a60d9"
                  >
                    <td className="bet--7d654 bold--37d87" colSpan={1}>
                      <div className="cellContent--e7e92">
                        <span data-role="title" className></span>
                      </div>
                    </td>
                    <td className="middleDataCell--a2446">
                      <div className="cellContent--e7e92">
                        <div data-role="min-max" className="betLimits--3cf27" />
                      </div>
                    </td>
                    <td className="payout--46826">
                      <div className="cellContent--e7e92" data-role="payout" />
                    </td>
                  </tr>
                  <tr
                    data-role="bet-limits_player_pair"
                    className="hasContent--7f13d hasBottomBorder--87313 fixedColumnWidths--a60d9"
                  >
                    <td className="bet--7d654 bold--37d87" colSpan={1}>
                      <div className="cellContent--e7e92">
                        <span data-role="title" className>
                          P PAIR
                        </span>
                      </div>
                    </td>
                    <td className="middleDataCell--a2446">
                      <div className="cellContent--e7e92">
                        <div
                          data-role="min-max"
                          className="betLimits--3cf27"
                          data-min={100}
                          data-max={25000}
                        >
                          ₹100–25,000
                        </div>
                      </div>
                    </td>
                    <td className="payout--46826">
                      <div className="cellContent--e7e92" data-role="payout">
                        9–576:1
                      </div>
                    </td>
                  </tr>
                  <tr
                    data-role="bet-limits_banker_pair"
                    className="hasContent--7f13d hasBottomBorder--87313 fixedColumnWidths--a60d9"
                  >
                    <td className="bet--7d654 bold--37d87" colSpan={1}>
                      <div className="cellContent--e7e92">
                        <span data-role="title" className>
                          B PAIR
                        </span>
                      </div>
                    </td>
                    <td className="middleDataCell--a2446">
                      <div className="cellContent--e7e92">
                        <div
                          data-role="min-max"
                          className="betLimits--3cf27"
                          data-min={100}
                          data-max={25000}
                        >
                          ₹100–25,000
                        </div>
                      </div>
                    </td>
                    <td className="payout--46826">
                      <div className="cellContent--e7e92" data-role="payout">
                        9–576:1
                      </div>
                    </td>
                  </tr>
                  <tr data-role="bet-limits-footer">
                    <td
                      colSpan={3}
                      className="footerContentWrapper--24329 sm--18019"
                    >
                      <div
                        data-role="max-payout-amount"
                        className="maxPayoutAmount--18149"
                      >
                        <div>
                          * 95% of your Banker bet is returned if Banker wins
                        </div>
                        <div>
                          MAX PAYOUT ₹50,000,000 PLUS INITIAL BET ON THE WINNING
                          HAND
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="header--1675e" data-role="bet-limits-header">
              <div
                className="tableInfoContainer--89f0b"
                data-role="bet-limits-table-info-container"
              >
                <div className="tableInfo--3d8cf">
                  <span
                    className="tableName--ed38c md--faf59"
                    data-role="table-name"
                  >
                    {data?.result?.[0]?.eventName}
                  </span>
                  <div className="tableLimits--97b4b" data-role="table-limits">
                    ₹100–100,000
                  </div>
                </div>
                <a
                  className="pinButton--a8f3e"
                  data-role="bet-limits_pin-button"
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
                      data-role="bet-limits_pin-icon"
                    >
                      <path d="m10.716 5.86 4.59 4.59a1.51 1.51 0 0 0 2.12 0l.76-.76 1.06 1.06-3.64 3.64-.052.053 4.232 4.238.16 1.26-1.26-.16-4.235-4.235-.055.055-3.63 3.64-1.07-1.06.76-.77a1.49 1.49 0 0 0 0-2.11l-4.59-4.6-1.21 1.22-.36-.36a1 1 0 0 1 0-1.42l5.86-5.85a1 1 0 0 1 1.41 0l.36.35-1.21 1.22Z" />
                    </svg>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="button--673ce xs--07983 roundingBoth--6d5e6 buttonRoot--3bd4d"
            data-type="secondary"
            data-role="close-button"
            data-state="Default"
          >
            <span
              className="roundingBoth--2a8e7 buttonContent--2a2d4 xs--76a78"
              data-role="button-content"
            >
              <div
                className="buttonBase--73d7d"
                data-role="base-border"
                style={{
                  padding: `calc(
                              var(--rem-migration-size, 10px) * 0.1
                            )`,
                }}
              />
              <div className="iconLabelWrapper--8e144 left--60884">
                <span className="icon--54b42">
                  <span className="iconWrapper--9127d" data-role="icon-wrapper">
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
                  </span>
                </span>
              </div>
              <div className="badge--81159" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventName;
