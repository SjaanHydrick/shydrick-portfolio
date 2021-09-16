import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Landing from '../Landing/Landing.jsx';
import { ThemeProvider } from '../../state/ThemeSelector';
import "./App.css";
import cards from '../Landing/data/cards';

export default function App() {

  const [Provider] = useState(() => ThemeProvider);

  const card = cards[Math.ceil(Math.random() * 77)];

  const rev = () => {
      const reversed = Math.floor(Math.random() * 2);

      if (reversed === 0) {
          return 'none'
      } else {
          return 'scale(-1, -1)'
      }
  };

    return (
      <>
        <Router>
          <Provider>
            <Route
              exact path="/"
              render={(routerProps) => <Landing {...routerProps} card={card} rev={rev()} />}
              />
          </Provider>
        </Router>
      </>
    );
}
