import React from "react";
import Details from "./Details"
import Form_edit from "./Form_edit"
import Main from "./Main"

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
        <Route exact path="/" component={Main} />
        <Route exact path="/edit:id" component={Edit} />
        <Route exact path="/details:id" component={Detaills} />
      </Switch>
    </BrowserRouter>
    
  </div>
);
export default App;