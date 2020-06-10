import React, { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import Question from './Question';

const Quiz = ({ cat, diff, num, score, setScore }) => {
  const [loading, setLoading] = useState('Loading...');
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

      return setLoading(
        "That selection doesn't have enough questions. Go back and choose different combination"
      );
    };

    d();
  }, [cat, diff]);

  const handleChange = value => {
    const newQues = ques.slice();
    const cor = decodeURIComponent(newQues[num].correct);

    newQues[num].chosen = value;
    newQues[num].disabled = true;

    if (value === cor) {
      newQues[num].txt = <p>Correct!!!</p>;
      newQues[num].emo = '✔';
      newQues[num].color = 'green';
      setScore(score + 1);
      return setQues(newQues);
    }

    newQues[num].emo = '❌';
    newQues[num].color = 'red';
    newQues[num].txt = (
      <p>
        Wrong!!! The Correct Answer is <strong>{cor}</strong>
      </p>
    );
    return setQues(newQues);
  };

  return <div>{loading || <Question {...ques[num]} event={handleChange} />}</div>;
};

export default Quiz;
