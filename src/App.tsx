import "./App.scss";

import Authoriztion from "./UI/authorization/Authoriztion";
import { Routes, Route } from "react-router-dom";
import Dashbord from "./UI/dashbord/Dashbord";
import Vacancies from "./UI/vacancies/Vacancies";
import NotFoundPag from "./components/notFoundPage/NotFoundPag";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/statistics" element={<Vacancies />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/" element={<Authoriztion />} />
        <Route path="*" element={<NotFoundPag />} />
      </Routes>
    </div>
  );
}

export default App;
