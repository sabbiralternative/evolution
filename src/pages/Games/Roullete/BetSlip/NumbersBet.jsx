import { Fragment } from "react";
import { rouletteData } from "../const";
import StakeAnimation from "./StakeAnimation";

const NumbersBet = ({
  handleStakeChange,
  data,
  animation,
  double,
  stake,
  stakeState,
  setHighlight,
  highlight,
  isMobile,
}) => {
  const chipPosition = {
    "corner-bet-catcher": "right-top",
    "double-street-catcher-top-right": "right-top",
    "split-up-bet-catcher-top": "center-top",
    "spleet-bet-catcher": "left-top",
    "split-up-bet-catcher-right": "right-center",
    "split-up-bet-catcher-bottom": "center-bottom",
    "six-lines-catcher": "right-bottom",
  };

  return (
    <Fragment>
      {rouletteData.numbers.map((num) => {
        return (
          <div
            key={num.bet}
            data-action="STRAIGHT_UP"
            data-bet={num.bet}
            className={`${num.className} ${
              highlight.includes(num.bet.toString())
                ? `${num.className}-hover`
                : ""
            }`}
          >
            {num.betCatchers.map((catcher, idx) => {
              return (
                <Fragment key={catcher.highlight}>
                  <div
                    onMouseEnter={() =>
                      setHighlight(catcher.highlight?.split("-"))
                    }
                    onMouseLeave={() => setHighlight([])}
                    onClick={() =>
                      handleStakeChange({
                        key: catcher.highlight,
                        data,
                        dataIndex: 0,
                        runnerIndex: 0,
                        type: "back",
                      })
                    }
                    key={idx}
                    className={`${catcher.className} `}
                    data-action={catcher.action}
                    data-highlight={catcher.highlight}
                    style={catcher.style || {}}
                  />
                  <div className={`chip ${chipPosition[catcher.className]}`}>
                    <StakeAnimation
                      animation={animation}
                      double={double}
                      runner={catcher.highlight}
                      stake={stake}
                      stakeState={stakeState}
                      size={isMobile ? "20px" : "40px"}
                      isMobile={isMobile}
                    />
                  </div>
                </Fragment>
              );
            })}
            <div
              onClick={() =>
                handleStakeChange({
                  key: num.value,
                  data,
                  dataIndex: 0,
                  runnerIndex: 0,
                  type: "back",
                })
              }
              className="value"
              style={{
                position: "relative",
                height: "20px",
                zIndex: 20,
              }}
            >
              {!stakeState?.[num.value]?.show && num.value}
            </div>
            <div className="chip center z-10">
              <StakeAnimation
                animation={animation}
                double={double}
                runner={num.value}
                stake={stake}
                stakeState={stakeState}
                size={isMobile ? "20px" : "40px"}
                isMobile={isMobile}
              />
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default NumbersBet;
