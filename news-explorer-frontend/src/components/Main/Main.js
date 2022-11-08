import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'


function Main({
}) {

  const currentUser = React.useContext(CurrentUserContext)

  return(
    <main className="main">

    </main>
  );
}

export default Main;
