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
                <tr>
                    <td className="guest-table-td">test</td>
                    <td className="guest-table-td">test</td>
                    <td className="guest-table-td">test</td>
                </tr>
                <tr>
                    <td className="guest-table-td"></td>
                    <td className="guest-table-td"></td>
                    <td className="guest-table-td"></td>
                </tr>
                <tr>
                    <td className="guest-table-td"></td>
                    <td className="guest-table-td"></td>
                    <td className="guest-table-td"></td>
                </tr>
                </tbody>
            </table>
)
}

export default SubmitOrderTally;