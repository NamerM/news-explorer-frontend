import react, { useContext, useState } from 'react';
import '../PopupMobile/PopupMobile.css';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext  } from '../../contexts/CurrentUserContext';
import logoWhite from '../../images/NewsExplorer.svg';
import SavedArticles from '../SavedArticles/SavedArticles';


function PopupMobile({
  children,
  isOpen,
  name,
  onClose,
  onSubmit,
})
{
const currentUser = useContext(CurrentUserContext);
// const location = useLocation();
// const isSignIn = location.pathname === '/signin'

return (
  <>
  <section className={`popup-mobile popup-mobile_type_${name} ${isOpen ? "popup-mobile_open" : ""} `}>
    <div className="popup-mobile__container"  onClick={onSubmit}>
      <nav>
        <img className="popup-mobile-logo" src={logoWhite} alt="NewsExplorer Logo, white color"/>
        <button type="button" className="popup-mobile__close" onClick={onClose} />
      </nav>
      {children}
    </div>
  </section>
  </>
 )
}


export default PopupMobile;

{/* <div className="popup-mobile__container"  onClick={onSubmit}>
<nav>
  <img className="popup-mobile-logo" src={logoWhite}/>
  <button type="button" className="popup-mobile__close" onClick={onClose} />
</nav>
<Link path='/' component={SavedArticles}>
  <p className="popup-mobile-text" onClick={onClose}>Home</p>
</Link>
<Link to='/signin'>
  <button type="submit" className="popup-mobile__btn"  onClick={onClose} >
    {buttonText}
  </button>
</Link>
</div> */}
