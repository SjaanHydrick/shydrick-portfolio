import React, { useState } from 'react';
import TopHeader from '../Landing/TopHeader';
import Draggable from 'react-draggable';
import { useTheme } from '../../state/ThemeSelector';
import { display, zIndex } from '../../utils/utils';

const CardPull = ({ background, fileName, minimized, setMinimized, hidden, setHidden, plainColor, card, rev, zIn, setZin }) => {
    const { color, theme } = useTheme();
    const [height, setHeight] = useState('auto');
    const [width, setWidth] = useState('250px');
    const [marginTop, setMarginTop] = useState('40vh');
    const [marginLeft, setMarginLeft] = useState('80vw');

    const cardDisplay = (theme) => {
        if(card.suit !== null) {
            return(
            <div className="card" style={{ border: `solid 1px ${color}`, width: `125px`, height: `200px`, transform: `${rev}`}}>
                <img src={`/RetroAssets/${theme}/Tarot/${card.suit}s/${card.img}${theme}.png`} alt={`${card.name}`} />
            </div>
            )
        } else {
            return(
            <div className="card" style={{ border: `solid 1px ${color}`, width: `125px`, height: `200px`, transform: `${rev}` }}>
                <img src={`/RetroAssets/${theme}/Tarot/${card.img}${theme}.png`} alt={`${card.name}`} />
            </div>
            )
        }
    }

    return (
    <Draggable>
        <div className="tarot" style={{
            height: `${height}`, 
            width: `${width}`, 
            marginTop: `${marginTop}`,
            marginLeft: `${marginLeft}`,
            border: `solid 2px ${color}`,
            display: `${display(hidden, minimized, fileName)}`,
            backgroundColor: `${background}`,
            zIndex: `${zIndex(fileName, zIn)}`
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
            <div className="tarot-int" style={{ color: `${color}`}}>
            {cardDisplay(theme)}
            <h2>{card.name}</h2>
            <p>{rev === 'none' ? card.meaning : card.meaning_rev}</p>
            </div>
        </div>
    </Draggable>
    )
}

export default CardPull
