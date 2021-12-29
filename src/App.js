import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ManageStudent from "../src/page/ManageStudentRedux/index";
import ManageCv from "../src/page/ManageCv/index";
import HomePage from "./page/HomePage/index";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/managestu" component={ManageStudent} />
        <Route exact path="/cv" component={ManageCv} />
      </Switch>
    </Router>
  );
};

export default App;
