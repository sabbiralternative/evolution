import Casino from "../pages/Desktop/Casino/Casino";
import FastGames from "../pages/Desktop/Casino/FastGames";
import Originals from "../pages/Desktop/Casino/Originals";
import Home from "../pages/Desktop/Home/Home";

export const desktopRoutes = [
  {
    index: true,
    element: <Home />,
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
  //   {
  //     path: "/game/lucky7/:eventTypeId/:eventId",
  //     element: <LuckySeven />,
  //   },
  //   {
  //     path: "/game/dt20/:eventTypeId/:eventId",
  //     element: <DragonTiger />,
  //   },
  //   {
  //     path: "/game/baccarat/:eventTypeId/:eventId",
  //     element: <Baccarat />,
  //   },
  //   {
  //     path: "/game/aaa/:eventTypeId/:eventId",
  //     element: <AmarAkbarAnthony />,
  //   },
  //   {
  //     path: "/game/btable/:eventTypeId/:eventId",
  //     element: <Bollywood />,
  //   },
  //   {
  //     path: "/game/roulette/:eventTypeId/:eventId",
  //     element: <Roullete />,
  //   },
  //   {
  //     path: "/game/teenmuf/:eventTypeId/:eventId",
  //     element: <Muflis />,
  //   },
  //   {
  //     path: "/game/teen20/:eventTypeId/:eventId",
  //     element: <DreamCatcher />,
  //   },
  //   {
  //     path: "/game/teen/:eventTypeId/:eventId",
  //     element: <LightningDice />,
  //   },
  //   {
  //     path: "/game/football-dice/:eventTypeId/:eventId",
  //     element: <FootballDice />,
  //   },
  //   {
  //     path: "/game/football-studio/:eventTypeId/:eventId",
  //     element: <FootballStudio />,
  //   },
  //   {
  //     path: "/game/super-color/:eventTypeId/:eventId",
  //     element: <SuperColor />,
  //   },
  //   {
  //     path: "/game/war/:eventTypeId/:eventId",
  //     element: <War />,
  //   },
  //   {
  //     path: "/game/imperial-quest/:eventTypeId/:eventId",
  //     element: <ImperialQuest />,
  //   },
  //   {
  //     path: "/game/dragon-tiger-phoenix/:eventTypeId/:eventId",
  //     element: <DragonTigerPhoenix />,
  //   },
];
