import StakeAnimation from "./StakeAnimation";
import { rouletteData } from "../const";

const BottomBets = ({
  animation,
  double,
  handleStakeChange,
  stake,
  stakeState,
  setHighlight,
  isMobile,
}) => {
  const blackBox = rouletteData.numbers
    .filter((item) => item.className === "black-item")
    .map((d) => d.bet.toString());
  const redBox = rouletteData.numbers
    .filter((item) => item.className === "red-item")
    .map((d) => d.bet.toString());

  return (
    <div className="container-third">
      <div
        onMouseEnter={() =>
          setHighlight(Array.from({ length: 18 }, (_, i) => (i + 1).toString()))
        }
        onMouseLeave={() => setHighlight([])}
        onClick={() =>
          handleStakeChange({
            key: "1-18",
            type: "1_TO_18",
          })
        }
        className="outside-section"
        data-action="1_TO_18"
        data-bet="1_TO_18"
        data-highlight="1_TO_18"
      >
        <div>1-18</div>
        <div className="chip center">
          <StakeAnimation
            animation={animation}
            double={double}
            runner={"1-18"}
            stake={stake}
            stakeState={stakeState}
            size={isMobile ? "20px" : "40px"}
            isMobile={isMobile}
          />
        </div>
      </div>
      <div
        onMouseEnter={() =>
          setHighlight(
            Array.from({ length: 36 }, (_, i) => i + 1)
              .filter((n) => n % 2 === 0)
              .map((n) => n.toString())
          )
        }
        onMouseLeave={() => setHighlight([])}
        onClick={() =>
          handleStakeChange({
            key: "even",
            type: "EVEN",
          })
        }
        className="outside-section"
        data-action="EVEN"
        data-bet="EVEN"
        data-highlight="EVEN"
      >
        <div>EVEN</div>
        <div className="chip center">
          <StakeAnimation
            animation={animation}
            double={double}
            runner={"even"}
            stake={stake}
            stakeState={stakeState}
            size={isMobile ? "20px" : "40px"}
            isMobile={isMobile}
          />
        </div>
      </div>
      <div
        onMouseEnter={() => setHighlight(redBox)}
        onMouseLeave={() => setHighlight([])}
        onClick={() =>
          handleStakeChange({
            key: "red",
            type: "RED",
          })
        }
        className="outside-section"
        data-action="RED"
        data-bet="RED"
        data-highlight="RED"
      >
        <div>
          <div className="rhomb-red" />
        </div>
        <div className="chip center">
          <StakeAnimation
            animation={animation}
            double={double}
            runner={"red"}
            stake={stake}
            stakeState={stakeState}
            size={isMobile ? "20px" : "40px"}
            isMobile={isMobile}
          />
        </div>
      </div>
      <div
        onMouseEnter={() => setHighlight(blackBox)}
        onMouseLeave={() => setHighlight([])}
        onClick={() =>
          handleStakeChange({
            key: "black",
            type: "BLACK",
          })
        }
        className="outside-section"
        data-action="BLACK"
        data-bet="BLACK"
        data-highlight="BLACK"
      >
        <div>
          <div className="rhomb-black" />
        </div>
        <div className="chip center">
          <StakeAnimation
            animation={animation}
            double={double}
            runner={"black"}
            stake={stake}
            stakeState={stakeState}
            size={isMobile ? "20px" : "40px"}
            isMobile={isMobile}
          />
        </div>
      </div>
      <div
        onMouseEnter={() =>
          setHighlight(
            Array.from({ length: 36 }, (_, i) => i + 1)
              .filter((n) => n % 2 !== 0)
              .map((n) => n.toString())
          )
        }
        onMouseLeave={() => setHighlight([])}
        onClick={() =>
          handleStakeChange({
            key: "odd",
            type: "ODD",
          })
        }
        className="outside-section"
        data-action="ODD"
        data-bet="ODD"
        data-highlight="ODD"
      >
        <div>ODD</div>
        <div className="chip center">
          <StakeAnimation
            animation={animation}
            double={double}
            runner={"odd"}
            stake={stake}
            stakeState={stakeState}
            size={isMobile ? "20px" : "40px"}
            isMobile={isMobile}
          />
        </div>
      </div>
      <div
        onMouseEnter={() =>
          setHighlight(
            Array.from({ length: 18 }, (_, i) => (i + 19).toString())
          )
        }
        onMouseLeave={() => setHighlight([])}
        onClick={() =>
          handleStakeChange({
            key: "19-36",
            type: "19_TO_36",
          })
        }
        className="outside-section"
        data-action="19_TO_36"
        data-bet="19_TO_36"
        data-highlight="19_TO_36"
      >
        <div>19-36</div>
        <div className="chip center">
          <StakeAnimation
            animation={animation}
            double={double}
            runner={"19-36"}
            stake={stake}
            stakeState={stakeState}
            size={isMobile ? "20px" : "40px"}
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomBets;
