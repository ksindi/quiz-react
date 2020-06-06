import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';

const App = () => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');

  return (
    <BrowserRouter>
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
          <Quiz cat={category} diff={difficulty} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
