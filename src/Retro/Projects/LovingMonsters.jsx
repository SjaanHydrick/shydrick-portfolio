import React, { useState } from 'react';
import TopHeader from '../Landing/TopHeader';
import { useTheme } from '../../state/ThemeSelector';
import Draggable from 'react-draggable';
import { display, zIndex } from '../../utils/utils';

const LovingMonsters = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin }) => {
    const { color } = useTheme();
    const [height, setHeight] = useState('500px');
    const [width, setWidth] = useState('550px');
    const [marginTop, setMarginTop] = useState('10vh');
    const [marginLeft, setMarginLeft] = useState('30vw');

    return (
        <Draggable>
            <div className="loving-monsters" style={{ 
                height: `${height}`, 
                width: `${width}`, 
                marginTop: `${marginTop}`,
                marginLeft: `${marginLeft}`,
                border: `solid 2px ${color}`, 
                display: `${display(hidden, minimized, fileName)}`, 
                backgroundColor: `${background}`, zIndex: `${zIndex(fileName, zIn)}`}} onClick={() => setZin(fileName)}>
                <TopHeader
                    fileName={fileName}
                    height={height}
                    hidden={hidden}
                    minimized={minimized}
                    plainColor={plainColor}
                    setMarginLeft={setMarginLeft}
                    setMarginTop={setMarginTop}
                    setMinimized={setMinimized}
                    setHeight={setHeight}
                    setHidden={setHidden}
                    setWidth={setWidth}
                />
                <div className="loving-monsters-int">
                    <img src='/LovingMonstersPix.png' alt="Loving Monsters" />
                    <h2 style={{color: `${color}`}}>Loving Monsters</h2>
                    <p style={{ color: `${color}`}}>Loving Monsters blends life simulators, to-do lists, and a splash of the supernatural to create a unique collaborative group environment. Users can interact in real time using asynchronous messaging and one-on-one chat features while exploring custom environments and interacting with multiple unique NPCs. 
                    <br />
                    <br />
                    Built using React, Node.js, CSS, and Socket.io.
                    <br />
                    <br />
                    Built by a team of 3 over 10 days.
                    <br />
                    <br />
                    I came up with the concept, produced 100% of the art and design, and contributed to player movement, collision control, and NPC development.</p>
                    <span><a style={{color: `${color}`}} href="https://github.com/Loving-Monsters" target="_blank" rel="noreferrer">GitHub</a><a style={{color: `${color}`}} href="https://loving-monsters.netlify.app/" target="_blank" rel="noreferrer">Website</a><a style={{color: `${color}`}}href="https://drive.google.com/file/d/1rnRWbXQouw2y7Jp0eAhTLQ5BenF8aigS/view" target="_blank" rel="noreferrer">Video Presentation</a></span>
                </div>
            </div>
        </Draggable>
    )
}

export default LovingMonsters
