const Winner = ({ firstEvent, isDesktop }) => {
  const winner = firstEvent?.winner;

  return (
    <div
      className={`numbers--9fc1d visible--ece3f absolute top-10  ${
        isDesktop ? "left-40" : ""
      }`}
    >
      <div className="numbers--138f7">
        <div
          className="winningNumber--8df88"
          data-winning-number={2}
          data-role="winning-number-container"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="graphics--defe2"
            viewBox="0 0 283.36 106.26"
          >
            <defs>
              <linearGradient
                id="Apdl2ljhi4o"
                x1="84.79"
                y1="77.12"
                x2="365.21"
                y2="77.12"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset={0}
                  stopColor={
                    winner?.left_color === "black"
                      ? "#000000"
                      : winner?.left_color === "red"
                      ? "#B51C12"
                      : "rgba(22, 105, 88, 0.8)"
                  }
                  stopOpacity={0}
                />
                <stop
                  offset="0.52"
                  stopColor={
                    winner?.color === "black"
                      ? "#000000"
                      : winner?.color === "red"
                      ? "#B51C12"
                      : "rgba(22, 105, 88, 0.8)"
                  }
                  stopOpacity="0.5"
                />
                <stop
                  offset="0.55"
                  stopColor={
                    winner?.right_color === "black"
                      ? "#000000"
                      : winner?.right_color === "red"
                      ? "#B51C12"
                      : "rgba(22, 105, 88, 0.8)"
                  }
                  stopOpacity="0.5"
                />
                {/* <stop offset={1} stopColor="#000000" stopOpacity={0} /> */}
              </linearGradient>
              <linearGradient
                id="Bpdl2ljhi4o"
                x1="83.32"
                y1="77.23"
                x2="366.68"
                y2="77.23"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.05" stopColor="#fff" stopOpacity={0} />
                <stop offset="0.5" stopColor="#fff" stopOpacity="0.6" />
                <stop offset="0.95" stopColor="#fff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <path
              d="M365.21,45.26C326,34.61,284.35,28.53,228.68,28.53h-7.37c-55.66,0-97.36,6.08-136.52,16.73l21.07,80.44c34.91-7.54,78.31-11.76,119.14-11.77s84.23,4.23,119.14,11.77Z"
              transform="translate(-83.32 -20.87)"
              fill="url(#Apdl2ljhi4o)"
              data-color={
                winner?.left_color === "black"
                  ? "#000000"
                  : winner?.left_color === "red"
                  ? "#B51C12"
                  : "rgba(22, 105, 88, 0.8)"
              }
              data-role="left-neighbor-background"
            />
            <path
              d="M345,127.13l-1.13-.24C309.38,119.44,266,115.16,225,115.15s-84.38,4.29-118.88,11.74l-1.13.24L83.32,44.41l1.16-.31c42.64-11.6,84.84-16.77,136.84-16.77h7.37c52,0,94.2,5.17,136.84,16.77l1.16.31Zm-120-14.4c40.76,0,83.78,4.22,118.26,11.55l20.47-78.16c-42-11.32-83.74-16.38-135-16.38h-7.37c-51.31,0-93,5.05-135,16.38l20.47,78.16C141.22,116.94,184.24,112.74,225,112.73Z"
              transform="translate(-83.32 -20.87)"
              fill="url(#Bpdl2ljhi4o)"
              data-color={
                winner?.right_color === "black"
                  ? "#000000"
                  : winner?.right_color === "red"
                  ? "#B51C12"
                  : "rgba(22, 105, 88, 0.8)"
              }
              data-role="right-neighbor-background"
            />
            <text
              data-role="right-neighbor"
              transform="translate(232 77) rotate(9.17)"
              opacity="0.7"
              fontSize={52}
              fill="#fff"
              letterSpacing="0.01em"
              textAnchor="middle"
            >
              {winner?.right_number}
            </text>
            <text
              data-role="left-neighbor"
              transform="translate(50 80) rotate(-6.86)"
              opacity="0.7"
              fontSize={52}
              fill="#fff"
              letterSpacing="0.01em"
              textAnchor="middle"
            >
              {winner?.left_number}
            </text>
            <path
              data-role="winning-number-background"
              d="M284.27,24.47c-17.3-1-35.45-1.55-54.6-1.55l-2.18,0-2.19,0c-21.26,0-41.29.66-60.28,1.9l11.39,96c16.06-1,32.41-1.47,48.9-1.47h4.37c14.74,0,29.36.41,43.76,1.19Z"
              transform="translate(-83.32 -20.87)"
              fill={
                winner?.color === "black"
                  ? "#000000"
                  : winner?.color === "red"
                  ? "#B51C12"
                  : "rgba(22, 105, 88, 0.8)"
              }
            />
            <text
              transform="translate(141 72)"
              fontSize={58}
              fill="#fff"
              letterSpacing="0.01em"
              textAnchor="middle"
              data-role="winning-number"
            >
              {winner?.number}
            </text>
            <path
              d="M176.22,123,164.75,22.92l2.14-.14c18.68-1.27,38.33-1.91,58.39-1.91l2.12,0,2.1,0c18.05,0,35.84.52,52.88,1.56l2.15.13L273.61,122.71l-1.94-.11c-14.12-.79-28.31-1.19-42.17-1.19h-4.22c-15.62,0-31.47.5-47.12,1.47Zm-6.91-96.29,10.54,92c15.1-.9,30.37-1.36,45.43-1.36h4.22c13.3,0,26.9.37,40.45,1.09l10-92C263.69,25.45,246.71,25,229.5,25l-2.1,0-2.12,0C206.08,25,187.26,25.56,169.31,26.72Z"
              transform="translate(-83.32 -20.87)"
              fill="#fde464"
              data-role="winning-border"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Winner;
