import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import DefaultPage from '../DefaultPage/DefaultPage'
import userService from '../../utils/userService';




class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(), 
      user: userService.getUser(),
    };
  }

  /*----Initialize ----*/
  getInitialState() {
    return {
      didInitialize: true,
    };
  }

    /*----Handle User Login Status */
    handleSignupOrLogin = () => {
      this.setState({user: userService.getUser()});
    }
  
    handleLogout = () => {
      userService.logout();
      this.setState({ user: null });
    }




  render () {
    return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/' render={(props) => 
            <DefaultPage 
              {...props}
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
        }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </header>
    </div>
    
    )
  }
}

export default App;
