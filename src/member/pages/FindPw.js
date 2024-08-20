import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import FindPwContainer from '../containers/FindPwContainer';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import GuestOnlyContainer from '../containers/GuestOnlyContainer';

const FindPw = () => {
  const { t } = useTranslation();

  return (
    <GuestOnlyContainer>
      <Helmet>
        <title>{t('비밀번호_찾기')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('비밀번호_찾기')}</MainTitle>
        <FindPwContainer />
      </OuterBox>
    </GuestOnlyContainer>
  );
};

export default React.memo(FindPw);
