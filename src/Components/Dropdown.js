import React from 'react';
import { Select } from '@zeit-ui/react';

const Dropdown = ({ val, label, list, event }) => (
  <div style={{ margin: '20px 0 20px 0' }}>
    <label htmlFor={label}>
      <span style={{ margin: '0 15px 0 0' }}>{label}</span>
      <Select value={val} id={label} onChange={val => event(val)} disableMatchWidth>
        <Select.Option value="Random" defaultChecked>
          Random
        </Select.Option>
        {list.map(({ id, name }) => (
          <Select.Option key={id} value={id.toString()}>
            {name}
          </Select.Option>
        ))}
      </Select>
    </label>
  </div>
);

export default Dropdown;
