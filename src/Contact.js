import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your contact details have been received.\n\nName: ${this.state.name}\nEmail: ${this.state.email}\nMessage: ${this.state.message}`);
    }

    render() {
        return (
            <div className="Contact">
                <h1>Contact Us</h1>
                <h2>Get in Touch</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input type="email" name="email" onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Message:
                        <textarea name="message" onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Contact;