import { HashRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { Question } from "./pages/Question";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
