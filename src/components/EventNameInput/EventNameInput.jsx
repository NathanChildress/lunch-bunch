import React, { Component } from 'react';
import eventsService from '../../utils/eventsService';

class EventNameInput extends React.Component {
    constructor(props) {
        super(props);
        this.state= {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit = async(event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        try {
            await eventsService.create({
                "name": this.state.value,
                "owner": this.props.user._id,
            });
        } catch(err) {
            console.log(err)
        }
      }

    render () {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Enter Name of Event:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default EventNameInput;