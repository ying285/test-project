import React from "react";
import "../../style/OpenVacancies.scss";

const OpenVacancies = () => {
  return (
    <div className="openVacancies">
      <div className="openVacancies__title">
        <h5>Open Vacancies</h5>
        <div>
          <input placeholder="Search" />
          <i className="bi bi-search"></i>
        </div>
      </div>
      <div className="openVacancies__openJob">
        <i className="bi bi-chevron-left"></i>
        <div className="openVacancies__user">
          <p>General Manager</p>
          <p>Step 1: Screening resume</p>
        </div>
      </div>
      <div className="openVacancies__openJob__special">
        <div className="openVacancies__openJob openVacancies__openJob__step4">
          <i className="bi bi-chevron-left"></i>
          <div className="openVacancies__user">
            <p>System Administrator</p>
            <p>Step 4: Soft Skills</p>
          </div>
        </div>
        <div className="openVacancies__openJob openVacancies__openJob__step5">
          <i className="bi bi-chevron-left"></i>
          <div className="openVacancies__user">
            <p>General Manager</p>
            <p>Step 1: Screening resume</p>
          </div>
        </div>
      </div>

      <div className="openVacancies__openJob">
        <i className="bi bi-chevron-left"></i>
        <div className="openVacancies__user">
          <p>General Manager</p>
          <p>Step 1: Screening resume</p>
        </div>
      </div>
      <button>+ New Vacancy</button>
    </div>
  );
};

export default OpenVacancies;
