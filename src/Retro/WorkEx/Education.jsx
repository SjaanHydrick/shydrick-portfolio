import React, { useState } from 'react';
import TopHeader from '../Landing/TopHeader';
import { useTheme } from '../../state/ThemeSelector';
import Draggable from 'react-draggable';
import { display, zIndex } from '../../utils/utils';

const Education = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin }) => {
    const { color } = useTheme();

    const [height, setHeight] = useState('310px');
    const [width, setWidth] = useState('250px');
    const [marginTop, setMarginTop] = useState('55vh');
    const [marginLeft, setMarginLeft] = useState('40vw');

    return (
        <Draggable>
            <div className="education" style={{
                height: `${height}`, width: `${width}`,
                marginTop: `${marginTop}`,
                marginLeft: `${marginLeft}`,
                border: `solid 2px ${color}`,
                display: `${display(hidden, minimized, fileName)}`,
                backgroundColor: `${background}`,
                zIndex: `${zIndex(fileName, zIn)}`, color: `${color}`
            }} onClick={() => setZin(fileName)}>
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
                <div className="education-int">
                    <h2>Education</h2>
                    <br />
                    <h3>Alchemy Code Lab</h3>
                    <p>2020 - 2021</p>
                    <p>Portland, OR</p>
                    <br />
                    <br />
                    <h3>Columbia College</h3>
                    <p>2007 - 2011</p>
                    <p>English Major, History Minor</p>
                    <p>Columbia, SC</p>
                </div>
            </div>
        </Draggable>
    )
}

export default Education;
