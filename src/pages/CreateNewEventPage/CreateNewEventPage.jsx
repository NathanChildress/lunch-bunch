import React from 'react';
import { Link } from 'react-router-dom';
import CreateNewEventForm from '../../components/CreateNewEventForm/CreateNewEventForm';

const CreateNewEventPage = (props) => {
    return (
        <div>
            <h2>Create New Delivery Event</h2>
            <CreateNewEventForm 
                user={props.user}
                />
            <Link to="add-guests" className='NavBar-link'>Next: Add Guests</Link>
        </div>
    )
}

export default CreateNewEventPage;