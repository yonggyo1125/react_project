import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styled from 'styled-components';
import { buttonColor } from '../../styles/color';
import fontSize from '../../styles/fontSize';

const { dark } = buttonColor;
const { medium } = fontSize;

const Wrapper = styled.nav`
  padding: 10px 0;
  display: flex;
  height: 55px;
  a {
    background: ${dark[0]};
    color: ${dark[1]};
    padding: 0 25px;
    border-radius: 3px;
    font-size: ${medium};
    line-height: 35px;
  }
  a:hover,
  a.on {
    background: ${dark[2]};
  }
  a + a {
    margin-left: 10px;
  }
`;

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
