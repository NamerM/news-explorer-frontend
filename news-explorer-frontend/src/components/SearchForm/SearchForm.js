import React, { useRef, useEffect} from 'react';

function SearchForm({}) {

  return(
    <section className="searchForm__content">
    <div className="searchForm__content-top">
      <h1 className="searchForm__title">What's going on in the world?</h1>
      <p className="searchForm__subtitle">Find the latest news on any topic and save them in your personal account.</p>
    </div>
    <form className="searchForm__form">
    <label className="searchForm__form-field">
      <input className="" type="url" placeholder="Enter Topic"  id="search-input" name="search-input"  required/>
      <button type="submit" className="">
        Search
      </button>
    </label>
  </form>

  </section>
  )

}

export default SearchForm;
