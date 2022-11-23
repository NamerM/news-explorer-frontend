import react, { useState } from 'react';
import '../Popup/Popup.css';
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
}) {
  const currentUser = react.useContext(CurrentUserContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false); //toggle true or false to see
  const location = useLocation();

  return (
    <section className={`popup popup_type_${name} ${isOpen ? "popup_open" : ""}`} >
      <div className="popup__square">
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          <h1 className="popup__title">{title}</h1>
            {children}
          <button type="submit" className="popup__save" >
            {buttonText}
          </button>
          <button type="button" className="popup__close" onClick={onClose}></button>
          <p className="popup__alt">or
            <Link to={location.pathname === '/signin' ? `${name="signup"}` : `${name="signin"}` } className="popup__alt ">{/*need to change popup classnames*/}
              {location.pathname === '/signin' ? ' Sign Up' : ' Sign In'}
            </Link>
          </p>
        </form>      </div>
    </section>
  );
}

export default PopupWithForm;


// {
//   isLoading ? 'Loading...' : (buttonText)
// }
