import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import InputBox from '../../commons/components/InputBox';
import MessageBox from '../../commons/components/MessageBox';
import { MidButton } from '../../commons/components/Buttons';

const FormBox = styled.form``;

const FindIdForm = ({ form, onChange, onSubmit, errors }) => {
  const { t } = useTranslation();
  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <InputBox
        type="text"
        name="userName"
        value={form?.userName}
        onChange={onChange}
        placeholder={t('회원명_입력')}
      />
      {errors?.userName && (
        <MessageBox color="danger" messages={errors?.userName} />
      )}
      <InputBox
        type="text"
        name="mobile"
        value={form?.mobile}
        onChange={onChange}
        placeholder={t('휴대전화번호_입력')}
      />
      {errors?.mobile && (
        <MessageBox color="danger" messages={errors?.mobile} />
      )}
      {errors?.global && (
        <MessageBox color="danger" messages={errors?.global} />
      )}
      <MidButton type="submit" color="primary">
        {t('아이디_찾기')}
      </MidButton>
    </FormBox>
  );
};

export default React.memo(FindIdForm);
