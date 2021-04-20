import React, { Component } from 'react';
import './ContactForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ContactForm extends Component {

    constructor() {
        super()
    
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        alert('Email successfully sent!')

        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }

    render() {
    return (
        <div className="form">
            <h3>Quick Contact</h3>
            <h4>Contact us today and one of our team members will be with you shortly!</h4>
            <div>
                <form id="contact" method="post" onSubmit={this.handleSubmit}>
                    <div className="form-contact">
                        <label for="name">Name:</label>
                        <input name="name" className="name" placeholder="Enter name" type="text" required="require" autofocus onChange={this.handleChange} />
                    
                        <label for="email">Email Address:</label>
                        <input name="email" className="email" placeholder="Enter Email Address" type="email" required="require" onChange={this.handleChange} />

                        <label for="message">Enter your message here:</label>
                        <input name="message" className="message" placeholder="Type here" type="textarea" required="require" onChange={this.handleChange} />
                        
                        <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    )
    }
}

export default ContactForm;
