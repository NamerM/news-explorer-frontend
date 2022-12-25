import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import SavedArticles from '../SavedArticles/SavedArticles';
import SearchForm from '../SearchForm/SearchForm';



function Header({
  isLoggedIn, 
  onSignInPopupClick, 
  onSignUpPopupClick,
  onMobilePopupClick, 
  onMobilePopupMenu, 
  onSignOut, 
  setKeyword, 
  filteredResults, 
  setFilteredResults , 
 }) {

  const location = useLocation();
  const isSavedArticles = location.pathname === '/articles';


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
      <section className="header__nologin">
        <Navigation
          isLoggedIn={isLoggedIn}
          onDesktopClick={onSignInPopupClick}
          onMobileClick={onMobilePopupClick}
          onMobileMenu={onMobilePopupMenu}
          onSignOut={onSignOut}
           />
        <SearchForm 
          filteredResults={filteredResults}
          setFilteredResults={setFilteredResults}
          setKeyword={setKeyword}
        />
      </section>)
    }
  </header>

  )
}

export default Header;
