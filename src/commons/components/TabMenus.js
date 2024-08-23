import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styled from 'styled-components';

const Wrapper = styled.nav``;

const TabMenus = ({ items }) => {
  return (
    items &&
    items.length > 0 && (
      <Wrapper>
        {items.map(({ name, link }) => (
          <NavLink
            to={link}
            key={link}
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {name}
          </NavLink>
        ))}
      </Wrapper>
    )
  );
};

export default React.memo(TabMenus);
