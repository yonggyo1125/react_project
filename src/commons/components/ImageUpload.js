import React, { useState, useCallback } from 'react';
import { SmallButton } from './Buttons';
import Modal from 'react-modal';
import styled from 'styled-components';

const ImageBox = styled.div`
  .ReactModal__Overlay {
    background: rgba(0, 0, 0, 0.7) !important;
  }
`;

const ImageUpload = ({ children, gid, color }) => {
  Modal.setAppElement('#root');

  color = color ?? 'primary';
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <ImageBox>
      <SmallButton type="button" color={color} onClick={onClick}>
        {children}
      </SmallButton>
      {open && (
        <Modal isOpen={open}>
          <h1>노출!</h1>
          <button type="button" onClick={() => setOpen(false)}>
            닫기
          </button>
        </Modal>
      )}
    </ImageBox>
  );
};

export default React.memo(ImageUpload);
