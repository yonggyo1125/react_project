import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import { MainTitle } from '../../commons/components/TitleBox';

const Board = () => {
  const { t } = useTranslation();

  return (
    <MemberOnlyContainer>
      <Helmet>
        <title>{t('게시글_관리')}</title>
      </Helmet>
      <MainTitle>{t('게시글_관리')}</MainTitle>
    </MemberOnlyContainer>
  );
};

export default React.memo(Board);
