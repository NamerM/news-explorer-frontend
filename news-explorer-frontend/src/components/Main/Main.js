import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'


function Main({
}) {

  const currentUser = React.useContext(CurrentUserContext)

  return(
    <SearchForm />
    // <main className="main">
    //   <section className="main_search-results">
    //   </section>
    //   <section>
    //     <div>
    //       <img className="main_about"></img>
    //     </div>
    //   </section>
    // </main>
  );
}

export default Main;
