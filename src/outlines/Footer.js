import React from 'react';
import styled from 'styled-components';
const FooterBox = styled.footer`
  min-height: 250px;
  background: #f8f8f8;
`;

const Footer = () => {
  return <FooterBox></FooterBox>;
};

export default React.memo(Footer);
