import React from 'react';

const Quiz = ({ cat, diff }) => (
  <div>
    {`https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${diff}&encode=url3986`}
  </div>
);

export default Quiz;
