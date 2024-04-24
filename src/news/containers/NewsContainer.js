import React, { useState, useEffect, useCallback } from 'react';

import NewsCategory from '../components/NewsCategory';
import NewsItems from '../components/NewsItems';

const NewsContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url =
      'https://newsapi.org/v2/top-headlines?country=kr&apiKey=6593897e9b3d40178104e2cb158f2866';

    fetch(url)
      .then((res) => res.json())
      .then((json) => setItems(json.articles));
  }, []);

  return (
    <>
      <NewsCategory />
      <NewsItems items={items} />
    </>
  );
};

export default React.memo(NewsContainer);
