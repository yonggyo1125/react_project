import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { apiJoin } from '../apis/apiJoin';
import JoinForm from '../components/JoinForm';

const JoinContainer = () => {
  // 양식 데이터
  const [form, setForm] = useState({
    agree: false,
  });

  // 양식 항목별 에러 메세지
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  const navigate = useNavigate();

  /**
   * 회원 가입 처리
   *
   * 1. 데이터 검증
   *    1) 필수 항목 체크 - 이메일, 비밀번호, 비밀번호 확인, 회원명, 약관동의
   *    2) 이메일 중복 여부, 이메일 형식 체크
   *    3) 비밀번호 복잡성 체크
   *    4) 비밀번호와 비밀번호 확인 일치 여부
   *
   * 2. 가입 처리 - 영구 저장
   * 3. 로그인 페이지 이동
   */
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false; // 에러 유무

      /* 데이터 검증 - 필수 항목 체크 S */
      const requiredFields = {
        email: t('이메일을_입력하세요.'),
        password: t('비밀번호를_입력하세요.'),
        confirmPassword: t('비밀번호를_확인하세요.'),
        userName: t('회원명을_입력하세요.'),
        agree: t('회원가입_약관에_동의하세요.'),
      };

      for (const [field, msg] of Object.entries(requiredFields)) {
        // !form[field] - null, undefined, '' 체크, !form[field].trim() //  - '    '
        if (
          !form[field] ||
          (typeof form[field] === 'string' && !form[field].trim())
        ) {
          _errors[field] = _errors[field] || [];
          _errors[field].push(msg);
          hasErrors = true;
        }
      }

      /* 데이터 검증 - 필수 항목 체크 E */

      /* 데이터 검증 - 비밀번호와 비밀번호 확인 일치 여부 */
      if (
        form.password &&
        form.confirmPassword &&
        form.password !== form.confirmPassword
      ) {
        _errors.confirmPassword = _errors.confirmPassword || [];
        _errors.confirmPassword.push(t('비밀번호가_정확하지_않습니다.'));
        hasErrors = true;
      }

      if (hasErrors) {
        setErrors(_errors);
        return;
      }

      /* 가입처리 S */
      apiJoin(form)
        .then(() => {
          /* 가입완료 후 로그인 페이지 이동 */
          navigate('/member/login', { replace: true }); // replace: true -> 방문기록 X
        })
        .catch((err) => {
          console.log(err);
          // 검증 실패, 가입 실패
          const messages =
            typeof err.message === 'string'
              ? { global: [err.message] }
              : err.message;

          for (const [field, _messages] of Object.entries(messages)) {
            _errors[field] = _errors[field] ?? [];
            _errors[field].push(_messages);
          }
          setErrors({ ..._errors });
        });

      /* 가입처리 E */
    },
    [t, form, navigate],
  );

  const onChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const onToggle = useCallback(() => {
    setForm((form) => ({ ...form, agree: !form.agree }));
  }, []);

  const onReset = useCallback(() => setForm({ agree: false }), []);

  return (
    <JoinForm
      form={form}
      errors={errors}
      onSubmit={onSubmit}
      onChange={onChange}
      onToggle={onToggle}
      onReset={onReset}
    />
  );
};

export default React.memo(JoinContainer);
