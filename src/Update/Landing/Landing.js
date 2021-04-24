import React from 'react';
import { useHistory } from 'react-router-dom';
import './landing.css';

const Landing = () => {

    const history = useHistory();

    const aboutRoute = () => {
        let path = "/about";
        history.push(path);
    }

    const projectsRoute = () => {
        let path = "/projects";
        history.push(path);
    }

    const contactRoute = () => {
        let path = "/contact";
        history.push(path);
    }

    return (
        <div className="landing">
            <div className="text">
                <h1>Sjaan Hydrick</h1>
                <div className="subtext">
                    <h3>Front End</h3>
                    <h2>Software Engineer</h2>
                </div>
            </div>
            <div className="buttons">
                <button className="about" onClick={aboutRoute}>About</button>
                <br />
                <button className="projects" onClick={projectsRoute}>Projects</button>
                <br />
                <button className="contact" onClick={contactRoute}>Contact</button>
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

export default Landing;
