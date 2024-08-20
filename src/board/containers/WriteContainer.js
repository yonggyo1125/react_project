import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import apiConfig from '../apis/apiConfig';
import Loading from '../../commons/components/Loading';

const WriteContainer = ({ setPageTitle }) => {
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(false);
  const { bid } = useParams();

  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const data = await apiConfig(bid);
        setBoard(data); // 게시판 설정 조회
        setPageTitle(data.bName); // 사이트 제목

        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [bid, setPageTitle]);

  if (loading || !board) {
    return <Loading />;
  }
  console.log(board);
  return <></>;
};

export default React.memo(WriteContainer);
