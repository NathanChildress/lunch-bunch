import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import CreateNewEventPage from '../CreateNewEventPage/CreateNewEventPage';
import DefaultPage from '../DefaultPage/DefaultPage'
import userService from '../../utils/userService';
import AddGuestsPage from '../AddGuestsPage/AddGuestsPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import AddFoodOrderPage from '../AddFoodOrderPage/AddFoodOrderPage';
import OrderConfirmationPage from '../OrderConfirmationPage/OrderConfirmationPage';




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
        <h1>Lunch Bunch &nbsp; 🍔</h1>
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
            <Route exact path='/dashboard' render={() => 
             <DashboardPage/>
           }
           />
          <Route exact path='/create-new-event' render={() => 
            <CreateNewEventPage/>
          }
          />
           <Route exact path='/add-guests' render={() => 
            <AddGuestsPage/>
          }
          />
           <Route exact path='/add-food-order' render={() => 
            <AddFoodOrderPage/>
          }
          />
          <Route exact path='/order-confirmation' render={() => 
            <OrderConfirmationPage/>
          }
          />
        </Switch>
      </header>
    </div>
    
    )
  }
}

export default App;
