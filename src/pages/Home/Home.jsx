import Loader from "../../component/shared/Loader/Loader";
import { useGetCasinoThumbnail } from "../../hooks/casino";
import RecentlyPlayed from "./RecentlyPlayed";
import SliderThumbnail from "./SliderThumbnail";

const Home = () => {
  const { data, isLoading } = useGetCasinoThumbnail({ id: "home" });

  const top_picks = data?.top_picks;
  const casinos_choice = data?.casinos_choice;
  const top_games = data?.top_games;

  if (isLoading) {
    return <Loader />;
  }
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
