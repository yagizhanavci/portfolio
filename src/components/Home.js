import React from 'react';
import avatar from '../images/Avatar.png';

const Home = () => {
  return (
    <div className='content'>
      <div className='home page'>
        <img className='avatar-img' src={avatar} alt='avatar' />
        <div className='about-me'>
          <h1 className='about-me-title'>
            Yağızhan Avcı <br />{' '}
            <span className='anim-typewriter'>Full Stack Web Developer</span>
          </h1>
          <p className='about-me-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus at
            modi accusantium error voluptatem maxime quas? At alias est
            adipisci.
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
              <i class='fab fa-node' />
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
