import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';

const App = () => {
  const [category, setCategory] = useState('Random');
  const [difficulty, setDifficulty] = useState('Random');

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home cat={category} diff={difficulty} setCat={setCategory} setDiff={setDifficulty} />
        </Route>
        <Route exact path="/quiz">
          <Quiz cat={category} diff={difficulty} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
