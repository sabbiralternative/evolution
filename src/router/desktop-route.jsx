import Casino from "../pages/Desktop/Casino/Casino";
import FastGames from "../pages/Desktop/Casino/FastGames";
import Originals from "../pages/Desktop/Casino/Originals";
import AmarAkbarAnthony from "../pages/Desktop/Games/AmarAkbarAnthony/AmarAkbarAnthony";
import Baccarat from "../pages/Desktop/Games/Baccarat/Baccarat";
import Bollywood from "../pages/Desktop/Games/Bollywood/Bollywood";
import DragonTiger from "../pages/Desktop/Games/DragonTiger/DragonTiger";
import DragonTigerPhoenix from "../pages/Desktop/Games/DragonTigerPhoenix/DragonTigerPhoenix";
import DreamCatcher from "../pages/Desktop/Games/DreamCatcher/DreamCatcher";
import FootballDice from "../pages/Desktop/Games/FoolballDice/FootballDice";
import FootballStudio from "../pages/Desktop/Games/FoolballStudio/FootballStudio";
import ImperialQuest from "../pages/Desktop/Games/ImperialQuest/ImperialQuest";
import LightningDice from "../pages/Desktop/Games/LightningDice/LightningDice";
import LuckySeven from "../pages/Desktop/Games/LuckySeven/LuckySeven";
import Muflis from "../pages/Desktop/Games/Muflis/Muflis";
import Roullete from "../pages/Desktop/Games/Roullete/Roullete";
import SuperColor from "../pages/Desktop/Games/SuperColor/SuperColor";
import War from "../pages/Desktop/Games/War/War";
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
  {
    path: "/game/lucky7/:eventTypeId/:eventId",
    element: <LuckySeven />,
  },
  {
    path: "/game/dt20/:eventTypeId/:eventId",
    element: <DragonTiger />,
  },
  {
    path: "/game/baccarat/:eventTypeId/:eventId",
    element: <Baccarat />,
  },
  {
    path: "/game/aaa/:eventTypeId/:eventId",
    element: <AmarAkbarAnthony />,
  },
  {
    path: "/game/btable/:eventTypeId/:eventId",
    element: <Bollywood />,
  },
  {
    path: "/game/roulette/:eventTypeId/:eventId",
    element: <Roullete />,
  },
  {
    path: "/game/teenmuf/:eventTypeId/:eventId",
    element: <Muflis />,
  },
  {
    path: "/game/teen20/:eventTypeId/:eventId",
    element: <DreamCatcher />,
  },
  {
    path: "/game/teen/:eventTypeId/:eventId",
    element: <LightningDice />,
  },
  {
    path: "/game/football-dice/:eventTypeId/:eventId",
    element: <FootballDice />,
  },
  {
    path: "/game/football-studio/:eventTypeId/:eventId",
    element: <FootballStudio />,
  },
  {
    path: "/game/super-color/:eventTypeId/:eventId",
    element: <SuperColor />,
  },
  {
    path: "/game/war/:eventTypeId/:eventId",
    element: <War />,
  },
  {
    path: "/game/imperial-quest/:eventTypeId/:eventId",
    element: <ImperialQuest />,
  },
  {
    path: "/game/dragon-tiger-phoenix/:eventTypeId/:eventId",
    element: <DragonTigerPhoenix />,
  },
];
