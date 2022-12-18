import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResults from '../SearchResults/SearchResults';
import {searchInput, filteredResults} from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import NotFound from "../NotFound/NotFound";
import SavedArticles from "../SavedArticles/SavedArticles";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SearchResultContext } from '../../contexts/SearchResultContext';

function Main({
  isLoggedIn,
  onSavedArticleClick,
  onSearchArticleClicked,
  cards,
  searchSubmitClicked,
  // isSearchInput,
  // isFilteredResults
}) {
 const currentUser = React.useContext(CurrentUserContext);
 const searchOutput = React.useContext(SearchResultContext);
 const location = useLocation();
 const isSavedArticles = location.pathname === '/saved-articles';


  return(
    <>
      <main className="main">
        {isSavedArticles && <SavedArticles isLoggedIn={isLoggedIn} />}

        <SearchResults
          isLoggedIn={isLoggedIn}
          cards={cards}
          searchSubmitClicked={searchSubmitClicked}
          searchOutput={searchOutput}
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
