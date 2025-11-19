import { Fragment, useState } from "react";
import { useSound } from "../../../context/ApiProvider";
import GameHistory from "../../modals/Desktop/GameHistory/GameHistory";
import { playClick } from "../../../utils/sound";

const ActionButtons = () => {
  const [showGameHistoryModal, setShowGameHistoryModal] = useState(false);
  const { sound } = useSound();
  const handleToggleFullScreen = () => {
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      const el = document.body;
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
    }
  };

  const clickSound = () => {
    if (sound) {
      playClick();
    }
  };

  return (
    <Fragment>
      {showGameHistoryModal && (
        <GameHistory setShowGameHistoryModal={setShowGameHistoryModal} />
      )}
      <div className="top-right--75849" data-role="top-right-corner">
        <div className="box--4ecd6">
          <div>
            <div className="item-wrapper--7891b right--ac8e8">
              <div className="commonButtons--8992c" />
              <div className="commonButtons--8992c gap--c4bba">
                <button
                  className="button--673ce xs--07983 roundingBoth--6d5e6 buttonRoot--3bd4d"
                  data-type="secondary"
                  data-role="settings-button"
                  data-state="Default"
                >
                  <span
                    className="roundingBoth--2a8e7 buttonContent--2a2d4 xs--76a78"
                    data-role="button-content"
                  >
                    <div
                      className="buttonBase--73d7d"
                      data-role="base-border"
                      style={{
                        padding: `calc(
                                  var(--rem-migration-size, 10px) * 0.1
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
                              <path d="M18.79 12a7.178 7.178 0 0 0-.19-1.62l2-1.15-2-3.47-2 1.16a6.86 6.86 0 0 0-2.8-1.63V3h-4v2.29A7 7 0 0 0 7 6.92L5 5.76 3 9.23l2 1.15a6.62 6.62 0 0 0 0 3.23l-2 1.15 2 3.47 2-1.15a7.09 7.09 0 0 0 2.8 1.62V21h4v-2.3a7 7 0 0 0 2.8-1.62l2 1.15 2-3.47-2-1.15a7.154 7.154 0 0 0 .19-1.61Zm-7 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                            </svg>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="badge--81159" />
                  </span>
                </button>
                <button
                  onClick={() => {
                    setShowGameHistoryModal((prev) => !prev);
                    clickSound();
                  }}
                  className="button--673ce xs--07983 roundingBoth--6d5e6 buttonRoot--3bd4d"
                  data-type="secondary"
                  data-role="history-button"
                  data-state="Default"
                >
                  <div
                    className="tooltip-bottom-center--3bbc0 hidden-bottom-center--cc18f"
                    data-role="tooltip"
                    data-is-shown="false"
                    data-position="bottom-center"
                    style={{
                      fontSize: "calc(var(--root-size, 10px) * 2)",
                    }}
                  >
                    <div className="tooltipThemeAnchor--55799 tooltip-bottom-center-anchor--e9143" />
                    <span data-role="tooltip-label">Game History</span>
                  </div>
                  <span
                    className="roundingBoth--2a8e7 buttonContent--2a2d4 xs--76a78"
                    data-role="button-content"
                  >
                    <div
                      className="buttonBase--73d7d"
                      data-role="base-border"
                      style={{
                        padding: `calc(
                                  var(--rem-migration-size, 10px) * 0.1
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
                              <path d="M10.77 3.6c2.16-.33 4.37.19 6.16 1.45l-.04-.02a8.5 8.5 0 1 1-11.66 12.1l1.59-1.21a6.5 6.5 0 1 0-.1-7.74l1.42 1.38-5.64 1.49L3.88 5.4l1.44 1.4a8.51 8.51 0 0 1 5.45-3.2Z" />
                              <path d="M11.33 12.32V7.49h1.5v4.2l3.05 3.05-1.06 1.06-3.5-3.48Z" />
                            </svg>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="badge--81159" />
                  </span>
                </button>
                <button
                  className="button--673ce xs--07983 roundingBoth--6d5e6 buttonRoot--3bd4d"
                  data-type="secondary"
                  data-role="help-button"
                  data-state="Default"
                >
                  <span
                    className="roundingBoth--2a8e7 buttonContent--2a2d4 xs--76a78"
                    data-role="button-content"
                  >
                    <div
                      className="buttonBase--73d7d"
                      data-role="base-border"
                      style={{
                        padding: `calc(
                                  var(--rem-migration-size, 10px) * 0.1
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
                              <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm1 16h-2v-1.59h2V18Zm1.92-6.03-.86.88c-.61.62-.93.97-1.01 2.15l-2.01-.03c0-1.05.43-1.9 1.12-2.6l1.18-1.2c.35-.34.56-.82.56-1.35 0-1.05-.86-1.91-1.91-1.91-.96 0-1.76.94-1.89 1.91H8.19c.14-2 1.78-3.82 3.8-3.82 2.02 0 3.82 1.71 3.82 3.82 0 .84-.34 1.6-.89 2.15Z" />
                            </svg>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="badge--81159" />
                  </span>
                </button>

                {document.fullscreenElement ? (
                  <button
                    onClick={handleToggleFullScreen}
                    className="button--673ce xs--07983 roundingBoth--6d5e6 buttonRoot--3bd4d"
                    data-type="secondary"
                    data-role="fullscreen-button"
                    data-state="Default"
                  >
                    <div
                      className="tooltip-bottom-left--680a4 hidden-bottom--4d8a4"
                      data-role="tooltip"
                      data-is-shown="false"
                      data-position="bottom-left"
                      style={{ fontSize: "calc(var(--root-size, 10px) * 2)" }}
                    >
                      <div className="tooltipThemeAnchor--55799 tooltip-bottom-left-anchor--c3dbd" />
                      <span data-role="tooltip-label">Exit Full Screen</span>
                    </div>
                    <span
                      className="roundingBoth--2a8e7 buttonContent--2a2d4 xs--76a78"
                      data-role="button-content"
                    >
                      <div
                        className="buttonBase--73d7d"
                        data-role="base-border"
                        style={{
                          padding:
                            "calc(var(--rem-migration-size, 10px) * 0.1)",
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
                                <path d="M15.51 8.5H20l.01 2h-5.5a1 1 0 0 1-1-1V4h2v4.5Zm0 7V20h-2v-5.5a1 1 0 0 1 1-1h5.5v2h-4.5ZM4 15.5h4.5V20h2v-5.5a1 1 0 0 0-1-1H4v2Zm4.51-7V4h2v5.5a1 1 0 0 1-1 1h-5.5v-2h4.5Z" />
                              </svg>
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div className="badge--81159" />
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={handleToggleFullScreen}
                    className="button--673ce xs--07983 roundingBoth--6d5e6 buttonRoot--3bd4d"
                    data-type="secondary"
                    data-role="fullscreen-button"
                    data-state="Default"
                  >
                    <span
                      className="roundingBoth--2a8e7 buttonContent--2a2d4 xs--76a78"
                      data-role="button-content"
                    >
                      <div
                        className="buttonBase--73d7d"
                        data-role="base-border"
                        style={{
                          padding: `calc(
                                  var(--rem-migration-size, 10px) * 0.1
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
                                <path d="M6 6v4.5H4V5a1 1 0 0 1 1-1h5.5v2H6Zm12.01 0h-4.5V4h5.5a1 1 0 0 1 1 1v5.5h-2V6ZM18 18v-4.5h2.01V19a1 1 0 0 1-1 1h-5.5v-2H18Zm-7.49 0h-4.5v-4.5h-2V19a1 1 0 0 0 1 1h5.5v-2Z" />
                              </svg>
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div className="badge--81159" />
                    </span>
                  </button>
                )}
              </div>
            </div>
            <div
              data-role="gameInfo"
              className="item-wrapper--7891b right--ac8e8"
            >
              <div className="game-info--08937" data-role="game-info">
                <div className="gameTime--9d037" data-role="game-time">
                  09:44:33
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ActionButtons;
