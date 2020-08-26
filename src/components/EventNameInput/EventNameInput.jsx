import React, { Component } from 'react';

class EventNameInput extends React.Component {
    render () {
        return (
        <form>
            <label>
                Enter Name of Event:&nbsp;
                <input type="text" />
            </label>
            <input type="submit" value="Submit" /> <br/>
            <label>Delivery Date/Time:&nbsp;</label>
            <input type="datetime-local"/>
        </form>
        
    
        );
    }
}

export default EventNameInput;