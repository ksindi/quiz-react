import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { categoryList, difficultyList } from '../utils/DropdownList';
import { Button } from '@zeit-ui/react';

const Home = ({ cat, diff, setCat, setDiff }) => (
  <div>
    <h3>Select Category and Difficulty to Start</h3>
    <Dropdown val={cat} label="Category" list={categoryList} event={setCat} />
    <Dropdown val={diff} label="Difficulty" list={difficultyList} event={setDiff} />
    <Link to="/quiz">
      <Button>Start</Button>
    </Link>
  </div>
);

export default Home;
