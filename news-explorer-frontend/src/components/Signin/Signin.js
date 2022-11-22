import React, { useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignInPopup({ isOpen, onClose, isLoading}){
  const currentUser = React.useContext(CurrentUserContext)

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    // const userData = {
    //   email,
    //   password,
    // }
    // onLogin(userData);  // app.js function name
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

return(
  <PopupWithForm
    title="Sign In"
    name="signin"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    isLoading={isLoading}
    buttonText= "Sign In"
  >
    <label className="popup__formfield">
      <input className="popup__input popup__input_type_name" value={email || ''} onChange={handleEmailChange} type="text" placeholder="Email" minLength="2" maxLength="40" required/>
      <span id="name-error" className="popup__input-error"></span>
    </label>
    <label className="popup__formfield">
      <input className="popup__input popup__input_type_profession" value={password || ''} onChange={handlePasswordChange} type="text" placeholder="Password" minLength="2" maxLength="200" required/>
      <span id="profession-error" className="popup__input-error"> </span>
    </label>
  </PopupWithForm>

  )
}

export default SignInPopup;
