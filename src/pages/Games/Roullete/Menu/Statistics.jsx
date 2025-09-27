import { motion } from "motion/react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Statistics = ({ setParentTab, closeModal }) => {
  const { deviseHeight } = useSelector((state) => state.global);
  const [tab, setTab] = useState("hot-cold");
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.2 }}
      exit={{ x: "100%" }}
      className="card--9bed2 card--2080f transformPositioning--1125f withBorderRadius--f0b89"
      data-role="drawer-card"
      data-test-size="90%"
      style={{
        pointerEvents: "initial",
        transform: "translate3d(0px, calc(100% - 613px), 1px)",
        transitionDuration: "initial",
        transitionTimingFunction: "initial",
        height: `${deviseHeight * 0.65}px`,
      }}
    >
      <div
        className="contentContainer--736bb contentSizeRestrictContainer--9da92"
        data-role="content-restrict-container"
        style={{ maxHeight: "613px" }}
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
              onClick={() => setParentTab("menu")}
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
                            <path d="M17 20V4h2v16h-2ZM13 6v14h2V6h-2ZM5 20V8h2v12H5Zm4 0V10h2v10H9Z" />
                          </svg>
                        </svg>
                      </div>
                      <div data-role="title-text" className="titleText--44453">
                        Statistics
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
                  data-screen-id="statistics"
                  data-role="menu-screen-statistics"
                  style={{ display: "block" }}
                >
                  <div className="statisticsDrawer--4bfec">
                    <div className="wrapper--3f4b5" data-role="tabs-wrapper">
                      <div dir="ltr" className>
                        <div
                          className="wrapper--f4eb9"
                          data-role="scrollable-wrapper"
                        >
                          <div
                            data-role="scrollable"
                            className="scrollable--96151 horizontal--8dcae hiddenScrollbar--27373"
                          >
                            <div
                              className="barWrapper--83c4f centered--de6e0"
                              data-role="tab-bar-wrapper"
                            >
                              <ul
                                className="list--a098a indicatorBottomPosition--b410d"
                                data-role="tab-bar-list"
                                style={{ "--tab-bar-side-offset": 0 }}
                              >
                                <li
                                  onClick={() => setTab("hot-cold")}
                                  data-role="tab-bar-item-0"
                                  className={`item--acccf centered--de6e0 ${
                                    tab === "hot-cold" ? "selected--bfe52" : ""
                                  }`}
                                >
                                  <button
                                    className="button--c2691"
                                    type="button"
                                    data-role="tab-bar-button-0"
                                  >
                                    <span
                                      data-role="tab-label"
                                      data-label="HOT/COLD"
                                      className="label--eb22b"
                                    >
                                      HOT/COLD
                                    </span>
                                    <span
                                      data-label="HOT/COLD"
                                      className="label--eb22b widthReservation--d16ee"
                                    >
                                      HOT/COLD
                                    </span>
                                  </button>
                                </li>
                                <li
                                  onClick={() => setTab("advanced")}
                                  data-role="tab-bar-item-1"
                                  className={`item--acccf centered--de6e0 ${
                                    tab === "advanced" ? "selected--bfe52" : ""
                                  }`}
                                >
                                  <button
                                    className="button--c2691"
                                    type="button"
                                    data-role="tab-bar-button-1"
                                  >
                                    <span
                                      data-role="tab-label"
                                      data-label="ADVANCED"
                                      className="label--eb22b"
                                    >
                                      ADVANCED
                                    </span>
                                    <span
                                      data-label="ADVANCED"
                                      className="label--eb22b widthReservation--d16ee"
                                    >
                                      ADVANCED
                                    </span>
                                  </button>
                                </li>
                                <li
                                  onClick={() => setTab("last-500")}
                                  data-role="tab-bar-item-2"
                                  className={`item--acccf centered--de6e0 ${
                                    tab === "last-500" ? "selected--bfe52" : ""
                                  }`}
                                >
                                  <button
                                    className="button--c2691"
                                    type="button"
                                    data-role="tab-bar-button-2"
                                  >
                                    <span
                                      data-role="tab-label"
                                      data-label="LAST 500"
                                      className="label--eb22b"
                                    >
                                      LAST 500
                                    </span>
                                    <span
                                      data-label="LAST 500"
                                      className="label--eb22b widthReservation--d16ee"
                                    >
                                      LAST 500
                                    </span>
                                  </button>
                                </li>
                                <li
                                  data-role="tab-bar-indicator"
                                  className="indicator--9de73 visible--16d67"
                                  style={{
                                    "--tabLineWidth": "0.34",
                                    "--tabLineLeftPosition":
                                      tab === "hot-cold"
                                        ? "0%"
                                        : tab === "advanced"
                                        ? "34%"
                                        : "69%",
                                  }}
                                />
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="list--72361"
                        data-role="tab-content-wrapper"
                        style={{ "--content-side-offset": 0 }}
                      >
                        {tab === "hot-cold" && (
                          <div
                            className="active--f0a91 muteAnimation--3f915"
                            data-role="tab-content-item"
                          >
                            <div className="body--036f5 mobile--55584 portrait--6c7b2">
                              <div>
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      ".statisticsBranding_red { color: #B51C12; }.statisticsBranding_red.hovered-recent-number,.statisticsBranding_red.statisticsBranding_first { color: #F9E1CC; }.statisticsBranding_red.hovered-recent-number::before,.statisticsBranding_red.statisticsBranding_first::before { background:#B51C12; }.statisticsBranding_green { color: #166958; }.statisticsBranding_green.hovered-recent-number,.statisticsBranding_green.statisticsBranding_first { color: #F9E1CC; }.statisticsBranding_green.hovered-recent-number::before,.statisticsBranding_green.statisticsBranding_first::before { background:#166958; }.statisticsBranding_black { color: #F9E1CC; }.statisticsBranding_black.hovered-recent-number,.statisticsBranding_black.statisticsBranding_first { color: #F9E1CC; }.statisticsBranding_placeholder { color: #F9E1CC; }.statisticsBranding_firstDoubleBall { border-color: #F9E1CC; }.statisticsBranding_first::before { border-color: #F9E1CC; }.statisticsBranding_placeholder:first-child { border-color: #F9E1CC; }",
                                  }}
                                />
                                <div className="numbers--ca008 recent-number--d9e03">
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-9"
                                      className="single-number--4bb7d red--e421d statisticsBranding_first align-middle--4c85a first--1cb2f statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">9</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-25"
                                      className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">25</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-26"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">26</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-7"
                                      className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">7</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-17"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">17</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-35"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">35</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-2"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">2</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-26"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">26</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-14"
                                      className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">14</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-12"
                                      className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">12</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-17"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">17</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-33"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">33</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="scrollableWrapper--5f159">
                                <div className="scrollable--ae7ec overflow-touch-enabled--9779a">
                                  <div className="pieHeight--2ba0c">
                                    <div className="container--f4736">
                                      <ul
                                        className="hot-cold--9994e dark--07840"
                                        data-role="hot-numbers"
                                      >
                                        <li className="hot--ad414">
                                          <div className="icon--09fb0" />
                                        </li>
                                        <li
                                          data-role="number-28"
                                          className="black--9855e"
                                          style={{
                                            color: "rgb(249, 225, 204)",
                                          }}
                                        >
                                          28
                                        </li>
                                        <li
                                          data-role="number-17"
                                          className="black--9855e"
                                          style={{
                                            color: "rgb(249, 225, 204)",
                                          }}
                                        >
                                          17
                                        </li>
                                        <li
                                          data-role="number-25"
                                          className="red--a4011"
                                          style={{ color: "rgb(181, 28, 18)" }}
                                        >
                                          25
                                        </li>
                                        <li
                                          data-role="number-11"
                                          className="black--9855e"
                                          style={{
                                            color: "rgb(249, 225, 204)",
                                          }}
                                        >
                                          11
                                        </li>
                                        <li
                                          data-role="number-26"
                                          className="black--9855e"
                                          style={{
                                            color: "rgb(249, 225, 204)",
                                          }}
                                        >
                                          26
                                        </li>
                                      </ul>
                                      <div className="pie--e3c11">
                                        <div
                                          className="wheel--5c753"
                                          data-role="statistics-wheel"
                                        >
                                          <div className="overflow--300fc">
                                            <canvas
                                              width={757}
                                              height={757}
                                              data-done="true"
                                              data-role="statistics-wheel-canvas"
                                              style={{
                                                width: "100%",
                                                height: "auto",
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <ul
                                        className="hot-cold--9994e dark--07840"
                                        data-role="cold-numbers"
                                      >
                                        <li className="cold--b2eba">
                                          <div className="icon--09fb0" />
                                        </li>
                                        <li
                                          data-role="number-20"
                                          className="black--9855e"
                                          style={{
                                            color: "rgb(249, 225, 204)",
                                          }}
                                        >
                                          20
                                        </li>
                                        <li
                                          data-role="number-14"
                                          className="red--a4011"
                                          style={{ color: "rgb(181, 28, 18)" }}
                                        >
                                          14
                                        </li>
                                        <li
                                          data-role="number-18"
                                          className="red--a4011"
                                          style={{ color: "rgb(181, 28, 18)" }}
                                        >
                                          18
                                        </li>
                                        <li
                                          data-role="number-22"
                                          className="black--9855e"
                                          style={{
                                            color: "rgb(249, 225, 204)",
                                          }}
                                        >
                                          22
                                        </li>
                                        <li
                                          data-role="number-1"
                                          className="red--a4011"
                                          style={{ color: "rgb(181, 28, 18)" }}
                                        >
                                          1
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="slider--cfe9b">
                                <div className="statisticsSlider--aecbf">
                                  <div className="label--18169">
                                    LAST 500 ROUNDS
                                  </div>
                                  <div className="container--7c740">
                                    <div
                                      className="slider--3afbd"
                                      data-role="slider"
                                      data-value={1}
                                      style={{ "--slider-value": "100%" }}
                                    >
                                      <div className="track--d198b">
                                        <div
                                          className="moveArea--75e4e"
                                          data-interactive="true"
                                        >
                                          <div
                                            className="fill--2d55a"
                                            data-role="fill"
                                          >
                                            <div
                                              className="handle--31b00"
                                              data-role="handle"
                                            >
                                              <div className="handleCircle--1553b" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="counter--eaccb">500</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {tab === "advanced" && (
                          <div
                            className="active--f0a91 muteAnimation--3f915"
                            data-role="tab-content-item"
                          >
                            <div className="body--036f5 mobile--55584 portrait--6c7b2">
                              <div>
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      ".statisticsBranding_red { color: #B51C12; }.statisticsBranding_red.hovered-recent-number,.statisticsBranding_red.statisticsBranding_first { color: #F9E1CC; }.statisticsBranding_red.hovered-recent-number::before,.statisticsBranding_red.statisticsBranding_first::before { background:#B51C12; }.statisticsBranding_green { color: #166958; }.statisticsBranding_green.hovered-recent-number,.statisticsBranding_green.statisticsBranding_first { color: #F9E1CC; }.statisticsBranding_green.hovered-recent-number::before,.statisticsBranding_green.statisticsBranding_first::before { background:#166958; }.statisticsBranding_black { color: #F9E1CC; }.statisticsBranding_black.hovered-recent-number,.statisticsBranding_black.statisticsBranding_first { color: #F9E1CC; }.statisticsBranding_placeholder { color: #F9E1CC; }.statisticsBranding_firstDoubleBall { border-color: #F9E1CC; }.statisticsBranding_first::before { border-color: #F9E1CC; }.statisticsBranding_placeholder:first-child { border-color: #F9E1CC; }",
                                  }}
                                />
                                <div className="numbers--ca008 recent-number--d9e03">
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-9"
                                      className="single-number--4bb7d red--e421d statisticsBranding_first align-middle--4c85a first--1cb2f statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">9</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-2"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">2</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-21"
                                      className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">21</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-26"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">26</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-15"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">15</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-5"
                                      className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">5</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-22"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">22</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-25"
                                      className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">25</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-26"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">26</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-8"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">8</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-2"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">2</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-9"
                                      className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">9</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="scrollableWrapper--5f159">
                                <div className="scrollable--ae7ec overflow-touch-enabled--9779a">
                                  <div className>
                                    <div
                                      className="advancedStatistics--a739b"
                                      data-role="advanced-statistics"
                                    >
                                      <div className="percentBar--fb7b2 withZero--23d3a">
                                        <div className="zero--95c5c">
                                          <div className="zero--9304f">
                                            <div>
                                              <div
                                                className="value--f5b49"
                                                data-role="percent-value"
                                                data-role-value={2}
                                              >
                                                2<small>%</small>
                                              </div>
                                            </div>
                                            <div
                                              data-role="bet-zero"
                                              className="label--46d1c"
                                              style={{
                                                backgroundColor:
                                                  "rgb(22, 105, 88)",
                                              }}
                                            >
                                              <span>0</span>
                                            </div>
                                          </div>
                                        </div>
                                        <ul
                                          className="percentBar--c0b22"
                                          data-role="percent-bar"
                                        >
                                          <li
                                            className="part--ddd5c"
                                            style={{ left: "0%", right: "67%" }}
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={32}
                                            >
                                              32<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-1st12"
                                              className="label--4f33a"
                                            >
                                              <div className="marquee--33d84">
                                                <p
                                                  data-role="marquee-content-wrapper"
                                                  className
                                                >
                                                  <span>
                                                    <span className="label--40a68 biggerPadding--b1a2e">
                                                      1ST DOZEN
                                                    </span>
                                                    <span
                                                      className="label--40a68 biggerPadding--b1a2e"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      1ST DOZEN
                                                    </span>
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            className="part--ddd5c"
                                            style={{
                                              left: "33%",
                                              right: "35%",
                                            }}
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={30}
                                            >
                                              30<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-2nd12"
                                              className="label--4f33a"
                                            >
                                              <div className="marquee--33d84">
                                                <p
                                                  data-role="marquee-content-wrapper"
                                                  className
                                                >
                                                  <span>
                                                    <span className="label--40a68 biggerPadding--b1a2e">
                                                      2ND DOZEN
                                                    </span>
                                                    <span
                                                      className="label--40a68 biggerPadding--b1a2e"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      2ND DOZEN
                                                    </span>
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            className="part--ddd5c"
                                            style={{ left: "65%", right: "0%" }}
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={36}
                                            >
                                              36<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-3rd12"
                                              className="label--4f33a"
                                            >
                                              <div className="marquee--33d84">
                                                <p
                                                  data-role="marquee-content-wrapper"
                                                  className
                                                >
                                                  <span>
                                                    <span className="label--40a68 biggerPadding--b1a2e">
                                                      3RD DOZEN
                                                    </span>
                                                    <span
                                                      className="label--40a68 biggerPadding--b1a2e"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      3RD DOZEN
                                                    </span>
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="percentBar--fb7b2">
                                        <ul
                                          className="percentBar--c0b22"
                                          data-role="percent-bar"
                                        >
                                          <li
                                            className="part--ddd5c"
                                            style={{ left: "0%", right: "66%" }}
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={34}
                                            >
                                              34<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-bottom2to1"
                                              className="label--4f33a"
                                            >
                                              <div className="marquee--33d84">
                                                <p
                                                  data-role="marquee-content-wrapper"
                                                  className
                                                >
                                                  <span>
                                                    <span className="label--40a68 biggerPadding--b1a2e">
                                                      1ST COLUMN
                                                    </span>
                                                    <span
                                                      className="label--40a68 biggerPadding--b1a2e"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      1ST COLUMN
                                                    </span>
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            className="part--ddd5c"
                                            style={{
                                              left: "34%",
                                              right: "33%",
                                            }}
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={32}
                                            >
                                              32<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-middle2to1"
                                              className="label--4f33a"
                                            >
                                              <div className="marquee--33d84">
                                                <p
                                                  data-role="marquee-content-wrapper"
                                                  className
                                                >
                                                  <span>
                                                    <span className="label--40a68 biggerPadding--b1a2e">
                                                      2ND COLUMN
                                                    </span>
                                                    <span
                                                      className="label--40a68 biggerPadding--b1a2e"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      2ND COLUMN
                                                    </span>
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            className="part--ddd5c"
                                            style={{ left: "67%", right: "0%" }}
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={32}
                                            >
                                              32<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-top2to1"
                                              className="label--4f33a"
                                            >
                                              <div className="marquee--33d84">
                                                <p
                                                  data-role="marquee-content-wrapper"
                                                  className
                                                >
                                                  <span>
                                                    <span className="label--40a68 biggerPadding--b1a2e">
                                                      3RD COLUMN
                                                    </span>
                                                    <span
                                                      className="label--40a68 biggerPadding--b1a2e"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      3RD COLUMN
                                                    </span>
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="percentBar--fb7b2">
                                        <ul
                                          className="percentBar--c0b22"
                                          data-role="percent-bar"
                                        >
                                          <li
                                            className="part--ddd5c"
                                            style={{
                                              left: "0%",
                                              right: "72.44%",
                                            }}
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={33}
                                            >
                                              33<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-tiers_du_cylindre"
                                              className="label--4f33a"
                                            >
                                              <div className="marquee--33d84">
                                                <p
                                                  data-role="marquee-content-wrapper"
                                                  className
                                                >
                                                  <span>
                                                    <span className="label--40a68 biggerPadding--b1a2e">
                                                      TIER
                                                    </span>
                                                    <span
                                                      className="label--40a68 biggerPadding--b1a2e"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      TIER
                                                    </span>
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            className="part--ddd5c"
                                            style={{
                                              left: "27.56%",
                                              right: "48.72%",
                                            }}
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={21}
                                            >
                                              21<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-orphelins_a_cheval"
                                              className="label--4f33a"
                                            >
                                              <div className="marquee--33d84">
                                                <p
                                                  data-role="marquee-content-wrapper"
                                                  className="fast--8bb79"
                                                  style={{ width: "68px" }}
                                                >
                                                  <span>
                                                    <span className="label--40a68 biggerPadding--b1a2e">
                                                      ORPHELINS
                                                    </span>
                                                    <span
                                                      className="label--40a68 biggerPadding--b1a2e"
                                                      style={{}}
                                                    >
                                                      ORPHELINS
                                                    </span>
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            className="part--ddd5c"
                                            style={{
                                              left: "51.28%",
                                              right: "23.4%",
                                            }}
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={26}
                                            >
                                              26<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-voisins_du_zero"
                                              className="label--4f33a"
                                            >
                                              <div className="marquee--33d84">
                                                <p
                                                  data-role="marquee-content-wrapper"
                                                  className
                                                >
                                                  <span>
                                                    <span className="label--40a68 biggerPadding--b1a2e">
                                                      VOISINS
                                                    </span>
                                                    <span
                                                      className="label--40a68 biggerPadding--b1a2e"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      VOISINS
                                                    </span>
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            className="part--ddd5c"
                                            style={{
                                              left: "76.6%",
                                              right: "0%",
                                            }}
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={20}
                                            >
                                              20<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-jeu_zero"
                                              className="label--4f33a"
                                            >
                                              <div className="marquee--33d84">
                                                <p
                                                  data-role="marquee-content-wrapper"
                                                  className
                                                >
                                                  <span>
                                                    <span className="label--40a68 biggerPadding--b1a2e">
                                                      ZERO
                                                    </span>
                                                    <span
                                                      className="label--40a68 biggerPadding--b1a2e"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      ZERO
                                                    </span>
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="lowRisk--c3272">
                                        <ul
                                          className="lowRisk--85485"
                                          data-role="low-risk"
                                        >
                                          <li
                                            className="item--3a4a2"
                                            data-role="low-risk-statistics"
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={50}
                                            >
                                              50<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-from1to18"
                                              className="label--4170d"
                                              data-stats-id="from1to18"
                                              style={{ height: "50%" }}
                                            >
                                              <p>1–18</p>
                                            </div>
                                          </li>
                                          <li
                                            className="item--3a4a2"
                                            data-role="low-risk-statistics"
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={47}
                                            >
                                              47<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-even"
                                              className="label--4170d"
                                              data-stats-id="even"
                                              style={{ height: "47%" }}
                                            >
                                              <p>EVEN</p>
                                            </div>
                                          </li>
                                          <li
                                            className="item--3a4a2"
                                            data-role="low-risk-statistics"
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={47}
                                            >
                                              47<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-red"
                                              className="label--4170d"
                                              data-stats-id="red"
                                              style={{ height: "47%" }}
                                            >
                                              <svg
                                                viewBox="0 0 99 44"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="diamond--b3d14"
                                              >
                                                <path
                                                  stroke="#828181"
                                                  strokeWidth={2}
                                                  d="m1.12801,22.02819l48.33871,-21.46375l48.33871,21.46375l-48.33871,21.46375l-48.33871,-21.46375z"
                                                  fill="#B51C12"
                                                />
                                              </svg>
                                            </div>
                                          </li>
                                          <li
                                            className="item--3a4a2"
                                            data-role="low-risk-statistics"
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={51}
                                            >
                                              51<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-black"
                                              className="label--4170d"
                                              data-stats-id="black"
                                              style={{ height: "51%" }}
                                            >
                                              <svg
                                                viewBox="0 0 99 44"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="diamond--b3d14"
                                              >
                                                <path
                                                  stroke="#828181"
                                                  strokeWidth={2}
                                                  d="m1.12801,22.02819l48.33871,-21.46375l48.33871,21.46375l-48.33871,21.46375l-48.33871,-21.46375z"
                                                  fill="#1A1A1A"
                                                />
                                              </svg>
                                            </div>
                                          </li>
                                          <li
                                            className="item--3a4a2"
                                            data-role="low-risk-statistics"
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={51}
                                            >
                                              51<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-odd"
                                              className="label--4170d"
                                              data-stats-id="odd"
                                              style={{ height: "51%" }}
                                            >
                                              <p>ODD</p>
                                            </div>
                                          </li>
                                          <li
                                            className="item--3a4a2"
                                            data-role="low-risk-statistics"
                                          >
                                            <div
                                              className="value--f5b49"
                                              data-role="percent-value"
                                              data-role-value={48}
                                            >
                                              48<small>%</small>
                                            </div>
                                            <div
                                              data-role="bet-from19to36"
                                              className="label--4170d"
                                              data-stats-id="from19to36"
                                              style={{ height: "48%" }}
                                            >
                                              <p>19–36</p>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="slider--cfe9b">
                                <div className="statisticsSlider--aecbf">
                                  <div className="label--18169">
                                    LAST 500 ROUNDS
                                  </div>
                                  <div className="container--7c740">
                                    <div
                                      className="slider--3afbd"
                                      data-role="slider"
                                      data-value={1}
                                      style={{ "--slider-value": "100%" }}
                                    >
                                      <div className="track--d198b">
                                        <div
                                          className="moveArea--75e4e"
                                          data-interactive="true"
                                        >
                                          <div
                                            className="fill--2d55a"
                                            data-role="fill"
                                          >
                                            <div
                                              className="handle--31b00"
                                              data-role="handle"
                                            >
                                              <div className="handleCircle--1553b" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="counter--eaccb">500</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {tab === "last-500" && (
                          <div
                            className="active--f0a91 muteAnimation--3f915"
                            data-role="tab-content-item"
                          >
                            <div className="body--036f5 mobile--55584 portrait--6c7b2">
                              <div>
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      ".statisticsBranding_red { color: #B51C12; }.statisticsBranding_red.hovered-recent-number,.statisticsBranding_red.statisticsBranding_first { color: #F9E1CC; }.statisticsBranding_red.hovered-recent-number::before,.statisticsBranding_red.statisticsBranding_first::before { background:#B51C12; }.statisticsBranding_green { color: #166958; }.statisticsBranding_green.hovered-recent-number,.statisticsBranding_green.statisticsBranding_first { color: #F9E1CC; }.statisticsBranding_green.hovered-recent-number::before,.statisticsBranding_green.statisticsBranding_first::before { background:#166958; }.statisticsBranding_black { color: #F9E1CC; }.statisticsBranding_black.hovered-recent-number,.statisticsBranding_black.statisticsBranding_first { color: #F9E1CC; }.statisticsBranding_placeholder { color: #F9E1CC; }.statisticsBranding_firstDoubleBall { border-color: #F9E1CC; }.statisticsBranding_first::before { border-color: #F9E1CC; }.statisticsBranding_placeholder:first-child { border-color: #F9E1CC; }",
                                  }}
                                />
                                <div className="numbers--ca008 recent-number--d9e03">
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-13"
                                      className="single-number--4bb7d black--6d68f statisticsBranding_first align-middle--4c85a first--1cb2f statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">13</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-25"
                                      className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">25</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-17"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">17</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-33"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">33</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-35"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">35</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-9"
                                      className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">9</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-2"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">2</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-21"
                                      className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">21</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-26"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">26</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-15"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">15</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-5"
                                      className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">5</span>
                                    </div>
                                  </div>
                                  <div
                                    className="number-container--8752e recent-number--7cf3a"
                                    data-role="recent-number"
                                  >
                                    <div
                                      data-role="number-22"
                                      className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                    >
                                      <span className="value--dd5c7">22</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="scrollableWrapper--5f159">
                                <div className="scrollable--ae7ec overflow-touch-enabled--9779a">
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        ".statisticsBranding_red { color: #B51C12; }.statisticsBranding_red.hovered-recent-number,.statisticsBranding_red.statisticsBranding_first { color: #F9E1CC; }.statisticsBranding_red.hovered-recent-number::before,.statisticsBranding_red.statisticsBranding_first::before { background:#B51C12; }.statisticsBranding_green { color: #166958; }.statisticsBranding_green.hovered-recent-number,.statisticsBranding_green.statisticsBranding_first { color: #F9E1CC; }.statisticsBranding_green.hovered-recent-number::before,.statisticsBranding_green.statisticsBranding_first::before { background:#166958; }.statisticsBranding_black { color: #F9E1CC; }.statisticsBranding_black.hovered-recent-number,.statisticsBranding_black.statisticsBranding_first { color: #F9E1CC; }.statisticsBranding_placeholder { color: #F9E1CC; }.statisticsBranding_firstDoubleBall { border-color: #F9E1CC; }.statisticsBranding_first::before { border-color: #F9E1CC; }.statisticsBranding_placeholder:first-child { border-color: #F9E1CC; }",
                                    }}
                                  />
                                  <div className="numbers--ca008 statistics--c4d2d">
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-8"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">8</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-2"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">2</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-24"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">24</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-18"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">18</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-35"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">35</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-31"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">31</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-7"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">7</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-35"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">35</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-2"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">2</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-14"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">14</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-19"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">19</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-24"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">24</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-29"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">29</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-35"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">35</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-2"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">2</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-19"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">19</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-4"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">4</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-1"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">1</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-23"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">23</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-8"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">8</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-21"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">21</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-20"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">20</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-20"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">20</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-0"
                                        className="single-number--4bb7d green--3a325 align-middle--4c85a statisticsBranding_green phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">0</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-4"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">4</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-36"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">36</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-18"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">18</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-21"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">21</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-0"
                                        className="single-number--4bb7d green--3a325 align-middle--4c85a statisticsBranding_green phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">0</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-14"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">14</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-4"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">4</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-35"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">35</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-21"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">21</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-36"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">36</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-29"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">29</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-36"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">36</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-21"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">21</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-3"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">3</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-14"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">14</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-4"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">4</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-14"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">14</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-35"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">35</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-31"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">31</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-8"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">8</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-7"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">7</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-18"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">18</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-19"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">19</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-3"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">3</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-22"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">22</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-23"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">23</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-0"
                                        className="single-number--4bb7d green--3a325 align-middle--4c85a statisticsBranding_green phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">0</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-23"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">23</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-29"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">29</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-1"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">1</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-24"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">24</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-36"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">36</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-31"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">31</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-24"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">24</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-2"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">2</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-3"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">3</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-2"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">2</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-1"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">1</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-0"
                                        className="single-number--4bb7d green--3a325 align-middle--4c85a statisticsBranding_green phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">0</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-19"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">19</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-31"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">31</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-8"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">8</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-22"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">22</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-3"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">3</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-14"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">14</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-24"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">24</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-36"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">36</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-23"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">23</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-29"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">29</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-31"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">31</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-7"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">7</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-7"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">7</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-30"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">30</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-29"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">29</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-3"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">3</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-31"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">31</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-30"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">30</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-29"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">29</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-30"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">30</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-19"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">19</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-29"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">29</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-0"
                                        className="single-number--4bb7d green--3a325 align-middle--4c85a statisticsBranding_green phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">0</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-18"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">18</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-23"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">23</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-1"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">1</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-20"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">20</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-18"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">18</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-22"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">22</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-31"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">31</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-31"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">31</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-4"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">4</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-19"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">19</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-19"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">19</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-3"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">3</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-23"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">23</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-3"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">3</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-7"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">7</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-4"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">4</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-21"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">21</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-1"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">1</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-19"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">19</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-30"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">30</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-21"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">21</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-0"
                                        className="single-number--4bb7d green--3a325 align-middle--4c85a statisticsBranding_green phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">0</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-1"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">1</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-22"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">22</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-18"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">18</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-14"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">14</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-8"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">8</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-7"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">7</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-20"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">20</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-30"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">30</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-29"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">29</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-0"
                                        className="single-number--4bb7d green--3a325 align-middle--4c85a statisticsBranding_green phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">0</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-7"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">7</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-0"
                                        className="single-number--4bb7d green--3a325 align-middle--4c85a statisticsBranding_green phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">0</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-21"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">21</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-18"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">18</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-0"
                                        className="single-number--4bb7d green--3a325 align-middle--4c85a statisticsBranding_green phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">0</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-8"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">8</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-19"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">19</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-30"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">30</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-18"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">18</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-1"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">1</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-36"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">36</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-21"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">21</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-14"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">14</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-35"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">35</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-0"
                                        className="single-number--4bb7d green--3a325 align-middle--4c85a statisticsBranding_green phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">0</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-8"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">8</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-7"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">7</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-8"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">8</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-35"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">35</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-31"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">31</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-30"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">30</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-8"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">8</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-8"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">8</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-2"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">2</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-4"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">4</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-3"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">3</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-36"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">36</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-4"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">4</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-2"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">2</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-29"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">29</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-10"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">10</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-7"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">7</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-22"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">22</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-20"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">20</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-24"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">24</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-35"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">35</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-19"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">19</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-29"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">29</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-4"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">4</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-29"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">29</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-21"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">21</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-8"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">8</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-31"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">31</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-35"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">35</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-0"
                                        className="single-number--4bb7d green--3a325 align-middle--4c85a statisticsBranding_green phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">0</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-22"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">22</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-21"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">21</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-8"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">8</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-24"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">24</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-36"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">36</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-35"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">35</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-19"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">19</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-36"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">36</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-24"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">24</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-7"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">7</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-2"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">2</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-35"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">35</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-23"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">23</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-36"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">36</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-24"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">24</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-2"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">2</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-2"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">2</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-36"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">36</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-20"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">20</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-0"
                                        className="single-number--4bb7d green--3a325 align-middle--4c85a statisticsBranding_green phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">0</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-4"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">4</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-9"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">9</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-32"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">32</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-31"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">31</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-5"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">5</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-24"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">24</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-35"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">35</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-36"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">36</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-4"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">4</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-33"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">33</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-2"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">2</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-30"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">30</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-12"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">12</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-13"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">13</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-27"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">27</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-21"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">21</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-17"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">17</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-23"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">23</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-29"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">29</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-16"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">16</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-6"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">6</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-18"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">18</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-7"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">7</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-24"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">24</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-3"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">3</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-23"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">23</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-34"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">34</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-15"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">15</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-26"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">26</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-3"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">3</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-21"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">21</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-14"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">14</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-1"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">1</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-11"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">11</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-19"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">19</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-25"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">25</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-28"
                                        className="single-number--4bb7d black--6d68f align-middle--4c85a statisticsBranding_black phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">28</span>
                                      </div>
                                    </div>
                                    <div
                                      className="number-container--8752e statistics--b39ce"
                                      data-role="statistics"
                                    >
                                      <div
                                        data-role="number-30"
                                        className="single-number--4bb7d red--e421d align-middle--4c85a statisticsBranding_red phone--5b459 mobile--4d9e5"
                                      >
                                        <span className="value--dd5c7">30</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="slider--cfe9b">
                                <div className="statisticsSlider--aecbf">
                                  <div className="label--18169">
                                    LAST 500 ROUNDS
                                  </div>
                                  <div className="container--7c740">
                                    <div
                                      className="slider--3afbd"
                                      data-role="slider"
                                      data-value={1}
                                      style={{ "--slider-value": "100%" }}
                                    >
                                      <div className="track--d198b">
                                        <div
                                          className="moveArea--75e4e"
                                          data-interactive="true"
                                        >
                                          <div
                                            className="fill--2d55a"
                                            data-role="fill"
                                          >
                                            <div
                                              className="handle--31b00"
                                              data-role="handle"
                                            >
                                              <div className="handleCircle--1553b" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="counter--eaccb">500</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
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

export default Statistics;
