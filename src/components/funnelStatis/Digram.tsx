import React from "react";
import "../../style/Digram.scss";

const Digram = () => {
  return (
    <React.Fragment>
      {/* <svg height="220" width="650"></svg> */}
      <div className="digram">
        <span>800</span>
        <div className="digram__line1 digram__line"></div>
        <span>600</span>
        <div className="digram__line2 digram__line"></div>
        <span>400</span>
        <div className="digram__line3 digram__line"></div>
        <span>200</span>
        <div className="digram__line4 digram__line"></div>
        <span>0</span>
        <div className="digram__line5 digram__line"></div>
        <div className="digram__line6 "></div>
        <div className="digram__numberCard">
          <p>103</p>
          <p>167</p>
        </div>
      </div>

      <div className="digram__stepData">
        <div className="digram__stepData__step1  digram__stepData__step">
          <p>
            <span>Step1</span>
          </p>
          <p>Resume</p>
          <p>Screening</p>
        </div>
        <div className="digram__stepData__step2 digram__stepData__step">
          <p>
            <span>Step2</span>
          </p>
          <p>Basic</p>
          <p>Interview</p>
        </div>
        <div className="digram__stepData__step3 digram__stepData__step">
          <p>
            <span>Step3</span>
          </p>
          <p>Group</p>
          <p>Interview</p>
        </div>
        <div className="digram__stepData__step4 digram__stepData__step">
          <p>
            <span>Step4</span>
          </p>
          <p>Soft</p>
          <p>Skills</p>
        </div>
      </div>

      <svg height="400" width="500" className="digram__svgLine1">
        <path
          d="
          M 0,5
          L 297,70
          M 297,70
          L 450 80
         
           "
        />
      </svg>
      <svg height="400" width="500" className="digram__svgLine2">
        <path
          d="
          M 0,5
          L 150,55
          M 150,55
          L 300,34
          M 300,34
          L 450,65
           "
        />
      </svg>

      <svg height="400" width="500" className="digram__svgLine3">
        <path
          d="
          M 0,5
          L 150,65
          M 150,65
          L 450,125
         
        
           "
        />
      </svg>
    </React.Fragment>
  );
};

export default Digram;
