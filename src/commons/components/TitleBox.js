import styled from 'styled-components';
import fontSize from '../../styles/fontSize';

const { extraBig } = fontSize;

export const MainTitle = styled.h1`
  font-size: ${extraBig};
  border-bottom: 2px solid #000;
  padding: 0 15px 15px;
  margin: 0 0 20px;
  line-height: 1;
`;
