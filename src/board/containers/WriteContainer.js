import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import loadable from '@loadable/component';
import { produce } from 'immer';
import apiConfig from '../apis/apiConfig';
import Loading from '../../commons/components/Loading';
import { apiFileDelete } from '../../commons/libs/file/apiFile';
import UserInfoContext from '../../member/modules/UserInfoContext';
import { write } from '../apis/apiBoard';

const DefaultForm = loadable(() => import('../components/skins/default/Form'));
const GalleryForm = loadable(() => import('../components/skins/gallery/Form'));
function skinRoute(skin) {
  switch (skin) {
    case 'gallery':
      return GalleryForm;
    default:
      return DefaultForm;
  }
}

const WriteContainer = ({ setPageTitle }) => {
  const { bid } = useParams();

  const {
    states: { isLogin, isAdmin, userInfo },
  } = useContext(UserInfoContext);

  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    gid: '' + Date.now(),
    mode: 'write',
    notice: false,
    attachFiles: [],
    editorImages: [],
    poster: userInfo?.userName,
  });

  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const data = await apiConfig(bid);
        setBoard(data); // 게시판 설정 조회
        setPageTitle(data.bname); // 사이트 제목

        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [bid, setPageTitle]);

  const onChange = useCallback(
    (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    [form],
  );

  const onToggleNotice = useCallback(() => {
    setForm(
      produce((draft) => {
        draft.notice = !draft.notice;
      }),
    );
  }, []);

  /* 파일 업로드 후속 처리 */
  const fileUploadCallback = useCallback((files, editor) => {
    if (!files || files.length === 0) return;

    const imageUrls = [];
    const _editorImages = [];
    const _attachFiles = [];

    for (const file of files) {
      const { location, fileUrl } = file;

      if (location === 'editor') {
        imageUrls.push(fileUrl);
        _editorImages.push(file);
      } else {
        _attachFiles.push(file);
      }
    }

    // 에디터에 이미지 추가
    if (imageUrls.length > 0) {
      editor.execute('insertImage', { source: imageUrls });
    }

    setForm(
      produce((draft) => {
        draft.attachFiles.push(..._attachFiles);
        draft.editorImages.push(..._editorImages);
      }),
    );
  }, []);

  /* 파일 삭제 처리 */
  const fileDeleteCallback = useCallback((seq) => {
    if (!window.confirm('정말 삭제하겠습니까?')) {
      return;
    }

    (async () => {
      try {
        await apiFileDelete(seq);

        setForm(
          produce((draft) => {
            draft.attachFiles = draft.attachFiles.filter(
              (file) => file.seq !== seq,
            );

            draft.editorImages = draft.editorImages.filter(
              (file) => file.seq !== seq,
            );
          }),
        );
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      /* 유효성 검사 - 필수 항목 검증 S */
      const requiredFields = {
        poster: t('작성자를_입력하세요.'),
        subject: t('제목을_입력하세요.'),
        content: t('내용을_입력하세요.'),
      };

      if (!isLogin) {
        // 비회원인 경우
        requiredFields.guestPw = t('비밀번호를_입력하세요.');
      }

      if (!isAdmin) {
        // 관리자가 아니면 공지글 작성 X
        form.notice = false;
      }

      const _errors = {};
      let hasErrors = false;
      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field]?.trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }
      /* 유효성 검사 - 필수 항목 검증 E */

      // 검증 실패시에는 처리 X
      setErrors(_errors);
      if (hasErrors) {
        return;
      }

      /* 데이터 저장 처리 S */
      (async () => {
        try {
          const res = await write(bid, form);
          const { locationAfterWriting } = board;
          const url =
            locationAfterWriting === 'list'
              ? `/board/list/${bid}`
              : `/board/view/${res.seq}`;
          navigate(url, { replace: true });
        } catch (err) {
          setErrors(err.message);
        }
      })();

      /* 데이터 저장 처리 E */
    },
    [t, form, isAdmin, isLogin, board, navigate],
  );

  if (loading || !board) {
    return <Loading />;
  }

  const { skin } = board;
  const Form = skinRoute(skin);
  return (
    <Form
      board={board}
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
      onToggleNotice={onToggleNotice}
      errors={errors}
      fileUploadCallback={fileUploadCallback}
      fileDeleteCallback={fileDeleteCallback}
    />
  );
  /*
  return skinRoute(skin, {
    board,
    form,
    onSubmit,
    onChange,
    onToggleNotice,
    errors,
    fileUploadCallback,
    fileDeleteCallback,
  });
  */
};

export default React.memo(WriteContainer);
