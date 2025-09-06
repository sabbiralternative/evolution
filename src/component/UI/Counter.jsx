import { useEffect } from "react";

const Counter = ({ firstEvent }) => {
  const timerDuration = firstEvent?.timerDuration;
  const lastUpdateTime = firstEvent?.lastUpdateTime;
  const utcMilliseconds = Date.now();
  const utcSeconds = Math.floor(utcMilliseconds / 1000);
  const timer = timerDuration - (utcSeconds - lastUpdateTime);

  useEffect(() => {
    if (timer < 4 && timer > 0) {
      new Audio("/countdown.mp3").play();
    }
  }, [timer, timerDuration]);

  return (
    <>
      {timer > 0 && (
        <div className="fixed z-[99999] top-[5%] right-0 -translate-x-1/2">
          <div className="w-[60px] lg:scale-150 origin-center aspect-square rounded-full flex justify-center items-center relative">
            <div className="border-[6px] h-[83%] w-[83%] rounded-full aspect-square absolute border-white/10 bg-black/10" />
            <svg
              style={{
                animation: `progress-animation ${timerDuration}s linear 0s 1 forwards`,
              }}
              width="250"
              height="250"
              viewBox="0 0 250 250"
              className="circular-progress"
            >
              <circle
                className="bg"
                stroke={timer > 3 ? "#32d74b" : "#cc980e"}
              ></circle>
              <circle
                className="fg"
                stroke="#000000"
                // stroke={timer > 3 ? "black" : "#cc980e"}
              ></circle>
            </svg>

            <span className="text-xl drop-shadow-md font-mono font-bold text-white absolute">
              {timer}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Counter;
