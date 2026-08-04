import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import LeaguePage from "./pages/LeaguePage";
import PacksPage from "./pages/PacksPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/league" element={<LeaguePage />} />
          <Route path="/packs" element={<PacksPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
