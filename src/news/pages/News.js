import React from 'react';
import NewsContainer from '../containers/NewsContainer';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const OuterBox = styled.div`
  margin-bottom: 150px;
`;

const News = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('뉴스')}</title>
      </Helmet>
      <OuterBox className="layout-width">
        <NewsContainer />
      </OuterBox>
    </>
  );
};

export default React.memo(News);
