import React, {useState} from 'react';
import SavedCard from '../SavedCard/SavedCard';
import {data} from '../../utils/data';
import {Link, useLocation } from 'react-router-dom';


function SavedCardList ({
  isLoggedIn,
  isBookmarked,
  onClick,
}) {

console.log(isBookmarked);



return (
  <section className="searchResults__newscards-content">
    <ul className={`${ isLoggedIn && isBookmarked
      ? "searchResults__newscards"
      : "searchResults__newscards searchResults__newscards_notlogged"
    }`}>
      {data.map((card) =>  {
        return (
          <SavedCard
            isLoggedIn={isLoggedIn}
            isBookmarked={isBookmarked}
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
  </section>
  )
}
export default SavedCardList;
