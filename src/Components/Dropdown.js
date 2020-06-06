import React from 'react';

const Dropdown = ({ val, label, list, event }) => (
  <label htmlFor={label}>
    {label}
    <select
      value={val}
      id={label}
      onChange={e => event(e.target.value)}
      onBlur={e => event(e.target.value)}
    >
      <option value="">Random</option>
      {list.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  </label>
);

export default Dropdown;
