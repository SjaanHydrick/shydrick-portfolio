import React, { useState } from 'react'
import Header from '../Header/Header'
import './Projects.css'

const Projects = () => {
    const [proj, setProj] = useState('mvb');

    const ProjectDisplay = () => {
        if(proj === 'mvb'){
            return(
                <div>
                    <div className="info">
                        <div>
                            <h4>My Vampire Boyfriend</h4>
                            <img 
                            src="/MVB2.png" 
                            alt="My Vampire Boyfriend" />
                            <div>
                                <a href="https://github.com/SjaanHydrick/my-vampire-boyfriend" className="proj-links">GitHub</a> 
                                <a href="https://sjaanhydrick.github.io/my-vampire-boyfriend/" className="proj-links">Deployed</a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="languages">HTML, CSS, JavaScript</p>
                                <p className="desc">My Vampire Boyfriend is a choose-your-own adventure survival-horror game disguised as a dating simulator built by a four-person team over the course of four days. Using intricate JavaScript functionality, custom artwork, and heavy CSS work, we crafted a unique, beautiful, and scalable gaming experience with 54 individual scenarios for the player to encounter.
                                <br />
                                <br />
                                I thought up the concept and was responsible for 100% of the framing and design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (proj === 'petreon'){
            return(
                <div>
                    <div className="info">
                        <div>
                            <h4>Petreon</h4>
                            <img 
                            src="/Petreon1.png" 
                            alt="petreon" />
                            <div>
                                <a href="https://github.com/Alchemy-Petreon" className="proj-links">GitHub</a>
                                <a href="https://petreon.netlify.app/" className="proj-links">Deployed</a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="languages">React, Node.js, PostgreSQL, OAuth 2.0, AWS</p>
                                <p className="desc">A full-stack social media platform all about pets built remotely by a team of three over the course of 10 days. Users create profiles for their fuzzy friends and upload photos and blogs to keep their followers updated on the secret lives of pets.
                                <br />
                                <br />
                                I came up with the concept, contributed 100% of the design, wrote the SQL tables, and did the testing while ensuring general functionality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (proj === 'lovmon'){
            return(
                <div>
                    <div className="info">
                        <div>
                            <h4>Loving Monsters</h4>
                            <img 
                            src="/LovingMonsters.png" 
                            alt="Loving Monsters" />
                            <div>
                                <a href="https://github.com/Loving-Monsters" className="proj-links">GitHub</a>
                                <a href="https://loving-monsters.netlify.app/" className="proj-links">Deployed</a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="languages">React, Node.js, Socket.io</p>
                                <p className="desc">Loving Monsters blends life simulators, game logic, and the supernatural to create a unique collaborative group environment. Explore custom-drawn environments, collect items, and become friends with spooky NPCs! Multiple users can interact in real time and work on projects together using virtual kanban board, asynchronous messaging, and one-on-one chat features.
                                <br />
                                <br />
                                I conceived and framed the app, produced 100% of the art and design, and contributed to player movement, collision control, and NPC development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (proj === 'gibb'){
            return(
                <div>
                    <div className="info">
                        <div>
                            <h4>Gibberish</h4>
                            <img 
                            src="/Gibberish.png" 
                            alt="Gibberish" />
                            <div>
                                <a href="https://github.com/Gibberish-app" className="proj-links">GitHub</a>
                                <a href="https://gibberish-app.netlify.app/" className="proj-links">Deployed</a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="languages">React, Node.js, Socket.io</p>
                                <p className="desc">Gibberish is an online multiplayer turn-based word game in which a player scores points by forming nonsense words that sound like English, but aren't! Gibberish's word detection AI analyzes all 267,751 words in the Scrabble dictionary and determines whether the submitted word exists and, if not, how probably the letter combinations are.
                                <br />
                                Built by a team of 3 over 48 hours during HackOR. Winner of Best UI/UX and 3rd Best Overall.
                                <br />
                                <br />
                                I contributed 100% of the design and worked on front end functionality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="projpg">
            <Header 
                main={'#f485a6'}
                shadow={'#6484a5'}
                />
            <div className="int">
                <div className="project-int">
                    <div>
                            <button className="project-buttons" onClick={() => setProj('mvb')}>My Vampire Boyfriend</button>
                            <br />
                            <button className="project-buttons" onClick={() => setProj('petreon')}>Petreon</button>
                            <br />
                            <button className="project-buttons" onClick={() => setProj('lovmon')}>Loving Monsters</button>
                            <br />
                            <button className="project-buttons" onClick={() => setProj('gibb')}>Gibberish</button>
                    </div>
                    <div className="proj-display">
                        <ProjectDisplay />
                    </div>
                </div>
            </div>
            <div className="mobile">
                <p>Mobile Design Coming Soon!</p>
            </div>

            <div className="star3" id="st11"></div>
            <div className="star3" id="st15"></div>
            <div className="star3" id="st17"></div>
            <div className="star4" id="st21"></div>
            <div className="star4" id="st29"></div>
            <div className="star4" id="st213"></div>

            <div className="cloud1"></div>
            <div className="cloud2"></div>
            <div className="cloud3" id='cl31'></div>
            <div className="cloud3" id='cl32'></div>
        </div>
    )
}

export default Projects;
