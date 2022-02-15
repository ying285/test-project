import React from "react";
import "../../style/AuthWelcome.scss";
import AuthWelcomeLine from "./AuthWelcomeLine";

const AuthWelcome = () => {
  return (
    <div className="authWelcome">
      <div className="authWelcome__logo">J</div>
      <div className="authWelcome__mainText">
        <p>Welcome!</p>
        <p>
          <span>JamPad</span>is a service
        </p>
        <p>for automating the evaluation</p>
        <p>of employees and candidates!</p>
        <div className="subText">
          <p>If you are not part of pur community</p>
          <p>feel free to sign up</p>
        </div>
        <button className="WelcomeBtn">Join</button>
      </div>
      <AuthWelcomeLine />
    </div>
  );
};

export default AuthWelcome;
