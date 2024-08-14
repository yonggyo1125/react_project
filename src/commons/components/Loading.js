import React from 'react';
import image from '../../images/loading.webp';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: calc(50% - 75px);
  left: calc(50% - 75px);
  width: 150px;
  height: 150px;
  z-index: 100;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const Loading = () => {
  return (
    <Wrapper>
      <img src={image} alt="loading" />
    </Wrapper>
  );
};

export default React.memo(Loading);
