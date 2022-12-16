import React, {useState} from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {data} from '../../utils/data';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';


function NewsCardList({ isLoggedIn, cards, iconType, onArticleClick }) {
  const [isClicked, setIsClicked] = useState(false); //toggle

  // const {data2} = filteredResults
  // console.log({data2})

  return (
    <section className="searchResults__newscards-content">
      <ul className={`${ isLoggedIn
        ? "searchResults__newscards"
        : "searchResults__newscards searchResults__newscards_notlogged"
      }`}>
        {data.map((card) =>  {
          return (
            <NewsCard
              isLoggedIn={isLoggedIn}
              card={card}
              iconType={iconType}
              onArticleClick={onArticleClick}
            />
          )}
        )}
      </ul>
      {/* <div>
        { !isLoggedIn  ? (
          <button type="button" className="searchResults__showbtn" onClick={clickHandle}>Show More</button>
          ) : (<></>)
        }
      </div> */}

    </section>
    // <></>
  )
}

export default NewsCardList;

