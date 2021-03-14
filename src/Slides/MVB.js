import React, { Component } from 'react'

export default class MVB extends Component {
    render() {
        return (
            <div className="MVB">
                <h2>Projects</h2>
                <div className="mvb-links">
                    <h4>My Vampire Boyfriend</h4>
                    <a href="https://github.com/SjaanHydrick/my-vampire-boyfriend" className="proj-links">GitHub</a>
                    <a href="https://sjaanhydrick.github.io/my-vampire-boyfriend/" className="proj-links">Deployed</a>
                </div>
                <div className="info">
                    <img 
                    src="/MVB2.png" 
                    alt="My Vampire Boyfriend" />
                    <div>
                        <p className="languages">HTML, CSS, JavaScript</p>
                        <p className="desc">My Vampire Boyfriend is a choose-your-own adventure survival-horror game disguised as a dating simulator built by a four-person team over the course of four days. Using intricate JavaScript functionality, custom artwork, and heavy CSS work, we crafted a unique, beautiful, and scalable gaming experience with 54 individual scenarios for the player to encounter.
                        <br />
                        <br />
                        I thought up the concept and was responsible for 100% of the framing and design.</p>

                    </div>
                </div>
                <p className="downarrow">&#8615;</p>
            </div>
        )
    }
}
