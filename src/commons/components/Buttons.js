import styled, { css } from 'styled-components';
import { buttonColor } from '../../styles/color';

export const BigButton = styled.button`
  border: 0;
  ${({ color }) =>
    buttonColor[color] &&
    css`
      background: ${buttonColor[color][0]};
      color: ${buttonColor[color][1]};
    `}
`;
