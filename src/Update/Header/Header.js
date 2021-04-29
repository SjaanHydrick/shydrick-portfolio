import React from 'react'
import { useHistory } from 'react-router-dom';
import './header.css'

const Header = ({ main, shadow }) => {

    const history = useHistory();
    
    const aboutRoute = () => {
        let path = "/";
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

    const Buttons = () => {
        if(window.location.href.includes('/projects')) {
            return(
                <div className="buttons">
                    <button className="about" onClick={aboutRoute}>About</button>
                    <button className="contact" onClick={contactRoute}>Contact</button>
                </div>
            )
        } else if (window.location.href.includes('/contact')) {
            return(
                <div className="buttons">
                    <button className="about" onClick={aboutRoute}>About</button>
                    <button className="projects" onClick={projectsRoute}>Projects</button>
                </div>
            )
        } else {
            return(
                <div className="buttons">
                    <button className="projects" onClick={projectsRoute}>Projects</button>
                    <button className="contact" onClick={contactRoute}>Contact</button>
                </div>
            )
        }
    }

    return (
        <div className="header">
            <h1 style={{ color: `${main}`, textShadow: `0px .3rem ${shadow}`}}>Sjaan Hydrick</h1>
            <Buttons />
        </div>
    )
}

export default Header;
