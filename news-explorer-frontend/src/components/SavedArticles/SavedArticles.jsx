import React from 'react';
// import {data} from '../../utils/data';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import SavedNewsList from '../SavedNewsList/SavedNewsList';

function SavedArticles({ 
  savedArticle, 
  cards, 
  isSavedArticles, 
  onRemoveArticleClick,
  onArticleClick,
  isLoggedIn,
  }) {  
  const currentUser = React.useContext(CurrentUserContext);
  console.log("savedArticle component" , savedArticle);
  const keyword = savedArticle.map((card) => card.keyword);
  const separateKeywords = [...new Set(keyword)];
  //console.log("separateKeywords =>", separateKeywords)

  return(
    <>
    <section className="savedarticles__container" id="saved-articles">
      <div className="savedarticles">
        <h1 className="savedarticles__tagtext">Saved articles</h1>
        <h2 className="savedarticles__title">{currentUser.name}, you have {savedArticle.length} saved articles</h2>
          <p className="savedarticles__keywords">By keywords:{' '}
          <span className="savedarticles__keywords_bold">
            {separateKeywords.length <= 2 ?  separateKeywords.join(', ') : separateKeywords.slice(0, 2).join(', ') + ' and ' + (separateKeywords.length -2) + ' more'}
          </span>
          </p>
      </div>
    </section>
    { 
      savedArticle &&  
      <SavedNewsList 
        savedArticle={savedArticle}
        isLoggedIn={isLoggedIn}
        cards={cards.data}
        iconType={isSavedArticles ? 'searchResults__newscard-item-delete' : 'bin'}
        onRemoveArticleClick={onRemoveArticleClick}
        onArticleClick={onArticleClick}
      />
    } 
    </>
  )
}

export default SavedArticles;
