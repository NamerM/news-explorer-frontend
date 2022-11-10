import React from "react";

function NewsCard() {

  return(
    <li className="elements__card">
    <button
      className={cardDeleteButtonClassName}
      type="button"
      onClick={handleDeleteClick}></button>
    <img className="elements__image"
      src={link}
      alt={name}
      onClick={handleClick}
      />
    <div className="elements__handle">
      <h2 className="elements__card-text">{name}</h2>
      <div className="elements__handle_likecolumn">
        <button
          className={cardLikeButtonClassName}
         type="button"
         onClick={handleLikeClick}
         ></button>
        <p className="elements__card_likes">{card.likes.length}</p>
      </div>
    </div>
  </li>
  )
}
