import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <ul>
    <li className='NavBar-welcom'>Hey, {props.user.name}!</li><br/>
    <li><Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link></li>
  </ul>
  :
  <ul className='NavBar'>
    <li><Link to="/login" className='NavBar-link'>LOG IN</Link></li>
    &nbsp;&nbsp;| &nbsp;&nbsp;
    <li><Link to="/signup" className='NavBar-link'>SIGN UP</Link></li>
  </ul>;

  return (
    <div className = 'NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;

{/* <div>
<span className='NavBar-welcom'>Hey, {props.user.name}!</span><br/>
<Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
</div>
:
<div className='NavBar'>
<Link to="/login" className='NavBar-link'>LOG IN</Link>
&nbsp;&nbsp;| &nbsp;&nbsp;
<Link to="/signup" className='NavBar-link'>SIGN UP</Link>
</div>; */}