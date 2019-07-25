import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Blog/>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
