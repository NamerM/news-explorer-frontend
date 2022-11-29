import React from "react";
import{ Link }from "react-router-dom";
import gitIcon from '../../images/Git-Vector.svg';
import fbIcon from '../../images/fb-Vector.svg';

function Footer() {

  return(
    <div className="footer">
      <p className="footer__copyright">© { new Date().getFullYear() } NewsSite, Powered by Namernews API</p>
      <nav className="footer__menu">
        <Link to='/' className="footer__menu-item">Home</Link>
        <a href='https://www.practicum.com' className="footer__menu-item">Practicum</a>
        <div className="footer__menu-icon-container">
          <a href='https://github.com/NamerM/' className="footer__menu-icon"><img src={gitIcon} /></a>
          <a href='https://facebook.com' className="footer__menu-icon"><img src={fbIcon}/></a>
        </div>
      </nav>
    </div>
  )
}

export default Footer;
