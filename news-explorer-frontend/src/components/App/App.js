//import { CurrentUserContext } from '../../contexts/CurrentUserContext';
//import { Switch, useHistory, Route } from 'react-router-dom';
import './App.css';
import '../../index';
import Main from '../Main/Main';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';



function App() {
  //const [currentUser, setCurrentUser] = useState({});



  return (
    <div>
      <Header />
      <Main />

    </div>

  );
}

export default App;
