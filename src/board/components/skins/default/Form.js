import React, { useState, useEffect, useContext } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph } from 'ckeditor5';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import MessageBox from '../../../../commons/components/MessageBox';
import InputBox from '../../../../commons/components/InputBox';
import UserInfoContext from '../../../../member/modules/UserInfoContext';
import { FaCheckSquare, FaSquare } from 'react-icons/fa';

import 'ckeditor5/ckeditor5.css';

const Wrapper = styled.form`
  .ck-editor__editable {
    height: 350px;
  }
  textarea {
    width: 100%;
    height: 350px;
    border: 1px solid #d5d5d5;
    resize: none;
    padding: 15px;
  }
`;

const Form = ({
  board,
  form,
  setEditor,
  onFormChange,
  onSubmit,
  onToggleNotice,
  errors,
}) => {
  const [mounted, setMounted] = useState(false);
  const { useEditor } = board;
  const { t } = useTranslation();
  const {
    states: { isLogin, isAdmin },
  } = useContext(UserInfoContext);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    mounted && (
      <Wrapper onSubmit={onSubmit} autoComplete="off">
        <dl>
          <dt>{t('작성자')}</dt>
          <dd>
            <InputBox
              type="text"
              name="poster"
              value={form.poster}
              onChange={onFormChange}
            />
            {errors.poster && (
              <MessageBox color="danger" messages={errors.poster} />
            )}
          </dd>
        </dl>
        {(form.mode === 'write' && !isLogin) ||
          (form.mode === 'update' && !form.member && (
            <dl>
              <dt>{t('비밀번호')}</dt>
              <dd>
                <InputBox
                  type="password"
                  name="guestPw"
                  value={form.guestPw}
                  onChange={onFormChange}
                />
                {errors.guestPw && (
                  <MessageBox color="danger" messages={errors.guestPw} />
                )}
              </dd>
            </dl>
          ))}
        {isAdmin && (
          <dl>
            <dt>{t('공지글')}</dt>
            <dd>
              <label onClick={onToggleNotice}>
                {form.notice ? <FaCheckSquare /> : <FaSquare />}
                {t('공지글로_등록하기')}
              </label>
            </dd>
          </dl>
        )}
        <dl>
          <dt>{t('제목')}</dt>
          <dd>
            <InputBox
              type="text"
              name="subject"
              value={form.subject}
              onChange={onFormChange}
            />
            {errors.subject && (
              <MessageBox color="danger" messages={errors.subject} />
            )}
          </dd>
        </dl>
        <dl>
          <dt>{t('내용')}</dt>
          <dd>
            {useEditor ? (
              <CKEditor
                editor={ClassicEditor}
                config={{
                  plugins: [Bold, Essentials, Italic, Paragraph],
                  toolbar: ['undo', 'redo', 'bold', 'italic'],
                }}
                //data={form.content}
                onReady={(editor) => {
                  //setEditor(() => editor);
                }}
                onChange={(e, editor) => {
                  onFormChange({
                    target: { name: 'content', value: editor.getData() },
                  });
                }}
              />
            ) : (
              <textarea
                name="content"
                defaultValue={form.content}
                onChange={onFormChange}
              ></textarea>
            )}
            {errors.content && (
              <MessageBox color="danger" messages={errors.content} />
            )}
          </dd>
        </dl>
      </Wrapper>
    )
  );
};

export default React.memo(Form);
