import React from "react";
import "../../style/SubLeaderboard.scss";

const SubLeaderboard = () => {
  return (
    <React.Fragment>
      <div className="subLeaderboard">
        <div className="subLeaderboard__title">
          <h5>Leaderboard</h5>
          <p>Three best-performing candiates are:</p>
        </div>
        <div className="subLeaderboard__layout">
          <div className="subLeaderboard__mainItem">
            <div className="subLeaderboard__mainItem__rate">
              <h5>97%</h5>
              <p>success rate</p>
            </div>
            <p className="subLeaderboard__mainItem__name">John Smith</p>
            <div className="subLeaderboard__mainItem__bottom">
              <p>Profile</p>
              <p>Results</p>
            </div>
          </div>

          <div className="subLeaderboard__mainItem">
            <div className="subLeaderboard__mainItem__rate">
              <h5>83%</h5>
              <p>success rate</p>
            </div>
            <p className="subLeaderboard__mainItem__name">John Smith</p>
            <div className="subLeaderboard__mainItem__bottom">
              <p>Profile</p>
              <p>Results</p>
            </div>
          </div>
          <div className="subLeaderboard__mainItem">
            <div className="subLeaderboard__mainItem__rate">
              <h5>71%</h5>
              <p>success rate</p>
            </div>
            <p className="subLeaderboard__mainItem__name">John Smith</p>
            <div className="subLeaderboard__mainItem__bottom">
              <p>Profile</p>
              <p>Results</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div></div> */}
      <div className="leaderboard__main">
        <div className="leaderboard__main__title">
          <p>Also:</p>
        </div>
        <div className="leaderboard__main__chart__item">
          <p>65%</p>
          <div className="leaderboard__main__chart__item__span ">
            <span>Saad Beil</span>
            <div className="leaderboard__main__chart__item__span__sub ">
              <span>Profile Results</span>
            </div>
          </div>
        </div>
        <hr />

        <div className="leaderboard__main__chart__item">
          <p>58%</p>
          <div className="leaderboard__main__chart__item__span leaderboard__main__chart__item__span__58">
            <span>Nimra Carty</span>
            <div className="leaderboard__main__chart__item__span__sub">
              <span>Profile Results</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="leaderboard__main__chart__item">
          <p>52%</p>
          <div className="leaderboard__main__chart__item__span">
            <span>Ada Wagner</span>
            <div className="leaderboard__main__chart__item__span__sub ">
              <span>Profile Results</span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </React.Fragment>
  );
};

export default SubLeaderboard;
