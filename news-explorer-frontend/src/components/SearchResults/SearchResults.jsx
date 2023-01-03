import React, { useContext, useState} from 'react';
import { useLocation} from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import NewsCardList from '../NewsCardList/NewsCardList';
import { useEffect } from 'react';


function SearchResults({ 
  cards,
  isLoggedIn, 
  isLoading,
  setIsLoading,
  onArticleClick,
  filteredResults, 
  savedArticle,
  onRemoveArticleClick,
  keyword,
  setKeyword,
  }) 
{ 
  
  const location = useLocation();
  const isSavedArticles = location.pathname === '/articles';

  useEffect(() => {
    setKeyword(keyword)
  }, [keyword])

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

          keyword  &&  (filteredResults.length === 0 &&  <NotFound/> )
          // keyword  &&  (filteredResults.length === 0 &&  <NotFound/> )
         // ( filteredResults  && <NotFound /> || null ) 
      )
    } 

    </>

  )
}

export default SearchResults;
