import React from 'react';
import { Toggle } from '@zeit-ui/react';
import { Moon, Sun } from '@zeit-ui/react-icons';

const ThemeToggle = ({ handle, theme }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <span style={{ marginRight: '10px' }}>
      <Sun />
    </span>
    <Toggle size="large" onChange={e => handle(e.target.checked)} checked={theme === 'dark'} />
    <span style={{ marginLeft: '10px' }}>
      <Moon />
    </span>
  </div>
);

export default ThemeToggle;
