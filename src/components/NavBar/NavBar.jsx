import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <ul>
    <li><a><Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out 🔓</Link></a></li>
    <li><a><Link to='/dashboard' className='NavBar-link' onClick={props.handleLogout}>Dashboard</Link></a></li>
    <li className='NavBar-welcome'>Hey,  &nbsp;{props.user.name}!</li>
    <li className="AppLogo"><Link to='/'>&nbsp;&nbsp;Lunch Bunch &nbsp;&nbsp;🍔</Link></li>
  </ul>
  :
  <ul className='NavBar'>
    <li><a><Link to="/login" className='NavBar-link'>Login</Link></a></li>
    <li><a><Link to="/signup" className='NavBar-link'>Sign Up</Link></a></li>
    <li className="AppLogo"><Link to='/'>&nbsp;&nbsp;Lunch Bunch &nbsp;&nbsp;🍔</Link></li>
  </ul>;
  
  return (
    <div className = 'NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;

