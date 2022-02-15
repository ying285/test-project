import "../../style/SystemAdmin.scss";
import OpenVacancies from "../openVacancies/OpenVacancies";

import DataAllFetch from "../hooks/DataAllFetch";

const SystemAdmin = () => {
  let url = "https://api.jampad.ml/api/hrs/";

  const userName: any = DataAllFetch(url);
  console.log(userName);

  return (
    <div className="systemAdmin">
      <div>
        <div className="systemAdmin__user">
          <i className="bi bi-bell"></i>
          <p>{`${userName.first_name} ${userName.last_name}`}</p>
        </div>
        <div className="systemAdmin__title">
          <p>Vacancy</p>
          <h5>SystemAdministrator</h5>
        </div>
        <div className="systemAdmin__border">
          <div className="systemAdmin__title__border">
            <div>
              <p>Vacancy</p>
              <p>
                <span>Open</span>
              </p>
            </div>
            <div className="systemAdmin__line item">
              {" "}
              <hr />
            </div>
            <div>
              <p>Step 1</p>
              <p>
                <span>Resume Screen</span>
              </p>
            </div>
          </div>
          <div className="systemAdmin__round">
            <div className="systemAdmin__round__roundItem"></div>
            <div className="systemAdmin__round__roundItem"></div>
            <div className="systemAdmin__round__roundItem"></div>
            <div className="systemAdmin__round__roundItem black__item"></div>
            <div className="systemAdmin__round__roundItem"></div>
          </div>
        </div>
        <div className="systemAdmin__buttom">
          <button>Edit funnel</button>
          <p>Download report</p>
        </div>
      </div>
      <OpenVacancies />
    </div>
  );
};

export default SystemAdmin;
