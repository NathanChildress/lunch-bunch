import React from 'react';
import { Link } from 'react-router-dom';

const SubmitOrderButton = (props) => {
    return (
        <Link to="order-confirmation" className='NavBar-link'>
        <button>
         Submit Order
        </button>
       </Link>
    )
}

export default SubmitOrderButton;