import React from "react";
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
//import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Main() {

  //const currentUser = React.useContext(CurrentUserContext)

  return(
    <>
      <main className="main">
        <SearchResults />
        <About />
      </main>
    </>



  );
}

export default Main;
