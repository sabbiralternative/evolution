import { useEffect, useState } from "react";
import { Status } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../redux/features/events/events";
import { setBalance } from "../../../redux/features/auth/authSlice";
import Stake from "../../../component/UI/Chip/Stake";
import { getBackPrice, isRunnerWinner } from "../../../utils/betSlip";
import StakeAnimation from "../../../component/UI/Chip/StakeAnimation";
import { cn } from "../../../utils/cn";
import { keyNames } from "./const";

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
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const dispatch = useDispatch();
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);
  const { balance } = useSelector((state) => state.auth);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    console.log(payload);
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
        marketId: data?.[dataIndex]?.id,
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
    <div className="bettingGridContainer--c27ae">
      <div className="bettingGrid--69ff4">
        <div className="ContainerWithHelperChip--0207f">
          <div className="canvas-center-position--84807">
            <div className="canvas-betting-grid-wrapper--532ae classicStandard-wrapper--00b49 standard">
              <div className="scalingWrapper--a07a4">
                <div className="baseGrid--f84d0">
                  <div
                    className="gridImmersiveAnimation--39bff phone--61524 expanded--6c3fc"
                    data-role="immersive-animation"
                    data-value="up"
                  >
                    <div className="gridImmersivePortraitTranslateWrapper--b4627">
                      <div
                        className="gridImmersivePortraitScaleWrapper--fb89e"
                        style={{}}
                      >
                        <div
                          className="canvasGridContainer--5a6d8"
                          style={{
                            height: "814px",
                            width: "370px",
                            fontSize: "1.4em",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <div
                            className="fadingContainer--ec4d6"
                            data-test-id="main-grid"
                          >
                            <svg viewBox="0 0 370 814">
                              <defs>
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n                                                  .classicStandard-wrapper {\n                                                    opacity: 1 !important;\n                                                    transition: opacity 0.1s\n                                                      ease-in;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .color-none {\n                                                    fill: white;\n                                                    opacity: 0;\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .black_num_shape {\n                                                    fill: rgba(0, 0, 0, 0.8);\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .black_num_shape.transition {\n                                                    fill: rgba(0, 0, 0, 0.8);\n                                                    transition: 800ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .black_num_shape.highlighted {\n                                                    fill: rgba(\n                                                      119,\n                                                      119,\n                                                      119,\n                                                      0.8\n                                                    );\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .red_num_shape {\n                                                    fill: rgba(\n                                                      181,\n                                                      28,\n                                                      18,\n                                                      0.8\n                                                    );\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .red_num_shape.transition {\n                                                    fill: rgba(\n                                                      181,\n                                                      28,\n                                                      18,\n                                                      0.8\n                                                    );\n                                                    transition: 800ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .red_num_shape.highlighted {\n                                                    fill: rgba(\n                                                      216,\n                                                      134,\n                                                      129,\n                                                      0.8\n                                                    );\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .green_shape {\n                                                    fill: rgba(\n                                                      22,\n                                                      105,\n                                                      88,\n                                                      0.8\n                                                    );\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .green_shape.transition {\n                                                    fill: rgba(\n                                                      22,\n                                                      105,\n                                                      88,\n                                                      0.8\n                                                    );\n                                                    transition: 800ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .green_shape.highlighted {\n                                                    fill: rgba(\n                                                      131,\n                                                      175,\n                                                      166,\n                                                      0.8\n                                                    );\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .even_shape {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .even_shape.transition {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 800ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .even_shape.highlighted {\n                                                    fill: rgba(\n                                                      119,\n                                                      119,\n                                                      119,\n                                                      0.47\n                                                    );\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .third_shape {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .third_shape.transition {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 800ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .third_shape.highlighted {\n                                                    fill: rgba(\n                                                      119,\n                                                      119,\n                                                      119,\n                                                      0.47\n                                                    );\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .low_high_shape {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .low_high_shape.transition {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 800ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .low_high_shape.highlighted {\n                                                    fill: rgba(\n                                                      119,\n                                                      119,\n                                                      119,\n                                                      0.47\n                                                    );\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .row_shape {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .row_shape.transition {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 800ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .row_shape.highlighted {\n                                                    fill: rgba(\n                                                      119,\n                                                      119,\n                                                      119,\n                                                      0.47\n                                                    );\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .odd_shape {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .odd_shape.transition {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 800ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .odd_shape.highlighted {\n                                                    fill: rgba(\n                                                      119,\n                                                      119,\n                                                      119,\n                                                      0.47\n                                                    );\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .black_shape {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .black_shape.transition {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 800ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .black_shape.highlighted {\n                                                    fill: rgba(\n                                                      119,\n                                                      119,\n                                                      119,\n                                                      0.47\n                                                    );\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .red_shape {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .red_shape.transition {\n                                                    fill: rgba(0, 0, 0, 0.3);\n                                                    transition: 800ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .red_shape.highlighted {\n                                                    fill: rgba(\n                                                      119,\n                                                      119,\n                                                      119,\n                                                      0.47\n                                                    );\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .red_color_label,\n                                                  .classicStandard-wrapper\n                                                    .black_color_label {\n                                                    pointer-events: none;\n                                                    stroke: #f9e1cc;\n                                                    stroke-width: 1;\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .red_color_label {\n                                                    fill: #b51c12;\n                                                    transition: 0ms fill,\n                                                      0ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .black_color_label {\n                                                    fill: #1a1a1a;\n                                                    transition: 0ms fill,\n                                                      0ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .black_num_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .red_num_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .green_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .even_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .even_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .low_high_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .row_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .third_shape_label {\n                                                    pointer-events: none;\n                                                    font-weight: 400;\n                                                    font-family: Inter, Arial;\n                                                    text-anchor: middle;\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .black_num_shape_label.transition {\n                                                    transition: 800ms fill,\n                                                      800ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .red_num_shape_label.transition {\n                                                    transition: 800ms fill,\n                                                      800ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .green_shape_label.transition {\n                                                    transition: 800ms fill,\n                                                      800ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .even_shape_label.transition {\n                                                    transition: 800ms fill,\n                                                      800ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .even_shape_label.transition {\n                                                    transition: 800ms fill,\n                                                      800ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .low_high_shape_label.transition {\n                                                    transition: 800ms fill,\n                                                      800ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .row_shape_label.transition {\n                                                    transition: 800ms fill,\n                                                      800ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .third_shape_label.transition {\n                                                    transition: 800ms fill,\n                                                      800ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .outside_small_color_label.transition {\n                                                    transition: 800ms fill,\n                                                      800ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .red_color_label.transition {\n                                                    transition: 800ms fill,\n                                                      800ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .black_color_label.transition {\n                                                    transition: 800ms fill,\n                                                      800ms stroke;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .vertical_center {\n                                                    dominant-baseline: central;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .red_num_shape_label {\n                                                    fill: #f9e1cc;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .black_num_shape_label {\n                                                    fill: #f9e1cc;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .green_shape_label {\n                                                    fill: #f9e1cc;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .low_high_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .third_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .even_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .even_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .row_shape_label {\n                                                    fill: #f9e1cc;\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .outside_small_color_label,\n                                                  .classicStandard-wrapper\n                                                    .outside_color_label\n                                                    .small {\n                                                    fill: #f9e1cc;\n                                                    transition: 0ms fill;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .green_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .red_num_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .black_num_shape_label {\n                                                    font-size: 32.9px;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .even_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .even_shape_label,\n                                                  .classicStandard-wrapper\n                                                    .low_high_shape_label {\n                                                    font-size: 32.7px;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .row_shape_label {\n                                                    font-size: 27.9px;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .third_shape_label {\n                                                    font-size: 32.7px;\n                                                  }\n\n                                                  .classicStandard-wrapper\n                                                    .border {\n                                                    pointer-events: none;\n                                                    stroke-width: 1.5;\n                                                    transition: 800ms fill,\n                                                      800ms stroke;\n                                                    fill: transparent;\n                                                    stroke: rgba(\n                                                      249,\n                                                      225,\n                                                      204,\n                                                      0.53\n                                                    );\n                                                  }\n                                                ",
                                  }}
                                />
                              </defs>
                              <g
                                className="classicStandard-wrapper "
                                style={{ opacity: 1 }}
                              >
                                <polygon
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.zero,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="green_shape"
                                  data-bet-spot-id={0}
                                  points="243,0.75 369.25,27.585 369.25,60.87 116.75,60.87 116.75,27.585"
                                >
                                  <foreignObject>
                                    <StakeAnimation
                                      animation={animation}
                                      double={double}
                                      runner={keyNames.zero}
                                      stake={stake}
                                      stakeState={stakeState}
                                    />
                                  </foreignObject>
                                </polygon>
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.one,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={1}
                                  x="116.8"
                                  y="60.9"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.two,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={2}
                                  x="200.9"
                                  y="60.9"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.three,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={3}
                                  x="285.1"
                                  y="60.9"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.four,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={4}
                                  x="116.8"
                                  y="119.2"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.five,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={5}
                                  x="200.9"
                                  y="119.2"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.six,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={6}
                                  x="285.1"
                                  y="119.2"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.seven,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={7}
                                  x="116.8"
                                  y="177.6"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.eight,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={8}
                                  x="200.9"
                                  y="177.6"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.nine,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={9}
                                  x="285.1"
                                  y="177.6"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.ten,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={10}
                                  x="116.8"
                                  y={236}
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.eleven,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={11}
                                  x="200.9"
                                  y={236}
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.twelve,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={12}
                                  x="285.1"
                                  y={236}
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.thirteen,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={13}
                                  x="116.8"
                                  y="294.3"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.fourteen,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={14}
                                  x="200.9"
                                  y="294.3"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.fifteen,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={15}
                                  x="285.1"
                                  y="294.3"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.sixteen,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={16}
                                  x="116.8"
                                  y="352.7"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.seventeen,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={17}
                                  x="200.9"
                                  y="352.7"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.eighteen,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={18}
                                  x="285.1"
                                  y="352.7"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.nineteen,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={19}
                                  x="116.8"
                                  y="411.1"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.twenty,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={20}
                                  x="200.9"
                                  y="411.1"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.twentyOne,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={21}
                                  x="285.1"
                                  y="411.1"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.twentyTwo,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={22}
                                  x="116.8"
                                  y="469.5"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.twentyThree,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={23}
                                  x="200.9"
                                  y="469.5"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.twentyFour,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={24}
                                  x="285.1"
                                  y="469.5"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.twentyFive,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={25}
                                  x="116.8"
                                  y="527.8"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.twentySix,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={26}
                                  x="200.9"
                                  y="527.8"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.twentySeven,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={27}
                                  x="285.1"
                                  y="527.8"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.twentyEight,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={28}
                                  x="116.8"
                                  y="586.2"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.twentyNine,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={29}
                                  x="200.9"
                                  y="586.2"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.thirty,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={30}
                                  x="285.1"
                                  y="586.2"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.thirtyOne,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={31}
                                  x="116.8"
                                  y="644.6"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.thirtyTwo,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={32}
                                  x="200.9"
                                  y="644.6"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.thirtyThree,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={33}
                                  x="285.1"
                                  y="644.6"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.thirtyFour,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={34}
                                  x="116.8"
                                  y="702.9"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.thirtyFive,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_num_shape"
                                  data-bet-spot-id={35}
                                  x="200.9"
                                  y="702.9"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.thirtySix,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_num_shape"
                                  data-bet-spot-id={36}
                                  x="285.1"
                                  y="702.9"
                                  width="84.167"
                                  height="58.369"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.threeToThirtySix,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="row_shape"
                                  data-bet-spot-id="top2to1"
                                  x="285.084"
                                  y="761.298"
                                  width="84.167"
                                  height="51.949"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.twoToThirtyFive,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="row_shape"
                                  data-bet-spot-id="middle2to1"
                                  x="200.917"
                                  y="761.298"
                                  width="84.167"
                                  height="51.949"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.oneToThirtyFour,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="row_shape"
                                  data-bet-spot-id="bottom2to1"
                                  x="116.75"
                                  y="761.298"
                                  width="84.167"
                                  height="51.949"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.firstTwelve,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="third_shape"
                                  data-bet-spot-id="1st12"
                                  x="58.75"
                                  y="60.87"
                                  width={58}
                                  height="233.476"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.secondTwelve,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="third_shape"
                                  data-bet-spot-id="2nd12"
                                  x="58.75"
                                  y="294.346"
                                  width={58}
                                  height="233.476"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.thirdTwelve,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="third_shape"
                                  data-bet-spot-id="3rd12"
                                  x="58.75"
                                  y="527.822"
                                  width={58}
                                  height="233.476"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.oneToEighteen,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="low_high_shape"
                                  data-bet-spot-id="from1to18"
                                  x="0.75"
                                  y="60.87"
                                  width={58}
                                  height="116.738"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.even,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="even_shape"
                                  data-bet-spot-id="even"
                                  x="0.75"
                                  y="177.608"
                                  width={58}
                                  height="116.738"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.red,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="red_shape"
                                  data-bet-spot-id="red"
                                  x="0.75"
                                  y="294.346"
                                  width={58}
                                  height="116.738"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.black,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="black_shape"
                                  data-bet-spot-id="black"
                                  x="0.75"
                                  y="411.084"
                                  width={58}
                                  height="116.738"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.odd,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="odd_shape"
                                  data-bet-spot-id="odd"
                                  x="0.75"
                                  y="527.822"
                                  width={58}
                                  height="116.738"
                                />
                                <rect
                                  onClick={() =>
                                    handleStakeChange({
                                      key: keyNames.nineteenToThirtySix,
                                      data,
                                      dataIndex: 0,
                                      runnerIndex: 0,
                                      type: "back",
                                    })
                                  }
                                  className="low_high_shape"
                                  data-bet-spot-id="from19to36"
                                  x="0.75"
                                  y="644.56"
                                  width={58}
                                  height="116.738"
                                />
                                <path
                                  shapeRendering="geometricPrecision"
                                  className="border"
                                  d="M243 0.75 L369.25 27.585 L369.25 60.87 L116.75 60.87 L116.75 27.585z M116.75 60.87 h252.501 v700.428 h-252.501z M369.251 60.87 h-252.501 M369.251 119.239 h-252.501 M369.251 177.608 h-252.501 M369.251 235.977 h-252.501 M369.251 294.346 h-252.501 M369.251 352.715 h-252.501 M369.251 411.084 h-252.501 M369.251 469.453 h-252.501 M369.251 527.822 h-252.501 M369.251 586.191 h-252.501 M369.251 644.56 h-252.501 M369.251 702.929 h-252.501 M285.08399999999995 60.87 v700.428 M200.917 60.87 v700.428M369.251 761.298 v51.949 h-252.501 v-51.949z M285.084 761.298 v51.949 M200.917 761.298 v51.949 M116.75 60.87 v700.428 h-116 v-700.428z M58.75 60.87 v700.428 M58.75 294.346 h58 M58.75 527.822 h58 M0.75 177.608 h58 M0.75 294.346 h58 M0.75 411.084 h58 M0.75 527.822 h58 M0.75 644.56 h58"
                                />
                                <text
                                  className="green_shape_label vertical_center"
                                  x="65.700%"
                                  y="3.800%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  0
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="42.900%"
                                  y="11.100%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  1
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="65.700%"
                                  y="11.100%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  2
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="88.400%"
                                  y="11.100%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  3
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="42.900%"
                                  y="18.200%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  4
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="65.700%"
                                  y="18.200%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  5
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="88.400%"
                                  y="18.200%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  6
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="42.900%"
                                  y="25.400%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  7
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="65.700%"
                                  y="25.400%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  8
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="88.400%"
                                  y="25.400%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  9
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="42.900%"
                                  y="32.600%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  10
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="65.700%"
                                  y="32.600%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  1 1
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="88.400%"
                                  y="32.600%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  12
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="42.900%"
                                  y="39.700%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  13
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="65.700%"
                                  y="39.700%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  14
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="88.400%"
                                  y="39.700%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  15
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="42.900%"
                                  y="46.900%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  16
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="65.700%"
                                  y="46.900%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  17
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="88.400%"
                                  y="46.900%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  18
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="42.900%"
                                  y="54.100%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  19
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="65.700%"
                                  y="54.100%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  20
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="88.400%"
                                  y="54.100%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  21
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="42.900%"
                                  y="61.300%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  22
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="65.700%"
                                  y="61.300%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  23
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="88.400%"
                                  y="61.300%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  24
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="42.900%"
                                  y="68.400%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  25
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="65.700%"
                                  y="68.400%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  26
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="88.400%"
                                  y="68.400%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  27
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="42.900%"
                                  y="75.600%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  28
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="65.700%"
                                  y="75.600%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  29
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="88.400%"
                                  y="75.600%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  30
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="42.900%"
                                  y="82.800%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  31
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="65.700%"
                                  y="82.800%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  32
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="88.400%"
                                  y="82.800%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  33
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="42.900%"
                                  y="89.900%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  34
                                </text>
                                <text
                                  className="black_num_shape_label vertical_center"
                                  x="65.700%"
                                  y="89.900%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  35
                                </text>
                                <text
                                  className="red_num_shape_label vertical_center"
                                  x="88.400%"
                                  y="89.900%"
                                  dx="0em"
                                  dy="0em"
                                >
                                  36
                                </text>
                                <g className="row_shape_label">
                                  <text
                                    x="88.400%"
                                    y="96.700%"
                                    dx="-0.65em"
                                    dy="0.36em"
                                  >
                                    2
                                  </text>
                                  <text
                                    className="small"
                                    fontSize="50%"
                                    x="88.400%"
                                    y="96.700%"
                                    dx="0.14em"
                                  >
                                    TO
                                  </text>
                                  <text
                                    x="88.400%"
                                    y="96.700%"
                                    dx="0.75em"
                                    dy="0.36em"
                                  >
                                    1
                                  </text>
                                </g>
                                <g className="row_shape_label">
                                  <text
                                    x="65.700%"
                                    y="96.700%"
                                    dx="-0.65em"
                                    dy="0.36em"
                                  >
                                    2
                                  </text>
                                  <text
                                    className="small"
                                    fontSize="50%"
                                    x="65.700%"
                                    y="96.700%"
                                    dx="0.14em"
                                  >
                                    TO
                                  </text>
                                  <text
                                    x="65.700%"
                                    y="96.700%"
                                    dx="0.75em"
                                    dy="0.36em"
                                  >
                                    1
                                  </text>
                                </g>
                                <g className="row_shape_label">
                                  <text
                                    x="42.900%"
                                    y="96.700%"
                                    dx="-0.65em"
                                    dy="0.36em"
                                  >
                                    2
                                  </text>
                                  <text
                                    className="small"
                                    fontSize="50%"
                                    x="42.900%"
                                    y="96.700%"
                                    dx="0.14em"
                                  >
                                    TO
                                  </text>
                                  <text
                                    x="42.900%"
                                    y="96.700%"
                                    dx="0.75em"
                                    dy="0.36em"
                                  >
                                    1
                                  </text>
                                </g>
                                <g
                                  className="third_shape_label"
                                  transform="rotate(90,87.69,177.452)"
                                >
                                  <text
                                    x="23.700%"
                                    y="21.800%"
                                    dx="-1em"
                                    dy="0.36em"
                                  >
                                    1
                                  </text>
                                  <text
                                    className="small"
                                    fontSize="50%"
                                    x="23.700%"
                                    y="21.800%"
                                    dx="-0.8em"
                                  >
                                    ST
                                  </text>
                                  <text
                                    x="23.700%"
                                    y="21.800%"
                                    dx="0.7em"
                                    dy="0.36em"
                                  >
                                    12
                                  </text>
                                </g>
                                <g
                                  className="third_shape_label"
                                  transform="rotate(90,87.69,411.07)"
                                >
                                  <text
                                    x="23.700%"
                                    y="50.500%"
                                    dx="-1.2em"
                                    dy="0.36em"
                                  >
                                    2
                                  </text>
                                  <text
                                    className="small"
                                    fontSize="50%"
                                    x="23.700%"
                                    y="50.500%"
                                    dx="-0.8em"
                                  >
                                    ND
                                  </text>
                                  <text
                                    x="23.700%"
                                    y="50.500%"
                                    dx="0.7em"
                                    dy="0.36em"
                                  >
                                    12
                                  </text>
                                </g>
                                <g
                                  className="third_shape_label"
                                  transform="rotate(90,87.69,644.688)"
                                >
                                  <text
                                    x="23.700%"
                                    y="79.200%"
                                    dx="-1.2em"
                                    dy="0.36em"
                                  >
                                    3
                                  </text>
                                  <text
                                    className="small"
                                    fontSize="50%"
                                    x="23.700%"
                                    y="79.200%"
                                    dx="-0.8em"
                                  >
                                    RD
                                  </text>
                                  <text
                                    x="23.700%"
                                    y="79.200%"
                                    dx="0.7em"
                                    dy="0.36em"
                                  >
                                    12
                                  </text>
                                </g>
                                <text
                                  className="low_high_shape_label vertical_center"
                                  x="8.000%"
                                  y="14.600%"
                                  dx="0em"
                                  dy="0em"
                                  transform="rotate(90,29.6,118.844)"
                                >
                                  1-18
                                </text>
                                <text
                                  className="even_shape_label vertical_center"
                                  x="8.000%"
                                  y="29.000%"
                                  dx="0em"
                                  dy="0em"
                                  transform="rotate(90,29.6,236.05999999999997)"
                                >
                                  EVEN
                                </text>
                                <polygon
                                  className="red_color_label"
                                  points="12.181 352.715 29.75 311.857 47.319 352.715 29.75 393.573"
                                />
                                <polygon
                                  className="black_color_label"
                                  points="12.181 469.453 29.75 428.595 47.319 469.453 29.75 510.311"
                                />
                                <text
                                  className="even_shape_label vertical_center"
                                  x="8.000%"
                                  y="72.000%"
                                  dx="0em"
                                  dy="0em"
                                  transform="rotate(90,29.6,586.0799999999999)"
                                >
                                  ODD
                                </text>
                                <text
                                  className="low_high_shape_label vertical_center"
                                  x="8.000%"
                                  y="86.400%"
                                  dx="0em"
                                  dy="0em"
                                  transform="rotate(90,29.6,703.2959999999999)"
                                >
                                  19-36
                                </text>
                              </g>
                            </svg>
                          </div>
                          <div className="winningAnimationContainer--dec5e">
                            <div
                              className="container--14a03"
                              data-role="winning-animation"
                              style={{
                                top: "68.4%",
                                left: "88.4%",
                              }}
                            >
                              <div className="innerCircle--ca163" />
                              <div className="outerCircle--28f19" />
                              <div className="dolly--4e59b" />
                            </div>
                          </div>
                          <div />
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
      <div className="layoutTimerCentered--ca6b7">
        <div className="wrapper--8b249">
          <div
            data-role="circle-timer"
            data-timer-version={1}
            className="container--6cb86 commonUiElement fadeIn--a5208"
          >
            <div
              className="timerCircleContainer--4935d spin--ff972"
              data-role="timer-circle"
            >
              <canvas
                style={{
                  display: "block",
                  width: "55px",
                  height: "55px",
                }}
                width={165}
                height={165}
              />
            </div>
            <div className="contentWrapper--db941" data-role="timer-content">
              <canvas
                style={{
                  display: "block",
                  width: "55px",
                  height: "55px",
                }}
                width={165}
                height={165}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
