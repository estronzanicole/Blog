import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/">
                        Home
                        </NavLink>
                    <NavLink exact to="/mystory">
                        My Story
                            </NavLink>
                    <NavLink exact to="/contact">
                        Contact
                        </NavLink>


                </div>

                <div className="right-side">
                    <NavLink exact to="/blog">
                        <FontAwesomeIcon icon="book" />
                        My BLOG
                    </NavLink>
                </div>
            </div>
        )

    }
}



