import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import './DefaultPage.css';
import LoginPage from '../LoginPage/LoginPage';

const DefaultPage = (props) => {
    return (
      <div className="DefaultPage">
        <h1>Lunch Bunch &nbsp; 🍔</h1>
        <h5>Making remote group delivery meals possible! <br/> Enjoy a meal together but apart</h5>
        <div className="flex-h align-flex-end">
            <Link to="/login" className='NavBar-link'>LOG IN</Link>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/signup" className='NavBar-link'>SIGN UP</Link><br/><br/>
            <Link to="dashboard" className='NavBar-link'>Dashboard</Link>
        </div>
      </div>
    );
  };

export default DefaultPage;