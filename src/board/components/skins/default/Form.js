import React, { useState, useEffect, useContext } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Image,
  ImageInsert,
  Bold,
  Essentials,
  Italic,
  Paragraph,
} from 'ckeditor5';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaWindowClose, FaFileUpload } from 'react-icons/fa';
import MessageBox from '../../../../commons/components/MessageBox';
import InputBox from '../../../../commons/components/InputBox';
import UserInfoContext from '../../../../member/modules/UserInfoContext';
import { FaCheckSquare, FaSquare } from 'react-icons/fa';
import { MidButton } from '../../../../commons/components/Buttons';
import FileUpload from '../../../../commons/components/FileUpload';

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

const FileItem = styled.li``;

const Form = ({
  board,
  form,
  onSubmit,
  onToggleNotice,
  notice,
  errors,
  fileUploadCallback,
  onChange,
}) => {
  const [mounted, setMounted] = useState(false);
  const [editor, setEditor] = useState(null);
  const { useEditor, useUploadImage, useUploadFile } = board;
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
    <Wrapper onSubmit={onSubmit} autoComplete="off">
      <dl>
        <dt>{t('작성자')}</dt>
        <dd>
          <InputBox
            type="text"
            name="poster"
            value={form?.poster}
            onChange={onChange}
          />
          {errors?.poster && (
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
                defaultValue={form?.guestPw}
              />
              {errors?.guestPw && (
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
              {notice ? <FaCheckSquare /> : <FaSquare />}
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
            value={form?.subject}
            onChange={onChange}
          />
          {errors?.subject && (
            <MessageBox color="danger" messages={errors.subject} />
          )}
        </dd>
      </dl>
      <dl>
        <dt>{t('내용')}</dt>
        <dd>
          {useEditor ? (
            mounted && (
              <>
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    plugins: [
                      Bold,
                      Essentials,
                      Italic,
                      Paragraph,
                      Image,
                      ImageInsert,
                    ],
                    toolbar: ['undo', 'redo', 'bold', 'italic'],
                  }}
                  data={form?.content}
                  onReady={(editor) => setEditor(editor)}
                  onChange={(e, editor) => {
                    onChange({
                      target: { name: 'content', value: editor.getData() },
                    });
                  }}
                />
                {editor && useUploadImage && (
                  <FileUpload
                    gid={form.gid}
                    location="editor"
                    imageOnly
                    color="primary"
                    width="120"
                    callback={(files) => fileUploadCallback(files, editor)}
                  >
                    {t('이미지_업로드')}
                  </FileUpload>
                )}
              </>
            )
          ) : (
            <textarea
              name="content"
              value={form?.content}
              onChange={onChange}
            ></textarea>
          )}
          {errors?.content && (
            <MessageBox color="danger" messages={errors.content} />
          )}
        </dd>
      </dl>
      {useUploadFile && (
        <dl>
          <dt>{t('파일첨부')}</dt>
          <dd>
            <FileUpload
              gid={form.gid}
              location="attach"
              width="120"
              color="primary"
              callback={fileUploadCallback}
            >
              {t('파일선택')}
            </FileUpload>
          </dd>
        </dl>
      )}
      <button type="submit">제출</button>
    </Wrapper>
  );
};

export default React.memo(Form);
