import React from 'react';
import eventsService from '../../utils/eventsService';

const EventRow = props => {
    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.guests}</td>
        <td>{props.eventTime}</td>
        <button onClick={() => eventsService.delEvent(props.eventId)}>Cancel ❌</button>
        <button>Edit ✏️</button>
    </tr>
    )    
}

export default EventRow;