import React from "react";
import "../../style/SystemAdminDashbord.scss";
import "../../style/Dashbord.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../components/store/index";
import DataAllFetch from "../hooks/DataAllFetch";

const SystemAdminDashbord = () => {
  const showIcons = useSelector((state: RootState) => state.dashbord.showIcons);
  let url = "https://api.jampad.ml/api/hrs/";

  const userName: any = DataAllFetch(url);

  return (
    <div className="systemAdminDashbord">
      <div className="systemAdminDashbord__user">
        <i className="bi bi-bell"></i>
        <p>{!`${userName.first_name} ${userName.last_name}` || "Alex Smith"}</p>
      </div>
      <div className="systemAdminDashbord__title">
        <p>Vacancy</p>
        <h5>SystemAdministrator</h5>
      </div>
      <div className="systemAdminDashbord__description">
        <p>Description</p>
        <p>Here you will see the description of the item </p>
        <p>of your choice</p>
      </div>
      <button>Save changes</button>

      <div className="systemAdminDashbord__search">
        <h5>Components</h5>
        <div>
          <input placeholder="Search" />
          <i className="bi bi-search"></i>
        </div>
      </div>
      <div className="systemAdminDashbord__flow ">
        <svg height="60" width="20" className="systemAdminDashbord__line1">
          <line
            x1="0"
            y1="80"
            x2="0"
            y2="20"
            stroke="#c2c0c0"
            strokeWidth="3"
          ></line>
        </svg>

        <svg height="110" width="20" className="systemAdminDashbord__line2">
          <line
            x1="0"
            y1="110"
            x2="0"
            y2="20"
            stroke="#fed614"
            strokeWidth="8"
          ></line>
        </svg>

        <svg height="130" width="20" className="systemAdminDashbord__line3">
          <line
            x1="0"
            y1="130"
            x2="0"
            y2="20"
            stroke="#c2c0c0"
            strokeWidth="3"
          ></line>
        </svg>
        <p>Interview</p>

        <div className="systemAdminDashbord__flow__card">
          <div
            className={`systemAdminDashbord__flow__card__item ${
              showIcons ? "bg" : ""
            }`}
          >
            <i className="bi bi-person" />
            <p>Basic</p>
            <p>Interview</p>
          </div>

          <div className="systemAdminDashbord__flow__card__item">
            <i className="bi bi-person-plus" />
            <p>Interview</p>
            <p>with others</p>
          </div>
          <div className="systemAdminDashbord__flow__card__item">
            <i className="bi bi-person-plus" />
            <p>Group</p>
            <p>Interview</p>
          </div>
          <div className="systemAdminDashbord__flow__card__item">
            <i className="bi bi-person-check" />
            <p>AI-video</p>
            <p>Interview</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemAdminDashbord;
