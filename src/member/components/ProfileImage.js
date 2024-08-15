import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { AiFillCloseSquare } from 'react-icons/ai';
import apiRequest from '../../commons/libs/apiRequest';

const ImageBox = styled.div`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '300px'};
  ${({ radius }) => css`
    border-radius: ${radius};
  `}
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;

  .image {
    width: 100%;
    height: 100%;
    background: url('${({ url }) => url}') no-repeat center center;
    background-size: cover;

    cursor: pointer;
  }

  .icon {
    position: absolute;
    top: 2px;
    right: 2px;
    font-size: 2.5rem;
    color: #fff;
    cursor: pointer;
  }
`;

const ProfileImage = ({ items, width, height, radius, onDelete }) => {
  items = Array.isArray(items) ? items : [items];
  
  return (
    <>
      {items?.length > 0 &&
        items.map((item) => (
          <ImageBox
            key={item.seq}
            className="inner"
            url={item.fileUrl}
            width={width}
            height={height}
            radius={radius}
          >
            <AiFillCloseSquare
              className="icon"
              onClick={() => onDelete(item.seq)}
            />
            <div className="image"></div>
          </ImageBox>
        ))}
    </>
  );
};

export default React.memo(ProfileImage);
