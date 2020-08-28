import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import './DefaultPage.css';
import LoginPage from '../LoginPage/LoginPage';

const DefaultPage = (props) => {
  let nav = props.user ?
    <div className="DefaultPage">

        <text className="welcome">Welcome {props.user.name}! <br/></text>
        <text className="appName">Lunch Bunch &nbsp; 🍔</text> <br/>
        <text className="slogan1">Making remote group delivery meals possible!</text> <br/> <br/>
        <div className="flex-h align-flex-end">
            <Link to="dashboard" className="dashboard-signup">Dashboard</Link> 
        </div>
      </div>
      :
      <div className="NavBar">
      <text>Welcome to <br/></text>
        <text className="appName">Lunch Bunch &nbsp; 🍔</text> <br/>
        <text className="slogan1">Making remote group delivery meals possible!</text> <br/><br/>
        <div>
        <Link class="defaut" to="/login" className='dashboard-signup'>LOG IN</Link>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <Link to="/signup" className="dashboard-signup">SIGN UP</Link><br/><br/>
        </div>
        </div>

    return (
      <div className = 'NavBar'>
    {nav}
  </div>
    );
  };

export default DefaultPage;




