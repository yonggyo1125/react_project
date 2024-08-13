import React from 'react';
import styled from 'styled-components';

const ItemBox = ({ item, className }) => {
  return <li className={className}></li>;
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
