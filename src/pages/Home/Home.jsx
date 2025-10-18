import { useGetLiveCasinoThumbnailQuery } from "../../redux/features/casino/casino.api";
import RecentlyPlayed from "./RecentlyPlayed";
import SliderThumbnail from "./SliderThumbnail";

const Home = () => {
  const { data } = useGetLiveCasinoThumbnailQuery({ id: "home" });

  const top_picks = data?.top_picks;
  const casinos_choice = data?.casinos_choice;
  const top_games = data?.top_games;

  return (
    <main className="InnerContent--56377">
      <SliderThumbnail data={top_picks} title="Top Picks for you" />
      <RecentlyPlayed />
      <SliderThumbnail data={casinos_choice} title="Casino's Choice" />
      <SliderThumbnail data={top_games} title="Top Games" />
    </main>
  );
};

export default Home;
