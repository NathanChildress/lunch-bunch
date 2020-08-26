import React from 'react';


const GuestsTable = () => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name data</td>
          <td>Address data</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  )

export default GuestsTable;