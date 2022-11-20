import react, { useState } from "react";
import Popup from "../Popup/Popup";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
// import SignInPopup from "../Signin/Signin";

function PopupWithForm({
  children,
  onSignInClick,
  isOpen,
  name,
  onSubmit,
  title,
  isLoading,
  buttonText,
  onClose,
}) {
  const currentUser = react.useContext(CurrentUserContext)

  return (
    <Popup isOpen={isOpen} onClick={onSignInClick} >

    <form className="popup__form" name={name} onSubmit={onSubmit}>
    <h1 className="popup__title">{title}</h1>
    {children}
    <button type="submit" className="popup__save"> Sign In    </button>

  </form>


  </Popup>
  );
}

export default PopupWithForm;

//Popup onSignInClick={handleSignInClick}
