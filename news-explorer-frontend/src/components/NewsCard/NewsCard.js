import React, { useState } from "react";
import '../NewsCard/NewsCard.css';


function NewsCard({ card }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //toggle true or false for page changes
  const [toolTipVisible, setToolTipVisible] = useState(false); //
  const [isBookmarked, setIsBookmarked] = useState(true); // toggle  true of false for bookmark icon/tooltip changes
  const [isClicked, setIsClicked] = useState(false); //toggle

  const cursorOnBox = () => {
    (isLoggedIn || !isLoggedIn) && setToolTipVisible(true);
  }
  const cursorOffBox = () => {
    (isLoggedIn || !isLoggedIn) && setToolTipVisible(false);
  }

  const toolTipText = isBookmarked ? "Remove from saved" : "Add to saved"
  const buttonClass = isBookmarked ? "newscard-item__delete" : "newscard-item__bookmark"

  const bookmarkStatus = () => {
    (isClicked ? "newscard-item__bookmark" : "newscard-item") && setIsClicked(true)
  }

  return(
    <li className="newscard">
      <div className="newscard-item">
      { toolTipVisible && (
        <button className="newscard-item__tooltip">
          { isLoggedIn ? toolTipText : "Sign in to save articles" }
        </button>
       )}

        <button className={`newscard-item__box ${
          isLoggedIn
            ? buttonClass
            : "newscard-item__bookmark" }`} type="button" aria-label={isLoggedIn ? "Save to bookmarks" : "Delete Article"}
            onMouseEnter={cursorOnBox}
            onMouseLeave={cursorOffBox}
            onClick={bookmarkStatus}
            ></button>
        <img className="newscard-item__image" src={card.image} alt="Newscard Image" />
        <div className="newscard-item__info">
          <p className="newscard-item__date">{card.date}</p>
          <h2 className="newscard-item__title">{card.title}</h2>
          <p className="newscard-item__text">{card.text}</p>
          <p className="newscard-item__source">{card.source}</p>
          { isLoggedIn && <p className="newscard-item__keyword">{card.keyword}</p>  }
        </div>
      </div>
    </li>
  )
}

export default NewsCard;
