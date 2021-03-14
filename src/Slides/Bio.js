import React, { Component } from 'react'

export default class Bio extends Component {
    render() {
        return (
            <div className="bio">
                <h2>Hello!</h2>
                <p className="biop">I am Sjaan (pronounced "shawn"), a recent Portland transplant who moved almost 3,000 miles to pursue web design and development. I have a strong background in sales and design with a proven track record of success holding leadership roles within small groups, most recently by maintaining a top 10 rank in a district of 60+ employees. I decided to transition out of sales and into web design in order professionally express my creative side while utilizing my analytical skills. I thrive in small teams working to solve complex problems and create beautiful products. I'm looking to connect with companies who are focused on cultivating diverse teams and producing gorgeous work.</p>
                <div>
                    <span className="downarrow">&#8615;</span>
                </div>
            </div>
        )
    }
}
