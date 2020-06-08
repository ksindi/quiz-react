import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ZeitProvider, CssBaseline } from '@zeit-ui/react';
import Home from './Home';
import Quiz from './Quiz';
import ThemeToggle from './ThemeToggle';

const App = () => {
  const [category, setCategory] = useState('Random');
  const [difficulty, setDifficulty] = useState('Random');
  const [themeType, setThemeType] = useState('light');

  return (
    <ZeitProvider theme={{ type: themeType }}>
      <CssBaseline />
      <ThemeToggle handle={val => setThemeType(val ? 'dark' : 'light')} />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Home cat={category} diff={difficulty} setCat={setCategory} setDiff={setDifficulty} />
          </Route>
          <Route exact path="/quiz">
            <Quiz cat={category} diff={difficulty} />
          </Route>
        </Switch>
      </Router>
    </ZeitProvider>
  );
};

export default App;
