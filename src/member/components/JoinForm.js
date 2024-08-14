import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaCheckSquare, FaRegCheckSquare } from 'react-icons/fa';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import InputBox from '../../commons/components/InputBox';
import MessageBox from '../../commons/components/MessageBox';
import ImageUpload from '../../commons/components/ImageUpload';

const FormBox = styled.form`
  dl {
    display: flex;
    align-items: center;

    dt {
      width: 120px;
    }

    dd {
      flex-grow: 1;
    }
  }

  dl + dl {
    margin-top: 5px;
  }

  .terms-agree {
    text-align: center;
    margin: 15px 0;

    svg {
      font-size: 1.5rem;
      vertical-align: middle;
    }
  }
`;

const JoinForm = ({ form, onSubmit, onChange, onToggle, onReset, errors }) => {
  const { t } = useTranslation();
  return (
    <FormBox autoComplete="off" onSubmit={onSubmit}>
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>
          <InputBox
            type="text"
            name="email"
            value={form.email ?? ''}
            onChange={onChange}
          />
          <MessageBox messages={errors.email} color="danger" />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호')}</dt>
        <dd>
          <InputBox
            type="password"
            name="password"
            value={form.password ?? ''}
            onChange={onChange}
          />
          <MessageBox messages={errors.password} color="danger" />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호_확인')}</dt>
        <dd>
          <InputBox
            type="password"
            name="confirmPassword"
            value={form.confirmPassword ?? ''}
            onChange={onChange}
          />
          <MessageBox messages={errors.confirmPassword} color="danger" />
        </dd>
      </dl>
      <dl>
        <dt>{t('회원명')}</dt>
        <dd>
          <InputBox
            type="text"
            name="userName"
            value={form.userName ?? ''}
            onChange={onChange}
          />
          <MessageBox messages={errors.userName} color="danger" />
        </dd>
      </dl>
      <dl>
        <dt>{t('휴대전화번호')}</dt>
        <dd>
          <InputBox
            type="text"
            name="mobile"
            value={form.mobile ?? ''}
            onChange={onChange}
          />
          <MessageBox messages={errors.mobile} color="danger" />
        </dd>
      </dl>
      <dl>
        <dt>{t('프로필_이미지')}</dt>
        <dd>
          <ImageUpload gid="testgid">{t('변경하기')}</ImageUpload>
        </dd>
      </dl>
      <div className="terms-agree" onClick={onToggle}>
        {form.agree ? <FaCheckSquare /> : <FaRegCheckSquare />}
        {t('회원가입_약관에_동의합니다.')}

        <MessageBox messages={errors.agree} color="danger" />
      </div>

      <ButtonGroup width={450}>
        <BigButton type="button" color="light" onClick={onReset}>
          {t('다시입력')}
        </BigButton>
        <BigButton type="submit" color="dark">
          {t('가입하기')}
        </BigButton>
      </ButtonGroup>
    </FormBox>
  );
};

export default React.memo(JoinForm);
