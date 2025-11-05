import ActionButtons from "../../../../../component/shared/CommonUIElement/ActionButtons";
import BackToLobbyBTN from "../../../../../component/shared/CommonUIElement/BackToLobbyBTN";
import EventName from "../../../../../component/shared/CommonUIElement/EventName";
import AmountSection from "./AmountSection";

const CommonUIElement = ({
  data,
  totalWinAmount,
  setTotalWinAmount,
  setShowWinLossResult,
  showWinLossResult,
  setCurrentRoundWinAmount,
}) => {
  return (
    <div className="commonUiElement">
      <EventName data={data} />
      <ActionButtons />
      <AmountSection
        data={data?.result}
        setCurrentRoundWinAmount={setCurrentRoundWinAmount}
        setShowWinLossResult={setShowWinLossResult}
        setTotalWinAmount={setTotalWinAmount}
        showWinLossResult={showWinLossResult}
        totalWinAmount={totalWinAmount}
      />
      <BackToLobbyBTN />
    </div>
  );
};

export default CommonUIElement;
