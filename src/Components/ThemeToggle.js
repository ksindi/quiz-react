import React from 'react';
import { Toggle } from '@zeit-ui/react';
import { Moon, Sun } from '@zeit-ui/react-icons';

const ThemeToggle = ({ handle }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <label>
      <span style={{ marginRight: '10px' }}>
        <Sun />
      </span>
      <Toggle
        size="large"
        onChange={e => handle(e.target.checked)}
        checked={localStorage.getItem('theme') === 'dark'}
      />
      <span style={{ marginLeft: '10px' }}>
        <Moon />
      </span>
    </label>
  </div>
);

export default ThemeToggle;
