import React from 'react';
import { Link } from 'react-router-dom';
import CreateNewEventForm from '../../components/CreateNewEventForm/CreateNewEventForm';
import NavBar from '../../components/NavBar/NavBar';
import './CreateNewEventPage.css';


const CreateNewEventPage = (props) => {
    return (
          
        <div>
            <h2>Create New Delivery Event</h2><br/>
            <CreateNewEventForm 
                user={props.user}
                events={props.events}
                history={props.history}
                /> 
            <Link to="add-guests" className='new-guests-submit'>Next: Add Guests</Link>
        </div>
       
    )
}

export default CreateNewEventPage;