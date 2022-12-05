import React, {useState} from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults({ isLoggedIn }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(true); //toggle for displaying  both versions note to reviewer


  return (
    <div className="searchResults">
      <div className="searchResults__content">
        { !isLoggedIn
        ? (<h2 className="searchResults__title">Search Results</h2>)
        : (<div></div>)
        }
      <div className="searchResults_newscards">
        <NewsCardList
          isLoggedIn={isLoggedIn}
        />
      </div>
        { !isLoggedIn  ? (
          <button type="button" className="searchResults__showbtn">Show More</button>
          ) : (<></>)
        }
      </div>
    </div>
  )
}



export default SearchResults;

