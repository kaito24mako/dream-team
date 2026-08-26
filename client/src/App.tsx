import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./utils/context/UserContextComponent";
import { PlayerContextProvider } from "./utils/context/PlayerContextComponent";

import LandingLayout from "./components/layout/landing/LandingLayout";
import LandingPage from "./pages/landing/LandingPage";

import AuthLayout from "./components/layout/auth/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import AppLayout from "./components/layout/app/AppLayout";
import HomePage from "./pages/app/HomePage";
import LeaguePage from "./pages/app/LeaguePage";
import PacksPage from "./pages/app/PacksPage";
import HowToPlayPage from "./pages/app/HowToPlayPage";

import BattleLayout from "./components/layout/battle/BattleLayout";
import BattlePage from "./pages/battle/BattlePage";

function App() {
  return (
    <UserContextProvider>
      <PlayerContextProvider>
        <Router>
          <Routes>
            <Route element={<LandingLayout />}>
              <Route path="/" element={<LandingPage />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route element={<AppLayout />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/league" element={<LeaguePage />} />
              <Route path="/packs" element={<PacksPage />} />
              <Route path="/how-to-play" element={<HowToPlayPage />} />
            </Route>

            <Route element={<BattleLayout />}>
              <Route path="/battle/:levelSlug" element={<BattlePage />} />
            </Route>
          </Routes>
        </Router>
      </PlayerContextProvider>
    </UserContextProvider>
  );
}
export default App;
