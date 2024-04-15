import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';

const { dark, primary, light } = color;

const MenuBox = styled.nav`
  background: ${dark};

  div {
    display: flex;
    height: 50px;

    a {
      color: ${light};
      line-height: 50px;
      padding: 0 50px;
      font-size: ${fontSize.medium};

      &.on {
        background: ${primary};
      }
    }
  }
`;

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <MenuBox>
      <div className="layout-width">
        <NavLink
          to="/news"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('뉴스')}
        </NavLink>
      </div>
    </MenuBox>
  );
};

export default React.memo(MainMenu);
