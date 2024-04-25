import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const CategoryBox = styled.nav``;

const NewsCategory = ({ categories }) => {
  const { t } = useTranslation();

  return (
    <CategoryBox>
      {categories.map(({ name, text }) => (
        <NavLink to={'/news/' + name} key={name}>
          {t(text)}
        </NavLink>
      ))}
    </CategoryBox>
  );
};

export default React.memo(NewsCategory);
