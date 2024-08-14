import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import UserInfoContext from '../modules/UserInfoContext';
import loadable from '@loadable/component';

const LoginPage = loadable(() => import('../pages/Login'));

const MemberOnlyContainer = ({ children }) => {
  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  const [searchParams] = useSearchParams();
  if (!isLogin && !searchParams.get('redirectUrl')) {
    searchParams.append('redirectUrl', window.location.href);
  }

  return isLogin ? children : <LoginPage />;
};

export default React.memo(MemberOnlyContainer);
