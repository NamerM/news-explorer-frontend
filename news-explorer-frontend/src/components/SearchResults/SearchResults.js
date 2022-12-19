import React, { useContext, useState} from 'react';
import { useLocation} from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import searchItems from '../../utils/searchItem';

import NewsCard from '../NewsCard/NewsCard';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';


function SearchResults({ isLoggedIn, isBookmarked,  onArticleClick, isSubmitPressed, isSearching, setIsSearching, 
  filteredResults, setFilteredResults
}) { //isSearchInput, isFilteredResults
  // const [filteredResults, setFilteredResults] = useState([]);

  console.log("isSubmitPressed click ==>", isSubmitPressed); 
  console.log("filteredResults =>", filteredResults);
  const location = useLocation();
  const isSavedArticles = location.pathname === '/saved-articles';


  // const newSearch = searchItems();
  // setFilteredResults([...newSearch])
  
  

  return (
    <> { isSubmitPressed ?
(      <section className="searchResults">
      <div className="searchResults__content">
        <div className="searchResults__content-newscards">
          { !isSavedArticles &&  <h2 className="searchResults__content-title">Search Results</h2> }
          { isSearching ? <Preloader/> : ''}
          
          { isSubmitPressed > 1 ?
            (filteredResults.map((card) => { //isFilteredResults.map
              console.log(filteredResults)
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
            ) : ( !isSavedArticles && isSubmitPressed && <NotFound />)
          }
          { !isSavedArticles && !filteredResults && <button type="button" className="searchResults__content-showbtn">Show More</button> }     
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