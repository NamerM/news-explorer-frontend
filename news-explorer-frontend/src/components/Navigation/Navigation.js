import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import logoWhite from '../../images/NewsExplorer.svg';
import logoDark from '../../images/NewsExplorer-black.svg';
import PopupMobile from "../PopupMobile/PopupMobile";

function Navigation({
  onDesktopClick,
  onMobileClick,
  onMobileMenu,
  onSignOut,
  isLoggedIn
}) {
  // console.log("onsignout=>", onSignOut);
  // console.log("onMobileMenu", onMobileMenu);

  return (

    <>

    { isLoggedIn ?
      (<nav className="navigation">
        <div >
          <img className="navigation__logo" src={logoDark}/>
        </div>
        <ul className="navigation__menu">
          <li className="navigation__menu-list">
            <NavLink className="navigation__menu-item_dark" to="/">Home</NavLink>
          </li>
          <li className="navigation__menu-list">
            <NavLink className="navigation__menu-item_dark" to="/saved-articles">Saved articles</NavLink>
          </li>
          <li>
            <button className="navigation__menu-item_dark navigation__menu-item-button_dark" onClick={onSignOut}>Melih</button>
          </li>
          <li>
            <button className="navigation__menu-item-button_dark-mobile" onClick={onMobileMenu} />
          </li>

        </ul>
      </nav>
      ) :
      (<nav className="navigation">
        <div className="navigation__logo">
          <img className="navigation__logo-image" src={logoWhite}/>
        </div>
        <ul className="navigation__menu">
          <li className="navigation__menu-list">
            <Link className="navigation__menu-item" to="/">Home</Link>
          </li>
          <li className="navigation__menu-list">
            <Link className="navigation__menu-item-link"  to="/signin" >
              <button className="navigation__menu-item navigation__menu-item-button" onClick={onDesktopClick} >
                Sign in
              </button>
            </Link>
              <button className="navigation__menu-item-button_mobile" onClick={onMobileClick} />

          </li>

        </ul>
      </nav>)}
    </>
  )
}

export default Navigation;
