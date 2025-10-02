import { useState } from "react";
import CasinoThumbnail from "../../component/UI/CasinoThumbnails";
import Footer from "../../component/UI/Footer";
import Header from "../../component/UI/Header";
import NotUsing from "../../component/UI/NotUsing";
import ScrollableTab from "../../component/UI/ScrollableTab";
import Search from "../../component/UI/Search/Search";

const FastGames = () => {
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
                <Header setShowSearch={setShowSearch} />
                <ScrollableTab />
                <CasinoThumbnail title="Fast Games" id="fast" column={2} />
                <Footer />
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

export default FastGames;
