import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedCardList from '../SavedCardList/SavedCardList';

function SearchResults({ isLoggedIn, isBookmarked }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(true); //toggle for displaying  both versions note to reviewer
  const location = useLocation();
  const isSavedArticles = location.pathname === '/saved-articles' || '/#saved-articles';

  return (
    <section className="searchResults">
      <div className="searchResults__content">
        <div className="searchResults_newscards">
          { isSavedArticles
            ? (
                <SavedCardList
                isBookmarked={isBookmarked}
                isLoggedIn={isLoggedIn}
                />
              )
            : (<>
                <h2 className="searchResults__title">Search Results</h2>
                <NewsCardList
                isBookmarked={isBookmarked}
                isLoggedIn={isLoggedIn}
                />
                 <button type="button" className="searchResults__showbtn">Show More</button>
              </>
              )
          }

        </div>
          {/* { !isLoggedIn  ? (
            <button type="button" className="searchResults__showbtn">Show More</button>
            ) : (<></>)
          } */}
      </div>
    </section>
  )
}



export default SearchResults;

