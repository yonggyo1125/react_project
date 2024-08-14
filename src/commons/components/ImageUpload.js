import React, { useState, useCallback } from 'react';
import { SmallButton } from './Buttons';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: 'calc(50% - 200px)',
    left: 'calc(50% - 150px)',
    width: '300px',
    height: '400px',
  },
};

const ImageUpload = ({ children, gid, color }) => {
  Modal.setAppElement('#root');

  color = color ?? 'primary';
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <>
      <SmallButton type="button" color={color} onClick={onClick}>
        {children}
      </SmallButton>
      {open && (
        <Modal isOpen={open} style={customStyles}>
          <h1>노출!</h1>
          <button type="button" onClick={() => setOpen(false)}>
            닫기
          </button>
        </Modal>
      )}
    </>
  );
};

export default React.memo(ImageUpload);
