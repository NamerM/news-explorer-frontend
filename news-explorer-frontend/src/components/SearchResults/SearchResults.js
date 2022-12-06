import React, {useState} from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedCardList from '../SavedCardList/SavedCardList';

function SearchResults({ isLoggedIn, isBookmarked }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(true); //toggle for displaying  both versions note to reviewer


  return (
    <section className="searchResults">
      <div className="searchResults__content">
        { !isLoggedIn
        ? (<h2 className="searchResults__title">Search Results</h2>)
        : (<div></div>)
        }
      <div className="searchResults_newscards">
        { isBookmarked
          ? (<SavedCardList
              isBookmarked={isBookmarked}
              isLoggedIn={isLoggedIn}
            />)
          : (<NewsCardList
              isBookmarked={isBookmarked}
              isLoggedIn={isLoggedIn}
            />)
        }

      </div>
        { !isLoggedIn  ? (
          <button type="button" className="searchResults__showbtn">Show More</button>
          ) : (<></>)
        }
      </div>
    </section>
  )
}



export default SearchResults;

