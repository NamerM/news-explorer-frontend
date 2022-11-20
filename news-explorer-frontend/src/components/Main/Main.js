import React, { useState } from "react";
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import NotFound from "../NotFound/NotFound";
import SavedArticles from "../SavedArticles/SavedArticles";
//import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Main( onSignInClick) {
 //const currentUser = React.useContext(CurrentUserContext)
 const [isLoggedIn, setIsLoggedIn] = useState(true); //toggle true or false to see

  return(
    <>
      <main className="main">
        {isLoggedIn ?
         ( <SavedArticles onClick={onSignInClick}  /> ) :
         ( <div></div> )
        }
        <SearchResults />
        {/* <Preloader />
        <NotFound />  uncomment to see the components*/ }
        <About />
      </main>
    </>



  );
}

export default Main;
