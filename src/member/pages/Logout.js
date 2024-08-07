import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cookies from 'react-cookies';
import UserInfoContext from '../modules/UserInfoContext';

const Logout = () => {
  const {
    states: { isLogin },
    actions: { setUserInfo, setIsLogin },
  } = useContext(UserInfoContext);
  cookies.remove('token', { path: '/' });
  setUserInfo(null);
  setIsLogin(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/member/login', { replace: true });
    }
  }, [isLogin, navigate]);

  return <></>;
};

export default React.memo(Logout);
