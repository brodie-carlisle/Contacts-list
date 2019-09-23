import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForceUpdate from "use-force-update";

import {
  deleteGroup,
  addGroup,
  getGroups,
  getContacts,
  addMember
} from "./config";




const Groups = () => {
  const [form, setValues] = useState({ groupName: "", members: [] });
  
  const forceUpdate = useForceUpdate();
  const update = () =>{
    console.log('update')
    return forceUpdate()
  }

  const list = num => {
    const key = "id";
    const cont = getContacts().find(obj => obj[key] === num);
    return cont;
  };

  const handleChange = e =>
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  // console.log(form.contact)

  const handleSubmit = e => {
    e.preventDefault();
    addGroup(form);
    setValues({ ...form, groupName: "", members: [] });
    // forceUpdate();
  };

  const groups = getGroups().map(group => (
    <div>
      <h1>{group.groupName} 
      <Link to="/">
        <button>+Add Contact</button>
      </Link>
      <button onClick={() => {deleteGroup(group.groupName); update();}}
      >Delete Group</button></h1>
      <div>
        {group.members.map(list).map(contact => (
          <div className= 'contact'>
            <h3>{contact.name}</h3>
            <div>Email: {contact.email} </div>
            <div>Phone: {contact.phoneNumber}</div>
          </div>
        ))}
      </div>
    </div>
  ));

 
  return (
    <div className="App">
      <Link to="/">Home</Link>

      <h1>Welcome to Your Groups</h1>
      <form>
        <span>Create New Group </span>
        <input
          type="text"
          name="groupName"
          placeholder="Group Name"
          value={form.groupName}
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={e => handleSubmit(e)}>
          Create Group
        </button>
      </form>

      <div><br/>
        <h2>Groups:</h2>{groups}
        {/* <select>
      {contacts}
      </select> */}
      </div>
    </div>
  );
};

export default Groups;
