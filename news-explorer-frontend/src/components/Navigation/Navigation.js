import React from "react";
import { NavLink } from 'react-router-dom';
import logoWhite from '../../images/NewsExplorer.svg';

function Navigation() {

  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={logoWhite}/>
      </div>
      <div className="navigation__menu">
        <NavLink className="navigation__menu-item" to="/">Home</NavLink>
        <NavLink className="navigation__menu-item navigation-button" to='/signin'>Sign in</NavLink>
      </div>
    </nav>

  )
}

export default Navigation;
