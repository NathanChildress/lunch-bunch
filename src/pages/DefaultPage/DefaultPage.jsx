import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import './DefaultPage.css';
import LoginPage from '../LoginPage/LoginPage';

const DefaultPage = (props) => {
    return (
      <div className="DefaultPage">
        <h5>Making remote group delivery meals possible!</h5>
        <h6>Enjoy a meal together but apart</h6>
        <NavBar 
          user={props.user}
          handleLogout={props.handleLogout}
        />
        <div className="flex-h align-flex-end">
            {/* <Link to="/login" className='NavBar-link'>LOG IN</Link>
            <Link to="/signup" className='NavBar-link'>SIGN UP</Link> */}
            <Link to="dashboard" className='NavBar-link'>Dashboard</Link>
        </div>
        {/* <footer className='header-footer'>
          Copyright 2020
        </footer> */}
      </div>
    );
  
  };

export default DefaultPage;