import React, { useState } from 'react';
import Theme from './Theme';
import About from '../About/About';
import Bio from '../About/Bio';
import BottomBar from './BottomBar';
import CardPull from './CardPull';
import ContactInfo from '../About/ContactInfo';
import Draggable from 'react-draggable';
import Education from '../WorkEx/Education';
import Gibberish from '../Projects/Gibberish';
import Kickstand from '../WorkEx/Kickstand';
import LovingMonsters from '../Projects/LovingMonsters';
import MiscJobs from '../WorkEx/MiscJobs';
import MVB from '../Projects/MVB';
import Petreon from '../Projects/Petreon';
import Projects from '../Projects/Projects';
import TechStack from '../About/TechStack';
import WorkEx from '../WorkEx/WorkEx';
import { useTheme } from '../../state/ThemeSelector';
import { background, plainColor, folder } from '../../utils/utils';
import './Landing.css';

const Landing = ({ card, rev }) => {

    const { theme, color } = useTheme();

    const [hidden, setHidden] = useState(["about", "projects", "work_experience", "about_me.txt", "contact_links.txt", "gibberish.txt", "loving_monsters.txt", "petreon.txt", "my_vampire_boyfriend.txt", "kickstand.txt", "misc_jobs.txt", "tech_stack.txt", "education.txt"]);
    const [minimized, setMinimized] = useState([]);
    const [zIn, setZin] = useState('');

    return (
        <div 
          className="landing"
          style={{ backgroundColor: `${background(theme)}` }}
          >
            <div className="folders">
                <Draggable>
                    <div className="about-folder">
                        {folder(hidden, "about", theme, setHidden, setZin, color)}
                        <p style={{ color: `${color}` }}>About</p>
                    </div>
                </Draggable>

                <Draggable>
                    <div className="projects-folder">
                        {folder(hidden, "projects", theme, setHidden, setZin, color)}
                        <p style={{ color: `${color}` }}>Projects</p>
                    </div>
                </Draggable>

                <Draggable>
                    <div className="workex-folder">
                        {folder(hidden, "work_experience", theme, setHidden, setZin, color)}
                        <p style={{ color: `${color}` }}>Work Experience</p>
                    </div>
                </Draggable>
            </div>
            <Theme 
                background={background(theme)} 
                fileName="theme_selector"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
                />
            <Bio
                background={background(theme)}
                fileName="about_me.txt"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
            />
            <TechStack
                background={background(theme)}
                fileName="tech_stack.txt"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
            />
            <ContactInfo
                background={background(theme)}
                fileName="contact_links.txt"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
            />
            <About 
                background={background(theme)} 
                fileName="about"
                hidden={hidden}  
                setHidden={setHidden}
                minimized={minimized} 
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
                />
            <CardPull 
                background={background(theme)}
                card={card}
                fileName="tarot_pull.jpg"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                rev={rev}
                zIn={zIn}
                setZin={setZin}
            />
            <Projects
                background={background(theme)}
                fileName="projects"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
            />
            <Gibberish
                background={background(theme)}
                fileName="gibberish.txt"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
            />
            <LovingMonsters
                background={background(theme)}
                fileName="loving_monsters.txt"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
            />
            <Petreon
                background={background(theme)}
                fileName="petreon.txt"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
            />
            <MVB
                background={background(theme)}
                fileName="my_vampire_boyfriend.txt"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
            />
            <WorkEx
                background={background(theme)}
                fileName="work_experience"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
            />
            <Kickstand
                background={background(theme)}
                fileName="kickstand.txt"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
            />
            <MiscJobs
                background={background(theme)}
                fileName="misc_jobs.txt"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
            />
            <Education
                background={background(theme)}
                fileName="education.txt"
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized}
                setMinimized={setMinimized}
                plainColor={plainColor(color)}
                zIn={zIn}
                setZin={setZin}
            />
            <BottomBar
                background={background(theme)} 
                hidden={hidden}
                setHidden={setHidden}
                minimized={minimized} 
                setMinimized={setMinimized}
            />
        </div>
    )
}

export default Landing
