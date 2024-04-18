import styled from 'styled-components';
import { color } from '../../styles/color';
const { dark } = color;

export const OuterBox = styled.div`
  max-width: 900px;
  min-width: 700px;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px ${dark};
  margin: 50px auto;
`;
