import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getInfo } from '../apis/apiBoard';

import ViewContent from '../components/skins/default/ViewContent';
import CommentForm from '../components/skins/default/CommentForm';
import CommentItems from '../components/skins/default/CommentItems';
import Loading from '../../commons/components/Loading';
import MessageBox from '../../commons/components/MessageBox';

const ViewContainer = ({ setPageTitle }) => {
  const { seq } = useParams();
  const [board, setBoard] = useState(null);
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await getInfo(seq);
        setData(res);
        setBoard(res.board);
        setPageTitle(res.subject);
      } catch (err) {
        console.error(err);
        setMessage(err.message);
        setTimeout(function () {
          setMessage('');
          navigate(-1);
        }, 3000);
      }
    })();
  }, [seq, setPageTitle, navigate, message]);

  const onDelete = useCallback(
    (seq) => {
      if (!window.confirm(t('정말_삭제_하겠습니까?'))) {
        return;
      }

      console.log(seq);
    },
    [t],
  );

  if (!data) {
    return (
      <>
        {message && <MessageBox color="info">{message}</MessageBox>}
        <Loading />
      </>
    );
  }

  const { useComment } = board;

  return (
    <>
      <ViewContent data={data} onDelete={onDelete} />

      {useComment && (
        <>
          {data.commentable && <CommentForm />}
          {data?.comments?.length > 0 && <CommentItems items={data.comments} />}
        </>
      )}
    </>
  );
};

export default React.memo(ViewContainer);
