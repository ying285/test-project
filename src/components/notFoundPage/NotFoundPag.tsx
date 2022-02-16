import "../../style/NotFoundPage.scss";
import { useNavigate } from "react-router-dom";

const NotFoundPag = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);

  const backToHomePageHandler = () => {
    if (token !== undefined || token !== "") {
      navigate("/statistics");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="pageNotFound">
      <div className="pageNotFound__text">
        <h1>Page Not Found</h1>
        <button onClick={backToHomePageHandler}>Retrun to Hompage</button>
      </div>
    </div>
  );
};

export default NotFoundPag;
