import React, {useState} from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //toggle for displaying whole


  return (
    <div className="searchResults">
      <div className="searchResults__content">
        { !isLoggedIn
        ? (<h2 className="searchResults__title">Search Results</h2>)
        : (<div></div>)
        }
      <div className="searchResults_newsCards">
        <NewsCardList />
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

