import { Fragment } from "react";
import LuckySeven from "../../../shared/WinnerTable/LuckySeven";
import PlayerAB from "../../../shared/WinnerTable/PlayerAB";
import ThreeCardJudgement from "../../../shared/WinnerTable/ThreeCardJudgement";
import CenterCard from "../../../shared/WinnerTable/CenterCard";
import PlayerABC from "../../../shared/WinnerTable/PlayerABC";

const GameHistoryWinnerTable = ({ data, eventId }) => {
  console.log(eventId);
  return (
    <Fragment>
      {/* Lucky Seven = 10001,10002,10003,
      Amar Akbar Anthony = 10004,10005,10006, 
      Matka = 30004,  

      
      */}
      {(eventId == "10001" ||
        eventId == "10002" ||
        eventId == "10003" ||
        eventId == "10004" ||
        eventId == "10005" ||
        eventId == "10006" ||
        eventId == "30004") && <LuckySeven data={data} />}
      {/* Dragon Tiger = 20001 */}
      {eventId == "20001" && (
        <PlayerAB data={data} player_a="Dragon" player_b="Tiger" size="50px" />
      )}
      {/* War = 20002 */}
      {eventId == "20002" && (
        <PlayerAB data={data} player_a="Player" player_b="Dealer" size="50px" />
      )}
      {/* Mogambo = 30002 */}
      {eventId == "30002" && (
        <PlayerAB
          data={data}
          player_a="Daga/Teja"
          player_b="Mogambo"
          size="50px"
        />
      )}
      {/* Teen Patti T20  = 60001 */}
      {eventId == "60001" && (
        <PlayerAB
          data={data}
          player_a="Player A"
          player_b="Player B"
          size="50px"
        />
      )}
      {/* 2 Cards Teen Patti = 40001 */}
      {eventId == "40001" && (
        <PlayerAB
          data={data}
          player_a="Player A"
          player_b="Player B"
          size="50px"
        />
      )}
      {/* 29 cards baccarat  = 60003 */}
      {eventId == "60003" && (
        <PlayerAB
          data={data}
          player_a="Player A"
          player_b="Player B"
          size="50px"
        />
      )}
      {/* 3 Card Judgement = 30001 */}
      {eventId == "30001" && <ThreeCardJudgement data={data} size="50px" />}
      {/* 3 Card Judgement = 30001 */}
      {eventId == "30003" && <CenterCard data={data} size="50px" />}
      {/*       Dragon Tiger Pheonix = 30005, */}
      {eventId == "30005" && (
        <PlayerABC
          data={data}
          player_a="Dragon"
          player_b="Tiger"
          player_c="Phoenix"
          size="50px"
        />
      )}
    </Fragment>
  );
};

export default GameHistoryWinnerTable;
