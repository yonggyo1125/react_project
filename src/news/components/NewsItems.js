import React from 'react';
import styled from 'styled-components';

const NewsItems = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <NewsItem key={item.url} item={item} />
      ))}
    </ul>
  );
};

const NewsItem = ({ item }) => {
  const { urlToImage, url, title, description } = item;
  return (
    <li>
      <img src={urlToImage} alt={title} />
      <div className="content-box">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </li>
  );
};

export default React.memo(NewsItems);
