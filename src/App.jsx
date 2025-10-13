import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Settings } from "./api";
import { useDispatch } from "react-redux";
import disableDevtool from "disable-devtool";
import { logout } from "./redux/features/auth/authSlice";
import { setDeviseHeight } from "./redux/features/global/globalSlice";
import DesktopLayout from "./layout/DesktopLayout";
import MobileLayout from "./layout/MobileLayout";

function App() {
  const [deviseWidth, setDeviceWidth] = useState(window.innerWidth);
  const disabledDevtool = Settings.disabledDevtool;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            dispatch(logout());
            window.location.href = "https://www.google.com/";
          }
        },
      });
    }
  }, [navigate, disabledDevtool, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setDeviseHeight(window.innerHeight));
      setDeviceWidth(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const handleFullScreen = () => {
    if (!window.origin.includes("localhost")) {
      document.body.requestFullscreen();
    }
  };

  return (
    <div onClick={handleFullScreen}>
      {deviseWidth > 786 ? <DesktopLayout /> : <MobileLayout />}
    </div>
  );
}

export default App;
