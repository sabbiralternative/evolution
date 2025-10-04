import ActionButtons from "./ActionButtons";
import AmountSection from "./AmountSection";
import BackToLobbyBTN from "./BackToLobbyBTN";
import EventName from "./EventName";

const CommonUIElement = ({ data }) => {
  return (
    <div className="commonUiElement">
      <EventName data={data} />
      <ActionButtons />
      <AmountSection />
      <BackToLobbyBTN />
    </div>
  );
};

export default CommonUIElement;
