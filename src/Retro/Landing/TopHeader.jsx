import React from 'react';
import { useTheme } from '../../state/ThemeSelector';
import { setMax } from '../../utils/utils'

const TopHeader = ({ fileName, minimized, setMinimized, hidden, setHidden, plainColor, height, setMarginLeft, setMarginTop, setHeight, setWidth }) => {
    const { color, theme } = useTheme();

    const setMin = () => {
        setMinimized(minimized.concat(fileName))
    }

    return (
        <div className="top-header" style={{ borderBottom: `solid 1px ${color}`}}>
            {theme === 'Light' || theme === 'Dark' 
            ? 
            <>           
            <img src={`/RetroAssets/${theme}/Close/${theme}Close.png`} alt="Close Div"
            onClick={() => setHidden(hidden.concat(fileName))}  />
            <img src={`/RetroAssets/${theme}/Min/${theme}Min.png`} alt="Minimize Div" onClick={() => setMin()}/>
            <img src={`/RetroAssets/${theme}/Max/${theme}Max.png`} alt="Maximize Div" onClick={() => setMax(height, fileName, setHeight, setWidth, setMarginLeft, setMarginTop)} />
            <span style={{ color: `${color}`, marginLeft: '10px' }}>{fileName}</span>
            </>
            : 
            <>           
            <img src={`/RetroAssets/${theme}/Close/${theme}${plainColor}Close.png`} alt="Close Div" onClick={() => setHidden(hidden.concat(fileName))} />
            <img src={`/RetroAssets/${theme}/Min/${theme}${plainColor}Min.png`} alt="Minimize Div" onClick={() => setMinimized()}/>
            <img src={`/RetroAssets/${theme}/Max/${theme}${plainColor}Max.png`} alt="Maximize Div" onClick={() => setMax(height, fileName, setHeight, setWidth, setMarginLeft, setMarginTop)} />
            <span style={{ color: `${color}`, marginLeft: '10px' }}>{fileName}</span>
            </>   
        }
        </div>
    )
}

export default TopHeader
