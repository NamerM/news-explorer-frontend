import React, { useState } from "react";
import '../NewsCard/NewsCard.css';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';


function NewsCard ({ card, isLoggedIn, onArticleClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [toolTipVisible, setToolTipVisible] = useState(false); //
  const [isBookmarked, setIsBookmarked] = useState(false); // toggle  true of false for bookmark icon/tooltip changes
  const [isClicked, setIsClicked] = useState(false); //toggle

  const cursorOnBox = () => {
    (isLoggedIn || !isLoggedIn) && setToolTipVisible(true);
  }
  const cursorOffBox = () => {
    (isLoggedIn || !isLoggedIn) && setToolTipVisible(false);
  }

  const toolTipText = isBookmarked ? "Remove bookmark" : "Add bookmark"
  const buttonClass = isBookmarked ? "searchResults__newscard-item-bookmark-clicked" : "searchResults__newscard-item-bookmark"

  const clickStatus = () => {
    setIsClicked(true)
  }

  const bookmarkStatus = () => {
    (isClicked ? "searchResults__newscard-item-bookmark-clicked"  : "searchResults__newscard-item-bookmark") && setIsClicked(true) || setIsBookmarked(!isBookmarked)
  }

  // const isOwn = card.owner === currentUser._id;
  const isSaved = card.articles.some(user => user === currentUser._id );
  const cardBookMarkToggle = `${isSaved ? "searchResults__newscard-item-bookmark-clicked" : "searchResults__newscard-item-bookmark"}`;



  return(
    <li className="searchResults__newscard ">
      <div className="searchResults__newscard-item">
      { toolTipVisible && (
        <button className="searchResults__newscard-item-tooltip">
          { isLoggedIn ? toolTipText : "Sign in to save articles" }
        </button>
       )}

        <button className={`searchResults__newscard-item-box ${
          isLoggedIn
            ? buttonClass
            : "searchResults__newscard-item-bookmark" }`} type="button" aria-label={isLoggedIn ? "Save to bookmarks" : "Delete Article"}
            onMouseEnter={cursorOnBox}
            onMouseLeave={cursorOffBox}
            onClick={bookmarkStatus}
            >
            </button>
        <img className="searchResults__newscard-item-image" src={card.image} alt={card.title} />
        <div className="searchResults__newscard-item-info">
          <p className="searchResults__newscard-item-date">{card.date}</p>
          <h2 className="searchResults__newscard-item-title">{card.title}</h2>
          <p className="searchResults__newscard-item-text">{card.text}</p>
          <p className="searchResults__newscard-item-source">{card.source}</p>
          { isLoggedIn && <p className="searchResults__newscard-item-keyword">{card.keyword}</p>  }
        </div>
      </div>
    </li>
  )
}

export default NewsCard ;
