import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Blog extends Component {
    constructor(){
       super();
       this.state = {
           blogs:[]
       }
    }
    componentWillMount(){
        axios.get('/api/blog').then(response=>{
            this.setState({
                blogs: response.data
            });
        }).catch(errors=>{
            console.log(errors);
        })
    }
    render() {
        return (
            <div className="container">
                {this.state.blogs.map(blog=><li>{blog.id}. {blog.name}: {blog.body}</li>)}
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Blog />, document.getElementById('example'));
}
