import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = (props) => {
    return (
        <div>
            <h3>Thank you for your order!</h3>
            <Link to="dashboard" className='NavBar-link'>My Dashboard</Link>
        </div>
    )
}

export default OrderConfirmationPage;