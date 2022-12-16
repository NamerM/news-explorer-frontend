import React, {useState} from 'react';
import './SearchForm.css';
import {data} from '../../utils/data.js';

function SearchForm({handleSubmit, onSubmit}) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState('');
  const [searchFormData, setSearchFormData] = useState({});


  function searchItems(searchValue) {
    setSearchInput(searchValue)
    console.log(searchValue);
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

  function handleChange(e) {
    const { value } = e.target;
    setSearchInput(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(filteredResults);
    searchInput = searchFormData

  }


  // const searchData = () => {data.map((card) =>  {
    
  //   })
  //  }
  

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
            onChange={(e) => searchItems(e.target.value)}
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

  // const [isLoading, setIsLoading] = useState(false);  //Preloader ile bağla
  // const [notFound, setNotFound] = useState(false);

  // __setIsLoading = () => {
  //   setIsLoading(true);
  //   setNotFound(false);
  //   setCards([]);
  // };

  // __setNotFound = () => {
  //   setIsLoading(false);
  //   setNotFound(true);
  //   setCards([]);
  // }