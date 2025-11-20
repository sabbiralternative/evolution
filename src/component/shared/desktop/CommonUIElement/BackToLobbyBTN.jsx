import { useNavigate } from "react-router-dom";

const BackToLobbyBTN = () => {
  const navigate = useNavigate();
  return (
    <div className="bottom-right--7663b" data-role="bottom-right-corner">
      <div className="box--4ecd6">
        <div className="item-wrapper--7891b right--ac8e8">
          <div className="wrapper--33be0 lobby--5212f">
            <button
              onClick={() => navigate("/")}
              className="button--673ce sm--8ab3e roundingBoth--6d5e6 labelPositionInside--74c5c buttonRoot--3bd4d"
              data-type="secondary"
              data-role="lobby-button"
              data-state="Default"
              style={{
                "--common-customizableButton-secondary-text-default": `rgb(
                            150,
                            255,
                            255
                          )`,
                "--common-customizableButton-secondary-text-activated": `rgb(
                            150,
                            255,
                            255
                          )`,
                "--common-customizableButton-secondary-text-hovered": `rgb(
                            150,
                            255,
                            255
                          )`,
                "--common-customizableButton-secondaryGold-background-hovered": `rgb(
                            238,
                            190,
                            71
                          )`,
                "--common-customizableButton-secondaryGold-background-activated": `rgb(
                            238,
                            190,
                            71
                          )`,
                "--common-customizableButton-secondaryGold-text-default": `rgb(
                            238,
                            190,
                            71
                          )`,
                "--common-customizableButton-secondaryGold-text-activated": `rgb(
                            0,
                            0,
                            0
                          )`,
                "--common-customizableButton-secondaryGold-text-hovered": `rgb(
                            0,
                            0,
                            0
                          )`,
              }}
            >
              <span
                className="roundingBoth--2a8e7 buttonContent--2a2d4 sm--a5b0b"
                data-role="button-content"
              >
                <div
                  className="buttonBase--73d7d"
                  data-role="base-border"
                  style={{
                    padding: `calc(
                                var(--rem-migration-size, 10px) * 0.12
                              )`,
                  }}
                />
                <div className="iconLabelWrapper--8e144 left--60884">
                  <span className="icon--54b42">
                    <span
                      className="iconWrapper--9127d"
                      data-role="icon-wrapper"
                    >
                      <svg
                        viewBox="0 0 100 100"
                        className="iconWrapper--b4e49"
                        style={{ height: "100%" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="icon--8dcd0"
                          height="100%"
                          y="0%"
                        >
                          <path d="M18.8 11.363c-9.4.48-10.58-2.34-12.8-7.28a8.62 8.62 0 0 1 12.8 7.28Zm-11.64 6c1.49-2.85 4-5.34 11.64-4.75A8.618 8.618 0 0 1 6 19.903c.38-.85.74-1.73 1.16-2.55v.01Z" />
                        </svg>
                      </svg>
                    </span>
                  </span>
                  <span
                    data-role="button-label"
                    className="label--6561f labelWithIcon--cb194 labelSizeDefault--145bb"
                  >
                    LOBBY
                  </span>
                </div>
                <div className="badge--81159" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackToLobbyBTN;
