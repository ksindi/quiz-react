import React from 'react';
import { Page, Button, Link as Lk } from '@zeit-ui/react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { categoryList, difficultyList } from '../utils/DropdownList';

const Home = ({ cat, diff, setCat, setDiff }) => (
  <Page dotBackdrop>
    <Page.Header>
      <h1>Quiz</h1>
    </Page.Header>
    <Page.Content>
      <h3>Select Category and Difficulty to Start</h3>
      <Dropdown val={cat} label="Category" list={categoryList} event={setCat} />
      <Dropdown val={diff} label="Difficulty" list={difficultyList} event={setDiff} />
      <Link to="/quiz">
        <Button>Start</Button>
      </Link>
    </Page.Content>
    <Page.Footer>
      Powered by{' '}
      <Lk href="https://opentdb.com/" target="blank" icon color>
        Open Trivia DB
      </Lk>
    </Page.Footer>
  </Page>
);

export default Home;
