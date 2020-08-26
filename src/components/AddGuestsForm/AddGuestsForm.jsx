import React from 'react';

const AddGuestsForm = (props) => {
    return (
        <form>
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