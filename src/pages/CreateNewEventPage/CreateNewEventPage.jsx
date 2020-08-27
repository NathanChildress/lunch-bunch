import React from 'react';
import { Link } from 'react-router-dom';
import CreateNewEventForm from '../../components/CreateNewEventForm/CreateNewEventForm';

const CreateNewEventPage = (props) => {
    return (
        <div>
            <h2>Create New Delivery Event</h2><br/>
            <CreateNewEventForm 
                user={props.user}
                /> <br/>
            <Link to="add-guests" className='NavBar-link'>Next: Add Guests</Link>
        </div>
    )
}

export default CreateNewEventPage;