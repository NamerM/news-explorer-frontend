import React from 'react';

function SearchForm({}) {

  return(
    <section className="searchForm__content">
    <div className="searchForm__content-top">
      <h1 className="searchForm__title">What's going on in the world?</h1>
      <p className="searchForm__subtitle">Find the latest news on any topic and save them in your personal account.</p>
      <form className="searchForm__form">
        <label className="searchForm__form-field">
          <input className="searchForm__form-input" type="text" placeholder="Enter Topic"  id="search-input" name="search-input"  required/>
          <button type="submit" className="searchForm__form-submit">
          Search
          </button>
        </label>
      </form>
    </div>

  </section>
  )

}

export default SearchForm;
