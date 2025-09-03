import { useSelector } from "react-redux";

const Footer = ({ removeMargin }) => {
  const { balance } = useSelector((state) => state.auth);
  return (
    <footer
      className="RootFooter--703a2"
      style={{ marginTop: removeMargin ? "0px" : "16px" }}
    >
      <div className="RootFooterPanel--bccf1" data-role="footer-panel">
        <div className="RootFooterPanelLeftBlock--edbdc">
          <span
            className="Typography--d2c9a Typography_xs_subtitle1--6fd5e Typography_md_h6--9d8db colorPrimary--f2f02"
            data-role="typography"
          >
            Balance:
          </span>
          <span
            className="Typography--d2c9a Typography_xs_subtitle2--d8518 Typography_md_subtitle1--a027c bold--d200f colorAccent--465da"
            data-role="footer-balance"
          >
            ⁦⁦₹⁩{balance}⁩
          </span>
        </div>
        <div className="RootFooterPanelRightBlock--35c46">
          <div className="LobbyIcon--67f66 LobbyIcon_xs_tiny--3e71a">
            <svg
              data-role="user"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <use xlinkHref="#user" />
            </svg>
          </div>
          <span
            className="Typography--d2c9a Typography_xs_subtitle2--d8518 Typography_md_subtitle1--a027c bold--d200f colorPrimary--f2f02"
            data-role="typography"
          >
            66,654
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
