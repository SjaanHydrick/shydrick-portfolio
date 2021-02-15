import React, { Component } from 'react'

export default class Alchezoomy extends Component {
    render() {
        return (
            <div className="alchezoomy">
                <h2>Projects</h2>
                <div className="alchezoomy-links">
                    <h4>Alchezoomy</h4>
                    <a href="https://github.com/Alchezoomy"><p className="alchezoomy-github">GitHub</p></a>
                    <a href="https://alchezoomy.netlify.app/"><p className="alchezoomy-deployed">Deployed</p></a>
                </div>
                <div className="alchezoomy-info">
                    <img 
                    className="alchezoomy-image"
                    src="/alchezoomy.png" 
                    alt="Alchezoomy" />
                    <p className="alchezoomy-desc">An education app where instructors publish their recorded zoom lectures for students to watch, favorite, and bookmark specific timestamps. Includes searchable video transcripts for easy reference. Built in four days by a team of five.</p>
                </div>
                <p className="downarrow3">&#8615;</p>
            </div>
        )
    }
}
