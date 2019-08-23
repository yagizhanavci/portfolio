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
    downloadCv: 'Download CV',
  },
  turkish: {
    home: 'Anasayfa',
    resume: 'ÖZGEÇMİŞ',
    projects: 'PROJELERİM',
    contact: 'İLETİŞİM',
    downloadCv: 'CV İNDİR',
  },
};
const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const languageButtonRef = useRef(null);
  const setFlag = () => {
    languageButtonRef.current.src =
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
  return (
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
        <li>
          <NavLink to='#'>{languageWords[language].downloadCv}</NavLink>
        </li>
      </ul>
      <button className='navbar-language' onClick={setLanguage}>
        <img
          className='navbar-language-img'
          alt={`${language}-flag`}
          ref={languageButtonRef}
        />
      </button>
    </div>
  );
};

export default Navbar;
