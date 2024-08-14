import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
const ImageBox = styled.div``;

const ItemImage = ({ images }) => {
  images = Array.isArray(images) ? images : [images];
  const { t } = useTranslation();

  return (
    images.length > 0 &&
    images.map((image) => (
      <ImageBox key={image} className="item-image">
        <img src={image} alt={t('상세설명_이미지')} />
      </ImageBox>
    ))
  );
};

export default React.memo(ItemImage);
