import React, { useContext, useState} from 'react';
import { useLocation} from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import NewsCardList from '../NewsCardList/NewsCardList';


function SearchResults({ 
  cards,
  isLoggedIn, 
  isLoading,
  setIsLoading,
  onArticleClick,
  filteredResults, 
  savedArticle,
  onRemoveArticleClick,
  }) 
{ 
  const location = useLocation();
  const isSavedArticles = location.pathname === '/articles/';

  return (
    <> 
    { isLoading && <Preloader/> }
    { filteredResults.length >= 1  ?
      ( <section className="searchResults">
        <div className="searchResults__content">
          <div className="searchResults__content-newscards">
          { !isSavedArticles &&  <h2 className="searchResults__content-title">Search Results</h2> }
            <NewsCardList 
              filteredResults={filteredResults}
              isLoggedIn={isLoggedIn}
              savedArticle={savedArticle}
              cards={cards}
              iconType={isSavedArticles ? 'bin' : 'bookmark'}
              onArticleClick={onArticleClick}
              onRemoveArticleClick={onRemoveArticleClick} 
            />
          </div>
        </div>
      </section>) 
      : (    
      ( filteredResults  && <NotFound /> || null ) 
      )
    } 

    </>

  )
}

export default SearchResults;
