import React from 'react';
import EventRow from '../EventRow/EventRow';

const DashboardEventList = (props) => {
    return (
    <div >
       
        <table>
        <thead>
            <tr>
                <th>Event Name</th>
                <th>Guests</th>
                <th>Time/Date</th>
                <th>Actions</th>
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