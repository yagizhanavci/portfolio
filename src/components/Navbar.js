import React, { useContext, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import TurkishFlag from '../images/turkish.png';
import EnglishFlag from '../images/english.png';

const languageWords = {
  english: {
    home: 'Home',
    resume: 'Resume',
    projects: 'Projects',
    contact: 'Contact',
  },
  turkish: {
    home: 'Anasayfa',
    resume: 'ÖZGEÇMİŞ',
    projects: 'PROJELERİM',
    contact: 'İLETİŞİM',
  },
};
const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const languageButtonRef = useRef(null);
  const mobilelanguageButtonRef = useRef(null);
  const mobileNavMenuRef = useRef(null);
  const setFlag = () => {
    languageButtonRef.current.src =
      language === 'english' ? TurkishFlag : EnglishFlag;
    mobilelanguageButtonRef.current.src =
      language === 'english' ? TurkishFlag : EnglishFlag;
  };
  const setLanguage = e => {
    e.preventDefault();
    toggleLanguage();
    setFlag();
  };
  useEffect(() => {
    setFlag();
  }, [language]);
  const mobileNavbar = (
    <>
      <div className='mobile-navbar'>
        <Link exact to='/' className='mobile-brand-logo'>
          Yağızhan Avcı
        </Link>
        <div className='languagebutton-and-toggle'>
          <button className='navbar-language' onClick={setLanguage}>
            <img
              className='navbar-language-img'
              alt={language === 'turkish' ? 'english-flag' : 'turkish-flag'}
              ref={mobilelanguageButtonRef}
            />
          </button>
          <div
            className='toggle-button'
            onClick={() => mobileNavMenuRef.current.classList.toggle('active')}
          >
            <i className='fas fa-bars'></i>
          </div>
        </div>
      </div>
      <div className='mobile-nav-menu-container' ref={mobileNavMenuRef}>
        <div
          className='mobile-nav-menu-close-button'
          onClick={() => mobileNavMenuRef.current.classList.toggle('active')}
        >
          <i className='fas fa-times'></i>
        </div>
        <div
          className='mobile-nav-menu-overlay'
          onClick={() => mobileNavMenuRef.current.classList.remove('active')}
        />
        <ul className='mobile-nav-menu'>
          <li>
            <NavLink
              exact
              to='/'
              className='mobile-nav-link'
              activeClassName='mobile-nav-link-active'
            >
              {languageWords[language].home}
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/resume'
              className='mobile-nav-link'
              activeClassName='mobile-nav-link-active'
            >
              {languageWords[language].resume}
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/projects'
              className='mobile-nav-link'
              activeClassName='mobile-nav-link-active'
            >
              {languageWords[language].projects}
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/contact'
              className='mobile-nav-link'
              activeClassName='mobile-nav-link-active'
            >
              {languageWords[language].contact}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <>
      <div className='navbar'>
        <Link exact to='/' className='brand-logo'>
          Yağızhan Avcı
        </Link>
        <ul className='nav-menu'>
          <li>
            <NavLink exact to='/' className='' activeClassName='active'>
              {languageWords[language].home}
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/resume' className='' activeClassName='active'>
              {languageWords[language].resume}
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/projects' className='' activeClassName='active'>
              {languageWords[language].projects}
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/contact' className='' activeClassName='active'>
              {languageWords[language].contact}
            </NavLink>
          </li>
        </ul>
        <button className='navbar-language' onClick={setLanguage}>
          <img
            className='navbar-language-img'
            alt={language === 'turkish' ? 'english-flag' : 'turkish-flag'}
            ref={languageButtonRef}
          />
        </button>
      </div>
      {mobileNavbar}
    </>
  );
};

export default Navbar;
