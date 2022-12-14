import React, {useState} from 'react';
import './SearchForm.css';

function SearchForm(handleSubmit) {
  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('');
  const [cards, setCards] = useState([]);

  function handleChange(e) {
    const { value } = e.target;
    setSearch(value);
  }

  //search function

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
            value={search || ''}
            onChange={handleChange}
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