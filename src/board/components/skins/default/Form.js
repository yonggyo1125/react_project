import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph } from 'ckeditor5';
import styled from 'styled-components';

import 'ckeditor5/ckeditor5.css';

const Wrapper = styled.div`
  .ck-editor__editable {
    height: 350px;
  }
`;

const Form = ({ board }) => {
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
            data=""
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
