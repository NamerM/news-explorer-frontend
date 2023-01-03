import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupWithForm from '../PopupWithForm/PopupWithForm';


function SignInPopup({ isOpen, onClose, isLoading, onLogin}){
  const currentUser = React.useContext(CurrentUserContext)
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [formData, setFormData ] = useState({});
  const [formErrors, setFormErrors] = useState({ email: false, password: false }); // { password: false, email: 'Please fill out this field.' }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    // console.log(email, password);
    const {
      email,
      password,
    } = formData
    onLogin({email, password });  // app.js function name
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
    title="Sign In"
    name="signin"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    buttonText= "Sign In"
    isButtonEnabled = {isButtonEnabled}
    isLoggedIn
  >
    <label className="popup__formfield">
      <p className="popup__formfield__labeltype">Email</p>
      <input className="popup__input popup__input_type_email" value={formData.email || ''} onChange={handleChange} type="email" name="email" placeholder="Enter email" minLength="2" maxLength="40" required/>
      <span id="name-error" className={`${formErrors.email ? "popup__input-error_open" : '' } popup__input-error`}>{formErrors.email}</span> {/* popup__input-error_open for error msg attributes*/}
    </label>
    <label className="popup__formfield">
      <p className="popup__formfield__labeltype">Password</p>
      <input className="popup__input popup__input_type_password" value={formData.password || ''} onChange={handleChange} type="password" name="password" placeholder="Enter password" minLength="2" maxLength="200" required/>
      <span id="profession-error" className={`${formErrors.password ? "popup__input-error_open" : '' } popup__input-error`}>{formErrors.password}</span>
    </label>
  </PopupWithForm>

  )
}

export default SignInPopup;
