import React, { useState } from 'react';
import { useTheme } from '../../state/ThemeSelector';
import TopHeader from '../Landing/TopHeader';
import Draggable from 'react-draggable';
import { display, zIndex, notepad } from '../../utils/utils';

const WorkEx = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin}) => {
    const { color, theme } = useTheme();

    const [height, setHeight] = useState('275px');
    const [width, setWidth] = useState('450px');
    const [marginTop, setMarginTop] = useState('30vh');
    const [marginLeft, setMarginLeft] = useState('60vw');

    return (
        <Draggable>
            <div className="work-ex" style={{
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
                <div className="work-ex-int">
                    <div className="notepad-icon">
                        {notepad(theme, "kickstand.txt", setHidden, hidden, setZin, plainColor)}
                        <p style={{ color: `${color}` }}>kickstand</p>
                    </div>
                    <div className="notepad-icon">
                        {notepad(theme, "misc_jobs.txt", setHidden, hidden, setZin, plainColor)}
                        <p style={{ color: `${color}` }}>misc_jobs</p>
                    </div>
                    <div className="notepad-icon">
                        {notepad(theme, "education.txt", setHidden, hidden, setZin, plainColor)}
                        <p style={{ color: `${color}` }}>education</p>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default WorkEx
