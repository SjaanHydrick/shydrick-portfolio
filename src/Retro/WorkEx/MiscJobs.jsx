import React, { useState } from 'react';
import TopHeader from '../Landing/TopHeader';
import { useTheme } from '../../state/ThemeSelector';
import Draggable from 'react-draggable';
import { display, zIndex } from '../../utils/utils';

const MiscJobs = ({ background, fileName, hidden, setHidden, minimized, setMinimized, plainColor, zIn, setZin}) => {
    const { color } = useTheme();

    const [height, setHeight] = useState('350px');
    const [width, setWidth] = useState('550px');
    const [marginTop, setMarginTop] = useState('45vh');
    const [marginLeft, setMarginLeft] = useState('30vw');

    return (
        <Draggable>
            <div className="misc-jobs" style={{
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
                <div className="misc-jobs-int">
                    <h2>Misc. Jobs</h2>
                    <br />
                    <h3>Sleep Number</h3>
                    <p>Sleep Professional</p>
                    <p>2019 - 2020</p>
                    <br />
                    <p>Soft Skills:</p>
                    <ul>
                        <li>Teamwork</li>
                        <li>Adaptability</li>
                        <li>Organization</li>
                    </ul>
                    <br />
                    <p>Sold Sleep Number mattresses, bedding, and other sleep-centric products. Maintained a top 10 rank of salespeople within the district for 11 months. Regularly assisted other team members with closing due to excellent recall capabilities.</p>
                    <br />
                    <br />
                    <h3>Fig Jam Studio</h3>
                    <p>Editor/Assistant Videographer</p>
                    <p>2018 - 2020</p>
                    <br />
                    <p>Soft Skills:</p>
                    <ul>
                        <li>Focus</li>
                        <li>Creativity</li>
                        <li>Professionalism</li>
                    </ul>
                    <br />
                    <p>Edited and filmed videos for a small wedding videography company. Produced beautiful creative work on a tight schedule. Worked efficiently in a two-person team while attending professional events to get appropriate footage.</p>
                    <br />
                    <br />
                    <h3>Drucker and Falk</h3>
                    <p>Assistant Manager</p>
                    <p>2015 - 2018</p>
                    <br />
                    <p>Soft Skills:</p>
                    <ul>
                        <li>Diligence</li>
                        <li>Accountability</li>
                        <li>Time  Management</li>
                    </ul>
                    <br />
                    <p>Served as the assistant manager for a 275-unit apartment complex. Provided stability and guidance to residents during a period of high turnover of management. Memorized names and apartment numbers of 280+ residents. Routinely handled high-stress situations with patience, humility, and perseverance.</p>
                </div>
            </div>
        </Draggable>
    )
}

export default MiscJobs
