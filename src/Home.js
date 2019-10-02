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
      {/* <br /> */}
      <select
        className ="select"
        name="groupName"
        // value={form.groupName}
        onChange={handleChange}
      >
        <option >--select group--</option>
        {getGroups().map(group => (
          <option >{group.groupName}</option>
        ))}
      </select>
      <button
        onClick={() => {
          addMember(form.groupName, contact.id);
          setValues({ ...form, groupName: ""});
          // console.log(form)
          update();
        }}
      >
        add
      </button><br/><br/>
      <Link to="/groups">
        <button>Manage Groups</button>
      </Link>
      <br />
      <button
        onClick={() => {
          handleRedirect(contact);
        }}
      >
        Edit Contact
      </button>&nbsp;

      <button
        onClick={() => {
          deleteContact(contact.id);
          update();
        }}
      >
        Delete Contact
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
    <div className="home">
      {renderRedirect()}
      <h1>Welcome to your contacts list</h1>

      <Link to="/newlead">
        <button>+New Contact</button>
      </Link>&nbsp;
      <Link to="/groups">
        <button>Manage Groups</button>
      </Link><br/><br/>

      <div className='contactFlex'>
        {contacts}
      </div>
    </div>
  );
};

export default Home;
