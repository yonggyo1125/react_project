import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getInfo, deleteData } from '../apis/apiBoard';
import Loading from '../../commons/components/Loading';
import MessageBox from '../../commons/components/MessageBox';

import DefaultView from '../components/skins/default/View';
import GalleryView from '../components/skins/gallery/View';
import ListContainer from './ListContainer';

function skinRoute(skin) {
  switch (skin) {
    case 'gallery':
      return GalleryView;
    default:
      return DefaultView;
  }
}

const ViewContainer = ({ setPageTitle }) => {
  const { seq } = useParams();
  const [board, setBoard] = useState(null);
  const [data, setData] = useState(null);
  const [commentForm, setCommentForm] = useState(null);
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

        /* 댓글 기본 양식 */
        setCommentForm({ bSeq: seq });

        window.scrollTo(0, 0);
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

      (async () => {
        try {
          await deleteData(seq);
          navigate(`/board/list/${board.bid}`);
        } catch (err) {
          console.error(err);
        }
      })();
    },
    [t, navigate, board],
  );

  const onChange = useCallback((e) => {
    setCommentForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  if (!data) {
    return (
      <>
        {message && <MessageBox color="info">{message}</MessageBox>}
        <Loading />
      </>
    );
  }

  const { skin, showListBelowView, bid } = board;
  const View = skinRoute(skin);

  return (
    <>
      <View
        board={board}
        data={data}
        onDelete={onDelete}
        form={commentForm}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      ;{showListBelowView && <ListContainer bid={bid} />}
    </>
  );
};

export default React.memo(ViewContainer);
