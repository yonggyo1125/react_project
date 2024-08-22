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

  const onToggleNotice = useCallback(() => setNotice((notice) => !notice), []);

  const onSubmit = useCallback(
    (e, editor) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      for (const [k, v] of formData) {
        form[k] = v;
      }

      form.content = editor.getData();

      setForm({ ...form });

      console.log(form);
    },
    [form],
  );

  if (loading || !board) {
    return <Loading />;
  }

  const { skin } = board;

  return skinRoute(skin, {
    board,
    form,
    onSubmit,
    onToggleNotice,
    notice,
    errors,
  });
};

export default React.memo(WriteContainer);
