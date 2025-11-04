import { Fragment } from "react";
import { zeroRouletteData } from "../const";
import StakeAnimation from "../../../../component/UI/Chip/StakeAnimation";

const ZeroBet = ({
  handleStakeChange,
  data,
  animation,
  double,
  stake,
  stakeState,
  setHighlight,
  highlight,
}) => {
  // const chipPosition = {
  //   "spleet-bet-catcher": "right-top",
  //   "corner-bet-catcher bottom": "right-bottom",
  //   "corner-bet-catcher": "right-top",
  //   "split-up-bet-catcher-top": "center-top",
  //   "split-up-bet-catcher-right": "right-top-with-no-offset",
  //   "basket-catcher-bottom": "center",
  //   "basket-catcher-top": "center",
  // };

  const getChipPosition = (string, highlight, classname) => {
    if (string === "0" && highlight === "0-00-2") {
      return "right-top";
    } else if (string === "0" && highlight === "0-00-1-2-3") {
      return "right-bottom";
    } else if (string === "00" && highlight === "00-0-1-2-3") {
      return "right-top";
    } else if (string === "0" && highlight === "0-00") {
      return "center-top";
    } else if (string === "0" && classname === "split-up-bet-catcher-right") {
      return "right-top-with-no-offset";
    } else if (string === "00" && classname === "split-up-bet-catcher-right") {
      return "right-top-with-offset";
    }

    // else if (string === "0" && classname === "split-up-bet-catcher-right") {
    //   return "right-top-with-offset";
    // } else if (string === "0" && classname === "split-up-bet-catcher-right") {
    //   return "right-top-with-offset";
    // }
    else if (
      (string === "0" && classname === "basket-catcher-bottom") ||
      (string === "00" && classname === "basket-catcher-top")
    ) {
      return "center";
    }
  };
  return (
    <Fragment>
      {zeroRouletteData.map((num) => {
        return (
          <div
            key={num.bet}
            data-action="STRAIGHT_UP"
            data-bet={num.bet}
            className={`${num.className} ${
              highlight.includes(num.bet.toString()) ? "item-hover" : ""
            }`}
          >
            {num.betCatchers.map((catcher, idx) => (
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
                  className={catcher.className}
                  data-action={catcher.action}
                  data-highlight={catcher.highlight}
                  style={catcher.style || {}}
                />
                <div
                  className={`chip ${getChipPosition(
                    num.bet,
                    catcher.highlight,
                    catcher.className
                  )}`}
                >
                  <StakeAnimation
                    animation={animation}
                    double={double}
                    runner={catcher.highlight}
                    stake={stake}
                    stakeState={stakeState}
                  />
                </div>
              </Fragment>
            ))}
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
            >
              {num.value}
              <div className="chip center">
                <StakeAnimation
                  animation={animation}
                  double={double}
                  runner={num.value}
                  stake={stake}
                  stakeState={stakeState}
                />
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ZeroBet;
