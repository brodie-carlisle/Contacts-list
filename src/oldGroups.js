import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  getGroupNames,
  addGroup,
  getGroups,
  getContacts,
  addMember
} from "./config";

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: "",
      members: [],
      contact: "",
      contactId: ""
    };
  }


  getGroup = () => {
    console.log('top of GG')
    return getGroups().map(group => (
      <div>
        <h3>{group.groupName}</h3>
        <div>{group.members} </div>
        <select
          name="contact"
          value={this.state.contact}
          onChange={e => this.handleChange(e)}
        >
          <option>---select contact---</option>
          {getContacts().map(contact => (
            <option>{contact.name}</option>
          ))}
        </select>
        <button type="button" onSubmit={console.log('from button GG', this.state)}>+add</button>
      </div>
    ));
  };


  handleChange = e => {
    console.log('from HC', this.state)
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.state)
  };

  handleSubmit = e => {
    console.log('from HS')
    e.preventDefault();
    // console.log(this.state);
    addGroup(this.state);
    // this.forceUpdate();
    // this.getGroup()
  };

  render() {
    // {this.getGroup()}
    return (
      <div className="App">
        
          <Link to="/">Home</Link>
        
        <h3>Groups</h3>
        <form>
          <span>+New Group </span>
          <input
            type="text"
            name="groupName"
            placeholder="Group Name"
            onChange={e => this.handleChange(e)}
          ></input>
          <button type="submit" onClick={e => this.handleSubmit(e)}>
            Create Group
          </button>
        </form>

        <div>groups:{this.getGroup()}</div>
      </div>
    );
  }
}

export default Groups;
