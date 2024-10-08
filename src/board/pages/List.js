import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import ListContainer from '../containers/ListContainer';

const List = () => {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{pageTitle}</MainTitle>
        <ListContainer setPageTitle={setPageTitle} />
      </OuterBox>
    </>
  );
};

export default React.memo(List);
