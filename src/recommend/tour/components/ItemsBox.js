import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../../commons/components/ImageBox';

const ItemBox = ({ item, className }) => {
  const { seq, title, photoUrl, address, description } = item;
  const url = `/recommend/tour/${seq}`;
  return (
    <li className={className}>
      <Link to={url}>
        {photoUrl && <ImageBgBox url={photoUrl} width="150px" height="150px" />}
        <div className="item-content">
          <div className="title">{title}</div>
          <div className="address">{address}</div>
          <div className="description">{description}</div>
        </div>
      </Link>
    </li>
  );
};

const ItemStyledBox = styled(ItemBox)``;

const ItemsBox = ({ items }) => {
  return (
    items.length > 0 &&
    items.map((item) => <ItemStyledBox key={item.seq} item={item} />)
  );
};

export default React.memo(ItemsBox);
