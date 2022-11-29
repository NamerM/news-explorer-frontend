import react, { useState } from 'react';
import {Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupMobile from '../PopupMobile/PopupMobile';
import '../../components/Navigation/Navigation.css';

function MobileSignIn ({
isOpen,
onClose,
onMobilePopUpClick,
onSignInPopupClick
}){
  const currentUser = react.useContext(CurrentUserContext)

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password)
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
        <ul className="navigation__menu">
          <li className="navigation__menu-list">
            <Link className="navigation__menu-item" to="/">Home</Link>
          </li>
          <li className="navigation__menu-list">
            <Link className="navigation-menu-item-link"  to="/signin" >
              <button className="navigation__menu-item navigation-menu-item-button"  >

              </button>
            </Link>
          </li>
        </ul>
    </>
  )
}

export default MobileSignIn;
