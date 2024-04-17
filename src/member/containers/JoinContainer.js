import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import JoinForm from '../components/JoinForm';

const JoinContainer = () => {
  const [form, setForm] = useState({
    agree: false,
  });

  const { t } = useTranslation();

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
  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const onToggle = useCallback(() => {
    setForm((form) => ({ ...form, agree: !form.agree }));
  }, []);

  return (
    <JoinForm
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
      onToggle={onToggle}
    />
  );
};

export default React.memo(JoinContainer);
