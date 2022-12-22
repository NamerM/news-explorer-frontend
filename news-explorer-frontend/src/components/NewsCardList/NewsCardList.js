import React, {useState} from 'react';
import { useLocation} from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards, isLoggedIn, onArticleClick, filteredResults, savedArticle}) {
  const [cardsPresent, setCardsPresent] = useState(3);

  const location = useLocation();
  const isSavedArticles = location.pathname === '/articles/';

  return (
    <>
    <section className="searchResults__newscards-content">
      <ul className={`${ isLoggedIn
        ? "searchResults__newscards"
        : "searchResults__newscards searchResults__newscards_notlogged"
        }`}>
        { 
          (   
            filteredResults.slice(0, cardsPresent).map((card, cardId) => { 
            // console.log("search result in function=>", filteredResults)
            return(
              <li key={cardId}>
              <NewsCard
                isLoggedIn={isLoggedIn}
                savedArticle={savedArticle}
                iconType={isSavedArticles ? 'bin' : 'bookmark'}
                onArticleClick={onArticleClick}
                image={card.image}
                date={card.date}  //{article.publishedAt}
                title={card.title}
                text={card.text}
                source={card.source}
                link={card.link}
                cards={card}
              />
              </li>
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

  // const [renderedCards, setRenderedCards] = useState([]);
  // const [cards, setCards] = useState([]);
  // const displayedCards = 3;

  // const clickHandle = () => {
  //   const addThreeMore = data.slice(0, renderedCards.length + displayedCards + 1 )   //cards.slice
  //   setRenderedCards([...addThreeMore ])