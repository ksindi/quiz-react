import React from 'react';

const Radio = ({ val, disabled, chosen, event }) => {
  const value = decodeURIComponent(val);

  return (
    <label htmlFor={value}>
      <input
        type="radio"
        id={value}
        value={value}
        onChange={() => event(value)}
        disabled={disabled}
        checked={value === decodeURIComponent(chosen)}
      />
      {value}
    </label>
  );
};

const Question = ({
  question,
  category,
  difficulty,
  options,
  txt,
  disabled,
  chosen,
  event,
}) => (
  <div>
    <h2>{decodeURIComponent(question)}</h2>
    {options.map(i => (
      <Radio
        key={i}
        val={i}
        disabled={disabled}
        chosen={chosen}
        event={event}
      />
    ))}
    <p>Category: {decodeURIComponent(category)}</p>
    <p>Difficulty: {difficulty}</p>
    <p>{txt}</p>
  </div>
);

export default Question;