import React, { useState } from 'react';
import TopHeader from '../Landing/TopHeader';
import { useTheme } from '../../state/ThemeSelector';
import Draggable from 'react-draggable';
import { display, zIndex } from '../../utils/utils';

const Bio = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin }) => {
    const { color } = useTheme();
    const [height, setHeight] = useState('auto');
    const [width, setWidth] = useState('500px');
    const [marginTop, setMarginTop] = useState('35vh');
    const [marginLeft, setMarginLeft] = useState('20vw');

    return (
        <Draggable>
            <div className="bio" style={{ height: `${height}`, 
            width: `${width}`,
            marginTop: `${marginTop}`,
            marginLeft: `${marginLeft}`,
            border: `solid 2px ${color}`, display: `${display(hidden, minimized, fileName)}`, backgroundColor: `${background}`, zIndex: `${zIndex(fileName, zIn)}`}}
            onClick={() => setZin(fileName)}>
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
                <p style={{ color: `${color}`}}>Hello! I am Sjaan Hydrick and I'm a software engineer. I specialize in front end web development; I love crafting order from chaos in both my personal and professional life. I strive to create elegant, scalable, functional websites with an exceptional UI and UX.
                <br /><br />Take a look at my projects and connect if you want to talk!</p>
            </div>
        </Draggable>
    )
}

export default Bio
