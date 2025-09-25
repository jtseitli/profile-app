import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import AddProfilePage from "./pages/AddProfile";
import About from "./pages/About";
import OtherProfiles from "./pages/OtherProfiles";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <Router basename="/profile-app">
      <Header toggleMode={toggleMode} mode={mode} />
      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route path="/add-profile" element={<AddProfilePage mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/other-profiles" element={<OtherProfiles mode={mode} />} />
        <Route path="*" element={<NotFound mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;
