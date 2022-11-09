import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header() {

  return (
  <header className="header">
    <div className="header__content">
        <Navigation />
        <SearchForm />
    </div>
  </header>
  )
}

export default Header;
