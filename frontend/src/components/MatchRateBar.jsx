import "./MatchRateBar.css";

const MatchRateBar = ({ name, rate }) => {
  return (
    <div className="MatchRateBar">
      <div className="MatchRateLabel">
        <span className="BakeryName">{name}</span>
        <span className="MatchRateText">취향매칭률 {rate}%</span>
      </div>
      <div className="MatchRateTrack">
        <div className="MatchRateFill" style={{ width: `${rate}%` }} />
      </div>
    </div>
  );
};

export default MatchRateBar;
