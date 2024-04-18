import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaLock, FaKey } from 'react-icons/fa';
import { FaUserPlus } from "react-icons/fa6";
import InputBox from '../../commons/components/InputBox';

const FormBox = styled.form``;

const LoginForm = () => {
  const { t } = useTranslation();

  return <h1>로그인 양식</h1>;
};

export default React.memo(LoginForm);
