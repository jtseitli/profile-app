function Header({ toggleMode, mode }) {
  return(
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#profiles">Profiles</a></li>
          <button onClick={toggleMode} className="mode-toggle">{mode === "light" ? "Dark Mode" : "Light Mode"}</button>
        </ul>

      </nav>

    </header>
  )
}

export default Header

  