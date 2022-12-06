import React, {useState} from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {data} from '../../utils/data';

function NewsCardList({ isLoggedIn }) {
  const [isClicked, setIsClicked] = useState(false); //toggle

  // const onShowMoreClick = () => {
  //   setIsClicked(true);
  // }

  // const [renderedCards, setRenderedCards] = useState([]);
  // const [cards, setCards] = useState([]);
  // const displayedCards = 3;

  // const clickHandle = () => {
  //   const addThreeMore = data.slice(0, renderedCards.length + displayedCards + 1 )   //cards.slice
  //   setRenderedCards([...addThreeMore ])
  // }

  return (
    <section className="searchResults__newscards-content">
      <ul className={`${ isLoggedIn
        ? "searchResults__newscards"
        : "searchResults__newscards searchResults__newscards_notlogged"
      }`}>
        {data.map((card) =>  {
          return (
            <NewsCard
              isLoggedIn={isLoggedIn}
              card={card}
              key={card._id}
              image={card.image}
              date={card.date}
              title={card.title}
              text={card.text}
              source={card.source}
              keyword={card.keyword}
            />
          )}
        )}
      </ul>
      {/* <div>
        { !isLoggedIn  ? (
          <button type="button" className="searchResults__showbtn" onClick={clickHandle}>Show More</button>
          ) : (<></>)
        }
      </div> */}

    </section>
    // <></>
  )
}

export default NewsCardList;
