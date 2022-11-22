import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import SavedArticles from '../SavedArticles/SavedArticles';
import SearchForm from '../SearchForm/SearchForm';
import handleSignInClick from '../App/App';


function Header({ onClick,  isOpen, onSignInPopupClick,  }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //toggle true or false to see

  return (
  <header className="header">
    { isLoggedIn ?
    ( <div className="header__logged_in">
        <Navigation />
        <SavedArticles />
      </div>) :
    (
      <div className="header__nologin" onClick={  onSignInPopupClick }>
        <Navigation  onSignInPopupClick={handleSignInClick} isOpen={isOpen} >
        </Navigation>
        <SearchForm />
      </div>)
    }
  </header>

  )
}

export default Header;
