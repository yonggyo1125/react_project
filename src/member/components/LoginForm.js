import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaLock, FaKey, FaUserPlus } from 'react-icons/fa';
import InputBox from '../../commons/components/InputBox';
import { MidButton } from '../../commons/components/Buttons';

const FormBox = styled.form``;
const LinkBox = styled.div``;

const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <>
      <FormBox autoComplete="off">
        <InputBox type="text" placeholder={t('이메일')} />
        <InputBox type="password" placeholder={t('비밀번호')} />
        <MidButton type="submit" color="primary">
          {t('로그인')}
        </MidButton>
      </FormBox>
      <LinkBox>
        <Link to="/member/find_id">
          <FaLock /> {t('아이디_찾기')}
        </Link>
        <Link to="/member/find_pw">
          <FaKey /> {t('비밀번호_찾기')}
        </Link>
        <Link to="/member/join">
          <FaUserPlus /> {t('회원가입')}
        </Link>
      </LinkBox>
    </>
  );
};

export default React.memo(LoginForm);
