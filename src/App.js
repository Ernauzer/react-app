import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

import Form from "./components/Form/Form";

import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

class App extends React.Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Form>
          <Route path="/SignUp" component={SignUp} />
          <Route path="/SignIn" component={SignIn} />
        </Form>
      </BrowserRouter>
    );
  }
}

export default App;
