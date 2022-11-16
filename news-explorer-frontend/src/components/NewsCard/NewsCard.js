import React, { useState } from "react";


function NewsCard({ title, text, source, date, image}) {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //toggle true for delete icon
  const [toolTipVisible, setToolTipVisible] = useState(false) //

  const cursorOnBox = () => {
    (isLoggedIn || !isLoggedIn) && setToolTipVisible(true);
  }
  const cursorOffBox = () => {
    (isLoggedIn || !isLoggedIn) && setToolTipVisible(false);
  }


  return(
    <li className="newscard">
      <div className="newscard-item">
      { toolTipVisible && (
        <button className="newscard-item__tooltip">
          { isLoggedIn ? "Remove from saved" : "Sign in to save articles"}
        </button>
       )}

        <button className={`newscard-item__box ${
          isLoggedIn
            ? "newscard-item__delete"
            : "newscard-bookmark" }`} type="button" aria-label={isLoggedIn ? "Save to bookmarks" : "Delete Article"}
            onMouseEnter={cursorOnBox}
            onMouseLeave={cursorOffBox}
            ></button>
        <img className="newscard-item__image" src={image} alt="Newscard Image" />
        <div className="newscard-item__info">
          <p className="newscard-item__date">{date}</p>
          <h2 className="newscard-item__title">{title}</h2>
          <p className="newscard-item__text">{text}</p>
          <p className="newscard-item__source">{source}</p>
        </div>
      </div>
    </li>
  )
}

export default NewsCard;
