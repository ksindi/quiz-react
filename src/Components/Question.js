import React from 'react';

const Radio = ({ val, name, set }) => {
  const value = decodeURIComponent(val);

  return (
    <label htmlFor={value}>
      <input
        id={value}
        type="radio"
        name={name}
        value={value}
        onClick={() => set(value)}
      />
      {value}
    </label>
  );
};

const Question = ({ question, options, event, category, difficulty }) => (
  <div>
    <h3>{decodeURIComponent(question)}</h3>
    {options.map(i => (
      <Radio key={i} val={i} name="answers" set={event} />
    ))}
    <div>
      <p>Category: {decodeURIComponent(category)}</p>
      <p>Difficulty: {difficulty}</p>
    </div>
  </div>
);

export default Question;
