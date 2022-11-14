import React from "react";
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import NotFound from "../NotFound/NotFound";
//import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Main() {

  //const currentUser = React.useContext(CurrentUserContext)

  return(
    <>
      <main className="main">
        <SearchResults />
        <Preloader />
        <NotFound />
        <About />
      </main>
    </>



  );
}

export default Main;
