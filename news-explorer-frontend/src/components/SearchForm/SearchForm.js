import React from 'react';
import './SearchForm.css';

function SearchForm({}) {

  return(
    <section className="search-form__content">
    <div className="search-form__content-top">
      <h1 className="search-form__title">What's going on in the world?</h1>
      <p className="search-form__subtitle">Find the latest news on any topic and save them in your personal account.</p>
      <form className="search-form__form">
        <label className="search-form__form-field">
          <input className="search-form__form-input" type="text" placeholder="Enter Topic"  id="search-input" name="search-input"  required/>
          <button type="submit" className="search-form__form-submit">
          Search
          </button>
        </label>
      </form>
    </div>

  </section>
  )

}

export default SearchForm;
