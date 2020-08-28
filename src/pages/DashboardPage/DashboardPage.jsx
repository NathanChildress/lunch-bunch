import React from 'react';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import DashboardEventList from '../../components/DashboardEventList/DashboardEventList';
import './DashboardPage.css';


const DashboardPage = (props) => {
    return (
        <>
        <h3 className="order-heading">Dashboard &nbsp;&nbsp;🍔</h3>
         
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