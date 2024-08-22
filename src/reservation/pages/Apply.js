import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';

import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import ReservationContainer from '../containers/ReservationContainer';
const Apply = () => {
  const [pageTitle, setPageTitle] = useState('');
  return (
    <MemberOnlyContainer>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{pageTitle}</MainTitle>
        <ReservationContainer setPageTitle={setPageTitle} />
      </OuterBox>
    </MemberOnlyContainer>
  );
};

export default React.memo(Apply);
