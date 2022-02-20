import "../../style/Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <h3>J</h3>
        <span>Junland</span>
      </div>

      <ul>
        <li>
          <NavLink
            to="/dashbord"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Vacancies
          </NavLink>
        </li>
        <li>
          <NavLink to="/*">Testings</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
