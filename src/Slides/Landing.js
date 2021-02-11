import React, { Component } from 'react';
import '../style/App.css'

export default class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <h1>Sjaan Hydrick</h1>
                <p className="fed">Front End Developer</p>
                <div className="bottom-border"></div>
                <p className="downarrow">&#8615;</p>
            </div>
        )
    }
}
