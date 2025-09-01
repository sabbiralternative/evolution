import { Outlet } from "react-router-dom";
import NotUsing from "../component/UI/NotUsing";
import Header from "../component/UI/Header";
import ScrollableTab from "../component/UI/ScrollableTab";
import Footer from "../component/UI/Footer";

const MainLayout = () => {
  return (
    <div
      id="root"
      className="rootContainer--308ad"
      style={{ overflow: "auto", zIndex: 99 }}
    >
      <div>
        <NotUsing />
        <div className>
          <div className="DrawerBackground--13365">
            <div className="Root--ee70b" id="lobby-root">
              <div className="Content--2ceeb">
                <Header />
                <ScrollableTab />
                <Outlet />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
