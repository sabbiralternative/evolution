import Navbar from "../../../component/UI/Header";
import Footer from "../../../component/UI/Footer";
import ScrollableTab from "../../../component/UI/ScrollableTab";
import CasinoThumbnail from "../../../component/UI/CasinoThumbnails";

const Teenpatti = () => {
  return (
    <div
      id="root"
      className="rootContainer--308ad"
      style={{ overflow: "auto", zIndex: 99 }}
    >
      <div>
        <div className="customScroll--56dbd">
          <div className="ModalBackground--91107">
            <div className="Root--ee70b" id="lobby-root">
              <div className="Content--2ceeb">
                <Navbar />
                <ScrollableTab />
                <main className="InnerContent--56377">
                  <CasinoThumbnail
                    id="teenpatti"
                    title="Teenpatti"
                    column={5}
                  />
                  <div
                    data-role="inner-content"
                    aria-hidden="true"
                    className="ContentEndAnchor--71cf3"
                  />
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teenpatti;
