import { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/UI/Header";
import Footer from "../component/UI/Footer";
import ScrollableTab from "../component/UI/ScrollableTab";
import Search from "../component/UI/Search/Search";
import NotUsing from "../component/UI/NotUsing";

const MobileLayout = () => {
  const location = useLocation();
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("Root--f3edc");

    const body = document.body;

    body.classList.add("phone", "ios", "browser", "iframe", "fullscreen");

    body.style.setProperty("--root-size", "10px");
    body.style.setProperty("--rem-migration-size", "10px");
    body.style.setProperty("--size", "10px");
    body.style.fontSize = "10px";
    body.style.height = "100%";
  }, []);
  const [showSearch, setShowSearch] = useState(false);
  return !showSearch ? (
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
                {!location.pathname.includes("/game") && (
                  <Fragment>
                    <Header setShowSearch={setShowSearch} />
                    <ScrollableTab />
                  </Fragment>
                )}

                <Outlet />
                {!location.pathname.includes("/game") && <Footer />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Search setShowSearch={setShowSearch} />
  );
};

export default MobileLayout;
