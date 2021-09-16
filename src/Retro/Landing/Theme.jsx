import React, { useState } from 'react'
import { useTheme } from '../../state/ThemeSelector';
import TopHeader from './TopHeader';
import Draggable from 'react-draggable';
import { zIndex, display } from '../../utils/utils';
import './Landing.css'

const Theme = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin }) => {
    const { setTheme, setColor, color, theme } = useTheme();
    const [height, setHeight] = useState('180px');
    const [width, setWidth] = useState('500px');
    const [marginTop, setMarginTop] = useState('5vh');
    const [marginLeft, setMarginLeft] = useState('60vw');

    const lightClick = () => {
        setTheme('Light');
        setColor('black');
    }

    const darkClick = () => {
        setTheme('Dark');
        setColor('#00FF66');
    }

    const neonClick = () => {
        setTheme('Neon');
        setColor('#F62DAE');
    }

    const pastelClick = () => {
        setTheme('Pastel');
        setColor('#B388EB');
    }

    return (
    <Draggable>
        <div 
          className="theme" 
          style={{ height: `${height}`, 
          width: `${width}`, 
          marginTop: `${marginTop}`,
          marginLeft: `${marginLeft}`,
          border: `solid 2px ${color}`, 
          display: `${display(hidden, minimized, fileName)}`, 
          backgroundColor: `${background}`, 
          zIndex: `${zIndex(fileName, zIn)}`}} onClick={() => setZin(fileName)}>

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

            <div className="theme-int">
                <div 
              className="theme-icon" 
              onClick={() => lightClick()}
              style={{ color: `${color}` }}>
                <div
                  className="color-block" 
                  style={{ 
                    height: '50px',
                    width: '50px',  
                    border: 'solid 1px black', 
                    backgroundColor: 'white' }} />
                <p>Light</p>
            </div>

                <div
                className="theme-icon"
                onClick={() => darkClick()}
                style={{ color: `${color}` }}>
                <div 
                  className="color-block" 
                  style={{ 
                    height: '50px',
                    width: '50px',  
                    border: 'solid 1px #00FF66', 
                    backgroundColor: 'black' }} />
                <p>Dark</p>
            </div>

                <div style={{ width: '85px' }}>
                    <div 
                        className="theme-icon" 
                        onClick={() => neonClick()}
                        style={{ color: `${color}` }}>
                        <div 
                        className="color-block" 
                        style={{ 
                            height: '50px',
                            width: '50px',  
                            border: 'solid 1px #F62DAE', 
                            backgroundColor: '#3A0052' }} />
                        <p>Neon</p>
                    </div>

                    {theme === 'Neon'
                    ? 
                    <div className="color-icons">
                        <div
                        className="tiny-color" 
                        style={{ 
                            width: '15px', 
                            height: '15px', 
                            backgroundColor: '#F62DAE'}} 
                        onClick={() => setColor('#F62DAE')} />

                        <div 
                        className="tiny-color"
                        style={{ 
                            width: '15px', 
                            height: '15px', 
                            backgroundColor: '#00FFCD'}} 
                        onClick={() => setColor('#00FFCD')} />

                        <div 
                        className="tiny-color"
                        style={{ 
                            width: '15px', 
                            height: '15px', 
                            backgroundColor: '#65FF5A'}} 
                        onClick={() => setColor('#65FF5A')} />

                        <div 
                        className="tiny-color"
                        style={{ 
                            width: '15px', 
                            height: '15px', 
                            backgroundColor: '#E100FF'}} 
                        onClick={() => setColor('#E100FF')} />
                    </div>
                    : null}
                </div>

                <div style={{ width: '85px' }}>
                <div 
                    className="theme-icon" 
                    onClick={() => pastelClick()}
                    style={{ color: `${color}` }}>
                    <div 
                      className="color-block" 
                      style={{
                        height: '50px',
                        width: '50px',  
                        border: 'solid 1px #B388EB', 
                        backgroundColor: '#FDC5F5' }} />
                    <p>Pastel</p>
                </div>
                {theme === 'Pastel'
                ? 
                <div className="color-icons">
                    <div 
                    className="tiny-color"
                    style={{ 
                        width: '15px', 
                        height: '15px', 
                        backgroundColor: '#B388EB'}} 
                    onClick={() => setColor('#B388EB')} />

                    <div 
                    className="tiny-color"
                    style={{ 
                        width: '15px', 
                        height: '15px', 
                        backgroundColor: '#8093F1'}} 
                    onClick={() => setColor('#8093F1')} />
                </div>
                : null
                }
                </div>
            </div>
        </div>
    </Draggable>
    )
}

export default Theme;
