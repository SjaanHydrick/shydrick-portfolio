import React, { useState } from 'react';
import TopHeader from '../Landing/TopHeader';
import { useTheme } from '../../state/ThemeSelector';
import Draggable from 'react-draggable';
import { display, zIndex } from '../../utils/utils';

const TechStack = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin }) => {
    const { color } = useTheme();
    const [height, setHeight] = useState('auto');
    const [width, setWidth] = useState('500px');
    const [marginTop, setMarginTop] = useState('50vh');
    const [marginLeft, setMarginLeft] = useState('40vw');

    return (
        <Draggable>
            <div className="tech-stack" style={{ height: `${height}`, 
            width: `${width}`, 
            marginTop: `${marginTop}`,
            marginLeft: `${marginLeft}`,
            border: `solid 2px ${color}`, display: `${display(hidden, minimized, fileName)}`, backgroundColor: `${background}`, zIndex: `${zIndex(fileName, zIn)}`, color: `${color}`}}
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
                <div className="tech-stack-int">
                    <div>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>TypeScript</p>
                        <p>React</p>
                        <p>Redux</p>
                        <p>Gatsby</p>
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>Socket.io</p>
                        <p>Jest</p>
                        <p>QUnit</p>
                    </div>
                    <div>
                        <p>Cypress</p>
                        <p>PostgreSQL</p>
                        <p>Git</p>
                        <p>Slack</p>
                        <p>GitHub</p>
                        <p>GitLab</p>
                        <p>Jira</p>
                        <p>Heroku</p>
                        <p>Netlify</p>
                        <p>Postman</p>
                        <p>pgAdmin</p>
                        <p>React Testing Library</p>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default TechStack;
