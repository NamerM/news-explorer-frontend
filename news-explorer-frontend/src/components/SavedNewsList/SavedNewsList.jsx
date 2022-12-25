import React, {useState} from 'react';
import { useLocation} from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

function SavedNewsList({ 
  cards,
  isLoggedIn, 
  onRemoveArticleClick,
  onArticleClick,
  savedArticle
}) {
  console.log("savedArticle", savedArticle);

  const location = useLocation();
  const isSavedArticles = location.pathname === '/articles';

  return (
    <section className="searchResults__newscards-content">
      <ul className={`${ isLoggedIn
        ? "searchResults__newscards"
        : "searchResults__newscards searchResults__newscards_notlogged"
        }`}>
        { 
          (   
            savedArticle?.map((card, cardId) => { 
             
            return(
              <li key={cardId}>
              <NewsCard
                isLoggedIn={isLoggedIn}
                savedArticle={savedArticle}
                iconType={isSavedArticles ? 'bin' : 'bookmark'}
                onRemoveArticleClick={onRemoveArticleClick}
                onArticleClick={onArticleClick}
                cards={cards}
                image={card.data.image}
                date={card.data.date}
                title={card.data.title}
                text={card.data.texts}
                source={card.data.source}
                keyword={card.data.source}
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