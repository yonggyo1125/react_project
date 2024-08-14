import React, { useState, useCallback } from 'react';
import { SmallButton } from './Buttons';
import Modal from 'react-modal';

const ImageUpload = ({ children, gid, color }) => {
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
        <Modal isOpen={open}>
          <h1>노출!</h1>
        </Modal>
      )}
    </>
  );
};

export default React.memo(ImageUpload);
