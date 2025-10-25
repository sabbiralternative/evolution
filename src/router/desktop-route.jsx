import Casino from "../pages/Desktop/Casino/Casino";
import FastGames from "../pages/Desktop/Casino/FastGames";
import Originals from "../pages/Desktop/Casino/Originals";
import AmarAkbarAnthonyA from "../pages/Desktop/Games/AmarAkbarAnthonyA/AmarAkbarAnthonyA";
import Baccarat from "../pages/Desktop/Games/Baccarat/Baccarat";
import BollywoodA from "../pages/Desktop/Games/BollywoodA/BollywoodA";
import DragonTiger from "../pages/Desktop/Games/DragonTiger/DragonTiger";
import DragonTigerPhoenix from "../pages/Desktop/Games/DragonTigerPhoenix/DragonTigerPhoenix";
import FootballDice from "../pages/Desktop/Games/FoolballDice/FootballDice";
import FootballStudio from "../pages/Desktop/Games/FoolballStudio/FootballStudio";
import ImperialQuest from "../pages/Desktop/Games/ImperialQuest/ImperialQuest";
import LuckySevenA from "../pages/Desktop/Games/LuckySevenA/LuckySevenA";
import Muflis from "../pages/Desktop/Games/Muflis/Muflis";
import Roullete from "../pages/Desktop/Games/Roullete/Roullete";
import SuperColor from "../pages/Desktop/Games/SuperColor/SuperColor";
import War from "../pages/Desktop/Games/War/War";
import Home from "../pages/Desktop/Home/Home";
import BollywoodThumbnail from "../pages/Desktop/Casino/Bollywood";
import Teenpatti from "../pages/Desktop/Casino/Teenpatti";
import LuckySevenB from "../pages/Desktop/Games/LuckySevenB/LuckySevenB";
import LuckySevenC from "../pages/Desktop/Games/LuckySevenC/LuckySevenC";
import AmarAkbarAnthonyB from "../pages/Desktop/Games/AmarAkbarAnthonyB/AmarAkbarAnthonyB";
import BollywoodB from "../pages/Desktop/Games/BollywoodB/BollywoodB";
import Roulette from "../pages/Desktop/Casino/Roulette";
import TwoCardsTP from "../pages/Desktop/Games/TwoCardsTP/TwoCardsTP";
import LuckySixA from "../pages/Desktop/Games/LuckySixA/LuckySixA";
import TeenTwenty from "../pages/Desktop/Games/TeenTwenty/TeenTwenty";
import OneDayTeen from "../pages/Desktop/Games/OneDayTeen/OneDayTeen";
import ThreeCardJudgement from "../pages/Desktop/Games/ThreeCardJudgement/ThreeCardJudgement";

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
    path: "/game/lucky6a/:eventTypeId/:eventId",
    element: <LuckySixA />,
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
    element: <TeenTwenty />,
  },
  {
    path: "/game/teen/:eventTypeId/:eventId",
    element: <OneDayTeen />,
  },
  {
    path: "/game/footballdice/:eventTypeId/:eventId",
    element: <FootballDice />,
  },
  {
    path: "/game/2cardstp/:eventTypeId/:eventId",
    element: <TwoCardsTP />,
  },
  {
    path: "/game/footballstudio/:eventTypeId/:eventId",
    element: <FootballStudio />,
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
  {
    path: "/game/3cardjudgement/:eventTypeId/:eventId",
    element: <ThreeCardJudgement />,
  },
];
