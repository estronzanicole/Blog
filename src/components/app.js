import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navigation/navbar"



import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Blog from "./pages/Blog";
import NoMatch from "./pages/no-match";
import Icons from "../helpers/icons";
import UserPage from "./pages/UserPage"


class App extends Component {
  constructor() {
    super();

    Icons()

  }

  render() {

    return (
      <div className='container'>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Blog" component={Blog} />
              <Route path="/nomatch" component={NoMatch} />
              <Route exact path="/plugins/my-plugin/user/:id" component={UserPage} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;