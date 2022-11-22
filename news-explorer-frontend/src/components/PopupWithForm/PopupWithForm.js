import react, { useState } from "react";
// import Popup from "../Popup/Popup";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
// import SignInPopup from "../Signin/Signin";

function PopupWithForm({
  children,
  isOpen,
  name,
  onSubmit,
  title,
  // isLoading,
  buttonText = "Save",
  onClose,
}) {
  const currentUser = react.useContext(CurrentUserContext)

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
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;


// {
//   isLoading ? 'Loading...' : (buttonText)
// }
