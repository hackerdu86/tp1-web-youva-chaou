import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"

function UpperNavBar() {
    return (
        <nav className="navbar">
          <div className="navbar-left">
          <Link to="/menu-principal">Menu Principal</Link>
          </div>
          <div className="navbar-right">
            <Link to="/profs">Profs</Link>
            <Link to="/cours">Cours</Link>
          </div>
        </nav>
      );
}

export default UpperNavBar;