import { useEffect, useState } from "react";

const Counter = ({ firstEvent }) => {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;

  const timerDuration = firstEvent?.timerDuration;
  const lastUpdateTime = firstEvent?.lastUpdateTime;
  const utcMilliseconds = Date.now();
  const utcSeconds = Math.floor(utcMilliseconds / 1000);

  const timer = timerDuration - (utcSeconds - lastUpdateTime);

  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const [strokeColor, setStrokeColor] = useState("#32d74b");

  useEffect(() => {
    const percentage = (timer / timerDuration) * 100;
    const offset = circumference - (percentage / 100) * circumference;
    setStrokeDashoffset(offset);

    if (percentage >= 70) {
      setStrokeColor("#32d74b");
    } else if (percentage >= 50) {
      setStrokeColor("#cc980e");
    } else {
      setStrokeColor("#F70000");
    }
    if (timer < 4 && timer > 0) {
      new Audio("/countdown.mp3").play();
    }
  }, [timer, timerDuration, circumference]);

  return (
    <>
      {timer > 0 && (
        <div className="fixed z-50 top-[5%] right-0 -translate-x-1/2">
          <div className="w-[60px] lg:scale-150 origin-center aspect-square rounded-full flex justify-center items-center relative">
            <div className="border-[6px] h-[83%] w-[83%] rounded-full aspect-square absolute border-white/10 bg-black/10" />

            <svg
              className="absolute top-0 left-0 w-full h-full rounded-full -rotate-90"
              style={{ stroke: strokeColor }}
            >
              <circle
                cx={30}
                cy={30}
                r={radius}
                fill="transparent"
                strokeLinecap="butt"
                stroke={strokeColor}
                strokeWidth={6}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>
            <span className="text-xl drop-shadow-md font-mono font-bold text-white">
              {timer}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Counter;
