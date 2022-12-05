import react, { useState } from 'react';
import {Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupMobile from '../PopupMobile/PopupMobile';
import '../../components/Navigation/Navigation.css';
import logoWhite from '../../images/NewsExplorer.svg';
import SavedArticles from '../SavedArticles/SavedArticles';

function MobileSignIn ({
isOpen,
onClose,
onSubmit,
buttonText="Sign In"
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
      <PopupMobile
        name="signin"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonText
      >

      <Link path='/'>
        <p className="popup-mobile-text" onClick={onClose}>Home</p>
      </Link>
      <Link to='/signin'>
      <button type="submit" className="popup-mobile__btn"  onClick={onClose} >
        {buttonText}
      </button>
      </Link>
      </PopupMobile>
  )
}

export default MobileSignIn;
