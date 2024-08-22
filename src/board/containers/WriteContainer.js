import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import loadable from '@loadable/component';
import apiConfig from '../apis/apiConfig';
import Loading from '../../commons/components/Loading';

function skinRoute(skin, props) {
  const WriteMain = loadable(() =>
    import(`../components/skins/${skin}/WriteMain`),
  );

  return <WriteMain {...props} />;
}

const WriteContainer = ({ setPageTitle }) => {
  const { bid } = useParams();

  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    gid: '' + Date.now(),
    mode: 'write',
    notice: false,
    attachFiles: [],
    editorImages: [],
  });

  const [notice, setNotice] = useState(false);

  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

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

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onToggleNotice = useCallback(() => setNotice((notice) => !notice), []);

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
    setForm((form) => ({
      ...form,
      attachFiles: _attachFiles,
      editorImages: _editorImages,
    }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  if (loading || !board) {
    return <Loading />;
  }

  const { skin } = board;

  return skinRoute(skin, {
    board,
    form,
    onSubmit,
    onChange,
    onToggleNotice,
    notice,
    errors,
    fileUploadCallback,
    editorImages,
    attachFiles,
  });
};

export default React.memo(WriteContainer);
