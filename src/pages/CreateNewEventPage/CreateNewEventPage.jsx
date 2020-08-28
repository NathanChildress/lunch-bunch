import React from 'react';
import { Link } from 'react-router-dom';
import CreateNewEventForm from '../../components/CreateNewEventForm/CreateNewEventForm';
import NavBar from '../../components/NavBar/NavBar';
import './CreateNewEventPage.css';


const CreateNewEventPage = (props) => {
    return (
        <div>
        <h3 className="order-heading">Create New Delivery Event 🍔</h3>
            <CreateNewEventForm 
                user={props.user}
                events={props.events}
                history={props.history}
                /> 
        </div>
    )
}

export default CreateNewEventPage;