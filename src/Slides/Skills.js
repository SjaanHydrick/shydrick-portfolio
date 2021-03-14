import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <h2>Skills</h2>
                <div className="skills-data">
                <div>
                    <h3>Tech Stack</h3>
                      <div className="techstack">
                      <label>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Node.js</p>
                        <p>Express</p>
                        <p>Jest</p>
                        <p>QUnit</p>
                        <p>SQL</p>
                      </label>
                      <label>
                        <p>VSCode</p>
                        <p>Git</p>
                        <p>Slack</p>
                        <p>GitHub</p>
                        <p>Heroku</p>
                        <p>Postman</p>
                        <p>Netlify</p>
                        <p>InDesign</p>
                        <p>Premiere</p>
                      </label>
                    </div>
                </div>
                <div className="in-progress">
                    <h3>In Progress</h3>
                      <p>Redux</p>
                      <p>AngularJS</p>
                      <p>C#</p>
                </div>
                <div>
                    <h3>Personal Strengths</h3>
                        <p>Problem Solving</p>
                        <p>Attention to Detail</p>
                        <p>Analytical Thinking</p>
                        <p>Ability to Multitask</p>
                        <p>Organzied Mindset</p>
                        <p>Design Ability</p>
                        <p>Excellent Time Management</p>
                        <p>Written Communication</p>
                </div>
                </div>
                <p className="downarrow">&#8615;</p>
            </div>
        )
    }
}
