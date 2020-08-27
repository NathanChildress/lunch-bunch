import React from 'react';
import AddGuestsForm from '../../components/AddGuestsForm/AddGuestsForm';
import { Link } from 'react-router-dom';

class AddGuestsPage extends React.Component {
    render () {
        return (
            <div>
                <h3>Add Your Guests</h3>
<<<<<<< HEAD
<<<<<<< HEAD
                <AddGuestsForm /><br/>
=======
=======
>>>>>>> fc8804006c16e3f5c00e5c0847091fd7e164a588
                <AddGuestsForm 
                    user={this.props.user}
                    events={this.props.events}
                    handleGetUserEvents={this.props.handleGetUserEvents}
                />
<<<<<<< HEAD
>>>>>>> e03e5563c2f28df8e4bb007c3b5efe1337356863
=======
>>>>>>> fc8804006c16e3f5c00e5c0847091fd7e164a588
                <Link to="add-food-order" className='NavBar-link'>Next: Add Order</Link> 
            </div>
        )
    }
}

export default AddGuestsPage;
