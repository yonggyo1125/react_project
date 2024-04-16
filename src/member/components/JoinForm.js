import React from 'react';
import { useTranslation } from 'react-i18next';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import InputBox from '../../commons/components/InputBox';

const JoinForm = () => {
  const { t } = useTranslation();
  return (
    <form autoComplete="off">
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

      <ButtonGroup width={450}>
        <BigButton type="reset" color="light">
          {t('다시입력')}
        </BigButton>
        <BigButton type="submit" color="dark">
          {t('가입하기')}
        </BigButton>
      </ButtonGroup>
    </form>
  );
};

export default React.memo(JoinForm);
