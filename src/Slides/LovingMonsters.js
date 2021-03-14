import React, { Component } from 'react'

export default class LovingMonsters extends Component {
    render() {
        return (
            <div className="lm">
                <h2>Projects</h2>
                <div className="lm-links">
                    <h4>Loving Monsters</h4>
                    <a href="https://github.com/Loving-Monsters" className="proj-links">GitHub</a>
                    <a href="https://loving-monsters.netlify.app/" className="proj-links">Deployed</a>
                </div>
                <div className="info">
                    <img 
                    src="/LovingMonsters.png" 
                    alt="Loving Monsters" />
                    <div>
                        <p className="languages">React, Node.js, Socket.io</p>
                        <p className="desc">Loving Monsters blends life simulators, game logic, and the supernatural to create a unique collaborative group environment. Explore custom-drawn environments, collect items, and become friends with spooky NPCs! Multiple users can interact in real time and work on projects together using virtual kanban board, asynchronous messaging, and one-on-one chat features.
                        <br />
                        <br />
                        I conceived and framed the app, produced 100% of the art and design, and contributed to player movement, collision control, and NPC development.</p>
                    </div>
                </div>
                <p className="downarrow">&#8615;</p>
            </div>
        )
    }
}
