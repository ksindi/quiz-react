import React from 'react';
import { Radio, Card, Note } from '@zeit-ui/react';

const Rad = ({ val, disabled, chosen, event }) => {
  const value = decodeURIComponent(val);

  return (
    <Note label={false} style={{ marginTop: '10px' }}>
      <label htmlFor={value}>
        <Radio
          id={value}
          value={value}
          disabled={disabled}
          checked={value === chosen}
          onChange={() => event(value)}
          style={{}}
        >
          {value}
        </Radio>
      </label>
    </Note>
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
      {qnNum + 1}. <span style={{ color }}>{emo}</span> {decodeURIComponent(question)}{' '}
      <span style={{ color }}>{emo}</span>
    </h3>
    {options.map(i => (
      <Rad key={i} val={i} disabled={disabled} chosen={chosen} event={event} />
    ))}
    <p>Category: {decodeURIComponent(category)}</p>
    <p>Difficulty: {difficulty}</p>
    {txt}
  </Card>
);

export default Question;
