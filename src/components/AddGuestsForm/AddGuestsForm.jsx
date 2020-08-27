import React from 'react';

const AddGuestsForm = (props) => {
    return (
        <form>
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
            </table><br/><br/>
            <label>Name:</label>
            <input type="text" name="name" value="" />
            <br/>
            <label>Address:</label>
            <input type="text" name="address" value="" />
            <br/>
            <button>Add new guest</button>

        </form>
    )
}

export default AddGuestsForm;