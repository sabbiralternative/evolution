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
      <div className="withScroll--c621b isPortrait--50a23 rightMask--f2b75 overflow-touch-enabled--9779a">
        <div
          className="historyStatistic--92a75 largeMobileIcon--d8d4c"
          data-role="history-statistic"
        >
          {recentWinner?.map((winner, i) => {
            return (
              <div
                onClick={() => setRecentWinnerData(winner)}
                key={winner?.roundId}
                className={`historyItem--47528 largeMobileIcon--7bcc0 `}
                style={{
                  color: "rgb(255, 255, 255)",
                  marginRight: "0px",
                  transform: "scaleX(1.1)",
                }}
              >
                <svg
                  width={53}
                  height={31}
                  viewBox="0 0 53 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#history)">
                    <path
                      fill="black"
                      fillOpacity="0.4"
                      d="M 37.5 1 H 5.5 C 3.6 1 2.4 2.9 3.3 4.5 L 7.7 11.5 C 8.1 12.2 8.1 13.1 7.7 13.8 L 3.3 20.9 C 2.4 22.4 3.6 24.4 5.5 24.4 H 37.5 C 39.8 24.4 41.8 23.2 42.9 21.4 L 47.6 13.8 C 48 13.1 48 12.2 47.6 11.5 L 42.9 3.9 C 41.8 2.1 39.8 1 37.5 1 Z"
                    />
                    <path
                      fill={`${
                        winner?.winner == "H"
                          ? "#d83b32"
                          : winner.winner === "7"
                          ? "#38b142"
                          : winner.winner == "L"
                          ? "#156ed1"
                          : "transparent"
                      }`}
                      fillOpacity="0.8"
                      stroke={`url(#history-icon-LasWin-Tiger-${i})`}
                      fillRule="evenodd"
                      strokeWidth={2}
                      d="M 37.5 1 H 5.5 C 3.6 1 2.4 2.9 3.3 4.5 L 7.7 11.5 C 8.1 12.2 8.1 13.1 7.7 13.8 L 3.3 20.9 C 2.4 22.4 3.6 24.4 5.5 24.4 H 37.5 C 39.8 24.4 41.8 23.2 42.9 21.4 L 47.6 13.8 C 48 13.1 48 12.2 47.6 11.5 L 42.9 3.9 C 41.8 2.1 39.8 1 37.5 1 Z"
                    />
                    <text x={19} y={19} fill="#fff" fontSize={16}>
                      {winner?.winner}
                    </text>
                  </g>
                  <filter
                    id="history"
                    x="0.307218"
                    y="0.10144"
                    width="52.1238"
                    height="30.5495"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.898515" dy="2.69554" />
                    <feGaussianBlur stdDeviation="1.34777" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_84_5998"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_84_5998"
                      result="shape"
                    />
                  </filter>
                  <defs>
                    <linearGradient
                      id={`history-icon-LasWin-Tiger-${i}`}
                      x1={27}
                      y1={1}
                      x2={27}
                      y2={27}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        stopColor={`${
                          winner?.winner == "H"
                            ? "#d83b32"
                            : winner.winner == "7"
                            ? "#38b142"
                            : winner.winner == "L"
                            ? "#156ed1"
                            : "transparent"
                        }`}
                      />
                      <stop
                        offset={1}
                        stopColor={`${
                          winner?.winner == "H"
                            ? "#d83b32"
                            : winner.winner == "7"
                            ? "#38b142"
                            : winner.winner == "L"
                            ? "#156ed1"
                            : "transparent"
                        }`}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecentWinner;
