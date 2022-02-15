import Leaderboard from "./Leaderboard";
import DataAllFetch from "../hooks/DataAllFetch";

const LeaderboardTotal: React.FC = () => {
  let url = "https://api.jampad.ml/api/statistics/leaderboard";

  const leaderboardData: any = DataAllFetch(url);
  console.log(leaderboardData);

  return (
    <div>
      {leaderboardData.map((item: any) => (
        <Leaderboard
          key={item.success_rate}
          lastName={item.last_name}
          firstName={item.first_name}
          rate={item.success_rate}
        />
      ))}
    </div>
  );
};

export default LeaderboardTotal;
