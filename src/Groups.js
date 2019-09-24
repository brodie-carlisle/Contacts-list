import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForceUpdate from "use-force-update";

import {
  deleteGroup,
  addGroup,
  getGroups,
  getContacts
} from "./config";




const Groups = () => {
  const [form, setValues] = useState({ groupName: "", members: [] });
  
  const forceUpdate = useForceUpdate();
  const update = () =>{
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

  const handleSubmit = e => {
    e.preventDefault();
    addGroup(form);
    setValues({ ...form, groupName: "", members: [] });
  };

  const groups = getGroups().map(group => (
    <div className="indivGroup" >
      <h1>{group.groupName} 
      </h1>
      <Link to="/">
        <button>+Add Contact</button>
      </Link>&nbsp;
      <button onClick={() => {deleteGroup(group.groupName); update();}}
      >Delete Group</button><br/><br/>
      <div className="contactFlex">
        {group.members.map(list).map(contact => (
          <div className= 'contact'>
            <h3>{contact.name}</h3>
            <div>Email: {contact.email} </div>
            <div>Phone: {contact.phoneNumber}</div><br/>
          </div>
        ))}
      </div><br/>
    </div>
  ));

 
  return (
    <div className="App">
      

      <h1>Welcome to Your Groups</h1>
      <form>
        <span>Create New Group </span>
        <input
          type="text"
          name="groupName"
          placeholder="Group Name"
          value={form.groupName}
          onChange={handleChange}
        ></input>&nbsp;
        <button type="submit" onClick={e => handleSubmit(e)}>
          Create Group
        </button>&nbsp;
        <Link to="/">
        <button>View Contacts</button>
      </Link>
      </form>

      <div className='groups'>
        <h1>Groups:</h1>{groups}
      </div>
    </div>
  );
};

export default Groups;
