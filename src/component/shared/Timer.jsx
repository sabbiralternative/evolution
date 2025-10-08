import { Fragment, useEffect } from "react";
import { Status } from "../../const";
import { useSound } from "../../context/ApiProvider";
import { SOUND } from "../../assets/sound";

const Timer = ({ firstEvent }) => {
  const { sound } = useSound();
  const status = firstEvent?.status;
  const timerDuration = firstEvent?.timerDuration;
  const lastUpdateTime = firstEvent?.lastUpdateTime;
  const utcMilliseconds = Date.now();
  const utcSeconds = Math.floor(utcMilliseconds / 1000);
  const timer = timerDuration - (utcSeconds - lastUpdateTime);

  useEffect(() => {
    if (timer < 4 && timer > 0) {
      if (sound) {
        new Audio(SOUND.timer_tick).play();
      }
    }
  }, [timer, sound]);

  return (
    <Fragment>
      {status === Status.SUSPENDED ? (
        <div className="traffic-light--b8484">
          <div className="box--28913">
            <div
              className="status--76267 red--7434c animate--3d687"
              data-role="status-bar"
            >
              <div
                className="background--1fbe1"
                data-role="status-bar-background"
              >
                <div className="fill--fdd99"></div>
              </div>
              <div className="text--264e2" data-role="status-text">
                <div className="backgroundContainer--6c7e1">BETS CLOSED</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="traffic-light--b8484">
          <div className="box--28913">
            <div
              className="status--76267 green--94fb8 animate--3d687"
              data-role="status-bar"
            >
              <div
                className="background--1fbe1"
                data-role="status-bar-background"
                style={{}}
              >
                <div className="fill--fdd99" style={{}} />
              </div>
              <div className="text--264e2" data-role="status-text">
                <div className="backgroundContainer--6c7e1">
                  PLACE YOUR BETS {timer > 0 && timer}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Timer;
