import Stake from "./Stake";

const StakeAnimation = ({ animation, double, stakeState, runner, stake }) => {
  return (
    <div className="z-50">
      <div className="relative w-10 h-10 ">
        <div
          className={`${
            animation.includes(runner)
              ? "absolute top-0 visible transition-all duration-500 "
              : "absolute -top-16 invisible opacity-0"
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
