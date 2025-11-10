const RecentWinner = ({ recent_winner }) => {
  console.log(recent_winner);
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
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        {recent_winner?.map((item, i) => {
          const color = {
            1: "#FF6347",
            2: "#1E90FF",
            3: "#FFA500",
            4: "#FF6347",
            5: "#1E90FF",
            6: "#FFA500",
            7: "#FF6347",
            8: "#1E90FF",
            9: "#FFA500",
            0: "#FFA500",
          };
          console.log(color[item?.winner]);
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
