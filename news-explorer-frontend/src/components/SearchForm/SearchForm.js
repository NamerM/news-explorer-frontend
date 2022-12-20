import React, {useState} from 'react';
import './SearchForm.css';
import {data} from '../../utils/data.js';

function SearchForm({handleSubmitClicked, setKeyword, searchCounter }) {
 const [searchInput, setSearchInput] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault(e);
    setKeyword(searchInput);
  }

  function handleChange(e) {
    setSearchInput(e.target.value);
  }
  // function counter(e) {
  //   let i = 0;
  //   searchCounter(i++);
  // }

  return(
    <section className="search-form__content">
    <div className="search-form__content-top">
      <h1 className="search-form__content-title">What's going on in the world?</h1>
      <p className="search-form__content-subtitle">Find the latest news on any topic and save them in your personal account.</p>
      <form className="search-form__content-form"  onSubmit={handleSearchSubmit} >
        <label className="search-form__content-form-field">
          <input 
            className="search-form__content-form-input" 
            type="text" 
            placeholder="Enter Search Topic"  
            onChange={handleChange} // onChange={(e) => searchItems(e.target.value) && handleChange(e)}
            value={searchInput || ''}
            id="search-input" name="search-input"
            required
          />
          <button type="submit" className="search-form__content-form_submit"  onClick={handleSubmitClicked} >
          Search
          </button>
        </label>
      </form>
    </div>

  </section>
  )
}

export default SearchForm;
