import React from "react";


function NewsCard({ keyword, title, text, source, date, image}) {

  return(
    <li className="newscard">
      <div className="newscard-item">
        <button className="newscard-item__bookmarkbox newscard-item__bookmark" type="button" aria-label="Save to bookmarks"></button>
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
{/* <div className="elements__handle">
<h2 className="elements__card-text">{name}</h2>
<div className="elements__handle_likecolumn">
  <button
    className={cardLikeButtonClassName}
   type="button"
   onClick={handleLikeClick}
   ></button>
  <p className="elements__card_likes">{card.likes.length}</p>
</div>
</div> */}
