import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import './DefaultPage.css';
import LoginPage from '../LoginPage/LoginPage';

const DefaultPage = (props) => {
    return (
      <div className="DefaultPage">
        <NavBar 
          user={props.user}
          handleLogout={props.handleLogout}
        />
        <div className="flex-h align-flex-end">
            <h1>I will put a list of events here soon.</h1>
            <h2>I will add a list of users here soon as I implement the api</h2>
        </div>
        <footer className='header-footer'>
          Copyright 2020
        </footer>
      </div>
    );
  
  };

export default DefaultPage;