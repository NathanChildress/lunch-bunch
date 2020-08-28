import React, { Component } from 'react';
import eventsService from '../../utils/eventsService';

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
        <form onSubmit={this.handleSubmit}>
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
        </form>
        );
    }
}

export default CreateNewEventForm;

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