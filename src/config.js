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

export const addGroup = newGroup => {
  const key = "groupName";
  const value = groups.find(obj => obj[key] === newGroup.groupName);
  if (value === undefined ) {
    return groups.push(newGroup);
  } else alert(`group name already exists`);
};

export const getGroups = () => {
  return groups;
};

export const addMember = (name, id) => {
  const value = groups.find(({ groupName }) => groupName === name);
  if (value === undefined) {
    return alert(`Unable to find group: '${name}'. Please try another group.`);
  } else if (value.members.find(element => element === id) !== undefined) {
    return alert(`Contact is already in group: '${name}'.`);
  } else alert("contact added to group");
  return value.members.push(id);
};

export const deleteGroup = name => {
  const key = "groupName";
  const index = groups.findIndex(obj => obj[key] === name);
  if (index !== -1) {
    return groups.splice(index, 1);
  }
  return "not found";
};

export const deleteMember = (name, id) =>{
  const value = groups.find(({ groupName }) => groupName === name);
  const index = value.members.findIndex(element => element === id)
    return value.members.splice(index, 1)
  }