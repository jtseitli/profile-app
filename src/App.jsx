import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Home from "./pages/Home";
import AddProfilePage from "./pages/AddProfile";
import About from "./pages/About";
import OtherProfiles from "./pages/OtherProfiles";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import ProfileDetails from "./pages/ProfileDetails";

import { ModeContext } from "./context/ModeContext.jsx";

function App() {
  const { mode, toggleMode } = useContext(ModeContext);

  return (
    <Router basename="/profile-app">
      <Header toggleMode={toggleMode} mode={mode} />
      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route path="/add-profile" element={<AddProfilePage mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/fetched-profiles" element={<OtherProfiles mode={mode} />}>
          <Route path="profile/:id" element={<ProfileDetails mode={mode} />} />
        </Route>
        <Route path="*" element={<NotFound mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;
