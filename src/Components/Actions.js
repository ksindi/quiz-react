import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@zeit-ui/react';

const Actions = ({ setNum, num }) => (
  <div>
    <div>
      <Button type="success" size="medium" onClick={() => setNum(num - 1)} disabled={num === 0}>
        Previous
      </Button>
      <span> </span>
      <Button type="success" size="medium" onClick={() => setNum(num + 1)} disabled={num === 9}>
        Next
      </Button>
    </div>
    <br />
    <Link to="/">
      <div>
        <Button type="secondary" size="medium">
          Start Over
        </Button>
      </div>
    </Link>
  </div>
);

export default Actions;
