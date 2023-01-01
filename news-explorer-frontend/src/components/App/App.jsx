import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import react, { useState, useEffect} from 'react';
import { useLocation, useNavigate, Routes, Route, Router, Navigate } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedArticles from '../SavedArticles/SavedArticles';


function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [savedArticle, setSavedArticle] = useState ([]);
  const [cards, setCards] = useState([]);
  const [userData, setUserData] = useState({ name: 'name'});
  const [isCheckingToken, setIsCheckingToken] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
          // if(res._id) {
          //   navigate('/signin')
          // }
          console.log(res._id)
        })
        .then(() => {
          setIsSignInPopupOpen(false)
          setIsSignUpPopupOpen(false)
          setIsRegisterPopupOpen(true)
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
        .then(() => closeAllPopups())
        .catch((err) => {
          console.log("signin fail=>", err);
        })
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

    
    useEffect(() => {
      const token = localStorage.getItem('jwt')
      //console.log("user", currentUser._id)
      if( token && currentUser._id) {
        api.getArticles()
          .then(res => {
            const savedArticlesFiltered = res.data.filter(article => article.owner == currentUser._id)
            setSavedArticle(savedArticlesFiltered)
          })
          .catch((err) => {
            console.log("err", err)
          })
      }
    }, [currentUser])

    //MainApi getUserInfo getArticles
    useEffect(() => {
      const token = localStorage.getItem('jwt')
      if(token) {
        api.getUserInfo(token)
          .then( res => {
            setCurrentUser(res.data);
          })
          .catch((err) => console.log("getUserInfo=>", err));
      } 
    }, [isLoggedIn])

    
    function bookmarkCard({ _id , keyword, title, text, source, date, publishedAt, link, url, description, image, urlToImage, }) {
      //console.log("currentUser._id", currentUser._id);
      api
        .saveArticle({ _id, keyword: source.name , source: source.name, title, text: description, date: publishedAt, link: url, image: urlToImage,  })
          .then((card) => {  
            const { data } = card;
            console.log("card >>>", card.data.title)
            console.log("data >>>", data.title)
            const count =  [savedArticle.length];
            
            // if the data._id saved is in savedArticles it should not be saved to prevent multiple saves - 
            if(data.title === savedArticle[count.length ] .title) {
              setSavedArticle([...savedArticle, data]);
              console.log("savedarticle count >>", count)
              console.log("savedarticle" , savedArticle)
              console.log("saving... title", savedArticle[count.length].title)
              return;
            } else if(savedArticle[count.length+1].title === data.title)  { //if(savedArticle[count.length].title === data.title) 
              console.log("removing title", data.title)
              setSavedArticle([]);
              return;
              }
          })
          .catch((err) => console.log("bookmark Error =>", err));
      }

      // useEffect(() => {
      //   console.log("data article", data)
      // }, [data])

    // useEffect(() =>  {
    //   console.log("savedArticle =>" , savedArticle)
    // }, [savedArticle])

     //remove bookmark
    function deleteCardFromSaved(card) {
      api
        .deleteArticle(card._id)
          .then((res) => {
            console.log("deleted card props.id ...>", res._id )
            const newSavedArticles = savedArticle.filter((card) => card._id !== res._id);
          setSavedArticle(newSavedArticles);
          console.log("savedArticles==>", savedArticle);
        })
        .catch((err) => console.log("delete function error =>", err))
    }

    function searchItems(searchValue) {
      if(searchValue !== '') {  
        setIsLoading(true);
    
          newsApi.getNews(searchValue)
            .then( (res) => {   
              console.log("res--->", res)
              let searchResult = res.articles.filter((item) => {
                return Object.values(item)
                  .join('')
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
              })
              setFilteredResults(searchResult)
            })
            .catch((err) => {
              console.log("err", err)
            })
            .finally(() => {
              setIsLoading(false);
            })          
      } else { 
        console.log("nothing found....");
        setFilteredResults('')
      }
    }

    // useEffect(() => {
    //   searchItems(keyword);
    // }, [keyword]);


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

  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/signin') {
      setIsSignInPopupOpen(true);
      setIsSignUpPopupOpen(false);
    } else if (location.pathname === '/signup') {
      setIsSignInPopupOpen(false);
      setIsSignUpPopupOpen(true);
    } 
  }, [location]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="app">
          <SignInPopup
            isLoggedIn={isLoggedIn}
            isOpen={isSignInPopupOpen}
            onClose={closeAllPopups}
            onLoginUser={closeAllPopups}
            onLogin={onLogin}
          />
          <SignUpPopup
            isLoggedIn={isLoggedIn}
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
            searchItems={searchItems}
            onSearchSubmit={handleSubmitClicked}
            />

          <Routes>
            <Route path='/' element={
              <Main
                keyword={keyword}
                setKeyword={setKeyword}
                cards={cards}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                isLoggedIn={isLoggedIn}
                onArticleClick={bookmarkCard}
                onRemoveArticleClick={deleteCardFromSaved}
                onSearchSubmit={handleSubmitClicked}
                filteredResults={filteredResults}
                savedArticle={savedArticle}  />} >
            </Route>
            <Route path='/articles' element={
                <ProtectedRoute 
                  isLoggedIn={isLoggedIn}  

                > 
                  <SavedArticles 
                    savedArticle={savedArticle} 
                    cards={cards}
                    isLoggedIn={isLoggedIn}
                    onArticleClick={bookmarkCard}
                    onRemoveArticleClick={deleteCardFromSaved}
                  />
                </ProtectedRoute> } 
            />
            
            <Route path="*" element={<Navigate to ="/"/>} />
          </Routes>
          <Footer />
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
