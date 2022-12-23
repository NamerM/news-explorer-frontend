import React, {useState} from 'react';
import { useLocation} from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

function SavedNewsList({ 
  article,
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
            savedArticle?.map((article, cardId) => { 
             
            return(
              <li key={cardId}>
              <NewsCard
                isLoggedIn={isLoggedIn}
                savedArticle={savedArticle}
                iconType={isSavedArticles ? 'bin' : 'bookmark'}
                onRemoveArticleClick={onRemoveArticleClick}
                cards={article}
                image={article.urlToImage}
                date={article.publishedAt}
                title={article.title}
                text={article.content}
                source={article.source.name}
                keyword={article.source.name}
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