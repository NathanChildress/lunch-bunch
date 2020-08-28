import React from 'react';
import EventRow from '../EventRow/EventRow';
import { Link } from 'react-router-dom';
import './DashboardEventList.css'



const DashboardEventList = (props) => {
    return (
    

    <div >
        <table className="dashboard-list">
        <thead>
            <tr>
                <th className="dashboard-th">Event Name</th>
                <th className="dashboard-th">Time/Date</th>
                <th className="dashboard-th">Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.events.map((event, idx) =>
                <EventRow 
                    name={event.name} 
                    eventId={event._id}
                    eventTime={event.eventTime}
                    />
            )}
            </tbody>
        </table>
  </div>

    )
}

export default DashboardEventList;