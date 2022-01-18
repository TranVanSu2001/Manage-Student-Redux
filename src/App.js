import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ManageStudent from "src/page/ManageStudentRedux";
import ManageCv from "src/page/ManageCv";
import HomePage from "src/page/HomePage";
import ListPost from "src/page/ListPost";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/managestu" component={ManageStudent} />
        <Route exact path="/cv" component={ManageCv} />
        <Route exact path="/post" component={ListPost} />
      </Switch>
    </Router>
  );
};

export default App;
