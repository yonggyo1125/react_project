import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeaderBox = styled.header``;

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <HeaderBox>
      <section>
        <Link to="/member/join"></Link>
      </section>
    </HeaderBox>
  );
};

export default React.memo(Header);
