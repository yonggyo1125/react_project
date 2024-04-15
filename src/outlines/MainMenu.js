import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MenuBox = styled.nav``;

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
