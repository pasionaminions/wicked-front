import React from "react";
import List from "./List";
import {Navbar} from "reactstrap";

const App = () => (
    <div>
      <Navbar style={{backgroundColor: "#FF9326", color: "white"}} light expand="md"> 
        <h1>Pasiona</h1>
      </Navbar>
      <List/>
    </div>
  );
  export default App;