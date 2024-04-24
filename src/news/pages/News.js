import React from 'react';
import NewsContainer from '../containers/NewsContainer';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('뉴스')}</title>
      </Helmet>
      <NewsContainer />
    </>
  );
};

export default React.memo(News);
