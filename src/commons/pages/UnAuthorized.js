import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const UnAuthorized = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('접근권한_없음')}</title>
      </Helmet>
      <h1>{t('접근권한_없음')}</h1>
      <Link to="/">{t('확인')}</Link>
    </>
  );
};

export default React.memo(UnAuthorized);
