import React, { Component } from 'react'

export default class MVB extends Component {
    render() {
        return (
            <div className="MVB">
                <h2>Projects</h2>
                <div className="mvb-links">
                    <h4>My Vampire Boyfriend</h4>
                    <a href="https://github.com/SjaanHydrick/my-vampire-boyfriend"><p className="mvb-github">GitHub</p></a>
                    <a href="https://sjaanhydrick.github.io/my-vampire-boyfriend/"><p className="mvb-deployed">Deployed</p></a>
                </div>
                <div className="mvb-info">
                    <img 
                    className="mvb-image"
                    src="/MVB2.png" 
                    alt="My Vampire Boyfriend" />
                    <p className="mvb-desc">My Vampire Boyfriend is a choose-your-own adventure survival-horror game disguised as a dating simulator built by a four-person team over the course of four days. Using intricate JavaScript functionality, custom artwork, and heavy CSS work, we crafted a unique, beautiful, and scalable gaming experience with 54 individual scenarios for the player to encounter.</p>
                </div>
                <p className="downarrow3">&#8615;</p>
            </div>
        )
    }
}
