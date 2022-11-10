//import { CurrentUserContext } from '../../contexts/CurrentUserContext';
//import { Switch, useHistory, Route } from 'react-router-dom';
import './App.css';
import '../../index';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  //const [currentUser, setCurrentUser] = useState({});



  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />

    </div>

  );
}

export default App;
