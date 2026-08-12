import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingLayout from "./components/layout/landing/LandingLayout";
import LandingPage from "./pages/landing/LandingPage";

import AppLayout from "./components/layout/app/AppLayout";
import HomePage from "./pages/app/HomePage";
import LeaguePage from "./pages/app/LeaguePage";
import PacksPage from "./pages/app/PacksPage";
import HowToPlayPage from "./pages/app/HowToPlayPage";

import BattleLayout from "./components/layout/battle/BattleLayout";
import BattlePage from "./pages/battle/BattlePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/league" element={<LeaguePage />} />
          <Route path="/packs" element={<PacksPage />} />
          <Route path="/how-to-play" element={<HowToPlayPage />} />
        </Route>

        <Route element={<BattleLayout />}>
          <Route path="/battle" element={<BattlePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
