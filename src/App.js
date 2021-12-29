import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ManageStudent from "../src/page/ManageStudentRedux/index";
import ManageCv from "../src/page/ManageCv/index";

const Index = () => <h2>ahiui</h2>;
const App = () => {
  return (
    <Router>
      <Switch>
        {" "}
        <Route exact path="/" component={ManageStudent} />
        <Route path="/cv" component={ManageCv} />
      </Switch>
    </Router>
  );
};

export default App;
