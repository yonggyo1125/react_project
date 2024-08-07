import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import cookies from 'react-cookies';
import UserInfoContext from '../modules/UserInfoContext';

const Logout = () => {
  const {
    actions: { setUserInfo, setIsLogin },
  } = useContext(UserInfoContext);
  cookies.remove('token', { path: '/' });
  setUserInfo(null);
  setIsLogin(false);

  return <Navigate to="/member/login" replace={true} />;
};

export default React.memo(Logout);
