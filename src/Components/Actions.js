import React from 'react';
import { Button, ButtonGroup } from '@zeit-ui/react';
import { Link } from 'react-router-dom';

const Actions = ({ setNum, num, setScore }) => (
  <ButtonGroup type="success" size="medium" style={{ marginLeft: '0' }}>
    <Button onClick={() => setNum(num - 1)} disabled={num === 0}>
      Previous
    </Button>
    <Button
      style={{ backgroundColor: '#0070F3' }}
      onClick={() => {
        setScore(0);
        setNum(0);
      }}
    >
      <Link to="/" style={{ color: 'white' }}>
        Start Over
      </Link>
    </Button>
    <Button onClick={() => setNum(num + 1)} disabled={num === 9}>
      Next
    </Button>
  </ButtonGroup>
);

export default Actions;
