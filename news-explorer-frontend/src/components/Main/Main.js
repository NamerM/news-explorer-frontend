import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import NotFound from "../NotFound/NotFound";
import SavedArticles from "../SavedArticles/SavedArticles";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Main({
  isLoggedIn,
  onSavedArticleClick,
  onSearchArticleClicked,
  cards,
}) {
 const currentUser = React.useContext(CurrentUserContext)
 const location = useLocation();
 const isSavedArticles = location.pathname === '/saved-articles';


  return(
    <>
      <main className="main">
        {isSavedArticles && <SavedArticles isLoggedIn={isLoggedIn} />}

        <SearchResults
          isLoggedIn={isLoggedIn}
          cards={cards}
          onArticleClick={isSavedArticles ? onSavedArticleClick : onSearchArticleClicked}
         />
        {/* <Preloader />
        <NotFound />  uncomment to see the components*/ }
        <About />
      </main>
    </>



  );
}

export default Main;
