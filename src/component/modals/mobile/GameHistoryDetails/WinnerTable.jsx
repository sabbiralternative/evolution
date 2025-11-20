import { Fragment } from "react";
import LuckySeven from "../../../shared/WinnerTable/LuckySeven";
import PlayerAB from "../../../shared/WinnerTable/PlayerAB";
import ThreeCardJudgement from "../../../shared/WinnerTable/ThreeCardJudgement";
import CenterCard from "../../../shared/WinnerTable/CenterCard";
import PlayerABC from "../../../shared/WinnerTable/PlayerABC";

const WinnerTable = ({ data, eventId }) => {
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
        eventId == "30004") && <LuckySeven data={data} size="30px" />}
      {/* Dragon Tiger = 20001 */}
      {eventId == "20001" && (
        <PlayerAB data={data} player_a="Dragon" player_b="Tiger" size="30px" />
      )}
      {/* War = 20002 */}
      {eventId == "20002" && (
        <PlayerAB data={data} player_a="Player" player_b="Dealer" size="30px" />
      )}
      {/* Mogambo = 30002 */}
      {eventId == "30002" && (
        <PlayerAB
          data={data}
          player_a="Daga/Teja"
          player_b="Mogambo"
          size="30px"
        />
      )}
      {/* Teen Patti T20  = 60001 */}
      {eventId == "60001" && (
        <PlayerAB
          data={data}
          player_a="Player A"
          player_b="Player B"
          size="30px"
        />
      )}
      {/* 2 Cards Teen Patti = 40001 */}
      {eventId == "40001" && (
        <PlayerAB
          data={data}
          player_a="Player A"
          player_b="Player B"
          size="30px"
        />
      )}
      {/* 29 cards baccarat  = 60003 */}
      {eventId == "60003" && (
        <PlayerAB
          data={data}
          player_a="Player A"
          player_b="Player B"
          size="30px"
        />
      )}
      {/* 3 Card Judgement = 30001 */}
      {eventId == "30001" && <ThreeCardJudgement data={data} size="30px" />}
      {/* 3 Card Judgement = 30001 */}
      {eventId == "30003" && <CenterCard data={data} size="30px" />}
      {/*       Dragon Tiger Pheonix = 30005, */}
      {eventId == "30005" && (
        <PlayerABC
          data={data}
          player_a="Dragon"
          player_b="Tiger"
          player_c="Phoenix"
          size="30px"
        />
      )}
    </Fragment>
  );
};

export default WinnerTable;
