import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewLead from "./NewLead"
import Home from "./Home"
import Groups from "./Groups"
import Update from "./Update"
import { addContact, contacts, getContacts, addGroup, myCounter } from "./config"


function Routing(){
  return(
    <Switch>
      <Route exact path="/" 
      component={()=> <Home getContacts={getContacts}/>}/>

      <Route path ="/newlead" 
      component={()=> <NewLead addContact={addContact}/>} />
      <Route path ="/groups" 
      component={()=> <Groups addGroup={addGroup}  
       myCounter={myCounter}
      />} />
      <Route path="/update" component={Update} />
    </Switch>
  )
}
export default Routing