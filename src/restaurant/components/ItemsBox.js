import React from 'react';
import styled from 'styled-components';

const ItemBox = ({ item, className }) => {
  const { images, rstrNm, rstrIntrcnCont } = item;
  return (
    <li className={className}>
      {images && images.length > 0 && (
        <div className="photo">
          <img src={images[0]} alt={rstrNm} />
        </div>
      )}
    </li>
  );
};

const ItemsBox = ({ items }) => {
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
