import StakeAnimation from "../../../../component/UI/Chip/StakeAnimation";

const Dozen = ({
  animation,
  data,
  double,
  handleStakeChange,
  stake,
  stakeState,
  setHighlight,
}) => {
  return (
    <section className="container-second">
      <div
        onMouseEnter={() =>
          setHighlight(Array.from({ length: 12 }, (_, i) => (i + 1).toString()))
        }
        onMouseLeave={() => setHighlight([])}
        onClick={() =>
          handleStakeChange({
            key: "1-12",
            data,
            dataIndex: 0,
            runnerIndex: 0,
            type: "back",
          })
        }
        className="doz-item"
        data-action="1ST_DOZEN"
        data-bet="1ST_DOZEN"
        data-highlight="1ST_DOZEN"
      >
        <div>1-12</div>
        <div className="chip center">
          <StakeAnimation
            animation={animation}
            double={double}
            runner={"1-12"}
            stake={stake}
            stakeState={stakeState}
          />
        </div>
      </div>
      <div
        onMouseEnter={() =>
          setHighlight(
            Array.from({ length: 12 }, (_, i) => (i + 13).toString())
          )
        }
        onMouseLeave={() => setHighlight([])}
        onClick={() =>
          handleStakeChange({
            key: "13-24",
            data,
            dataIndex: 0,
            runnerIndex: 0,
            type: "back",
          })
        }
        className="doz-item"
        data-action="2ND_DOZEN"
        data-bet="2ND_DOZEN"
        data-highlight="2ND_DOZEN"
      >
        <div>13-24</div>
        <div className="chip center">
          <StakeAnimation
            animation={animation}
            double={double}
            runner={"13-24"}
            stake={stake}
            stakeState={stakeState}
          />
        </div>
      </div>
      <div
        onMouseEnter={() =>
          setHighlight(
            Array.from({ length: 12 }, (_, i) => (i + 25).toString())
          )
        }
        onMouseLeave={() => setHighlight([])}
        onClick={() =>
          handleStakeChange({
            key: "25-36",
            data,
            dataIndex: 0,
            runnerIndex: 0,
            type: "back",
          })
        }
        className="doz-item"
        data-action="3RD_DOZEN"
        data-bet="3RD_DOZEN"
        data-highlight="3RD_DOZEN"
      >
        <div>25-36</div>
        <div className="chip center">
          <StakeAnimation
            animation={animation}
            double={double}
            runner={"25-36"}
            stake={stake}
            stakeState={stakeState}
          />
        </div>
      </div>
    </section>
  );
};

export default Dozen;
