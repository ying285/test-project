import React from "react";
import SystemAdmin from "../../components/systemAdmin/SystemAdmin";
import FunnelStatis from "../../components/funnelStatis/FunnelStatis";
import Navbar from "../../components/navbar/Navbar";

const Vacancies = () => {
  return (
    <div className="vacancies">
      <Navbar />
      <div className="vacancies__funnelStatis">
        <FunnelStatis />
      </div>

      <div className="vacancies__systemAdminWidth">
        <SystemAdmin />
      </div>
    </div>
  );
};

export default Vacancies;
