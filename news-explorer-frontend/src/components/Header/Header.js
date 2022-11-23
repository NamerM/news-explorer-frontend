import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import SavedArticles from '../SavedArticles/SavedArticles';
import SearchForm from '../SearchForm/SearchForm';



function Header({onSignInPopupClick, onSignUpPopupClick, onSignOut  }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //toggle true or false to see
  const [isRegistered, setIsRegistered] =useState(false); // false for signup popup , true for signin

  const registerStatus = isRegistered ? onSignInPopupClick : onSignUpPopupClick;



  return (
  <header className="header" >
    { isLoggedIn  && isRegistered ?
    ( <div className="header__logged_in">
        <Navigation onClick={onSignOut}/>
        <SavedArticles />
      </div>) :
    (
      <div className="header__nologin">
        <Navigation
          onClick={registerStatus}
           />
        <SearchForm />
      </div>)
    }
  </header>

  )
}

export default Header;
