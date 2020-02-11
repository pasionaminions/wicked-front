import React from "react";
import Details from "./Details";
import FormEdit from "./FormEdit";
import Main from "./Main";
import {Navbar} from 'reactstrap';

import {
  BrowserRouter,
  Route,
  useParams,
  Switch,
  useHistory
} from "react-router-dom";

function Detaills() {

  let { id } = useParams();
  let history = useHistory();

  return (
    <Details id={id} history={history}/>
  );
}

function Edit() {

  let { id } = useParams();
  let history = useHistory();

  return (
    <FormEdit id={id} history={history}/>
  );
}

const App = () => (
  
  <div>
    <Navbar style={{ backgroundColor: "#FF9326", color: "white" }} light expand="md">
      <img src="https://pasiona.com/wp-content/uploads/2017/02/logo_pasiona-blanco.png" alt="Pasiona" style={{height:70}}></img>
    </Navbar>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/edit/:id?" component={Edit} />
        <Route exact path="/details/:id" component={Detaills} />
      </Switch>
    </BrowserRouter>
    
  </div>
);
export default App;