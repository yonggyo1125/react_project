import React from 'react';
import Form from './Form';

const WriteMain = ({ board }) => {
  return <Form board={board} />;
};

export default React.memo(WriteMain);
