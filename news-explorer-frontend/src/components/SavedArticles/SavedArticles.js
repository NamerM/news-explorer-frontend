import React from 'react';
import {data} from '../../utils/data';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function SavedArticles({ name }) {
  const currentUser = React.useContext(CurrentUserContext)
  const keyword = data.map((card) => card.keyword);
  const separateKeywords = [...new Set(keyword)];

  return(
    <section className="savedarticles__container" id="saved-articles">
      <div className="savedarticles">
        <h1 className="savedarticles__tagtext">Saved articles</h1>
        <h2 className="savedarticles__title">{currentUser.name}, you have {data.length} saved articles</h2>
          <p className="savedarticles__keywords">By keywords:{' '}
          <span className="savedarticles__keywords_bold">
            {separateKeywords.length <= 2 ?  separateKeywords.join(', ') : separateKeywords.slice(0, 2).join(', ') + ' and ' + (separateKeywords.length -2) + ' more'}
          </span>
          </p>
      </div>
    </section>
  )
}

export default SavedArticles;
