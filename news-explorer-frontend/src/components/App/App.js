import { CurrentUserContext } from '../../contexts/CurrentUserContext';
//import { Switch, useHistory, Route } from 'react-router-dom';
import react, { useState, useEffect} from 'react';
import './App.css';
import '../../index';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SignInPopup from '../Signin/Signin';
import SignUpPopup from '../SignUp/Signup';


function App( onSignInPopupClick) {
  const [currentUser, setCurrentUser] = useState({});
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);  // isLoggedIn & isSignUpPopupOpen

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
    setIsSignInPopupOpen(true);
  }

  function handleSignUpClick() {
    setIsSignUpPopupOpen(true);
  }

  function closeAllPopups() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
  }

  function handlesignOut() {

  }

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
          onSignupUser={closeAllPopups}
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
