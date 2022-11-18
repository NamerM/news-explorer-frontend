import React, {useState} from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {data} from '../../utils/data';

function NewsCardList() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //toggle
  const [isClicked, setIsClicked] = useState(false); //toggle

  const onShowMoreClick = () => {
    setIsClicked(true);
  }

  return (
    <div className="newscards__content">
      <ul className={`${ isLoggedIn || setIsClicked
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
    </div>
    // <></>
  )
}

export default NewsCardList;
