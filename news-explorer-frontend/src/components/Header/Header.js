import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import SavedArticles from '../SavedArticles/SavedArticles';
import SearchForm from '../SearchForm/SearchForm';



function Header({isLoggedIn, onSignInPopupClick, onSignUpPopupClick, onMobilePopupClick, onMobilePopupMenu, onSignOut  }) {

  // console.log("onSignout-headerjs", onSignOut);

  return (
  <header className="header" >
    { isLoggedIn  ?
    ( <section className="header__logged_in">
        <Navigation
          isLoggedIn={isLoggedIn}
          onDesktopClick={onSignInPopupClick}
          onMobileClick={onMobilePopupClick}
          onMobileMenu={onMobilePopupMenu}
          onSignOut={onSignOut}
        />
        <SavedArticles />
      </section>) :
    (
      <section className="header__nologin">
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
