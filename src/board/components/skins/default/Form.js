import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph } from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

const Form = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    mounted && (
      <CKEditor
        editor={ClassicEditor}
        config={{
          plugins: [Bold, Essentials, Italic, Paragraph],
          toolbar: ['undo', 'redo', 'bold', 'italic'],
        }}
        data="<h1>안녕하세요.</h1>"
        onReady={(editor) => {
          //setEditor(editor);
        }}
        onChange={(e, editor) => {
          //console.log('event', e);
          console.log('editor', editor.getData());
        }}
      />
    )
  );
};

export default React.memo(Form);
