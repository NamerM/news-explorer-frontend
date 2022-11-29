import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom';
import react, { useState, useEffect} from 'react';
import './App.css';
import '../../index';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SignInPopup from '../Signin/Signin';
import SignUpPopup from '../SignUp/Signup';
import RegisterationSuccess from '../Success/Success';
import PopupMobile from "../PopupMobile/PopupMobile";

function App( onSignInPopupClick) {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);  // isLoggedIn & isSignUpPopupOpen
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isMobileClicked, setIsMobileClicked] = useState(false);


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
  }

  function handlesignOut() {
    setIsLoggedIn(false);
  }

  function handleMobileClick () {
    setIsMobileClicked(true);
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
        />
        <SignUpPopup
          isOpen={isSignUpPopupOpen}
          onClose={closeAllPopups}
          onSignupUser={handleRegisterSuccess}
        />
        <RegisterationSuccess
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
        />
        <PopupMobile
          onMobilePopupClick={handleMobileClick}
          onClose={closeAllPopups}
        />
        <Header
          onSignInPopupClick={handleSignInClick}
          onSignUpPopupClick={handleSignUpClick}
          onSignOut={handlesignOut}
          />
        <Main   />
        <Footer />

    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
