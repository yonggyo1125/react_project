import React from 'react';
import styled from 'styled-components';
import WishButton from '../../commons/components/WishButton';

const ItemBox = ({ item, className }) => {
  const { rstrId, images, rstrNm, rstrIntrcnCont } = item;
  return (
    <li className={className}>
      {images && images.length > 0 && (
        <div className="photo">
          <img src={images[0].rstrImgUrl} alt={rstrNm} />
        </div>
      )}
      <div className="title">{rstrNm}</div>
      <div className="description">{rstrIntrcnCont}</div>
      <WishButton seq={rstrId} type="RESTAURANT" />
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
