import React, { useEffect, useState }  from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
//import { Switch, useHistory, Route } from 'react-router-dom';
import './App.css';
import '../../index';
import Main from '../Main/Main';


function App() {
  const [currentUser, setCurrentUser] = useState({});



  return (
    <CurrentUserContext.Provider value={currentUser}>
        <Main/>
    </CurrentUserContext.Provider>
  );
}

export default App;
