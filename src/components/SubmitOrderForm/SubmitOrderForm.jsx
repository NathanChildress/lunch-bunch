import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubmitOrderForm extends Component {
    constructor(props){
        super(props)
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