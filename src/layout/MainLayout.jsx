import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setDeviseHeight } from "../redux/features/global/globalSlice";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setDeviseHeight(window.innerHeight));
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const handleFullScreen = () => {
    // document.body.requestFullscreen();
  };

  return (
    <div onClick={handleFullScreen}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
