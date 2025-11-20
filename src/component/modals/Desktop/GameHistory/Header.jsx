import { usePlaySound } from "../../../../hooks/playSound";

const Header = ({ data, setTab }) => {
  const { playClickSound } = usePlaySound();
  return (
    <h3 className="title--47f58" data-role="draggable">
      <div className="handlebar-wrapper--d9d5a">
        <svg
          viewBox="0 0 100 100"
          className="iconWrapper--b4e49"
          style={{ height: "100%" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon--8dcd0"
            height="100%"
            y="0%"
          >
            <path d="M8 20V4h2v16H8Zm5 0V4h2v16h-2Z" />
          </svg>
        </svg>
      </div>
      <span className="icon--c1698">
        <svg
          viewBox="0 0 100 100"
          className="iconWrapper--b4e49"
          style={{ height: "100%" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon--8dcd0"
            height="100%"
            y="0%"
          >
            <path d="M10.77 3.6c2.16-.33 4.37.19 6.16 1.45l-.04-.02a8.5 8.5 0 1 1-11.66 12.1l1.59-1.21a6.5 6.5 0 1 0-.1-7.74l1.42 1.38-5.64 1.49L3.88 5.4l1.44 1.4a8.51 8.51 0 0 1 5.45-3.2Z" />
            <path d="M11.33 12.32V7.49h1.5v4.2l3.05 3.05-1.06 1.06-3.5-3.48Z" />
          </svg>
        </svg>
      </span>
      <span data-role="window-title">
        GAME HISTORY - {data?.result?.game_details?.table}
      </span>
      <a
        onClick={() => {
          setTab(null);
          playClickSound();
        }}
        className="close--ed249"
        data-role="window-gamehistory_close"
      >
        <svg
          viewBox="0 0 100 100"
          className="iconWrapper--b4e49"
          style={{ height: "100%" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon--8dcd0"
            height="100%"
            y="0%"
          >
            <path d="m13.615 11.864 6.116 6.116-1.748 1.747-6.115-6.116-6.12 6.12L4 17.984l6.12-6.12-6.116-6.117L5.75 4l6.117 6.116 6.112-6.112 1.747 1.748-6.112 6.112Z" />
          </svg>
        </svg>
      </a>
    </h3>
  );
};

export default Header;
