import React from 'react';

const Radio = ({ val, name, set, d, c }) => {
  const value = decodeURIComponent(val);

  return (
    <label htmlFor={value}>
      <input
        id={value}
        type="radio"
        name={name}
        value={value}
        onChange={() => set(value)}
        disabled={d}
        checked={decodeURIComponent(c) === value}
      />
      {value}
    </label>
  );
};

const Question = ({ question, options, event, category, difficulty, d, c }) => (
  <div>
    <h3>{decodeURIComponent(question)}</h3>
    {options.map(i => (
      <Radio key={i} val={i} name="answers" set={event} d={d} c={c} />
    ))}
    <div>
      <p>Category: {decodeURIComponent(category)}</p>
      <p>Difficulty: {difficulty}</p>
    </div>
  </div>
);

export default Question;
