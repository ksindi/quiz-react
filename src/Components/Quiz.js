import React, { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import { Link } from 'react-router-dom';
import Question from './Question';
import { Button, ButtonGroup } from '@zeit-ui/react';

const Quiz = ({ cat, diff }) => {
  const [loading, setLoading] = useState('Loading...');
  const [score, setScore] = useState(0);
  const [num, setNum] = useState(0);
  const [ques, setQues] = useState([]);

  useEffect(() => {
    const d = async () => {
      const categ = cat === 'Random' ? '' : cat;
      const diffi = diff === 'Random' ? '' : diff;

      const { results } = await (
        await fetch(
          `https://opentdb.com/api.php?amount=10&category=${categ}&difficulty=${diffi}&encode=url3986`
        )
      ).json();

      if (results.length) {
        setQues(
          results.map(
            ({ question, category, difficulty, correct_answer, incorrect_answers }, j) => ({
              question,
              category,
              difficulty,
              correct: correct_answer,
              options: shuffle([...incorrect_answers, correct_answer]),
              qnNum: j,
              txt: '',
              emo: '',
              color: '',
              disabled: false,
              chosen: '',
            })
          )
        );

        return setLoading('');
      }

      return setLoading("That selection doesn't have enough questions.");
    };

    d();
  }, [cat, diff]);

  const handleChange = value => {
    const newQues = ques.slice();
    const cor = decodeURIComponent(newQues[num].correct);

    newQues[num].chosen = value;
    newQues[num].disabled = true;

    if (value === cor) {
      newQues[num].txt = 'Correct!!!';
      newQues[num].emo = '✔';
      newQues[num].color = 'green';
      setScore(score + 1);
      return setQues(newQues);
    }

    newQues[num].emo = '❌';
    newQues[num].color = 'red';
    newQues[num].txt = `Wrong!!! The Correct Answer is ${cor}`;
    return setQues(newQues);
  };

  return (
    <div>
      <div>{loading || <Question {...ques[num]} event={handleChange} />}</div>
      <div style={{ marginBottom: '0px' }}>
        <ButtonGroup style={{ marginLeft: '0' }}>
          <Button onClick={() => setNum(num - 1)} disabled={num === 0}>
            Previous
          </Button>
          <Button onClick={() => setNum(num + 1)} disabled={num === 9}>
            Next
          </Button>
        </ButtonGroup>
        <p>
          <strong>Score: </strong>
          {score}
        </p>
        <Link to="/">
          <Button size="large ">Start Over</Button>
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
