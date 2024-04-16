import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaCheckSquare, FaRegCheckSquare } from 'react-icons/fa';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import InputBox from '../../commons/components/InputBox';

const FormBox = styled.form``;

const JoinForm = () => {
  const { t } = useTranslation();
  return (
    <FormBox autoComplete="off">
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>
          <InputBox type="text" />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호')}</dt>
        <dd>
          <InputBox type="password" />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호_확인')}</dt>
        <dd>
          <InputBox type="password" />
        </dd>
      </dl>
      <dl>
        <dt>{t('회원명')}</dt>
        <dd>
          <InputBox type="text" />
        </dd>
      </dl>

      <div className="terms-agree">
        <FaRegCheckSquare /> {t('회원가입_약관에_동의합니다.')}
      </div>

      <ButtonGroup width={450}>
        <BigButton type="reset" color="light">
          {t('다시입력')}
        </BigButton>
        <BigButton type="submit" color="dark">
          {t('가입하기')}
        </BigButton>
      </ButtonGroup>
    </FormBox>
  );
};

export default React.memo(JoinForm);
