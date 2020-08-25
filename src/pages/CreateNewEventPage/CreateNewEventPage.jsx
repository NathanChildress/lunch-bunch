import React from 'react';
import EventNameInput from '../../components/EventNameInput/EventNameInput';
import EventTimeDateInput from '../../components/EventTimeDateInput/EventTimeDateInput';

const CreateNewEventPage = (props) => {
    return (
        <div>
            <h2>Create New Delivery Event</h2>
            <EventNameInput />
            <EventTimeDateInput />
        </div>
    )
}

export default CreateNewEventPage;