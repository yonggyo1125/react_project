import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import fontSize from '../styles/fontSize';

const HeaderBox = styled.header`
  .site-top {
    background: #f8f8f8;
    border-bottom: 1px solid #d5d5d5;
    height: 35px;

    div {
      text-align: right;

      a {
        display: inline-block;
        line-height: 34px;
        margin-left: 10px;
        font-size: ${fontSize.normal};
      }
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderBox>
      <section className="site-top">
        <div className="layout-width">
          <NavLink
            to="/member/join"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t('회원가입')}
          </NavLink>
          <NavLink to="/member/login">{t('로그인')}</NavLink>
        </div>
      </section>
    </HeaderBox>
  );
};

export default React.memo(Header);
