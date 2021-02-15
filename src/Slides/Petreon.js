import React, { Component } from 'react'

export default class Petreon extends Component {
    render() {
        return (
            <div className="petreon">
            <h2>Projects</h2>
            <div className="petreon-links">
                <h4>Petreon</h4>
                <a href="https://github.com/Alchemy-Petreon"><p className="proj-links">GitHub</p></a>
                <a href="https://petreon.netlify.app/"><p className="proj-links">Deployed</p></a>
            </div>
            <div className="info">
                <img 
                src="/Petreon1.png" 
                alt="petreon" />
                <div>
                    <p className="languages">React, Node.js, PostgreSQL, OAuth 2.0, AWS</p>
                    <p className="desc">A full-stack social media platform all about pets built remotely by a team of three over the course of 10 days. Users create profiles for their fuzzy friends and upload photos and blogs to keep their followers updated on the secret lives of pets.
                    <br />
                    <br />
                    I came up with the concept, contributed 100% of the design, wrote the SQL tables, and did the testing while ensuring general functionality.</p>
                </div>
            </div>
            <p className="downarrow3">&#8615;</p>
        </div>
        )
    }
}
