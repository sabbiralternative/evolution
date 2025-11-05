import Stake from "../../../../component/UI/Chip/Stake";

const StakeAnimation = ({
  animation,
  double,
  stakeState,
  runner,
  stake,
  className,
  size,
  isMobile,
}) => {
  return (
    <div className={`z-50 ${className}`}>
      <div
        className={`relative`}
        style={{
          height: size || "40px",
          width: size || "40px",
        }}
      >
        <div
          className={`${
            animation.includes(runner)
              ? `absolute ${
                  isMobile ? "left-0" : "top-0"
                } visible transition-all duration-500 `
              : `absolute ${
                  isMobile ? "-left-16" : "-top-16"
                } invisible opacity-0`
          }  z-50 w-full h-full`}
        >
          <Stake stake={double ? stakeState?.[runner]?.stake : stake} />
        </div>

        {stakeState?.[runner]?.show && (
          <Stake stake={stakeState?.[runner]?.stake} />
        )}
      </div>
    </div>
  );
};

export default StakeAnimation;
