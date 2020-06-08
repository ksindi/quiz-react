import React from 'react';
import { Toggle } from '@zeit-ui/react';
import { Moon, Sun } from '@zeit-ui/react-icons';

const ThemeToggle = ({ handle }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <label>
      <span style={{ marginRight: '10px' }}>
        <Sun size="20" />
      </span>
      <Toggle
        size="medium"
        onChange={e => handle(e.target.checked)}
        checked={localStorage.getItem('theme') === 'dark'}
      />
      <span style={{ marginLeft: '10px' }}>
        <Moon size="20" />
      </span>
    </label>
  </div>
);

export default ThemeToggle;
