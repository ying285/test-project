import React, { useRef } from "react";
import "../../style/AuthMain.scss";
import { loginActions } from "../../components/store/loginSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../components/store/index";
import { useNavigate } from "react-router-dom";

const AuthMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const changeMailColor = useSelector(
    (state: RootState) => state.login.changeMailColor
  );
  const changePassColor = useSelector(
    (state: RootState) => state.login.changePassColor
  );

  const addEmailColorHandler = () => {
    dispatch(loginActions.changeEmailColorHandler());
  };

  const addPassColorHandler = () => {
    dispatch(loginActions.changePassColorHandler());
  };

  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  let url = "https://api.jampad.ml/api/hrs/login";

  const loginSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredEmail = inputEmailRef.current?.value;
    const enteredPassword = inputPasswordRef.current?.value;

    if (enteredEmail?.trim() !== "" && enteredPassword?.trim() !== "") {
      const sendLoginReq = async () => {
        try {
          dispatch(loginActions.loadingHandler());
          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const responseData = await response.json();
          dispatch(loginActions.loadingHandler());

          localStorage.setItem("token", responseData.token);
          dispatch(loginActions.login());

          isLogin && navigate("/statistics");
        } catch (err: string | any) {
          alert(err.message);
        }
      };

      sendLoginReq();
    }
  };
  return (
    <div className="authMain">
      <form className="authMain__form" onSubmit={loginSubmitHandler}>
        <h3>Authorization</h3>
        <div className="authMain__form__part">
          <label>Your email</label>
          <input
            type="text"
            placeholder="example@example.com"
            ref={inputEmailRef}
            onClick={addEmailColorHandler}
            onBlur={addEmailColorHandler}
          />
          <i
            className={`bi bi-envelope ${
              changeMailColor && "authMain__form__addColor"
            }`}
          />
        </div>

        <div className="authMain__form__part">
          <label>Your password</label>
          <input
            type="text"
            placeholder="*******"
            ref={inputPasswordRef}
            onClick={addPassColorHandler}
            onBlur={addPassColorHandler}
          />
          <i
            className={`bi bi-eye ${
              changePassColor && "authMain__form__addColor"
            }`}
          />
        </div>

        <button>Login in</button>
      </form>
    </div>
  );
};

export default AuthMain;
