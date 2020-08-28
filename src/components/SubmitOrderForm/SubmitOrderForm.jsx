import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EventsService from '../../utils/eventsService'
import './SubmitOrderForm.css';

class SubmitOrderForm extends Component {
    constructor(props){
        super(props)
        this.state= {
            name: "",
            location: "",
            restaurant: 3,
            menuItem: "",
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

      handleSubmit = async(event) => {
        console.log('A name was submitted: ' + this.state.name);
        event.preventDefault();
        try {
            await EventsService.updateEvent({
                "name": this.state.name,
                "owner": this.props.user._id,
                "eventTime": this.state.eventTime,
                "guests" : [{
                    name: this.state.guest1,
                    address: this.state.location1
                    },{
                        name: this.state.guest2,
                        address: this.state.location2
                    }, {
                        name: this.state.guest3,
                        address: this.state.location3
                    }
                ]
                
            });
        } catch(err) {
            console.log(err)
        }
        this.props.history.push('/dashboard');
      } 

      
    render() {
        return (
            <div className="order-form">
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
                            <option value={item}> {item} </option> 
                            )}
                        </select>
                    </td>
                </tr>
               </>
            </table>
            <Link to="order-confirmation" className='NavBar-link'>
            <button>
            
            Submit Order
            </button>
        </Link>
        </div>
        </div>

        )
    }
}

export default SubmitOrderForm;