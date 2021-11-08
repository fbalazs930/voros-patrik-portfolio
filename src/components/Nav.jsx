import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => {
    setClick(false);
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth < 830) {
      setClick(false);
    }
  });
  return (
    <div className="nav">
      <i className="fas.fa-bars"></i>
      <Link to="/" className="nav-link">
        <img
          src="https://i.postimg.cc/g0NZ5nqV/VP-logos-white.png"
          alt="logo"
          className="logo"
        />
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <Link onClick={closeMenu} to="/" className="nav-link">
          Rólam
        </Link>
        <Link onClick={closeMenu} to="/fotok" className="nav-link">
          Fotók
        </Link>
        <Link onClick={closeMenu} to="/videok" className="nav-link">
          Videók
        </Link>
        <Link onClick={closeMenu} to="/elerhetoseg" className="nav-link">
          Elérhetőség
        </Link>
      </ul>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "far fa-times-circle" : "fas fa-bars"} />
      </div>
    </div>
  );
};

export default Nav;
