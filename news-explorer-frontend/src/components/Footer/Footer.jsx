import React from "react";
import{ Link }from "react-router-dom";
import gitIcon from '../../images/Git-Vector.svg';
import fbIcon from '../../images/fb-Vector.svg';

function Footer() {

  return(
    <footer className="footer">
      <p className="footer__copyright">© { new Date().getFullYear() } NewsSite, Powered by News API</p>
      <nav className="footer__menu">
        <Link to='/' className="footer__menu-item">Home</Link>
        <a href='https://www.practicum.com' className="footer__menu-item" target="_blank">Practicum</a>
        <div className="footer__menu-icon-container">
          <a href='https://github.com/NamerM/' className="footer__menu-icon" target="_blank"><img src={gitIcon} alt="Github Icon" /></a>
          <a href='https://facebook.com' className="footer__menu-icon" target="_blank"><img src={fbIcon} alt="facebook Icon" /></a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer;
