import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph } from 'ckeditor5';
import styled from 'styled-components';
import MessageBox from '../../../../commons/components/MessageBox';

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

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    mounted && (
      <Wrapper>
        {useEditor ? (
          <CKEditor
            editor={ClassicEditor}
            config={{
              plugins: [Bold, Essentials, Italic, Paragraph],
              toolbar: ['undo', 'redo', 'bold', 'italic'],
            }}
            //data={form.content}
            onReady={(editor) => {
              //setEditor(editor);
            }}
            onChange={(e, editor) => {
              //console.log('event', e);
              console.log('editor', editor.getData());
            }}
          />
        ) : (
          <textarea name="content"></textarea>
        )}
      </Wrapper>
    )
  );
};

export default React.memo(Form);
