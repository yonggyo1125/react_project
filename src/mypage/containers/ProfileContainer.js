import React, { useEffect, useContext, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import UserInfoContext from '../../member/modules/UserInfoContext';
import ProfileForm from '../components/ProfileForm';

const UserInfoContainer = () => {
  const {
    states: { userInfo },
    actions: { setUserInfo },
  } = useContext(UserInfoContext);
  const userData = userInfo;
  delete userData.password;
  const [form, setForm] = useState(userData);

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return <ProfileForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default React.memo(UserInfoContainer);
