import React, { Component } from 'react';
import CommentBox from '../CommentBox/CommentBox';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <h1>Home</h1><hr/>
                    <h3>Welcome to Weatherman!!!</h3><hr/>
                    <CommentBox />
                    <div className="grey-bg"></div>
            </div>
            
        );
    }
}