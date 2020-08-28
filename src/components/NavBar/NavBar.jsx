import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <ul>
    <li><a><Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link></a></li>
    <li><a><Link to='/dashboard' className='NavBar-link' onClick={props.handleLogout}>Dashboard</Link></a></li>
    <li className='NavBar-welcome'>Hey,  &nbsp;{props.user.name}!</li>
    <li className="AppLogo">Lunch Bunch &nbsp;&nbsp;🍔</li>
  </ul>
  :
  <ul className='NavBar'>
    <li><a><Link to="/login" className='NavBar-link'>Login</Link></a></li>
    <li><a><Link to="/signup" className='NavBar-link'>Sign Up</Link></a></li>
    <li className="AppLogo">&nbsp;&nbsp;Lunch Bunch &nbsp;&nbsp;🍔</li>
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