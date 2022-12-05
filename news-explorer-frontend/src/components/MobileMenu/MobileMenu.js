import react, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupMobile from '../PopupMobile/PopupMobile';
import '../../components/Navigation/Navigation.css';
import logoWhite from '../../images/NewsExplorer.svg';
import SavedArticles from '../SavedArticles/SavedArticles';

function MobileMenu ({
isOpen,
onClose,
onSignOut,
buttonText="Sign Out"
}){

  const currentUser = react.useContext(CurrentUserContext)

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log("button works");
    // console.log(email, password);
    const userData = {
      email,
      password,
    }
    // onLoginUser(userData);  // app.js function name
    console.log("close", onClose);
    console.log("signOut", onSignOut);
  }
  return(
    <>
      <PopupMobile
        name="menu"
        isOpen={isOpen}
        onClose={onClose}
        onSignOut={onSignOut}
        // buttonText
      >
      <Link to='/'>
        <p className="popup-mobile-text" onClick={onClose}>Home</p>
      </Link>
      <HashLink to='/#savedarticles' >
        <p className="popup-mobile-text" onClick={onClose}>Saved Articles</p>
      </HashLink>
      <button  className="popup-mobile__btn"  onClick={onSignOut}  >
        {buttonText}
      </button>
      </PopupMobile>

    </>
  )
}

export default MobileMenu;
