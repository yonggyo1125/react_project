import React, { useState, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import cookies from 'react-cookies';
import LoginForm from '../components/LoginForm';
import UserInfoContext from '../modules/UserInfoContext';
import { apiLogin, apiUser } from '../apis/apiLogin';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [searchParams] = useSearchParams();

  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    actions: { setIsLogin, setUserInfo, setIsAdmin },
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

      apiLogin(form)
        .then((res) => {
          const token = res.data;
          cookies.save('token', token, { path: '/' });

          (async () => {
            try {
              // 로그인 처리
              const user = await apiUser();

              setIsLogin(true); // 로그인 상태
              setUserInfo(user);

              const isAdmin = user.authorities.some(
                (a) => a.authority === 'ADMIN',
              );
              setIsAdmin(isAdmin); // 관리자 여부

              /**
               * 후속 처리 : 회원 전용 서비스 URL로 이동
               * 예) /member/login?redirectURL=로그인 이후 이동할 경로
               *
               */
              const redirectURL = searchParams.get('redirectUrl') || '/';
              navigate(redirectURL, { replace: true });
            } catch (err) {
              console.error(err);
            }
          })();
        })
        .catch((err) => {
          _errors.global = _errors.global ?? [];
          _errors.global.push(err.message);
          setErrors({ ..._errors });
        });
    },
    [t, form, searchParams, navigate, setIsLogin, setUserInfo],
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
