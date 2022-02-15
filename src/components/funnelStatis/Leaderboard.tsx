import "../../style/Leaderboard.scss";

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <div className="leaderboard__title">
        <h5>Leaderboard</h5>
        <p>Three best-performing candiates are:</p>
      </div>
      <div className="leaderboard__main">
        <div className="leaderboard__main__card">
          <div className="leaderboard__main__card__item">
            <div className="leaderboard__main__card__title">
              <p>97%</p>
              <p>success rate</p>
            </div>
            <p className="leaderboard__main__card__name">John Smith</p>
            <div className="leaderboard__main__card__buttom">
              <p>Profile</p>
              <p>Results</p>
            </div>
          </div>

          <div className="leaderboard__main__card__item">
            <div className="leaderboard__main__card__title">
              <p>83%</p>
              <p>success rate</p>
            </div>
            <p className="leaderboard__main__card__name">John Smith</p>
            <div className="leaderboard__main__card__buttom">
              <p>Profile</p>
              <p>Results</p>
            </div>
          </div>

          <div className="leaderboard__main__card__item">
            <div className="leaderboard__main__card__title">
              <p>71%</p>
              <p>success rate</p>
            </div>
            <p className="leaderboard__main__card__name">John Smith</p>
            <div className="leaderboard__main__card__buttom">
              <p>Profile</p>
              <p>Results</p>
            </div>
          </div>
        </div>
        <div className="leaderboard__main__chart">
          <p>Also:</p>
          <div className="leaderboard__main__chart__item">
            <p>65%</p>
            <div className="leaderboard__main__chart__item__span">
              <span>Saad Beil</span>
              <span>Profile Results</span>
            </div>
          </div>
          <hr />
          <div className="leaderboard__main__chart__item">
            <p>58%</p>
            <div className="leaderboard__main__chart__item__span leaderboard__main__chart__item__span__58">
              <span>Saad Beil</span>
              <span>Profile Results</span>
            </div>
          </div>
          <hr />
          <div className="leaderboard__main__chart__item">
            <p>52%</p>
            <div className="leaderboard__main__chart__item__span">
              <span>Saad Beil</span>
              <span>Profile Results</span>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
