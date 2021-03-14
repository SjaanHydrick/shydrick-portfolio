import React, { Component } from 'react';
import Landing from './Slides/Landing';
import Bio from './Slides/Bio';
import Skills from './Slides/Skills';
import MVB from './Slides/MVB';
import Petreon from './Slides/Petreon';
import LovingMonsters from './Slides/LovingMonsters';
import Contact from './Slides/Contact';

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
            <Petreon />
          </Slide>
          <Slide>
            <LovingMonsters />
          </Slide>
          <Slide>
            <Contact />
          </Slide>
        </FullPage>
      </div>
    );
  }
}
