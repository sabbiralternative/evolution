import Chip100 from "./Chip100";
import Chip200 from "./Chip200";
import Chip500 from "./Chip500";
import Chip2K500 from "./Chip2K500";
import Chip50K from "./Chip50K";
import Chip10K from "./Chip10K";
import Chip100K from "./Chip100K";

const Stake = ({ stake }) => {
  if (stake < 200) {
    return <Chip100 value={stake} />;
  }
  if (stake < 500) {
    return <Chip200 value={stake} />;
  }
  if (stake < 2500) {
    return <Chip500 value={stake} />;
  }
  if (stake < 10000) {
    return <Chip2K500 value={stake} />;
  }
  if (stake < 50000) {
    return <Chip10K value={stake} />;
  }
  if (stake < 100000) {
    return <Chip50K value={stake} />;
  } else {
    return <Chip100K value={stake} />;
  }
};

export default Stake;
