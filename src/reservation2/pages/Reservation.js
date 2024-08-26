import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import ReservationContainer from '../containers/ReservationContainer';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';

const Reservation = () => {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <>
      <Helmet>{pageTitle}</Helmet>
      <MemberOnlyContainer>
        <OuterBox>
          <MainTitle>{pageTitle}</MainTitle>
          <ReservationContainer setPageTitle={setPageTitle} />
        </OuterBox>
      </MemberOnlyContainer>
    </>
  );
};

export default React.memo(Reservation);
