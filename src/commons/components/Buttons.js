import styled, { css } from 'styled-components';
import { buttonColor } from '../../styles/color';
import fontSize from '../../styles/fontSize';
const { big } = fontSize;

export const BigButton = styled.button`
  font-size: ${big};
  height: 45px;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;

  ${({ color }) =>
    buttonColor[color] &&
    css`
      background: ${buttonColor[color][0]};
      color: ${buttonColor[color][1]};
      border: 1px solid ${buttonColor[color][2]};
    `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin: 20px auto;

  button {
    width: 0;
    flex-grow: 1;
  }

  button + button {
    margin-left: 5px;
  }
`;
