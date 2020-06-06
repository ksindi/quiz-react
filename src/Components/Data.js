import React, { useEffect } from 'react';

const Data = ({ set, cat, diff, load }) => {
  useEffect(() => {
    const d = async () => {
      const { results } = await (
        await fetch(
          `https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${diff}&encode=url3986`
        )
      ).json();

      set(results);
      load(false);
    };

    d();
  }, [cat, diff, set, load]);

  return <div></div>;
};

export default Data;
