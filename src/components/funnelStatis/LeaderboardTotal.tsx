import Leaderboard from "./Leaderboard";
import { Leaderboard2 } from "./Leaderboard2";
import SubLeaderboard from "./SubLeaderboard";
import DataAllFetch from "../hooks/DataAllFetch";
import React from "react";
import "../../style/LeaderboardTotal.scss";

const LeaderboardTotal: React.FC = () => {
  let url = "https://api.jampad.ml/api/statistics/leaderboard";

  const leaderboardData: any = DataAllFetch(url);

  if (!leaderboardData) {
    return (
      <div className="leaderboardTotal">
        <SubLeaderboard />
      </div>
    );
  }

  const newLeaderboardData = leaderboardData?.sort(
    (a: any, b: any) => b.success_rate - a.success_rate
  );

  console.log(newLeaderboardData);

  const newLeaderboardFirstThree = newLeaderboardData?.slice(0, 3);
  const newLeaderboardSecondThree = newLeaderboardData?.slice(3, 6);
  console.log(newLeaderboardFirstThree);
  console.log(newLeaderboardSecondThree);

  return (
    <div className="leaderboardTotal">
      <div>
        <div className="leaderboardTotal__title">
          <h5>Leaderboard</h5>
          <p>Three best-performing candiates are:</p>
        </div>
        <div className="leaderboardTotal__leaderboard__layout">
          {newLeaderboardFirstThree?.map((item: any) => (
            <Leaderboard
              key={item.success_rate}
              lastName={item.last_name}
              firstName={item.first_name}
              rate={item.success_rate}
            />
          ))}
        </div>
      </div>

      <div className="leaderboard2">
        <div className="leaderboard2__title">
          <p>Also:</p>
        </div>
        <div className="leaderboard2__items">
          {newLeaderboardSecondThree?.map((item: any) => (
            <Leaderboard2
              key={item.success_rate}
              lastName={item.last_name}
              firstName={item.first_name}
              rate={item.success_rate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTotal;
