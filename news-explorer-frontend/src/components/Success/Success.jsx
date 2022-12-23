import react, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../PopupWithForm/PopupWithForm.css';

function RegisterationSuccess ({
  name="success",
  isOpen,
  onClose={onClose},
  onLoginUser
}) {

  const [isRegistered, setIsRegistered] =useState(false);

  const location = useLocation();
  const isSignIn = location.pathname === '/signin'

  return (
    <section className={`popup popup_type_${name} ${isOpen ? "popup_open" : ""}`}  >
      <div className="popup__square popup__square_success">
        <button type='button' className='popup__close popup__close_preview' onClick={onClose}></button>
        <h2 className="popup__success-title">Registration successfully completed!</h2>
        <Link className="popup__success-link" to={name=isSignIn ? "" : "signin"} onClick={onClose} >
              Sign In
        </Link>
        {/* <Link className="popup__success-link" to="signin">Sign in</Link> */}
      </div>
    </section>
  )
}

export default RegisterationSuccess;
