import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaCheckSquare, FaRegCheckSquare } from 'react-icons/fa';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import InputBox from '../../commons/components/InputBox';
import MessageBox from '../../commons/components/MessageBox';
import FileUpload from '../../commons/components/FileUpload';
import ProfileImage from './ProfileImage';

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

const EmailVerificationBox = styled.div`
  .rows {
    display: flex;
    align-items: center;
    button {
      width: 160px;
      height: 40px;
    }
  }

  .rows:last-of-type {
    span {
      width: 100px;
      text-align: center;
    }
    button {
      width: 80px;
    }

    button + button {
      margin-left: 5px;
    }
  }
`;

const JoinForm = ({
  form,
  onSubmit,
  onChange,
  onToggle,
  onReset,
  onSendAuthCode,
  onReSendAuthCode,
  onVerifyAuthCode,
  errors,
  fileUploadCallback,
  fileDeleteCallback,
}) => {
  const { t } = useTranslation();
  return (
    <FormBox autoComplete="off" onSubmit={onSubmit}>
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>
          <EmailVerificationBox>
            <div className="rows">
              <InputBox
                type="text"
                name="email"
                value={form.email ?? ''}
                onChange={onChange}
                readOnly={
                  form.emailVerified ||
                  (form.authCount > 0 && form.authCount < 180)
                }
              />
              {!form.emailVerified && form.authCount > 0 && (
                <button
                  type="button"
                  onClick={onSendAuthCode}
                  disabled={form.authCount < 180 && form.authCount > 0}
                >
                  {t('인증코드_전송')}
                </button>
              )}
            </div>
            {form.emailVerified ? (
              <MessageBox color="primary">
                {t('확인된_이메일_입니다.')}
              </MessageBox>
            ) : (
              <div className="rows">
                {form.authCount > 0 && (
                  <InputBox
                    type="text"
                    name="authNum"
                    placeholder={t('인증코드_입력')}
                    onChange={onChange}
                  />
                )}
                <span>{form.authCountMin}</span>
                <button type="button" onClick={onVerifyAuthCode}>
                  {t('확인')}
                </button>
                <button type="button" onClick={onReSendAuthCode}>
                  {t('재전송')}
                </button>
              </div>
            )}
          </EmailVerificationBox>
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
          {form.profile && (
            <ProfileImage
              items={form.profile}
              width="250px"
              height="250px"
              radius="5px"
              onDelete={fileDeleteCallback}
            />
          )}
          <FileUpload
            width={150}
            color="primary"
            gid={form.gid}
            imageOnly={true}
            callback={fileUploadCallback}
          >
            {t('이미지_업로드')}
          </FileUpload>
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
