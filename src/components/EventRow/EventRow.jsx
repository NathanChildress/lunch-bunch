import React from 'react';
import { Link } from 'react-router-dom';
import eventsService from '../../utils/eventsService';

const EventRow = props => {
    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.guests}</td>
        <td>{props.eventTime}</td>
        <button onClick={() => eventsService.delEvent(props.eventId)}>Cancel ❌</button>
        <Link to="add-food-order" className='new-event-submit'><button>Edit ✏️</button></Link>
    </tr>
    )    
}

export default EventRow;