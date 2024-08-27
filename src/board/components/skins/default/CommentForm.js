import React, { useContext } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import UserInfoContext from '../../../../member/modules/UserInfoContext';

const FormBox = styled.form``;

const CommentForm = ({ form, onChange, onSubmit }) => {
  const { t } = useTranslation();
  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div className="comment-info">
        <input
          type="text"
          name="commenter"
          placeholder={t('작성자')}
          value={form?.commenter}
          onChange={onChange}
        />
        {!isLogin && (
          <input
            type="password"
            name="guestPw"
            placeholder={t('비밀번호')}
            value={form?.guestPw}
            onChange={onChange}
          />
        )}
      </div>
      <textarea
        name="content"
        placeholder={t('댓글을_입력하세요.')}
        value={form?.content}
        onChange={onChange}
      ></textarea>
      <button type="submit">{t('작성하기')}</button>
    </FormBox>
  );
};

export default React.memo(CommentForm);
