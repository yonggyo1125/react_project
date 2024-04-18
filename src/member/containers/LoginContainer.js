import React, { useState, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import UserInfoContext from '../modules/UserInfoContext';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [searchParams] = useSearchParams();

  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    actions: { setIsLogin, setUserInfo },
  } = useContext(UserInfoContext);

  /**
   * 로그인 처리
   * 1. 데이터 검증
   *    1) 필수 항목 체크 - 이메일, 비밀번호
   *    2) 이메일로 가입된 회원인지 체크
   *    3) 비밀번호가 일치하는지 체크
   *
   * 2. 로그인 처리 : 회원정보를 사이트 전역에 유지
   * 3. 후속 처리 : 회원 전용 서비스 URL로 이동
   *
   */
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false;

      /* 데이터 검증 - 필수 항목 체크 S */
      const requiredFields = {
        email: t('이메일을_입력_하세요.'),
        password: t('비밀번호를_입력_하세요.'),
      };

      for (const [field, msg] of Object.entries(requiredFields)) {
        if (!form[field] || !form[field].trim()) {
          _errors[field] = _errors[field] || [];
          _errors[field].push(msg);
          hasErrors = true;
        }
      }
      /* 데이터 검증 - 필수 항목 체크 E */

      setErrors(_errors);

      if (hasErrors) {
        // 검증 실패이면 로그인 처리 X
        return;
      }

      // 로그인 처리
      setIsLogin(true);
      setUserInfo({ email: 'user01@test.org', name: '사용자01' });

      /**
       * 후속 처리 : 회원 전용 서비스 URL로 이동
       * 예) /member/login?redirectURL=로그인 이후 이동할 경로
       *
       */
      const redirectURL = searchParams.get('redirectURL') || '/';
      navigate(redirectURL, { replace: true });
    },
    [t, form, searchParams, navigate],
  );

  const onChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  return (
    <LoginForm
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
      errors={errors}
    />
  );
};

export default React.memo(LoginContainer);
