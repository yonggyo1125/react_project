import React, { useContext } from 'react';
import UserInfoContext from '../modules/UserInfoContext';
import loadable from '@loadable/component';

const LoginPage = loadable(() => import('../pages/Login'));

const MemberOnlyContainer = ({ children }) => {
  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  return isLogin ? children : <LoginPage />;
};

export default React.memo(MemberOnlyContainer);
