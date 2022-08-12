import { HashRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Team } from "./pages/Team";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
