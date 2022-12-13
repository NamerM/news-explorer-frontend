import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';
import logoWhite from '../../images/NewsExplorer.svg';
import logoDark from '../../images/NewsExplorer-black.svg';
import PopupMobile from "../PopupMobile/PopupMobile";

function Navigation({
  onDesktopClick,
  onMobileClick,
  onMobileMenu,
  onSignOut,
  isLoggedIn,
  name
}) {

  const location = useLocation();
  const isHome = location.pathname === '/';
  const isHomeNavClass = isHome ? "navigation-home" : "navigation";
  const isHomeClass = isHome ? "navigation__menu-item" : "navigation__menu-item-dark";
  const isHomeButtonClass = isHome ? "navigation__menu-item navigation__menu-item-button-dark-home" : "navigation__menu-item-dark navigation__menu-item-button-dark";
  const isHomeImage = isHome ? logoWhite : logoDark;
  const isSignIn = location.pathname === '/signin';

  return (

    <>

    { isLoggedIn ?
      (<nav className={`${isHomeNavClass}`}>
        <div >
          <img className="navigation__logo" src={`${isHomeImage}`} alt="News Explorer logo " />
        </div>
        <ul className="navigation__menu">
          <li className="navigation__menu-list">
            <NavLink className={`${isHomeClass}`} to="/">Home</NavLink>
          </li>
          <li className="navigation__menu-list">
            <NavLink className={` ${isHomeClass}` } to="/saved-articles">Saved articles</NavLink>
          </li>
          <li>
            <button className={`${isHomeButtonClass}`} onClick={onSignOut}>{name}M</button>
          </li>
          <li>
            <button className="navigation__menu-item-button-dark-mobile" onClick={onMobileMenu} />
          </li>
        </ul>
      </nav>

      ) :
      (<nav className="navigation">
        <div className="navigation__logo">
          <img className="navigation__logo-image" src={logoWhite} alt="NewsExplorer logo, white color"/>
        </div>
        <ul className="navigation__menu">
          <li className="navigation__menu-list">
            <NavLink className="navigation__menu-item" to="/">Home</NavLink>
          </li>
          <li className="navigation__menu-list">
            <NavLink className="navigation__menu-item-link"  to="/signin" >
              <button className="navigation__menu-item navigation__menu-item-button" onClick={onDesktopClick} >
                Sign in
              </button>
            </NavLink>
              <button className="navigation__menu-item-button_mobile" onClick={onMobileClick} />

          </li>

        </ul>
      </nav>)}
    </>
  )
}

export default Navigation;
