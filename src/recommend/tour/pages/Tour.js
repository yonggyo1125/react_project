import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../../commons/components/LayoutBox';
import { MainTitle } from '../../../commons/components/TitleBox';
import ListContainer from '../containers/ListContainer';

const Tour = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('추천_여행지')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('추천_여행지')}</MainTitle>
        <ListContainer />
      </OuterBox>
    </>
  );
};

export default React.memo(Tour);
