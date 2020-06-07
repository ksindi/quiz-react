import React from 'react';
import { Radio, Card } from '@zeit-ui/react';

const Rad = ({ val, disabled, chosen, event }) => {
  const value = decodeURIComponent(val);

  return (
    <label htmlFor={val}>
      <Radio
        id={value}
        value={value}
        disabled={disabled}
        checked={value === chosen}
        onChange={() => event(value)}
      >
        {value}
      </Radio>
    </label>
  );
};

const Question = ({
  question,
  category,
  difficulty,
  options,
  txt,
  color,
  qnNum,
  emo,
  disabled,
  chosen,
  event,
}) => (
  <Card>
    <h3>
      {qnNum + 1}. {decodeURIComponent(question)} <span style={{ color }}>{emo}</span>
    </h3>
    {options.map(i => (
      <Rad key={i} val={i} disabled={disabled} chosen={chosen} event={event} />
    ))}
    <p>Category: {decodeURIComponent(category)}</p>
    <p>Difficulty: {difficulty}</p>
    <p>{txt}</p>
  </Card>
);

export default Question;
