import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const DesktopLayout = () => {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--rem-migration-size", "7.9px");
    root.style.setProperty("--root-size", "7.526041666666666px");
    root.style.setProperty("--size", "9.526041666666666px");
    root.style.fontSize = "10.43125px";

    const body = document.body;

    body.classList.add("desktop", "SmartLobby--f42fc");
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DesktopLayout;
