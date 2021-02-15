import React, { Component } from 'react'

export default class Alchezoomy extends Component {
    render() {
        return (
            <div className="alchezoomy">
                <h2>Projects</h2>
                <div className="alchezoomy-links">
                    <h4>Alchezoomy</h4>
                    <a href="https://github.com/Alchezoomy"><p className="proj-links">GitHub</p></a>
                    <a href="https://alchezoomy.netlify.app/"><p className="proj-links">Deployed</p></a>
                </div>
                <div className="info">
                    <img 
                    src="/alchezoomy.png" 
                    alt="Alchezoomy" />
                    <div>
                        <p className="languages">React, Node.js, PostgreSQL, OAuth 2.0</p>
                        <p className="desc">An education app where instructors publish their recorded zoom lectures for students to watch, favorite, and bookmark specific timestamps. Includes searchable video transcripts for easy reference. Built in four days by a team of five.
                        <br />
                        <br />
                        I framed and maintained the front end while being responsible for 100% of the design.</p>
                    </div>
                </div>
                <p className="downarrow3">&#8615;</p>
            </div>
        )
    }
}
