import React from 'react';

import ViewContent from './ViewContent';
import CommentForm from './CommentForm';
import CommentItems from './CommentItems';

const View = ({ board, data, onDelete, form, onChange, onSubmit, errors }) => {
  const { useComment } = board;

  return (
    <>
      <ViewContent data={data} onDelete={onDelete} />

      {useComment && (
        <>
          {data.commentable && (
            <CommentForm
              form={form}
              onChange={onChange}
              onSubmit={onSubmit}
              errors={errors}
            />
          )}
          {data?.comments?.length > 0 && <CommentItems items={data.comments} />}
        </>
      )}
    </>
  );
};

export default React.memo(View);
