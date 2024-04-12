import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeaderBox = styled.header`
  
`;

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderBox>
      <section className="site-top">
        <Link to="/member/join">{t('회원가입')}</Link>
        <Link to="/member/login">{t('로그인')}</Link>
      </section>
    </HeaderBox>
  );
};

export default React.memo(Header);
