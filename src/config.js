import useForceUpdate from "use-force-update";

export const contacts = [
  {
    name: "Default Name",
    phoneNumber: "5554445544",
    email: "test@helio.com",
    id: 0
  }
];

export let myCounter = 1;

export const addContact = contact => {
  myCounter++;
  return contacts.push(contact);
};

export const getContacts = () => {
  return contacts;
};

export const deleteContact = value => {
  const key = "id";
  const index = contacts.findIndex(obj => obj[key] === value);
  if (index !== -1) {
    return contacts.splice(index, 1);
  }
};

export const editContact = (contact, id) => {
  const key = "id";
  const index = contacts.findIndex(obj => obj[key] === id);
  if (index !== -1) {
    return contacts.splice(index, 1, contact);
  }
};

export const groups = [];

export const addGroup = (newGroup) => {
  const key = 'groupName';
  const value = groups.find(obj => obj[key] === newGroup);
  console.log('from AG', value)
  if (value != newGroup || value === 'test'){
  return groups.push(newGroup);
  }else alert (`invalid group name`)
};

export const getGroups = () => {
  return groups;
};

export const addMember = (name, id) => {
  console.log('config AM', name, id)
  const key = "groupName";
  const value = groups.find(obj => obj[key] === name);
  console.log('from bel', value)
  if (value != undefined) {
    alert(`contact added to ${name}`)
    return value.members.push(id);
  }
  return "not found";
};

export const deleteGroup = name => {
  const key = "groupName";
  const index = groups.findIndex(obj => obj[key] === name);
  if (index !== -1) {
    return groups.splice(index, 1);
  }
  return "not found";
};
