const RecentWinner = ({ recent_winner }) => {
  return (
    <div className="recentNumbersContainer--dae11">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n                  .statisticsBranding_red {\n                    color: #b51c12;\n                  }\n\n                  .statisticsBranding_red.hovered-recent-number,\n                  .statisticsBranding_red.statisticsBranding_first {\n                    color: #f9e1cc;\n                  }\n\n                  .statisticsBranding_red.hovered-recent-number::before,\n                  .statisticsBranding_red.statisticsBranding_first::before {\n                    background: #b51c12;\n                  }\n\n                  .statisticsBranding_green {\n                    color: #166958;\n                  }\n\n                  .statisticsBranding_green.hovered-recent-number,\n                  .statisticsBranding_green.statisticsBranding_first {\n                    color: #f9e1cc;\n                  }\n\n                  .statisticsBranding_green.hovered-recent-number::before,\n                  .statisticsBranding_green.statisticsBranding_first::before {\n                    background: #166958;\n                  }\n\n                  .statisticsBranding_black {\n                    color: #f9e1cc;\n                  }\n\n                  .statisticsBranding_black.hovered-recent-number,\n                  .statisticsBranding_black.statisticsBranding_first {\n                    color: #f9e1cc;\n                  }\n\n                  .statisticsBranding_placeholder {\n                    color: #f9e1cc;\n                  }\n\n                  .statisticsBranding_firstDoubleBall {\n                    border-color: #f9e1cc;\n                  }\n\n                  .statisticsBranding_first::before {\n                    border-color: #f9e1cc;\n                  }\n\n                  .statisticsBranding_placeholder:first-child {\n                    border-color: #f9e1cc;\n                  }\n                ",
        }}
      />
      <div
        className="numbers--ca008 recent-number--d9e03 mobile-theme--e9e56 with-background--5b87d"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "rgb(34 28 28 / 60%)",
        }}
      >
        {recent_winner?.map((item, i) => {
          const color = {
            1: "rgba(255, 99, 71, 1)",
            2: "rgba(30, 144, 255, 1)",
            3: "rgba(50, 205, 50, 1)",
            4: "rgba(255, 165, 0, 1)",
            5: "rgba(138, 43, 226, 1)",
            6: "rgba(255, 20, 147, 1)",
            7: "rgba(0, 206, 209, 1)",
            8: "rgba(255, 215, 0, 1)",
            9: "rgba(220, 20, 60, 1)",
            0: "rgba(60, 179, 113, 1)",
            "Line 1": "rgba(0, 191, 255, 1)",
            "Line 2": "rgba(218, 112, 214, 1)",
            Even: "rgba(094, 115, 5, 074441)",
            Odd: "rgba(218, 11, 214, 1)",
          };

          return (
            <div
              key={`${item?.winner}-${i}`}
              // className="number-container--8752e mobile-theme--231d0 recent-number--7cf3a single-line--6ba22"

              data-role="recent-number"
            >
              <div
                data-role="number-27"
                // className="single-number--4bb7d red--e421d mobile-theme--54ef7 statisticsBranding_first align-middle--4c85a first--1cb2f statisticsBranding_red phone--5b459 mobile--4d9e5"
              >
                <span
                  style={{
                    color: i === 0 ? "white" : color[item?.winner],
                    backgroundColor:
                      i === 0 ? color[item?.winner] : "transparent",
                  }}
                  className={`value--dd5c7 ${
                    i === 0 ? "border-solid  border-white border px-2.5" : ""
                  }`}
                >
                  {item?.winner}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentWinner;
