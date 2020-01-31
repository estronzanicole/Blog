import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                        <div className="nav-link-wrapper">
                            <NavLink exact to="/my-story">
                                My Story
                        </NavLink>
                        </div>
                        <div className="nav-link-wrapper">
                            <NavLink exact to="/contact">
                                Contact
                        </NavLink>
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="nav-link-wrapper">
                            <NavLink exact to="/blog">
                                <FontAwesomeIcon icon="book" />
                                My BLOG
                        </NavLink>
                        </div>
                        {false ? <button>Add Blog</button> : null}

                    </div>
                </div>
            </div>
        )
    }
}
