import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function UpperNavBar() {
  function checkDeviceMobile() {
    return window.innerWidth < 768 ? true : false;
  }

  const [isDeviceMobile, setIsDeviceMobile] = useState(checkDeviceMobile());
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  function handleOutsideClick() {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  window.addEventListener("resize", (event) => {
    console.log(checkDeviceMobile());
    setIsDeviceMobile(checkDeviceMobile());
  });

  return !isDeviceMobile ? (
    <nav className="navbar-top">
      <div className="lol">
        <Link to="/menu-principal">Menu Principal</Link>
      </div>
      <div className="navbar-right">
        <Link to="/profs">Profs</Link>
        <Link to="/cours">Cours</Link>
      </div>
    </nav>
  ) : (
    <>
      <Link to="/menu-principal">
        <button className="menu-button" onClick={handleMenuClick}>
          Menu Principal
        </button>
      </Link>

      <nav
        className={isOpen ? "nav-bar open" : "nav-bar"}
        onClick={handleOutsideClick}
      >
        <button className="nav-button top-button">Menu principal</button>
        <div className="nav-buttons-bottom">
          <Link to="/profs">
            {" "}
            <button className="nav-button">Profs</button>
          </Link>
          <Link to="/cours">
            {" "}
            <button className="nav-button">Cours</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default UpperNavBar;
