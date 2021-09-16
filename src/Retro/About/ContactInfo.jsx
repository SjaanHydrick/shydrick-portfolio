import React, { useState } from 'react';
import TopHeader from '../Landing/TopHeader';
import { useTheme } from '../../state/ThemeSelector';
import Draggable from 'react-draggable';
import { display, zIndex } from '../../utils/utils';

const ContactInfo = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin }) => {
    const { color } = useTheme();

    const [height, setHeight] = useState('auto');
    const [width, setWidth] = useState('500px');
    const [marginTop, setMarginTop] = useState('45vh');
    const [marginLeft, setMarginLeft] = useState('30vw');

    return (
        <Draggable>
            <div className="contact-info" style={{ 
                height: `${height}`,
                width: `${width}`, 
                marginTop: `${marginTop}`,
                marginLeft: `${marginLeft}`,
                border: `solid 2px ${color}`, display: `${display(hidden, minimized, fileName)}`, backgroundColor: `${background}`, zIndex: `${zIndex(fileName, zIn)}`}} onClick={() => setZin(fileName)}>
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
                <a style={{ color: `${color}`}} href="mailto: sjaanahydrick@gmail.com">E-mail</a>
                <br /><br />
                <a style={{ color: `${color}`}} href="https://github.com/SjaanHydrick">GitHub</a>
                <br /><br />
                <a style={{ color: `${color}`}} href="https://www.linkedin.com/in/sjaan-hydrick/">LinkedIn</a>
            </div>
        </Draggable>
    )
}

export default ContactInfo;
