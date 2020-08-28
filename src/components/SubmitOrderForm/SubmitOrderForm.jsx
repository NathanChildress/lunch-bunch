import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

      
    render() {
        return (
            <div>
                {this.props.name}<br></br>
                <label>Select your Guest</label>
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
        )
    }
}

export default SubmitOrderForm;