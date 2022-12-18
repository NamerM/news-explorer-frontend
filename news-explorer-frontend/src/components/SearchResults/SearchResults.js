import React, { useContext, useState} from 'react';
import { useLocation} from 'react-router-dom';
// import SearchForm, {searchInput, filteredResults } from '../SearchForm/SearchForm';
import NewsCard from '../NewsCard/NewsCard';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import { SearchResultContext } from '../../contexts/SearchResultContext';

function SearchResults({ isLoggedIn, isBookmarked, cards, onArticleClick, searchSubmitClicked, isSubmitPressed }) { //isSearchInput, isFilteredResults
  let  searchOutput = React.useContext(SearchResultContext); 
  console.log(searchOutput);;

  const [isSearching, setIsSearching] = useState(false);
 
  console.log("searchResultscontext =>" , searchOutput); 
  console.log("isSubmitPressed click ==>", searchSubmitClicked); 

  const location = useLocation();
  const isSavedArticles = location.pathname === '/saved-articles';

  
  return (
    <> { searchSubmitClicked ?
(      <section className="searchResults">
      <div className="searchResults__content">
        <div className="searchResults__content-newscards">
          { !isSavedArticles &&  <h2 className="searchResults__content-title">Search Results</h2> }
          { isSearching ? <Preloader/> : ''}
          
          { searchSubmitClicked > 1 ?
            (searchOutput.map((card) => { //isFilteredResults.map
              setIsSearching(false);
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
            ) : ( !isSavedArticles && searchSubmitClicked && <NotFound />)
          }
          { !isSavedArticles && !searchOutput && <button type="button" className="searchResults__content-showbtn">Show More</button> }     
        </div>
      </div>
    </section>) : ('')
    }

    </>

  )
}

export default SearchResults;

  // const [ searchResults, setSearchResults ] = useState('1');
  // function searchFilter(){
  //   setSearchResults = 12345
  // }
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
          {/* { !searchResults? (<NotFound />): ""} */}