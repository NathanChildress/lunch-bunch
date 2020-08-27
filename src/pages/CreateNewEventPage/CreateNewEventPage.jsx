import React from 'react';
import { Link } from 'react-router-dom';
import CreateNewEventForm from '../../components/CreateNewEventForm/CreateNewEventForm';

const CreateNewEventPage = (props) => {
    return (
        <div>
            <h2>Create New Delivery Event</h2><br/>
            <CreateNewEventForm 
                user={props.user}
<<<<<<< HEAD
<<<<<<< HEAD
                /> <br/>
=======
                events={props.events}
                />
>>>>>>> e03e5563c2f28df8e4bb007c3b5efe1337356863
=======
                events={props.events}
                /> 
>>>>>>> fc8804006c16e3f5c00e5c0847091fd7e164a588
            <Link to="add-guests" className='NavBar-link'>Next: Add Guests</Link>
        </div>
    )
}

export default CreateNewEventPage;