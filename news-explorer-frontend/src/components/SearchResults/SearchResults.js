import React, { useContext, useState} from 'react';
import { useLocation} from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import NewsCardList from '../NewsCardList/NewsCardList';


function SearchResults({ 
  card,
  isLoggedIn, 
  isLoading,
  setIsLoading,
  onArticleClick,
  filteredResults, 
  savedArticle, 
  }) 
{ 
  const location = useLocation();
  const isSavedArticles = location.pathname === '/saved-articles';
  // const[seconds, setSeconds] = useState(0)
  // const timer = (() => {
  //   setSeconds(seconds => seconds + 1);
  // }, 1000);


  return (
    <> 
    { isLoading && <Preloader/> }
    { setIsLoading(false)}
    { filteredResults.length >= 1  ?
      ( <section className="searchResults">
        <div className="searchResults__content">
          <div className="searchResults__content-newscards">
          { !isSavedArticles &&  <h2 className="searchResults__content-title">Search Results</h2> }
            <NewsCardList 
              filteredResults={filteredResults}
              // setIsSearching={setIsSearching}
              isLoggedIn={isLoggedIn}
              savedArticle={savedArticle}
              card={card}
              iconType={isSavedArticles ? 'bin' : 'bookmark'}
              onArticleClick={onArticleClick}
            />
          </div>
        </div>
      </section>) 
      : (    
      ( filteredResults && !isSavedArticles && <NotFound /> ) // searchCounter > 0
      )
    } 

    </>

  )
}

export default SearchResults;
