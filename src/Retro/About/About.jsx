import React, { useState } from 'react';
import { useTheme } from '../../state/ThemeSelector';
import TopHeader from '../Landing/TopHeader';
import Draggable from 'react-draggable';
import { display, zIndex, notepad } from '../../utils/utils';

const About = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin }) => {
    const { color, theme } = useTheme();
    const [height, setHeight] = useState('275px');
    const [width, setWidth] = useState('450px');
    const [marginTop, setMarginTop] = useState('10vh');
    const [marginLeft, setMarginLeft] = useState('40vw');

    return (
        <Draggable>
            <div className="about" style={{
                height: `${height}`,
                width: `${width}`,
                marginTop: `${marginTop}`,
                marginLeft: `${marginLeft}`,
                border: `solid 2px ${color}`,
                display: `${display(hidden, minimized, fileName)}`,
                backgroundColor: `${background}`,
                zIndex: `${zIndex(fileName, zIn)}`
            }}
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
                <div className="about-int">
                    <div className="notepad-icon">
                        {notepad(theme, "about_me.txt", setHidden, hidden, setZin, plainColor)}
                        <p style={{ color: `${color}` }}>about_me</p>
                    </div>
                    <div className="notepad-icon">
                        {notepad(theme, "contact_links.txt", setHidden, hidden, setZin, plainColor)}
                        <p style={{ color: `${color}` }}>contact</p>
                    </div>
                    <div className="notepad-icon">
                        {notepad(theme, "tech_stack.txt", setHidden, hidden, setZin, plainColor)}
                        <p style={{ color: `${color}`}}>tech_stack</p>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default About
