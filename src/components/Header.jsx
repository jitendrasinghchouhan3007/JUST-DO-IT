function Header({ setTheme }) {
  return (
    <header id="header">
      <h1 id="title">Just do it.</h1>

      {/* GitHub Icon */}
      

      {/* Theme buttons */}
      <div className="flexrow-container">
        <div
          className="theme-selector standard-theme"
          onClick={() => setTheme("standard")}
        ></div>
        <div
          className="theme-selector light-theme"
          onClick={() => setTheme("light")}
        ></div>
        <div
          className="theme-selector darker-theme"
          onClick={() => setTheme("darker")}
        ></div>
      </div>
    </header>
  );
}

export default Header;
