import React from 'react';

const ErrorDisplay = ({ children }) => {
  return <div>{children}</div>;
};

export default React.memo(ErrorDisplay);
