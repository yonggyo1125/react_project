import React from 'react';
import styled from 'styled-components';

const ItemBox = ({ item, className }) => {
  const { images, rstrNm, rstrIntrcnCont } = item;
  return (
    <li className={className}>
      {images && images.length > 0 && (
        <div className="photo">
          <img src={images[0].rstrImgUrl} alt={rstrNm} />
        </div>
      )}
      <div className="title">{rstrNm}</div>
      <div className="description">{rstrIntrcnCont}</div>
    </li>
  );
};

const ItemsBox = ({ items }) => {
  console.log('items', items);
  return (
    items && (
      <ul>
        {items.map((item) => (
          <ItemBox key={item.rstrId} item={item} />
        ))}
      </ul>
    )
  );
};

export default React.memo(ItemsBox);
