import react, { useState } from 'react';
import {Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupMobile from '../PopupMobile/PopupMobile';
import '../../components/Navigation/Navigation.css';

function MobileSignIn ({
isOpen,
onClose,
onClick,
onMobilePopUpClick,
onSignInPopupClick
}){
  const currentUser = react.useContext(CurrentUserContext)

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    console.log("button works");
    // console.log(email, password);
    const userData = {
      email,
      password,
    }
    // onLoginUser(userData);  // app.js function name

  }
  return(
    <>
      <PopupMobile
        name="popup-mobile"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonText="Sign In"
      >

      </PopupMobile>
        {/* <ul className="navigation__menu">
          <li className="navigation__menu-list">
            <Link className="" to="/">Home</Link>
          </li>
          <li className="navigation__menu-list">
            <Link className="navigation-menu-item-link"  to="/signin" >
              <button className=" navigation-menu-item-button"  >
                    Sign In
              </button>
            </Link>
          </li>
        </ul> */}
    </>
  )
}

export default MobileSignIn;
