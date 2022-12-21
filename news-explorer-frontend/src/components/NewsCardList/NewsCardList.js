import React, {useState} from 'react';
import { useLocation} from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
// import {data} from '../../utils/data';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';


function NewsCardList({ isLoggedIn, cards, iconType, onArticleClick, filteredResults, savedArticle}) {
  const [cardsPresent, setCardsPresent] = useState(3);

  const location = useLocation();
  const isSavedArticles = location.pathname === '/saved-articles';

  return (
    <>
    <section className="searchResults__newscards-content">
      <ul className={`${ isLoggedIn
        ? "searchResults__newscards"
        : "searchResults__newscards searchResults__newscards_notlogged"
        }`}>
        { 
          (   
            filteredResults.slice(0, cardsPresent).map((card) => { 
            console.log("search result in function=>", filteredResults)
            return(
              <NewsCard
                isLoggedIn={isLoggedIn}
                savedArticle={savedArticle}
                card={card}
                iconType={isSavedArticles ? 'bin' : 'bookmark'}
                onArticleClick={onArticleClick}
              />
              )
            })
          ) 
        }
      </ul>
    </section>
         <button type="button"className="searchResults__content-showbtn"
          onClick={() => setCardsPresent((prev) => (prev += 3))}>Show More</button>    </>
  )
}

export default NewsCardList;

