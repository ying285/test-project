import React from "react";
import "../../style/Dashbord.scss";
import Navbar from "../../components/navbar/Navbar";
import SystemAdminDashbord from "../../components/systemAdmin/SystemAdminDashbord";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../components/store/index";
import { dashbordActions } from "../../components/store/dashbordSlice";

const Dashbord = () => {
  const dispatch = useDispatch();
  const showIcons = useSelector((state: RootState) => state.dashbord.showIcons);
  const showAddMoveBtn = useSelector(
    (state: RootState) => state.dashbord.showAddMoveBtn
  );

  const deleteCard = useSelector(
    (state: RootState) => state.dashbord.deleteCard
  );

  const showIconsHandler = () => {
    dispatch(dashbordActions.toggleDashbord());
  };

  const DeleteDashHandler = () => {
    dispatch(dashbordActions.deleteInterviewCard());
  };

  const showDeleteBtnHandler = () => {
    dispatch(dashbordActions.showDeleteButton());
  };

  return (
    <div className="dashbord__grid">
      <Navbar />
      <div className="dashbord__flow">
        <div className="dashbord__flow__open dashbord__flow__openBlock">
          <p>Vacancy is</p>
          <p>OPEN</p>
        </div>
        <div className="dashbord__flow__line1"></div>
        <div className="dashbord__flow__checkcv dashbord__flow__block">
          <i className="bi bi-file-earmark-medical" />
          <p>Screeing</p>
          <p>resume</p>
        </div>

        <svg height="500" width="500" className="dashbord__flow__line1">
          <path
            d="
          M 200,0
          L 200,5
          Q 200,20
            180,19
          L 80,19
          Q 60,19
            60,37
           "
          />
        </svg>
        <i className="bi bi-chevron-down bi-chevron-down-2" />

        <svg height="20" width="130" className="dashbord__flow__line2">
          <path
            d="
            M 0,0 
            L 130, 0
          "
          />
        </svg>
        <i className="bi bi-chevron-right" />

        <svg height="200" width="500" className="dashbord__flow__line3">
          <path
            d="
          M 200,0
          L 200,10
          Q 200,30
            180,29
          L 130,29
          Q 110,29
            111,57
           "
          />
        </svg>
        <i className="bi bi-chevron-down bi-chevron-down-3" />

        <svg height="58" width="100" className="dashbord__flow__line4">
          <path d="M 10,10 V 100" />
        </svg>
        <i className="bi bi-chevron-down bi-chevron-down-1" />

        <div className={`dashbord__flow__interview `}>
          <div
            className={` dashbord__flow__block ${showIcons ? "bg" : ""} ${
              deleteCard ? "dashbord__flow__interview__delete" : ""
            }`}
            onClick={showIconsHandler}
          >
            <i className="bi bi-person" />
            <p>Basic</p>
            <p>Interview</p>
          </div>
          <div className="dashbord__flow__interview__extraIcons">
            <i
              className={`bi bi-clipboard-plus  ${
                showIcons ? "" : "dashbord__flow__interview__extraIcons__place"
              }`}
            />
            <div
              className={`${
                showAddMoveBtn
                  ? ""
                  : "dashbord__flow__interview__extraIcons__place"
              }`}
              onClick={DeleteDashHandler}
            >
              Delete
            </div>
            <i
              className={`bi bi-trash3 ${
                showIcons ? "" : "dashbord__flow__interview__extraIcons__place"
              }`}
              onClick={showDeleteBtnHandler}
            />
          </div>
        </div>
        <div className="dashbord__flow__line3"></div>
        <div className="dashbord__flow__test dashbord__flow__block">
          <i className="bi bi-question-square" />
          <p>Test</p>
          <p>Task</p>
        </div>
        <div className="dashbord__flow__line4"></div>
        <div className="dashbord__flow__close dashbord__flow__openBlock">
          <p>Vacancy is</p>
          <p>CLOSED</p>
        </div>
      </div>
      <div className="dashbord__systemAdmin">
        <SystemAdminDashbord />
      </div>
    </div>
  );
};

export default Dashbord;
