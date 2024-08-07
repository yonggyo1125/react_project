import React, { useContext } from 'react';
import loadable from '@loadable/component';
import UserInfoContext from '../modules/UserInfoContext';

const UnAuthorized = loadable(() => import('../../commons/pages/UnAuthorized'));

const GuestOnlyContainer = ({ children }) => {
  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  return isLogin ? <UnAuthorized /> : children;
};

export default React.memo(GuestOnlyContainer);
