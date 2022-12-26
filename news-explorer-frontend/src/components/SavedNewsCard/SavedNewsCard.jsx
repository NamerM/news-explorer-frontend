import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../NewsCard/NewsCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { data } from "../../utils/data";


function SavedNewsCard ({ 
  savedArticle,
  cards,
  image, title, text, date, source, keyword, link, // _id,
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

  const buttonTypeClass = iconType === 'bin' ? 'searchResults__newscard-item-delete' : '';
  const location = useLocation();
  const isSavedArticles = location.pathname === '/articles/';

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
  console.log("savedArticles all =>>,", savedArticle)

  return(
   <section className="searchResults__newscard "> 
      <div className="searchResults__newscard-item">
      { toolTipVisible && (
        <button className="searchResults__newscard-item-tooltip">
          Remove Bookmark
        </button>
       )}

        <button className={`searchResults__newscard-item-box ${buttonTypeClass}`} type="button" aria-label={!isSavedArticles ? "Save to bookmarks" : "Delete Article"}
          onMouseEnter={cursorOnBox}
          onMouseLeave={cursorOffBox}
          onClick={() => {
            onRemoveArticleClick({title, date, text, source, link});

          } }
          >
        </button>
        <img className="searchResults__newscard-item-image" src={image} alt={title} />
        <div className="searchResults__newscard-item-info">
          <p className="searchResults__newscard-item-date">{formatDate(date)}</p>
          <h2 className="searchResults__newscard-item-title">{title}</h2>
          <p className="searchResults__newscard-item-text">{text}</p>
          <a className="searchResults__newscard-item-source" target="_blank" href={link}>
          {source}
          </a>
          { isLoggedIn && <p className="searchResults__newscard-item-keyword">{keyword}</p> }
        </div>
      </div>
    </section>
  )
}

export default SavedNewsCard ;
