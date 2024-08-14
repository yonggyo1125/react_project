import React from 'react';
import styled from 'styled-components';
const ImageBox = styled.div``;

const ItemImage = ({ images }) => {
  images = Array.isArray(images) ? images : [images];

  return (
    images.length > 0 &&
    images.map((image) => (
      <div key={image} className="item-image">
        <ImageBox image={image} />
      </div>
    ))
  );
};

export default React.memo(ItemImage);
