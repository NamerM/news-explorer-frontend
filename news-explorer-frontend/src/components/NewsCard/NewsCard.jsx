import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../NewsCard/NewsCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function NewsCard ({ 
  savedArticle,
  cards,
  image, title, text, date, source, keyword, link, name, url, id,
  isLoggedIn, 
  cardType,
  onArticleClick, 
  onRemoveArticleClick
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [toolTipVisible, setToolTipVisible] = useState(false); //
  const [isBookmarked, setIsBookmarked] = useState(false); // toggle  true of false for bookmark icon/tooltip changes
  const [isClicked, setIsClicked] = useState(false); //toggle
  const [isSaved, setIsSaved] = useState(false);

  const cursorOnBox = () => {
    (isLoggedIn || !isLoggedIn) && setToolTipVisible(true);
  }
  const cursorOffBox = () => {
    (isLoggedIn || !isLoggedIn) && setToolTipVisible(false);
  }

  const BookmarkClick = () => {
    isLoggedIn && bookmarkStatus() && setIsSaved(true)
  }

  // const articleStatus = () => {
  //   !isSavedArticles && (onArticleClick(cards) || savedArticle && onRemoveArticleClick({title, date, text, source, link, id}))
  //   console.log("cards--", cards, "savedArticle--", savedArticle)
  // }

  const toolTipText = isBookmarked ? "Remove bookmark" : "Add bookmark"
  const buttonClass = isBookmarked ? "searchResults__newscard-item-bookmark-clicked" : "searchResults__newscard-item-bookmark"
  const bookmarkStatus = () => {
    (isClicked ? "searchResults__newscard-item-bookmark-clicked"  : "searchResults__newscard-item-bookmark") && setIsClicked(!true) || setIsBookmarked(!isBookmarked)
  }

  //const isSaved = cards.url// cards.articles.some(user => user === currentUser._id );

  const buttonTypeClass = cardType === 'saved' ? 'searchResults__newscard-item-delete' : buttonClass;
  const location = useLocation();
  const isSavedArticles = location.pathname === '/articles/';
 
  // console.log("cards-->", cards);

  const formatDate = (date) => {
    const newDate = new Date(date);
    const setting = {
      month: 'long', 
      day: 'numeric',
      year: 'numeric',
    };
    return newDate.toLocaleDateString(
      'en-US',
      setting
    );
  }

  return(
   <section className="searchResults__newscard "> 
      <div className="searchResults__newscard-item">
      { toolTipVisible && (
        <button className="searchResults__newscard-item-tooltip">
          { isLoggedIn ? toolTipText : "Sign in to save articles" } 
        </button>
       )}

        <button className={`searchResults__newscard-item-box ${buttonTypeClass}`} type="button"
          onMouseEnter={cursorOnBox}
          onMouseLeave={cursorOffBox}
          //onClick={() => onArticleClick(cards)}
          onClick={ () => ((cardType === 'saved')  || isSaved ? onRemoveArticleClick : onArticleClick)(cards)}
         // onClick={!isSavedArticles ? () => onArticleClick(cards) :  () => onRemoveArticleClick(cards) }
          onMouseUp={BookmarkClick}
          >
        </button>
        <img className="searchResults__newscard-item-image" src={image} alt={title} />
        <div className="searchResults__newscard-item-info">
          <p className="searchResults__newscard-item-date">{formatDate(date)}</p>
          <h2 className="searchResults__newscard-item-title">{title}</h2>
          <p className="searchResults__newscard-item-text">{text}</p>
          {/* <p className="searchResults__newscard-item-source">{cards.source}</p> */}
          <a className="searchResults__newscard-item-source" target="_blank" href={link}>
          {source}
          </a>
          { isLoggedIn && <p className="searchResults__newscard-item-keyword">{keyword}</p> }
        </div>
      </div>
    </section>
  )
}

export default NewsCard ;
