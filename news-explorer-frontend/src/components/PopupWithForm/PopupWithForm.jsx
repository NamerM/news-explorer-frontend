import react, { useState } from 'react';
import '../PopupWithForm/PopupWithForm.css';
import {Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'


function PopupWithForm({
  children,
  isOpen,
  name,
  title,
  // isLoading,
  buttonText,
  onClose,
  onSubmit,
  isButtonEnabled
}) {
  const currentUser = react.useContext(CurrentUserContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false); //toggle true or false to see
  const location = useLocation();
  const isSignIn = location.pathname === '/signin'

  return (
    <section className={`popup popup_type_${name} ${isOpen ? "popup_open" : ""}`} >
      <div className="popup__square">
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          <h3 className="popup__title">{title}</h3>
            {children}
          <button type="submit" disabled={!isButtonEnabled} className={`${isButtonEnabled ? '' : 'popup__save_disabled'} popup__save`} >
            {buttonText}
          </button>
          <button type="button" className="popup__close" onClick={onClose}></button>
          <p className="popup__alt">or
            <Link to={name=isSignIn ? "signup" : "signin"} className="popup__alt ">
              {isSignIn ? ' Sign Up' : ' Sign In'}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;


// {
//   isLoading ? 'Loading...' : (buttonText)
// }
