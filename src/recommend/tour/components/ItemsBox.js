import React from 'react';
import styled from 'styled-components';

const ItemBox = ({ item, className }) => {
  return <li className={className}></li>;
};

const ItemStyledBox = styled(ItemBox)``;

const ItemsBox = ({ items }) => {
  return (
    items.length > 0 &&
    items.map((item) => <ItemStyledBox key={item.seq} item={item} />)
  );
};

export default React.memo(ItemsBox);
