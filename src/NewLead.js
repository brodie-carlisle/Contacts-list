import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import {myCounter, addContact } from "./config"



class NewLead extends Component {
  constructor(props) {
    super(props);
  this.state  = {
    name: "",
    phoneNumber: "",
    email: "",
    // status: "",
    redirect: false,
    id: myCounter
  };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log("NLHC", this.state)
  };

  handleSubmit = e => {
    e.preventDefault();
    const {redirect, ...contact}=this.state
    addContact(contact)
    this.setState({redirect: true})
  };
  callRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/"/>
    }
  };

  render() {
    return (
      <div>
        {this.callRedirect()}
        <Link to="/">Home</Link>
        <h1>New Lead</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="input"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={this.state.phoneNumber}
            onChange={e => this.handleChange(e)}
          />
          <input
            type="email"
            name="email"
            placeholder="email address"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          {/* <select
            name="status" 
            value={this.state.status} 
            onChange={e => this.handleChange (e)}
            >
            <option value=''></option>
            <option value="prospect">Prospect</option>
            <option value="contacted">Contacted</option>
            <option value="Offer Presented">Offer Presented</option>
            <option value="Closed">Closed</option>
          </select> */}
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}
export default NewLead;
