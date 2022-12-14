import React, { useState, useEffect } from 'react';
import '../PopupWithForm/PopupWithForm.css';
import {Link, useLocation} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignUpPopup({ isOpen, onClose, isLoading, onRegisterUser}){
  const currentUser = React.useContext(CurrentUserContext)

  // const [email, setEmail] = useState('');
  // const [password , setPassword] = useState('');
  // const [username, setUsername] = useState('');
  const [formData, setFormData ] = React.useState({});
  const [formErrors, setFormErrors] = React.useState({ email: false, password: false, name: false });
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const location = useLocation();
  const isSignedUp = location.pathname === '/success'

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const {
      email,
      password,
      name,
    } = formData
    onRegisterUser({email, password, name});  // app.js function name

  }



  function handleChange(e) {
    const input = e.target;
    const { name, value } = e.target;
    const isValid = input.validity.valid;

    setFormData({ ...formData, [name]: value });
    setFormErrors({...formErrors, [name]: isValid ? false : input.validationMessage });
  }

  useEffect(() => {
    const isButtonEnabled = Object.keys(formErrors).every(key => formErrors[key] === false && formData[key] !== undefined );

    setIsButtonEnabled(isButtonEnabled)
  }, [formErrors]);


return(
  <PopupWithForm
    title="Sign Up"
    name="signup"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    isLoading={isLoading}
    buttonText= "Sign Up"
    isButtonEnabled = {isButtonEnabled}
  >
    <label className="popup__formfield">
      <p className="popup__formfield__labeltype">Email</p>
      <input className="popup__input popup__input_type_name" value={formData.email || ''} onChange={handleChange} type="email" name="email" placeholder="Email" minLength="2" maxLength="40" required/>
      <span id="name-error"  className={`${formErrors.email ? "popup__input-error_open" : '' } popup__input-error`}>{formErrors.email}</span>
    </label>
    <label className="popup__formfield">
    <p className="popup__formfield__labeltype">Password</p>
      <input className="popup__input popup__input_type_profession" value={formData.password || ''} onChange={handleChange} type="password" name="password" placeholder="Password" minLength="2" maxLength="200" required/>
      <span id="profession-error" className={`${formErrors.email ? "popup__input-error_open" : '' } popup__input-error`}>{formErrors.password}</span>
    </label>
    <label className="popup__formfield">
      <p className="popup__formfield__labeltype">Username</p>
      <input className="popup__input popup__input_type_username" value={formData.name || ''} onChange={handleChange} type="text" name="name" placeholder="Username" minLength="2" maxLength="200" required/>
      <span id="username-error" className={`${formErrors.name ? "popup__input-error_open" : '' } popup__input-error`}>{formErrors.name}</span>
      <p className='popup__input-mail-registered'>This email not available</p>  {/* popup__input-mail-registered_open  for displayin mail error - for reviewer this note written*/}
    </label>

  </PopupWithForm>

  )
}

export default SignUpPopup;
