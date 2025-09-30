import React from "react";
import { Link } from "react-router-dom";

function Header({ toggleMode, mode }) {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/add-profile">Add Profile</Link></li>
          <li><Link to="/fetched-profiles">Other Profiles</Link></li>
          <li>
            <button onClick={toggleMode} className="mode-toggle">
              {mode === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
