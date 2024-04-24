import React, { useState, useEffect, useCallback } from 'react';

import NewsCategory from '../components/NewsCategory';
import NewsItems from '../components/NewsItems';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '경제',
  },
  {
    name: 'entertainment',
    text: '방송/연예',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const NewsContainer = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const addQs = category === 'all' ? '' : `&category=${category}`;
    const url = `https://newsapi.org/v2/top-headlines?country=kr${addQs}&apiKey=6593897e9b3d40178104e2cb158f2866`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => setItems(json.articles));
  }, [category]);

  const onClick = useCallback((category) => setCategory(category), []);

  return (
    <>
      <NewsCategory categories={categories} onClick={onClick} />
      <NewsItems items={items} />
    </>
  );
};

export default React.memo(NewsContainer);
