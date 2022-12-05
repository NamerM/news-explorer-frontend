import React, { useState } from "react";
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import NotFound from "../NotFound/NotFound";
import SavedArticles from "../SavedArticles/SavedArticles";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Main({
  isLoggedIn
}) {
 const currentUser = React.useContext(CurrentUserContext)

  return(
    <>
      <main className="main">
        {isLoggedIn
          ? <SavedArticles
              isLoggedIn={isLoggedIn}
            />
          : ''
        }
        <SearchResults
          isLoggedIn={isLoggedIn}
         />
        {/* <Preloader />
        <NotFound />  uncomment to see the components*/ }
        <About />
      </main>
    </>



  );
}

export default Main;
