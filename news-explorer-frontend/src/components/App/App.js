import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import react, { useState, useEffect} from 'react';
import { useLocation, useNavigate, Switch, Route } from 'react-router-dom';
import './App.css';
import '../../index';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Navigation from '../Navigation/Navigation';
import SignInPopup from '../Signin/Signin';
import SignUpPopup from '../SignUp/Signup';
import RegisterationSuccess from '../Success/Success';
import MobileSignIn from '../MobileSignIn/MobileSignIn';
import MobileMenu from '../MobileMenu/MobileMenu';
import api from '../../utils/MainApi';
import { data } from '../../utils/data';
import { SearchResultContext } from '../../contexts/SearchResultContext';
import SearchResults from '../SearchResults/SearchResults';


function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [searchOutput, setSearchOutput] = useState({}); // contextedn almam lazım
  const [isSubmitPressed, setIsSubmitPressed] = useState(false);
  const [savedArticle, isSavedArticle] = useState ({ name: '', link: ''});
  const [cards, setCards] = useState([]);
  const [userData, setUserData] = useState({ name: 'name'});
  const [isCheckingToken, setIsCheckingToken] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);  // isLoggedIn & isSignUpPopupOpen
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isMobileClicked, setIsMobileClicked] = useState(false);
  const [isMobileMenuClicked, setIsMobileMenuClicked] = useState(false);
  const [isSearchInput, setIsSearchInput ] = useState({});
  const [isFilteredResults, setIsFilteredResults] = useState({});

  
    //MainApi signup
    const onRegisterUser = ({ name, email, password }) => {
      api.signup({name, email, password})
        .then((res) => {
          if(res._id) {
            navigate('/signin')
          }
          console.log(res._id)
        })
        .catch((err) => {
          console.log("signup err =>", `Error: ${err.status}`);
        })
    }
    // MainApi Signin
    const onLogin = ({  email, password }) => {
      api.signin({email, password})
        .then((res) => {
          if(res.token) {
            setIsLoggedIn(true);
            setUserData(res.name); // check if I need to use this later on
            localStorage.setItem('jwt', res.token);
            navigate('/');
          } else {
            console.log("signin fail")
          }
        })
        .catch((err) => {
          console.log("signin fail=>", err);
        })
        .finally(() => closeAllPopups())
    }

    //MainApi checkToken
    useEffect(() => {
      const token = localStorage.getItem('jwt')
      if(token) {
        api.checkToken(token)
        .then((res) => {
          if(res.data._id) {
            setIsLoggedIn(true);
            setUserData({ email: res.data.email})
            navigate('/')
          } else {
            navigate('/signin');
            localStorage.removeItem(token);
          }
        })
        .catch((err) => {
          console.log("err =>", err)
          navigate('/signin')
        })
        .finally(() => setIsCheckingToken(false))
      }
    }, [])

    //MainApi getUserInfo getArticles
    useEffect(() => {
      const token = localStorage.getItem('jwt')
      if(token) {
        api.getUserInfo(token)
          .then( res => {
            setCurrentUser(res.data);
          })
          .catch((err) => console.log(err));
        api.getArticles(token)
          .then(res => {
            setCards(res.data);
          })
          .catch((err) => console.log(err));
      }
    }, [])

    //signout
    function handlesignOut() {
      setIsLoggedIn(false);
      localStorage.removeItem('jwt');
      navigate('/signin');
    }

    //bookmarking newscard
    function bookmarkCard(card) {
      console.log('bookmarkCard function!!!'); 
      console.log(card)
      console.log(card.keyword)
      const isSaved = card.article.some((user) => user === currentUser._id); //likes yerine schemadan id koydum//
      console.log( isSaved);
      api
        .saveArticle(card._id, isSaved)
        .then((newCard) => {
          setCards((state) => // defined above articles/setArticles
            state.map(currentCard => {
              return currentCard._id === card._id
              ? newCard.data
              : currentCard;
            })
          );
        })
        .then()
      .catch((err) => console.log("bookmark Error =>", err));
    }
     //remove bookmark
     function deleteCardFromSaved(card) {
      console.log('deleteCardFromSaved function!!!')

      // api.deleteCard(card._id)
      //   .then((res) => {
      //     const state = cards.filter(
      //       (stateCards) => stateCards._id !== card._id
      //     );
      //     setCards(state);
      //     closeAllPopups();
      //   })
      //   .catch((err) => console.log(err))
    }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };
    const closeByModal = (e) => {
      if (e.target.classList.contains("popup_open")) {
        closeAllPopups();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    document.addEventListener('mousedown', closeByModal);

    return () => {
      document.removeEventListener('keydown', closeByEscape);
      document.removeEventListener('click', closeByModal);
    }
  }, []);

  function handleSignInClick() {
    closeAllPopups();
    setIsSignInPopupOpen(true);
  }

  function handleSignUpClick() {
    setIsSignUpPopupOpen(true);
  }

  function handleRegisterSuccess() {
    closeAllPopups();
    setIsRegisterPopupOpen(true);
  }

  function closeAllPopups() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsMobileClicked(false);
    setIsMobileMenuClicked(false);
  }

  // function handlesignOut() {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem('jwt');
  //   closeAllPopups();
  //   navigate('/');
  // }

  function handleMobileClick () {
   !isLoggedIn && setIsMobileClicked(true);
  }

  function handleMobileMenuClick() {
    isLoggedIn && setIsMobileMenuClicked(true);
  }

  function handleSubmitClicked() {
    setIsSubmitPressed(true);
  }

  let location = useLocation();

  useEffect(() => {
    if(location.pathname === '/signin') {
      setIsSignInPopupOpen(true);
      setIsSignUpPopupOpen(false);
    }
    if(location.pathname === '/signup') {
      setIsSignInPopupOpen(false);
      setIsSignUpPopupOpen(true);
    }
  }, [location]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SearchResultContext.Provider 
        value={{
          searchOutput: searchOutput,
          isSubmitPressed: isSubmitPressed
        
      }}>
        <div className="app">
          <SignInPopup
            isOpen={isSignInPopupOpen}
            onClose={closeAllPopups}
            onLoginUser={closeAllPopups}
            onLogin={onLogin}
          />
          <SignUpPopup
            isOpen={isSignUpPopupOpen}
            onClose={closeAllPopups}
            onSignupUser={handleRegisterSuccess}
            onRegisterUser={onRegisterUser}
          />
          <RegisterationSuccess
            isOpen={isRegisterPopupOpen}
            onClose={closeAllPopups}
          />
          <MobileSignIn
            isOpen={isMobileClicked}
            onClose={closeAllPopups}
            onLogin={onLogin}
          />
          <MobileMenu
            isOpen={isMobileMenuClicked}
            onClose={closeAllPopups}
            onSignOut={handlesignOut}
          />
          <Header
            isLoggedIn={isLoggedIn}
            onSignInPopupClick={handleSignInClick}
            onSignUpPopupClick={handleSignUpClick}
            onSignOut={handlesignOut}
            onMobilePopupClick={handleMobileClick}
            onMobilePopupMenu={handleMobileMenuClick}
            searchSubmitClicked={handleSubmitClicked}
            isSubmitPressed={isSubmitPressed}
            />
          <Main
            isLoggedIn={isLoggedIn}
            onArticleClick={bookmarkCard}
            onSavedArticleClick={deleteCardFromSaved}
            onSearchArticleClicked={bookmarkCard}
            searchSubmitClicked={handleSubmitClicked}
            isSubmitPressed={isSubmitPressed}
            // isSearchInput={isSearchInput}
            // isFilteredResults={isFilteredResults}
          />
          <Footer />
        </div>
      </SearchResultContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
