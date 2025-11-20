const Card = ({ cards }) => {
  return (
    <div className="flex items-center justify-center mb-5">
      <div className="size-[50px] ">
        {cards?.[0] && (
          <img
            className="size-[50px]"
            src={`/cards/${cards?.[0]}.png`}
            alt="card"
          />
        )}
      </div>
      <div className="size-[50px] ">
        {cards?.[2] && (
          <img
            className="size-[50px]"
            src={`/cards/${cards?.[0]}.png`}
            alt="card"
          />
        )}
      </div>
      <div className="size-[50px] ">
        {cards?.[1] && (
          <img
            className="size-[50px]"
            src={`/cards/${cards?.[0]}.png`}
            alt="card"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
