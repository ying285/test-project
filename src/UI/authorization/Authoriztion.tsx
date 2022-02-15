import React, { Fragment } from "react";
import AuthWelcome from "./AuthWelcome";
import AuthMain from "./AuthMain";
import "../../style/Authorization.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../components/store/index";

const Authoriztion = () => {
  const isLoading = useSelector((state: RootState) => state.login.isLoading);
  return (
    <div className={`authorization  ${isLoading && "authBg"}`}>
      {!isLoading && <AuthWelcome />}
      {!isLoading && <AuthMain />}
      {isLoading && <h5>Loading...</h5>}
    </div>
  );
};

export default Authoriztion;
