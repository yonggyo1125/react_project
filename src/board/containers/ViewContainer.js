import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getInfo } from '../apis/apiBoard';

import ViewContent from '../components/skins/default/ViewContent';
import CommentForm from '../components/skins/default/CommentForm';
import CommentItems from '../components/skins/default/CommentItems';
import Loading from '../../commons/components/Loading';

const ViewContainer = ({ setPageTitle }) => {
  const { seq } = useParams();
  const [board, setBoard] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getInfo(seq);
        setData(res);
        setBoard(res.board);
        setPageTitle(res.subject);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [seq, setPageTitle]);

  return (
    <>
      <ViewContent />
      <CommentForm />
      <CommentItems />
    </>
  );
};

export default React.memo(ViewContainer);
