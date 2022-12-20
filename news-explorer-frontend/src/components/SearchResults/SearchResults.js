import React, { useContext, useState} from 'react';
import { useLocation} from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';


function SearchResults({ card, isLoggedIn, onArticleClick, isSearching, setIsSearching, 
  filteredResults, savedArticle, searchCounter,
  }) 
{
  const [renderedCards, setRenderedCards] = useState([]);
  const [cards, setCards] = useState([]);
  const displayedCards = 3;

  const clickHandle = () => {
    const addThreeMore = cards.slice(0, renderedCards.length + displayedCards + 1 )   //cards.slice
    setRenderedCards([...addThreeMore ])
  }

  const location = useLocation();
  const isSavedArticles = location.pathname === '/saved-articles';
  console.log("searchCounter value ==>", searchCounter) 


  return (
    <> 
    { filteredResults.length > 0 ?
    ( <section className="searchResults">
      <div className="searchResults__content">
        <div className="searchResults__content-newscards">
          { !isSavedArticles &&  <h2 className="searchResults__content-title">Search Results</h2> }
          { isSearching ? <Preloader/> : ''}
          <NewsCardList 
            filteredResults={filteredResults}
            setIsSearching={setIsSearching}
            isLoggedIn={isLoggedIn}
            savedArticle={savedArticle}
            card={card}
            iconType={isSavedArticles ? 'bin' : 'bookmark'}
            onArticleClick={onArticleClick}
          />
          {  <button type="button"className="searchResults__content-showbtn"
           onClick={clickHandle}>Show More</button> }     
        </div>
      </div>
    </section>) 
    : (    ''
   // ( !filteredResults&& !isSavedArticles &&   <NotFound /> ) // searchCounter > 0
    )
    } 

    </>

  )
}

export default SearchResults;



  // const [renderedCards, setRenderedCards] = useState([]);
  // const [cards, setCards] = useState([]);
  // const displayedCards = 3;

  // const clickHandle = () => {
  //   const addThreeMore = data.slice(0, renderedCards.length + displayedCards + 1 )   //cards.slice
  //   setRenderedCards([...addThreeMore ])
  // }
          {/* { !searchResults? (<NotFound />): ""} */}