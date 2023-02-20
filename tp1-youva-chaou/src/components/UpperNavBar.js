import React from 'react';
import "../styles/navbar.css"

function UpperNavBar() {
    return (
        <nav className="navbar">
          <div className="navbar-left">
            <a href="/menu-principal">Menu Principal</a>
          </div>
          <div className="navbar-right">
            <a href="/profs">Profs</a>
            <a href="/cours">Cours</a>
          </div>
        </nav>
      );
}

export default UpperNavBar;