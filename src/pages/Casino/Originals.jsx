import CasinoThumbnail from "../../component/UI/CasinoThumbnails";
import Footer from "../../component/UI/Footer";
import Header from "../../component/UI/Header";
import NotUsing from "../../component/UI/NotUsing";
import ScrollableTab from "../../component/UI/ScrollableTab";

const Originals = () => {
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
                <CasinoThumbnail title="Originals" id="originals" />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Originals;
