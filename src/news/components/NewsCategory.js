import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import classNames from 'classnames';
import { color } from '../../styles/color';
import fontSize from '../../styles/fontSize';

const { primary, dark } = color;
const { big } = fontSize;

const CategoryBox = styled.nav`
  padding: 10px 20px;
  box-shadow: 2px 2px 5px ${dark};
  border-radius: 5px;
  margin: 20px 0;

  a {
    color: ${dark};
    font-size: ${big};
    font-weight: 700;
    padding-right: 30px;

    &.on {
      color: ${primary};
    }
  }
`;

const NewsCategory = ({ categories }) => {
  const { t } = useTranslation();

  return (
    <CategoryBox>
      {categories.map(({ name, text }) => (
        <NavLink
          to={'/news/' + name}
          key={name}
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t(text)}
        </NavLink>
      ))}
    </CategoryBox>
  );
};

export default React.memo(NewsCategory);
