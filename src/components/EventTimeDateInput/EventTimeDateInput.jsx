import React, { Component } from 'react';


class EventTimeDateInput extends React.Component {
    render () {
        return (
            <div>
                <label>Delivery Date/Time:&nbsp;</label>
                <input type="datetime-local"/>
            </div>
        )
    }
}

export default EventTimeDateInput;
