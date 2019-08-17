import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='brand-logo'>Yağızhan Avcı</div>
      <ul className='nav-menu'>
        <li>
          <NavLink exact to='/' className='' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/resume' className='' activeClassName='active'>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/projects' className='' activeClassName='active'>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/contact' className='' activeClassName='active'>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to='#'>Download CV</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
