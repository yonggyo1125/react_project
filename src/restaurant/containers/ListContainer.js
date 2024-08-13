import React, { useEffect, useState } from 'react';
import { apiList } from '../apis/apiInfo';
import SearchBox from '../components/SearchBox';
import ItemsBox from '../components/ItemsBox';
import Pagination from '../../commons/components/Pagination';

const ListContainer = () => {
  useEffect(() => {
    apiList({});
  }, []);

  return (
    <>
      <SearchBox />
      <ItemsBox />
      <Pagination />
    </>
  );
};

export default React.memo(ListContainer);
