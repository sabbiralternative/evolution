import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Casino from "../pages/Casino/Casino";
import Originals from "../pages/Casino/Originals";
import FastGames from "../pages/Casino/FastGames";
import LuckySeven from "../pages/Games/LuckySeven/LuckySeven";
import DragonTiger from "../pages/Games/DragonTiger/DragonTiger";

export const router = createBrowserRouter(
  [
    {
      path: "/",

      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/:token",
          element: <Auth />,
        },
        {
          path: "/casino",
          element: <Casino />,
        },
        {
          path: "/originals",
          element: <Originals />,
        },
        {
          path: "/fast-games",
          element: <FastGames />,
        },
        {
          path: "/game/lucky7/:eventTypeId/:eventId",
          element: <LuckySeven />,
        },
        {
          path: "/game/dt20/:eventTypeId/:eventId",
          element: <DragonTiger />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
