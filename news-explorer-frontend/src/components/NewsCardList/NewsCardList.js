import React, {useState} from 'react';
import { useLocation} from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
// import {data} from '../../utils/data';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';


function NewsCardList({ isLoggedIn, card, iconType, onArticleClick, filteredResults, savedArticle, setIsSearching}) {
  // const [cardsPresent, setCardsPresent] = useState(3);
  // const showMoreBtn = cardsPresent < card?.length;

  const location = useLocation();
  const isSavedArticles = location.pathname === '/saved-articles';

  return (
    <section className="searchResults__newscards-content">
      <ul className={`${ isLoggedIn
        ? "searchResults__newscards"
        : "searchResults__newscards searchResults__newscards_notlogged"
        }`}>
        { 
          (   
            filteredResults.map((card) => { 
            console.log("search result in function=>", filteredResults)
            setIsSearching(false);
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

  )
}

export default NewsCardList;

      {/* <div>
        { showMoreBtn && (
          <button type="button" className="earchResults__content-showbtn" 
           onClick={() => cardsPresent((prev) => (prev += 3))}>
            Show More
          </button>
          ) 
        }
      </div> */}