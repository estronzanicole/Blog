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
        axios.get("https://cors-anywhere.kerokuapp.com/https://stark-dusk-53991.herokuapp.com/my-blogs", {
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