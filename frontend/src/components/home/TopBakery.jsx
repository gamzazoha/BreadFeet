import "./TopBakery.css";
import bakeryImage from "../../assets/bakery1.jpg";

// 나중에 api 연결
const mockData = [
  {
    id: 0,
    name: "감자빵집",
    location: "대구광역시 북구 대학로 80",
    image: bakeryImage,
  },
];

const TopbakeryList = () => {
  return (
    <div className="TopBakeryList">
      <h2 className="TopBakeryTitle">이번 주 Top 3 빵집</h2>
      <h3 className="TopBakeryPhrase">
        현재 시각기준 가장 방문자가 많은 빵집이에요!
      </h3>
      <div className="TopBakery">
        <div className="TopBakeryImage">
          <img src={mockData[0].image} alt={mockData[0].name} />
        </div>
        <h4>{mockData[0].name}</h4>
        <h5>{mockData[0].location}</h5>
      </div>
    </div>
  );
};

export default TopbakeryList;
