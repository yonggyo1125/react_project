import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { produce } from 'immer';
import { getInfo, deleteData } from '../apis/apiBoard';
import { write as writeComment } from '../apis/apiComment';
import UserInfoContext from '../../member/modules/UserInfoContext';

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
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    states: { userInfo, isLogin },
  } = useContext(UserInfoContext);

  useEffect(() => {
    (async () => {
      try {
        const res = await getInfo(seq);
        setData(res);
        setBoard(res.board);
        setPageTitle(res.subject);

        /* 댓글 기본 양식 */
        setCommentForm({
          bSeq: seq,
          mode: 'write',
          commenter: userInfo?.userName,
        });

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
  }, [seq, setPageTitle, navigate, message, userInfo]);

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

  /**
   * 댓글 작성 처리
   *
   */
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false;

      /* 필수 항목 검증 S */
      const requiredFields = {
        commenter: t('작성자를_입력하세요.'),
        content: t('댓글을_입력하세요.'),
      };
      if (!isLogin) {
        // 로그인 상태가 아닌 경우
        requiredFields.guestPw = t('비밀번호를_입력하세요.');
      }

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!commentForm[field]?.trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }
      /* 필수 항목 검증 E*/

      setErrors(_errors);

      if (hasErrors) {
        return;
      }

      // 댓글 등록 처리
      (async () => {
        try {
          const comments = await writeComment(commentForm);
          setData(
            produce((draft) => {
              draft.comments = comments;
            }),
          );
          setCommentForm({
            bSeq: data.seq,
            mode: 'write',
            commenter: userInfo?.userName,
          });
        } catch (err) {
          setErrors(err.message);
        }
      })();
    },
    [t, isLogin, commentForm, data, userInfo],
  );

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
        errors={errors}
      />
      ;{showListBelowView && <ListContainer bid={bid} />}
    </>
  );
};

export default React.memo(ViewContainer);
