import React, { useState } from 'react';
import TopHeader from '../Landing/TopHeader';
import { useTheme } from '../../state/ThemeSelector';
import Draggable from 'react-draggable';
import { display, zIndex } from '../../utils/utils';

const Petreon = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin }) => {
    const { color } = useTheme();
    const [height, setHeight] = useState('500px');
    const [width, setWidth] = useState('550px');
    const [marginTop, setMarginTop] = useState('15vh');
    const [marginLeft, setMarginLeft] = useState('40vw');

    return (
        <Draggable>
            <div className="petreon" style={{ 
                height: `${height}`, 
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
                <div className="petreon-int">
                    <img src='/PetreonPix.png' alt="Petreon" />
                    <h2 style={{color: `${color}`}}>Petreon</h2>
                    <p style={{ color: `${color}`}}>Petreon is a social media platform all about pets! Users create profiles for their fuzzy friends and upload photos and blogs to keep their followers updated on the secret lives of pets. Followers can like images, leave comments, and even send tips for treats.
                    <br />
                    <br />
                    Built using React, Node.js, CSS, PostgreSQL, OAuth 2.0, and AWS.
                    <br />
                    <br />
                    Built by a team of 3 over 10 days.
                    <br />
                    <br />
                    I came up with the concept, contributed 100% of the design, wrote the SQL tables, did the testing, and ensured front-end functionality.</p>
                    <span><a style={{color: `${color}`}} href="https://github.com/Alchemy-Petreon" target="_blank" rel="noreferrer">GitHub</a><a style={{color: `${color}`}} href="https://petreon.netlify.app/" target="_blank" rel="noreferrer">Website</a></span>
                </div>
            </div>
        </Draggable>
    )
}

export default Petreon;
