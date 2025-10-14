import { useState } from "react";
// import RecentModal from "./RecentModal";

const RecentWinner = ({ recentWinner }) => {
  const [recentWinnerData, setRecentWinnerData] = useState(null);

  return (
    <>
      {/* {recentWinnerData && (
        <RecentModal
          recentWinnerData={recentWinnerData}
          setRecentWinnerData={setRecentWinnerData}
        />
      )} */}
      <div className=" flex items-center gap-0.5 pb-1 pt-3 w-full">
        {recentWinner?.map((winner) => {
          return (
            <span
              onClick={() => setRecentWinnerData(winner)}
              key={winner?.roundId}
            >
              <div className="bounceInAnimation text-black uppercase flex items-center justify-center gap-2">
                <div
                  className={`px-2 py-1  flex items-center justify-center gap-1 cursor-pointer rounded-md ${
                    winner?.winner === "H"
                      ? "bg-[#38b142] text-white"
                      : winner.winner === "L"
                      ? "bg-[#d83b32] text-white"
                      : winner.winner === "7"
                      ? "bg-[#156ed1] text-white"
                      : "bg-white"
                  }`}
                >
                  {/* <span className="w-4 h-4">
                  <svg
                    width={198}
                    height={260}
                    viewBox="0 0 198 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                      fill="#DD181F"
                    />
                  </svg>
                </span> */}
                  <span className="text-sm font-semibold ">
                    {winner?.winner}
                  </span>
                </div>
              </div>{" "}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default RecentWinner;
