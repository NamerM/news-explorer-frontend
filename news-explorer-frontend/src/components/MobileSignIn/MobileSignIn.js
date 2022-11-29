import react, { useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupMobile from '../PopupMobile/PopupMobile';

function MobileSignIn ({
isOpen,
onClose,
onMobilePopUpClick
}){
  const currentUser = react.useContext(CurrentUserContext)

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password)
    // console.log(email, password);
    const userData = {
      email,
      password,
    }
    // onLoginUser(userData);  // app.js function name
  }
  return(
    <>
      <PopupMobile
        name="popup-mobile"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonText="Sign In"
      >

      </PopupMobile>
      <div>

      </div>
    </>
  )
}

export default MobileSignIn;
