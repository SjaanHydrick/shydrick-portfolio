import React, { useState } from 'react';
import { useTheme } from '../../state/ThemeSelector';
import TopHeader from '../Landing/TopHeader';
import Draggable from 'react-draggable';
import { display, zIndex, notepad } from '../../utils/utils';

const Projects = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin }) => {
    const { color, theme } = useTheme();

    const [height, setHeight] = useState('275px');
    const [width, setWidth] = useState('450px');
    const [marginTop, setMarginTop] = useState('20vh');
    const [marginLeft, setMarginLeft] = useState('50vw');

    return (
        <Draggable>
            <div className="projects" style={{ height: `${height}`, 
            width: `${width}`, 
            marginTop: `${marginTop}`,
            marginLeft: `${marginLeft}`,
            border: `solid 2px ${color}`, display: `${display(hidden, minimized, fileName)}`, backgroundColor: `${background}`, zIndex: `${zIndex(fileName, zIn)}` }} onClick={() => setZin(fileName)}>
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
                <div className="projects-int">
                    <div className="notepad-icon">
                        {notepad(theme, "gibberish.txt", setHidden, hidden, setZin, plainColor)}
                        <p style={{ color: `${color}` }}>gibberish</p>
                    </div>
                    <div className="notepad-icon">
                        {notepad(theme, "loving_monsters.txt", setHidden, hidden, setZin, plainColor)}
                        <p style={{ color: `${color}` }}>loving_monsters</p>
                    </div>
                    <div className="notepad-icon">
                        {notepad(theme, "petreon.txt", setHidden, hidden, setZin, plainColor)}
                        <p style={{ color: `${color}` }}>petreon</p>
                    </div>
                    <div className="notepad-icon">
                        {notepad(theme, "my_vampire_boyfriend.txt", setHidden, hidden, setZin, plainColor)}
                        <p style={{ color: `${color}` }}>my_vampire_boyfriend</p>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default Projects;
