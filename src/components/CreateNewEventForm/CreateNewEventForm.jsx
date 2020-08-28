import React, { Component } from 'react';
import eventsService from '../../utils/eventsService';
import './CreateNewEventForm.css';

class CreateNewEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {};
        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    handleSubmit = async(event) => {
        console.log('A name was submitted: ' + this.state.name);
        event.preventDefault();
        try {
            await eventsService.create({
                "name": this.state.name,
                "owner": this.props.user._id,
                "eventTime": this.state.eventTime,
                "guests" : [{
                    name: this.state.guest1,
                    address: this.state.location1
                    },{
                        name: this.state.guest2,
                        address: this.state.location2
                    }, {
                        name: this.state.guest3,
                        address: this.state.location3
                    }
                ]
                
            });
        } catch(err) {
            console.log(err)
        }
        this.props.history.push('/Dashboard');
      }

      isFormInvalid() {
        return !(
                this.state.name 
                && this.state.eventTime 
                && this.state.guest1 
                && this.state.location1
                && this.state.guest2 
                && this.state.location2
                && this.state.guest3
                && this.state.location3
                );
      }

    render () {
        return (
        <form className="dash-form" onSubmit={this.handleSubmit}>
            <header className="dash-header">New Event</header>
                <p class="dash-text">
                <span>
                <i><img className="dash-img" src="https://i.imgur.com/2OB3dfx.png" alt=""/></i>
                </span>
                </p>
                <input className="dashboard-input" type="text" name="name" placeholder="Name of Event" onChange={this.handleChange}/>
            <input className="dashboard-input" type="datetime-local" name="eventTime" onChange={this.handleChange}/>
        
                    <input  className="dashboard-input" type="text" name="guest1" placeholder="Guest Name 1"  onChange={this.handleChange}/>
                    <input className="dashboard-input" type="text" name="location1" placeholder="Address" onChange={this.handleChange}/>
          
                    <input className="dashboard-input" type="text" name="guest2" placeholder="Guest Name 2"  onChange={this.handleChange}/>
                    <input className="dashboard-input" type="text" name="location2" placeholder="Address" onChange={this.handleChange}/>
          
                <input className="dashboard-input" type="text" name="guest3" placeholder="Guest Name 3"  onChange={this.handleChange}/>
                    <input className="dashboard-input" type="text" name="location3" placeholder="Address" onChange={this.handleChange}/>
            <button className="signup-submit" disabled={this.isFormInvalid()}>Create Event</button>
             <br/>
        </form>
        
        );
    }
}

export default CreateNewEventForm;


