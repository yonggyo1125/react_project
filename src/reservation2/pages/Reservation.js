import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';

const Reservation = () => {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <>
      <Helmet>{pageTitle}</Helmet>
      <OuterBox>
        <MainTitle>{pageTitle}</MainTitle>
      </OuterBox>
    </>
  );
};

export default React.memo(Reservation);
