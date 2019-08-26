import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import hangmanProjectImage from '../images/hangman-project-img.png';

const Projects = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className='projects'>
      <div className='projects-container'>
        <a
          target='_blank'
          href='https://react-hangman-ygz.herokuapp.com'
          className='project'
        >
          <div className='project-image-container'>
            <img
              src={hangmanProjectImage}
              alt={language === 'turkish' ? 'Adam Asmaca' : 'Hangman Game'}
              className='project-image'
            />
          </div>
          <div className='project-description'>
            <h4 className='project-name'>
              {language === 'turkish' ? 'Adam Asmaca' : 'Hangman Game'}
            </h4>
            <div className='project-tags'>
              <span className='project-tag'>HTML</span>
              <span className='project-tag'>CSS</span>
              <span className='project-tag'>Javascript</span>
              <span className='project-tag'>React</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
