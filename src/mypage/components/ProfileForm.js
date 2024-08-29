import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import InputBox from '../../commons/components/InputBox';

const FormBox = styled.form``;

const ProfileForm = ({ form, onChange, onSubmit }) => {
  const { t } = useTranslation();
  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>{form.email}</dd>
      </dl>
      <dl>
        <dt>{t('회원명')}</dt>
        <dd>
          <InputBox
            type="text"
            name="userName"
            value={form?.userName}
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호')}</dt>
        <dd>
          <InputBox
            type="password"
            name="password"
            value={form?.password}
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호_확인')}</dt>
        <dd>
          <InputBox
            type="password"
            name="confirmPassword"
            value={form?.confirmPassword}
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('휴대전화번호')}</dt>
        <dd>
          <InputBox
            type="text"
            name="mobile"
            value={form?.mobile}
            onChange={onChange}
          />
        </dd>
      </dl>
    </FormBox>
  );
};

export default React.memo(ProfileForm);
