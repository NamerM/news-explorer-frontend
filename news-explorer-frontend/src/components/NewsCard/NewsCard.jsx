import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../NewsCard/NewsCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect } from "react";

  function NewsCard({
    savedArticle,
    cards,
    image,
    title,
    text,
    date,
    source,
    keyword,
    link,
    name,
    url,
    id,
    isLoggedIn,
    cardType,
    onArticleClick,
    onRemoveArticleClick,
    
}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [toolTipVisible, setToolTipVisible] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [formattedCard, setFormattedCard] = useState({});
    const [cardSaved, setCardsSaved] = useState(false);

    useEffect(() => {
      if (isSavedArticles) {
        setFormattedCard(cards);
      } else {
        setFormattedCard({
          id: cards._id,
          title: cards.title,
          text: cards.content,
          date: cards.publishedAt,
          source: cards.source.name,
          link: cards.url,
          image: cards.urlToImage,
        });
      }
    }, [cards, savedArticle]); // formatting cards at the result page

    useEffect(() => {
      if (!isSavedArticles) {
        let isSaved = false;
        savedArticle.map((card) => {
          if (card.link === formattedCard.link) {
            isSaved = true;
          } else {
            isSaved = false;
          }
        });
        console.log("isSaved card", isSaved);
        setCardsSaved(isSaved);
      }
    }, [formattedCard, savedArticle]);


    const cursorOnBox = () => {
        (isLoggedIn || !isLoggedIn) && setToolTipVisible(true);
    };
    const cursorOffBox = () => {
        (isLoggedIn || !isLoggedIn) && setToolTipVisible(false);
    };

    const BookmarkClick = () => {
        isLoggedIn && bookmarkStatus();
    };

    const resultClick = 'searchResults__newscard-item-bookmark-clicked';
    const toolTipText = isBookmarked ? 'Remove bookmark' : 'Add bookmark';
    const buttonClass = isBookmarked || cardSaved
        ? 'searchResults__newscard-item-bookmark-clicked'
        : 'searchResults__newscard-item-bookmark';
    const bookmarkStatus = () => {(
        // ((isClicked // && buttonClass
        //     ? 'searchResults__newscard-item-bookmark-clicked'
        //     : 'searchResults__newscard-item-bookmark'
        //     ) &&
            setIsClicked(true)) || setIsBookmarked(isBookmarked);
    };

    const buttonTypeClass = cardType === 'saved' 
      ? 'searchResults__newscard-item-delete'
      : (buttonClass);

    const location = useLocation();
    const isSavedArticles = location.pathname === '/articles';
    const isResultCards = location.pathname === '/';

    //  console.log('savedartice', savedArticle);

    const formatDate = (date) => {
        const newDate = new Date(date);
        const setting = {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        };
        return newDate.toLocaleDateString('en-US', setting);
    };

    return (
        <section className="searchResults__newscard ">
            <div className="searchResults__newscard-item">
                {toolTipVisible && (
                    <button className="searchResults__newscard-item-tooltip">
                        {isLoggedIn ? toolTipText : 'Sign in to save articles'}
                    </button>
                )}

                <button
                    className={`searchResults__newscard-item-box ${buttonTypeClass}`}
                    type="button"
                    onMouseEnter={cursorOnBox}
                    onMouseLeave={cursorOffBox}
                    //onClick={() => onArticleClick(cards)}
                    onClick={() => {
                      if (isSavedArticles) {
                        //  console.log("saved articles page");
                        console.log("cards", cards);
                        onRemoveArticleClick(cards);
                      }
                      if (!isSavedArticles && cardSaved) {
                        //  console.log("on home page and card is not save");
                        onRemoveArticleClick(cards);
                      }
                      if (!isSavedArticles && !cardSaved) {
                        //  console.log("on home page & card is not saved");
                        onArticleClick(cards);
                      }
                  }}

                    onMouseUp={BookmarkClick}
                ></button>
                <img
                  className="searchResults__newscard-item-image"
                  src={image}
                  alt={title}
                />
                <div className="searchResults__newscard-item-info">
                    <p className="searchResults__newscard-item-date">
                      {formatDate(date)}
                    </p>
                    <h2 className="searchResults__newscard-item-title">
                      {title}
                    </h2>
                    <p className="searchResults__newscard-item-text">{text}</p>
                    {/* <p className="searchResults__newscard-item-source">{cards.source}</p> */}
                    <a
                      className="searchResults__newscard-item-source"
                      target="_blank"
                      href={link}
                    >
                        {source}
                    </a>
                    {isLoggedIn && (
                        <p className="searchResults__newscard-item-keyword">
                          {keyword}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default NewsCard ;
