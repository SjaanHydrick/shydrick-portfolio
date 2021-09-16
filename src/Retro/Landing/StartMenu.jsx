import React, { useState } from 'react';
import { useTheme } from '../../state/ThemeSelector';

const StartMenu = ({ hidden, setHidden, background }) => {
    const { color } = useTheme();

    const [favHidden, setFavHidden] = useState('none');
    const [docHidden, setDocHidden] = useState('none');
    const [settingHidden, setSettingHidden] = useState('none');
    const [shutClass, setShutClass] = useState('')

    const shutFunc = () => {
        setShutClass('shut-down');
        setInterval(() => window.location.reload(), 10000);
    }

    return (
        <div className="start-menu" style={{ border: `solid 2px ${color}`, backgroundColor: `${background}`, color: `${color}`}}>
            <h1 onMouseOver={() => setFavHidden('inline')} onMouseLeave={() => setFavHidden('none')}>Favorites &#62;</h1>
                <div className="favorites" style={{ border: `solid 2px ${color}`, backgroundColor: `${background}`, color: `${color}`, display: `${favHidden}`}} onMouseOver={() => setFavHidden('inline')} onMouseLeave={() => setFavHidden('none')}>
                    <h2 onClick={() => setHidden(hidden.filter(a => a !== "tarot_pull.jpg"))}>tarot_pull.jpg</h2>
                </div>
            <h1 onMouseOver={() => setDocHidden('inline')} onMouseLeave={() => setDocHidden('none')}>Documents &#62;</h1>
                <div className="documents" style={{ border: `solid 2px ${color}`, backgroundColor: `${background}`, color: `${color}`, display: `${docHidden}`}} onMouseOver={() => setDocHidden('inline')} onMouseLeave={() => setDocHidden('none')}>
                    <h2 onClick={() => setHidden(hidden.filter(a => a !== "about_me.txt"))}>about_me.txt</h2>
                    <h2 onClick={() => setHidden(hidden.filter(a => a !== "tech_stack.txt"))}>tech_stack.txt</h2>
                    <h2 onClick={() => setHidden(hidden.filter(a => a !== "contact_links.txt"))}>contact_links.txt</h2>
                    <h2 onClick={() => setHidden(hidden.filter(a => a !== "gibberish.txt"))}>gibberish.txt</h2>
                    <h2 onClick={() => setHidden(hidden.filter(a => a !== "loving_monsters.txt"))}>loving_monsters.txt</h2>
                    <h2 onClick={() => setHidden(hidden.filter(a => a !== "petreon.txt"))}>petreon.txt</h2>
                    <h2 onClick={() => setHidden(hidden.filter(a => a !== "my_vampire_boyfriend.txt"))}>my_vampire_boyfriend.txt</h2>
                    <h2 onClick={() => setHidden(hidden.filter(a => a !== "kickstand.txt"))}>kickstand.txt</h2>
                    <h2 onClick={() => setHidden(hidden.filter(a => a !== "misc_jobs.txt"))}>misc_jobs.txt</h2>
                    <h2 onClick={() => setHidden(hidden.filter(a => a !== "education.txt"))}>education.txt</h2>
                </div>
            <h1 onMouseOver={() => setSettingHidden('inline')} onMouseLeave={() => setSettingHidden('none')}>Settings &#62;</h1>
                <div className="settings" style={{ border: `solid 2px ${color}`, backgroundColor: `${background}`, color: `${color}`, display: `${settingHidden}`}} onMouseOver={() => setSettingHidden('inline')} onMouseLeave={() => setSettingHidden('none')}>
                    <h2 onClick={() => setHidden(hidden.filter(a => a !== "theme_selector"))}>theme_selector</h2>
                </div>
            <br /><br /><br /><br />
            <h1 style={{ borderTop: `solid 1px ${color}`, width: `90%`, paddingTop: '7px'}} onClick={() => shutFunc()}>Shut Down</h1>
                <div className={`${shutClass}`}>
                    <div className="shut-container">
                    </div>
                </div>
        </div>
    )
}

export default StartMenu
