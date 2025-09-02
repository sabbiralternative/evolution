const Footer = () => {
  return (
    <div
      className="tableInfoContainer--b6c41 commonUiElement sm--89dd5 tall--a21d4 iphone10--fa60a hasRoundedCorners--1e1b3 hasNotch--267d0 withGradient--c01fc hasExtraRoundedCorners--6ed2f isFullscreen--d501d"
      data-role="table-bottom-info"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 140%),linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)",
      }}
    >
      <div
        className="messageOneLine--78130 positionBottom--82ca2"
        data-role="one-line-chat"
      >
        {/* <li class="row--46c58 item--252d7 latestMessageBottom--fdfb0 mobile--bd7ac" data-role="chat-message">
                        <div class="bubble--aef29 dealer--4af2e removeBackground--373e2 removeHorizontalPadding--79df3 removeVerticalPadding--7bc76 singleLine--ba50e">
                            <div class="name--5b112" data-role="chat-message__sender-name">Anastasija: </div>
                            <div class="message--a529e" data-role="chat-message__text">Hello, Rocky! Welcome to Golden Wealth Baccarat!</div>
                        </div>
                    </li> */}
      </div>
      <div className="row--cc33b">
        <div className="totalBetContainer--d8028">
          <div className="totalBet--ab8a8 container--cf1f7 md--8e6c2">
            <span className="title--2a257" data-role="total-bet-title">
              Total Bet
            </span>
            <span className="amount--58e65">
              <span className="value--58a54" data-role="total-bet-value">
                ₹ 0
              </span>
            </span>
          </div>
        </div>
        <div className="clockContainer--1684d">
          <div
            className="gameTime--9d037 gameTime--4b53f"
            data-role="game-time"
          >
            11:34:10
          </div>
        </div>
      </div>
      <div className="row--cc33b">
        <div className="balanceContainer--ac1aa">
          <div
            className="balance--ede09 container--cf1f7 md--8e6c2 portrait--304f9"
            data-role="balance-label-one-line"
          >
            <span className="title--2a257" data-role="balance-title">
              Balance
            </span>
            <span className="amount--58e65">
              <span
                className="value--58a54"
                data-role="balance-value"
                data-balance-visible="₹8.24"
                data-currency-symbol="₹"
                data-fs-element="Visible balance"
                data-fs-properties-schema='{
                        "data-balance-visible": "real",
                        "data-currency-symbol": "string",
                    }'
              >
                ₹8.24
              </span>
            </span>
          </div>
        </div>
        <div className="tableNameContainer--2fc7c">
          <span
            className="tableName--ed38c tableName--aad8c md--faf59"
            data-role="table-name"
          >
            Lucky 7
          </span>
          <div
            className="tableLimits--97b4b tableLimits--f2c2b"
            data-role="table-limits"
          >
            ₹100 – 100,000
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
