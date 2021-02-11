import React, { Component } from 'react';
import Landing from './Slides/Landing';
import Bio from './Slides/Bio';
import Skills from './Slides/Skills';
import MVB from './Slides/MVB';
import Alchezoomy from './Slides/Alchezoomy';
import Petreon from './Slides/Petreon';
import Resume from './Slides/Resume';

import './style/App.css';
import { FullPage, Slide } from 'react-full-page';

export default class App extends Component {

  render() {
    return (
      <div>
        <FullPage
          scrollOverflow={false}>
          <Slide>
            <Landing />
          </Slide>
          <Slide>
            <Bio />
          </Slide>
          <Slide>
            <Skills />
          </Slide>
          <Slide>
            <MVB />
          </Slide>
          <Slide>
            <Alchezoomy />
          </Slide>
          <Slide>
            <Petreon />
          </Slide>
          <Slide>
            <Resume />
          </Slide>
        </FullPage>
      </div>
    );
  }
}
