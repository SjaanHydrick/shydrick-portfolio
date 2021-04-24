import React, { useState } from 'react'
import Header from '../Header/Header'
import './Projects.css'

const Projects = () => {
    const [proj, setProj] = useState('mvb');

    const ProjectDisplay = () => {
        if(proj === 'mvb'){
            return(
                <div>My Vampire Boyfriend</div>
            )
        } else if (proj === 'petreon'){
            return(
                <div>Petreon</div>
            )
        } else if (proj === 'lovmon'){
            return(
                <div>Loving Monsters</div>
            )
        } else if (proj === 'gibb'){
            return(
                <div>Gibberish</div>
            )
        }
    }

    return (
        <div className="projpg">
            <Header />
            <div className="project-int">
                <label>
                    <button onClick={() => setProj('mvb')}>My Vampire Boyfriend</button>
                    <button onClick={() => setProj('petreon')}>Petreon</button>
                    <button onClick={() => setProj('lovmon')}>Loving Monsters</button>
                    <button onClick={() => setProj('gibb')}>Gibberish</button>
                </label>
                <label>
                    <div className="proj-display">
                        <ProjectDisplay />
                    </div>
                </label>
            </div>
        </div>
    )
}

export default Projects;
