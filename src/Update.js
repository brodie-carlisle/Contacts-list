import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { editContact } from "./config";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.location.state.stateContact.name,
      phoneNumber: this.props.location.state.stateContact.phoneNumber,
      email: this.props.location.state.stateContact.email,
      // status: this.props.location.state.stateContact.status,
      redirect: false,
      id: this.props.location.state.stateContact.id
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log("top of HS");
    e.preventDefault();
    const { redirect, ...contact } = this.state;

    editContact(contact, this.state.id);
    this.setState({ redirect: true });
  };
  callRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        {this.callRedirect()}
        <h1>Edit Contact</h1>
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
          <button type="submit"> Submit </button>&nbsp;
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}
export default Update;
