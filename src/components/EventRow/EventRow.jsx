import React from 'react';
import { Link } from 'react-router-dom';
import eventsService from '../../utils/eventsService';
import './EventRow.css';

const EventRow = props => {
    return (
        <tr>
        <td className="guest-table-td">{props.name}</td>
        {/* <td>{props.guests}</td> */}
        <td className="guest-table-td">{props.eventTime}</td>
        <td>
        <button className="action-btn" onClick={() => eventsService.delEvent(props.eventId)}>Cancel ❌</button>
        <Link to="add-food-order" ><button className="action-btn">Edit ✏️</button></Link>
        </td>
    </tr>
    )    
}

export default EventRow;