import React, { Component } from 'react';
import SubmitOrderForm from '../../components/SubmitOrderForm/SubmitOrderForm';
import './AddFoodOrderPage.css'

class AddFoodOrderPage extends Component {
    constructor (props) {
        super(props);
        this.state= {
            event: {
                name: ""
            }
        };


        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
            //[Quick & Dirty], take stringified object and parse it back into object 
          [e.target.name]: JSON.parse(e.target.value)
        });
      }
    
    
    
    render() {
        return (
            <div>
                <h3 className="order-heading">Add your Order 🍔</h3>
                <label className="select-order">Select your event: </label>
                <select name="event" onChange={this.handleChange}>
                {(this.props.events || []).map((event, idx) =>
                <option value={JSON.stringify(event)}> {event.name} </option> 
                )}
                </select>
                    <br></br>
                    
                    
                

                <SubmitOrderForm 
                    {...this.state.event}
                />
            </div>
            
    )
    };
}

export default AddFoodOrderPage;

