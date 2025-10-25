import { useState } from "react";
import { cardsArray } from "./const";

const CardBox = () => {
  const [cards, setCards] = useState([]);

  const handleSelectCard = (card) => {
    console.log(card);
    const isSameCard = cards?.find((c) => c?.name === card?.name);
    if (isSameCard) {
      const updatedCard = cards?.filter((c) => c?.name !== card?.name);
      setCards(updatedCard);
      return;
    }
    if (cards?.length === 3) {
      return;
    }

    // Add new card
    setCards((prev) => [...prev, card]);
  };

  return (
    <div
      id="selection-cards"
      className="flex flex-wrap gap-1 justify-center items-center"
    >
      {cardsArray?.map((card) => {
        const isSelected = cards?.find((c) => c?.name === card?.name);
        return (
          <div
            onClick={() => handleSelectCard(card)}
            key={card.name}
            className={`relative rounded-md text-black p-0.5 flex flex-col items-center ${
              isSelected ? "bg-green-500" : "bg-zinc-800"
            }`}
          >
            <div className="flex relative flex-col items-center w-9 text-black rounded border aspect-[3/4] border-zinc-800 bg-zinc-200">
              <div className="flex absolute inset-0 justify-center items-center font-semibold">
                <span className="flex justify-center items-center w-10 h-10 font-bold text-black rounded-md">
                  {card.name}
                </span>
              </div>
              <div
                className="absolute w-3 h-4"
                style={{ top: "3%", left: "3%" }}
              >
                <svg
                  width={30}
                  height={42}
                  className="w-full h-full"
                  viewBox="0 0 30 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.5745 17.4744C27.5745 17.4744 21.1874 10.6277 14.9621 0C8.81758 10.6277 2.34981 17.4744 2.34981 17.4744C0.813681 19.3139 -0.0757726 21.8686 0.00507607 24.73C0.0859247 29.3285 2.75405 33.3139 6.39224 34.1314C9.14109 34.7446 11.809 33.4161 13.5877 30.8613C12.86 37.9124 10.1112 41.1825 10.1112 41.1825L10.758 42C10.758 42 12.9409 40.5694 14.9621 40.5694C16.9833 40.5694 19.1662 42 19.1662 42L19.813 41.1825C19.813 41.1825 17.0641 37.9124 16.3365 30.7591C18.1151 33.3139 20.864 34.7446 23.6128 34.1314C27.251 33.3139 29.9192 29.4307 30 24.73C30 21.9708 29.1107 19.3139 27.5745 17.4744Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div
                className="absolute w-3 h-4"
                style={{ top: "3%", right: "3%" }}
              >
                <svg
                  width={30}
                  height={42}
                  className="w-full h-full"
                  viewBox="0 0 30 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 42C21.2481 28.899 27.6524 20.6057 27.6524 20.6057C29.1363 18.322 30.0736 15.197 29.9955 11.7115C29.9174 6.0624 27.1838 1.13449 23.5912 0.172952C19.9204 -0.788589 16.3277 2.33643 15 7.62491C13.6723 2.33643 10.0015 -0.788589 6.40883 0.172952C2.73805 1.13449 0.0826345 5.94221 0.00453288 11.7115C-0.0735687 15.197 0.863651 18.322 2.34758 20.6057C2.34758 20.6057 8.82997 29.0192 15 42Z"
                    fill="#E83F48"
                  />
                </svg>
              </div>
              <div
                className="absolute w-3 h-4"
                style={{ left: "3%", bottom: "3%" }}
              >
                <svg
                  width={30}
                  height={42}
                  className="w-full h-full"
                  viewBox="0 0 30 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 21C9.48649 10.3463 15 0 15 0C15 0 20.5135 10.3463 30 21C20.5135 31.6537 15 42 15 42C15 42 9.48649 31.6537 0 21Z"
                    fill="#E83F48"
                  />
                </svg>
              </div>
              <div
                className="absolute w-3 h-4"
                style={{ right: "3%", bottom: "3%" }}
              >
                <svg
                  width={30}
                  height={42}
                  className="w-full h-full"
                  viewBox="0 0 30 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.897 16.704C27.897 16.704 24.711 12.5051 20.9033 15.2702C23.7785 11.7882 23.0014 7.48683 23.0014 7.48683C22.1466 -0.296551 14.9976 0.0106851 14.9976 0.0106851C14.9976 0.0106851 8.08161 -0.60379 6.9937 7.48683C6.9937 7.48683 6.52738 11.993 9.24716 15.3726C5.43947 12.4027 2.17586 16.704 2.17586 16.704C0.854824 18.5474 0 21.1078 0 23.8729C0 29.608 2.79741 34.0118 7.693 34.0118C7.693 34.0118 10.6459 34.2166 12.9772 30.6322C12.9772 30.6322 13.9096 33.3973 12.3555 37.5962C11.1899 40.4638 9.6357 41.1807 9.6357 41.1807L10.2574 42C10.2574 42 12.8218 40.4638 14.9976 40.4638C17.1735 40.4638 19.7377 42 19.7377 42L20.4372 41.1807C20.4372 41.1807 18.883 40.4638 17.6396 37.4938C16.0855 33.2949 17.0179 30.6322 17.0179 30.6322C19.3492 34.2166 22.3021 34.0118 22.3021 34.0118C27.1977 34.0118 29.9951 29.608 29.9951 23.8729C30.0728 21.1078 29.2181 18.5474 27.897 16.704Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardBox;
