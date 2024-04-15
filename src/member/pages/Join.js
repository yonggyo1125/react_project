import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import JoinForm from '../components/JoinForm';

const Join = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('회원가입')}</title>
      </Helmet>
      <h1>{t('회원가입')}</h1>
      <JoinForm />
    </>
  );
};

export default React.memo(Join);
