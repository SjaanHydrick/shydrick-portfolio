import React, { useState, createContext, useContext } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('Light');
    const [color, setColor] = useState('black');

    return (
        <ThemeContext.Provider value={{ theme, setTheme, color, setColor }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => {
    const { theme } = useContext(ThemeContext);
    const { setTheme } = useContext(ThemeContext);
    const { color } = useContext(ThemeContext);
    const { setColor } = useContext(ThemeContext);
    return { theme, setTheme, color, setColor };
};
