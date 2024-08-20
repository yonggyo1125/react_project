import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph } from 'ckeditor5';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import MessageBox from '../../../../commons/components/MessageBox';
import InputBox from '../../../../commons/components/InputBox';

import 'ckeditor5/ckeditor5.css';

const Wrapper = styled.div`
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

const Form = ({ board, form, setEditor, onFormChange, onSubmit, errors }) => {
  const [mounted, setMounted] = useState(false);
  const { useEditor } = board;
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    mounted && (
      <Wrapper>
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
