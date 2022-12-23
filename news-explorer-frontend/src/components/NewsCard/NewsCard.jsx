import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../NewsCard/NewsCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function NewsCard ({ 
  cards, 
  isLoggedIn, 
  iconType,  
  onArticleClick, 
  onRemoveArticleClick
}) {
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
  const bookmarkStatus = () => {
    (isClicked ? "searchResults__newscard-item-bookmark-clicked"  : "searchResults__newscard-item-bookmark") && setIsClicked(!true) || setIsBookmarked(!isBookmarked)
  }

  const isSaved = cards && cards.articles && cards.articles.some(user => user === currentUser._id );
  const buttonTypeClass = iconType === 'bin' ? 'searchResults__newscard-item-delete' : buttonClass;

  const location = useLocation();
  const isSavedArticles = location.pathname === '/articles/';
  // const toggleBookmark = isSavedArticles ? (() => onArticleClick(cards)) : (() => onRemoveArticleClick(cards))
  
  // const formatDate = (date) => {
  //   const newDate = new Date(date);
  //   const options = {
  //     month: 'long',
  //     day: 'numeric',
  //     year: 'numeric',
  //   };
  //   return newDate.toLocaleDateString(
  //     'en-US',
  //     options
  //   );
  // }

  return(
   <section className="searchResults__newscard "> 
      <div className="searchResults__newscard-item">
      { toolTipVisible && (
        <button className="searchResults__newscard-item-tooltip">
          { isLoggedIn ? toolTipText : "Sign in to save articles" }
        </button>
       )}

        <button className={`searchResults__newscard-item-box ${buttonTypeClass}`} type="button" aria-label={isLoggedIn ? "Save to bookmarks" : "Delete Article"}
          onMouseEnter={cursorOnBox}
          onMouseLeave={cursorOffBox}
          onClick={!isSavedArticles ? () => onArticleClick(cards) : () => onRemoveArticleClick(cards) }
          onMouseUp={bookmarkStatus}
          >
        </button>
        <img className="searchResults__newscard-item-image" src={cards.image} alt={cards.title} />
        <div className="searchResults__newscard-item-info">
          <p className="searchResults__newscard-item-date">{cards.date}</p>
          <h2 className="searchResults__newscard-item-title">{cards.title}</h2>
          <p className="searchResults__newscard-item-text">{cards.text}</p>
          {/* <p className="searchResults__newscard-item-source">{cards.source}</p> */}
          <a className="searchResults__newscard-item-source" target="_blank" href={cards.link}>
          {cards.source}
          </a>
          { isLoggedIn && <p className="searchResults__newscard-item-keyword">{cards.keyword}</p> }
        </div>
      </div>
    </section>
  )
}

export default NewsCard ;
