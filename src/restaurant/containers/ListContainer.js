import React, { useEffect, useState, useCallback } from 'react';
import { apiList } from '../apis/apiInfo';
import SearchBox from '../components/SearchBox';
import ItemsBox from '../components/ItemsBox';
import Pagination from '../../commons/components/Pagination';
import Loading from '../../commons/components/Loading';
const ListContainer = () => {
  const [search, setSearch] = useState({});
  const [items, setItems] = useState([]);
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

  /* 페이지 변경 함수 */
  const onChangePage = useCallback((p) => {
    setSearch((search) => ({ ...search, page: p }));
  }, []);

  // 로딩 처리
  if (!items) {
    return <Loading />;
  }

  return (
    <>
      <SearchBox search={search} />
      <ItemsBox items={items} />
      {items.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
    </>
  );
};

export default React.memo(ListContainer);
