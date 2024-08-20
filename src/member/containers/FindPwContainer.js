import React, { useState, useCallback } from 'react';
import FindPwForm from '../components/FindPwForm';

const FindPwContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <FindPwForm
      form={form}
      onChange={onChange}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(FindPwContainer);
