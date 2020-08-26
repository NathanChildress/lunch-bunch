import React from 'react';
import AddGuestsForm from '../../components/AddGuestsForm/AddGuestsForm';
import { Link } from 'react-router-dom';

class AddGuestsPage extends React.Component {
    render () {
        return (
            <div>
                <h3>Add Your Guests</h3>
                <AddGuestsForm />
                <Link to="add-food-order" className='NavBar-link'>Next: Add Order</Link> 
            </div>
        )
    }
}

export default AddGuestsPage;
