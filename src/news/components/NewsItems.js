import React from 'react';
import styled from 'styled-components';
import fontSize from '../../styles/fontSize';
const { big } = fontSize;

const NewItemBox = styled.li`
  a {
    display: flex;

    img {
      width: 280px;
      margin-right: 30px;
    }

    .content-box {
      flex-grow: 1;

      .title {
        font-size: ${big};
        font-weight: 700;
        margin-bottom: 20px;
      }
    }
  }

  & + & {
    margin-top: 30px;
  }

`;

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
    <NewItemBox>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={urlToImage} alt={title} />
        <div className="content-box">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
      </a>
    </NewItemBox>
  );
};

export default React.memo(NewsItems);
