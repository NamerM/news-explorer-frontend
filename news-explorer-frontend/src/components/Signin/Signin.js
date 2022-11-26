import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupWithForm from '../PopupWithForm/PopupWithForm';


function SignInPopup({ isOpen, onClose, isLoading, onLoginUser}){
  const currentUser = React.useContext(CurrentUserContext)

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    // console.log(email, password);
    const userData = {
      email,
      password,
    }
    onLoginUser(userData);  // app.js function name
  }

  const [formData, setFormData ] = useState({});
  const [formErrors, setFormErrors] = useState({ email: false, password: false }); // { password: false, email: 'Please fill out this field.' }


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
    isLoading={isLoading}
    buttonText= "Sign In"
    isButtonEnabled = {isButtonEnabled}
  >
    <label className="popup__formfield">
      <p className="popup__formfield__labeltype">Email</p>
      <input className="popup__input popup__input_type_name" value={formData.email || ''} onChange={handleChange} type="email" name="email" placeholder="Email" minLength="2" maxLength="40" required/>
      <span id="name-error" className={`${formErrors.email ? "popup__input-error_open" : '' } popup__input-error`}>{formErrors.email}</span> {/* popup__input-error_open for error msg attributes*/}
    </label>
    <label className="popup__formfield">
      <p className="popup__formfield__labeltype">Password</p>
      <input className="popup__input popup__input_type_profession" value={formData.password || ''} onChange={handleChange} type="password" name="password" placeholder="Password" minLength="2" maxLength="200" required/>
      <span id="profession-error" className={`${formErrors.password ? "popup__input-error_open" : '' } popup__input-error`}>{formErrors.password}</span>
     <p className='popup__input-mail-registered'>This email is not available</p>  {/* popup__input-mail-registered_open  for displayin mail error - for reviewer this note written*/}
    </label>
  </PopupWithForm>

  )
}

export default SignInPopup;
