import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/color';

const Box = styled.div``;

const MessageBox = ({ messages, color, children }) => {
  messages = messages || [];

  if (children) messages.push(children);

  return (
    <>
      {messages.map((message, i) => (
        <Box key={i}>{message}</Box>
      ))}
    </>
  );
};

export default React.memo(MessageBox);
