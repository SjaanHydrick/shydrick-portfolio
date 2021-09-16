const background = (theme) => {
    if(theme === 'Light') {
        return 'white'
    } else if (theme === 'Dark') {
        return 'black'
    } else if (theme === 'Neon') {
        return '#3A0052'
    } else if (theme === 'Pastel') {
        return '#FDC5F5'
    }
}

const plainColor = (color) => {
    if(color === '#F62DAE') {
        return 'Pink'
    } else if (color === '#00FFCD' || color === '#8093F1') {
        return 'Blue'
    } else if (color === '#65FF5A') {
        return 'Green'
    } else if (color === '#E100FF' || color === '#B388EB') {
        return 'Purple'
    }
}

const display = (hidden, minimized, fileName) => {
    if(hidden.includes(fileName) || minimized.includes(fileName)) {
        return 'none';
    } else {
        return 'inline'
    }
}

const zIndex = (fileName, z) => {
    if (z === fileName) {
        return "1"
    } else {
        return "0"
    }
}

const folder = (hidden, fileName, theme, setHidden, setZin, color) => {
    if (hidden.includes(fileName) && (theme === 'Light' || theme === 'Dark')) {
        return(
            <div style={{ backgroundImage: `url(/RetroAssets/${theme}/Folders/Closed/${theme}Folder.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} onDoubleClick={() => iconClick(fileName, setHidden, hidden, setZin)} />
        )
    } else if (!hidden.includes(fileName) && (theme === 'Light' || theme === 'Dark')) {
        return (
            <div style={{ backgroundImage: `url(/RetroAssets/${theme}/Folders/Open/${theme}FolderOpen.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} alt="Folder Open" />
        )
    } else if (hidden.includes(fileName) && (theme === 'Neon' ||  theme === 'Pastel')) {
        return (
            <div style={{ backgroundImage: `url(/RetroAssets/${theme}/Folders/Closed/${theme}${plainColor(color)}Folder.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            onDoubleClick={() => iconClick(fileName, setHidden, hidden, setZin)} />
        )
    } else if (!hidden.includes(fileName) && (theme === 'Neon' || theme === 'Pastel')) {
        return (
            <div style={{ backgroundImage: `url(/RetroAssets/${theme}/Folders/Open/${theme}${plainColor(color)}FolderOpen.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} alt="Folder Open" />
        )
    }
}

const notepad = (theme, fileName, setHidden, hidden, setZin, plainColor) => {
    if(theme === 'Light' || theme === 'Dark') {
        return(
            <div className="notepad" style={{ backgroundImage: `url(/RetroAssets/${theme}/Notepad/${theme}Notepad.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            onDoubleClick={() => iconClick(fileName, setHidden, hidden, setZin)} />
        )
    } else if (theme === 'Neon' || theme === 'Pastel') {
        return(
            <div className="notepad" style={{ backgroundImage: `url(/RetroAssets/${theme}/Notepad/${theme}${plainColor}Notepad.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
            onDoubleClick={() => iconClick(fileName, setHidden, hidden, setZin)} />
        )
    }
}

const iconClick = (fileName, setHidden, hidden, setZin) => {
    setHidden(hidden.filter(a => a !== fileName));
    setZin(fileName);
}

const setMax = (height, fileName, setHeight, setWidth, setMarginLeft, setMarginTop) => {
    if (height === '100vh') {
        if (fileName === 'about') {
            setHeight('275px');
            setWidth('450px');
            setMarginTop('10vh');
            setMarginLeft('40vw');
        } else if (fileName === 'projects') {
            setHeight('275px');
            setWidth('450px');
            setMarginTop('20vh');
            setMarginLeft('50vw');
        } else if (fileName === 'work_experience') {
            setHeight('275px');
            setWidth('450px');
            setMarginTop('30vh');
            setMarginLeft('60vw');
        } else if (fileName === 'about_me.txt') {
            setHeight('auto');
            setWidth('500px');
            setMarginTop('35vh');
            setMarginLeft('20vw');
        } else if (fileName === 'contact_links.txt') {
            setHeight('auto');
            setWidth('500px');
            setMarginTop('45vh');
            setMarginLeft('30vw');
        } else if (fileName === 'tech_stack.txt') {
            setHeight('auto');
            setWidth('500px');
            setMarginTop('50vh');
            setMarginLeft('40vw');
        } else if (fileName === 'gibberish.txt') {
            setHeight('500px');
            setWidth('550px');
            setMarginTop('5vh');
            setMarginLeft('20vw');
        } else if (fileName === 'loving_monsters.txt') {
            setHeight('500px');
            setWidth('550px');
            setMarginTop('10vh');
            setMarginLeft('30vw');
        } else if (fileName === 'petreon.txt') {
            setHeight('500px');
            setWidth('550px');
            setMarginTop('15vh');
            setMarginLeft('40vw');
        } else if (fileName === 'my_vampire_boyfriend.txt') {
            setHeight('500px');
            setWidth('550px');
            setMarginTop('20vh');
            setMarginLeft('50vw');
        } else if (fileName === 'kickstand.txt') {
            setHeight('350px');
            setWidth('550px');
            setMarginTop('35vh');
            setMarginLeft('20vw');
        } else if (fileName === 'misc_jobs.txt') {
            setHeight('350px');
            setWidth('550px');
            setMarginTop('15vh');
            setMarginLeft('40vw');
        } else if (fileName === 'education.txt') {
            setHeight('310px');
            setWidth('250px');
            setMarginTop('55vh');
            setMarginLeft('40vw');
        } else if (fileName === 'theme_selector') {
            setHeight('180px');
            setWidth('500px');
            setMarginTop('5vh');
            setMarginLeft('60vw');
        } else if (fileName === 'tarot_pull.jpg') {
            setHeight('auto');
            setWidth('250px');
            setMarginTop('40vh');
            setMarginLeft('80vw');
        }
    } else {
        setHeight('100vh');
        setWidth('100vw');
        setMarginTop('0');
        setMarginLeft('0');
    }
}

export { background, plainColor, display, zIndex, folder, notepad, iconClick, setMax };