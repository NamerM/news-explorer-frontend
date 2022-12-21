import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import NotFound from "../NotFound/NotFound";
import NewsCard from '../NewsCard/NewsCard';
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedArticles from "../SavedArticles/SavedArticles";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Main({
  isLoggedIn,
  isLoading,
  setIsLoading,
  onSavedArticleClick,
  onArticleClick,
  cards,
  filteredResults,
  savedArticle,
  onClick,
}) {
 const currentUser = React.useContext(CurrentUserContext);

 const location = useLocation();
 const isSavedArticles = location.pathname === '/saved-articles';

  return(
    <>
      <main className="main">
        { isSavedArticles &&
        <>
        <SavedArticles isLoggedIn={isLoggedIn} /> 
        {/* // NewsCardList with savedArticle/bookmark status here? */}
        {/* <SavedCards
        isLoggedIn={isLoggedIn}
        savedArticle={savedArticle}
        card={card}
        iconType={isSavedArticles ? 'bin' : 'bookmark'}
        onSavedArticleClick={onSavedArticleClick}
        /> */}
      </>
        }      
        {!isSavedArticles && <SearchResults
          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          filteredResults={filteredResults}
          onArticleClick={onArticleClick}
          onClick={onClick}
         /> 
        } 
 
        { !isSavedArticles && <About /> } 
      
      </main>
    </>



  );
}

export default Main;
