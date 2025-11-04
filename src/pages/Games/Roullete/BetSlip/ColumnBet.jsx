import { Fragment } from "react";
import StakeAnimation from "../../../../component/UI/Chip/StakeAnimation";

const ColumnBet = ({
  handleStakeChange,
  data,
  animation,
  double,
  stake,
  stakeState,
  setHighlight,
}) => {
  return (
    <Fragment>
      <div
        onMouseEnter={() =>
          setHighlight([
            "1",
            "4",
            "7",
            "10",
            "13",
            "16",
            "19",
            "22",
            "25",
            "28",
            "31",
            "34",
          ])
        }
        onMouseLeave={() => setHighlight([])}
        onClick={() =>
          handleStakeChange({
            key: "1st",
            data,
            dataIndex: 0,
            runnerIndex: 0,
            type: "back",
          })
        }
        className="column-item"
        data-action="1ST_COLUMN"
        data-bet="1ST_COLUMN"
        data-highlight="1ST_COLUMN"
      >
        <div className="value">1st</div>
        <div className="chip center">
          <StakeAnimation
            animation={animation}
            double={double}
            runner={"1st"}
            stake={stake}
            stakeState={stakeState}
          />
        </div>
      </div>
      <div
        onMouseEnter={() =>
          setHighlight([
            "2",
            "5",
            "8",
            "11",
            "14",
            "17",
            "20",
            "23",
            "26",
            "29",
            "32",
            "35",
          ])
        }
        onMouseLeave={() => setHighlight([])}
        onClick={() =>
          handleStakeChange({
            key: "2nd",
            data,
            dataIndex: 0,
            runnerIndex: 0,
            type: "back",
          })
        }
        className="column-item"
        data-action="2ND_COLUMN"
        data-bet="2ND_COLUMN"
        data-highlight="2ND_COLUMN"
      >
        <div className="value">2nd</div>
        <div className="chip center">
          <StakeAnimation
            animation={animation}
            double={double}
            runner={"2nd"}
            stake={stake}
            stakeState={stakeState}
          />
        </div>
      </div>
      <div
        onMouseEnter={() =>
          setHighlight([
            "3",
            "6",
            "9",
            "12",
            "15",
            "18",
            "21",
            "24",
            "27",
            "30",
            "33",
            "36",
          ])
        }
        onMouseLeave={() => setHighlight([])}
        onClick={() =>
          handleStakeChange({
            key: "3rd",
            data,
            dataIndex: 0,
            runnerIndex: 0,
            type: "back",
          })
        }
        className="column-item"
        data-action="3RD_COLUMN"
        data-bet="3RD_COLUMN"
        data-highlight="3RD_COLUMN"
      >
        <div className="value">3rd</div>
        <div className="chip center">
          <StakeAnimation
            animation={animation}
            double={double}
            runner={"3rd"}
            stake={stake}
            stakeState={stakeState}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ColumnBet;
