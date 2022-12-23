import React, {useState} from 'react';
import { useLocation} from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

function SavedNewsList({ 
  isLoggedIn, 
  onRemoveArticleClick, 
  savedArticle
}) {
  console.log("savedArticle", savedArticle);

  const location = useLocation();
  const isSavedArticles = location.pathname === '/articles/';

  return (
    <section className="searchResults__newscards-content">
      <ul className={`${ isLoggedIn
        ? "searchResults__newscards"
        : "searchResults__newscards searchResults__newscards_notlogged"
        }`}>
        { 
          (   
            savedArticle.map((card, cardId) => { 
            // console.log("search result in function=>", filteredResults)
            return(
              <li key={cardId}>
              <NewsCard
                isLoggedIn={isLoggedIn}
                savedArticle={savedArticle}
                iconType={isSavedArticles ? 'bin' : 'bookmark'}
                onRemoveArticleClick={onRemoveArticleClick}
                cards={card.data}
              />
              </li>
              )
            })
          ) 
        }
      </ul>
    </section>
  )
}

export default SavedNewsList;