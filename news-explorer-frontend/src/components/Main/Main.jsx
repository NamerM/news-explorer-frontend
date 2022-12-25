import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import SavedArticles from "../SavedArticles/SavedArticles";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SavedNewsList from "../SavedNewsList/SavedNewsList";

function Main({
  isLoggedIn,
  isLoading,
  setIsLoading,
  onArticleClick,
  cards,
  filteredResults,
  savedArticle,
  onRemoveArticleClick,
}) {
 const currentUser = React.useContext(CurrentUserContext);
 const location = useLocation();
 const isSavedArticles = location.pathname === '/articles';  //saved-articles

  return(
    <>
      <main className="main">
        { isSavedArticles &&
        <SavedArticles     
          isLoggedIn={isLoggedIn}
          savedArticle={savedArticle}
          cards={cards}
          iconType={isSavedArticles ? 'bin' : 'bookmark'}
          onArticleClick={onArticleClick}
          onRemoveArticleClick={onRemoveArticleClick} 
        /> 
        }      
        {!isSavedArticles && 
          <SearchResults
            cards={cards}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            filteredResults={filteredResults}
            onArticleClick={onArticleClick}
            savedArticle={savedArticle}
            onRemoveArticleClick={onRemoveArticleClick} 
          /> 
        } 
        { !isSavedArticles && <About /> } 
      </main>
    </>
  );
}

export default Main;
