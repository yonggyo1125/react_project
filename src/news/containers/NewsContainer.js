import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  let { category } = useParams();
  category = category ?? 'all';

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const addQs = category === 'all' ? '' : `&category=${category}`;
    const url = `https://newsapi.org/v2/top-headlines?country=kr${addQs}&apiKey=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => setItems(json.articles));
  }, [category]);

  return (
    <>
      <NewsCategory categories={categories} />
      <NewsItems items={items} />
    </>
  );
};

export default React.memo(NewsContainer);
