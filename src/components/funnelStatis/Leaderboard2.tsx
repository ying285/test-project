import React from "react";
import "../../style/Leaderborad2.scss";

export const Leaderboard2: React.FC<{
  firstName: string;
  lastName: string;
  rate: number;
}> = (props) => {
  console.log(typeof props.rate);

  return (
    <React.Fragment>
      <div className="leaderboard2__items__detail">
        <p>{`${props.rate}%` || "97%"}</p>
        <div className="leaderboard2__items__detail__span">
          <span>{`${props.firstName} ${props.lastName}` || "John Smith"}</span>

          <div className="leaderboard2__items__detail__span__profile  leaderboard2__items__detail__span__profileExtra">
            <span>Profile Results</span>
          </div>
        </div>
      </div>
      <div
        className="leaderboard2__items__detail__line"
        style={{
          background:
            //`linear-gradient(to right, #fdd301 ${props.rate}%, #c2c0c0 (100-${props.rate} ))` ||
            `linear-gradient(to right, #fdd301 ${props.rate}%, #c2c0c0 20%)`,
        }}
      ></div>
      <svg height="30" width="30" className="leaderborad2__lin1">
        <path
          d="
          M 0,0
          L0,100
        "
        />
      </svg>

      <svg height="30" width="30" className="leaderborad2__lin2">
        <path
          d="
          M 0,0
          L0,40
        "
        />
      </svg>

      <svg height="30" width="30" className="leaderborad2__lin3">
        <path
          d="
          M 0,0
          L0,40
        "
        />
      </svg>
    </React.Fragment>
  );
};
