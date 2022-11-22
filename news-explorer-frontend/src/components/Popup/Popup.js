import react, { useEffect, useState } from 'react';
import '../Popup/Popup.css';


const Popup = ({ isOpen, name, children, onSubmit, title, isLoading,buttonText, onClose }) => {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);

useEffect(() => {
  if(!isOpen) return;

  const closeByEscape = (e) => {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  };
  const closeByModal = (e) => {
    if (e.target.classList.contains("popup_open")) {
      closeAllPopups();
    }
  };

  document.addEventListener('keydown', closeByEscape);
  document.addEventListener('click', closeByModal);

  return () => {
    document.removeEventListener('keydown', closeByEscape);
    document.removeEventListener('click', closeByModal);
  }
}, [isOpen]);

// function handleSignInClick() {
//   setIsSignInPopupOpen(true);
// }

function closeAllPopups() {
  setIsSignInPopupOpen(false);
  // setIsEditProfilePopupOpen(false);
  // setIsAddPlacePopupOpen(false);
  // setSelectedCard(undefined);
  // setIsInfoToolTipOpen(false);
  // setIsImagePopupOpen(false);
}

  return (
    <section  className={`popup popup_type_${name} ${isOpen ? "popup_open" : ""}`} >
      <div className="popup__square" name={name} onSubmit={onSubmit}>
          <h1 className="popup__title">{title}</h1>
          {children}

          <button type="button" className="popup__close" onClick={onClose}></button>

      </div>
    </section>

  );
}

export default Popup;

        {/* <button type="submit" className="popup__save" >
          {
            isLoading ? 'Loading...' : (buttonText)
          }

        </button> */}
