import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loading from '../../commons/components/Loading';
import pagination from '../../commons/components/Pagination';
import apiConfig from '../apis/apiConfig';
import { getList } from '../apis/apiBoard';
import getQueryString from '../../commons/libs/getQueryString';
import Pagination from '../../commons/components/Pagination';

const ListContainer = ({ setPageTitle }) => {
  const [searchParams] = useSearchParams();
  const { bid } = useParams();

  const [board, setBoard] = useState(null);
  const [items, setItems] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [search, setSearch] = useState(() => getQueryString(searchParams));

  useEffect(() => {
    (async () => {
      try {
        // 게시판 설정
        const res1 = await apiConfig(bid);
        setBoard(res1);
        setPageTitle(res1.bname);

        // 게시글 목록
        const { items, pagination } = await getList(bid, search);
        setItems(items);
        setPagination(pagination);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [bid, search, setPageTitle]);

  const onPageClick = useCallback((page) => {
    setSearch((search) => ({ ...search, page }));
  }, []);

  if (!board || !items) {
    return <Loading />;
  }

  return (
    <>
      <Pagination pagination={pagination} onClick={onPageClick} />
    </>
  );
};

export default React.memo(ListContainer);
