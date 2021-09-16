import React, { useState } from 'react';
import TopHeader from '../Landing/TopHeader';
import { useTheme } from '../../state/ThemeSelector';
import Draggable from 'react-draggable';
import { display, zIndex } from '../../utils/utils';

const Gibberish = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin }) => {
    const { color } = useTheme();
    const [height, setHeight] = useState('500px');
    const [width, setWidth] = useState('550px');
    const [marginTop, setMarginTop] = useState('5vh');
    const [marginLeft, setMarginLeft] = useState('20vw');

    return (
        <Draggable>
            <div className="gibberish" style={{ height: `${height}`, 
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
                <div className="gibberish-int">
                    <img src='/GibberishPix.png' alt="Gibberish" />
                    <h2 style={{color: `${color}`}}>Gibberish</h2>
                    <p style={{ color: `${color}`}}>Gibberish is an online, multiplayer, turn-based word game in which a player scores points by forming nonsense words that sound like English, but aren't! A custom-build word detection AI analyzed all 267,751 words in the Scrabble dictionary and determines whether the submitted word exists and, if not, how probable the letter combinations are.
                    <br />
                    <br />
                    Build using React, Node.js, CSS, and Socket.io.
                    <br />
                    <br />
                    Built by a team of 3 over 48 hours for HackOR. Winner of Best UI/UX and 3rd Best Overall.
                    <br />
                    <br />
                    I came up with the concept, contributed 100% of the design, and worked on front end functionality and rendering.</p>
                    <span><a style={{color: `${color}`}} href="https://github.com/Gibberish-app" target="_blank" rel="noreferrer">GitHub</a><a style={{color: `${color}`}} href="https://gibberish-app.netlify.app/" target="_blank" rel="noreferrer">Website</a><a style={{color: `${color}`}}href="https://devpost.com/software/gibberish-m8eygt"target="_blank" rel="noreferrer">Devpost</a></span>
                </div>
            </div>
        </Draggable>
    )
}

export default Gibberish
