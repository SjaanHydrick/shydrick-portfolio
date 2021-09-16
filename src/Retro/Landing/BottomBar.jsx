import React, { useState, useEffect } from 'react';
import StartMenu from './StartMenu';
import { useTheme } from '../../state/ThemeSelector';

const BottomBar = ({ background, minimized, setMinimized, hidden, setHidden }) => {
    const [date, setDate] = useState(new Date());
    const [disTime, setDisTime] = useState('')
    const [startHidden, setStartHidden] = useState('none');

    const { color } = useTheme();

    useEffect(() => {
        const timerID = setInterval(() => time(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        }
    })

    let disHour;
    let disMin;
    let ampm;

    const time = () => {
        setDate(new Date())

        const hours = date.getHours();
        const min = date.getMinutes();

        if (hours === '0') {
            disHour = '12';
            ampm = "AM"
        } else if (hours > 12) {
            disHour = `${hours - 12}`
            ampm = "PM"
        } else {
            disHour = hours
            ampm = "AM"
        }

        if (min < 10) {
            disMin = `0${min}`;
        } else {
            disMin = min;
        }

        setDisTime(`${disHour}:${disMin} ${ampm}`)
    }

    const removeMin = (i) => {
        setMinimized(minimized.filter(a => a !== i));
    }

    const minList = () => minimized.map((i) => {
        return(
            <div key={i}
            className="minimized-item" style={{ border: `solid 2px ${background}` }} onClick={() => removeMin(i)}>
                <span>{i}</span>
            </div>
    
        )
    });

    return (
        <>
        <div className="start-container" style={{ display: `${startHidden}`}} onMouseLeave={() => setStartHidden('none')}>
            <StartMenu background={background} hidden={hidden} setHidden={setHidden} />
        </div>
        <div className='bottom-bar' style={{ backgroundColor: `${color}`, color: `${background}`, zIndex: '2'}}>
            <div className="start" style={{ border: `solid 2px ${background}`, "&:hover": { backgroundColor: `${background}`, color: `${color}`} }} onClick={() => setStartHidden('inline')}>
                Start
            </div>
            <div className="time" style={{ backgroundColor: `${background}`, color: `${color}` }}>
                <span>{disTime}</span>
            </div>
            <div className="minimized">
                {minList()}
            </div>
        </div>
        </>
    )
}

export default BottomBar;
