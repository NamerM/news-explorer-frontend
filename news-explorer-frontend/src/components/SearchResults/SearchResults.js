import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm, {searchInput, filteredResults } from '../SearchForm/SearchForm';
import NewsCard from '../NewsCard/NewsCard';
import NotFound from '../NotFound/NotFound';

function SearchResults({ isLoggedIn, isBookmarked, cards, onArticleClick, searchInput, filteredResults }) {
  // const [ searchResults, setSearchResults ] = useState('1');
  const location = useLocation();
  const isSavedArticles = location.pathname === '/saved-articles';

  // function searchFilter(){
  //   setSearchResults = 12345
  // }

  return (
    <section className="searchResults">
      <div className="searchResults__content">
        <div className="searchResults__content-newscards">
          { !isSavedArticles && <h2 className="searchResults__content-title">Search Results</h2> }
          { searchInput.length > 1 ?
            (filteredResults.map((card) => {
              return(
                <NewsCard
                  isLoggedIn={isLoggedIn}
                  isBookmarked={isBookmarked}
                  card={card}
                  iconType={isSavedArticles ? 'bin' : 'bookmark'}
                  onArticleClick={onArticleClick}
                />
              )
            })
            ) : ( <NotFound />)
          }
        
          {/* { !searchResults? (<NotFound />): ""} */}
          { !isSavedArticles && <button type="button" className="searchResults__content-showbtn">Show More</button> }     
        </div>
      </div>
    </section>
  )
}
  // const onShowMoreClick = () => {
  //   setIsClicked(true);
  // }

  // const [renderedCards, setRenderedCards] = useState([]);
  // const [cards, setCards] = useState([]);
  // const displayedCards = 3;

  // const clickHandle = () => {
  //   const addThreeMore = data.slice(0, renderedCards.length + displayedCards + 1 )   //cards.slice
  //   setRenderedCards([...addThreeMore ])
  // }


export default SearchResults;

