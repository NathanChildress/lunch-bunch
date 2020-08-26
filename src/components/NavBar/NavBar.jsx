import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <div>
    <span className='NavBar-welcom'>Hey, {props.user.name}!</span><br/>
    <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
  </div>
  :
  <div className='NavBar'>
    <Link to="/login" className='NavBar-link'>LOG IN</Link>
    &nbsp;&nbsp;| &nbsp;&nbsp;
    <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
  </div>;

  return (
    <div className = 'NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;