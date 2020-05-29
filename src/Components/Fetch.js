import React, { useEffect } from 'react';

const Fetch = ({ setQns, setLoad, cat, diff }) => {
  useEffect(() => {
    const data = async () => {
      const { results } = await (
        await fetch(
          `https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${diff}&type=multiple`
        )
      ).json();
      setQns(results);
      setLoad(false);
    };

    data();
  }, [cat, diff, setLoad, setQns]);

  return <div></div>;
};

export default Fetch;
