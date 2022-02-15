import React from "react";
import "../../style/AuthWelcomeLine.scss";

const AuthWelcomeLine = () => {
  return (
    <div className="authWelcomeLine">
      <svg height="500" width="500" className="authWelcomeLine__line1">
        <path
          d="
          M 0,0
          L 62,105
          Q 60,105
            70,105
          M 60,105
          L 426,105
           "
        />
      </svg>

      <svg height="500" width="500" className="authWelcomeLine__line2">
        <path
          d="
          M 0,0
          L 35,60
          Q 35,70
            35,80
          M 35,60
          L 35,360
          Q 35,360
            0, 430
           "
        />
      </svg>

      <svg height="500" width="700" className="authWelcomeLine__line3">
        <path
          d="
           M 330,0
           L 100,0
           Q 0,90
             0,90
           M 0,90
           L 0,280
           Q 0,90
             0,100
           M 0,280
           L 330,280
           "
        />
      </svg>

      <svg height="180" width="600" className="authWelcomeLine__line4">
        <path
          d="
           M 480,0
           L 100,0
           Q 100,0
             100,0
           M 100,0
           L 25,180
           "
        />
      </svg>

      <svg height="130" width="500" className="authWelcomeLine__line5">
        <path
          d="
           M 425,0
           L 100,0
           Q 100,0
             100,0
           M 100,0
           L 0,250
           "
        />
      </svg>

      <svg height="60" width="500" className="authWelcomeLine__line6">
        <path
          d="
           M 0,0
           V 100
           Q 0,0
             0,0
            M 0,0
            L 100,0
            Q 100,0
              140,30
            M 140,30
            L 180,60
        
           "
        />
      </svg>
    </div>
  );
};

export default AuthWelcomeLine;
