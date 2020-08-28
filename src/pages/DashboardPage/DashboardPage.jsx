import React from 'react';
import { Link } from 'react-router-dom';
import AddGuestsForm from '../../components/AddGuestsForm/AddGuestsForm';
import { render } from '@testing-library/react';
import DashboardEventList from '../../components/DashboardEventList/DashboardEventList';
import './DashboardPage.css';


const DashboardPage = (props) => {
    return (
        <>
        <Link className="dashboard-signup" to='/'>Home</Link>
      
        <div>

        <DashboardEventList 
            events={props.events}
        />
        <Link to="create-new-event" className='new-event-submit'>Create Event</Link>
        </div>
        </>
    )
}

export default DashboardPage;