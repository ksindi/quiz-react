import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link as Lk } from 'react-router-dom';
import { Page, Link } from '@zeit-ui/react';
import Home from './Home';
import Quiz from './Quiz';

const App = () => {
  const [category, setCategory] = useState('Random');
  const [difficulty, setDifficulty] = useState('Random');

  return (
    <Router>
      <Page>
        <Page.Header>
          <Lk to="/" style={{ color: 'black' }}>
            <h1>Quiz</h1>
          </Lk>
        </Page.Header>
        <Page.Content>
          <Switch>
            <Route exact path="/">
              <Home cat={category} diff={difficulty} setCat={setCategory} setDiff={setDifficulty} />
            </Route>
            <Route exact path="/quiz">
              <Quiz cat={category} diff={difficulty} />
            </Route>
          </Switch>
        </Page.Content>
        <Page.Footer style={{ marginBottom: '15px' }}>
          Powered by{' '}
          <Link href="https://opentdb.com/" target="blank" icon color>
            Open Trivia DB
          </Link>
        </Page.Footer>
      </Page>
    </Router>
  );
};

export default App;
