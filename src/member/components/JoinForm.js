import React from 'react';
import { useTranslation } from 'react-i18next';

const JoinForm = () => {
  const { t } = useTranslation();
  return (
    <form autoComplete="off">
      <button type="reset">{t('다시입력')}</button>
      <button type="submit">{t('가입하기')}</button>
    </form>
  );
};

export default React.memo(JoinForm);
