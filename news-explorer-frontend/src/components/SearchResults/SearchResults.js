import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults() {

  return (
    <div className="searchResults">
      <div className="searchResults__content">
        <h2 className="searchResults__title">Search Results</h2>
      <div className="searchResults_newsCards">
        <NewsCardList />
      </div>
        <button type="button" className="searchResults__showbtn">Show More</button>
      </div>
    </div>
  )
}



export default SearchResults;

