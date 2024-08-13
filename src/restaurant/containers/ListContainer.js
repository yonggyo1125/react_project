import React, { useEffect, useState } from 'react';
import { apiList } from '../apis/apiInfo';
import SearchBox from '../components/SearchBox';
import ItemsBox from '../components/ItemsBox';
import Pagination from '../../commons/components/Pagination';

const ListContainer = () => {
  const [search, setSearch] = useState({});
  const [items, setItems] = useState({});
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { items, pagination } = await apiList(search);
        setItems(items);
        setPagination(pagination);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [search]);

  return (
    <>
      <SearchBox />
      <ItemsBox />
      <Pagination />
    </>
  );
};

export default React.memo(ListContainer);
