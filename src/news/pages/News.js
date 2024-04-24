import React, { useEffect } from 'react';

const News = () => {
  useEffect(() => {
    const url =
      'https://newsapi.org/v2/top-headlines?country=kr&apiKey=6593897e9b3d40178104e2cb158f2866';
    fetch(url)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return <h1>뉴스</h1>;
};

export default React.memo(News);
