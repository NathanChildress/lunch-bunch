import React, { Component } from 'react';
import eventsService from '../../utils/eventsService';

class CreateNewEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {};
        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }
    handleChange = (e) => {
        //this.props.updateMessage('');
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value
        });
      }

    handleSubmit = async(event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        try {
            await eventsService.create({
                "name": this.state.name,
                "owner": this.props.user._id,
                "eventTime": this.state.eventTime
                
            });
        } catch(err) {
            console.log(err)
        }
      }

    render () {
        return (
        <form>
            <label>
                Enter Name of Event:&nbsp;
                <input type="text" name="name" onChange={this.handleChange}/>
            </label>
            <label>Delivery Date/Time:&nbsp;</label>
            <input type="datetime-local" name="eventTime" onChange={this.handleChange}/>
            <input type="submit" value="Submit" onChange={this.handleChange}/> <br/>
        </form>
        );
    }
}

export default CreateNewEventForm;