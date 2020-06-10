import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ZeitProvider, CssBaseline, Page, Link as Lk } from '@zeit-ui/react';
import Home from './Home';
import Quiz from './Quiz';
import ThemeToggle from './ThemeToggle';
import Actions from './Actions';

const App = () => {
  const [category, setCategory] = useState('Random');
  const [difficulty, setDifficulty] = useState('Random');
  const [themeType, setThemeType] = useState(localStorage.getItem('theme') || 'light');
  const [score, setScore] = useState(0);
  const [num, setNum] = useState(0);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ZeitProvider theme={{ type: themeType }}>
        <CssBaseline />
        <Page dotBackdrop>
          <Page.Header>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Switch>
                <Route exact path="/">
                  <h1>Quiz</h1>
                </Route>
                <Route exact path="/quiz">
                  <h1>Score: {score}</h1>
                </Route>
              </Switch>
              <ThemeToggle
                handle={val => {
                  localStorage.setItem('theme', val ? 'dark' : 'light');
                  setThemeType(val ? 'dark' : 'light');
                }}
              />
            </div>
          </Page.Header>
          <Page.Content>
            <Switch>
              <Route exact path="/">
                <Home
                  cat={category}
                  diff={difficulty}
                  setCat={setCategory}
                  setDiff={setDifficulty}
                />
              </Route>
              <Route exact path="/quiz">
                <Quiz
                  cat={category}
                  diff={difficulty}
                  num={num}
                  setScore={setScore}
                  score={score}
                />
              </Route>
            </Switch>
          </Page.Content>
          <Page.Footer>
            <Switch>
              <Route exact path="/">
                Powered by{' '}
                <Lk href="https://opentdb.com/" target="blank" icon color>
                  Open Trivia DB
                </Lk>
              </Route>
              <Route exact path="/quiz">
                <Actions setNum={setNum} num={num} setScore={setScore} />
              </Route>
            </Switch>
          </Page.Footer>
        </Page>
      </ZeitProvider>
    </Router>
  );
};

export default App;
