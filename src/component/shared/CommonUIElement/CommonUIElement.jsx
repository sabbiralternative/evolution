import ActionButtons from "./ActionButtons";
import AmountSection from "./AmountSection";
import BackToLobbyBTN from "./BackToLobbyBTN";
import EventName from "./EventName";

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
