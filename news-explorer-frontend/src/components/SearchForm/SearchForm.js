import React, {useState} from 'react';
import './SearchForm.css';
import {data} from '../../utils/data.js';

function SearchForm({handleSubmit, onSubmit}) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState('');
  const [searchFormData, setSearchFormData] = useState({});
  const [searchFomInput, setSearchFormInput] = useState({ keyword: '', title: '', text: '', source: '' })


  function searchItems(searchValue) {
    setSearchInput(searchValue)
    // console.log(searchValue);
    if(searchInput !== '') {
      const searchResult = data.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      })
      console.log(searchResult);
      setFilteredResults(searchResult);
    } 
    else {
      console.log("nothing found") // NotFound component activate gerekli
    }
    console.log(filteredResults);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { keyword, title, text, source
    } = searchFomInput
   setSearchFormInput({keyword, title, text, source});
   console.log(keyword, title, text, source);
   console.log(searchFomInput)
  }


  function handleChange(e) {
    const input = e.target;
    const { name, value } = e.target;
    setSearchFormData({ ...searchFomInput, [name]: value });
    console.log(searchFormData)
  }


  return(
    <section className="search-form__content">
    <div className="search-form__content-top">
      <h1 className="search-form__content-title">What's going on in the world?</h1>
      <p className="search-form__content-subtitle">Find the latest news on any topic and save them in your personal account.</p>
      <form className="search-form__content-form" onSubmit={handleSubmit}>
        <label className="search-form__content-form-field">
          <input 
            className="search-form__content-form-input" 
            type="text" 
            placeholder="Enter Topic"  
            onChange={(e) => searchItems(e.target.value) && handleChange}
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
