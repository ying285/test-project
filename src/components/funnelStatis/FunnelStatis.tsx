import React from "react";
import "../../style/FunnelStatis.scss";
import "../../style/Vacancies.scss";
import ProgressStatis from "./ProgressStatis";
import LeaderboardTotal from "./LeaderboardTotal";

const FunnelStatis = () => {
  return (
    <div className="funnelStatistic">
      <ProgressStatis />
      <LeaderboardTotal />
    </div>
  );
};

export default FunnelStatis;
