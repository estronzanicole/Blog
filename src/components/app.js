import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Strapi from 'strapi-sdk-javascript/build/main';

import Navbar from "./Navigation/navbar"

import Home from "./pages/Home";
import MyStory from "./pages/MyStory";
import Contact from "./pages/contact";
import Blog from "./pages/Blog";
import NoMatch from "./pages/no-match";
import Icons from "../helpers/icons";


const strapi = new Strapi('http://localhost:1337');



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }

    Icons()
  }

  async componentDidMount() {
    try {
      const posts = await strapi.getEntries('myblogs')
      this.setState({ posts });
    }
    catch (err) {
      alert(err);
    }
  }


  render() {
    return (
      <div className='container'>
        <Router>
          <div className="App">
            <section>
              {this.state.posts.map(post => {
                <article>
                  <div>Title: {post.title}</div>
                  <div>Content: {post.content}</div></article>
              })}
            </section>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path="/mystory" component={MyStory} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Blog" component={Blog} />
              <Route path="/nomatch" component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>

    )

  }
}



export default App;