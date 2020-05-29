import React from 'react';

const Dropdown = ({ label, value, set, options }) => (
  <div>
    <label htmlFor={label}>Choose {label} </label>
    <select
      value={value}
      name={label}
      onChange={e => set(e.target.value)}
      onBlur={e => set(e.target.value)}
    >
      <option value="">Random</option>
      {options.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
