import React from 'react';

const SingleQn = ({ question, options, cat, diff, event }) => (
  <div>
    <h2>{question}</h2>
    {options.map(i => (
      <div key={i}>
        <input
          type="radio"
          value={i}
          name="answers"
          id={i}
          onChange={e => event(e.target.value)}
        />
        <label htmlFor={i}>{i}</label>
      </div>
    ))}
    <div>
      <p>Category: {cat}</p>
      <p>Difficulty: {diff}</p>
    </div>
  </div>
);

export default SingleQn;
