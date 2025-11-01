const Card = ({ cards }) => {
  return (
    <div className="flex items-center justify-center mb-5">
      {cards?.map((card) => (
        <img
          key={card}
          className="size-[50px]"
          src={`/cards/${card}.png`}
          alt="card"
        />
      ))}
    </div>
  );
};

export default Card;
