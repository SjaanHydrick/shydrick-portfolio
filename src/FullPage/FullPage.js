import React, { Component } from 'react';
import Alchezoomy from '../Slides/Alchezoomy';
import Bio from '../Slides/Bio';
import Landing from '../Slides/Landing';
import MVB from '../Slides/MVB';
import Petreon from '../Slides/Petreon';
import Resume from '../Slides/Resume';
import Skills from '../Slides/Skills';

export default class FullPage extends Component {
    render() {
        return (
            <div>
                <Landing />
                <Bio />
                <Skills />
                <MVB />
                <Alchezoomy />
                <Petreon />
                <Resume />
            </div>
        )
    }
}
