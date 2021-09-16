import React, { useState } from 'react';
import TopHeader from '../Landing/TopHeader';
import { useTheme } from '../../state/ThemeSelector';
import Draggable from 'react-draggable';
import { display, zIndex } from '../../utils/utils';

const MVB = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin }) => {
    const { color } = useTheme();
    const [height, setHeight] = useState('500px');
    const [width, setWidth] = useState('550px');
    const [marginTop, setMarginTop] = useState('20vh');
    const [marginLeft, setMarginLeft] = useState('50vw');

    return (
        <Draggable>
            <div className="mvb" style={{ height: `${height}`, 
            width: `${width}`, 
            marginTop: `${marginTop}`,
            marginLeft: `${marginLeft}`,
            border: `solid 2px ${color}`, 
            display: `${display(hidden, minimized, fileName)}`, backgroundColor: `${background}`, zIndex: `${zIndex(fileName, zIn)}`}} onClick={() => setZin(fileName)}>
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
                <div className="mvb-int">
                    <img src='/MVBPix.png' alt="Loving Monsters" />
                    <h2 style={{color: `${color}`}}>My Vampire Boyfriend</h2>
                    <p style={{ color: `${color}`}}>My Vampire Boyfriend is a choose-your-own adventure survival-horror game disguised as a dating simulator. It boasts a unique and beautiful gaming experience with 54 individual scenarios for the player to encounter. 
                    <br />
                    <br />
                    Build using HTML, CSS, and vanilla JavaScript.
                    <br />
                    <br />
                    Built by a team of 4 over 4 days.
                    <br />
                    <br />
                    I came up with the concept, produced 100% of the framing and design, and ensured functionality.</p>
                    <span><a style={{color: `${color}`}} href="https://github.com/SjaanHydrick/my-vampire-boyfriend" target="_blank" rel="noreferrer">GitHub</a><a style={{color: `${color}`}} href="https://sjaanhydrick.github.io/my-vampire-boyfriend/" target="_blank" rel="noreferrer">Website</a></span>
                </div>
            </div>
        </Draggable>
    )
}

export default MVB;
