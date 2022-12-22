import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import SavedArticles from "../SavedArticles/SavedArticles";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Main({
  isLoggedIn,
  isLoading,
  setIsLoading,
  onArticleClick,
  cards,
  filteredResults,
  savedArticle,
  onSavedArticleClick,
  onClick,
}) {
 const currentUser = React.useContext(CurrentUserContext);

 const location = useLocation();
 const isSavedArticles = location.pathname === '/articles/';  //saved-articles

  return(
    <>
      <main className="main">
        { isSavedArticles &&
        <>
        <SavedArticles     
        isLoggedIn={isLoggedIn}
        savedArticle={savedArticle}
        cards={cards}
        iconType={isSavedArticles ? 'bin' : 'bookmark'}
        onSavedArticleClick={onArticleClick} 
        /> 
        {/* // NewsCardList with savedArticle/bookmark status here? */}
      </>
        }      
        {!isSavedArticles && <SearchResults
          cards={cards}
          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          filteredResults={filteredResults}
          onArticleClick={onArticleClick}
          onClick={onClick}
          savedArticle={savedArticle}
         /> 
        } 
 
        { !isSavedArticles && <About /> } 
      
      </main>
    </>



  );
}

export default Main;
