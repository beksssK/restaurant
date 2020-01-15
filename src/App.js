import React, {Fragment} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Main from "./containers/Main/Main";

function App() {
  return (
      <Fragment>
          <Switch>
              <Route path='/' component={Main}/>
          </Switch>
      </Fragment>
  );
}

export default App;
