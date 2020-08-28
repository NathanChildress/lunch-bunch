import React, { Component } from 'react';
import eventsService from '../../utils/eventsService';
import './CreateNewEventForm.css';

class CreateNewEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {};
        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    handleSubmit = async(event) => {
        console.log('A name was submitted: ' + this.state.name);
        event.preventDefault();
        try {
            await eventsService.create({
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
        this.props.history.push('/Dashboard');
      }

      isFormInvalid() {
        return !(
                this.state.name 
                && this.state.eventTime 
                && this.state.guest1 
                && this.state.location1
                && this.state.guest2 
                && this.state.location2
                && this.state.guest3
                && this.state.location3
                );
      }

    render () {
        return (
        <form className="dash-form" onSubmit={this.handleSubmit}>
            <header className="dash-header">New Event</header>
                <p class="dash-text">
                <span>
                <i><img className="dash-img" src="https://i.imgur.com/2OB3dfx.png" alt=""/></i>
                </span>
                </p>
                <input className="dashboard-input" type="text" name="name" placeholder="Name of Event" onChange={this.handleChange}/>
            {/* <label className="select-order">Delivery Date/Time:&nbsp;</label> */}
            <input className="dashboard-input" type="datetime-local" name="eventTime" onChange={this.handleChange}/>
            {/* <table>
                <tr> */}
                    <input  className="dashboard-input" type="text" name="guest1" placeholder="Guest Name 1"  onChange={this.handleChange}/>
                    <input className="dashboard-input" type="text" name="location1" placeholder="Address" onChange={this.handleChange}/>
            {/* </tr>
            <tr> */}
                    <input className="dashboard-input" type="text" name="guest2" placeholder="Guest Name 2"  onChange={this.handleChange}/>
                    <input className="dashboard-input" type="text" name="location2" placeholder="Address" onChange={this.handleChange}/>
            {/* </tr>
            <tr> */}
                <input className="dashboard-input" type="text" name="guest3" placeholder="Guest Name 3"  onChange={this.handleChange}/>
                    <input className="dashboard-input" type="text" name="location3" placeholder="Address" onChange={this.handleChange}/>
            {/* </tr>
            </table> */}
            
            <button className="signup-submit" disabled={this.isFormInvalid()}>Create Event</button>
             <br/>
        </form>
        
        );
    }
}

export default CreateNewEventForm;


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
</div> */}

{/* <form onSubmit={this.handleSubmit}>
<label className="select-order">
    Name of Event:&nbsp;
    <input type="text" name="name" onChange={this.handleChange}/>

</label><br/><br/>

<label className="select-order">Delivery Date/Time:&nbsp;</label>
<input type="datetime-local" name="eventTime" onChange={this.handleChange}/>
<table>
    <tr>
    <label className="select-order"> Guest Name:&nbsp;
        <input type="text" name="guest1" onChange={this.handleChange}/>
    </label>
    <label className="select-order">Address: &nbsp;
        <input type="text" name="location1" onChange={this.handleChange}/>
    </label>
</tr>
<tr>
    <label className="select-order"> Guest Name:&nbsp;
        <input type="text" name="guest2" onChange={this.handleChange}/>
    </label>
    <label className="select-order">Address: &nbsp;
        <input type="text" name="location2" onChange={this.handleChange}/>
    </label>
</tr>
<tr>
    <label className="select-order"> Guest Name:&nbsp;
    <input type="text" name="guest3" onChange={this.handleChange}/>
    </label>
    <label className="select-order">Address: &nbsp;
        <input type="text" name="location3" onChange={this.handleChange}/>
    </label>
</tr>
</table>

<button className="btn btn-default" disabled={this.isFormInvalid()}>Create Event</button>
 <br/>
</form> */}