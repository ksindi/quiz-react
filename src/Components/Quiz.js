import React, { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import { Page } from '@zeit-ui/react';
import Question from './Question';
import Actions from './Actions';

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
          `https://opentdb.com/api.php?amount=10&category=${categ}&difficulty=${diffi}&type=multiple&encode=url3986`
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
    <Page>
      <Page.Header>
        <h2>Score: {score}</h2>
      </Page.Header>
      <Page.Content>
        <div>{loading || <Question {...ques[num]} event={handleChange} />}</div>
      </Page.Content>
      <Page.Footer>
        <Actions setNum={setNum} num={num} />
      </Page.Footer>
    </Page>
  );
};

export default Quiz;
