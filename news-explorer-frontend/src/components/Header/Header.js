import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import SavedArticles from '../SavedArticles/SavedArticles';
import SearchForm from '../SearchForm/SearchForm';



function Header({isLoggedIn, onSignInPopupClick, onSignUpPopupClick, onMobilePopupClick, onMobilePopupMenu, onSignOut  }) {

  const location = useLocation();
  const isSavedArticles = location.pathname === '/saved-articles';


  return (
  <header className="header" >
    { isLoggedIn && isSavedArticles ?
    ( <section className="header__logged-in">
        <Navigation
          isLoggedIn={isLoggedIn}
          onDesktopClick={onSignInPopupClick}
          onMobileClick={onMobilePopupClick}
          onMobileMenu={onMobilePopupMenu}
          onSignOut={onSignOut}
        />

      </section>) :
    (
      <section className="header__nologin" a>
        <Navigation
          isLoggedIn={isLoggedIn}
          onDesktopClick={onSignInPopupClick}
          onMobileClick={onMobilePopupClick}
          onMobileMenu={onMobilePopupMenu}
          onSignOut={onSignOut}
           />
        <SearchForm />
      </section>)
    }
  </header>

  )
}

export default Header;
