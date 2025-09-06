import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  return token ? (
    children
  ) : (
    <div
      className="popupContainer--140f0 blocking--0ef8a highestPriority--13a6e"
      data-role="popup-container"
    >
      <div className="popupWrapper--f73e8">
        <div
          className="popup--36073 default--5d4ea sm--1a75d hidePointer--3c27e"
          data-role="popup"
          data-popup-id="inactivity"
        >
          <div className="contentWrapper--46f24">
            <div className="titleContainer--8de5b" data-role="title">
              SESSION EXPIRED
            </div>
            <div className="content--12cc9">
              <div className="wrapper--f4eb9" data-role="scrollable-wrapper">
                <div
                  data-role="scrollable"
                  className="scrollable--96151 vertical--99fcf"
                >
                  Your session has expired because you were inactive for too
                  long. Please return to the site to log in again.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute;
