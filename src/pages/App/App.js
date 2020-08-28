import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import CreateNewEventPage from '../CreateNewEventPage/CreateNewEventPage';
import DefaultPage from '../DefaultPage/DefaultPage'
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import eventService from '../../utils/eventsService';
import AddGuestsPage from '../AddGuestsPage/AddGuestsPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import AddFoodOrderPage from '../AddFoodOrderPage/AddFoodOrderPage';
import OrderConfirmationPage from '../OrderConfirmationPage/OrderConfirmationPage';
import yelpService from '../../utils/yelpService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(), 
      user: userService.getUser(),
      events: [],
    };
    //this.handleGetUserEvents = this.handleGetUserEvents.bind(this);
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
      await eventService.create({
        "name" : "Test Event",
        "desc" : "this is another test event created from React APIzz"
      })
      const lunchlists = await yelpService.index()
      this.setState({ lunchlists });
    }
    
    /*----Handle Events----*/
    
    
    handleGetUserEvents = () => {
      const userId = userService.getUser() ? userService.getUser._id : ""
      const eventsList = eventService.getUserEvents(userId);
      console.log(`EventsList: = ${JSON.stringify(eventsList)}`)
      this.setState({ eventsList })
      
    }

    
    /*-- Event Hooks--*/
    async componentDidMount() {
      // this.handleTestEvents();
      const userReq = this.state.user ? this.state.user._id : '0'
      this.handleGetUserEvents((userReq));
      const events = await eventService.getEvents();
      console.log(`Events: = ${JSON.stringify(events)}`)
      this.setState({ events }); 
    }

    render () {
    return (
    <div className="App">
      <Route exact path='/' render={(props) =>
        <NavBar 
           {...props}
           user={this.state.user}
           handleLogout={this.handleLogout}
        />
      }/>
      <header className="App-header pages">
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
              handleGetUserEvents={this.handleGetUserEvents}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              handleGetUserEvents={this.handleGetUserEvents}
            />
          }/>
          <Route exact path='/create-new-event' render={( {history} ) => 
            <CreateNewEventPage
              history={history}
              events={this.state.events}
              user={this.state.user}
            />
          }/>
            <Route exact path='/dashboard' render={(history) => 
             <DashboardPage
             history={history}
             user={this.state.user}
             events={this.state.events}
             />
           }
           />
           <Route exact path='/add-guests' render={(history) => 
            <AddGuestsPage
            history={history}
            user={this.state.user}
            events={this.state.events}
            handleGetUserEvents={this.handleGetUserEvents}
            />
          }
          />
           <Route exact path='/add-food-order' render={(history) => 
            <AddFoodOrderPage
              history={history}
              user={this.state.user}
              events={this.state.events}
            />
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
