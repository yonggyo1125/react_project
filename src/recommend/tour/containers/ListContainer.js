import React, { useEffect, useState } from 'react';
import { apiList } from '../apis/apiInfo';

const ListContainer = () => {
  const [search, setSearch] = useState({});
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    apiList(search).then((res) => {
      setItems(res.items);
      setPagination(res.pagination);

      console.log(res);
    });
  }, [search]);

  return <></>;
};

export default React.memo(ListContainer);
