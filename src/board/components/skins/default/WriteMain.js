import React from 'react';
import Form from './Form';

const WriteMain = ({
  board,
  form,
  onSubmit,
  onToggleNotice,
  errors,
  fileUploadCallback,
  fileDeleteCallback,
  onChange,
}) => {
  return (
    <Form
      board={board}
      form={form}
      onSubmit={onSubmit}
      onToggleNotice={onToggleNotice}
      errors={errors}
      fileUploadCallback={fileUploadCallback}
      fileDeleteCallback={fileDeleteCallback}
      onChange={onChange}
    />
  );
};

export default React.memo(WriteMain);
