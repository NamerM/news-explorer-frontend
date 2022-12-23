import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import react, { useState, useEffect} from 'react';
import { useLocation, useNavigate, Switch, Route } from 'react-router-dom';
import './App.css';
import '../../index';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SignInPopup from '../Signin/Signin';
import SignUpPopup from '../SignUp/Signup';
import RegisterationSuccess from '../Success/Success';
import MobileSignIn from '../MobileSignIn/MobileSignIn';
import MobileMenu from '../MobileMenu/MobileMenu';
import api from '../../utils/MainApi';
import newsApi from '../../utils/NewsApi';
import { data } from '../../utils/data';


function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [savedArticle, setSavedArticle] = useState ([]);
  const [cards, setCards] = useState([]);
  const [userData, setUserData] = useState({ name: 'name'});
  const [isCheckingToken, setIsCheckingToken] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);  // isLoggedIn & isSignUpPopupOpen
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isMobileClicked, setIsMobileClicked] = useState(false);
  const [isMobileMenuClicked, setIsMobileMenuClicked] = useState(false); 
  const [filteredResults, setFilteredResults] = useState([]);
  const [keyword, setKeyword] = useState('');

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

    //signout
    function handlesignOut() {
      setIsLoggedIn(false);
      localStorage.removeItem('jwt');
      navigate('/');
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
          .catch((err) => console.log("getUserInfo=>", err));
        api.getArticles(token)
          .then(res => {
            setCards(res.data);
          })
          .catch((err) => console.log("getArticles=>" , err));
        newsApi.getNews()
          .then(res=> {
            setCards(res.data);
            console.log(res);
          })
          .catch((err) => console.log("NewsApi =>", err));
      } 
    }, [])
    
    function bookmarkCard({ keyword, title, text, source, date, link, image}) {
      const card = { keyword, title, text, source, date, link,image };
      const currentCard = card;
      console.log("currentUser._id", currentUser._id);

      api
        .saveArticle({ keyword, title, text, source, date, link,image})
          .then((card) => {  
            // console.log("func", [...savedArticle, card]);    
            setSavedArticle([...savedArticle, card]);
          })
          .catch((err) => console.log("bookmark Error =>", err));
    }

    useEffect(() =>  {
      console.log("savedArticle =>" , savedArticle)
    }, [savedArticle])


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

    function searchItems(searchValue) {
      if(searchValue !== '') {  // console.log(searchValue);
        setIsLoading(true);

        setTimeout(() => {
          let searchResult = data.filter((item) => {
            return Object.values(item)
              .join('')
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          })
          //console.log(searchResult);
          setFilteredResults(searchResult);
          setIsLoading(false);
        }, 750)
      } else { 
        console.log("nothing found....");
        setFilteredResults('')
      }
    }

    useEffect(() => {
      searchItems(keyword);
    }, [keyword]);


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

  function handleMobileClick () {
   !isLoggedIn && setIsMobileClicked(true);
  }

  function handleMobileMenuClick() {
    isLoggedIn && setIsMobileMenuClicked(true);
  }

  function handleSubmitClicked(){
    setIsLoading(true);
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
            setKeyword={setKeyword}
            onSearchSubmit={handleSubmitClicked}
            />
          <Main
            cards={cards}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isLoggedIn={isLoggedIn}
            onArticleClick={bookmarkCard}
            onSavedArticleClick={deleteCardFromSaved}
            onSearchSubmit={handleSubmitClicked}
            filteredResults={filteredResults}
            savedArticle={savedArticle}
          />
          <Footer />
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
