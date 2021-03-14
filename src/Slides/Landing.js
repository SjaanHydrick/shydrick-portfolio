import React, { Component } from 'react';
import '../style/App.css'

export default class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <h1>Sjaan Hydrick</h1>
                <div className="bottom-border">
                    <p className="fed">Front End Developer</p>
                </div>
                <div>
                    <span className="scroll">scroll</span>
                    <span className="downarrow">&#8615;</span>
                </div>
            </div>
        )
    }
}
