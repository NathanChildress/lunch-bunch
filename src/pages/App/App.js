import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import CreateNewEventPage from '../CreateNewEventPage/CreateNewEventPage';
import DefaultPage from '../DefaultPage/DefaultPage'
import userService from '../../utils/userService';
import eventService from '../../utils/eventsService';
import AddGuestsPage from '../AddGuestsPage/AddGuestsPage';




class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(), 
      user: userService.getUser(),
      events: {},
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

    handleGetEvents (events) {
      this.setState({ events });  
    }

    async handleTestEvents () {
      // await eventService.create({
      //   "name" : "Test Event",
      //   "desc" : "this is another test event created from React APIzz"
      // })
      await eventService.delEvent("5f45792c9113a094f768119c");
    }
    

    
    /*-- Event Hooks--*/
    async componentDidMount() {
      this.handleTestEvents();
      const events = await eventService.getEvents();
      console.log(`Events: = ${events}`)
      this.setState({ events }); 
    }

   




  render () {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Lunch Bunch</h1>
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
          <Route exact path='/create-new-event' render={() => 
            <CreateNewEventPage/>
          }
          />
           <Route exact path='/add-guests' render={() => 
            <AddGuestsPage/>
          }
          />
        </Switch>
      </header>
    </div>
    
    )
  }
}

export default App;
