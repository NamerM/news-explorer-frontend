import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import NotFound from "../NotFound/NotFound";
import NewsCard from '../NewsCard/NewsCard';
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedArticles from "../SavedArticles/SavedArticles";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Main({
  isLoggedIn,
  onSavedArticleClick,
  onArticleClick,
  cards,
  card,
  filteredResults,
  setIsSearching,
  savedArticle,
  searchCounter,
  onClick,
}) {
 const currentUser = React.useContext(CurrentUserContext);

 const location = useLocation();
 const isSavedArticles = location.pathname === '/saved-articles';


  return(
    <>
      <main className="main">
        { isSavedArticles &&
        <>
        <SavedArticles isLoggedIn={isLoggedIn} /> 
        {/* // NewsCardList with savedArticle/bookmark status here? */}
        {/* <SavedCards
        isLoggedIn={isLoggedIn}
        savedArticle={savedArticle}
        card={card}
        iconType={isSavedArticles ? 'bin' : 'bookmark'}
        onSavedArticleClick={onSavedArticleClick}
        /> */}
      </>

        }      

        {!isSavedArticles && <SearchResults
          isLoggedIn={isLoggedIn}
          // cards={cards}
          filteredResults={filteredResults}
          setIsSearching={setIsSearching}
          onArticleClick={onArticleClick}
          searchCounter={searchCounter} 
          onClick={onClick}
         /> 
        } 
            // {/* <Preloader />}
            // <NotFound />  uncomment to see the components*/ }
        { !isSavedArticles && <About /> } 
      
      </main>
    </>



  );
}

export default Main;
