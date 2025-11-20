import { usePlaySound } from "../../../../hooks/playSound";

const Header = ({ setTab, data, closeModal }) => {
  const { playClickSound } = usePlaySound();
  return (
    <div
      className="headerContainer--74784 header--bbb34"
      data-role="header-container"
    >
      <div
        onClick={() => {
          setTab("menu");
          playClickSound();
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
                <div data-role="title-text" className="titleText--44453">
                  {data?.result?.game_details?.table}
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
  );
};

export default Header;
