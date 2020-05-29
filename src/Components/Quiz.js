import React, { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import SingleQn from './SingleQn';
import Fetch from './Fetch';

const Quiz = ({ cat, diff }) => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [num, setNum] = useState(0);
  const [correct, setCorrect] = useState('');
  const [qn, setQn] = useState({
    question: '',
    options: [],
    cat: '',
    diff: '',
  });
  const [txt, setTxt] = useState('');

  useEffect(() => {
    if (!loading) {
      const {
        question,
        correct_answer,
        incorrect_answers,
        category,
        difficulty,
      } = questions[num];

      const options = shuffle([...incorrect_answers, correct_answer]);
      setCorrect(correct_answer);
      setQn({ question, options, cat: category, diff: difficulty });
    }
  }, [loading, num, questions]);

  const checkAns = answer =>
    setTxt(
      answer === correct ? 'Correct' : `Wrong!!! Correct Answer is ${correct}`
    );

  return (
    <div>
      <Fetch setQns={setQuestions} setLoad={setLoading} cat={cat} diff={diff} />
      {loading ? (
        'Loading...'
      ) : (
        <div>
          <SingleQn {...qn} event={checkAns} />
          <h3>{txt}</h3>
          <button onClick={() => setNum(num + 1)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
