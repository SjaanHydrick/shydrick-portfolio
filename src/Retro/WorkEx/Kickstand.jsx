import React, { useState } from 'react';
import TopHeader from '../Landing/TopHeader';
import { useTheme } from '../../state/ThemeSelector';
import Draggable from 'react-draggable';
import { display, zIndex } from '../../utils/utils';

const Kickstand = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin }) => {
    const { color } = useTheme();

    const [height, setHeight] = useState('350px');
    const [width, setWidth] = useState('550px');
    const [marginTop, setMarginTop] = useState('35vh');
    const [marginLeft, setMarginLeft] = useState('20vw');

    return (
        <Draggable>
            <div className="kickstand" style={{
                height: `${height}`, 
                width: `${width}`, 
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
                <div className="kickstand-int">
                    <h2>Kickstand</h2>
                    <p>Full Stack Software Engineer</p>
                    <p>March 2021 - Present</p>
                    <br />
                    <br />
                    <ul>
                        <li>Assisted in the building and maintenance of a variety of websites for clients with unique needs.</li>
                        <li>Created design systems and design components via Storybook for use across multiple sites.</li>
                        <li>Analyzed and fixed bugs in code. Wrote and updated tests as needed.</li>
                        <li>Participated in code review of team member's code and suggested changes as needed.</li>
                    </ul>
                </div>
            </div>
        </Draggable>
    )
}

export default Kickstand
