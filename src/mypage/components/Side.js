import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import fontSize from '../../styles/fontSize';
const { medium } = fontSize;

const Wrapper = styled.aside`
  background: #6c757d;
  a {
    display: block;
    padding: 15px 25px;
    font-size: ${medium};
    border-bottom: 1px solid #616161;
    &.on {
      background: #000;
      color: #fff;
    }
  }
`;

const Side = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <NavLink
        to="/mypage/info"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        {t('회원정보_수정')}
      </NavLink>
      <NavLink
        to="/mypage/reservation"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        {t('예약관리')}
      </NavLink>
      <NavLink
        to="/mypage/board"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        {t('게시글_관리')}
      </NavLink>
    </Wrapper>
  );
};

export default React.memo(Side);
