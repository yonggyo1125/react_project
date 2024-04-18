import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/LoginForm';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);
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
