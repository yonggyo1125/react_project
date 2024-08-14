import React from 'react';
import styled from 'styled-components';
const ImageBox = styled.div``;

const ItemImage = ({ images }) => {
  images = Array.isArray(images) ? images : [images];

  return (
    images.length > 0 && (
      <div className="item-images">
        {images.map((image) => (
          <ImageBox image={image} key={image} className="item-image" />
        ))}
      </div>
    )
  );
};

export default React.memo(ItemImage);
