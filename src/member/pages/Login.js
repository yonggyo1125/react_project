import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LoginContainer from '../containers/LoginContainer';
const OuterBox = styled.div``;

const Login = () => {
  const { t } = useTranslation();
  return (
    <>
      <LoginContainer />
    </>
  );
};

export default React.memo(Login);
