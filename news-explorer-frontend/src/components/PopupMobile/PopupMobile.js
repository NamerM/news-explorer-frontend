import react, { useContext, useState } from 'react';
import '../PopupMobile/PopupMobile.css';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext  } from '../../contexts/CurrentUserContext';
import logoWhite from '../../images/NewsExplorer.svg';

function PopupMobile({
  isOpen,
  name="mobile",
  buttonText="Sign In",
  onClose,
  onSubmit,
})
{
const currentUser = useContext(CurrentUserContext);
const location = useLocation();
const isSignIn = location.pathnam === '/signin'

return (
  <>
  <section className={`popup-mobile popup-type_${name} ${isOpen ? "popup-mobile_open" : ""} `}>
    <div className="popup-mobile__container">
      <nav>
      <img src={logoWhite}/>
      <button type="button" className="popup-mobile__close" onClick={onClose} />
      </nav>
      <button type="submit" className={onSubmit}>
        {buttonText}
      </button>
    </div>
  </section>
  </>
 )
}


export default PopupMobile;
