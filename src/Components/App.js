import React from "react";
import List from "./List";
import Details from "./Details"
import Form_edit from "./Form_edit"
import { Navbar } from "reactstrap";
import {
  BrowserRouter,
  Route,
  useParams,
  Switch
} from "react-router-dom";

function Detaills() {

  let { id } = useParams();

  return (
    <Details id={id} />
  );
}

function Edit() {

  let { id } = useParams();

  return (
    <Form_edit id={id} />
  );
}

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/edit:id" component={Edit} />
        <Route exact path="/details:id" component={Detaills} />
      </Switch>
    </BrowserRouter>
    <Navbar style={{ backgroundColor: "#FF9326", color: "white" }} light expand="md">
      <h1>Pasiona</h1>
    </Navbar>
    <List />
  </div>
);
export default App;