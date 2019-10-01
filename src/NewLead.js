import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { myCounter, addContact } from "./config";

class NewLead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      redirect: false,
      id: myCounter
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { redirect, ...contact } = this.state;
    addContact(contact);
    this.setState({ redirect: true });
  };
  callRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div className="newContact">
        {this.callRedirect()}
        <h1>Create New Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="input"
            name="name"
            placeholder="Name"
            required
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
          />&nbsp;
          <button type="submit"> Submit </button>&nbsp;
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}
export default NewLead;
