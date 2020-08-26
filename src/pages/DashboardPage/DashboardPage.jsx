import React from 'react';
import { Link } from 'react-router-dom';
// import NavBar from '../../components/NavBar/NavBar';


const DashboardPage = (props) => {
    return (
        <Link to="create-new-event" className='NavBar-link'>Create new Event</Link>
    )
}

export default DashboardPage;