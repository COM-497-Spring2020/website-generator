import { mongo } from 'mongoose';
import React, {Component} from 'react';
import './InputForm.css';

class InputForm extends Component {
    state = {
        restaurant_name: "",
        restaurant_nameError: "",
        // Phone_number: "",
        // Phone_numberError: "",
        // About: "",
        // AboutError: "",
        // date_opened: "",
        // date_openedError: "",
        // street_address: "",
        // street_addressError: "",
        // city: "",
        // cityError: "",
        // state: "",
        // stateError: "",
        // Menu: "",
        // MenuError: "",
        // Logo: "",
        // LogoError: ""
    };

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    validate = () => {
        let isError = false;
        const errors = {
            restaurant_nameError: "",
            // Phone_numberError: "",
            // AboutError: "",
            // date_openedError: "",
            // street_addressError: "",
            // cityError: "",
            // stateError: "",
            //MenuError: "",
            //LogoError: ""
        };

        if (this.state.restaurant_name.length > 5) {
            isError = true;
            errors.restaurant_nameError = "Restaurant name is too long.";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    onSubmit = e => {
        e.preventDefault();
        const err = this.validate();
        if(!err) { //clears the form
        this.setState({
            restaurant_name: "",
            restaurant_nameError: "",
            // Phone_number: "",
            // Phone_numberError: "",
            // About: "",
            // AboutError: "",
            // date_opened: "",
            // date_openedError: "",
            // street_address: "",
            // street_addressError: "",
            // city: "",
            // cityError: "",
            // state: "",
            // stateError: "",
            // Menu: "",
            // MenuError: "",
            // Logo: "",
            // LogoError: ""
        });
        this.props.onChange({
            restaurant_name: "",
            // Phone_number: "",
            // About: "",
            // date_opened: "",
            // street_address: "",
            // city: "",
            // state: "",
            // Menu: "",
            // Logo: ""
        });
    }
};

    render() {
    return (
        <div className="form">
            <h3>Input form for restaurant website</h3>
            <h4>Enter your restaurant details and files to be displayed into the chosen template</h4>
            <div>
                <form id="input" method="post" onSubmit={this.handleSubmit} >
                    <div className="form-input">
                        <p><strong>General information:</strong></p><br></br>
                        <label for="restaurant_name">Restaurant Name:</label>
                        <input name="restaurant_name" className="restaurant_name" placeholder="Enter restaurant name" type="text" autofocus value={this.restaurant_name} onChange={e => this.change(e)} errorText={this.state.restaurant_nameError} />
                    
                        <label for="Phone_number">Phone number:</label>
                        <input name="Phone_number" className="phone_number" placeholder="Enter Phone Number" type="number" value={this.state.Phone_number} onChange={this.handleChange} />

                        <label for="About">Enter information about your restaurant:</label>
                        <input name="About" className="About" placeholder="Type here" type="text" maxLength="3500" value={this.state.About} onChange={this.handleChange}/>

                        <label for="date_opened">Enter opening date:</label>
                        <input name="date_opened" className="date_opened" placeholder="Enter date" type="date" value={this.state.date_opened} onChange={this.handleChange} />

                        <p><strong>Restaurant address details:</strong></p><br></br>
                        <label for="street_address">Enter street address:</label>
                        <input name="street_address" className="street_address" placeholder="Enter streetname" type="text" value={this.state.street_address} onChange={this.handleChange} />

                        <label for="city">Enter city:</label>
                        <input name="city" className="city" placeholder="Enter cityname" type="text" value={this.state.city} onChange={this.handleChange} />

                        <label for="state">Enter state:</label>
                        <input name="state" className="state" placeholder="Enter statename" type="text" value={this.state.state} onChange={this.handleChange} />

                        <p><strong>Files to be added:</strong></p><br></br>
                        <label for="Menu">Enter your restaurant menu:</label>
                        <input name="Menu" className="Menu" placeholder="Enter menu pdf file" type="file" onChange={this.handleChange} />

                        <label for="Logo">Enter your restaurant logo:</label>
                        <input name="Logo" className="Logo" placeholder="Enter logo .png or .jpg file" type="file" onChange={this.handleChange} />
                        
                        <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    )
    }
}

export default InputForm
