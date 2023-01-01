import React, {useState} from 'react';
import { useLocation} from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import SavedNewsCard from '../SavedNewsCard/SavedNewsCard';

function SavedNewsList({ 
  cards,
  isLoggedIn, 
  onRemoveArticleClick,
  onArticleClick,
  savedArticle
}) {
  //console.log("savedArticle", savedArticle);

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
                //iconType={isSavedArticles ? 'bin' : 'bookmark'}
                onRemoveArticleClick={onRemoveArticleClick}
                onArticleClick={onArticleClick}
                cards={card}  
                image={card.image}
                date={card.date}
                title={card.title}
                text={card.text}
                source={card.source}
                keyword={card.source}
                link={card.link}
                id={card._id}
                cardType={isSavedArticles ? 'saved' : 'new'}
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

{/* <li key={cardId}>
<SavedNewsCard
  isLoggedIn={isLoggedIn}
  savedArticle={savedArticle}
  iconType={isSavedArticles ? 'bin' : 'bookmark'}
  onRemoveArticleClick={onRemoveArticleClick}
  onArticleClick={onArticleClick}
  cards={cards} // cards={card} 
  image={card.image}
  date={card.date}
  title={card.title}
  text={card.text}
  source={card.source}
  keyword={card.source}
  link={card.link}
  id={card._id}
/>
</li> */}