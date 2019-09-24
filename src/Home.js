import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./App.css";
import useForceUpdate from "use-force-update";
import { deleteContact, getGroups, getContacts, addMember } from "./config";

const Home = () => {
  const [redirect, setRedirect] = useState(false);
  const [stateContact, setPassContact] = useState();
  const [form, setValues] = useState({
    groupName: "",
    members: [],
    contact: ""
  });
  const forceUpdate = useForceUpdate();

  const update = () => {
    return forceUpdate();
  };

  const handleChange = e =>
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });

  const contacts = getContacts().map(contact => (
    <div className="contact">
      <h3>{contact.name}</h3>
      <div>Email: {contact.email} </div>
      <div>Phone: {contact.phoneNumber}</div>
      <br />
      <select
        name="groupName"
        onChange={handleChange}
      >
        <option>--select group--</option>
        {getGroups().map(group => (
          <option>{group.groupName}</option>
        ))}
      </select>&nbsp;
      <button
        onClick={() => {
          addMember(form.groupName, contact.id);
          update();
        }}
      >
        add
      </button>&nbsp;
      <Link to="/groups">
        <button>View Groups</button>
      </Link>

      <br />
      <br />
      <button
        onClick={() => {
          handleRedirect(contact);
        }}
      >
        Edit
      </button>&nbsp;

      <button
        onClick={() => {
          deleteContact(contact.id);
          update();
        }}
      >
        Delete
      </button>
    </div>
  ));

  const handleRedirect = contact => {
    setRedirect(true);
    setPassContact(contact);
    
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={{ pathname: "/update", state: { stateContact } }} />;
    }
  };

  return (
    <div>
      {renderRedirect()}
      <h1>Welcome to your contacts list</h1>

      <Link to="/newlead">
        <button>+New Contact</button>
      </Link>&nbsp;
      <Link to="/groups">
        <button>+New Group</button>
      </Link><br/><br/>

      <div className='contactFlex'>
        {contacts}
      </div>
    </div>
  );
};

export default Home;
