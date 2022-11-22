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


function App( onSignInPopupClick) {
  const [currentUser, setCurrentUser] = useState({});
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);

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
    document.addEventListener('click', closeByModal);

    return () => {
      document.removeEventListener('keydown', closeByEscape);
      document.removeEventListener('click', closeByModal);
    }
  }, []);

  function handleSignInClick() {
    setIsSignInPopupOpen(true);
  }

  function handleSignOutClick() {
    setIsSignInPopupOpen(false);
  }

  function closeAllPopups() {
    setIsSignInPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <SignInPopup
          isOpen={isSignInPopupOpen}
          onClose={closeAllPopups}
        />
        <Header
          onSignInPopupClick={handleSignInClick}
          onSignOutPopupClick={handleSignOutClick}
          />
        <Main   />
        <Footer />

    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
