import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../../commons/components/LayoutBox';
import { MainTitle } from '../../../commons/components/TitleBox';
import MyLocationContainer from '../containers/MyLocationContainer';

const MyLocation = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('나의_주변_여행지')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('나의_주변_여행지')}</MainTitle>
        <MyLocationContainer />
      </OuterBox>
    </>
  );
};

export default React.memo(MyLocation);
