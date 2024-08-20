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
    mode: 'write',
    notice: false,
  });
  const [editor, setEditor] = useState();
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

  const onFormChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value.trim() }));
  }, []);

  const onToggleNotice = useCallback(
    () => setForm((form) => ({ ...form, notice: !form.notice })),
    [],
  );

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
    setEditor,
    onFormChange,
    onSubmit,
    onToggleNotice,
    errors,
  });
};

export default React.memo(WriteContainer);
