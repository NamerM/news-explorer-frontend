import React, {useState} from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {data} from '../../utils/data';

function NewsCardList(isLoggedIn) {
  // const [isLoggedIn, setIsLoggedIn] = useState(true); //toggle
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
    <div className="newscards__content">
      <ul className={`${ isLoggedIn
        ? "newscards"
        : "newscards newscards__notlogged"
      }`}>
        {data.map((card) =>  {
          return (
            <NewsCard
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

    </div>
    // <></>
  )
}

export default NewsCardList;
