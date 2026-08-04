import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingLayout from "./components/layout/landing/LandingLayout";
import LandingPage from "./pages/LandingPage";

import AppLayout from "./components/layout/app/AppLayout";
import HomePage from "./pages/HomePage";
import LeaguePage from "./pages/LeaguePage";
import PacksPage from "./pages/PacksPage";

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
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
