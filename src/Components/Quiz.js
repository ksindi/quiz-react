import React, { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import Data from './Data';
import Question from './Question';
import { Link } from 'react-router-dom';

const Quiz = ({ cat, diff }) => {
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [d, setD] = useState(false);
  const [pre, setPre] = useState([]);
  const [results, setResults] = useState('');
  const [num, setNum] = useState(0);
  const [correct, setCorrect] = useState('');
  const [txt, setTxt] = useState('');
  const [qn, setQn] = useState({
    question: '',
    options: [],
    category: '',
    difficulty: '',
  });

  useEffect(() => {
    if (!loading) {
      const {
        category,
        difficulty,
        question,
        correct_answer,
        incorrect_answers,
      } = results[num];

      setQn({
        question,
        options: shuffle([...incorrect_answers, correct_answer]),
        category,
        difficulty,
      });

      setCorrect(decodeURIComponent(correct_answer));
      setTxt('');
    }
  }, [num, results, loading]);

  const handleChange = val => {
    setPre(pre.concat(val));

    setD(true);

    if (val === correct) {
      setTxt('Correct');
      return setScore(score + 1);
    }

    setTxt(`Incorrect!!! The Correct Answer is ${correct}`);
  };

  return (
    <div>
      <Data set={setResults} cat={cat} diff={diff} load={setLoading} />
      <Question {...qn} event={handleChange} d={d} c={pre[num]} />
      <p>{txt}</p>
      <p>{score}</p>
      <div>
        <button
          onClick={() => {
            setNum(num - 1);
            setD(true);
          }}
          disabled={num === 0}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setNum(num + 1);
            setD(false);
          }}
          disabled={num === 9}
        >
          Next
        </button>
      </div>
      <div>
        <Link to="/">
          <button>Start Over</button>
        </Link>
      </div>
    </div>
  );
};

export default Quiz;

// NEEDS REFACTORING WITH DIFFERENT STATE LOGIC
