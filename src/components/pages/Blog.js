import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

class Blog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogItems: []
        }
        this.getBlogItems = this.getBlogItems.bind(this);

    }
    getBlogItems() {
        axios.get("http://localhost:1337/my-blogs/", {
            withCredentials: true
        }).then(response => {
            console.log("response", response)
        }).catch(error => {
            console.log("getBlogItems error", error);
        })
    }

    componentWillMount() {
        this.getBlogItems();
    }

    render() {
        return (
            <div>

            </div>



        )
    }
}
export default Blog;