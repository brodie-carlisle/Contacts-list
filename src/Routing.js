import React from "react";
import { Route, Switch } from "react-router-dom";
import NewLead from "./NewLead"
import Home from "./Home"
import Groups from "./Groups"
import Update from "./Update"


function Routing(){ 
  return(
    <Switch>
      <Route exact path="/" 
      component={Home}/>
      <Route path ="/newlead" 
      component={NewLead} />
      <Route path ="/groups" 
      component={Groups} />
      <Route path="/update" component={Update} />
    </Switch>
  )
}
export default Routing