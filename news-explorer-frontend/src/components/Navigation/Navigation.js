import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import logoWhite from '../../images/NewsExplorer.svg';
import logoDark from '../../images/NewsExplorer-black.svg';
import PopupMobile from "../PopupMobile/PopupMobile";

function Navigation({
  // isRegistered,
  onClick: onSignInPopupClick,
  onClick: onSignUpPopupClick,
  onClick: onMobilePopupClick,
  onClick: onSignOut,
  isOpen,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //toggle true or false to see header changes
  // const [isMobileClicked, setIsMobileClicked] = useState(false);

  // function menuClick () {
  //   setIsMobileClicked(true);
  // }

  return (

    <>

    { isLoggedIn ?
      (<nav className="navigation">
         <div className="navigation__logo">
          <img src={logoDark}/>
        </div>
        <ul className="navigation__menu">
          <li className="navigation__menu-list">
            <NavLink className="navigation__menu-item_dark" to="/">Home</NavLink>
          </li>
          <li className="navigation__menu-list">
            <NavLink className="navigation__menu-item_dark" to="/saved-artivles">Saved articles</NavLink>
          </li>
          <li>
            <button className="navigation__menu-item_dark navigation-menu-item-button_dark" onClick={onSignOut}>Melih</button>
          </li>

        </ul>
      </nav>) :
      (<nav className="navigation">
        <div className="navigation__logo">
          <img className="navigation__logo-image" src={logoWhite}/>
        </div>
        <ul className="navigation__menu">
          <li className="navigation__menu-list">
            <Link className="navigation__menu-item" to="/">Home</Link>
          </li>
          <li className="navigation__menu-list">
            <Link className="navigation-menu-item-link"  to="/signin" >
              <button className="navigation__menu-item navigation-menu-item-button" onClick={onSignInPopupClick} >
                Sign in
              </button>
            </Link>
              <button className="navigation-menu-item-button_mobile" onClick={onMobilePopupClick} />

          </li>

        </ul>
      </nav>)}
    </>
  )
}

export default Navigation;

       {/* <div className="navigation__menu">
          <NavLink className="navigation__menu-item_dark navigation__menu-item_home" to="/">Home</NavLink>
          <NavLink className="navigation__menu-item_dark" to="/saved-artivles">Saved articles</NavLink>
          <div>
            <NavLink className="navigation__menu-item_dark navigation-menu-item-button_dark" to='/signout' onClick={onSignOutPopupClick}>Melih</NavLink>
          </div>
        </div> */}

        {/* <div className="navigation__menu">
          <NavLink className="navigation__menu-item home" to="/">Home</NavLink>
          <NavLink className="navigation__menu-item navigation-menu-item-button" to='/signin' onClick={onSignInPopupClick} >Sign in</NavLink>
        </div> */}
