import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResults from '../SearchResults/SearchResults';
import {searchInput, filteredResults} from '../SearchForm/SearchForm';
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
  onHandleSearchSubmit,
  // isSearchInput,
  // isFilteredResults
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
          onHandleSearchSubmit={onHandleSearchSubmit}
          // searchInput={isSearchInput}
          // filteredResults={isFilteredResults}
         />
        {/* <Preloader />
        <NotFound />  uncomment to see the components*/ }
        <About />
      </main>
    </>



  );
}

export default Main;
