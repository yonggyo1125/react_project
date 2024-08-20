import React, { useState, useCallback } from 'react';
import FindIdForm from '../components/FindIdForm';

const FindIdContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <FindIdForm
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(FindIdContainer);
