/* eslint-disable no-irregular-whitespace */
import { motion } from "motion/react";
import { useSelector } from "react-redux";
import { playClick } from "../../../../utils/sound";
import { useSound } from "../../../../context/ApiProvider";
import { usePayout } from "../../../../hooks/payout";
import { useParams } from "react-router-dom";
const PayoutLimit = ({ setTab, closeModal }) => {
  const { eventId } = useParams();
  const { data } = usePayout({ eventId });
  const { sound } = useSound();
  const { deviseHeight } = useSelector((state) => state.global);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.2 }}
      exit={{ x: "100%" }}
      className="card--9bed2 card--2080f transformPositioning--1125f withBorderRadius--f0b89"
      data-role="drawer-card"
      data-test-size="65%"
      style={{
        pointerEvents: "initial",
        transitionDuration: "initial",
        transitionTimingFunction: "initial",
        height: `${deviseHeight * 0.65}px`,
      }}
    >
      <div
        className="contentContainer--736bb contentSizeRestrictContainer--9da92"
        data-role="content-restrict-container"
        style={{ maxHeight: "750px" }}
      >
        <div className="handleBarContainer--1d331 handleBarContainer--b1c45">
          <div className="handleBar--d2af5" data-role="swipe-bar">
            <div className="bar--28f5d" />
          </div>
        </div>
        <div className="contentContainer--bced0">
          <div
            className="headerContainer--74784 header--bbb34"
            data-role="header-container"
          >
            <div
              onClick={() => {
                setTab("menu");
                if (sound) playClick();
              }}
              className="backButtonContainer--3999f"
            >
              <div
                className="backButton--096e8 visible--24b70 animated--9d0fa"
                data-role="drawer-back-button-container"
              >
                <div
                  data-role="drawer-back-button"
                  className="container--0ac6d drawerHeaderButton--a3e59"
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
                      <path d="m7.83 13.36 3.95 3.95-1.42 1.42L4 12.36 10.36 6l1.42 1.41-3.95 3.95H20v2H7.83Z" />
                    </svg>
                  </svg>
                </div>
              </div>
            </div>
            <div className="titleContainer--62dac">
              <div
                data-role="title-animation-container"
                className="animatedTitleContainer--0ef83"
              >
                <div className="currentTitle--5f5a4" data-role="title-current">
                  <div className="titleContainer--ae994">
                    <div className="title--b94ad">
                      <div className="titleIcon--f10b6">
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
                            <path d="m8.94 6.97 2.18 2.18 1.06-1.06L8.09 4 4 8.09l1.06 1.06 2.18-2.18v8.04h1.7V6.97Zm8 10.07 2.18-2.18 1.06 1.06-4.09 4.09L12 15.92l1.06-1.06 2.18 2.18V9h1.7v8.04Z" />
                          </svg>
                        </svg>
                      </div>
                      <div data-role="title-text" className="titleText--44453">
                        Payouts &amp; Limits
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={closeModal}
              data-role="drawer-close-button"
              className="container--0ac6d drawerHeaderButton--a3e59"
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
                  <path d="m13.615 11.864 6.116 6.116-1.748 1.747-6.115-6.116-6.12 6.12L4 17.984l6.12-6.12-6.116-6.117L5.75 4l6.117 6.116 6.112-6.112 1.747 1.748-6.112 6.112Z" />
                </svg>
              </svg>
            </div>
          </div>
          <div className="content--00be2" data-role="drawer-content">
            <div className="screensView--8d90a" data-role="menu-container">
              <div className="screens--eb504" data-role="stack-screens">
                <div
                  className="screen--f0473 screenWithTopMargin--d935a"
                  data-screen-id="betLimits"
                  data-role="menu-screen-betLimits"
                  style={{ display: "block" }}
                >
                  <div
                    className="wrapper--f4eb9"
                    data-role="scrollable-wrapper"
                  >
                    <div
                      data-role="scrollable"
                      className="scrollable--96151 vertical--99fcf lockScroll--49962"
                      style={{
                        maskImage:
                          "linear-gradient(transparent 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%, transparent 100%), linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%, transparent 100%)",
                      }}
                    >
                      <div
                        className="scrollContainer--c39d6"
                        data-role="drawer-scrollable"
                      >
                        <div className="tableInfo--47273">
                          <div>
                            Table:{" "}
                            <span className="tableName--b461c">
                              {data?.result?.table}
                            </span>
                          </div>
                          <div>
                            <span>Bet Limits:</span>&nbsp;
                            <span className="limits--0b506">
                              {data?.result?.limit}
                            </span>
                          </div>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data?.result?.payout || "",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PayoutLimit;
