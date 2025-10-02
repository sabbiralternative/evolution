import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const MobileLayout = () => {
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
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MobileLayout;
