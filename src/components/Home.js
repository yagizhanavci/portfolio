import React, { useContext } from 'react';
import avatar from '../images/Avatar.png';
import { LanguageContext } from '../contexts/LanguageContext';

const languageWords = {
  turkish:
    'Ben frontend ve backend geliştirme konularında çalışan sürekli öğrenmeye tutkulu bir full stack geliştiriciyim. Aşağıda belirtmiş olduğum teknolojilerde çalışmakta yetenekliyim. Projelerimi gözden geçirmek ve benimle iletişime geçmekten çekinmeyin.',
  english:
    "I'm a full stack developer specialised in frontend and backend development with passion to learn constantly. I have the skills to work with technologies shown below. Also feel free to check out my projects and contact me.",
};

const Home = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className='home'>
      <div className='home-container'>
        <img className='avatar-img' src={avatar} alt='avatar' />
        <div className='about-me'>
          <h1 className='about-me-title'>
            Yağızhan Avcı <br />{' '}
            <span className='anim-typewriter'>Full Stack Web Developer</span>
          </h1>
          <p className='about-me-content' style={{ whiteSpace: 'normal' }}>
            {languageWords[language]}
          </p>
          <ul className='my-skills'>
            <li>
              <i className='fab fa-html5' />
              <br />
              <span className='skill-name'>HTML</span>
            </li>
            <li>
              <i className='fab fa-css3-alt' />
              <br />
              <span className='skill-name'>CSS</span>
            </li>
            <li>
              <i className='fab fa-js-square' />
              <br />
              <span className='skill-name'>JavaScript</span>
            </li>
            <li>
              <i className='fab fa-react' />
              <br />
              <span className='skill-name'>React JS</span>
            </li>
            <li>
              <i className='fab fa-node' />
              <br />
              <span className='skill-name'>Node JS</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
