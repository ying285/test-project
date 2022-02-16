import "../../style/Leaderboard.scss";

const Leaderboard: React.FC<{
  firstName: string;
  lastName: string;
  rate: number;
}> = (props) => {
  return (
    <div className="leaderboard__mainItem">
      <div className="leaderboard__mainItem__rate">
        <h5>{`${props.rate}%` || "65%"}</h5>
        <p>success rate</p>
      </div>
      <p className="leaderboard__mainItem__name">
        {`${props.firstName} ${props.lastName}` || "Sadd Beil"}
      </p>
      <div className="leaderboard__mainItem__bottom">
        <p>Profile</p>
        <p>Results</p>
      </div>
    </div>
  );
};

/* <div className="leaderboard__main__card__item">
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
          </div> */

/* <div className="leaderboard__main__chart__item">
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
        <hr /> */

export default Leaderboard;
