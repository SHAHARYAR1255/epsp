/*!

=========================================================
* MERNDAY
=========================================================

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

// import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import About from "views/examples/Profile.js";
// import Register from "views/examples/Register.js";
// import Store from "views/examples/Store.js";
// import { AuthProvider } from "./Firebase/context";
import SimpleFooter from './components/Footers/SimpleFooter';
import DemoNavbar from './components/Navbars/DemoNavbar';

ReactDOM.render(
  // <AuthProvider>
    <BrowserRouter>
    <DemoNavbar />
      <Switch>
        {/* <Route path="/" exact render={(props) => <Index {...props} />} /> */}
        <Route path="/" exact render={(props) => <Landing {...props} />} />
        {/* <Route path="/store" exact render={(props) => <Store {...props} />} /> */}
        <Route
          path="/test"
          render={(props) => <Login {...props} />}
        />
        <Route path="/about" exact render={(props) => <About {...props} />} />
        {/* <Route
          path="/register"
          exact
          render={(props) => <Register {...props} />}
        /> */}
        <Redirect to="/" />
      </Switch>
      <SimpleFooter />
    </BrowserRouter>
  // </AuthProvider>
  ,document.getElementById("root")
);
