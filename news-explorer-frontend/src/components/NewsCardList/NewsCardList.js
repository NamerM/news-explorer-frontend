import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {data} from '../../utils/data';
// import getArticles from '../../contexts/ArticlesContext';

function NewsCardList() {
  // const { data } = getArticles();

  return (
    <section className="newscards">
      <ul className="newscards__content">
        {data.map((card) =>  {
          return (
            <NewsCard
              card={card}
              key={card._id}
              image={card.image}
              date={card.date}
              title={card.title}
              text={card.text}
              source={card.source}
            />
          )}
        )}
      </ul>
    </section>

    // <></>
  )
}

export default NewsCardList;
