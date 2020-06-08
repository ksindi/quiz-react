import React from 'react';
import { Button } from '@zeit-ui/react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { categoryList, difficultyList } from '../utils/DropdownList';

const Home = ({ cat, diff, setCat, setDiff }) => (
  <>
    <h3>Select Category and Difficulty to Start</h3>
    <Dropdown val={cat} label="Category" list={categoryList} event={setCat} />
    <Dropdown val={diff} label="Difficulty" list={difficultyList} event={setDiff} />
    <Link to="/quiz">
      <Button>Start</Button>
    </Link>
  </>
);

export default Home;
