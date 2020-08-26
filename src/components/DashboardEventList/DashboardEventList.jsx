import React from 'react';

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
            <tr>
                <td>Event Name data</td>
                <td>Guests data</td>
                <td>Time/Date Data</td>
                
                <button>Cancel ❌</button>
                <button>Edit ✏️</button>
            
            </tr>
            </tbody>
        </table>
  </div>
    )
}

export default DashboardEventList;