import React, { useState } from 'react'
import Header from '../Header/Header'
import "./About.css"

const About = () => {
    const [screen, setScreen] = useState('techstack');

    const DisplayScreen = () => {

        if (screen === "techstack") {

            return(
                <div>
                    <h3 className="skillshead">Tech Stack</h3>
                    <div className="techstack">
                        <label>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Redux</p>
                            <p>TypeScript</p>
                            <p>Gatsby</p>
                            <p>Node.js</p>
                            <p>Express</p>
                        </label>
                        <label>
                            <p>Jest</p>
                            <p>QUnit</p>
                            <p>SQL</p>
                            <p>VSCode</p>
                            <p>Git</p>
                            <p>Slack</p>
                            <p>GitHub</p>
                            <p>GitLab</p>
                        </label>
                        <label>
                            <p>Jira</p>
                            <p>Heroku</p>
                            <p>Postman</p>
                            <p>Netlify</p>
                            <p>InDesign</p>
                            <p>Premiere</p>
                        </label>
                    </div>
                </div>
            )
        } else if (screen === 'perstr'){
            return(
                <div>
                <h3 className="skillshead">Personal Strengths</h3>
                <div className="perstr">
                            <label>
                                <p>Problem Solving</p>
                                <p>Attention to Detail</p>
                                <p>Analytical Mindset</p>
                                <p>Ability to Multitask</p>
                                <p>Proven Leadership</p>
                            </label>
                            <label>
                                <p>Organization</p>
                                <p>Design Ability</p>
                                <p>Time Management</p>
                                <p>Written Communication</p>
                            </label>
                    </div>
                </div>
            )
        } else if (screen === 'workexp'){
            return(
                <div className="workexp">
                    <h3 className="skillshead">Work Experience</h3>
                    <div className="xp">
                        <label>
                            <h4>Kickstand</h4>
                            <p>Software Engineer</p>
                            <p>2021 - present</p>
                        </label>
                        <label>
                            <h5>Sales</h5>
                            <p>5+ years</p>
                            <h5>Design</h5>
                            <p>4+ years</p>
                            <h5>Print Production</h5>
                            <p>4+ years</p>
                            <h5>Property Management</h5>
                            <p>3+ years</p>
                        </label>
                    </div>
                </div>
            )
        } else if (screen === 'edu'){
            return(
                <div className="edu">
                    <h3 className="skillshead">Education</h3>
                    <h4>Alchemy Code Lab</h4>
                    <p>2020 - 2021</p>
                    <p>Portland, OR</p>
                    <h4>Columbia College</h4>
                    <p>2007 - 2011</p>
                    <p>B.A. English Literature</p>
                    <p>Columbia, SC</p>
                </div>
            )
        }
    }

    return (
        <div className="aboutme">
            <Header />
            <div className="int">
                <div className="blurb">
                    <p>I am a full stack software engineer with a flair for front end development.
                    <br />
                    <br />
                    I have a gift for crafting order from chaos, both in my personal and professional lives. I strive to use that gift to create elegant, scalable, functional websites with an exceptional UI and UX.
                    <br />
                    <br />
                    I excel in deadline-driven environments. My previous roles in print production and property management required tremendous focus and time management skills, both of which I was able to hone in those positions.</p>
                </div>

                <div className="skills">
                    <div className="skills-tabs">
                        <div id="techtab" onClick={() => {
                            setScreen('techstack')
                            }} >
                            <p>Tech Stack</p>
                        </div>
                        <div id="strtab" onClick={() => {
                            setScreen('perstr')
                            }}>
                            <p>Personal Strengths</p>
                        </div>
                        <div id="xptab" onClick={() => {
                            setScreen('workexp')}}>
                            <p>Work Experience</p>
                        </div>
                        <div id="edtab" onClick={() => {
                            setScreen('edu')}}>
                            <p>Education</p>
                        </div>
                    </div>
                    <div className="display-screen">
                        <DisplayScreen />
                    </div>
                </div>
            </div>

            <div className="flare1" id="fl11"></div>
            <div className="flare1" id="fl12"></div>
            <div className="flare2" id="fl21"></div>
            <div className="flare2" id="fl22"></div>
            <div className="flare2" id="fl23"></div>
            <div className="flare2" id="fl24"></div>
            <div className="flare3"></div>
            <div className="flare4"></div>
            <div className="star1" id="st11"></div>
            <div className="star1" id="st12"></div>
            <div className="star1" id="st13"></div>
            <div className="star1" id="st14"></div>
            <div className="star1" id="st15"></div>
            <div className="star1" id="st16"></div>
            <div className="star1" id="st17"></div>
            <div className="star2" id="st21"></div>
            <div className="star2" id="st22"></div>
            <div className="star2" id="st23"></div>
            <div className="star2" id="st24"></div>
            <div className="star2" id="st25"></div>
            <div className="star2" id="st26"></div>
            <div className="star2" id="st27"></div>
            <div className="star2" id="st28"></div>
            <div className="star2" id="st29"></div>
            <div className="star2" id="st210"></div>
            <div className="star2" id="st211"></div>
            <div className="star2" id="st212"></div>
            <div className="star2" id="st213"></div>
            <div className="star2" id="st214"></div>
            <div className="star2" id="st215"></div>
            <div className="star2" id="st216"></div>
        </div>
    )
}

export default About;
