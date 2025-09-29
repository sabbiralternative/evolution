import { useEffect, useState } from "react";
import { Status } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../redux/features/events/events";
import { setBalance } from "../../../redux/features/auth/authSlice";
import Stake from "../../../component/UI/Chip/Stake";
import { getBackPrice, isRunnerWinner } from "../../../utils/betSlip";
import StakeAnimation from "../../../component/UI/Chip/StakeAnimation";
import { cn } from "../../../utils/cn";
import images from "../../../assets/images";
import History from "./History";
import { playSuspendedSound } from "../../../utils/sound";
import { useSound } from "../../../context/ApiProvider";

const BetSlip = ({
  double,
  data,
  status,
  setStakeState,
  stakeState,
  setTotalWinAmount,
  setShowWinLossResult,
  animation,
  setAnimation,
  initialState,
}) => {
  const { sound } = useSound();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const dispatch = useDispatch();
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);
  const { balance } = useSelector((state) => state.auth);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    if (status === Status.OPEN) {
      const isRepeatTheBet = Object.values(stakeState).find(
        (item) => item?.selection_id && item?.show === false
      );
      if (isRepeatTheBet) {
        setStakeState(initialState);
      }
      // new Audio("/bet.mp3").play();
      const { key, data, dataIndex, runnerIndex, type } = payload;
      setAnimation([key]);
      const formatData = {
        marketId: data?.[dataIndex]?.marketId,
        roundId: data?.[dataIndex]?.roundId,
        name: data?.[dataIndex]?.name,
        eventId: data?.[dataIndex]?.eventId,
        eventName: data?.[dataIndex]?.eventName,
        selection_id: data?.[dataIndex]?.runners?.[runnerIndex]?.id,
        runner_name: data?.[dataIndex]?.runners?.[runnerIndex]?.name,
        isback: type === "back" ? 0 : 1,
        event_id: data?.[dataIndex]?.eventId,
        event_type_id: data?.[dataIndex]?.event_type_id,
        price: data?.[dataIndex]?.runners?.[runnerIndex]?.[type]?.[0]?.price,
      };
      const timeout = setTimeout(() => {
        setAnimation([]);
        setStakeState((prev) => {
          const maxSerial = Math.max(
            0,
            ...Object.values(prev)
              .map((item) => item.serial)
              .filter((serial) => serial !== undefined)
          );

          return {
            ...prev,
            [key]: {
              roundId: formatData?.roundId,
              name: formatData?.name,
              eventId: formatData?.eventId,
              eventName: formatData?.eventName,
              show: true,
              animation: false,
              stake: prev[key].show
                ? prev[key].stake + prev[key].actionBy
                : prev[key].stake,
              marketId: formatData?.marketId,
              selection_id: formatData?.selection_id,
              price: formatData?.price,
              runner_name: formatData?.runner_name,
              isback: formatData?.isback,
              serial: prev[key]?.serial ? prev[key]?.serial : maxSerial + 1,
              actionBy: stake,
              undo: [...(prev[key]?.undo || []), stake],
            },
          };
        });
      }, 500);

      return () => clearTimeout(timeout);
    }
  };

  // Reset state when status is OPEN
  useEffect(() => {
    if (status === Status.OPEN) {
      setStakeState((prev) => {
        const updatedState = { ...prev };
        Object.keys(updatedState).forEach((key) => {
          if (updatedState[key].show) {
            updatedState[key] = {
              ...updatedState[key],
              show: false,
            };
          }
        });
        return updatedState;
      });
    }
    if (showSuspendedWarning) {
      setTimeout(() => {
        setShowSuspendedWarning(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, showSuspendedWarning]);

  useEffect(() => {
    setStakeState((prev) => {
      const updatedState = {};
      for (const key in prev) {
        updatedState[key] = {
          ...prev[key],
          stake: prev[key].show ? prev[key].stake : stake,
          actionBy: stake,
        };
      }
      return updatedState;
    });
  }, [stake]); // Runs when stake value changes

  useEffect(() => {
    const filterPlacedBet = Object.values(stakeState).filter((bet) => bet.show);
    let payload = filterPlacedBet.map((bet) => ({
      roundId: bet?.roundId,
      name: bet?.name,
      eventId: bet?.eventId,
      eventName: bet?.eventName,
      marketId: bet?.marketId,
      selection_id: bet?.selection_id,
      runner_name: bet?.runner_name,
      stake: bet?.stake,
      isback: bet?.isback,
      price: bet?.price,
    }));

    if (status === Status.SUSPENDED && payload?.length > 0) {
      const handleOrder = async () => {
        const res = await addOrder(payload).unwrap();

        payload = [];
        if (res?.success) {
          setShowWinLossResult(false);
          setTotalWinAmount(null);

          let totalBets = [];
          let totalAmountPlaced = 0;

          for (let bet of filterPlacedBet) {
            totalAmountPlaced = totalAmountPlaced + bet?.stake;
            totalBets.push({
              selection_id: bet.selection_id,
              price: bet?.price,
              eventId: bet?.eventId,
              marketId: bet?.marketId,
              name: bet?.name,
              stake: bet?.stake,
            });
          }

          localStorage.setItem("totalBetPlace", JSON.stringify(totalBets));

          dispatch(setBalance(balance - parseFloat(totalAmountPlaced)));
          // setToast(res?.Message);
        }
      };
      handleOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addOrder, status]);

  const handleShowSuspendedStatus = () => {
    if (status === Status.SUSPENDED) {
      if (sound) {
        playSuspendedSound();
      }
      setShowSuspendedWarning(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="safeContainer--71c25 withBottomPadding--ffb27 hasExtraRoundedCorners--a605d">
      <div className="relativeChildren--99d54">
        <div className="bottomContainer--d97cd">
          <div className="cardsDealt--63d9c">
            <div
              className={`dealingCards--90934  ${
                status === Status.SUSPENDED ? "visible--11bf9" : ""
              }`}
              data-role="dealing-cards"
              style={{ "-scale": 1 }}
            >
              <div className="cardsContainer--92c23 dealer--b4892">
                <span className="title--43e67">CASINO</span>
                <div
                  className={`card--c9f29 ${
                    status === Status.SUSPENDED ? "visible--11bf9" : ""
                  }`}
                >
                  <span className="wrapper--9fd49" data-role="card-S2">
                    <span className="suit--2017b active--9b94f">
                      <svg
                        viewBox="0 0 180 250"
                        className="card--32433 black--f031a"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <use
                            xlinkHref="#card-background"
                            fill="url(#card-bg-light-default)"
                          />
                          <use
                            xlinkHref="#card-border"
                            fill="url(#card-border-default)"
                          />
                        </g>
                        <g>
                          <use
                            xlinkHref="#rank-2"
                            height={95}
                            x="57.413"
                            y={20}
                          />
                          <use
                            xlinkHref="#suit-S"
                            height={108}
                            x={48}
                            y={132}
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
              <div className="divider--0bb82" />
              <div
                className={`cardsContainer--92c23 player--80eec ${
                  status === Status.OPEN ? "highlight--b6838" : ""
                }`}
              >
                <div
                  className={`card--c9f29 ${
                    status === Status.SUSPENDED ? "visible--11bf9" : ""
                  }`}
                >
                  <span className="wrapper--9fd49" data-role="card-D7">
                    <span className="suit--2017b active--9b94f">
                      <svg
                        viewBox="0 0 180 250"
                        className="card--32433 red--db016"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <use
                            xlinkHref="#card-background"
                            fill="url(#card-bg-light-default)"
                          />
                          <use
                            xlinkHref="#card-border"
                            fill="url(#card-border-default)"
                          />
                        </g>
                        <g>
                          <use
                            xlinkHref="#rank-7"
                            height={95}
                            x="59.622"
                            y={20}
                          />
                          <use
                            xlinkHref="#suit-D"
                            height={108}
                            x={48}
                            y={132}
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
                <span className="title--43e67">PLAYER</span>
              </div>
            </div>
          </div>
          <div className="decisionBettorsContainer--b068b">
            <div
              className="hidden--6c351"
              style={{
                "-timein": "200ms",
                "-timeout": "500ms",
                "-delayin": "0ms",
                "-delayout": "0ms",
              }}
            />
          </div>
          <div
            className={`bettingGrid--fe61d ${
              status === Status.SUSPENDED ? "collapsed--d6439" : ""
            }`}
          >
            <div className="footerBettingGradient--54ac3" />
            <div
              className={`bettingGrid--c3f9e ${
                status === Status.SUSPENDED ? "collapsed--d6439" : ""
              }`}
              data-role="betting-grid"
              style={{ "-scale": 1 }}
            >
              <div
                className="main--9330c"
                data-role="main-spot"
                style={{ "-collapsedscale": "0.8" }}
              >
                <div
                  className="chipHolder--8e48b"
                  id="main-spot-multiplier-chip-holder"
                />
                <div
                  className={`betSpot--145f3 ${
                    status === Status.OPEN ? "enabled--d36d3" : ""
                  }`}
                  data-is-chip-visible="false"
                >
                  <div className="mainSpotIcon--73233">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="3.5 0.5 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M75.4165 10.206H31.7893C30.5901 10.206 29.483 10.8501 28.8912 11.8939L7.40514 49.787C6.82996 50.8019 6.82663 52.0444 7.39848 53.0616L28.4104 90.4572C29 91.5066 30.1104 92.1562 31.3141 92.1562H75.4931C76.6923 92.1562 77.7994 91.511 78.3912 90.4672L99.5952 53.0571C100.17 52.0422 100.173 50.7997 99.6019 49.7826L78.3213 11.905C77.7317 10.8557 76.6213 10.205 75.4176 10.205L75.4165 10.206Z"
                        fill="url(#paint6)"
                        fillOpacity="0.5"
                        className={`background--fa273 ${
                          status === Status.OPEN ? "active--96399" : ""
                        }`}
                      />
                      <path
                        d="M75.4165 10.206H31.7893C30.5901 10.206 29.483 10.8501 28.8912 11.8939L7.40514 49.787C6.82996 50.8019 6.82663 52.0444 7.39848 53.0616L28.4104 90.4572C29 91.5066 30.1104 92.1562 31.3141 92.1562H75.4931C76.6923 92.1562 77.7994 91.511 78.3912 90.4672L99.5952 53.0571C100.17 52.0422 100.173 50.7997 99.6019 49.7826L78.3213 11.905C77.7317 10.8557 76.6213 10.205 75.4176 10.205L75.4165 10.206Z"
                        fill="black"
                        fillOpacity="0.25"
                      />
                      <path
                        d="M75.4165 10.206H31.7893C30.5901 10.206 29.483 10.8501 28.8912 11.8938L7.40514 49.787C6.82996 50.8019 6.82663 52.0444 7.39848 53.0615L28.4104 90.4572C29 91.5065 30.1104 92.1561 31.3141 92.1561H75.4931C76.6924 92.1561 77.7994 91.5109 78.3912 90.4672L99.5952 53.0571C100.17 52.0422 100.173 50.7997 99.6019 49.7826L78.3213 11.9049C77.7317 10.8556 76.6213 10.2049 75.4176 10.2049L75.4165 10.206Z"
                        stroke="url(#paint0)"
                        strokeWidth="2.98584"
                      />
                      <path
                        d="M75.4165 10.206H31.7893C30.5901 10.206 29.483 10.8501 28.8912 11.8938L7.40514 49.787C6.82996 50.8019 6.82663 52.0444 7.39848 53.0615L28.4104 90.4572C29 91.5065 30.1104 92.1561 31.3141 92.1561H75.4931C76.6924 92.1561 77.7994 91.5109 78.3912 90.4672L99.5952 53.0571C100.17 52.0422 100.173 50.7997 99.6019 49.7826L78.3213 11.9049C77.7317 10.8556 76.6213 10.2049 75.4176 10.2049L75.4165 10.206Z"
                        stroke="url(#paint1)"
                        strokeWidth="2.98584"
                      />
                      <path
                        d="M78.972 91.7904L101.322 53.08C101.915 52.0529 101.917 50.7882 101.327 49.7589L79.1741 11.0618C78.5812 10.0247 77.4774 9.38623 76.2826 9.38623H31.3951C30.2048 9.38623 29.1055 10.0214 28.5104 11.0518L6.16486 49.7555C5.56969 50.786 5.56969 52.0562 6.16486 53.0867L28.5104 91.7904C29.1055 92.8209 30.2048 93.456 31.3951 93.456H76.0861C77.2764 93.456 78.3768 92.8209 78.972 91.7904ZM32.5133 11.3205H74.9713C76.1616 11.3205 77.2609 11.9557 77.8561 12.9861L99.0845 49.7555C99.6797 50.786 99.6797 52.0562 99.0845 53.0867L77.8561 89.8561C77.2609 90.8866 76.1616 91.5217 74.9713 91.5217H32.5133C31.323 91.5217 30.2237 90.8866 29.6285 89.8561L8.40007 53.0867C7.80491 52.0562 7.80491 50.786 8.40007 49.7555L29.6285 12.9861C30.2237 11.9557 31.323 11.3205 32.5133 11.3205Z"
                        fill="#603813"
                      />
                      <path
                        d="M78.489 91.3068L100.839 52.5964C101.432 51.5693 101.434 50.3046 100.844 49.2753L78.6911 10.5782C78.0981 9.54106 76.9944 8.90262 75.7996 8.90262H30.9121C29.7218 8.90262 28.6225 9.53776 28.0273 10.5682L5.68184 49.2719C5.08667 50.3023 5.08667 51.5726 5.68184 52.6031L28.0273 91.3068C28.6225 92.3373 29.7218 92.9724 30.9121 92.9724H75.6031C76.7934 92.9724 77.8927 92.3373 78.4879 91.3068H78.489ZM32.0292 10.8369H74.4871C75.6775 10.8369 76.7768 11.4721 77.3719 12.5025L98.6004 49.2719C99.1955 50.3023 99.1955 51.5726 98.6004 52.6031L77.3719 89.3725C76.7768 90.403 75.6775 91.0381 74.4871 91.0381H32.0292C30.8388 91.0381 29.7396 90.403 29.1444 89.3725L7.91594 52.6031C7.32077 51.5726 7.32077 50.3023 7.91594 49.2719L29.1444 12.5025C29.7396 11.4721 30.8388 10.8369 32.0292 10.8369Z"
                        fill="#FBEBBD"
                      />
                      <path
                        d="M75.8452 93.2142H31.1542C29.9639 93.2142 28.8646 92.5791 28.2694 91.5487L5.92393 52.845C5.32876 51.8145 5.32876 50.5442 5.92393 49.5138L28.2694 10.81C28.8646 9.77958 29.9639 9.14444 31.1542 9.14444H75.8452C77.0355 9.14444 78.1348 9.77958 78.73 10.81L101.075 49.5138C101.671 50.5442 101.671 51.8145 101.075 52.845L78.73 91.5487C78.1348 92.5791 77.0355 93.2142 75.8452 93.2142ZM32.2713 91.2811H74.7292C75.9196 91.2811 77.0189 90.6459 77.614 89.6155L98.8424 52.846C99.4376 51.8156 99.4376 50.5453 98.8424 49.5149L77.614 12.7454C77.0189 11.715 75.9196 11.0798 74.7292 11.0798H32.2713C31.0809 11.0798 29.9816 11.715 29.3864 12.7454L8.15802 49.5149C7.56286 50.5453 7.56286 51.8156 8.15802 52.846L29.3864 89.6155C29.9816 90.6459 31.0809 91.2811 32.2713 91.2811Z"
                        fill="url(#paint2)"
                      />
                      <path
                        d="M75.8452 93.2142H31.1542C29.9639 93.2142 28.8646 92.5791 28.2694 91.5487L5.92393 52.845C5.32876 51.8145 5.32876 50.5442 5.92393 49.5138L28.2694 10.81C28.8646 9.77958 29.9639 9.14444 31.1542 9.14444H75.8452C77.0355 9.14444 78.1348 9.77958 78.73 10.81L101.075 49.5138C101.671 50.5442 101.671 51.8145 101.075 52.845L78.73 91.5487C78.1348 92.5791 77.0355 93.2142 75.8452 93.2142ZM32.2713 91.2811H74.7292C75.9196 91.2811 77.0189 90.6459 77.614 89.6155L98.8424 52.846C99.4376 51.8156 99.4376 50.5453 98.8424 49.5149L77.614 12.7454C77.0189 11.715 75.9196 11.0798 74.7292 11.0798H32.2713C31.0809 11.0798 29.9816 11.715 29.3864 12.7454L8.15802 49.5149C7.56286 50.5453 7.56286 51.8156 8.15802 52.846L29.3864 89.6155C29.9816 90.6459 31.0809 91.2811 32.2713 91.2811Z"
                        fill="url(#paint3)"
                      />
                      <path
                        d="M73.822 89.7079H33.1784C31.9881 89.7079 30.8888 89.0728 30.2936 88.0424L9.9724 52.8441C9.37724 51.8137 9.37724 50.5434 9.9724 49.513L30.2936 14.3147C30.8888 13.2843 31.9881 12.6491 33.1784 12.6491H73.822C75.0124 12.6491 76.1117 13.2843 76.7068 14.3147L97.0281 49.513C97.6232 50.5434 97.6232 51.8137 97.0281 52.8441L76.7068 88.0424C76.1117 89.0728 75.0124 89.7079 73.822 89.7079ZM33.5971 88.9828H73.4034C74.5938 88.9828 75.6931 88.3477 76.2882 87.3173L96.1908 52.8441C96.786 51.8137 96.786 50.5434 96.1908 49.513L76.2882 15.0398C75.6931 14.0094 74.5938 13.3742 73.4034 13.3742H33.5971C32.4067 13.3742 31.3074 14.0094 30.7123 15.0398L10.8096 49.513C10.2145 50.5434 10.2145 51.8137 10.8096 52.8441L30.7123 87.3173C31.3074 88.3477 32.4067 88.9828 33.5971 88.9828Z"
                        fill="url(#paint4)"
                      />
                      <path
                        opacity="0.75"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M52.647 33.2662H54.1671L55.0754 27.0957C54.5368 27.0624 54.0038 27.0413 53.4609 27.0413C52.8768 27.0413 52.3027 27.0636 51.7298 27.1025L52.6458 33.2662H52.647ZM34.6875 52.7835V51.2656L28.5137 50.3518C28.4793 50.8936 28.4615 51.4288 28.4615 51.9729C28.4615 52.5503 28.4815 53.1266 28.5193 53.6951L34.6875 52.7835ZM72.1998 51.0169V52.7835L78.3691 53.6941C78.408 53.1255 78.4302 52.5492 78.4302 51.9718C78.4302 51.4277 78.4113 50.8914 78.3758 50.3506L72.1998 51.0169ZM52.647 70.7796H54.1671L55.0754 76.9534C54.5368 76.9889 54.0038 77.0089 53.4609 77.0089C52.8768 77.0089 52.3027 76.9878 51.7298 76.9456L52.6458 70.7796H52.647ZM45.2562 35.1861C45.0608 35.286 44.8642 35.3859 44.6588 35.4958C44.4645 35.6036 44.2691 35.7102 44.0703 35.8157C43.222 36.2865 42.4036 36.7717 41.6041 37.2758L37.8688 32.5111C38.8792 31.7061 39.9674 30.9655 41.1222 30.307L41.2532 30.2348C41.4076 30.1493 41.5619 30.0638 41.724 29.9772C41.8528 29.9073 41.9817 29.8417 42.1093 29.7762C42.176 29.7418 42.2426 29.7074 42.3092 29.673C43.5007 29.0789 44.7165 28.5859 45.9546 28.1939L47.8278 33.9513C46.9762 34.3333 46.1134 34.7419 45.254 35.1861H45.2562ZM36.8883 43.2531C36.9716 43.0976 37.0537 42.951 37.1337 42.8045L37.2114 42.6634C37.6811 41.8184 38.1697 41.0045 38.6716 40.2139L33.9213 36.4552C33.113 37.4657 32.3679 38.5461 31.705 39.7043C31.6495 39.8053 31.594 39.9041 31.5384 40.0029V40.0052V40.0073C31.4885 40.0962 31.4385 40.1861 31.3885 40.275C31.3008 40.4404 31.2198 40.597 31.1387 40.7535L31.0699 40.8868C30.4714 42.0761 29.9772 43.2952 29.5808 44.5233L35.3326 46.4221C35.7179 45.5671 36.1288 44.7032 36.5763 43.8449C36.6795 43.6561 36.7773 43.4685 36.8761 43.2797L36.8905 43.2519L36.8883 43.2531ZM61.7133 35.2304C61.8798 35.3159 62.0486 35.4026 62.2218 35.4958C62.4184 35.6036 62.616 35.7102 62.8126 35.8157C63.662 36.2865 64.4804 36.7717 65.2754 37.2758L69.0141 32.5111C68.0003 31.7061 66.9199 30.9655 65.7562 30.307C65.5608 30.1971 65.3676 30.0882 65.1577 29.9761C65.0445 29.915 64.929 29.8562 64.8157 29.7985H64.8146C64.7335 29.7563 64.6514 29.7152 64.5714 29.673C63.38 29.0789 62.1608 28.5859 60.9282 28.1939L59.0539 33.9513C59.9133 34.3333 60.7683 34.7419 61.6267 35.1861L61.7133 35.2304ZM69.9957 43.2531C69.8924 43.0632 69.7936 42.8844 69.6948 42.7067L69.6703 42.6645C69.2051 41.8195 68.7132 41.0056 68.2135 40.215L72.9637 36.4563C73.7732 37.4668 74.5183 38.5472 75.1779 39.7053C75.2356 39.8097 75.2933 39.9119 75.3511 40.0141C75.3999 40.1018 75.4488 40.1895 75.4977 40.2761C75.5687 40.4126 75.6365 40.5426 75.7042 40.6714L75.8163 40.8868C76.4104 42.0761 76.9067 43.2952 77.3031 44.5233L71.5524 46.4221C71.1683 45.5671 70.7541 44.7032 70.3066 43.8449C70.2655 43.7683 70.2255 43.6916 70.1867 43.615C70.1245 43.494 70.0612 43.373 69.9957 43.2508V43.2531ZM45.0741 68.7565C44.9386 68.6854 44.8009 68.6155 44.6588 68.5377C44.4645 68.4334 44.2691 68.3268 44.0703 68.2135C43.222 67.7483 42.4036 67.263 41.6041 66.7589L37.8688 71.5224C38.8792 72.3286 39.9674 73.0714 41.1222 73.7255C41.1844 73.761 41.2466 73.7943 41.3087 73.8298C41.4453 73.9053 41.5819 73.982 41.7251 74.0553C41.8173 74.1041 41.9106 74.1529 42.0016 74.2007C42.106 74.2551 42.2093 74.3084 42.3114 74.364C43.5029 74.9602 44.7188 75.451 45.9568 75.8386L47.8301 70.08C46.9784 69.7014 46.1156 69.2962 45.2562 68.852C45.1951 68.8198 45.134 68.7876 45.0741 68.7565ZM37.0804 61.1348C37.1237 61.2136 37.167 61.2925 37.2103 61.3713C37.68 62.213 38.1686 63.0324 38.6705 63.8219L33.9202 67.5806C33.1119 66.5723 32.3668 65.4875 31.7039 64.3294C31.5962 64.1395 31.4907 63.9507 31.3841 63.7553C31.3153 63.6298 31.2508 63.5054 31.1876 63.3833C31.1465 63.3044 31.1065 63.2256 31.0654 63.149C30.4669 61.962 29.9728 60.7439 29.5764 59.508L35.3282 57.6137C35.7135 58.4687 36.1243 59.3304 36.5718 60.1865C36.6473 60.3242 36.7195 60.463 36.7906 60.6007C36.8228 60.6617 36.855 60.7239 36.8861 60.785C36.9516 60.9049 37.0149 61.0204 37.0782 61.1336V61.1348H37.0804ZM61.8321 68.7442C61.9598 68.6776 62.0897 68.6099 62.2207 68.5377C62.4173 68.4334 62.6149 68.3268 62.8115 68.2135C63.6609 67.7483 64.4793 67.263 65.2743 66.7589L69.013 71.5224C67.9992 72.3286 66.9188 73.0714 65.7551 73.7255L65.6996 73.7566L65.6307 73.7954C65.4775 73.882 65.3232 73.9698 65.1577 74.0542C65.07 74.1008 64.9823 74.1463 64.8946 74.1918C64.7857 74.2484 64.6769 74.304 64.5714 74.3628C63.38 74.9591 62.1608 75.4499 60.9282 75.8374L59.0539 70.079C59.9133 69.7003 60.7683 69.295 61.6267 68.8508C61.6944 68.8153 61.7621 68.7798 61.8299 68.7442H61.8321ZM69.9957 60.7838C69.9146 60.9315 69.8369 61.0726 69.758 61.2125L69.6692 61.3713C69.204 62.213 68.7121 63.0324 68.2124 63.8219L72.9626 67.5806C73.7721 66.5723 74.5172 65.4875 75.1768 64.3294C75.209 64.2716 75.2423 64.2138 75.2745 64.155C75.3489 64.0229 75.4233 63.8907 75.4965 63.7553C75.5543 63.6465 75.6098 63.541 75.6653 63.4344C75.7164 63.3378 75.7653 63.2423 75.8163 63.1479C76.4104 61.9609 76.9067 60.7428 77.3031 59.5069L71.5524 57.6126C71.1683 58.4676 70.7541 59.3292 70.3066 60.1853C70.2644 60.2642 70.2244 60.3442 70.1833 60.423C70.1212 60.5441 70.0601 60.6639 69.9957 60.7838ZM53.4475 66.0782C45.6959 66.0782 39.3922 59.7712 39.3922 52.024C39.3922 44.2768 45.6959 37.9709 53.4475 37.9709C61.1992 37.9709 67.4995 44.2768 67.4995 52.024C67.4995 59.7712 61.1958 66.0782 53.4475 66.0782Z"
                        fill="white"
                        className="animate--0e921"
                      />
                      <defs>
                        <linearGradient
                          id="paint0"
                          x1="53.5008"
                          y1="93.6485"
                          x2="53.5008"
                          y2="8.71145"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F1E07F" />
                          <stop offset={1} stopColor="#BA8433" />
                        </linearGradient>
                        <linearGradient
                          id="paint1"
                          x1="53.5008"
                          y1="93.6485"
                          x2="53.5008"
                          y2="8.71145"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#603813" />
                          <stop offset={1} stopColor="#BA8433" />
                        </linearGradient>
                        <linearGradient
                          id="paint2"
                          x1="61.3712"
                          y1="6.54169"
                          x2="45.6292"
                          y2="95.8181"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.035" stopColor="#BA9862" />
                          <stop offset="0.127" stopColor="#CEAF6E" />
                          <stop offset="0.255" stopColor="#E8CC7E" />
                          <stop offset="0.304" stopColor="#D3B066" />
                          <stop offset="0.36" stopColor="#C0954F" />
                          <stop offset="0.394" stopColor="#B98C47" />
                          <stop offset="0.592" stopColor="#B98C47" />
                          <stop offset="0.636" stopColor="#D1AC63" />
                          <stop offset="0.677" stopColor="#E1C376" />
                          <stop offset="0.702" stopColor="#E8CC7E" />
                          <stop offset="0.907" stopColor="#BB8F4A" />
                          <stop offset="0.919" stopColor="#B98C47" />
                        </linearGradient>
                        <linearGradient
                          id="paint3"
                          x1="61.3712"
                          y1="6.54169"
                          x2="45.6292"
                          y2="95.8181"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.035" stopColor="#BA9862" />
                          <stop offset="0.153" stopColor="#DDBE77" />
                          <stop offset="0.255" stopColor="#F9DB87" />
                          <stop offset="0.3" stopColor="#C8A55B" />
                          <stop offset="0.342" stopColor="#A17A38" />
                          <stop offset="0.375" stopColor="#885F23" />
                          <stop offset="0.394" stopColor="#80561B" />
                          <stop offset="0.445" stopColor="#845A1E" />
                          <stop offset="0.499" stopColor="#906628" />
                          <stop offset="0.554" stopColor="#A57938" />
                          <stop offset="0.592" stopColor="#B98C47" />
                          <stop offset="0.603" stopColor="#C1964F" />
                          <stop offset="0.646" stopColor="#DFBB6D" />
                          <stop offset="0.68" stopColor="#F2D280" />
                          <stop offset="0.702" stopColor="#F9DB87" />
                          <stop offset="0.869" stopColor="#C89E56" />
                          <stop offset="0.919" stopColor="#B98C47" />
                        </linearGradient>
                        <linearGradient
                          id="paint4"
                          x1="60.7106"
                          y1="10.2862"
                          x2="46.2899"
                          y2="92.072"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.035" stopColor="#BA9862" />
                          <stop offset="0.158" stopColor="#DDBE77" />
                          <stop offset="0.266" stopColor="#F9DB87" />
                          <stop offset="0.307" stopColor="#C8A55B" />
                          <stop offset="0.346" stopColor="#A17A38" />
                          <stop offset="0.376" stopColor="#885F23" />
                          <stop offset="0.394" stopColor="#80561B" />
                          <stop offset="0.445" stopColor="#845A1E" />
                          <stop offset="0.498" stopColor="#906628" />
                          <stop offset="0.553" stopColor="#A57938" />
                          <stop offset="0.591" stopColor="#B98C47" />
                          <stop offset="0.602" stopColor="#C1964F" />
                          <stop offset="0.645" stopColor="#DFBB6D" />
                          <stop offset="0.68" stopColor="#F2D280" />
                          <stop offset="0.702" stopColor="#F9DB87" />
                          <stop offset="0.869" stopColor="#C89E56" />
                          <stop offset="0.919" stopColor="#B98C47" />
                        </linearGradient>
                        <linearGradient
                          id="paint5"
                          x1="90.248"
                          y1="88.0794"
                          x2="16.7591"
                          y2="14.5916"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.007"
                            stopColor="#B98C47"
                            stopOpacity="0.01"
                          />
                          <stop
                            offset="0.158"
                            stopColor="#B98C47"
                            stopOpacity="0.01"
                          />
                          <stop offset="0.5" stopColor="#F9DB87" />
                          <stop
                            offset="0.85"
                            stopColor="#B98C47"
                            stopOpacity="0.01"
                          />
                          <stop
                            offset={1}
                            stopColor="#B98C47"
                            stopOpacity="0.01"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint6"
                          x1="-42.5566"
                          y1="51.1807"
                          x2="38.7372"
                          y2="143.491"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.01" />
                          <stop offset="0.5" stopColor="white" />
                          <stop
                            offset={1}
                            stopColor="white"
                            stopOpacity="0.01"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div
                      className={`glowBorder--29c03 ${
                        status === Status.OPEN ? "active--96399" : ""
                      }`}
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 165 181"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_6029_56217"
                          maskUnits="userSpaceOnUse"
                          x={21}
                          y={20}
                          width={122}
                          height={141}
                          style={{ maskType: "alpha" }}
                        >
                          <ellipse
                            cx="82.2886"
                            cy="90.5886"
                            rx="37.2886"
                            ry="84.9352"
                            fill="url(#paint0_radial_6029_56217)"
                            className="mask--819b5 active--96399"
                          />
                        </mask>
                        <g mask="url(#mask0_6029_56217)">
                          <path
                            d="M107.236 44.4108H57.5743C56.3751 44.4108 55.268 45.0548 54.6762 46.0986L30.222 89.225C29.6469 90.2399 29.6435 91.4824 30.2154 92.4996L54.1332 135.069C54.7228 136.118 55.8332 136.767 57.0369 136.767H107.321C108.52 136.767 109.627 136.122 110.219 135.079L134.356 92.4951C134.931 91.4802 134.933 90.2377 134.362 89.2206L110.14 46.1097C109.551 45.0604 108.44 44.4108 107.236 44.4108Z"
                            stroke="#F9DB87"
                            strokeWidth="1.49236"
                          />
                        </g>
                        <defs>
                          <radialGradient
                            id="paint0_radial_6029_56217"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(82.2886 90.5886) rotate(90) scale(92.5328 34.0798)"
                          >
                            <stop offset="0.35" stopColor="#D9D9D9" />
                            <stop
                              offset={1}
                              stopColor="#737373"
                              stopOpacity={0}
                            />
                          </radialGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="chip--71d0f">
                    <div
                      className="chipWrapper--a6465 hidden--c9c96"
                      style={{
                        "-scale": 1,
                        "-flyingChipAnimationDuration": "500ms",
                        "-inflateChipAnimationDuration": "1000ms",
                      }}
                    >
                      <div
                        className="chip--29b81"
                        data-role="chip"
                        data-value={0}
                      >
                        <svg
                          viewBox="0 0 78 78"
                          className="graphics--22cbe"
                          data-role="default-svg"
                          style={{ color: "rgb(146, 146, 146)" }}
                        >
                          <g>
                            <circle
                              className="paint--13ff6"
                              cx="39.019"
                              cy="38.999"
                              r="38.5"
                            />
                            <path
                              className="body--369ee"
                              d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                            />
                            <circle
                              className="textBackground--84c26"
                              cx={39}
                              cy="38.997"
                              r="25.5"
                            />
                            <path
                              className="body--369ee"
                              d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                            />
                          </g>
                          <text
                            className="value--ebf30"
                            x="50%"
                            y="50%"
                            fontSize={30}
                            dy={10}
                            data-role="chip-value"
                          >
                            0
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="side--48505"
                data-role="side-spot"
                style={{ "-collapsedscale": "0.75" }}
              >
                <div
                  className="chipHolder--8e48b"
                  id="side-spot-multiplier-chip-holder"
                />
                <div
                  className={`betSpot--145f3 ${
                    status === Status.OPEN ? "enabled--d36d3" : ""
                  }`}
                  data-is-chip-visible="false"
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0.3 1 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`sideSpotIcon--a0819 ${
                      status === Status.OPEN ? "active--98358" : ""
                    }`}
                  >
                    <mask
                      id="mask0_5582_22599"
                      maskUnits="userSpaceOnUse"
                      x={3}
                      y={3}
                      width={75}
                      height={65}
                      style={{ maskType: "luminance" }}
                    >
                      <path
                        d="M14.3788 66.885C14.5608 67.069 14.7528 67.243 14.9388 67.422C15.3798 67.244 15.8588 67.1411 16.3618 67.1411H64.7249C65.3239 67.1411 65.8839 67.292 66.3899 67.538C73.4579 60.771 77.8738 51.253 77.8738 40.718C77.8738 30.43 73.6689 21.107 66.8889 14.373C66.8299 14.313 66.7698 14.253 66.7098 14.194C59.9758 7.41403 50.6528 3.20905 40.3648 3.20905C19.8798 3.20905 3.21484 19.875 3.21484 40.36C3.21484 50.647 7.41985 59.97 14.1989 66.704C14.2589 66.764 14.3188 66.825 14.3788 66.885Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_5582_22599)">
                      <path
                        className="clickable--cfe74 active--98358"
                        d="M40.5436 77.7257C20.1496 77.7257 3.55762 61.1337 3.55762 40.7407C3.55762 20.3477 20.1496 3.7547 40.5436 3.7547C60.9376 3.7547 77.5286 20.3467 77.5286 40.7407C77.5286 61.1347 60.9366 77.7257 40.5436 77.7257Z"
                        fill="url(#paint0_radial_5582_22599)"
                      />
                      <path
                        d="M40.7228 77.8685C20.2378 77.8685 3.57178 61.2024 3.57178 40.7184C3.57178 20.2344 20.2378 3.56744 40.7228 3.56744C61.2078 3.56744 77.8738 20.2334 77.8738 40.7184C77.8738 61.2034 61.2078 77.8685 40.7228 77.8685ZM40.7228 5.00049C21.0278 5.00049 5.00478 21.0234 5.00478 40.7184C5.00478 60.4134 21.0278 76.4365 40.7228 76.4365C60.4178 76.4365 76.4408 60.4134 76.4408 40.7184C76.4408 21.0234 60.4178 5.00049 40.7228 5.00049Z"
                        fill="#673606"
                      />
                      <path
                        d="M40.3649 77.511C19.8799 77.511 3.21387 60.845 3.21387 40.361C3.21387 19.877 19.8799 3.21002 40.3649 3.21002C60.8499 3.21002 77.5159 19.876 77.5159 40.361C77.5159 60.846 60.8499 77.511 40.3649 77.511ZM40.3649 4.64301C20.6699 4.64301 4.64687 20.666 4.64687 40.361C4.64687 60.056 20.6699 76.079 40.3649 76.079C60.0599 76.079 76.0829 60.056 76.0829 40.361C76.0829 20.666 60.0599 4.64301 40.3649 4.64301Z"
                        fill="#FDE9B6"
                      />
                      <path
                        d="M40.5441 77.6907C20.0591 77.6907 3.39307 61.0247 3.39307 40.5407C3.39307 20.0567 20.0591 3.38971 40.5441 3.38971C61.0291 3.38971 77.6951 20.0557 77.6951 40.5407C77.6951 61.0257 61.0291 77.6907 40.5441 77.6907ZM40.5441 4.82269C20.8491 4.82269 4.82607 20.8457 4.82607 40.5407C4.82607 60.2357 20.8491 76.2587 40.5441 76.2587C60.2391 76.2587 76.2621 60.2357 76.2621 40.5407C76.2621 20.8457 60.2391 4.82269 40.5441 4.82269Z"
                        fill="url(#paint1_linear_5582_22599)"
                      />
                      <path
                        d="M40.5438 75.0944C21.4908 75.0944 5.98877 59.5934 5.98877 40.5404C5.98877 21.4874 21.4898 5.98541 40.5438 5.98541C59.5978 5.98541 75.0988 21.4864 75.0988 40.5404C75.0988 59.5944 59.5978 75.0944 40.5438 75.0944ZM40.5438 6.52338C21.7868 6.52338 6.52676 21.7834 6.52676 40.5404C6.52676 59.2974 21.7868 74.5574 40.5438 74.5574C59.3008 74.5574 74.5608 59.2974 74.5608 40.5404C74.5608 21.7834 59.3008 6.52338 40.5438 6.52338Z"
                        fill="url(#paint2_linear_5582_22599)"
                      />
                    </g>
                    <g>
                      <g
                        filter="url(#filter0_f_6029_53074)"
                        transform="translate(5 5)"
                        className="shadow--0877f animate--71517"
                      >
                        <path
                          d="M52.6522 37.2575V31.9045H45.0192C45.4502 31.1975 45.8102 30.4445 46.0752 29.6415C46.9742 26.9195 46.7512 24.0125 45.4452 21.4575C44.4922 19.5915 43.0182 18.0395 41.1852 16.9675C39.4192 15.9355 37.3952 15.3905 35.3312 15.3905C33.6002 15.3905 31.9272 15.7655 30.3582 16.5055C27.5392 17.8355 25.4612 20.1605 24.5062 23.0495C23.6072 25.7715 23.8302 28.6775 25.1362 31.2335C25.2552 31.4675 25.4072 31.6805 25.5422 31.9035H15.5292L19.0982 37.2565H22.7112V48.5675H52.6512V43.2145H46.0982V42.9105H52.6512V37.5585H46.0982V37.2555H52.6512L52.6522 37.2575Z"
                          fill="#FF0000"
                        />
                      </g>
                      <path
                        d="M58.123 43.0671V37.7141H50.49C50.921 37.0071 51.281 36.2541 51.546 35.4511C52.445 32.7291 52.222 29.8221 50.916 27.2671C49.963 25.4011 48.489 23.8491 46.656 22.7771C44.89 21.7451 42.866 21.2001 40.802 21.2001C39.071 21.2001 37.398 21.5751 35.829 22.3151C33.01 23.6451 30.932 25.9701 29.977 28.8591C29.078 31.5811 29.301 34.4871 30.607 37.0431C30.726 37.2771 30.878 37.4901 31.013 37.7131H21L24.569 43.0661H28.182V54.3771H58.122V49.0241H51.569V48.7201H58.122V43.3681H51.569V43.0651H58.122L58.123 43.0671Z"
                        fill="#660000"
                      />
                      <path
                        d="M23.1201 38.8493H36.5721V41.9343H33.4301V53.2453H29.3171V41.9343H25.1761L23.1191 38.8493H23.1201ZM38.6281 53.2453H42.7411V37.2743H38.6281V53.2453ZM56.9901 41.9343V38.8493H44.2671L46.3241 41.9343V53.2453H56.9901V50.1603H50.4371V47.5893H56.9901V44.5053H50.4371V41.9343H56.9901Z"
                        fill="url(#paint4_linear_5582_22599)"
                      />
                      <path
                        d="M38.6276 32.9688C38.7906 33.0968 38.8276 33.3248 38.7196 33.5018L36.2106 37.5898C36.1016 37.7678 35.8616 37.8268 35.6856 37.7138C34.3726 36.8728 33.3866 35.7698 32.7096 34.4308C32.1166 33.2588 31.8366 32.0318 31.8676 30.7458C31.8716 30.5598 32.0386 30.4048 32.2386 30.4038C33.8316 30.3998 35.4176 30.3958 37.0086 30.3918C37.2226 30.3918 37.3786 30.5678 37.3906 30.7818C37.4436 31.7528 38.0575 32.5208 38.6276 32.9688ZM39.3146 27.6638C40.1266 27.3098 41.1086 27.2958 41.9346 27.6418C42.1296 27.7238 42.3526 27.6698 42.4636 27.4888L44.6896 23.8608C44.7766 23.7188 44.7206 23.5378 44.5616 23.4528C42.5486 22.3628 38.4446 22.4388 36.5846 23.5858C36.4356 23.6768 36.3896 23.8538 36.4786 23.9908C37.2316 25.1418 37.9996 26.3188 38.7856 27.5208C38.8996 27.6958 39.1226 27.7468 39.3146 27.6638ZM49.2346 30.3958C47.5856 30.4218 45.9386 30.4488 44.2906 30.4758C44.0816 30.4788 43.9266 30.6478 43.9076 30.8568C43.8286 31.7248 43.3345 32.5368 42.6276 33.0448C42.4536 33.1698 42.4216 33.4148 42.5366 33.5958C43.3926 34.9348 44.2606 36.2948 45.1466 37.6838C45.2576 37.8578 45.4926 37.9228 45.6706 37.8178C48.1596 36.3498 49.7506 33.5198 49.6236 30.7358C49.6156 30.5468 49.4376 30.3928 49.2346 30.3958ZM41.5626 29.0288C42.4206 29.4668 42.7686 30.5348 42.3026 31.3388C41.8126 32.1818 40.6596 32.5148 39.7926 32.0608C38.8496 31.5688 38.5256 30.5118 39.0466 29.6748C39.5626 28.8458 40.6526 28.5658 41.5626 29.0298V29.0288Z"
                        fill="url(#paint5_linear_5582_22599)"
                      />
                      <path
                        opacity="0.6"
                        d="M38.6281 37.2737H42.7411V53.2447H38.6281V37.2737ZM25.1761 41.9347H29.3171V53.2457H33.4301V41.9347H36.5721V38.8497H23.1201L25.1761 41.9347ZM56.9901 41.9347V38.8497H44.2671L46.3241 41.9347V53.2457H56.9901V50.1607H50.4371V47.5897H56.9901V44.5057H50.4371V41.9347H56.9901ZM41.5621 29.0297C40.6521 28.5657 39.5621 28.8457 39.0461 29.6747C38.5251 30.5117 38.8491 31.5687 39.7921 32.0607C40.6591 32.5147 41.8121 32.1817 42.3021 31.3387C42.7681 30.5347 42.4211 29.4677 41.5621 29.0297ZM43.9081 30.8567C43.8291 31.7247 43.3351 32.5367 42.6281 33.0447C42.4541 33.1697 42.4221 33.4147 42.5371 33.5957C43.3931 34.9347 44.2611 36.2947 45.1471 37.6837C45.2581 37.8577 45.4931 37.9227 45.6711 37.8177C48.1601 36.3497 49.7511 33.5197 49.6231 30.7357C49.6151 30.5467 49.4371 30.3927 49.2341 30.3957C47.5851 30.4217 45.9381 30.4487 44.2901 30.4757C44.0811 30.4787 43.9271 30.6477 43.9081 30.8567ZM38.7851 27.5207C38.8991 27.6957 39.1221 27.7477 39.3141 27.6647C40.1261 27.3107 41.1081 27.2967 41.9341 27.6427C42.1291 27.7247 42.3521 27.6707 42.4631 27.4907L44.6891 23.8627C44.7761 23.7207 44.7201 23.5397 44.5611 23.4547C42.5481 22.3647 38.4441 22.4407 36.5841 23.5877C36.4351 23.6787 36.3891 23.8557 36.4781 23.9927C37.2311 25.1447 37.9991 26.3207 38.7851 27.5227V27.5207ZM35.6841 37.7137C35.8601 37.8267 36.1001 37.7677 36.2091 37.5897L38.7191 33.5017C38.8271 33.3257 38.7901 33.0977 38.6271 32.9697C38.0571 32.5217 37.4441 31.7537 37.3901 30.7827C37.3781 30.5687 37.2221 30.3927 37.0081 30.3927C35.4171 30.3967 33.8311 30.4017 32.2381 30.4047C32.0381 30.4047 31.8711 30.5607 31.8671 30.7467C31.8361 32.0327 32.1161 33.2597 32.7091 34.4317C33.3861 35.7697 34.3711 36.8727 35.6841 37.7137Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M65.9016 66.0001H14.0984C11.8389 66.0001 10 67.8523 10 70.1283V75.8718C10 78.1478 11.8389 80.0001 14.0984 80.0001H65.9016C68.1611 80.0001 70 78.1478 70 75.8718V70.1283C70 67.8523 68.1611 66.0001 65.9016 66.0001ZM68.9884 75.8718C68.9884 77.5889 67.6062 78.9801 65.9026 78.9801H14.0994C12.3948 78.9801 11.0126 77.5879 11.0126 75.8718V70.1283C11.0126 68.4112 12.3948 67.02 14.0994 67.02H65.9026C67.6073 67.02 68.9884 68.4122 68.9884 70.1283V75.8718Z"
                      fill="url(#paint6_linear_5582_22599)"
                    />
                    <path
                      className="clickable--cfe74 active--98358"
                      opacity="0.5"
                      d="M65.9129 67.0001H14.0871C12.3821 67.0001 11 68.3962 11 70.1185V75.8816C11 77.6039 12.3821 79.0001 14.0871 79.0001H65.9129C67.6179 79.0001 69 77.6039 69 75.8816V70.1185C69 68.3962 67.6179 67.0001 65.9129 67.0001Z"
                      fill="#660000"
                    />
                    <path
                      transform="translate(0 -0.6)"
                      d="M16.0996 69.2696V78.0001H14.7754V70.4825H14.7168L12.6426 71.9942V70.6524L14.5527 69.2696H16.0996ZM20.9395 78.1172C19.9238 78.1172 19.1348 77.7266 18.5723 76.9454C18.0098 76.1641 17.7285 75.0626 17.7285 73.6407C17.7285 72.2266 18.0098 71.1251 18.5723 70.336C19.1387 69.5469 19.9277 69.1524 20.9395 69.1524C21.9512 69.1524 22.7383 69.5469 23.3008 70.336C23.8672 71.1251 24.1504 72.2266 24.1504 73.6407C24.1504 75.0587 23.8691 76.1602 23.3066 76.9454C22.748 77.7266 21.959 78.1172 20.9395 78.1172ZM20.9395 76.9747C21.5449 76.9747 22.0098 76.6837 22.334 76.1016C22.6621 75.5196 22.8262 74.6993 22.8262 73.6407C22.8262 72.5782 22.6621 71.754 22.334 71.168C22.0098 70.5821 21.5449 70.2891 20.9395 70.2891C20.334 70.2891 19.8672 70.584 19.5391 71.1739C19.2109 71.7598 19.0469 72.5821 19.0469 73.6407C19.0469 74.6993 19.2109 75.5196 19.5391 76.1016C19.8672 76.6837 20.334 76.9747 20.9395 76.9747ZM29.5293 73.084V74.2032H25.6504V73.084H29.5293ZM30.8477 78.0001V77.0333L33.8125 73.9688C34.2656 73.4922 34.6094 73.088 34.8438 72.7559C35.0781 72.4239 35.1953 72.0665 35.1953 71.6837C35.1953 71.2462 35.0469 70.9024 34.75 70.6524C34.457 70.3985 34.0898 70.2715 33.6484 70.2715C33.1836 70.2715 32.8125 70.4122 32.5352 70.6934C32.2578 70.9708 32.1191 71.3438 32.1191 71.8126H30.8359C30.8359 71.2813 30.959 70.8165 31.2051 70.418C31.4512 70.0157 31.7871 69.7051 32.2129 69.4864C32.6426 69.2637 33.1289 69.1524 33.6719 69.1524C34.2266 69.1524 34.7129 69.2618 35.1309 69.4805C35.5527 69.6993 35.8828 69.9962 36.1211 70.3712C36.3594 70.7422 36.4785 71.1641 36.4785 71.6368C36.4785 71.9532 36.418 72.2657 36.2969 72.5743C36.1797 72.879 35.9707 73.2227 35.6699 73.6055C35.373 73.9883 34.9531 74.4532 34.4102 75.0001L32.6992 76.7872V76.8575H36.6133V78.0001H30.8477ZM41.2715 78.1172C40.2559 78.1172 39.4668 77.7266 38.9043 76.9454C38.3418 76.1641 38.0605 75.0626 38.0605 73.6407C38.0605 72.2266 38.3418 71.1251 38.9043 70.336C39.4707 69.5469 40.2598 69.1524 41.2715 69.1524C42.2832 69.1524 43.0703 69.5469 43.6328 70.336C44.1992 71.1251 44.4824 72.2266 44.4824 73.6407C44.4824 75.0587 44.2012 76.1602 43.6387 76.9454C43.0801 77.7266 42.291 78.1172 41.2715 78.1172ZM41.2715 76.9747C41.877 76.9747 42.3418 76.6837 42.666 76.1016C42.9941 75.5196 43.1582 74.6993 43.1582 73.6407C43.1582 72.5782 42.9941 71.754 42.666 71.168C42.3418 70.5821 41.877 70.2891 41.2715 70.2891C40.666 70.2891 40.1992 70.584 39.8711 71.1739C39.543 71.7598 39.3789 72.5821 39.3789 73.6407C39.3789 74.6993 39.543 75.5196 39.8711 76.1016C40.1992 76.6837 40.666 76.9747 41.2715 76.9747ZM49.0176 78.1172C48.002 78.1172 47.2129 77.7266 46.6504 76.9454C46.0879 76.1641 45.8066 75.0626 45.8066 73.6407C45.8066 72.2266 46.0879 71.1251 46.6504 70.336C47.2168 69.5469 48.0059 69.1524 49.0176 69.1524C50.0293 69.1524 50.8164 69.5469 51.3789 70.336C51.9453 71.1251 52.2285 72.2266 52.2285 73.6407C52.2285 75.0587 51.9473 76.1602 51.3848 76.9454C50.8262 77.7266 50.0371 78.1172 49.0176 78.1172ZM49.0176 76.9747C49.623 76.9747 50.0879 76.6837 50.4121 76.1016C50.7402 75.5196 50.9043 74.6993 50.9043 73.6407C50.9043 72.5782 50.7402 71.754 50.4121 71.168C50.0879 70.5821 49.623 70.2891 49.0176 70.2891C48.4121 70.2891 47.9453 70.584 47.6172 71.1739C47.2891 71.7598 47.125 72.5821 47.125 73.6407C47.125 74.6993 47.2891 75.5196 47.6172 76.1016C47.9453 76.6837 48.4121 76.9747 49.0176 76.9747ZM57.9121 76.8047C57.6699 76.8047 57.4648 76.7227 57.2969 76.5587C57.1289 76.3907 57.0449 76.1856 57.0449 75.9434C57.0449 75.7012 57.1289 75.4962 57.2969 75.3282C57.4648 75.1602 57.6699 75.0762 57.9121 75.0762C58.1543 75.0762 58.3574 75.1602 58.5215 75.3282C58.6895 75.4962 58.7734 75.7012 58.7734 75.9434C58.7734 76.1856 58.6895 76.3907 58.5215 76.5587C58.3574 76.7227 58.1543 76.8047 57.9121 76.8047ZM57.9121 72.1934C57.6699 72.1934 57.4648 72.1114 57.2969 71.9473C57.1289 71.7794 57.0449 71.5743 57.0449 71.3321C57.0449 71.0899 57.1289 70.8848 57.2969 70.7169C57.4648 70.5489 57.6699 70.4649 57.9121 70.4649C58.1543 70.4649 58.3574 70.5489 58.5215 70.7169C58.6895 70.8848 58.7734 71.0899 58.7734 71.3321C58.7734 71.5743 58.6895 71.7794 58.5215 71.9473C58.3574 72.1114 58.1543 72.1934 57.9121 72.1934ZM66.9473 69.2696V78.0001H65.623V70.4825H65.5645L63.4902 71.9942V70.6524L65.4004 69.2696H66.9473Z"
                      fill="#E8E8E8"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_5582_22599"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(40.5436 40.7407) scale(36.985 36.985)"
                      >
                        <stop
                          offset="0.355"
                          stopColor="#D71C24"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="0.706"
                          stopColor="#9A0F13"
                          stopOpacity="0.471"
                        />
                        <stop
                          offset={1}
                          stopColor="#520000"
                          stopOpacity="0.8"
                        />
                      </radialGradient>
                      <linearGradient
                        id="paint1_linear_5582_22599"
                        x1="46.9961"
                        y1="3.95071"
                        x2="34.0931"
                        y2="77.1307"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.035" stopColor="#C09559" />
                        <stop offset="0.154" stopColor="#E4BC6B" />
                        <stop offset="0.255" stopColor="#FFD979" />
                        <stop offset="0.3" stopColor="#CEA349" />
                        <stop offset="0.342" stopColor="#A77822" />
                        <stop offset="0.375" stopColor="#8E5D0A" />
                        <stop offset="0.394" stopColor="#865402" />
                        <stop offset="0.444" stopColor="#8A5705" />
                        <stop offset="0.498" stopColor="#966311" />
                        <stop offset="0.552" stopColor="#AB7625" />
                        <stop offset="0.592" stopColor="#C08938" />
                        <stop offset="0.604" stopColor="#C99441" />
                        <stop offset="0.646" stopColor="#E6B95F" />
                        <stop offset="0.68" stopColor="#F8D072" />
                        <stop offset="0.702" stopColor="#FFD979" />
                        <stop offset="0.867" stopColor="#CF9C48" />
                        <stop offset="0.919" stopColor="#C08938" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_5582_22599"
                        x1="46.5448"
                        y1="6.50741"
                        x2="34.5428"
                        y2="74.5734"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.035" stopColor="#C09559" />
                        <stop offset="0.16" stopColor="#E4BC6B" />
                        <stop offset="0.266" stopColor="#FFD979" />
                        <stop offset="0.307" stopColor="#CEA349" />
                        <stop offset="0.346" stopColor="#A77822" />
                        <stop offset="0.376" stopColor="#8E5D0A" />
                        <stop offset="0.394" stopColor="#865402" />
                        <stop offset="0.444" stopColor="#8A5705" />
                        <stop offset="0.497" stopColor="#966311" />
                        <stop offset="0.552" stopColor="#AB7625" />
                        <stop offset="0.591" stopColor="#C08938" />
                        <stop offset="0.603" stopColor="#C99441" />
                        <stop offset="0.646" stopColor="#E6B95F" />
                        <stop offset="0.68" stopColor="#F8D072" />
                        <stop offset="0.702" stopColor="#FFD979" />
                        <stop offset="0.867" stopColor="#CF9C48" />
                        <stop offset="0.919" stopColor="#C08938" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_5582_22599"
                        x1="40.0551"
                        y1="53.2453"
                        x2="40.0551"
                        y2="37.2103"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#554900" />
                        <stop offset={1} stopColor="white" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_5582_22599"
                        x1="40.7486"
                        y1="39.6038"
                        x2="40.7486"
                        y2="24.4148"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#554900" />
                        <stop offset={1} stopColor="white" />
                      </linearGradient>
                      <linearGradient
                        id="paint6_linear_5582_22599"
                        x1={40}
                        y1="79.9991"
                        x2={40}
                        y2="66.0001"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.035" stopColor="#936B47" />
                        <stop offset="0.344" stopColor="#A2794C" />
                        <stop offset={1} stopColor="#BF9557" />
                      </linearGradient>
                      <filter
                        id="filter0_f_6029_53074"
                        x="0.529175"
                        y="0.390533"
                        width="67.123"
                        height="63.177"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation={7.0}
                          result="effect1_foregroundBlur_6029_53074"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <div
                    className={`glowWrapper--9e4be ${
                      status === Status.OPEN ? "active--98358" : ""
                    }`}
                  >
                    <div className="glowBorder--91d73">
                      <svg
                        className={`glowEllipse--065f1 ${
                          status === Status.OPEN ? "active--98358" : ""
                        }`}
                        width="100%"
                        height="100%"
                        viewBox="0 0 121 121"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M60.2775 119.355C27.867 119.355 1.5 92.988 1.5 60.5775C1.5 28.167 27.867 1.80005 60.2775 1.80005C92.688 1.80005 119.055 28.167 119.055 60.5775C119.055 92.988 92.688 119.355 60.2775 119.355Z"
                          stroke="url(#paint0_linear_6157_4560)"
                          strokeWidth="2.016"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_6157_4560"
                            x1="60.2775"
                            y1="120.363"
                            x2="60.2775"
                            y2="0.792051"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.007"
                              stopColor="#C08938"
                              stopOpacity="0.01"
                            />
                            <stop
                              offset="0.158"
                              stopColor="#C08938"
                              stopOpacity="0.01"
                            />
                            <stop offset="0.5" stopColor="#FFD979" />
                            <stop
                              offset="0.85"
                              stopColor="#C08938"
                              stopOpacity="0.01"
                            />
                            <stop
                              offset={1}
                              stopColor="#C08938"
                              stopOpacity="0.01"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`sideSpotIcon--a0819 generalSideIcon--a12f9 ${
                      status === Status.SUSPENDED ? "active--98358" : ""
                    }`}
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0.5 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.1852 76.9711C19.7912 76.9711 3.19922 60.3791 3.19922 39.9861C3.19922 19.5931 19.7912 3.0011 40.1852 3.0011C60.5792 3.0011 77.1702 19.5931 77.1702 39.9871C77.1702 60.3811 60.5782 76.9711 40.1852 76.9711Z"
                        fill="url(#paint0_linear_5582_21419)"
                        fillOpacity="0.5"
                        className="background--70064"
                      />
                      <path
                        d="M40.1852 76.9711C19.7912 76.9711 3.19922 60.3791 3.19922 39.9861C3.19922 19.5931 19.7912 3.0011 40.1852 3.0011C60.5792 3.0011 77.1702 19.5931 77.1702 39.9871C77.1702 60.3811 60.5782 76.9711 40.1852 76.9711Z"
                        fill="black"
                        fillOpacity="0.25"
                      />
                      <path
                        d="M40.3639 77.3138C19.8789 77.3138 3.21289 60.6478 3.21289 40.1638C3.21289 19.6798 19.8789 3.01282 40.3639 3.01282C60.8489 3.01282 77.5149 19.6788 77.5149 40.1638C77.5149 60.6488 60.8489 77.3138 40.3639 77.3138ZM40.3639 4.44582C20.6689 4.44582 4.64589 20.4688 4.64589 40.1638C4.64589 59.8588 20.6689 75.8818 40.3639 75.8818C60.0589 75.8818 76.0819 59.8588 76.0819 40.1638C76.0819 20.4688 60.0589 4.44582 40.3639 4.44582Z"
                        fill="#673606"
                      />
                      <path
                        d="M40.006 76.9564C19.521 76.9564 2.85498 60.2904 2.85498 39.8064C2.85498 19.3224 19.521 2.6554 40.006 2.6554C60.491 2.6554 77.157 19.3214 77.157 39.8064C77.157 60.2914 60.491 76.9564 40.006 76.9564ZM40.006 4.0884C20.311 4.0884 4.28799 20.1114 4.28799 39.8064C4.28799 59.5014 20.311 75.5244 40.006 75.5244C59.701 75.5244 75.724 59.5014 75.724 39.8064C75.724 20.1114 59.701 4.0884 40.006 4.0884Z"
                        fill="#FDE9B6"
                      />
                      <path
                        d="M40.1852 77.1361C19.7002 77.1361 3.03418 60.4701 3.03418 39.9861C3.03418 19.5021 19.7002 2.83508 40.1852 2.83508C60.6702 2.83508 77.3362 19.5011 77.3362 39.9861C77.3362 60.4711 60.6702 77.1361 40.1852 77.1361ZM40.1852 4.26808C20.4902 4.26808 4.46718 20.2911 4.46718 39.9861C4.46718 59.6811 20.4902 75.7041 40.1852 75.7041C59.8802 75.7041 75.9032 59.6811 75.9032 39.9861C75.9032 20.2911 59.8802 4.26808 40.1852 4.26808Z"
                        fill="url(#paint1_linear_5582_21419)"
                      />
                      <path
                        d="M40.1849 74.5388C21.1319 74.5388 5.62988 59.0378 5.62988 39.9848C5.62988 20.9318 21.1309 5.43079 40.1849 5.43079C59.2389 5.43079 74.7399 20.9318 74.7399 39.9858C74.7399 59.0398 59.2389 74.5388 40.1849 74.5388ZM40.1849 5.96779C21.4279 5.96779 6.16788 21.2278 6.16788 39.9848C6.16788 58.7418 21.4279 74.0018 40.1849 74.0018C58.9419 74.0018 74.2019 58.7418 74.2019 39.9848C74.2019 21.2278 58.9419 5.96779 40.1849 5.96779Z"
                        fill="url(#paint2_linear_5582_21419)"
                      />
                      <path
                        opacity="0.75"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M58.123 36.715v5.353l-.001-.002h-6.553v.303h6.553v5.352h-6.553v.304h6.553v5.353h-29.94v-11.31h-3.613L21 36.713h10.013c-.045-.075-.092-.148-.14-.222-.093-.146-.187-.292-.266-.448a10.571 10.571 0 0 1-.63-8.184c.955-2.889 3.033-5.214 5.852-6.544a11.571 11.571 0 0 1 4.973-1.115c2.064 0 4.088.545 5.854 1.577a10.999 10.999 0 0 1 4.26 4.49 10.57 10.57 0 0 1 .63 8.184 10.918 10.918 0 0 1-1.056 2.263h7.633Zm-15.382-.442h-4.113v15.97h4.113v-15.97Zm-13.424 4.66h-4.14L23.12 37.85h13.452v3.085H33.43v11.31h-4.113v-11.31ZM56.99 37.85v3.085h-6.553v2.57h6.553v3.085h-6.553v2.57h6.553v3.086H46.324V40.934l-2.057-3.085H56.99Zm-17.944-9.175c.516-.83 1.606-1.11 2.516-.645.86.438 1.206 1.505.74 2.309-.49.843-1.643 1.176-2.51.722-.943-.492-1.267-1.55-.746-2.386Zm3.582 3.37c.707-.508 1.201-1.32 1.28-2.188.02-.21.173-.378.382-.381l.082-.001 4.862-.08c.203-.002.381.152.39.34.127 2.785-1.464 5.615-3.953 7.083a.394.394 0 0 1-.524-.134c-.886-1.39-1.754-2.75-2.61-4.088-.115-.181-.083-.426.091-.551Zm-3.314-5.38a.422.422 0 0 1-.529-.144v.002l-1.39-2.126-.917-1.404c-.089-.137-.043-.314.106-.405 1.86-1.147 5.964-1.223 7.977-.133.16.085.215.266.128.408l-2.226 3.628c-.11.18-.334.234-.529.152a3.4 3.4 0 0 0-2.62.022Zm-3.105 9.925a.38.38 0 0 1-.525.124 8.275 8.275 0 0 1-2.975-3.282 7.634 7.634 0 0 1-.842-3.685c.004-.186.171-.342.371-.342l3.178-.008 1.592-.004c.214 0 .37.176.382.39.054.97.667 1.739 1.237 2.187.163.128.2.356.092.532l-2.51 4.088Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_5582_21419"
                          x1="-33.7863"
                          y1="39.9866"
                          x2="40.1847"
                          y2="113.958"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.01" />
                          <stop offset="0.5" stopColor="white" />
                          <stop
                            offset={1}
                            stopColor="white"
                            stopOpacity="0.01"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_5582_21419"
                          x1="46.6372"
                          y1="3.39608"
                          x2="33.7332"
                          y2="76.5761"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.035" stopColor="#C09559" />
                          <stop offset="0.154" stopColor="#E4BC6B" />
                          <stop offset="0.255" stopColor="#FFD979" />
                          <stop offset="0.3" stopColor="#CEA349" />
                          <stop offset="0.342" stopColor="#A77822" />
                          <stop offset="0.375" stopColor="#8E5D0A" />
                          <stop offset="0.394" stopColor="#865402" />
                          <stop offset="0.444" stopColor="#8A5705" />
                          <stop offset="0.498" stopColor="#966311" />
                          <stop offset="0.552" stopColor="#AB7625" />
                          <stop offset="0.592" stopColor="#C08938" />
                          <stop offset="0.604" stopColor="#C99441" />
                          <stop offset="0.646" stopColor="#E6B95F" />
                          <stop offset="0.68" stopColor="#F8D072" />
                          <stop offset="0.702" stopColor="#FFD979" />
                          <stop offset="0.867" stopColor="#CF9C48" />
                          <stop offset="0.919" stopColor="#C08938" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_5582_21419"
                          x1="46.1859"
                          y1="5.95179"
                          x2="34.1839"
                          y2="74.0178"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.035" stopColor="#C09559" />
                          <stop offset="0.16" stopColor="#E4BC6B" />
                          <stop offset="0.266" stopColor="#FFD979" />
                          <stop offset="0.307" stopColor="#CEA349" />
                          <stop offset="0.346" stopColor="#A77822" />
                          <stop offset="0.376" stopColor="#8E5D0A" />
                          <stop offset="0.394" stopColor="#865402" />
                          <stop offset="0.444" stopColor="#8A5705" />
                          <stop offset="0.497" stopColor="#966311" />
                          <stop offset="0.552" stopColor="#AB7625" />
                          <stop offset="0.591" stopColor="#C08938" />
                          <stop offset="0.603" stopColor="#C99441" />
                          <stop offset="0.646" stopColor="#E6B95F" />
                          <stop offset="0.68" stopColor="#F8D072" />
                          <stop offset="0.702" stopColor="#FFD979" />
                          <stop offset="0.867" stopColor="#CF9C48" />
                          <stop offset="0.919" stopColor="#C08938" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="chip--71d0f">
                    <div
                      className="chipWrapper--a6465 hidden--c9c96"
                      style={{
                        "-scale": 1,
                        "-flyingChipAnimationDuration": "500ms",
                        "-inflateChipAnimationDuration": "1000ms",
                      }}
                    >
                      <div
                        className="chip--29b81"
                        data-role="chip"
                        data-value={0}
                      >
                        <svg
                          viewBox="0 0 78 78"
                          className="graphics--22cbe"
                          data-role="default-svg"
                          style={{ color: "rgb(146, 146, 146)" }}
                        >
                          <g>
                            <circle
                              className="paint--13ff6"
                              cx="39.019"
                              cy="38.999"
                              r="38.5"
                            />
                            <path
                              className="body--369ee"
                              d="M38.94 12.5A26.5 26.5 0 1 0 65.44 39a26.529 26.529 0 0 0-26.5-26.5zm0 52A25.5 25.5 0 1 1 64.439 39 25.53 25.53 0 0 1 38.94 64.5z"
                            />
                            <circle
                              className="textBackground--84c26"
                              cx={39}
                              cy="38.997"
                              r="25.5"
                            />
                            <path
                              className="body--369ee"
                              d="M38.941 0a39 39 0 1 0 39 39 39.046 39.046 0 0 0-39-39zm-2.088 76.439l.483-8.471a28.99 28.99 0 0 1-4.668-.639l-1.783 8.291a37.277 37.277 0 0 1-12.144-5.051l4.6-7.124a29.143 29.143 0 0 1-8.85-8.851l-7.124 4.6a37.28 37.28 0 0 1-5.045-12.13l8.3-1.784a28.99 28.99 0 0 1-.639-4.668l-8.483.482C1.463 40.4 1.44 39.7 1.44 39s.023-1.391.061-2.08l8.478.483a28.99 28.99 0 0 1 .639-4.668l-8.3-1.785a37.275 37.275 0 0 1 5.047-12.142l7.126 4.6a29.143 29.143 0 0 1 8.85-8.851l-4.6-7.125a37.28 37.28 0 0 1 12.142-5.05l1.786 8.3a28.99 28.99 0 0 1 4.668-.639l-.483-8.484c.692-.038 1.388-.061 2.089-.061s1.4.023 2.087.061l-.483 8.484a28.99 28.99 0 0 1 4.668.639L47 2.381a37.276 37.276 0 0 1 12.14 5.05l-4.6 7.126a29.14 29.14 0 0 1 8.849 8.85l7.127-4.6a37.276 37.276 0 0 1 5.044 12.142l-8.3 1.785a28.99 28.99 0 0 1 .64 4.666l8.478-.483c.038.689.061 1.382.061 2.08s-.023 1.4-.062 2.1l-8.477-.486a28.99 28.99 0 0 1-.639 4.668l8.3 1.784a37.282 37.282 0 0 1-5.046 12.132l-7.125-4.6a29.14 29.14 0 0 1-8.849 8.85l4.6 7.125A37.275 37.275 0 0 1 47 75.619l-1.783-8.291a28.99 28.99 0 0 1-4.668.639l.483 8.471c-.691.038-1.386.061-2.087.061s-1.401-.022-2.092-.06z"
                            />
                          </g>
                          <text
                            className="value--ebf30"
                            x="50%"
                            y="50%"
                            fontSize={30}
                            dy={10}
                            data-role="chip-value"
                          >
                            0
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
