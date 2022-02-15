import "./App.scss";

import Authoriztion from "./UI/authorization/Authoriztion";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashbord from "./UI/dashbord/Dashbord";
import Vacancies from "./UI/vacancies/Vacancies";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/hrs/login" element={<Authoriztion />} />
        <Route path="/statistics" element={<Vacancies />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="*" element={<Navigate replace to="/hrs/login" />} />
      </Routes>
    </div>
  );
}

export default App;
