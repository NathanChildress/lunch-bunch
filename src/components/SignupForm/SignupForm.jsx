import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignupForm.css';


class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      //let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (

      <div>
      <Link className="dashboard-signup" to='/'>Home</Link>

        <form className="signup-form" onSubmit={this.handleSubmit} >
        <header className="signup-header">Sign Up</header>
          <p class="signup-text">
            <span>
              <i><img src="https://i.imgur.com/2OB3dfx.png" alt=""/></i>
            </span>
          </p>
              <input type="text" className="signup-username" autofocus="true" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
              <input type="email" className="signup-username" autofocus="true" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
              <input type="password" className="signup-password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
              <input type="password" className="signup-password" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
              <Link className="cancel-link" to='/'>Cancel</Link>
              <button className="signup-submit" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp; 
        </form>
      </div>
    );
  }
}

export default SignupForm;

