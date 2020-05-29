import React from 'react';
import Dropdown from './Dropdown';
import { categoryList, difficultyList } from '../utils/DropdownList';
import { Link } from 'react-router-dom';

const Home = ({ setCat, setDiff, cat, diff }) => (
  <div>
    <header>
      <h1>Welcome</h1>
    </header>
    <Dropdown
      label="Category"
      value={cat}
      set={setCat}
      options={categoryList}
    />
    <Dropdown
      label="Difficulty"
      value={diff}
      set={setDiff}
      options={difficultyList}
    />
    <Link to="/quiz">
      <button>Start</button>
    </Link>
  </div>
);

export default Home;
