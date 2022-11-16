import React, { useState } from "react";
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import NotFound from "../NotFound/NotFound";
import SavedArticles from "../SavedArticles/SavedArticles";
//import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Main() {
 //const currentUser = React.useContext(CurrentUserContext)
 const [isLoggedIn, setIsLoggedIn] = useState(true); //toggle true or false to see
  return(
    <>
      <main className="main">
        {isLoggedIn ?
         ( <SavedArticles /> ) :
         ( <div></div> )
        }
        <SearchResults />
        <Preloader />
        <NotFound />
        <About />
      </main>
    </>



  );
}

export default Main;
