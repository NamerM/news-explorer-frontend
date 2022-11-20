import { CurrentUserContext } from '../../contexts/CurrentUserContext';
//import { Switch, useHistory, Route } from 'react-router-dom';
import react, {useState} from 'react';
import './App.css';
import '../../index';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popups from '../Popups/Popups';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Popups />
        <Header />
        <Main />
        <Footer />

    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
