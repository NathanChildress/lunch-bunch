import React from 'react';
import { Link } from 'react-router-dom';
import EventNameInput from '../../components/EventNameInput/EventNameInput';
import EventTimeDateInput from '../../components/EventTimeDateInput/EventTimeDateInput';

const CreateNewEventPage = (props) => {
    return (
        <div>
            <h2>Create New Delivery Event</h2>
            <EventNameInput />
            <EventTimeDateInput />
            <Link to="add-guests" className='NavBar-link'>Next: Add Guests</Link>
        </div>
    )
}

export default CreateNewEventPage;