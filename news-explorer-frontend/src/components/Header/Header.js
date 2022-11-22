import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import SavedArticles from '../SavedArticles/SavedArticles';
import SearchForm from '../SearchForm/SearchForm';



function Header({onSignInPopupClick, onSignOutPopupClick  }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //toggle true or false to see

  return (
  <header className="header" >
    { isLoggedIn ?
    ( <div className="header__logged_in">
        <Navigation/>
        <SavedArticles />
      </div>) :
    (
      <div className="header__nologin">
        <Navigation
          onClick={onSignInPopupClick}
          onSignoutClick={onSignOutPopupClick} />
        <SearchForm />
      </div>)
    }
  </header>

  )
}

export default Header;
