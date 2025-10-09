import "./Home.css";
import PopularChallenge from "./PopularChallenge";
import TopBakery from "./TopBakery";
import HomeRightLogin from "./HomeRightLogin";

const Home = () => {
  return (
    <div className="HomeWrapper">
      <div className="HomeContents">
        <PopularChallenge />
        <TopBakery />
        <HomeRightLogin />
      </div>
    </div>
  );
};

export default Home;
