import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import eventService from '../../utils/eventsService';
import './LoginPage.css';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    // TODO: implement in an elegant way
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      //let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      //try to add user filtered events here.
      this.props.handleGetUserEvents();
      // Successfully signed up - show dashboard
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <>
<form class="login-form" onSubmit={this.handleSubmit}>
  <p class="login-text">
    <span>
      <i><img src="https://i.imgur.com/2OB3dfx.png" alt=""/></i>
    </span>
  </p>
  <input type="email" className="login-username" autofocus="true" required="true" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
  <input type="password" className="login-password" required="true" placeholder="Password" value={this.state.pw} onChange={this.handleChange} name="pw"/>
  <input type="submit" name="Login" value="Login" className="login-submit" />
</form>
</>
    );
  }
}

export default LoginPage;

{/* <div className="LoginPage">
<header className="header-footer">Log In &nbsp; 🍔 </header>
<form className="form-horizontal" onSubmit={this.handleSubmit} >
  <div className="form-group">
    <div className="col-sm-12">
      <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-12">
      <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-12 text-center">
      <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
      <button><Link to='/'>Cancel</Link></button>
    </div>
  </div>
</form>
</div> */}