import React, { useState } from 'react';
import '../PopupWithForm/PopupWithForm.css';
import {Link, useLocation} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignUpPopup({ isOpen, onClose, isLoading, onSignupUser}){
  const currentUser = React.useContext(CurrentUserContext)

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [username, setUsername] = useState('');

  const location = useLocation();
  const isSignedUp = location.pathname === '/success'

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password, username);
    const userData = {
      email,
      password,
     username,
    }
    onSignupUser(userData);  // app.js function name
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }



return(
  <PopupWithForm
    title="Sign Up"
    name="signup"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    isLoading={isLoading}
    buttonText= "Sign Up"
  >
    <label className="popup__formfield">
      <p className="popup__formfield__labeltype">Email</p>
      <input className="popup__input popup__input_type_name" value={email || ''} onChange={handleEmailChange} type="email" placeholder="Email" minLength="2" maxLength="40" required/>
      <span id="name-error" className="popup__input-error"></span> {/* popup__input-error_open for error msg attributes*/}
    </label>
    <label className="popup__formfield">
    <p className="popup__formfield__labeltype">Password</p>
      <input className="popup__input popup__input_type_profession" value={password || ''} onChange={handlePasswordChange} type="password" placeholder="Password" minLength="2" maxLength="200" required/>
      <span id="profession-error" className="popup__input-error"> </span>
    </label>
    <label className="popup__formfield">
    <p className="popup__formfield__labeltype">Username</p>
      <input className="popup__input popup__input_type_username" value={username || ''} onChange={handleUsernameChange} type="text" placeholder="Username" minLength="2" maxLength="200" required/>
      <span id="username-error" className="popup__input-error"> </span>
    </label>
  </PopupWithForm>

  )
}

export default SignUpPopup;
