import React from 'react';
import Dropdown from './Dropdown';
import { categoryList, difficultyList } from '../utils/DropdownList';
import { Link } from 'react-router-dom';

const Home = ({ cat, diff, setCat, setDiff }) => (
  <div>
    <header>
      <h2>Welcome</h2>
    </header>
    <Dropdown val={cat} label="Category" list={categoryList} event={setCat} />
    <Dropdown
      val={diff}
      label="Difficulty"
      list={difficultyList}
      event={setDiff}
    />
    <Link to="/quiz">
      <button>Start</button>
    </Link>
  </div>
);

export default Home;
