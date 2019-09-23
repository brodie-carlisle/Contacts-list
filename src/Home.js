import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./App.css";
import useForceUpdate from "use-force-update";
import { deleteContact, getGroups, getContacts, addMember } from "./config";

const Home = ({}) => {
  // const contacts=getContacts()
  const [redirect, setRedirect] = useState(false);
  const [stateContact, setPassContact] = useState();
  const [form, setValues] = useState({
    groupName: "",
    members: [],
    contact: ""
  });
  const forceUpdate = useForceUpdate();

  const update = () => {
    console.log("update");
    return forceUpdate();
  };

  const handleChange = e =>
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  console.log(form);

  const contacts = getContacts().map(contact => (
    <div className="contact">
      <h3>{contact.name}</h3>
      <div>Email: {contact.email} </div>
      <div>Phone: {contact.phoneNumber}</div>
      <br />
      {/* <div>Lead Status: {contact.status}</div> */}
      {/* <div>ID: {contact.id}</div> */}
      <select
        name="groupName"
        // value={form.groupName}
        onChange={handleChange}
      >
        <option>---group---</option>
        {getGroups().map(group => (
          <option>{group.groupName}</option>
        ))}
      </select>
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
        Edit Lead
      </button>

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
    console.log("from handleRedirect", stateContact);
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
      </Link>
      <Link to="/groups">
        <button>+New Group</button>
      </Link>

      <div>
        <br />
        {contacts}
      </div>
    </div>
  );
};

export default Home;
