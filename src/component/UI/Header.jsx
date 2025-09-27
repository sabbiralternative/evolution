import { useNavigate } from "react-router-dom";
import images from "../../assets/images";
import { playClick } from "../../utils/sound";
import { useSound } from "../../context/ApiProvider";

const Header = ({ setShowSearch }) => {
  const { sound } = useSound();
  const navigate = useNavigate();
  return (
    <div className="RootHeader--2f4b7" style={{ top: "0px" }}>
      <div className="RootHeaderContent--aa74c">
        <nav className="RootHeaderNavigation--1e61c">
          <button
            onClick={() => {
              navigate("/");
              if (sound) playClick();
            }}
            aria-label="Go to home page"
            className="Button--3be20 colorPrimary--5595c sizeMedium--7851e variantFlat--1131a RootHeaderNavigationLogo--e3878"
            data-role="casino-logo-button"
            type="button"
          >
            <div className="Logo--bbd01">
              <img src={images.logo} alt="casino-logo" />
            </div>
          </button>
        </nav>
        <div className="RootHeaderControls--2cdc1">
          <div className="MobileControls--82a5e">
            <button
              onClick={() => {
                setShowSearch(true);
                if (sound) playClick();
              }}
              aria-label="button"
              className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeMini--96400 variantText--5b2ec"
              data-role="search-mobile-button"
              type="button"
            >
              <div className="LobbyIcon--67f66 LobbyIcon_xs_reduced--aa91d">
                <svg
                  data-role="search"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <use xlinkHref="#search" />
                </svg>
              </div>
            </button>
            <button
              aria-label="button"
              className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeMini--96400 variantText--5b2ec"
              data-role="favourites-mobile-button"
              type="button"
            >
              <div className="LobbyIcon--67f66 LobbyIcon_xs_reduced--aa91d">
                <svg
                  data-role="favorite"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <use xlinkHref="#favorite" />
                </svg>
              </div>
            </button>
            <button
              aria-label="button"
              className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeMini--96400 variantText--5b2ec"
              data-role="menu-mobile-button"
              type="button"
            >
              <div className="LobbyIcon--67f66 LobbyIcon_xs_reduced--aa91d">
                <svg
                  data-role="menu"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <use xlinkHref="#menu" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
