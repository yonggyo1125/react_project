import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loading from '../../commons/components/Loading';
import pagination from '../../commons/components/Pagination';
import apiConfig from '../apis/apiConfig';
import { getList } from '../apis/apiBoard';

const ListContainer = ({ setPageTitle }) => {
  const { bid } = useParams();
  const [board, setBoard] = useState(null);
  const [items, setItems] = useState(null);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res1 = await apiConfig(bid);
        setBoard(res1);
        
      } catch (err) {
        console.error(err);
      }
    })();
  }, [bid]);

  return <></>;
};

export default React.memo(ListContainer);
