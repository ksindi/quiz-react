import React, { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import Question from './Question';
import { Link } from 'react-router-dom';

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

      setQues(
        results.map(({ question, category, difficulty, correct_answer, incorrect_answers }) => ({
          question,
          category,
          difficulty,
          correct: correct_answer,
          options: shuffle([...incorrect_answers, correct_answer]),
          txt: '',
          disabled: false,
          chosen: '',
        }))
      );

      setLoading('');
    };

    d();
  }, [cat, diff]);

  const handleChange = value => {
    const newQues = ques.slice();
    const cor = decodeURIComponent(newQues[num].correct);

    newQues[num].chosen = value;
    newQues[num].disabled = true;

    if (value === cor) {
      newQues[num].txt = 'Correct';
      setScore(score + 1);
      return setQues(newQues);
    }

    newQues[num].txt = `Incorrect!!! The Correct Answer is ${cor}`;
    return setQues(newQues);
  };

  return (
    <div>
      <div>{loading || <Question {...ques[num]} event={handleChange} />}</div>
      <p>{score}</p>
      <button onClick={() => setNum(num - 1)} disabled={num === 0}>
        Previous
      </button>
      <button onClick={() => setNum(num + 1)} disabled={num === 9}>
        Next
      </button>
      <div>
        <Link to="/">
          <button>Start Over</button>
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
