import React from 'react';
import './SubmitOrderTally.css';

const SubmitOrderTally = props => {
    return (

<table className="guest-food-order-table">
                <thead>
                <tr>
                    <th className="guest-table-th">Guest</th>
                    <th className="guest-table-th">Restaurant</th>
                    <th className="guest-table-th">Food</th>
                </tr>
                </thead>
                <tbody>
                {props.guestOrders.map((order, idx) =>
                <tr>
                    <td className="guest-table-td">{order.guestName}</td>
                    <td className="guest-table-td">{order.restaurant}</td>
                    <td className="guest-table-td">{order.menuItem}</td>
                </tr> 
                )}

                </tbody>
            </table>
)
}

export default SubmitOrderTally;