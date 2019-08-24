import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
function Footer() {
  return (
    <footer className='Footer'>
      <div className='social-media'>
        <a
          className='social-media-links'
          target='_blank'
          href='https://github.com/Yagizhan14'
        >
          <i className='fab fa-github' />
        </a>
        <a
          className='social-media-links'
          target='_blank'
          href='https://www.linkedin.com/in/ya%C4%9F%C4%B1zhan-avc%C4%B1-b06556181/'
        >
          <i className='fab fa-linkedin' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
