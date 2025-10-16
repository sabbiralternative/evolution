import Home from "../pages/Home/Home";
import Casino from "../pages/Casino/Casino";
import Originals from "../pages/Casino/Originals";
import FastGames from "../pages/Casino/FastGames";
import LuckySevenA from "../pages/Games/LuckySevenA/LuckySevenA";
import DragonTiger from "../pages/Games/DragonTiger/DragonTiger";
import Baccarat from "../pages/Games/Baccarat/Baccarat";
import AmarAkbarAnthonyA from "../pages/Games/AmarAkbarAnthonyA/AmarAkbarAnthonyA";
import Roullete from "../pages/Games/Roullete/Roullete";
import Muflis from "../pages/Games/Muflis/Muflis";
import LightningDice from "../pages/Games/LightningDice/LightningDice";
import DreamCatcher from "../pages/Games/DreamCatcher/DreamCatcher";
import FootballDice from "../pages/Games/FoolballDice/FootballDice";
import FootballStudio from "../pages/Games/FoolballStudio/FootballStudio";
import SuperColor from "../pages/Games/SuperColor/SuperColor";
import War from "../pages/Games/War/War";
import ImperialQuest from "../pages/Games/ImperialQuest/ImperialQuest";
import DragonTigerPhoenix from "../pages/Games/DragonTigerPhoenix/DragonTigerPhoenix";
import BollywoodThumbnail from "../pages/Casino/Bollywood";
import Teenpatti from "../pages/Casino/Teenpatti";
import LuckySevenB from "../pages/Games/LuckySevenB/LuckySevenB";
import LuckySevenC from "../pages/Games/LuckySevenC/LuckySevenC";
import AmarAkbarAnthonyB from "../pages/Games/AmarAkbarAnthonyB/AmarAkbarAnthonyB";
import BollywoodA from "../pages/Games/BollywoodA/BollywoodA";
import BollywoodB from "../pages/Games/BollywoodB/BollywoodB";
import Roulette from "../pages/Casino/Roulette";
import TwoCardsTP from "../pages/Games/TwoCardsTP/TwoCardsTP";

export const mobileRoutes = [
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
    path: "/bollywood",
    element: <BollywoodThumbnail />,
  },
  {
    path: "/teenpatti",
    element: <Teenpatti />,
  },
  {
    path: "/roulette",
    element: <Roulette />,
  },
  {
    path: "/game/lucky7a/:eventTypeId/:eventId",
    element: <LuckySevenA />,
  },
  {
    path: "/game/lucky7b/:eventTypeId/:eventId",
    element: <LuckySevenB />,
  },
  {
    path: "/game/lucky7c/:eventTypeId/:eventId",
    element: <LuckySevenC />,
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
    path: "/game/aaaa/:eventTypeId/:eventId",
    element: <AmarAkbarAnthonyA />,
  },
  {
    path: "/game/aaab/:eventTypeId/:eventId",
    element: <AmarAkbarAnthonyB />,
  },
  {
    path: "/game/bcasinoa/:eventTypeId/:eventId",
    element: <BollywoodA />,
  },
  {
    path: "/game/bcasinob/:eventTypeId/:eventId",
    element: <BollywoodB />,
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
    path: "/game/footballdice/:eventTypeId/:eventId",
    element: <FootballDice />,
  },
  {
    path: "/game/footballstudio/:eventTypeId/:eventId",
    element: <FootballStudio />,
  },
  {
    path: "/game/2cardstp/:eventTypeId/:eventId",
    element: <TwoCardsTP />,
  },
  {
    path: "/game/supercolor/:eventTypeId/:eventId",
    element: <SuperColor />,
  },
  {
    path: "/game/war/:eventTypeId/:eventId",
    element: <War />,
  },
  {
    path: "/game/imperialquest/:eventTypeId/:eventId",
    element: <ImperialQuest />,
  },
  {
    path: "/game/dtp/:eventTypeId/:eventId",
    element: <DragonTigerPhoenix />,
  },
];
