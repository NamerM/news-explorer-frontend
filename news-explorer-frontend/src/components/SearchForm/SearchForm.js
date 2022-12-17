import React, {useState} from 'react';
import './SearchForm.css';
import {data} from '../../utils/data.js';
// import { SearchResultContext } from '../../contexts/SearchResultContext';


function SearchForm(handleSubmit, onSubmit, searchOutput, isSubmitPressed, onHandleSearchSubmit) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState('');
  // const [searchFormData, setSearchFormData] = useState({});
  // const [searchFomInput, setSearchFormInput] = useState({ keyword: '', title: '', text: '', source: '' })


  function searchItems(searchValue) {
    setSearchInput(searchValue)
    // console.log(searchValue);
    if(searchInput !== '') {
      let searchResult = data.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      })
      setFilteredResults(searchResult);
  
      console.log("filteredResults =>" , filteredResults);
    } 
    else { console.log("nothing found....")}
  }

  function handleSearchSubmit(e) {
    e.preventDefault(e);
    console.log("submit button pressed, search result:"); 
    searchItems(e); 
    searchOutput = filteredResults;
    console.log("searchcontext =>", searchOutput);
    console.log("---------------------------------------")
    handleChange(e);
  }

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

 
  return(
    <section className="search-form__content">
    <div className="search-form__content-top">
      <h1 className="search-form__content-title">What's going on in the world?</h1>
      <p className="search-form__content-subtitle">Find the latest news on any topic and save them in your personal account.</p>
      <form className="search-form__content-form" onSubmit={handleSearchSubmit} >
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
          <button type="submit" className="search-form__content-form_submit">
          Search
          </button>
        </label>
      </form>
    </div>

  </section>
  )

}

export default SearchForm;
