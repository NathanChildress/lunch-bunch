import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EventsService from '../../utils/eventsService'
import './SubmitOrderForm.css';
import SubmitOrderTally from '../SubmitOrderTally/SubmitOrderTally';

class SubmitOrderForm extends Component {
    constructor(props){
        super(props)
        this.state= {
            name: "",
            location: "",
            restaurant: 0,
            menuItem: 0,
            guestOrders: [],
            shops: [
                {
                    name: "Chipotle",
                    items: ["Burrito","Bowl","Quesadillas"]

                }, {
                    name: "Jimmy Johns",
                    items: ["The Pepe","Big John","Totally Tuna", "Turkey Tom", "Vito", "The Veggie"]
                }, {
                    name: "Panda Express",
                    items: ["Orange Chicken","Honey Sesame Chicken","String Bean Chicken",
                     "Sweet Fire Chicken", "Black Pepper Angus Steak", "Mushroom Chicken",
                    "Black Pepper Chicken", "Grilled Teriyaki Chicken", "Chow Mein", "Fried Rice",
                    "Steamed Rice"] 
                }, {
                    name: "",
                    items: []
                }

            ],
        }
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

      handleClick = (e) => {
        let newOrder = {
            guestName : this.state.guest.name,
            guestId : this.state.guest._id,
            restaurant : this.state.shops[this.state.restaurant].name,
            menuItem : this.state.shops[this.state.restaurant].items[this.state.menuItem]
        }
        const currentOrders = this.state.guestOrders.concat(newOrder);
        this.setState({ guestOrders : currentOrders })

          
      }

      handleSubmit = async(event) => {
        console.log('A name was submitted: ' + this.state.name);
        event.preventDefault();
        try {
            console.log("attempting to update")
            await EventsService.updateEvent(this.props._id, this.state.guest.name, {
                "guests" : this.state.guestOrders
                
            });
        } catch(err) {
            console.log(err)
        }
        //this.props.history.push('/dashboard');
      } 

      
    render() {
        return (
            <div className="order-form">
            <SubmitOrderTally
                guestOrders={this.state.guestOrders}
            />
            <div>
            <table>

                <>
                <tr>
                    <td>{this.state.name}</td>
                    <td>
                        <select className="sel-guest" name="restaurant" onChange={this.handleChange}>
                        <option value="selected">Select Restaurant</option>

                        {this.state.shops.map((shop, idx) =>
                            <option value={idx}> {shop.name} </option> 
                            )}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>{this.state.location}</td>
                    <td>
                        <select className="sel-guest" name="menuItem" >
                    <option value="selected">Select Menu Item</option>
                            
                        {this.state.shops[this.state.restaurant].items.map((item, idx) =>
                            <option value={idx}> {item} </option> 
                            )}
                        </select>
                    </td>
                </tr>
                <tr>
                    <button className='order-submit-btn' name="guestOrder" onClick={this.handleClick}>Add Guest Order</button>
                </tr>
               </>
            </table>
                {this.props.name}<br></br>
                <select placeholder="Select Guest" className="sel-guest" name="guest" onChange={this.handleChange}>
                    <option value="selected">Select Guest</option>
                {(this.props.guests || [{name: ""}]).map((guest, idx) =>
                <option value={JSON.stringify(guest)}> {guest.name} </option> 
                )}
                </select>
            <Link to="order-confirmation" className='NavBar-link' onClick={this.handleSubmit}>
            <button className='order-submit-btn'>
            
            Submit Order
            </button>
        </Link>
        </div>
        </div>

        )
    }
}

export default SubmitOrderForm;

{/* <div>
<form className="signup-form" onSubmit={this.handleSubmit} >
<header className="signup-header">Sign Up</header>
  <p class="signup-text">
    <span>
      <i><img src="https://i.imgur.com/2OB3dfx.png" alt=""/></i>
    </span>
  </p>
      <input type="text" className="signup-username" autofocus="true" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
      <input type="email" className="signup-username" autofocus="true" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
      <input type="password" className="signup-password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
      <input type="password" className="signup-password" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
      <Link className="cancel-link" to='/'>Cancel</Link>
      <button className="signup-submit" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp; 
</form>
</div>



<div className="order-form">
<SubmitOrderTally
    guestOrders={this.state.guestOrders}
/>
<div>
    {this.props.name}<br></br>
    <label className="select-order">Select Guest:</label>
    <select name="guest" onChange={this.handleChange}>
    {(this.props.guests || [{name: ""}]).map((guest, idx) =>
    <option value={JSON.stringify(guest)}> {guest.name} </option> 
    )}
    </select>
<table>

    <>
    <tr>
        <td>{this.state.name}</td>
        <td>
            <select name="restaurant" onChange={this.handleChange}>
            {this.state.shops.map((shop, idx) =>
                <option value={idx}> {shop.name} </option> 
                )}
            </select>
        </td>
    </tr>
    <tr>
        <td>{this.state.location}</td>
        <td>
            <select name="menuItem" >
            {this.state.shops[this.state.restaurant].items.map((item, idx) =>
                <option value={idx}> {item} </option> 
                )}
            </select>
        </td>
    </tr>
    <tr>
        <button name="guestOrder" onClick={this.handleClick}>Add Guest Order</button>
    </tr>
   </>
</table>
<Link to="order-confirmation" className='NavBar-link' onClick={this.handleSubmit}>
<button>

Submit Order
</button>
</Link>
</div>
</div>  */}