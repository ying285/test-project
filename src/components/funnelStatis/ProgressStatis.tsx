import "../../style/ProgressStatis.scss";
import Digram from "./Digram";
import DataAllFetch from "../hooks/DataAllFetch";

const ProgressStatis = () => {
  let url = "https://api.jampad.ml/api/statistics/funnel";

  interface obj {
    passed: number;
    unsuccessful: number;
    overall: number;
  }

  const funnelStatic: obj | any = DataAllFetch(url);

  return (
    <div className="progressStatis">
      <div className="progressStatis__main">
        <h5>Funnel-progress statistics</h5>
        <div>
          <div className="progressStatis__main__mychart">
            <Digram />
          </div>
        </div>
      </div>
      <div className="progressStatis__sub">
        <h5>At the current stage</h5>
        <div className="progressStatis__sub__card">
          <i className="bi bi-check-circle" />
          <div>
            {funnelStatic && <p>{funnelStatic.passed} </p>}
            {!funnelStatic && <p>77</p>}
            <p>passed</p>
          </div>
        </div>
        <div className="progressStatis__sub__card">
          <i className="bi bi-x-circle" />
          <div>
            {funnelStatic && <p>{funnelStatic.passed} </p>}
            {!funnelStatic && <p>707</p>}
            <p>unsuccessful</p>
          </div>
        </div>
        <div className="progressStatis__sub__card">
          <i className="bi bi-circle" />
          <div>
            {funnelStatic && <p>{funnelStatic.passed} </p>}
            {!funnelStatic && <p>784</p>}
            <p>overall</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressStatis;
