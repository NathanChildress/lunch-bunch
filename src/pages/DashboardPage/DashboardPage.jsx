import React from 'react';
import { Link } from 'react-router-dom';
import AddGuestsForm from '../../components/AddGuestsForm/AddGuestsForm';
import { render } from '@testing-library/react';
import DashboardEventList from '../../components/DashboardEventList/DashboardEventList';
// import NavBar from '../../components/NavBar/NavBar';


const DashboardPage = (props) => {
    
    return (
        <div>
        <DashboardEventList />
        <Link to="create-new-event" className='NavBar-link'>Create new Event</Link>
        </div>
    )
}

export default DashboardPage;