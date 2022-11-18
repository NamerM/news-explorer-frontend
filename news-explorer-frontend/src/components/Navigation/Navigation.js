import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import logoWhite from '../../images/NewsExplorer.svg';
import logoDark from '../../images/NewsExplorer-black.svg';
// import exitIcon from '../../images/exitIcon.jpg';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //toggle true or false to see

  return (
    <>{ isLoggedIn ?
      (<nav className="navigation">
         <div className="navigation__logo">
          <img src={logoDark}/>
        </div>
        <div className="navigation__menu">
          <NavLink className="navigation__menu-item_dark navigation__menu-item_home" to="/">Home</NavLink>
          <NavLink className="navigation__menu-item_dark" to="/saved-artivles">Saved articles</NavLink>
          <div>
            <NavLink className="navigation__menu-item_dark navigation-button_dark icon" to='/signout'>Melih</NavLink>
          </div>

        </div>
      </nav>) :
      (<nav className="navigation">
        <div className="navigation__logo">
          <img src={logoWhite}/>
        </div>
        <div className="navigation__menu">
          <NavLink className="navigation__menu-item home" to="/">Home</NavLink>
          <NavLink className="navigation__menu-item navigation-button" to='/signin'>Sign in</NavLink>
        </div>
      </nav>)}
    </>
  )
}

export default Navigation;
